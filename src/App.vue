<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <h2>
            Player
        </h2>
        <ziggeo-player
            :apiKey="'72803e1be33b3690f2bef5bc010f6511'"
            :video="'2c058fefd16fd4d57c202369d3bb0694'"
            :width="330"
            :height="210"
            @attached="playerAttached"
        ></ziggeo-player>
        <h2>
            Recorder
        </h2>
        <ziggeo-recorder
            :apiKey="'72803e1be33b3690f2bef5bc010f6511'"
        >
        </ziggeo-recorder>
    </div>
</template>

<script>
    // import Ziggeo from 'Ziggeo';
    import ZiggeoPlayer from 'Components/ZiggeoPlayer';
    import ZiggeoRecorder from 'Components/ZiggeoRecorder';

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js Ziggeo implementation App'
            }
        },
        components: {
            ZiggeoRecorder,
            ZiggeoPlayer
        },
        methods: {
            playerAttached: function () {
                console.log('player attached');
            }
        }
    }
</script>