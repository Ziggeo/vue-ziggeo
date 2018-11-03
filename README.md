# vue-ziggeo v1.0.1

#### Setup
Install `vue-ziggeo` via `npm` and include below files in your root `main.js` file
```js
import Ziggeo from 'vue-ziggeo';
Vue.use(Ziggeo);

```

#### Recorder
Replace __ZIGGEO_API_KEY__ with your own by Ziggeo API key
```vue
<template>
    <ziggeo-recorder
        :apiKey="'ZIGGEO_API_KEY'"
        :width="110"
        :height="80"
        @camera_unresponsive="recorderCameraUnresponsive"
        @access_forbidden="recorderAccessForbidden"
        @upload_selected="recorderUploadSelected"
    ></ziggeo-recorder>
</template>
<script>
    export default {
        ...
        methods: {

            recorderCameraUnresponsive: function() {
                console.log('camera unresponsive');
            },

            recorderAccessForbidden: function () {
                console.log('access forbidden');
            },

            recorderUploadSelected: (file) => {
                console.log('upload selected', file);
            }
            ...
        }
        ...
    }
</script>
```

##### Screen Recorder
Using Ziggeo you can also record your screen. <br/>
In development mode with `localhost` you can test it with `Ziggeo` chrome/opera extensions which will be set automatically, FireFox support it by default. <br/>
For production environment you have to generate your own extensions. [For more details](https://ziggeo.com/features/screen-recording) <br/>

Setup Vue recorder:
```vue
    :allowscreen=true
    :screenOptions="{
      chrome_extension_id: 'your_chrome_extension_id',
      chrome_extension_install_link: 'your_chrome_extension_install_link',
      opera_extension_id: 'your_opera_extension_id',
      opera_extension_install_link: 'your_opera_extension_install_link'
    }"
```

#### Player
Replace __ZIGGEO_API_KEY__ and __VIDEO_TOKEN__ provided by Ziggeo App
```vue
<template>
      <ziggeo-player
          :apiKey="'ZIGGEO_API_KEY'"
          :video="'VIDEO_TOKEN'"
          :width="330"
          :height="210"
          @attached="playerAttached"
          @playing="playerPlaying"
          ...
      ></ziggeo-player>
</template>
<script>
    export default {
        ...
        methods: {

            playerAttached: function (data) {
                console.log('player attached', data)
            },

            playerPlaying: () => {
                console.log('player playing');
            },

            ...
        }
        ...
    }
</script>
```

#### Additional Parameters

You can add all available Ziggeo-related options here:
- [Ziggeo Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters)
- [Ziggeo Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)


#### Demo
A demo is located in the root [`demo`](https://github.com/Ziggeo/vue-ziggeo/tree/master/demo) folder.

#### Changing versions
Our Vue SDK is updated as new revisions of our client JS SDK come out, however you might want to grab a specific one, even before it is added or afterwards. If that is the case you can do that by modifying your package.json file to specify the version you want to use.

In your `package.json` file you will have a section called `"devDependencies": {}` in it just add the specific details you want to be used like so (an example only):
```
"devDependencies": {
  ...
  "ziggeo-client-sdk": "2.32.1"
}
```
* This would make your own repository use our 2.32.1 version of our system. In case our Vue SDK requires higher version that you have set up you would be alerted when you do `npm install`.

#### Changelog
- v0.1.0 upgraded to ziggeo 0.0.30 version and added screen recorder option
- v0.2.0 Fixed countdown related conflict
- v1.0.1 Upgraded `ziggeo-client` SDK to `2.31.1` pre-release version.
