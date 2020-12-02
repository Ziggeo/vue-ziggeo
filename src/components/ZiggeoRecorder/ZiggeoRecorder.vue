<template>
  <div ref="ziggeoRecorder"></div>
</template>

<script>
/* eslint-disable */
import { defineComponent, markRaw, ref, onMounted, onDeactivated } from 'vue';
import {
  ziggeoRecorderAttributesPropTypes, ziggeoRecorderEmbeddingEventsPropTypes, globalOptions,
  recorderApplicationOptions, commonApplicationOptions
} from '../constants';

export const ZiggeoRecorder = defineComponent({
  name: "ZiggeoRecorder",
  props: {
    apiKey: {
      type: String,
      required: true,
      default: ''
    },
    ...globalOptions,
    ...commonApplicationOptions,
    ...recorderApplicationOptions,
    ...ziggeoRecorderAttributesPropTypes,
    ...ziggeoRecorderEmbeddingEventsPropTypes,
  },

  setup(props, { emit }) {
    const recorder = markRaw({});
    const ziggeoRecorder = ref(null);

    const _ziggeoAttributes = () => {
      return Object.keys(props).filter(k => ziggeoRecorderAttributesPropTypes[k]).reduce((p, k) => {
        p[k.replace(/^_/g, '')] = props[k];
        return p;
      }, {});
    }

    const _ziggeoAppOptions = () => {
      const { applicationOptions } = props;
      if (applicationOptions)
        return { ...commonApplicationOptions, ...recorderApplicationOptions, ...applicationOptions };
      else
        return { ...commonApplicationOptions, ...recorderApplicationOptions };
    }
    const options = _ziggeoAttributes();

    // Could be also used in onBeforeMount
    const ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(props.apiKey, _ziggeoAppOptions());

    onMounted(() => {
      const recorderElement = ziggeoRecorder.value;
      if (recorderElement && options) {
        recorder.value = new ZiggeoApi.V2.Recorder({
          element: recorderElement,
          attrs: options
        });

        const recorderObj = recorder.value;
        ziggeoApp.on("ready", () => {
          emit("recorderReady", recorderObj);
        });

        // access the DOM or template refs
        if (recorderObj) {
          recorderObj.activate();

          Object.keys(ziggeoRecorderEmbeddingEventsPropTypes).reduce((memo, propName) => {
            recorderObj.on(propName, (args) => {
              emit(propName, recorderObj, args);
            });
          }, {});
        }
      }
    });

    onDeactivated(() => {
      if (typeof recorder.value !== 'undefined')
        recorder.value.destroy();
    });

    return {
      ziggeoRecorder,
    };
  }
});

export default ZiggeoRecorder;
</script>
