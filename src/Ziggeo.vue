<template>
    <ziggeo-player :apiKey="'72803e1be33b3690f2bef5bc010f6511'" video="'2c058fefd16fd4d57c202369d3bb0694'"></ziggeo-player>
</template>

<script>
    import ZiggeoPlayer from './components/ZiggeoPlayer.vue';
    import ZiggeoRecorder from './components/ZiggeoRecorder.vue';
    import { eventBus } from "../main";

    export default {
        beforeMount() {
            this.application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        },
        name: 'app',
        components: {
            ZiggeoPlayer,
            ZiggeoRecorder
        },
        created() {
            eventBus.$on("attached", (data) => {

            });
        },
        data () {
            return {
                application: null
            }
        }
    }
</script>