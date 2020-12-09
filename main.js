import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
// 全局使用stroe
Vue.prototype.$store = store;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
