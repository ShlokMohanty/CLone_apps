(function(root, factory) {
    if(typeof define == 'function' && define.amd){
        define( function() {
            root.Reveal = factory();
            return root.Reveal;
        });
    }else if( typeof exports === 'object') {
        module.exports = factory();

    } else {
        root.Reveal = factory();
    }(this, function() {
        'use strict';
        var Reveal;
        var VERSION = '3.5.0';
        var SLIDES_SELECTOR = '.slides section',
        Horizontal_SLIDES_SELECTOR = '.slides>section.presents>section',
        HOME_SLIDE_SELECTOR ='.slides>section:first-of-type',
        UA = navigator.userAgent,

        //overidden configurations during time of initialization
        config = {
            width: 960,
            height: 700,
            margin:0.04,
            minscale: 0.2,
            maxscale:2.0,
            controls: true,
            progress: true,
            slideNumber: false,
            showSlideNumber: 'all',
            history: false,
            Keyboard: true,
            keyboardCondition: null,
            overview: true,
            center: true,
            touch: true,
            loop: false,
            rtl: false,
            shuffle: false,
            fragments: true,
            embedded: false,
            help: true,
            pause: true,
            showNotes: false,
            autoPlayMedia: null,
            autoslide: 0,
            autoSlideMethod: null,
            autoSlideStoppable: true,
            mouseWheel: false,
            rollingLinks: false,
            hideAddressBar: true,
            previewLinks: false,
            postMessage: true,
            postMessageEvents: false,
            focusBodyOnPageVisibilityChange: true,
            transition: 'slide',
            transitionSpeed: 'default',
            backgroundTransition: 'fade',
            ParallaxBackgroundImage: '',
            ParallaxBackgroundSize: '',
            ParallaxBackgroundHorizontal: null,
            ParallaxBackgroundVertical: null,
            pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
            pdfPageHeightOffset: -1,
            viewDistance: 3,
            display: 'block',
            dependencies: []

        },
        initialized = false,
        loaded = false,
        overview = false,
        overviewSlideWidth = null,
        overviewSlideHeight = null,
        indexh,
        indexv,
        previousSlide,
        currentSlide,
        previousBackground,
        state = [],
        scale = 1,
        slidesTransform = {layout: '', overview: ''},
        dom = {},
        features = {},
        isMobileDevice,
        isChrome,
        lastMouseWheelStep = 0,
        writeURLTimeout = 0,
        eventsAreBound = false,
        autoSlide=0,
        autoSlidePlayer,
        autoSlideTimeout = 0,
        autoSlideStartTime = -1,
        autoSlidePaused = false,
        
        touch = {
            starX: 0,
            starY: 0,
            startSpan: 0,
            StartCount: 0,
            captured: false,
            threshold: 40
        },

        keyboardShortcuts = {
            'N , SPACE':    'Next slide',
            'P':                'previous slide',
            '&#8592 , H':    'Navigate left',
            '&#8594 , L':    'Navigate right',
            '&#8593 , K':    'Navigate up',
            '&#8595 , J':    'Navigate down',
            'Home':                 'First slide',
            'End':                  'Last slide',
            'B , .':                'Pause',
            'F':                    'Fullscreen',
            'ESC, o':               'Slide overview'
        };
    })
})
