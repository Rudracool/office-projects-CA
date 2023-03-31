
//@MODULE TrackAddress

define('TrackAddress.Model'
, [
	'Models.Init'
	, 'SC.Model'
	, 'underscore'
	, 'Application'
]
, function
(
	ModelsInit
	, SCModel
	, _
	, Application
)
{

	'use strict';
	
	var ADDRESS_FROM_CHECKOUT_REC = 'customrecord_address_from_checkout',
		FLD_CUSTOMER =	'custrecord_afc_customer',
		FLD_ADDRESSES =	'custrecord_afc_addresses',
		FLD_SALES_ORDER	= 'custrecord_afc_sales_order',
		FLD_DEFAULT_BILLING = 'custrecord_afc_default_billing',
		FLD_DEFAULT_SHIPPING = 'custrecord_afc_default_shipping'
		//FLD_DEFAULTSHIPPINGITEM = 'custrecord_afc_defaultshippingitem';
	
	return SCModel.extend({

		name: 'TrackAddress.Model'
		
		
	,	track: function(data){
			var returnString = {};
			
			try{
				var custId = nlapiGetUser();
				
				var search = nlapiSearchRecord(ADDRESS_FROM_CHECKOUT_REC,null,[FLD_CUSTOMER,'anyof', custId],null);
				
				if(search && search != null && search.length){
					
					var record = nlapiLoadRecord(ADDRESS_FROM_CHECKOUT_REC, search[0].getId());
					console.warn("if","yes");
				}
				else{
					var	record = nlapiCreateRecord(ADDRESS_FROM_CHECKOUT_REC);
					record.setFieldValue(FLD_CUSTOMER, custId);
					console.warn("else","yes");
				}
				
				if(data.addrIds)
					record.setFieldValue(FLD_ADDRESSES, data.addrIds);
				
				if(data.defaultbillAddress)
					record.setFieldValue(FLD_DEFAULT_BILLING, data.defaultbillAddress);
				
				if(data.defaultshipAddress)
					record.setFieldValue(FLD_DEFAULT_SHIPPING, data.defaultshipAddress);
				
				if(data.soId)
					record.setFieldValue(FLD_SALES_ORDER, data.soId);
				
			/*	if(data.defaultShippingItem)
				record.setFieldValue(FLD_DEFAULTSHIPPINGITEM, data.defaultShippingItem);*/
				
				returnString.recordId = nlapiSubmitRecord(record, true, true);
			}
			catch(e){
				returnString.error = e.toString();
			}
			
			return returnString;
		}
	

		
	});

});
