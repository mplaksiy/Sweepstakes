(function(){

    if ( typeof window.CustomEvent === "function" ) return false; //If not IE
  
    function CustomEvent ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
     }
  
    CustomEvent.prototype = window.Event.prototype;
  
    window.CustomEvent = CustomEvent;  
  
    var BloodHoundVars  = {
        owner: 'BuyBuyBaby',
        pageId: '2020_BUY_RegistrySweeps_LandingPage',
        convergeId: '72_BUY_Y9635',
        brandName: 'Baby_Registry_Sweeps',
        trackingProvider: 'GA'
    }    


    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    
    onTrackEvent = function (e) {
        var tagLabel = '';
        if (e.detail.errors > 0) {
            tagLabel = e.detail.errorLabel;
        }
        tagLabel += 'GTAG: ' + e.detail.label;
        console.log(tagLabel);
    };
    
    onTrackingLoad = function (e) { console.log('Tracking loaded'); };


    Bloodhound.init();
    document.addEventListener('onBh', onTrackEvent);
    document.addEventListener('onBhErr', onTrackEvent);

})();