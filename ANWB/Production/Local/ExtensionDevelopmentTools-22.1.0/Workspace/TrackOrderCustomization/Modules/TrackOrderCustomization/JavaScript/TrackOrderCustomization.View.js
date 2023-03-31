// @module CA.TrackOrderCustomization.TrackOrderCustomization
define('CA.TrackOrderCustomization.TrackOrderCustomization.View'
,	[
	'ca_trackordercustomization_trackordercustomization.tpl'
	,	'Backbone'
    ]
, function (
	ca_trackordercustomization_trackordercustomization_tpl
	,	Backbone
)
{
    'use strict';

	// @class CA.TrackOrderCustomization.TrackOrderCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_trackordercustomization_trackordercustomization_tpl

	,	initialize: function (options) {

			this.model = options.model;
			this.className = options.contentClass;

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.TrackOrderCustomization.TrackOrderCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CA.TrackOrderCustomization.TrackOrderCustomization.View.Context
			var trackURL = this.model.get('trackingUrl');
            var TrackNumber;
            if(trackURL === null || trackURL == '' || trackURL == undefined){
                TrackNumber = true;
            }else{
                TrackNumber = false;
				trackURL = trackURL[0];

            }
			return {
				trackURL: trackURL,
                isTrackNumber:TrackNumber,
				className:this.className
			};
		}
	});
});
