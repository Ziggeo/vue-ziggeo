<template>
</template>

<script>
    import { eventBus } from "../main";

    export default {
        props: {
            apiKey: {
                type: String,
                required: true,
                default: ''
            },
            video: String,
            player: Object,
            application: Object
        },

        beforeCreate() {},
        created() {},

        beforeMount() {
            this.application = ZiggeoApi.V2.Application;
        },

        mounted() {
            this.player = ZiggeoApi.V2.Player({
                element: this.element,
                attrs: {
                    video: this.video
                }
            });

            this.player.on('attached', (value) => {
                // this.$emit('attached', value);
                // eventBus.$emit('attached', value);
                eventBus.onAttached(data)
            })
        },

        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},

        // After mounted element destroyed
        destroyed() {
            this.player.destroy();
        },

        data() {
            return {
                application: null,
                player: null
            }
        },
        // name: "ziggeo-player",
        methods: {

        }
    }
</script>

<style scoped>

</style>