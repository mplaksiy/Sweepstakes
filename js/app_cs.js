(function () {
    if ( typeof window.CustomEvent === "function" ) return false; //If not IE
  
    function CustomEvent ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
     }
  
    CustomEvent.prototype = window.Event.prototype;
  
    window.CustomEvent = CustomEvent;
  })();
  
var BloodHoundVars  = {
    owner: 'BuyBuyBaby',
    pageId: '2019_bbB_RegistrySweeps_ComingSoon',
    convergeId: '2019_bbB_RegistrySweeps_LandingPage',
    brandName: 'Baby_Registry_Sweeps',
    trackingProvider: 'GA'
}


onTrackEvent = function (e) {
    var tagLabel = '';
    if (e.detail.errors > 0) {
        tagLabel = e.detail.errorLabel;
    }
    tagLabel += 'SEND GA TAG: ' + e.detail.label;
    console.log(tagLabel);
};

onTrackingLoad = function (e) { console.log('Tracking loaded'); };


$(document).ready(function(){
    Bloodhound.init();
    document.addEventListener('onBh', onTrackEvent);
    document.addEventListener('onBhErr', onTrackEvent);
    //console.log('LETS GO');
});