import ZiggeoRecorder from './ZiggeoRecorder.vue';

import { registerComponent } from "@/utils";

const Plugin = {
  install(vue) {
    registerComponent(vue, ZiggeoRecorder);
  }
}

export default Plugin;

export { ZiggeoRecorder };
