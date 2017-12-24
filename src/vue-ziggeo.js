import 'ziggeo-client-sdk/build/ziggeo.css';
import 'ziggeo-client-sdk/build/ziggeo.js';

import Vue from 'vue'
import ZiggeoPlayer from './components/ZiggeoPlayer/ZiggeoPlayer.vue';
import ZiggeoRecorder from './components/ZiggeoRecorder/ZiggeoRecorder.vue';

Vue.component('ziggeo-player', ZiggeoPlayer);
Vue.component('ziggeo-recorder', ZiggeoRecorder);

export const eventBus = new Vue({
    methods: {
      onAttached: function (data) {
          this.$emit('attached', data);
      }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
