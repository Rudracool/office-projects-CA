// @module Demo.RequestShippingAddress.RequestShippingAddressModule
define('Demo.RequestShippingAddress.RequestShippingAddressModule.View'
,	[
	'demo_requestshippingaddress_requestshippingaddressmodule.tpl'
	
	// ,	'Demo.RequestShippingAddress.RequestShippingAddressModule.SS2Model'

	,   'Demo.RequestShippingAddress.RequestShippingAddressModule.Model'

	,	'Backbone'

	,  'SC.Configuration'

	,  'Profile.Model'

	, 
    ]
, function (
	demo_requestshippingaddress_requestshippingaddressmodule_tpl
	
	// ,	RequestShippingAddressModuleSS2Model

	,   RequestShippingAddressModuleModel
	
	,	Backbone

	,  Configuration

	,  ProfileModel
)
{
    'use strict';

	// @class Demo.RequestShippingAddress.RequestShippingAddressModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: demo_requestshippingaddress_requestshippingaddressmodule_tpl


	,	initialize: function (options) {
		var self = this;
		this.profile =	ProfileModel.getInstance();
			console.log("view profile",self.profile);
		
		// ProfileModel.getInstance().then(function(profile) {
		
		// })
		console.log("options",options);
		console.log("ENvi",SC.ENVIRONMENT.companyId);

		}



	,	events: {
			'click [data-action="requestchange"]': 'changeshippingaddress',
			'click [data-action="requestcreate"]': 'createshippingaddress'
		}

	,	bindings: {
		}

	,	changeshippingaddress: function(e) {
		var self = this;
		var address = $('[name="address"]').val();

		console.log("Address",address);
		var model = new RequestShippingAddressModuleModel();

		var data = {};
		data.author = Configuration.RequestShippingAddressModule.eAuthor
		data.recipient = Configuration.RequestShippingAddressModule.eRecipient
		data.subject = "Request to update shipping address"
		data.body = `
		<p> ${address} </p><br/>
		<p> Customer Reference :  <a href="https://${SC.ENVIRONMENT.companyId}.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=${self.profile.get('internalid')}">Click Here </a>
		</p>`
		console.log("view profile",self.profile.get('email'));
		model.save(data, {
			success: function (model, response) {
				if(response.status == true){
					$('.change-status').html('<div class="alert alert-success" role="alert"> Email Sent Successfully </div>').css('color', 'green');;
				}

				setTimeout(function(){
					$('.change-status').html('');
				}, 3000);
			},
			error: function (model, response) {
				$('.change-status').html('<div class="alert alert-success" role="alert"> Email Failed to Send </div>').css('color', 'green');
				setTimeout(function(){
					$('.change-status').html('');
				}, 3000);
			}
		});
	}

	//request to create a shipping address if no address is available
	// ,	createshippingaddress: function(e) {
	// 	var self = this;

	// 	var model = new RequestShippingAddressModuleModel();
	// 	var data = {};
	// 	data.author = Configuration.RequestShippingAddressModule.eAuthor
	// 	data.recipient = Configuration.RequestShippingAddressModule.eRecipient
	// 	data.subject = "Request for creating shipping address"
	// 	data.body = `
	// 	<p>This message has been generated to request to create a shipping address</p><br/>
	// 	<p> Customer Reference :  <a href="https://${SC.ENVIRONMENT.companyId}.app.netsuite.com/app/common/entity/custjob.nl?stage=Customer&id=${self.profile.get('internalid')}">Click Here </a>
	// 	</p>`
	// 	model.save(data, {
	// 		success: function (model, response) {
	// 			if(response.status == true){
	// 				$('.create-status').html('<div class="alert alert-success" role="alert"> Email Sent Successfully </div>').css('color', 'green');
	// 			}
	// 			setTimeout(function(){
	// 				$('.create-status').html('');
	// 			}, 3000);
	// 		},
	// 		error: function (model, response) {
	// 			$('.create-status').html('<div class="alert alert-success" role="alert"> Email Failed to Send </div>').css('color', 'green');
	// 			setTimeout(function(){
	// 				$('.create-status').html('');
	// 			}, 3000);
	// 		}
	// 	});

	// }

	, 	childViews: {

		}

		//@method getContext @return Demo.RequestShippingAddress.RequestShippingAddressModule.View.Context
	,	getContext: function getContext()
		{
			//@class Demo.RequestShippingAddress.RequestShippingAddressModule.View.Context
			// this.message = this.message || 'Hello World!!'
			return {
				hidechkout : this.options.container.hideproceedtochkout,
				email:this.profile.get('email')
				// message: this.message

			};
		}
	});
});
