// @module Asu.AdvancedSignUp.AdvancedSignUpModule
define('Asu.AdvancedSignUp.AdvancedSignUpModule.View'
,	[
	'asu_advancedsignup_advancedsignupmodule.tpl'

	,'login_register_register.tpl'

	,'Asu.AdvancedSignUp.AdvancedSignUpModule.Model'
	
	,	'Asu.AdvancedSignUp.AdvancedSignUpModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	asu_advancedsignup_advancedsignupmodule_tpl

	,	login_register_register_tpl

	,	AdvancedSignUpModuleModel
	
	,	AdvancedSignUpModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Asu.AdvancedSignUp.AdvancedSignUpModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: asu_advancedsignup_advancedsignupmodule_tpl

	,	initialize: function (options) {


		// this.model = options.model || new AccountRegisterModel();
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new AdvancedSignUpModuleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		// 'click [data-action="senddata"]': "senddata",
		'click [data-action="senddata"]': "submitdata",
		// 'submit form': 'submitForm'
		}

	,	bindings: {
		// '[name="firstname"]': 'firstname',
        // '[name="lastname"]': 'lastname',
        // '[name="email"]': 'email',
		},

		// senddata: function(e) {
		// 	e.preventDefault();
		// 	var self = this;
		// 	// this.model.save().done(function(result) {
		// 	// 	self.message = result.message;
		// 	// 	self.render();
		// 	// });

		// 	var model = new AdvancedSignUpModuleModel();   
        //          var  data = {
        //                     subject : "Custom Quote  Details",
        //                     author:"116",
        //                     recipient: emailid,
        //                     body: self.ItemstoMail,
        //                 }
                
        //         model.save(data, {
        //             success: function (model, response) {
        //                 if(response == true){

        //                 $('.status-msg').html('<div class="alert alert-success">Quote has been Emailed successfully</div>').css('color', 'green');
                        
        //                 setTimeout(function(){    
        //                 $('.modal-backdrop').remove();
        //                 $('.modal').modal('hide').fadeIn();
        //                     self.render();  
        //                 }, 1000);
        //             }else{
        //                     console.log("model",model)
        //                     console.log("response",response)
        //                     // $('.status-msg').html('<div class="alert alert-danger">Please enter a valid email address</div>').css('color', 'red');
        //                 }
        //             },
        //             error: function (model, response) {
        //                 console.log(" Error model",model);
        //                 console.log(" Error response",response);
        //                 $('.status-msg').html('<div class="alert alert-danger"> Quote has not been Emailed</div>').css('color', 'red');
        //             }
        //         });
		// },
	
		submitdata: function(e, model, props) {
        e.preventDefault();
        
		var data = jQuery(e.target).closest('form').serializeObject();
        
		console.log("DATA", data)
        
		var model = new AdvancedSignUpModuleModel();   
                //  var  data = {
                //             subject : "Custom Quote  Details",
                //             author:"116",
                //             recipient: emailid,
                //             body: self.ItemstoMail,
                //         }

				console.log("MODEL",model);
                
                model.save(data, {
                    success: function (model, response) {
                        if(_.has(response,'id')){

                        $('.status-msg').html('<div class="alert alert-success">A Lead Record has been created successfully</div>').css('color', 'green');
                        
                        setTimeout(function(){    
                        $('.modal-backdrop').remove();
                        $('.modal').modal('hide').fadeIn();
                            self.render();  
                        }, 1000);
                    }else{
                            console.log("model",model)
                            console.log("response",response)
                            $('.status-msg').html('<div class="alert alert-danger">Email already Exists </div>').css('color', 'red');
                        }
                    },
                    error: function (model, response) {
                        console.log(" Error model",model);
                        console.log(" Error response",response);
                        $('.status-msg').html('<div class="alert alert-danger"> Failed</div>').css('color', 'red');
                    }
                });
         

        // const loggers = Loggers.getLogger();
		// console.log("loggers", loggers);	
        // const actionId = loggers.start('Customer Registration');

        // const self = this;
        // const data = (jQuery(e.target).closest('form')).serializeObject();

        // return this.cancelableTrigger('before:LoginRegister.register', data).then(function() {
        //     const promise = self.saveForm(e, model, props);

        //     if (promise) {
        //         promise.done(() => {
        //             loggers.end(actionId, {
        //                 operationIds: self.model.getOperationIds(),
        //                 status: 'success'
        //             });
        //         });
        //     }
        // });
    },

	 	childViews: {

		}

		//@method getContext @return Asu.AdvancedSignUp.AdvancedSignUpModule.View.Context
	,	getContext: function getContext()
		{
			console.log("ASU");
			//@class Asu.AdvancedSignUp.AdvancedSignUpModule.View.Context
			this.message = this.message || 'advanced sign up!!'
			return {
				message: this.message,
				advancesignup:"true"
			};
		}
	});
});
