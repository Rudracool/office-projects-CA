define('PreferredDelivery.PreferredDelivery.View'
, [
    'Wizard.Module'

  , 'cloudalp_preferreddeliverydate_preferreddeliverydate.tpl'
  ]
, function (
    WizardModule

  ,cloudalp_preferreddeliverydate_preferreddeliverydate_tpl
  )
{
  'use strict';
 // testing changes 
  // We have to use the Wizard.Module class because it is special for the checkout
  return WizardModule.extend({
    template:cloudalp_preferreddeliverydate_preferreddeliverydate_tpl
  , getContext: function getContext()
    {	 
      return {
        isReview: this.step.step_url == 'review'
      };
    }
  });
});