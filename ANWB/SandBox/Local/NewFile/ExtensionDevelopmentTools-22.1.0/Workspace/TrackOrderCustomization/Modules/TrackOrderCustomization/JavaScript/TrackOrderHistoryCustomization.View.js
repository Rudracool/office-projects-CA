// @module CA.TrackOrderCustomization.TrackOrderCustomization
define('CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View'
,	[
	'trackorder_details_customization.tpl'
	,	'Backbone'
    ]
, function (
	trackorder_details_customization_tpl
	,	Backbone
)
{
    'use strict';

	// @class CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: trackorder_details_customization_tpl

	,	initialize: function (options) {

			this.model = options.model;
			

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.TrackOrderCustomization.TrackOrderHistoryCustomization.View.Context
			var trackURL = this.model.get('trackingUrl');
            var TrackNumber;
            if(trackURL === null || trackURL == '' || trackURL == undefined){
                TrackNumber = true;
            }else{
                TrackNumber = false;

            }
				
			return {
				trackURL: trackURL,
                isTrackNumber:TrackNumber,
				
			};
		}
	});
});
