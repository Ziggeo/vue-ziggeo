# vue-ziggeo

### This repo use Vue3, for older Vue2 version please visit ["The latest Vue V2 implementation"](https://github.com/Ziggeo/vue-ziggeo/tree/7932156f9453ffa08425cf76f194ce41c777001f)

### Upgrade Ziggeo SDK
This package build based only on stable version of Ziggeo-JS-SDK, but you can easily upgrade to the latest Ziggeo SDK version. Steps require to do:
- Edit root `package.json` file by upgrading to the latest version of `ziggeo-client-sdk` ([Ziggeo JS SDK Github Url](https://github.com/Ziggeo/ziggeo-client-sdk));
- Run `npm install` or `npm update` (`yarn install` if you're using Yarn) to install/update packages;
- Run `npm run build` command to re-build package;
- Optional step. To install package in your own local project, after you complete steps above you can 
run `npm pack` which will generate a new package in the root folder with the `.tgz` extension.
Then in your own project you can replace `vue-ziggeo` package number with path to the generated pack. 
For example instead of `vue-ziggeo: "3.x.x"` you can use `vue-ziggeo: "path_to_the/package/vue-ziggeo-version_number.tgz"`

#### Setup
Install `vue-ziggeo` via `npm` and include below files in your root `main.js` file
```js
import { createApp } from 'vue';
import Ziggeo from 'vue-ziggeo';
// You have to import css files from node directory
// Or you can import inside in your component
import "@node_modules/vue-ziggeo/dist/vue-ziggeo.css";

createApp(YOUR_MAIN_APP_COMPONENT).use(Ziggeo).mount("#root_index_html_id_selector");

```

#### Recorder
Replace __ZIGGEO_API_KEY__ with your own by Ziggeo API key

```vue
<template>
  <ziggeo-recorder
    :apiKey="apiKey"
    :width="110"
    :height="80"
    @recorderReady="recorderReady"
    @camera_unresponsive="recorderCameraUnresponsive"
    @access_forbidden="recorderAccessForbidden"
    @upload_selected="recorderUploadSelected"
  ></ziggeo-recorder>
</template>
<script>
import { ref } from 'vue';
    
export default {
  name: 'RecorderComponent',
  setup() {
    let recorderInstance;
    const apiKey = ZIGGEO_API_KEY;

    const recorderReady = (instance) => {
      recorderInstance = instance;
    };

    const recorderCameraUnresponsive = (embedding) => {
      console.log('camera unresponsive');
    };

    const recorderAccessForbidden = (embedding) => {
      console.log('access forbidden');
    };

    const recorderUploadSelected = (embedding , file) => {
      console.log('upload selected', file);
    };
      
    return {
      apiKey,
      recorderReady,
      recorderAccessForbidden,
      recorderCameraUnresponsive,
      recorderUploadSelected
    };
  }
}
</script>
```

##### Recorder Application Settings
You can set application settings based on your requirement
```vue
    :applicationOptions="{ 
        'webrtc_streaming': boolean (default: false),
        'webrtc_streaming_if_necessary': boolean (default: false),
        'webrtc_on_mobile': boolean (default: false),
        'auth': boolean (default: false),
        'debug': boolean (default: false)
    }"
```

#### Player
Replace __ZIGGEO_API_KEY__ and __VIDEO_TOKEN__ provided by Ziggeo App
```vue
<template>
  <ziggeo-player
    :apiKey="apiKey"
    :video="videoToken"
    :width="330"
    :height="210"
    @playerReady="playerReady"
    @attached="playerAttached"
    @playing="playerPlaying"
    ...
  ></ziggeo-player>
</template>
<script>
import { ref } from 'vue';
    
export default {
  name: 'PlayerComponent',
  setup() {
    let playerInstance;
    const apiKey = "ZIGGEO_API_KEY";
    const videoToken = "VIDEO_TOKEN";

    const playerReady = (instance) => {
      playerInstance = instance;
    };

    // starting vue-ziggeo@2.0.0 version embedding argument also accessible
    const playerAttached = (embedding, data) => {
      console.log('player attached', data)
    };

    const playerPlaying = (embedding) => {
      console.log('player playing');
    };
      
    return {
      apiKey,
      playerReady,
      playerPlaying,
      playerAttached
    };
  }
}
</script>
```

#### Additional Parameters

You can add all available Ziggeo-related parameters here:
- [Ziggeo Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters)
- [Ziggeo Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)
- Only `key` parameter was replaced with `_key`, as `Vue` use it as reserved variable


#### Demo
A demo is located in the root [`demo folder`](https://github.com/Ziggeo/vue-ziggeo/tree/master/demo).

#### Changelog
- v3.0.3 Upgraded to VueJS 3rd version; [The latest Vue V2 implementation](https://github.com/Ziggeo/vue-ziggeo/tree/7932156f9453ffa08425cf76f194ce41c777001f) or in vuejs-v2 folder of current repo;
- v2.3.0 Upgraded `ziggeo-client-sdk` SDK to `2.35.4` version. With new features like multi-stream recorder;
- v2.2.0 Upgraded `ziggeo-client-sdk` SDK to `2.34.14` version. Added `_key` parameter usability, fixed minor bug;
- v2.1.1 Upgraded `ziggeo-client-sdk` SDK to `2.34.8` version. Fixed some bugs;
- v2.1.0 Added `applicationOptions` property which will accept application settings `webrtc_streaming`, `webrtc_streaming_if_necessary`, `webrtc_on_mobile`, `auth`, `debug`, `testing_application` and `screenRecord` settings like `chrome_extension_id`. Upgraded to Ziggeo stable r33;
- v2.0.1 Added `embedding` argument for each method, [read more...](https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=stable);
- v1.1.0 Upgraded `ziggeo-client-sdk` SDK to `2.32.*` version. Fixed try/catch variable name conflict;
- v1.0.1 Upgraded `ziggeo-client-sdk` SDK to `2.31.*` pre-release version;
- v0.2.0 Fixed countdown related conflict;
- v0.1.0 upgraded to ziggeo 0.0.30 version and added screen recorder option.
