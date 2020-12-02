<template>
  <h1>{{ title }}</h1>
  <div>
    <ziggeo-player
        :apiKey="apiKey"
        :video="videoToken"
        :width="320"
        :height="180"
        :allowpip="true"
        :skipinitial="true"
        @playerReady="playerReady"
        @attached="playerAttached"
        @playing="playerPlaying"
    ></ziggeo-player>
    <br />
    <button @click="changePlayerTheme" >
      Change theme color !!
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import credentials from "@/credentials";

export default {
  name: 'Player',
  setup() {
    let title = ref("Ziggeo Player Example");
    let apiKey = credentials.API_KEY;
    let videoToken = credentials.VIDEO;
    let playerInstance = undefined;

    onMounted(() => {
      // console.log('Ziggeo Instance ', ZiggeoPlayer);
    });

    const playerReady = (player) => {
      // Initial state of the player
      console.log('Player Ready >> ', player);
      playerInstance = player;
    };

    const playerAttached = (embed) => {
      // Updated recorder instance
      playerInstance = embed;
      console.log('Attached player instance >> ', embed);
    };

    const playerPlaying = (embed) => {
      console.log('Player playing >> ', embed);
    };

    const changePlayerTheme = () => {
      if (typeof playerInstance !== 'undefined') {
        playerInstance.set("themecolor", playerInstance.get("themecolor") === "red" ? "blue" : "red");
      }
    }

    return {
      title,
      apiKey,
      videoToken,
      playerReady,
      playerAttached,
      playerPlaying,
      changePlayerTheme
    };
  }
}
</script>
