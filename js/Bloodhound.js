if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

var Bloodhound = (function () {

    var opts = {
        owner : 'TRM',
        pageId: '00_Tracking',
        convergeId : 'NA',
        brandName : 'SampleBrand',
        maxTagLen : 100,
        pubAbbrev: '',
        tagSeperator: ':',
        seperator: '>',
        trackingProvider: 'GA',
        replaceSpaces : true,
        tagSpaceChar : '_',
        targets: [
            { target: '.trm-track', event: 'click' }
        ],
        interactionType : [
            {type : 'vid', desc: 'Video'},
            {type : 'pov', desc: 'Pov#'},
            {type : 'quiz', desc: 'Quiz'},
            {type : 'poll', desc: 'Poll'},
            {type : 'acco', desc: 'Accordian'},
            {type : 'access', desc: 'Accessibility'},
            {type : 'art', desc: 'Article'},
            {type : 'rec', desc: 'Recipe'},
            {type : 'prod', desc: 'Product'},
            {type : 'brand', desc: 'Brand'},
            {type : 'rtt', desc: 'Return To Top'},
            {type : 'cat', desc: 'Categories'},
            {type : 'cat', desc: 'Giveaway'},
            {type : 'save', desc: 'Save'},
            {type : 'coupons', desc: 'Coupons'},
            {type : 'scroll', desc: 'Scroll'},
            {type : 'social', desc: 'Social'},
            {type : 'perk', desc: 'Perk'},
            {type : 'box', desc: 'Box Filter'},
            {type : 'see more', desc: 'See more'},
            {type : 'form', desc: 'Form'},
            {type : 'link', desc: 'link'},
            {type : 'subnav', desc: 'Sub Nav'},
            {type : 'mainnav', desc: 'Main Nav'}
        ],
        allowDuplicateTags : false
    },
        settings = {
            trackTargets: [],
            page: 'Tracking',
            device: 'D',
            location: '',
            objectType: '',
            lastTag: '',
            clearLastTimeOut: null
        },
        app = {
            pub: {
                init: function () {

                    app.priv.debug('Start Initialize Bloodhound.', 'init');
                    //extend options if available
                    //passed in options take precedence over page options
                    if (typeof BloodHoundVars !== 'undefined') {
                        //console.log('BloodHoundVars read and written.', 'init', opts, BloodHoundVars);
                        opts = app.priv.extend(opts, BloodHoundVars);
                        //console.log('OPTS', opts);
                    }else{
                        console.log('Default options used.', 'init');
                    }


                    //app.priv.debug('Begin loop of.' + opts.targets);
                    opts.targets.forEach(function (currentVal, index, arr) {
                        app.priv.debug('.on added with: ' + currentVal.event + ' ' + currentVal.target);
                        var classname = document.querySelectorAll(currentVal.target);
                        for (var i = 0; i < classname.length; i++) {
                            classname[i].addEventListener(currentVal.event, app.priv.processEvent, false);
                        }

                        var targetName = app.priv.fixTargetName(currentVal.target);
                        //console.log('targetName',targetName);
                        settings.trackTargets[targetName] = currentVal;
                    });
                    //app.priv.debug('End loop of.' + opts.targets);

                    //console.log('Done Initialize Tracking.', 'init');

                    var loadedEvent = new CustomEvent('onBhLoaded', {
                        detail: {
                            'pageId': opts.pageId,
                            'label': 'Bloodhound successfully initiated.',
                            'provider': opts.trackingProvider
                        }
                    });
                    document.dispatchEvent(loadedEvent);
                    
                },
                buildQuickTag: function (cta, sectionDescription, interactionType) {
                    return app.pub.buildTag(cta, sectionDescription, interactionType, opts.convergeId, opts.brandName);
                },
                buildTag: function (cta, sectionDescription, interactionType, sectionId, refreshConverge, brandName) {
                    //app.priv.debug('Building tag: ' + cta + ' ' + sectionDescription + ' ' + interactionType + ' ' + sectionId, 'buildTag');
                    /*
                    tag format
                    TRM:Original_Converge:Refresh_Converge:BP:SectionDescription:InteractionType:SectionId:CTA

                    Generated tag: TRM:00_TRM_TrackingScript:NA:Sample Brand:block:art:link3:Gotoyoutube

                        TRM = opts.owner
                        Original_Converge = opts.convergeId,
                        Refresh_Converge = opts.convergeId
                        SectionDescription = Data attribute (data-name) from parent "section" tag data attribute
                        InteractionType = Data attribute from element (data-type) that matches available opts.interactionType.type
                        SectionId = Data attribute from element (data-id)
                        CTA = from link string or image alt text


                    <section data-name="block">
                        <a href="http://youtube.com" class="trm-track" data-type="art" data-id="link1">Go to youtube</a>
                        <a href="http://youtube.com" class="trm-track" data-type="art" data-id="link2">Go to youtube</a>
                        <a href="http://youtube.com" class="trm-track" data-type="art" data-id="link3">Go to youtube</a>
                        <a href="http://youtube.com" class="trm-track" data-type="art" data-id="link4"><img src="" alt="Go to youtube"/></a>
                    </section>

                    Clicking the first link will make a tag as follows

                    TRM:01_Sampl_Prog:NA:Sample Brand:block:art:link1:Go to youtube    
                    */

                    var converge = (typeof refreshConverge !== 'undefined') ? refreshConverge : opts.convergeId;
                    brandName = (typeof brandName !== 'undefined') ? brandName : opts.brandName;

                    var tag = opts.owner + opts.tagSeperator + opts.pageId + opts.tagSeperator + converge + opts.tagSeperator + brandName + opts.tagSeperator + sectionDescription + opts.tagSeperator + interactionType + opts.tagSeperator + sectionId + opts.tagSeperator + app.priv.fixString(cta);
                    //app.priv.debug('Generated tag: ' + tag, 'buildTag');
                    //app.priv.debug('End Building tag and return ', 'buildTag');
                    return tag;
                    
                    //return settings.device + opts.tagSeperator + settings.page + opts.tagSeperator + objectType + opts.tagSeperator + app.priv.fixString(label);
                },
                processTarget: function (el) {
                    if(el){
                        var tag = app.priv.getItemAttributes(el);
                        if (tag) {
                            app.priv.track(tag);
                        }
                    }
                },
                track: function (tag, section){
                    returnval = {
                        tag : tag,
                        success : false
                    }
                    if (tag) {
                        app.priv.track(tag, section);
                    }
                }
            },
            priv: {
                debug : function(str, id){
                    if (typeof app.priv.addOutput === 'function'){
                        app.priv.addOutput(str, id);
                    }
                },
                pageLocation: function () {
                    return '';
                },
                processEvent: function (e) {
                    //app.priv.debug('Event ' + e.type, 'processEvent');
                    var tag = app.priv.getItemAttributes(this, e);
                    if (tag){
                        app.priv.track(tag);
                    }
                    //app.priv.debug('End Event ' + e.type, 'processEvent');
                },
                getItemAttributes : function(item){
                    /*
                      SectionDescription = Data attribute (data-name) from parent "section" tag data attribute
                      InteractionType = Data attribute from element (data-type) that matches available opts.interactionType.type
                      SectionId = Data attribute from element (data-id)
                      CTA = from link string or image alt text
                  */
                    // lets get the values based off data attributes
                    var sec = app.priv.getClosest(item, 'section');
                    
                    var sectionDescription = sec.getAttribute('data-name') ? sec.getAttribute('data-name') : false,
                        interactionType = item.getAttribute('data-type') ? item.getAttribute('data-type') : false,
                        sectionId = item.getAttribute('data-id') ? item.getAttribute('data-id') : false;
                        converge = item.getAttribute('data-refreshid')  ? item.getAttribute('data-refreshid') : opts.convergeId;
                        brandName = item.getAttribute('data-brandname') ? item.getAttribute('data-brandname') : opts.brandName;
                    var cta = '';
                    
                    if (item.textContent.trim() !== '') {
                        cta = app.priv.fixString(item.textContent);
                    } else if (app.priv.hasElem(item, 'img')) {
                        // TEST FOR IMAGE AND ALT
                        var elem = app.priv.hasElem(item, 'img');
                        var imgElem = item.getElementsByTagName("img");
                        cta = imgElem[0].getAttribute('alt') ? imgElem[0].getAttribute('alt') : false;
                    } else if (item.value){
                        cta = item.value;
                    }


                    if (sectionDescription && interactionType && sectionId && cta) {
                        var trackStr = app.pub.buildTag(cta, sectionDescription, interactionType, sectionId, converge, brandName);
                        //app.priv.debug('End', 'getItemAttributes');
                        return trackStr;
                    } else {
                        app.priv.debug('EVENT ERROR: Missing param.');
                        return false;
                    }


                    settings.device = (isMobile.phone) ? 'M' : (isMobile.tablet) ? 'T' : 'D';
                    var label = 'NOT_SET',
                        addVars = '';

                    var objectType = (item.getAttribute('data-objtype')) ? item.getAttribute('data-objtype') : 'NA',
                        location = (item.getAttribute('data-section')) ? item.getAttribute('data-section') : '';

                },
                fixTargetName: function (str) {
                    return str.replace(/[^A-Z0-9]/ig, "");
                },
                titleCase: function (str) {
                    var splitStr = str.toLowerCase().split(' ');
                    //console.log('Split String', splitStr);
                    for (var i = 0; i < splitStr.length; i++) {
                        // You do not need to check if i is larger than splitStr length, as your for does that for you
                        // Assign it back to the array
                        //console.log(splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1));
                        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                    }
                    // Directly return the joined string
                    //console.log(splitStr);
                    return splitStr.join(' ');
                },
                fixString: function (str) { 
                    var newStr = app.priv.titleCase(str);
                    var new_str = '';
                    if(opts.replaceSpaces){
                        new_str = newStr.replace(/[^A-Z0-9>]/ig, opts.tagSpaceChar);
                    }
                    
                    return new_str;
                },
                clearLast: function () {
                    settings.lastTag = '';
                },
                extend: function (defaults, options) {
                    var extended = {};
                    var prop;
                    for (prop in defaults) {
                        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                            extended[prop] = defaults[prop];
                        }
                    }
                    for (prop in options) {
                        if (Object.prototype.hasOwnProperty.call(options, prop)) {
                            extended[prop] = options[prop];
                        }
                    }
                    //console.log(extended);
                    return extended;
                },
                hasElem : function(item, selector){
                    var kids = item.children;
                    for (var i = 0; i < kids.length; i++) {
                        return kids[i].getElementsByTagName(selector);
                    }
                },
                getClosest: function (elem, selector) {

                    // Element.matches() polyfill
                    if (!Element.prototype.matches) {
                        Element.prototype.matches =
                            Element.prototype.matchesSelector ||
                            Element.prototype.mozMatchesSelector ||
                            Element.prototype.msMatchesSelector ||
                            Element.prototype.oMatchesSelector ||
                            Element.prototype.webkitMatchesSelector ||
                            function (s) {
                                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                                    i = matches.length;
                                while (--i >= 0 && matches.item(i) !== this) {}
                                return i > -1;
                            };
                    }

                    // Get the closest matching element
                    for (; elem && elem !== document; elem = elem.parentNode) {
                        if (elem.matches(selector)) return elem;
                    }
                    return null;

                },
                track: function (label, section) {
                    //console.log(section);
                    var allow = (settings.lastTag !== label + section) ? true : opts.allowDuplicateTags,
                    event,
                    success = false,
                    detail = {},
                    sendEvent = false,
                    errors = 1,
                    errorLabel = '';

                    section = (typeof section === undefined) ? '' : section;
                    //console.log(event);
                    if (allow){
                        
                        switch (opts.trackingProvider.toUpperCase()){

                            case 'GA':
                            //console.log('GO GA', typeof ga);
                                if (typeof ga === 'function') {
                                    //console.log('MAKE CALL','send', 'event', opts.pageId, section, label);
                                    //ga('send', 'event', opts.pageId, section, label, 'click');
                                    //ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue]);
                                    gtag('event', 'click', {
                                        'event_category': opts.pageId,
                                        'event_label': label,
                                        'value': 0
                                      });
                                    //console.log('AFTER GA');
                                } else {
                                    errors = 1;
                                    errorLabel = 'GA undefined.';
                                }
                                success = true;
                                sendEvent = true;
                            break;

                            case 'ADOBE':
                                var hasAdobe = false;
                                if (hasAdobe){
                                    success = true;
                                }else{
                                    errors = 1;
                                    errorLabel = 'GA undefined.';
                                }
                                sendEvent = true;

                            break;
                        }

                        if(sendEvent){
                            detail = {
                                'pageId': opts.pageId,
                                'section': section,
                                'label': label,
                                'provider': opts.trackingProvider.toUpperCase(),
                                'errors': errors,
                                'errorLabel': errorLabel
                            };
                            event = new CustomEvent('onBh', {
                                detail: detail
                            });
                            document.dispatchEvent(event);
                        }
                        settings.lastTag = label + section;
                        
                    }else{
                        //console.log('NO TAGS');
                    }
                    
                    return success;
                }
            }
        };
    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
        app.pub.init();
    } else {
        document.addEventListener("DOMContentLoaded", function(){
            app.pub.init();
        });
    }
    return app.pub;
})();
