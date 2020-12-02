// ####################### Application Events #############################
// application.embed_event.on..
export const ziggeoApplicationEvents = {
    onError: Function,
    onReady: Function
};


// ####################### Player/Recorder Attributes #############################
// When using HTML embed methods, all parameters should be prefixed with ziggeo-
// https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoRecorderAttributesPropTypes = {
    // Presentational parameters
    'width':{
        type: [Number, String],
        default: 640
    },
    'height': {
        type: [Number, String],
        default: 480
    },
    'responsive': Boolean,
    'faceoutline': Boolean,
    'skipinitial': Boolean,
    'skipinitialonrerecord': Boolean,
    'picksnapshots':{
        type: Boolean,
        default: true
    },
    'camerafacefront': Boolean,
    'countdown': {
        type: [Number, Function],
        default: 3
    },
    'stream-width': Number,
    'stream-height': Number,
    'nofullscreen': Boolean,
    'snapshotmax': {
        type: Number,
        default: 15
    },
    'gallerysnapshots': {
        type: Number,
        default: 3
    },
    'localplayback': Boolean,
    'stretch': Boolean,
    'theme': {
        type: String,
        default: 'default'
    },
    'themecolor': String,
    'autorecord': Boolean,
    'primaryrecord': {
        type: Boolean,
        default: true
    },
    'flip-camera': Boolean,
    'early-rerecord': Boolean,
    'sharevideo': Array,

    // Security parameters
    'server-auth': String,
    'client-auth': String,
    'expiration-days': Number,

    // Video management parameters
    'recordingwidth': {
        type: Number,
        default: 640
    },
    'recordingheight': {
        type: Number,
        default: 480
    },
    'minuploadingwidth': Number,
    'maxuploadingwidth': Number,
    'minuploadingheight': Number,
    'maxuploadingheight': Number,
    'video': String,
    'effect-profile': Array,
    'auto-crop': Boolean,
    'auto-pad': Boolean,
    '_key': String, // `key` is Vue reserved keyword never use without underscore prefix
    'timelimit': Number,
    'timeminlimit': Number,
    'video-profile': String,
    'meta-profile': String,
    'enforce-duration': Boolean,
    'noaudio': Boolean,
    'source':	String,
    'framerate': {
        type: Number,
        default: 25
    },
    'videobitrate':{
        type: [Number, String],
        default: 'auto'
    },
    'audiobitrate':{
        type: [Number, String],
        default: 'auto'
    },
    'microphone-volume': {
        type: Number,
        default: 1
    },
    'custom-covershots': Boolean,

    // Data parameters
    'tags': Array,
    'custom-data': Object,
    'title':	String,
    'description': String,

    // Operational parameters
    'manual_upload': Boolean,
    'rerecordable':	Boolean,
    'multistreamreversable': {
        type: Boolean,
        default: true
    },
    'multistreamdraggable': {
        type: Boolean,
        default: true
    },
    'multistreamresizeable': {
        type: Boolean,
        default: false
    },
    'addstreamproportional': {
        type: Boolean,
        default: true
    },
    'addstreampositionx': {
        type: Number,
        default: 5
    },
    'addstreampositiony': {
        type: Number,
        default: 5
    },
    'addstreampositionwidth': {
        type: Number,
        default: 120
    },
    'addstreampositionheight': {
        type: Number,
        default: 95
    },
    'addstreamminwidth': {
        type: Number,
        default: 120
    },
    'addstreamminheight': {
        type: Number,
        default: 95
    },
    'allowupload': {
        type: Boolean,
        default: true
    },
    'allowrecord': {
        type: Boolean,
        default: true
    },
    'allowscreen': {
        type: Boolean,
        default: false
    },
    'allowmultistreams': {
        type: Boolean,
        default: false
    },
    'force-overwrite': {
        type: Boolean,
        default: true
    },
    'display-timer': {
        type: Boolean,
        default: true
    },
    'autoplay': Boolean,
    'recordings': Number,
    'allowedextensions': Array,
    'application':	String,
    'filesizelimit': Number,
    'flashincognitosupport': Boolean,
    'simulate': Boolean,
    'allowcustomupload': Boolean,
    'manual-upload': Boolean,
    'createthumbnails': Boolean,
    'showsettingsmenu': Boolean, // As a property show/hide from users
    'hidevolumebar': Boolean,
    'fittodimensions': Boolean,
    'recordermode': {
        type: Boolean,
        default: true
    },
    'forceflash': Boolean,
    'noflash': Boolean,
    'manualsubmit': Boolean,
    'initialseek': Number,
    'playfullscreenonmobile': Boolean,
    'playwhenvisible': Boolean,
    'playonclick': Boolean,
    'disableseeking': Boolean,
    'disablepause': Boolean,
    'pauseonplay': Boolean,
    'onlyaudio': Boolean,
    'airplay': Boolean,
    'chromecast': Boolean,
    'preload': Boolean,
    'delete-old-streams': Boolean,
    'lazy-application': Boolean,
    'allowcancel': Boolean,
    'orientation': Boolean,
    'popup': Boolean,
    'popup-stretch': Boolean,
    'framerate-warning': String,
    'snapshottype': String,
    'rtmpstreamtype': {
        type: String,
        default: 'mp4'
    },
    'rtmpmicrophonecodec': {
        type: String,
        default: 'speex'
    },

    // Form and HTML parameters
    'input-bind': String,
    'form-accept': String,

    // Application Options Container
    applicationOptions: Object,
    screenOptions: {
        type: Object,
        default() {
            return {
                chrome_extension_id: "meoefjkcilgjlkibnjjlfdgphacbeglk",
                chrome_extension_install_link: "https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk",
                opera_extension_id: "dnnolmnenehhgplebjhbcmfdbaabkepm",
                opera_extension_install_link: "https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767"
            };
        }
    },
};

