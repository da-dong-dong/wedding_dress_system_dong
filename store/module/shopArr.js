export default{
	namespaced: true,
	state:{
		// ticket
		ticket:null,
		//ccId
		ccId:null,
		// 商店ID
		shopId:null,
		// 员工信息
		userInfo:null,
	},
	getters:{
		get_ticket:state => state.ticket,
		get_ccId:state => state.ccId,
		get_userInfo: state => state.userInfo,
		shopId:state => state.shopId,
	},
	mutations:{
		mut_ticket(state,data){
			state.ticket = data
		},
		mut_ccId(state,data){
			state.ccId = data
		},
		mut_userInfo(state,data){
			state.userInfo = data
		},
		mut_shopId(state,data){
			state.shopId = data
		}
	},
  actions: {
		act_ticket({ commit }, data) {
			commit('mut_ticket', data)
		},
		act_ccId({ commit }, data) {
			commit('mut_ccId', data)
		},
		act_userInfo({ commit }, data) {
			commit('mut_userInfo', data)
			commit('mut_shopId', data.defaultShopId)
		},
		
  }
}