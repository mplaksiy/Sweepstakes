(function(){

   var data = {
        weeklyData:{
            "week01":{
                "startDate":"01/29/2020",
                "endDate":"02/04/2020",
                "weekData":{
                    "week":"Week 01",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY® Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageSrc":"img/week01/pov.jpg",
                        "imageAlt":"Mom runs errands while wearing baby in a Baby Bjorn baby carrier. In-image text reads, Week 01."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add a qualifying BABYBJÖRN product* to your registry and you’ll be automatically entered for a chance to win: ",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY® Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY® Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 1: BABYBJÖRN",
                        "period":"Jan. 29 – Feb. 4, 2020",
                        "paragraph":"BABYBJÖRN baby carriers are soft, airy, and comfy to use for longer babywearing sessions and adventures with your little one. Safely carry baby facing in or out as you bond and explore the world together in style.",
                        "altText":"Mom and Dad take a stroll with baby in a Baby Bjorn carrier."
                    },
                    "qualifying_products":{
                        "product":{
                            "name":"New! BABYBJÖRN Baby Carrier Free in Anthracite",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-baby-carrier-free/5431820?keyword=69325953&color=ANTHRACITE&skuId=69325953"
                        },
                        "product":{
                            "name":"New! BABYBJÖRN Baby Carrier Free in Gray",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-baby-carrier-free/5431820?keyword=69325953&color=SILVER&skuId=69325977"
                        },
                        "product":{
                            "name":"New! BABYBJÖRN Baby Carrier Free in Sage Green (Online Only)",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-baby-carrier-free/5431820?keyword=69325953&color=SAGE%20GREEN&skuId=69325991"
                        },
                        "product":{
                            "name":"BABYBJÖRN Multi-Position Baby Carrier One Air in Black",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-2019-multi-position-baby-carrier-one-air/5243650?keyword=66212263"
                        }                        

                    }
    
                }
            },
            "week02":{
                "startDate":"02/05/2020",
                "endDate":"02/11/2020",
                "weekData":{
                    
                }
            },
            "week03":{
                "startDate":"02/12/2020",
                "endDate":"02/18/2020",
                "weekData":{
                    
                }
            },
            "week04":{
                "startDate":"02/19/2020",
                "endDate":"02/25/2020",
                "weekData":{
                    
                }
            },
            "week05":{
                "startDate":"02/26/2020",
                "endDate":"03/03/2020",
                "weekData":{
                    
                }
            },
            "week06":{
                "startDate":"03/04/2020",
                "endDate":"03/10/2020",
                "weekData":{
                    
                }
            },
            "week07":{
                "startDate":"03/11/2020",
                "endDate":"03/17/2020",
                "weekData":{
                    
                }
            },
            "week08":{
                "startDate":"03/18/2020",
                "endDate":"03/24/2020",
                "weekData":{
                    
                }
            }
        },
        findWeeklyData: function (date){
            Object.keys(data.weeklyData).forEach(function (item) {
                var startDate = new Date(data.weeklyData[item].startDate);
                var endDate = new Date(data.weeklyData[item].endDate);
                var currentDate = date;
    
                if((currentDate >= startDate) && (currentDate <= endDate)){
                    //console.log(item);

                }    
            });    
        },
        findLinkDate:function(){
            var link = window.location.href;
            if(link.search('testingDate=')){
                var date = link.split('testingDate=')[1]
                data.findWeeklyData(new Date(date));
            }
            else{
                data.findWeeklyData(new Date())
            }
        },
        findHero:function(){
           // $('.hero').

        },
        findHowToEnter:function(){

        },
        findLifestyle: function(){

        },
        findQualifyingProducts: function(){

        }
   }

   data.findLinkDate();

    

    




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