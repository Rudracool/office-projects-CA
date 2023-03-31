/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/

// Address.js
// ----------
// Handles fetching, creating and updating addresses
// @module Address
define('Address.Model', [
    'SC.Model',
    'SC.Models.Init',

    'Backbone.Validation',
    'underscore',
    'Configuration'
], function (
    SCModel,
    ModelsInit,

    BackboneValidation,
    _,
    Configuration
) {
    let countries;
    const states = {};

    // @class Address.Model Defines the model used by the Address frontent module.
    // @extends SCModel
    return SCModel.extend({
        name: 'Address',

        // @property validation
        validation: {
            addressee: {
                required: true,
                msg: 'Full Name is required'
            },
            addr1: {
                required: true,
                msg: 'Address is required'
            },
            country: {
                required: true,
                msg: 'Country is required'
            },
            state: function (value, attr, computedState) {
                const selected_country = computedState.country;

                if (selected_country) {
                    if (!states[selected_country]) {
                        states[selected_country] = ModelsInit.session.getStates([selected_country]);
                    }

                    if (selected_country && states[selected_country] && !value) {
                        return 'State is required';
                    }
                } else {
                    return 'Country is required';
                }
            },
            city: {
                required: true,
                msg: 'City is required'
            },
            zip: function (value, attr, computedState) {
                const selected_country = computedState.country;
                countries = countries || ModelsInit.session.getCountries();

                if (
                    (!selected_country && !value) ||
                    (selected_country &&
                        countries[selected_country] &&
                        countries[selected_country].isziprequired === 'T' &&
                        !value)
                ) {
                    return 'State is required';
                }
            },
            phone: function (value) {
                if (value) {
                    const regex = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$');
                    if (!regex.test(value)) {
                        return 'Phone Number is invalid';
                    }
                } else if (
                    Configuration.get('addresses') &&
                    Configuration.get('addresses.isPhoneMandatory')
                ) {
                    return 'Phone Number is required';
                }
            }
        },

        isValid: function (data) {
            data = this.unwrapAddressee(_.clone(data));

            const validator = _.extend(
                {
                    validation: this.validation,
                    attributes: data
                },
                BackboneValidation.mixin
            );

            validator.validate();
            return validator.isValid();
        },

        // @method wrapAddressee
        // our model has "fullname" and "company" insted of  the fields "addresse" and "attention" used on netsuite.
        // this function prepare the address object for sending it to the frontend
        // @param {Object} address
        // @returns {Object} address
        wrapAddressee: function (address) {
            if (address.attention && address.addressee) {
                address.fullname = address.attention;
                address.company = address.addressee;
            } else {
                address.fullname = address.addressee;
                address.company = null;
            }

            delete address.attention;
            delete address.addressee;


            //  if(address.addr3 !== '' && address.addr3 !== null && address.addr3 !== undefined)
            //  {
            //      if(address.addr3.indexOf('-T') != -1){
            //         address.isAdded = true;
            //      }
            //     //  if(address.addr3.indexOf('undefined') != -1){
            //     //     address.addr3 = null; 
            //     //  }
            //  }
            //  console.log("address",JSON.stringify(address));

            return address;
        },

        // @method unwrapAddressee
        // @param {Object} address
        // @returns {Object} address
        unwrapAddressee: function (address) {
            if (address.company && address.company.trim().length > 0) {
                address.attention = address.fullname;
                address.addressee = address.company;
            } else {
                address.addressee = address.fullname;
                address.attention = null;
            }

            delete address.fullname;
            delete address.company;
            delete address.check;
            // if(address.addr3 !== '' && address.addr3 !== null && address.addr3 !== undefined)
            // {
            //     if(address.addr3.indexOf('-T') != -1){
            //        address.isAdded = true;
            //     }
            //     if(address.addr3.indexOf('undefined') != -1){
            //        address.addr3 = null; 
            //     }
            // }

            return address;
        },

        // @method get
        // @param {Number} id
        // @returns {Object} address
        get: function (id) {
            // @class Address.Model.Attributes
            // @property {String} company
            // @property {String} fullname
            // @property {String} internalid
            // @property {String} defaultbilling Valid values are 'T' or 'F'
            // @property {String} defaultshipping Valid values are 'T' or 'F'
            // @property {String} isvalid Valid values are 'T' or 'F'
            // @property {String} isresidential Valid values are 'T' or 'F'
            // @property {String?} addr3
            // @property {String} addr2
            // @property {String} addr1
            // @property {String} country
            // @property {String} city
            // @property {String} state
            // @property {String} phone
            // @property {String} zip
            // @class Address.Model
            console.warn("get-model",JSON.stringify(this.wrapAddressee(ModelsInit.customer.getAddress(id))));
            var addresses = this.wrapAddressee(ModelsInit.customer.getAddress(id));
            var rec = nlapiSearchRecord('customer',null,['internalid','anyof',nlapiGetUser()],[new nlobjSearchColumn('addressinternalid','address'),new nlobjSearchColumn('custrecord_customaddress','address')]);
            var arry = [];
            for(var i=0 ; i<rec.length ;i++){
                var obj = {};
                obj.id = rec[i].getValue('addressinternalid','address');
                obj.isCustomAddr = rec[i].getValue('custrecord_customaddress','address');
                arry.push(obj);
            }
            console.warn("get-arry-model",JSON.stringify(arry));
            _.each(arry,function(arryVal){
                console.warn("get-model-arryVal",JSON.stringify(arryVal));
                console.warn("get-model-addrid",addresses.internalid);
                console.warn("get-model-matched",(arryVal.id == addresses.internalid));
               if(arryVal.id == addresses.internalid)
               {
                console.warn("get-model-iscustom",arryVal.isCustomAddr);
                 addresses.isCustomAddr = arryVal.isCustomAddr;
               }
            })
            console.warn("get-model-addresses",JSON.stringify(addresses));
            return addresses;
        },

        // @method getDefaultBilling
        // @returns {Object} default billing address
        getDefaultBilling: function () {
            return _.find(ModelsInit.customer.getAddressBook(), function (address) {
                return address.defaultbilling === 'T';
            });
        },

        // @method getDefaultShipping
        // @returns {Object} default shipping address
        getDefaultShipping: function () {
            return _.find(ModelsInit.customer.getAddressBook(), function (address) {
                return address.defaultshipping === 'T';
            });
        },

        // @method list
        // @returns {Array<Object>} all user addresses
        list: function () {
            const self = this;

            var addresses = _.map(ModelsInit.customer.getAddressBook(), function (address) {
                return self.wrapAddressee(address);
            });
            console.warn('addresses',JSON.stringify(addresses));
            
            return addresses;
        },

        // @method update
        // updates a given address
        // @param {String} id
        // @param {String} data
        // @returns undefined
        update: function (id, data) {
            data = this.unwrapAddressee(data);
            console.warn("update1", JSON.stringify(data))
            // validate the model
            this.validate(data);
            data.internalid = id;
            console.warn("update2", JSON.stringify(data));
            return ModelsInit.customer.updateAddress(data);
        },

        // @method create
        // creates a new address
        // @param {Address.Data.Model} data
        // @returns {String} key of the new address
        create: function (data) {
            data = this.unwrapAddressee(data);
            // validate the model
            this.validate(data);
            console.warn("this.data|create", JSON.stringify(data));
            
                console.warn('if')
                var record = nlapiLoadRecord('customer', nlapiGetUser(), { recordmode: 'dynamic' });
                //Add first line to sublist   
                record.selectNewLineItem('addressbook');
                record.setCurrentLineItemValue('addressbook', 'isresidential', data.isresidential);
                //create address subrecord
                var subrecord = record.createCurrentLineItemSubrecord('addressbook', 'addressbookaddress');


                //set subrecord fields
                subrecord.setFieldValue('country', data.country); //Country must be set before setting the other address fields
                subrecord.setFieldValue('company', data.company);
                subrecord.setFieldValue('addressee', data.addressee);
                subrecord.setFieldValue('addrphone', data.phone);
                subrecord.setFieldValue('addr1', data.addr1);
                subrecord.setFieldValue('addr2', data.addr2);
                subrecord.setFieldValue('city', data.city);
                subrecord.setFieldValue('zip', data.zip);
                if (data.country == 'US' || data.country == 'CA' || data.country == 'AU') {
                    subrecord.setFieldValue('dropdownstate', data.state);
                }
                else {
                    subrecord.setFieldValue('state', data.state);
                }
                subrecord.setFieldValue('custrecord_customaddress', "T");

                // if the address is not in U.S., Canada, or Australia, use
                // state instead of dropdownstate. For example,
                // subrecord.setFieldValue('state', 'BY');
                // for Bavaria, Germany

                //commit subrecord and line item
                subrecord.commit();

                record.commitLineItem('addressbook');


                //submit record
                var x = nlapiSubmitRecord(record, false, true);
                var custRec1 = nlapiLoadRecord('customer', nlapiGetUser(), { recordmode: 'dynamic' })
                var addrCount = custRec1.getLineItemCount('addressbook');
                var addrID = custRec1.getLineItemValue('addressbook', 'internalid', Number(addrCount));
                console.warn('addrID', addrID);
                return addrID;
        
       
                //return ModelsInit.customer.addAddress(data);
            

            // return ModelsInit.customer.addAddress(data);
        },

        // @method remove
        // removes a given address
        // @param {String} id
        // @returns undefined
        remove: function (id) {
            return ModelsInit.customer.removeAddress(id);
        }
    });
});

// @class Address.Data.Model This is the model to send address to the backend
