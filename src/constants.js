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
    'width': [Number, String],
    'height': [Number, String],
    'responsive': Boolean,
    'faceoutline': Boolean,
    'skipinitial': Boolean,
    'skipinitialonrerecord': Boolean,
    'picksnapshots': Boolean,
    'countdown': Number,
    'stream-width': Number,
    'stream-height': Number,
    'nofullscreen': Boolean,
    'snapshotmax': Number,
    'gallerysnapshots': Number,
    'localplayback': Boolean,
    'stretch': Boolean,
    'theme': String,
    'themecolor': String,
    'autorecord': Boolean,
    'primaryrecord': Boolean,
    'flip-camera': Boolean,
    'early-rerecord': Boolean,
    'sharevideo': Array,

    // Security parameters
    'server-auth': String,
    'client-auth': String,
    'expiration-days': Number,

    // Video management parameters
    'recordingwidth': Number,
    'recordingheight': Number,
    'video': String,
    'effect-profile': Array,
    'auto-crop': Boolean,
    'auto-pad': Boolean,
    'key': String,
    'timelimit': Number,
    'timeminlimit': Number,
    'video-profile': String,
    'meta-profile': String,
    'enforce-duration': Boolean,
    'noaudio': Boolean,
    'source':	String,
    'framerate': Number,
    'videobitrate': [Number, String],
    'audiobitrate': [Number, String],
    'microphone-volume': Number,
    'custom-covershots': Boolean,

    // Data parameters
    'tags': Array,
    'custom-data': Object,
    'title':	String,
    'description': String,

    // Operational parameters
    'manual_upload': Boolean,
    'rerecordable':	Boolean,
    'allowupload': Boolean,
    'allowrecord':	Boolean,
    'force-overwrite':	Boolean,
    'autoplay': Boolean,
    'recordings':	Number,
    'allowedextensions': Array,
    'application':	String,
    'filesizelimit': Number,
    'flashincognitosupport': Boolean,
    'simulate': Boolean,
    'allowcustomupload': Boolean,
    'recordermode': Boolean,
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

    // Form and HTML parameters
    'input-bind': String,
    'form-accept': String
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
    'responsive': Boolean,
    'skipinitial': Boolean,
    'picksnapshots': Boolean,
    'countdown': Number,
    'stream-width': Number,
    'stream-height': Number,
    'nofullscreen': Boolean,
    'localplayback': Boolean,
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
    onAttached: Function,
    onLoaded: Function,
    onPlaying: Function,
    onPaused: Function,
    onEnded: Function,
    onSeek: Function,
    onError: Function,
    onManuallySubmitted: Function,
    onRecordingProgress: Function,
    onUploaded: Function,
    onUploadSelected: Function,
    onRecording: Function,
    onUploading: Function,
    onRerecord: Function,
    onCountdown: Function,
    onProgress: Function,
    onUploadProgress: Function,
    onProcessing: Function,
    onProcessed: Function,
    onAccessForbidden: Function,
    onAccessGranted: Function,
    onCameraUnresponsive: Function,
    onVerified: Function,
    onNoCamera: Function,
    onNoMicrophone: Function,
    onRef: Function
};

export const ziggeoPlayerEmbeddingEventsPropTypes = {
    onAttached: Function,
    onLoaded: Function,
    onPlaying: Function,
    onPaused: Function,
    onEnded: Function,
    onError: Function,
    onSeek: Function,
    onRef: Function
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

// #######################  Vue Common Options  ##############################
export const vueCustomOptions = {
    preventReRenderOnUpdate: Boolean
};