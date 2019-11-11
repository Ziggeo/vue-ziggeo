<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Ziggeo Player</h2>
      <ziggeo-player
          :apiKey="'ZIGGEO_API_KEY'"
          :video="'VIDEO_TOKEN'"
          :width="320"
          :height="180"
          @attached="playerAttached"
          @playing="playerPlaying"
      ></ziggeo-player>

    <h2>Ziggeo Recorder</h2>
    <ziggeo-recorder
        :apiKey="'ZIGGEO_API_KEY'"
        :width="320"
        :height="180"
        :recordingwidth="320"
        :recordingheight="180"
        :countdown=10
        @countdown="countdownEvent"
        @camera_unresponsive="recorderCameraUnresponsive"
        @access_forbidden="recorderAccessForbidden"
        @upload_selected="recorderUploadSelected"
    ></ziggeo-recorder>
  </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js And Ziggeo App integration demo'
            }
        },
        methods: {

            playerAttached: function (data) {
                console.log('player attached', data)
            },

            playerPlaying: () => {
                console.log('player playing');
            },

            recorderCameraUnresponsive: function() {
                console.log('camera unresponsive');
            },

            recorderAccessForbidden: function () {
                console.log('access forbidden');
            },

            countdownEvent: (ms) => {
                console.log('countdown miscroseconds', ms);
            },

            recorderUploadSelected: (file) => {
                console.log('upload selected', file);
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