export const ziggeoPlayerAttributesPropTypes = {
    // Presentational parameters
    'width': {
        type: [Number, String],
        default: 640
    },
    'height': {
        type: [Number, String],
        default: 480
    },
    'allowpip': Boolean,
    'responsive': Boolean,
    'skipinitial': Boolean,
    'picksnapshots': Boolean,
    'playlist': [Array, String],
    'hidebarafter': {
        type: Number,
        default: 5000 // in milliseconds
    },
    'skipseconds': {
        type: Number,
        default: 5  // in seconds
    },
    'tracktagsstyled': {
        type: Boolean,
        default: true
    },
    'hideoninactivity': {
        type: Boolean,
        default: true
    },
    'countdown': [ Number, Function ],
    'stretch': Boolean,
    'fitonwidth': Boolean,
    'fitonheight': Boolean,
    'preroll': Boolean,
    'vast': Array,
    'popup-stretch': Boolean,
    'preventinteraction': Boolean,
    'stretchwidth': Boolean,
    'stretchheight': Boolean,
    'stream-width': Number,
    'stream-height': Number,
    'nofullscreen': Boolean,
    'localplayback': Boolean,
    '_key': String, // `key` is Vue reserved keyword never use without underscore prefix
    'theme': {
        type: String,
        default: 'default'
    },
    'themecolor': {
        type: String,
        default: 'default'
    },
    'sharevideo': Array,

    // Security parameters
    'server-auth': String,
    'client-auth': String,

    // Video management parameters
    'video': {
        type: String,
        required: true
    },
    'stream':	String,
    'effect-profile': Array,
    'video-profile': String,
    'noaudio': Boolean,
    'poster': String,
    'source':	String,
    'framerate': Number,
    'videobitrate': [Number, String],
    'audiobitrate': [Number, String],

    // Data parameters
    'tags': Array,
    'custom-data':	Object,
    'title':	String,
    'description': String,

    // Operational parameters
    'autoplay': Boolean,
    'application':	String,
    'flashincognitosupport': Boolean,
    'forceflash': Boolean,
    'noflash': Boolean,
    'initialseek': Number,
    'playfullscreenonmobile': Boolean,
    'playwhenvisible': Boolean,
    'playonclick': Boolean,
    'disableseeking': Boolean,
    'disablepause': Boolean,
    'pauseonplay': Boolean,
    'onlyaudio': Boolean,
    'airplay': Boolean,
    'chromecast': Boolean,
    'preload': Boolean,
    'lazy-application': Boolean,

    // Form and HTML parameters
    'input-bind': String,
    'form-accept': String
};

