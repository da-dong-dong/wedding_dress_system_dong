import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app.js'
import shopArr from './module/shopArr.js'
Vue.use(Vuex)

export default  new Vuex.Store({
	state:{
	},
	getters:{
	
	},
	mutations:{
	},
	modules:{
		app,
		shopArr
	}
})