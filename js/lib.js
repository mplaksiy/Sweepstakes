(function(){
    var weekDataset = "";
    var screenSize = window.screen.width;

   var app = {
        weeklyData:{
            "default":{
                "startDate":"",
                "endDate":"",
                "weekData":{
                    "week":"default",
                    "hero":{
                        "headline":"Our Registry Sweepstakes Has Ended!",
                        "paragraph":"Are you the Grand Prize winner? If so, you'll receive an email on or around March 27, 2020 letting you know the good news. Good luck!<br/><br/> You can continue creating your perfect registry to prepare for your new bundle of joy. Now check out what's new from buybuy BABY<sup>&reg;</sup>.",
                        "imageAlt":"Baby wearing a hat, wrapped in a comfy knitted blanket",
                        "ctaText": "Create your registry"
                    }
    
                }
            },
            "week01":{
                "startDate":"01/29/2020",
                "endDate":"02/04/2020",
                "weekData":{
                    "week":"WEEK<br><span>01</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":"Mom runs errands while wearing baby in a Baby Bjorn baby carrier. In-image text reads, Week 01."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add a qualifying BABYBJÖRN product* to your registry and you’ll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 1: BABYBJÖRN",
                        "period":"Jan. 29 – Feb. 4, 2020",
                        "paragraph":"BABYBJÖRN baby carriers are soft, airy, and comfy to use for longer babywearing sessions and adventures with your little one. Safely carry baby facing in or out as you bond and explore the world together in style.",
                        "imageAlt":"Mom and Dad take a stroll with baby in a Baby Bjorn carrier."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"New! BABYBJÖRN Baby Carrier Free in Anthracite",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-baby-carrier-free/5431820?keyword=69325953&color=ANTHRACITE&skuId=69325953",
                            "metricsTag":"New! BABYBJÖRN Baby Carrier Free in Anthracite"
                        },
                        "product02":{
                            "name":"New! BABYBJÖRN Baby Carrier Free in Gray",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-baby-carrier-free/5431820?keyword=69325953&color=SILVER&skuId=69325977",
                            "metricsTag":"New! BABYBJÖRN Baby Carrier Free in Gray"
                        },
                        "product03":{
                            "name":"New! BABYBJÖRN Baby Carrier Free in Sage Green (Online Only)",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-baby-carrier-free/5431820?keyword=69325953&color=SAGE%20GREEN&skuId=69325991",
                            "metricsTag":"New! BABYBJÖRN Baby Carrier Free in Sage Green (Online Only)"
                        },
                        "product04":{
                            "name":"BABYBJÖRN Multi-Position Baby Carrier One Air in Black",
                            "link":"https://www.buybuybaby.com/store/product/babybj-ouml-rn-reg-2019-multi-position-baby-carrier-one-air/5243650?keyword=66212263",
                            "metricsTag":"BABYBJÖRN Multi-Position Baby Carrier One Air in Black"
                        }                        

                    }
    
                }
            },
            "week02":{
                "startDate":"02/05/2020",
                "endDate":"02/11/2020",
                "weekData":{
                    "week":"WEEK<br><span>02</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":"White evolur crib and matching furniture in a pink nursery. In-image text reads, Week 02."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add a qualifying évolur product* to your registry and you’ll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 2: évolur",
                        "period":"Feb. 5 - 11, 2020",
                        "paragraph":"Bring your nursery dreams to life with European-inspired évolur furniture. Designed to grow with your child from babyhood to beyond, évolur collections offer a unique blend of affordable luxury and simple functionality.",
                        "imageAlt":"Evolur Julienne Crib and matching furniture in a sophisticated grey nursery."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"Aurora 5-in-1 Convertible Crib",
                            "link":"https://www.buybuybaby.com/store/product/evolur-trade-aurora-5-in-1-convertible-crib/5261542",
                            "metricsTag":"Aurora 5-in-1 Convertible Crib"
                        },
                        "product02":{
                            "name":"Julienne 5-in-1 Convertible Crib in Antique Grey Mist",
                            "link":"https://www.buybuybaby.com/store/product/julienne-5-in-1-convertible-crib-in-antique-grey-mist/3346426",
                            "metricsTag":"Julienne 5-in-1 Convertible Crib in Antique Grey Mist"
                        },
                        "product03":{
                            "name":"Belmar 5-in-1 Convertible Curved Top Crib in Weathered White",
                            "link":"https://www.buybuybaby.com/store/product/evolur-trade-belmar-5-in-1-convertible-curved-top-crib-in-weathered-white/5204268?keyword=evolur-belmar-5-in-1-convertible-curved-top-crib-in-weathered-white",
                            "metricsTag":"Belmar 5-in-1 Convertible Curved Top Crib in Weathered White"
                        },
                        "product04":{
                            "name":"Santa Fe 5-in-1 Convertible Crib",
                            "link":"https://www.buybuybaby.com/store/product/santa-fe-5-in-1-convertible-crib/5204428",
                            "metricsTag":"Santa Fe 5-in-1 Convertible Crib"
                        }                        

                    }
                    
                }
            },
            "week03":{
                "startDate":"02/12/2020",
                "endDate":"02/18/2020",
                "weekData":{
                    "week":"WEEK<br><span>03</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":"Mom crouched down to smile at her baby, seated in a Maxi-Cosi stroller. In-image text reads, Week 03."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add a qualifying Maxi-Cosi<sup>&reg;</sup> product* to your registry and you'll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 3: Maxi-Cosi<sup>&reg;</sup>",
                        "period":"Feb. 12 – 18, 2020",
                        "paragraph":"Maxi-Cosi<sup>&reg;</sup> strollers, car seats, and travel systems are fully equipped for all that parenthood has in store! Our products' superior comfort and safety features make your tiny traveler's first ride first class.",
                        "imageAlt":" A family of four happily walks on the airplane runway, pushing their infant in a Maxi-Cosi stroller."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"Maxi-Cosi<sup>&reg;</sup> Lila Modular Stroller in Nomad Black",
                            "link":"https://www.buybuybaby.com/store/product/maxi-cosi-reg-lila-modular-stroller/5283447?keyword=66999126&color=NOMAD%20BLACK&skuId=66999126",
                            "metricsTag":"Maxi-Cosi Lila Modular Stroller in Nomad Black"
                        },
                        "product02":{
                            "name":"Maxi-Cosi<sup>&reg;</sup> Lila Modular Stroller in Nomad Grey",
                            "link":"https://www.buybuybaby.com/store/product/maxi-cosi-reg-lila-modular-stroller/5283447?keyword=66999140&color=NOMAD%20GREY&skuId=66999140",
                            "metricsTag":"Maxi-Cosi Lila Modular Stroller in Nomad Grey"
                        },
                        "product03":{
                            "name":"Maxi-Cosi<sup>&reg;</sup> Zelia Max 5-in-1 Travel System in Nomad Grey",
                            "link":"https://www.buybuybaby.com/store/product/maxi-cosi-reg-zelia-max-5-in1-travel-system/5389529?keyword=68680725&color=GREY&skuId=68680725",
                            "metricsTag":"Maxi-Cosi Zelia Max 5-in-1 Travel System in Nomad Grey"
                        },
                        "product04":{
                            "name":"Maxi-Cosi<sup>&reg;</sup> Lara Ultra Compact Stroller in Nomad Grey",
                            "link":"https://www.buybuybaby.com/store/product/maxi-cosi-reg-lara-ultra-compact-stroller/5216755?keyword=65698099&color=GREY&skuId=65698099",
                            "metricsTag":"Maxi-Cosi Lara Ultra Compact Stroller in Nomad Grey"
                        }                        
        
                    }
                    
                }
            },
            "week04":{
                "startDate":"02/19/2020",
                "endDate":"02/25/2020",
                "weekData":{
                    "week":"WEEK<br><span>04</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":" Baby lounges in a white Gerber onesie. In-image text reads, Week 04."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add $50 worth of qualifying Gerber<sup>&reg;</sup> clothing* to your registry and you'll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 4: Gerber<sup>&reg;</sup>",
                        "period":"Feb. 19 – 25, 2020",
                        "paragraph":"Gerber<sup>&reg;</sup> brings affordable quality and cozy essentials to your newborn's wardrobe. Our 100% cotton Onesies<sup>&reg;</sup> bodysuits and side snap shirts are registry must-haves—perfect for layering and keeping baby comfy!",
                        "imageAlt":" Mom smiles at her happy baby, dressed a white Gerber onesie."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"Gerber Onesies<sup>&reg;</sup> Brand 5-Pack Short Sleeve Bodysuits in White",
                            "link":"https://www.buybuybaby.com/store/product/gerber-onesies-reg-brand-5-pack-short-sleeve-bodysuits-in-white/125232?keyword=gerber-white-onesies",
                            "metricsTag":"Gerber Onesies Brand 5-Pack Short Sleeve Bodysuits in White"
                        },
                        "product02":{
                            "name":"Gerber Onesies<sup>&reg;</sup> Brand 3-Pack Long Sleeve Bodysuits in White",
                            "link":"https://www.buybuybaby.com/store/product/gerber-onesies-reg-brand-3-pack-long-sleeve-bodysuits-in-white/125239?keyword=gerber-white-onesies",
                            "metricsTag":"Gerber Onesies Brand 3-Pack Long Sleeve Bodysuits in White"
                        },
                        "product03":{
                            "name":"Gerber<sup>&reg;</sup> 6-Pack Terry Socks in White",
                            "link":"https://www.buybuybaby.com/store/product/gerber-reg-6-pack-terry-socks-in-white/125501?keyword=gerber-white-socks",
                            "metricsTag":"Gerber 6-Pack Terry Socks in White"
                        },
                        "product04":{
                            "name":"Gerber<sup>&reg;</sup> 2-Pack Side Snap Long Sleeve Shirts in White",
                            "link":"https://www.buybuybaby.com/store/product/gerber-reg-2-pack-side-snap-long-sleeve-shirts-in-white/125243?keyword=gerber-side-snap-shirt",
                            "metricsTag":"Gerber 2-Pack Side Snap Long Sleeve Shirts in White"
                        }                        
        
                    }
                    
                }
            },
            "week05":{
                "startDate":"02/26/2020",
                "endDate":"03/03/2020",
                "weekData":{
                    "week":"WEEK<br><span>05</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":" Mom holds her little girl while making baby food with a Baby Brezza appliance. In-image text reads, Week 05."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add a qualifying Baby Brezza<sup>&reg;</sup> product* to your registry and you'll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 5: Baby Brezza<sup>&reg;</sup>",
                        "period":"Feb. 26 – Mar. 3, 2020",
                        "paragraph":"From instantly making formula bottles to blending homemade baby food, Baby Brezza<sup>&reg;</sup>'s unique appliances make feeding easier! Save 30 minutes a day feeding your baby so you can spend more time bonding with your little one.",
                        "imageAlt":"Baby Brezza One Step Bottle Sterilizer and Dryer."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"Formula Pro<sup>&reg;</sup> Advanced Formula Dispenser",
                            "link":" https://www.buybuybaby.com/store/product/babybrezza-reg-formula-pro-advanced-formula-dispenser/5213316?brandId=869",
                            "metricsTag":"Formula Pro Advanced Formula Dispenser"
                        },
                        "product02":{
                            "name":"One Step<sup>&trade;</sup> Bottle Sterilizer and Dryer",
                            "link":"https://www.buybuybaby.com/store/product/babybrezza-reg-one-step-bottle-sterilizer-and-dryer/1042607892?keyword=42607892",
                            "metricsTag":"One Step Bottle Sterilizer and Dryer"
                        },
                        "product03":{
                            "name":"Safe + Smart Bottle Warmer",
                            "link":" https://www.buybuybaby.com/store/product/baby-brezza-reg-safe-smart-bottle-warmer/1060088727?keyword=60088727",
                            "metricsTag":"Safe + Smart Bottle Warmer"
                        },
                        "product04":{
                            "name":"One Step<sup>&trade;</sup> Food Maker Deluxe",
                            "link":" https://www.buybuybaby.com/store/product/baby-brezza-reg-one-step-food-maker-deluxe/1060088734?keyword=60088734",
                            "metricsTag":"One Step Food Maker Deluxe"
                        }                        
        
                    }
                    
                }
            },
            "week06":{
                "startDate":"03/04/2020",
                "endDate":"03/10/2020",
                "weekData":{
                    "week":"WEEK<br><span>06</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":" Baby happily bathes in the OXO Tot Splash and Store bathtub. In-image text reads, Week 06."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add $50 worth of qualifying OXO Tot<sup>&reg;</sup> products* to your registry and you'll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 6: OXO Tot<sup>&reg;</sup>",
                        "period":"Mar. 4 – 10, 2020",
                        "paragraph":"OXO Tot<sup>&reg;</sup> designs award-winning, problem-solving essentials so you can care for your little one with confidence and ease. From a one-handed wipes dispenser to a grow-with-me bathtub, our products let parents focus on the fun stuff.",
                        "imageAlt":" Baby reaches for wipes dispenser in the OXO Tot Diaper Caddy."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"OXO Tot<sup>&reg;</sup> Splash & Store Bathtub",
                            "link":"https://www.buybuybaby.com/store/product/OXO%20Tot%20%20Splash%20amp%20Store%20Bathtub%20in%20Grey/5379122?skuId=68487492&mcid=EM_triggeredem_backinstock_rolling_allpromos",
                            "metricsTag":"OXO Tot Splash & Store Bathtub"
                        },
                        "product02":{
                            "name":"OXO Tot<sup>&reg;</sup> Diaper Caddy with Changing Mat",
                            "link":"https://www.buybuybaby.com/store/product/oxo-tot-reg-diaper-caddy-with-changing-mat/5391553?keyword=oxo-tot-diaper-caddy",
                            "metricsTag":"OXO Tot Diaper Caddy with Changing Mat"
                        },
                        "product03":{
                            "name":"OXO Tot<sup>&reg;</sup> Stand Up Bath Toy Bin",
                            "link":"https://www.buybuybaby.com/store/product/oxo-tot-reg-stand-up-bath-toy-bin/5382597?keyword=oxo-tot-bath-toy-bin",
                            "metricsTag":"OXO Tot Stand Up Bath Toy Bin"
                        },
                        "product04":{
                            "name":"OXO Tot<sup>&reg;</sup> PerfectPull<sup>&trade;</sup> Wipes Dispenser",
                            "link":" https://www.buybuybaby.com/store/product/oxo-tot-reg-perfect-pull-trade-wipes-dispenser/3339730?keyword=oxo-tot-wipes-dispenser",
                            "metricsTag":"OXO Tot Perfect Pull Wipes Dispenser"
                        }                        
        
                    }
                    
                }
            },
            "week07":{
                "startDate":"03/11/2020",
                "endDate":"03/17/2020",
                "weekData":{
                    "week":"WEEK<br><span>07</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check back each week for qualifying products to add to your registry during each Weekly Entry Period to be automatically entered in that week's drawing and the Grand Prize drawing.",
                        "imageAlt":" Mother holds her sleeping newborn close. In-image text reads, Week 07."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add $50 worth of qualifying Dreft or Pampers<sup>&reg;</sup> products* to your registry and you'll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 7: Dreft And Pampers<sup>&reg;</sup>",
                        "period":"Mar. 11 – 17, 2020",
                        "paragraph":"Wrap your new arrival in super-soft comfort! Dreft laundry products are gentle on baby's skin and tough on stains, and Pampers<sup>&reg;</sup> Swaddlers<sup>&trade;</sup> are trusted by hospitals, doctors, and moms.",
                        "imageAlt":"Close-up of a sleeping newborn resting on a soft blanket in someone's lap."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"Pampers<sup>&reg;</sup> Swaddlers<sup>&trade;</sup> Size 0 Super Pack Diapers, 84-Ct.",
                            "link":"https://www.buybuybaby.com/store/product/pampers-reg-swaddlers-trade-84-count-size-0-super-pack-diapers/1020148621?categoryId=32539",
                            "metricsTag":"Pampers Swaddlers Size 0 Super Pack Diapers, 84-Ct."
                        },
                        "product02":{
                            "name":"Pampers<sup>&reg;</sup> Swaddlers<sup>&trade;</sup> Size 1 Pack Diapers, 164-Ct.",
                            "link":" https://www.buybuybaby.com/store/product/pampers-reg-swaddlers-trade-164-count-size-1-pack-diapers/5291288?categoryId=32539",
                            "metricsTag":"Pampers Swaddlers Size 1 Pack Diapers, 164-Ct."
                        },
                        "product03":{
                            "name":"Dreft High Efficiency Liquid Detergent, 150 Oz. (96 Loads)",
                            "link":" https://www.buybuybaby.com/store/product/dreft-high-efficiency-liquid-detergent-in-150-ounces-96-loads/1040847726?categoryId=32413",
                            "metricsTag":"Dreft High Efficiency Liquid Detergent, 150 Oz. (96 Loads)"
                        },
                        "product04":{
                            "name":"Dreft Blissfuls<sup>&trade;</sup> Baby Fresh In-Wash Scent Booster, 14.8 Oz.",
                            "link":" https://www.buybuybaby.com/store/product/dreft-blissfuls-trade-14-8-oz-baby-fresh-in-wash-scent-booster/5204658?categoryId=32413 ",
                            "metricsTag":"Dreft Blissfuls Baby Fresh In-Wash Scent Booster, 14.8 Oz."
                        }                        
        
                    }
                    
                }
            },
            "week08":{
                "startDate":"03/18/2020",
                "endDate":"03/24/2020",
                "weekData":{
                    "week":"WEEK<br><span>08</span>",
                    "hero":{
                        "headline":"A Chance To Win Your Dream Registry? Oh, Baby!",
                        "paragraph":"We've partnered with a few of our favorite brands to give you the chance to win buybuy BABY<sup>&reg;</sup> Gift Cards and make room for baby! Check out the qualifying products to add to your registry during this Weekly Entry Period to be automatically entered in our final weekly drawing and the Grand Prize drawing.",
                        "imageAlt":"The Baby Jogger city home collection, featuring a high chair, playard, and rocker and bouncer. In-image text reads, Week 08."
                    },
                    "howToEnter":{
                        "headline":"This Week's Qualifying Products",
                        "paragraph":"Add a qualifying Baby Jogger<sup>&reg;</sup> product* to your registry and you'll be automatically entered for a chance to win:",
                        "price":"<span>Grand Prize</span> - $5,000 in buybuy BABY<sup>&reg;</sup> Gift Cards<br/> <span>Weekly Prize</span> - $2,000 in buybuy BABY<sup>&reg;</sup> Gift Cards"
                    },
                    "lifeStlye":{
                        "headline":"Week 8: Baby Jogger<sup>&reg;</sup>",
                        "period":"Mar. 18 – 24, 2020",
                        "paragraph":"We design strollers, but we're also parents! We offer solutions that help families get out of the house and explore. Our new city home collection is geared toward simplicity and better storability, for easy days at home or away.",
                        "imageAlt":"Mom leans over Baby Jogger playard, looking down at her smiling baby."
                    },
                    "qualifying_products":{
                        "product01":{
                            "name":"Baby Jogger<sup>&reg;</sup> city suite<sup>&trade;</sup> Multi-Level Playard",
                            "link":" https://www.buybuybaby.com/store/product/baby-jogger-reg-city-suite-trade-multi-level-playard/5450386",
                            "metricsTag":"Baby Jogger city suite Multi-Level Playard"
                        },
                        "product02":{
                            "name":"Baby Jogger<sup>&reg;</sup> city sway<sup>&trade;</sup> 2-in-1 Rocker & Bouncer",
                            "link":" https://www.buybuybaby.com/store/product/baby-jogger-reg-city-sway-trade-rocker-graphite/5450387",
                            "metricsTag":"Baby Jogger city sway 2-in-1 Rocker & Bouncer"
                        },
                        "product03":{
                            "name":"Baby Jogger<sup>&reg;</sup> city bistro<sup>&trade;</sup> High Chair",
                            "link":" https://www.buybuybaby.com/store/product/baby-jogger-reg-city-bistro-trade-high-chair-in-graphite/5450388",
                            "metricsTag":"Baby Jogger city bistro High Chair"
                        },
                        "product04":{
                            "name":"Baby Jogger<sup>&reg;</sup> City Mini<sup>&reg;</sup> GT2 Travel System",
                            "link":" https://www.buybuybaby.com/store/product/baby-jogger-city-mini-gt2-travel-system-in-jet/5372388",
                            "metricsTag":"Baby Jogger City Mini GT2 Travel System"
                        }                        
        
                    }
                    
                }
            }
        },
        findWeeklyData: function (date){
            var weekDataType = 'default';
            Object.keys(app.weeklyData).forEach(function (key) {
                var startDate = Date.parse(app.weeklyData[key].startDate);
                var endDate = Date.parse(app.weeklyData[key].endDate);
                
                var currMonth = date.getUTCMonth() + 1;
                var currDay = date.getUTCDate();
                var currYear = date.getUTCFullYear();

                var newDate = currMonth + "/" + currDay + "/" + currYear;
                var currentDate = Date.parse(newDate);
    
                if((currentDate >= startDate) && (currentDate <= endDate)){
                    //console.log(key);
                    //console.log(app.weeklyData[item].endDate);
                    weekDataType = 'not default';
                    weekDataset = app.weeklyData[key].weekData;
                    app.findHero(key,weekDataset.hero,weekDataset.week);
                    app.findHowToEnter(key,weekDataset.howToEnter);
                    app.findLifestyle(key,weekDataset.lifeStlye);
                    app.findQualifyingProducts(key,weekDataset.qualifying_products);

                } 
            }); 
            if(weekDataType == 'default'){
                app.findHero('default',app.weeklyData.default.weekData.hero,'');
                $('section.trm-container').addClass('default');
            }   
        },
        findLinkDate:function(){
            var link = window.location.href;
            if(link.search('testingDate=') != -1){
                var date = link.split('testingDate=')[1]
                app.findWeeklyData(new Date(date));
            }
            else{
                var today = new Date();
                app.findWeeklyData(today);
            }
        },
        findHero:function(key,data,week){
           $('.hero').find('.trm-pov-content h2').html(data.headline);
           $('.hero').find('.trm-pov-content p').html(data.paragraph);
           $('.hero').find('.trm-pov-img .trm-week h4').html(week);
           screenSize>680?$('.hero').find('.trm-pov-img img').attr('src','img/'+key+'/pov.jpg'):$('.hero').find('.trm-pov-img img').attr('src','img/'+key+'/pov-mob.jpg');
           $('.hero').find('.trm-pov-img img').attr('alt',data.imageAlt);
           if(key="default"){
                $('.trm-registry').remove();
                $('.trm-pov-content .trm-section-title').append('<a href="https://www.buybuybaby.com/store/giftregistry/createRegistryForm?regType=BA1" class="trm-registry trm-track" target="_blank" data-type="link" data-id="2" data-name="Create your registry"> Create your registry</a>');
           }
        },
        findHowToEnter:function(key,data){            
            $('.howtoenter').find('.trm-content-left h2').html(data.headline);
            $('.howtoenter').find('.trm-content-left p').html(data.paragraph);
            $('.howtoenter').find('.trm-content-left p.price').html(data.price);
        },
        findLifestyle: function(key,data){
            $('.lifestyle').find('.trm-content-left h2').html(data.headline);
            $('.lifestyle').find('.trm-content-left h5').html(data.period);
            $('.lifestyle').find('.trm-content-left p').html(data.paragraph);
            screenSize>767?$('.lifestyle').find('.trm-content-right img').attr('src','img/'+key+'/life-style.jpg'):$('.lifestyle').find('.trm-content-right img').attr('src','img/'+key+'/life-style-mob.jpg');
            $('.lifestyle').find('.trm-content-right img').attr('alt',data.imageAlt);
        },
        findQualifyingProducts: function(key, data){
            console.log(key,data);
            Object.keys(data).forEach(function (dataKey,i) {
                $('.qualifying_products').find('.trm-product-mod .trm-product').eq(i).find('a').attr('href',data[dataKey].link);
                $('.qualifying_products').find('.trm-product-mod .trm-product').eq(i).find('a').attr('data-name',data[dataKey].metricsTag);
                $('.qualifying_products').find('.trm-product-mod .trm-product').eq(i).find('.trm-product-img img').attr('src','img/'+key+"/"+dataKey+'.jpg');
                //$('.qualifying_products').find('.trm-product-mod .trm-product').eq(i).find('.trm-product-img img').attr('alt',dataKey);
                $('.qualifying_products').find('.trm-product-mod .trm-product').eq(i).find('.trm-product-title').html(data[dataKey].name);
            });
            $('.weekly_brands').find('.trm-brand').find('a').removeClass('active');
            $('.weekly_brands').find('.trm-brand').eq(parseInt(key.slice(-2))-1).find('a').addClass('active');
            var currentBrandSource = $('.weekly_brands').find('.trm-brand').eq(parseInt(key.slice(-2))-1).find('a .trm-brand-img img').attr('src').split('.')[0];
            if(currentBrandSource.search('-hover')==-1)$('.weekly_brands').find('.trm-brand').eq(parseInt(key.slice(-2))-1).find('a .trm-brand-img img').attr('src',currentBrandSource+'-hover.png');
        }
   }

   app.findLinkDate();

   $(window).on('resize',function(){
        weekDataset = "";
        screenSize = window.screen.width;
        app.findLinkDate();
   });

    

    




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