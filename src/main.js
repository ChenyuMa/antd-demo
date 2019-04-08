import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueSlideBar from 'vue-slide-bar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
Vue.config.productionTip = false
Vue.component('VueSlideBar', VueSlideBar)
VueClipboard.config.autoSetContainer = true
Vue.use(Antd)
Vue.use(VueClipboard)
Vue.use(VueAxios, axios)
new Vue({
  render: h => h(App),
}).$mount('#app')
