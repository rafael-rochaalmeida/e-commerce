import Vue from 'vue'
import App from './App.vue'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
// import {fab } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
library.add(far);
// library.add(fab);

Vue.config.productionTip = false

Vue.component('FontAwesome', FontAwesomeIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
