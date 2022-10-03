import Vue from 'vue'
import App from 'app'

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.useAttrs(VueAxios, axios);

new Vue({
    render: h => h(App),
}).$mount('#app')