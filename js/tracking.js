if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

var Tracking = (function () {

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
        tagSpaceChar : '',
        targets: [
            { target: '.trm-track', event: 'click' },
            { target: '.trm-track-hover', event: 'mouseover' },
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

                    app.priv.debug('Start Initialize Tracking.', 'init');
                    //extend options if available
                    //passed in options take precedence over page options
                    if (typeof TriadTrackVars !== 'undefined') {
                        //console.log('TriadTrackVars read and written.', 'init');
                        opts = app.priv.extend(opts, TriadTrackVars);
                        //console.log('OPTS', opts);
                    }else{
                        //console.log('Default options used.', 'init');
                    }


                    app.priv.debug('Begin loop of.' + opts.targets, 'init');
                    opts.targets.forEach(function (currentVal, index, arr) {
                        app.priv.debug('.on added with: ' + currentVal.event + ' ' + currentVal.target, 'TargetLoop');
                        //$('body').on(currentVal.event, currentVal.target, app.priv.processEvent);
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
                    
                    var loadedEvent = new CustomEvent('onTrackingLoaded', {
                        detail: {
                            'pageId': opts.pageId,
                            'label': 'Tracking successfully initiated.'
                        }
                    });
                    document.dispatchEvent(loadedEvent);
                    
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
                    app.priv.debug('Checking target element '+ el, 'processTarget');
                    //targets = document.querySelectorAll();
                    if(el){
                        var tag = app.priv.getItemAttributes(el);
                        if (tag) {
                            app.priv.track(tag);
                        }
                    }
                   //app.priv.debug('END Checking target element ' + el, 'processTarget');
                },
                track: function (tag){
                    if (tag) {
                        app.priv.track(tag);
                    }
                }
            },
            priv: {
                debug : function(str, id){
                   // if (typeof app.priv.addOutput === 'function'){
                        console.log(str, id);
                   // }
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
                    
                   // app.priv.debug('Item ' + item, 'getItemAttributes');
                    /*
                      SectionDescription = Data attribute (data-name) from parent "section" tag data attribute
                      InteractionType = Data attribute from element (data-type) that matches available opts.interactionType.type
                      SectionId = Data attribute from element (data-id)
                      CTA = from link string or image alt text
                  */
                    // lets get the values based off data attributes
                    //var sectionDescription = $(item).closest('section').data('name') ? $(item).closest('section').data('name') : false,

                    var sec = app.priv.getClosest(item, 'section');
                    

                    var sectionDescription = sec.getAttribute('data-name') ? sec.getAttribute('data-name') : false,
                        interactionType = item.getAttribute('data-type') ? item.getAttribute('data-type') : false,
                        sectionId = item.getAttribute('data-id') ? item.getAttribute('data-id') : false;
                        converge = item.getAttribute('data-refreshid')  ? item.getAttribute('data-refreshid') : opts.convergeId;
                        brandName = item.getAttribute('data-brandname') ? item.getAttribute('data-brandname') : opts.brandName;
                    var cta = '';
                   // console.log(item, typeof item.getAttribute('data-refreshid'));
                   // console.log(sectionDescription, interactionType, sectionId, converge, brandName);
                    
                    if (item.textContent.trim() !== '') {
                        //app.priv.debug('Text found for cta  \'' + $.trim($(item).text()) + '\'', 'getItemAttributes');
                        cta = app.priv.fixString(item.textContent);
                    } else if (app.priv.hasElem(item, 'img')) {
                        // TEST FOR IMAGE AND ALT
                        var elem = app.priv.hasElem(item, 'img');
                        var imgElem = item.getElementsByTagName("img");
                        cta = imgElem[0].getAttribute('alt') ? imgElem[0].getAttribute('alt') : false;
                       // app.priv.debug('Image found for cta \'' + $(item).find('img').attr('alt') + '\'', 'getItemAttributes');
                    } else if (item.value){
                        cta = item.value;
                    }


                    if (sectionDescription && interactionType && sectionId && cta) {
                        var trackStr = app.pub.buildTag(cta, sectionDescription, interactionType, sectionId, converge, brandName);
                        //app.priv.debug('End', 'getItemAttributes');
                        return trackStr;
                    } else {
                        app.priv.debug('EVENT ERROR: Missing param.');
                        console.log(sectionDescription, interactionType, sectionId, cta);
                        //app.priv.debug('End', 'getItemAttributes');
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
                    var new_str = newStr.replace(/[^A-Z0-9>]/ig, opts.tagSpaceChar);
                    console.log('REMOVE UNDERSCORES', str);
                    new_str = new_str.replace(/_+/g, '_');
                    var c = 0;
                    c++;
                    console.log(c + ' a' + new_str);
                    new_str = new_str.replace(/^[^A-Za-z]*/g, '_');
                    c++;
                    console.log(c + ' b' + new_str);
                    
                    //new_str = new_str.replace(/^_?([^_]+)_?$/g, '');
                    //remove trailing underscore
                    new_str = new_str.replace(/_+$/, '');
                    c++;
                    console.log(c + ' c' + new_str);
                    new_str = new_str.replace(/^_?([^_]+)_?$/, '');
                    c++;
                    console.log(c + ' d' + new_str);
                    new_str = new_str.replace(/^_/, '');
                    c++;
                    console.log(c + ' e' + new_str);
                    new_str = new_str.substring(0, 50);
                    c++;
                    console.log(c + ' f' + new_str);
                    console.log('RETURN ' + new_str);
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
                    var allow = (settings.lastTag !== label + section) ? true : opts.allowDuplicateTags;
                    var event;
                    section = (typeof section === undefined) ? '' : section;
                    //console.log(allow, opts.trackingProvider.toUpperCase());
                    if (allow){
                        
                        switch (opts.trackingProvider.toUpperCase()){

                            case 'GA':
                                if (typeof ga === 'function') {
                                    
                                    event = new CustomEvent('onTracking', {
                                        detail: {
                                            'pageId': opts.pageId,
                                            'section': section,
                                            'label': label,
                                            'provider': 'GA',
                                            'errors': 0,
                                            'errorLabel': ''
                                        }
                                    });
                                    //ga('send', 'event', opts.pageId, section, label);
                                    ga('send', 'event', opts.pageId, 'click', section, label);
                                    document.dispatchEvent(event);
                                } else {
                                    event = new CustomEvent('onTrackingErr', {
                                        detail: {
                                            'pageId': opts.pageId,
                                            'section': section,
                                            'label': label,
                                            'provider': 'GA',
                                            'errors' : 1,
                                            'errorLabel' : 'Google Analytics is undefined.'
                                        }
                                    });
                                    document.dispatchEvent(event);
                                }
                            break;

                            case 'ADOBE':
                                event = new CustomEvent('onTracking', {
                                    detail: {
                                        'pageId': opts.pageId,
                                        'section': section,
                                        'label': label,
                                        'provider': 'ADOBE',
                                        'errors': 1,
                                        'errorLabel': 'Abobe Analytics not found on the page.'
                                    }
                                });
                                document.dispatchEvent(event);

                            break;
                        }
                        settings.lastTag = label + section;
                        
                    }else{
                        //console.log('NO TAGS');
                    }
                }
            }
        };
    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
        //app.pub.init();
    } else {
        document.addEventListener("DOMContentLoaded", function(){
            //app.pub.init();
        });
    }
    return app.pub;
})();