<template></template>

<script>
    // import EventBus from "../../event-bus";
    import {
        ziggeoPlayerAttributesPropTypes, ziggeoPlayerEmbeddingEventsPropTypes,
        ziggeoApiEventsPropTypes
    } from '../../constants';

    export default {
        name: "ziggeo-player",
        props: {
            apiKey: {
                type: String,
                required: true,
                default: ''
            },
            ...ziggeoPlayerAttributesPropTypes,
            ...ziggeoPlayerEmbeddingEventsPropTypes
        },

        created() {
            this.options = {
                video: this.video
            };
            this.application = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        },

        mounted() {
            this.player = new ZiggeoApi.V2.Player({
                element: this.$el,
                attrs: this.options
            });
            this.player.activate();

            this.player.on('attached', (data) => {
                this.$emit('attached', data);
                // EventBus.$emit('attached', data);
                // EventBus.$on('attached', data); -- add listener
                // EventBus.$on('attached', data); -- remove listener
            });
        },

        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},

        // After mounted element destroyed
        destroyed() {
            if(this.player)
                this.player.destroy();
        },

        data() {
            return {
                player: null,
                application: null,
                options: null
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>