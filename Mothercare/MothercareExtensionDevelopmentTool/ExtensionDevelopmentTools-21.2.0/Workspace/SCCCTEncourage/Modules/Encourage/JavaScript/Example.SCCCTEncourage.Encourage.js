define('Example.SCCCTEncourage.Encourage'
, [
    'Example.SCCCTEncourage.Encourage.View'
  ]
, function
  (
    EncourageView
  )
{
  'use strict'
  // getComponent
  return {
    mountToApp: function mountToApp (container)
    {
      // EncourageView.prototype.application = application;

      container.getComponent('CMS').registerCustomContentType({
        id: 'cct_example_sccctencourage'
      , view: EncourageView,
      options: { container: container },
      });
    }
  }
});