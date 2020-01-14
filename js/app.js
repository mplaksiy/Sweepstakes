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
    pageId: '2019_bbB_RegistrySweeps_LandingPage',
    convergeId: '72_BUY_X1514_ bbYRegHouse',
    brandName: 'Baby_Registry_Sweeps',
    trackingProvider: 'GA'
}

var weeks = [
    { 
        num: 1,
        startDate : '01/16/2019',
        endDate : '01/22/2019', 
        guid: '692f4700-1b6c-4b9a-88e6-e64413decfe9', 
        brand : 'Graco',
        img : 'week1-pov.jpg',
        alt:'Baby smiles while sitting in a Graco car seat. In-image text reads, Week 01.'
    },
    { 
        num: 2,
        startDate : '01/23/2019',
        endDate : '01/29/2019', 
        guid: '9cce85ba-1a1f-4f64-a23f-6e844d1f2436', 
        brand : 'Graco',
        img : 'week2-pov.jpg',
        alt : 'Mom holds newborn on her chest. In-image text reads, Week 02.'
    },
    { 
        num: 3,
        startDate : '01/30/2019',
        endDate : '02/05/2019', 
        guid: '8a95851b-ac04-4cef-9501-fecd3d466f8e', 
        brand : 'Graco',
        img : 'week3-pov.jpg',
        alt : 'Smiling mom sits on the couch with her infant and toddler, holding a breast pump by Spectra Baby USA. In-image text reads, Week 03.'
    },
    { 
        num: 4,
        startDate : '02/06/2019',
        endDate : '02/12/2019', 
        guid: '50c7d72d-61bd-4d43-93a1-b7fffd7b5ead', 
        brand : 'Graco',
        img : 'week4-pov.jpg',
        alt : 'Happy couple smiles at each other, while Dad holds their baby close to his chest in a comfy Baby Bjorn Baby Carrier. In-image text reads, Week 04.'
    },
    { 
        num: 5,
        startDate : '02/13/2019',
        endDate : '02/19/2019', 
        guid: '4a9bd824-068d-4bdf-b7e3-20ae39f33162', 
        brand : 'Graco',
        img : 'week5-pov.jpg',
        alt:'Five adorable infants of different ethnicities sit on a bed, wearing carter’s baby clothing. In-image text reads, Week 05.'
    },
    { 
        num: 6,
        startDate : '02/20/2019',
        endDate : '02/26/2019', 
        guid: '6aae8cb6-6c7c-4413-ac5e-c5447b724730', 
        brand : 'Graco',
        img : 'week6-pov.jpg',
        alt : 'Mom holds infant girl while she easily prepares baby food in a Baby Brezza appliance. In-image text reads, Week 06.'
    },
    { 
        num: 7,
        startDate : '02/27/2019',
        endDate : '03/05/2019', 
        guid: 'cc419001-9789-40b4-a7d8-9ea2ecc2b5bc', 
        brand : 'Graco',
        img : 'week7-pov.jpg',
        alt : 'Mom throws away diaper in a Diaper Genie pail while changing baby. In-image text reads, Week 07.'
    },
    { 
        num: 8,
        startDate : '03/06/2019',
        endDate : '03/12/2019', 
        guid: 'bbcdfaa1-c987-4359-830e-039f54037126', 
        brand : 'Graco',
        img : 'week8-pov.jpg',
        alt: 'Mom takes baby for a stroll by a restaurant in her Graco stroller. In-image text reads, Week 08.'
    }
];

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


$(document).ready(function(){
    var currentWeek = 1;
    console.log(dateParts);
    var dateParts = $('#SysInfo').text().split(' ')[2].split('/');
    //console.log(dateParts,((dateParts[0] < 10)? '0'+dateParts[0]:dateParts[0] )+'/'+((dateParts[1] < 10)? '0'+dateParts[1]:dateParts[1] )+'/'+dateParts[2]);
    var today = new Date(((dateParts[0] < 10)? '0'+dateParts[0]:dateParts[0] )+'/'+((dateParts[1] < 10)? '0'+dateParts[1]:dateParts[1] )+'/'+dateParts[2]);
    var guid = null;
    if(getUrlParameter('date')){
        
        today = new Date(getUrlParameter('date'));
        //console.log('HAS DATE',today);
    }

    if(getUrlParameter('guid')){
        guid = getUrlParameter('guid');
    }
    //console.log('today',today);
    //console.log(weeks);
    for(var i in weeks){
        if(guid){
            if(guid === weeks[i].guid){
                //console.log('Its week' + weeks[i].num);
                currentWeek = weeks[i].num;
                $('.pov-img').attr('src', '/BrandPages/buybuybaby/2019/RegistrySweeps/img/Desktop/'+weeks[i].img);
                $('.pov-img').attr('alt', weeks[i].alt);
                $('.pov-img2').attr('src', '/BrandPages/buybuybaby/2019/RegistrySweeps/img/Mobile/'+weeks[i].img);
                $('.pov-img2').attr('alt', weeks[i].alt);
                $('.week'+currentWeek + ' img').attr('src','/BrandPages/buybuybaby/2019/RegistrySweeps/img/Desktop/week-'+currentWeek+'-logo-active.png');
            }
        }else{
            //console.log('1', weeks[i].startDate, weeks[i].endDate);
            var startD = new Date(weeks[i].startDate).getTime();
            var endD = new Date(weeks[i].endDate).getTime();
            var check = today.getTime();
           // console.log('2', startD, endD, check, check > startD && check < endD);
            //is current date between start and end date
           // console.log('3', startD, endD, check)
            if(check >= startD && check <= endD) {
                //console.log('Its week' + weeks[i].num);
                currentWeek = weeks[i].num;
                $('.pov-img').attr('src', '/BrandPages/buybuybaby/2019/RegistrySweeps/img/Desktop/'+weeks[i].img);
                $('.pov-img').attr('alt', weeks[i].alt);
                $('.pov-img2').attr('src', '/BrandPages/buybuybaby/2019/RegistrySweeps/img/Mobile/'+weeks[i].img);
                $('.pov-img2').attr('alt', weeks[i].alt);
                $('.week'+currentWeek + ' img').attr('src','/BrandPages/buybuybaby/2019/RegistrySweeps/img/Desktop/week-'+currentWeek+'-logo-active.png');
            }
        }     
    }
    $('.carousel').carousel({
        interval: false,
        wrap : true
    });

    $('.carousel').carousel(currentWeek-1);
    $('.next').on('click', function(){
        $('.carousel').carousel('next');
    })
    $('.prev').on('click', function(){
        $('.carousel').carousel('prev');
    })

    $('.carousel').on('slide.bs.carousel', function (e) {
        var dir = (e.direction === 'left') ? 'next' : 'prev';
        var tag = Bloodhound.buildTag(dir, 'Slider', 'Button', 'Slide'+(Number(e.from)+1));
        Bloodhound.track(tag, 'Slider');
      })
    Bloodhound.init();
    document.addEventListener('onBh', onTrackEvent);
    document.addEventListener('onBhErr', onTrackEvent);
    //console.log('LETS GO');
});