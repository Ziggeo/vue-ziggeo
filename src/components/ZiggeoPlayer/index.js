// export { default } from './ZiggeoPlayer.vue';
import ZiggeoPlayer from './ZiggeoPlayer.vue';

import { registerComponent } from "@/utils";

const Plugin = {
  install(vue) {
    registerComponent(vue, ZiggeoPlayer);
  }
}

export default Plugin;

export { ZiggeoPlayer };

