<template></template>

<script>
    import {
        ziggeoRecorderAttributesPropTypes, ziggeoRecorderEmbeddingEventsPropTypes,
        screenRecorderOptions
    } from '../constants';

    export default {
        props: {
            apiKey: {
                type: String,
                required: true,
                default: null
            },
            ...ziggeoRecorderAttributesPropTypes,
            ...ziggeoRecorderEmbeddingEventsPropTypes,
            ...screenRecorderOptions
        },

        created() {
            this.options = this._ziggeoAttributes();

            // Allow screen application options
            if (this.allowscreen) {
                this._applicationOptions(function (context, options) {
                    context.ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(context.apiKey, options);
                }, this);
            } else
                this.ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(this.apiKey, this.applicationOptions);

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
                applicationOptions: {}
            }
        },
        methods: {
            _ziggeoAttributes () {
                return Object.keys(this.$props).filter(k => ziggeoRecorderAttributesPropTypes[k]).reduce((props, k) => {
                    props[k] = this.$props[k];
                    return props;
                }, {});
            },

            _applicationOptions (callback, context) {
                if (!context.screenOptions) {
                    context.applicationOptions = {
                        chrome_extension_id: context.chrome_extension_id,
                        chrome_extension_install_link: context.chrome_extension_install_link,
                        opera_extension_id: context.opera_extension_id,
                        opera_extension_install_link: context.opera_extension_install_link
                    };
                    return callback(context, context.applicationOptions);
                } else
                    return callback(context, context.screenOptions);
            }

        }
    }
</script>