// #######################  DEFAULTS  ##################################


// #######################  EMBEDDING EVENTS #############################
// Javascript Embed Recorder Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=v1-r29
// application.embed_event.on..
export const ziggeoRecorderEmbeddingEventsPropTypes = {
    attached: Function,
    loaded: Function,
    playing: Function,
    paused: Function,
    ended: Function,
    seek: Function,
    error: Function,
    manually_submitted: Function,
    recording_progress: Function,
    uploaded: Function,
    upload_selected: Function,
    recording: Function,
    uploading: Function,
    rerecord: Function,
    countdown: [Number, Function],
    progress: Function,
    upload_progress: Function,
    processing: Function,
    processed: Function,
    access_forbidden: Function,
    access_granted: Function,
    camera_unresponsive: Function,
    verified: Function,
    no_camera: Function,
    no_microphone: Function
};

export const ziggeoPlayerEmbeddingEventsPropTypes = {
    attached: Function,
    loaded: Function,
    playing: Function,
    paused: Function,
    ended: Function,
    error: Function,
    seek: Function
};

// #######################  ZIGGEO METHODS  ##############################
// Methods
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/methods#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoMethods = {
    play: Function,
    record: Function,
    upload: Function,
    rerecord: Function,
    stop: Function,
    stopRecord: Function,
    hidePopup: Function,
    reset: Function,
    lightLevel: Function,
    soundLevel: Function,
    averageFrameRate: Function,
    isRecording: Function,
    width: Function,
    height: Function,
    isFlash: Function,
    videoWidth: Function,
    videoHeight: Function,
    destroy: Function
};


// #######################    ##############################
// Common Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2
export const ziggeoApiEventsPropTypes = {
    onEventPlay: Function,
    onEventPause: Function,
    onEventStop: Function,
    onEventErrorPlayer: Function,
    onEventSubmitted: Function,
    onEventPlayerSeek: Function,
    onEventManuallySubmitted: Function,
    onEventUploaded: Function,
    onEventUploadSelected: Function,
    onEventRecording: Function,
    onEventUploading: Function,
    onEventFinished: Function,
    onEventDiscarded: Function,
    onEventErrorRecorder: Function,
    onEventCountdown: Function,
    onEventElapsed: Function,
    onEventUploadProgress: Function,
    onEventProcessingProgress: Function,
    onEventReadyToRecord: Function,
    onEventReadyToPlay: Function,
    onEventAccessForbidden: Function,
    onEventAccessGranted: Function,
    onEventAccessRevoked: Function,
    onEventRecorderProcessed: Function
};

// #######################  Screen Recorder Options  ##############################
export const recorderApplicationDefaultOptions = {
    'webrtc_streaming': false,
    'webrtc_streaming_if_necessary': true,
    'webrtc_on_mobile': true,
    'auth': false,
    'debug': false,
    'testing_application': false,
    'chrome_extension_id': 'meoefjkcilgjlkibnjjlfdgphacbeglk',
    'chrome_extension_install_link': 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk',
    'opera_extension_id': 'dnnolmnenehhgplebjhbcmfdbaabkepm',
    'opera_extension_install_link': 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
};

// #######################  Vue Common Options  ##############################
export const vueCustomOptions = {
    preventReRenderOnUpdate: Boolean
};
