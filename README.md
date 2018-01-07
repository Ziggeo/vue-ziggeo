# vue-ziggeo

> VueJS integration with awesome Ziggeo video API service

### How to use in your application:
install `vue-ziggeo` via `npm` and include below files in your root `main.js` file
```js
import Ziggeo from 'vue-ziggeo';
Vue.use(Ziggeo);

```
After you free to use all Ziggeo features in your app just adding lines like below:

#### Recorder:
Replace __ZIGGEO_API_KEY__ with your own by Ziggeo App key
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

#### Player:
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

#### Ziggeo Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events)


#### Demo
It's located in root [`demo`](https://github.com/Ziggeo/vue-ziggeo/tree/master/demo) folder

