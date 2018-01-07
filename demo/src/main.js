import Vue from 'vue'
import App from './App.vue'
import Ziggeo from 'vue-ziggeo';

Vue.use(Ziggeo);

new Vue({
    el: '#app',
    render: h => h(App),
});
