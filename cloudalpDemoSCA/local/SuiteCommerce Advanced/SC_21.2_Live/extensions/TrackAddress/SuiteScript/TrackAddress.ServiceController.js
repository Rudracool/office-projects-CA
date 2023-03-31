
define(
	'TrackAddress.ServiceController'
,	[
		'ServiceController'
	,	'TrackAddress.Model'
	,	'underscore'
	]
,	function(
		ServiceController
	,	TrackAddressModel
	,	_
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'TrackAddress.ServiceController'
			
		,	get: function get()
			{
				
			},

			post: function() {
				
				return TrackAddressModel.track(this.data);
			 
			}

		});
	}
);