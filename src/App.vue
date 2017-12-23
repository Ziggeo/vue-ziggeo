<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    import Ziggeo from 'Ziggeo.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js Ziggeo implementation App'
            }
        },
        methods: {
           playerAttached: function () {
               console.log('player attached');
           }
        }
    }
</script>