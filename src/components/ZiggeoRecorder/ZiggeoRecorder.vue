<template></template>

<script>
    import {
        ziggeoRecorderAttributesPropTypes, ziggeoRecorderEmbeddingEventsPropTypes
    } from '../constants';

    export default {
        props: {
            apiKey: {
                type: String,
                required: true,
                default: ''
            },
            ...ziggeoRecorderAttributesPropTypes,
            ...ziggeoRecorderEmbeddingEventsPropTypes
        },

        created() {
            this.options = this._ziggeoAttributes();
            this.ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(this.apiKey);
        },

        mounted() {
            this.recorder = new ZiggeoApi.V2.Recorder({
                element: this.$el,
                attrs: this.options
            });
            this.recorder.activate();

            Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce((memo, propName) => {
                // const eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3);
                this.recorder.on(propName, (args) => {
                    this.$emit(propName, args)
                });
            }, {});
        },

        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},

        // After mounted element destroyed
        destroyed() {
            if(this.recorder)
                this.recorder.destroy();
        },

        data() {
            return {
                recorder: null,
                ziggeoApp: null,
                options: null
            }
        },
        methods: {
            _ziggeoAttributes () {
                return Object.keys(this.$props).filter(k => ziggeoRecorderAttributesPropTypes[k]).reduce((props, k) => {
                    props[k] = this.$props[k];
                    return props;
                }, {});
            }
        }
    }
</script>