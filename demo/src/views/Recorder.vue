<template>
  <h1>{{ title }}</h1>
  <div>
    <ziggeo-recorder
        :apiKey="apiKey"
        :width="320"
        :height="180"
        @recorderReady="recorderReady"
        @attached="recorderAttached"
    ></ziggeo-recorder>
    <br />
    <button @click="changeTheme">Change Theme Color !!</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import credentials from '@/credentials';

export default {
  name: 'Recorder',

  setup() {
    const apiKey = ref(credentials.API_KEY);
    let title = ref("Ziggeo Recorder Example");
    let recorderInstance = undefined;

    const recorderReady = (instance) => {
      // Initial state of the player
      console.log('Recorder Ready >> ', instance);
      recorderInstance = instance;
    };

    const recorderAttached = (embed) => {
      // Updated recorder instance
      recorderInstance = embed;
      console.log('Attached player instance >> ', embed);
    };

    const changeTheme = () => {
      if (typeof recorderInstance !== 'undefined') {
        recorderInstance.set("themecolor", recorderInstance.get("themecolor") === "red" ? "blue" : "red");
        console.log('Current color >> ', recorderInstance.get("themecolor"));
      }
    }

    return {
      title,
      apiKey,
      recorderReady,
      recorderAttached,
      changeTheme
    };
  }
}
</script>
