<template></template>

<script>
    import {
        ziggeoPlayerAttributesPropTypes, ziggeoPlayerEmbeddingEventsPropTypes,
        ziggeoApiEventsPropTypes
    } from '../constants';

    export default {
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
            this.options = this._ziggeoAttributes();
            this.ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        },

        mounted() {
            this.player = new ZiggeoApi.V2.Player({
                element: this.$el,
                attrs: this.options
            });
            this.player.activate();

            Object.keys(ziggeoPlayerEmbeddingEventsPropTypes).reduce((memo, propName) => {
                // const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3);
                this.player.on(propName, (args) => {
                    this.$emit(propName, this.player, args);
                });
            }, {});
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
                ziggeoApp: null,
                options: null
            }
        },
        methods: {
            _ziggeoAttributes () {
                return Object.keys(this.$props).filter(k => ziggeoPlayerAttributesPropTypes[k]).reduce((props, k) => {
                    props[k] = this.$props[k];
                    return props;
                }, {});
            }
        }
    }
</script>