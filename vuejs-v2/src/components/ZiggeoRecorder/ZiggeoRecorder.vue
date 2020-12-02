<template></template>

<script>
    import {
        ziggeoRecorderAttributesPropTypes, ziggeoRecorderEmbeddingEventsPropTypes,
        recorderApplicationDefaultOptions
    } from '../constants';

    export default {
        props: {
            apiKey: {
                type: String,
                required: true,
                default: null
            },
            ...ziggeoRecorderAttributesPropTypes,
            ...ziggeoRecorderEmbeddingEventsPropTypes
        },

        created() {
            this.options = this._ziggeoAttributes();

            let { screenOptions, applicationOptions } = this;
            let _applicationOptions = {...recorderApplicationDefaultOptions, ...applicationOptions};
            if (screenOptions) {
                console.warn('screenOptions is deprecated and will be removed in future release, please use all options with applicationOptions despite.');
                _applicationOptions = {...screenOptions, ..._applicationOptions};
            }

            this.ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(this.apiKey, _applicationOptions);
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
                    this.$emit(propName, this.recorder, args);
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
                options: null,
            }
        },
        methods: {
            _ziggeoAttributes () {
                return Object.keys(this.$props).filter(k => ziggeoRecorderAttributesPropTypes[k]).reduce((props, k) => {
                    props[k.replace(/^_/g, '')] = this.$props[k];
                    return props;
                }, {});
            }
        }
    }
</script>
