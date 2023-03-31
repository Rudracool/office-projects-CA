/// <amd-module name="TrackAddress"/>

// import * as _ from 'underscore';
// import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
// import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
// import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
// import SessionStorageHandler =  require('../../../Commons/Utilities/JavaScript/SessionStorageHandler');
// import TrackAddressModel = require('./TrackAddress.Model');
// // @class TrackAddress @extends ApplicationModule
export = {
    mountToApp: function(application) {
		
// 		var layout = application.getComponent('Layout');
// 		var profileModel = ProfileModel.getInstance();
// 		var trackAddrModel = new TrackAddressModel();
// 		console.log(layout);
//         var self = this;
		
// 		profileModel.on('change',function(profile){
			
// 			var model = LiveOrderModel.getInstance();

// 			if(profile.get('isLoggedIn') == 'T'){
				
				
// 				var addr_session = SessionStorageHandler.get('addr_session');
// 				var addrObj = {};
				
// 				if(addr_session){

// 					try {
// 						var sessionStr = window.atob(addr_session);
// 						addrObj = JSON.parse(sessionStr);
						
// 					} 
// 					catch(e) {
// 						addrObj = {};
// 					}
// 				}
				
// 				if(addrObj['custid'] != profile.get('internalid')){
					
// 					var defaultbillingAddress = '';
// 					var defaultshippingAddress = '';
				
// 					var addressIds = profile.get('addresses').map(function(model:any){
						
// 						if(model.get('defaultbilling') == "T"){
// 							defaultbillingAddress = model.get('internalid');
// 						}
// 						if(model.get('defaultshipping') == "T"){
// 							defaultshippingAddress = model.get('internalid');
// 						}
						
// 						return model.get('internalid');
// 					});
				
// 					addrObj = {
// 						'custid': profile.get('internalid'),
// 						'addrIds': addressIds.toString(),
// 						'defaultbillAddress': defaultbillingAddress,
// 						'defaultshipAddress': defaultshippingAddress
// 						//'defaultShippingItem': application.defaultShippingItem
// 					};
// 					SessionStorageHandler.set('addr_session', window.btoa( JSON.stringify(addrObj) ) );
				
					
// 				}
// 				trackAddrModel.save(addrObj);
				
				
				
// 			}
// 			console.log(addrObj)
// 			var cart = application.getComponent('Cart');
			
// 			cart.on('afterSubmit', function(model:any) {
				
// 				var confirmation = _.has(model,'confirmation')? model['confirmation'] : {};
				
// 				trackAddrModel.save({'soId': confirmation['internalid']});
				
// 				SessionStorageHandler.remove('addr_session');
				
// 			});
// 		});
		
        
   }
};
