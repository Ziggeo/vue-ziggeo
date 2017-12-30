const VERSION = require('../package').version;

import Vue from 'vue';
import App from './App.vue';

import 'ziggeo-client-sdk/build/ziggeo.css';
import 'ziggeo-client-sdk/build/ziggeo.js';

import ZiggeoPlayer from 'Components/ZiggeoPlayer';
import ZiggeoRecorder from 'Components/ZiggeoRecorder';

const install = (Vue) => {
    Vue.component("ziggeo-player", ZiggeoPlayer);
    Vue.component("ZiggeoRecorder", ZiggeoRecorder);
};

new Vue({
    el: '#app',
    render: h => h(App)
});

export { install };

export {
    ZiggeoRecorder,
    ZiggeoPlayer
}

/* -- Plugin definition & Auto-install -- */

// Plugin
const plugin = {
    /* eslint-disable no-undef */
    version: VERSION,
    install,
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}