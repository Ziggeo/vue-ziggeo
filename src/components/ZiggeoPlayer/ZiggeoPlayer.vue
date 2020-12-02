<template>
  <div ref="ziggeoPlayer"></div>
</template>

<script>
/* eslint-disable */
import { defineComponent, ref, markRaw, onMounted, onDeactivated } from 'vue';
import {
  ziggeoPlayerAttributesPropTypes, ziggeoPlayerEmbeddingEventsPropTypes, globalOptions,
    commonApplicationOptions
} from '../constants';

export const ZiggeoPlayer = defineComponent({
  name: "ZiggeoPlayer",
  props: {
    apiKey: {
      type: String,
      required: true,
      default: ''
    },
    ...globalOptions,
    ...commonApplicationOptions,
    ...ziggeoPlayerAttributesPropTypes,
    ...ziggeoPlayerEmbeddingEventsPropTypes,
  },

  setup(props, { emit }) {
    const player = markRaw({});
    const ziggeoPlayer = ref(null);

    const _ziggeoAttributes = () => {
      return Object.keys(props).filter(k => ziggeoPlayerAttributesPropTypes[k]).reduce((p, k) => {
        p[k.replace(/^_/g, '')] = props[k];
        return p;
      }, {});
    }

    const _ziggeoAppOptions = () => {
      const { applicationOptions } = props;
      if (applicationOptions)
        return { ...commonApplicationOptions, ...applicationOptions };
      else
        return { ...commonApplicationOptions };

    }
    const options = _ziggeoAttributes();

    // Could be also used in onBeforeMount
    const ziggeoApp = ZiggeoApi.V2.Application.instanceByToken(props.apiKey, _ziggeoAppOptions());

    onMounted(() => {
      const playerElement = ziggeoPlayer.value;
      if (playerElement && options) {
        player.value = new ZiggeoApi.V2.Player({
          element: playerElement,
          attrs: options
        });

        const playerObj = player.value;
        ziggeoApp.on("ready", () => {
          emit("playerReady", playerObj);
        });

        // access the DOM or template refs
        if (playerObj) {
          playerObj.activate();

          Object.keys(ziggeoPlayerEmbeddingEventsPropTypes).reduce((memo, propName) => {
            playerObj.on(propName, (args) => {
              emit(propName, playerObj, args);
            });
          }, {});
        }
      }
    });

    onDeactivated(() => {
      if (typeof player.value !== 'undefined')
        player.value.destroy();
    });

    return {
      ziggeoPlayer,
    };
  },
  // render: function (createElement) {
  //   return createElement('div', { ref: 'root' })
  // }
  // render: h => h('div', { ref: 'ziggeoPlayer' })
});

export default ZiggeoPlayer;
</script>
