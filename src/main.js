/* eslint-disable */
const VERSION = require('../package').version;

import '../node_modules/ziggeo-client-sdk/build/ziggeo.css';
import '../node_modules/ziggeo-client-sdk/build/ziggeo.js';

import * as components from './components/index';
import { setVueInstance } from "@/utils/config";

const install = (instance) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    instance.use((components)[componentKey]);
  }
}

const ziggeo = {
  VERSION,
  install
};

export default ziggeo;
export * from './components';

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(install);
//   if (install.installed) {
//     install.installed = false;
//   }
// }
