import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		userName: 'The',
		userLastName: 'Rock',
        dimensions: ['dimension1', 'dimension2', 'dimension3', 'dimension4', 'dimension5', 'dimension6']
	},
    getters: {
	    revertName(state) {
	        return !state.userName ? state.userName: state.userName.split("").reverse().join("")
        }
    },
	// mutations as synchronous transactions
	mutations: {
		increment (state) {
			state.count++
		},
		changeName (state, payload) {
			state.userName = payload.userName
		}
	},
	// instead of mutationg the state, actions commit mutations
    // actions can contain arbitrary asynchronous operations.
	actions: {
		increment (context) {
		    return new Promise(function (resolve) {
		        setTimeout(function () {
		            context.commit('increment')
                    resolve(context.rootState.count)
                }, 1000)
            })
        }
	}
})
