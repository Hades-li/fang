import axios from 'axios'
import cookie from 'js-cookie'
import {host,api} from 'plugins/tools'

export default {
    namespaced: true,
    state: {
        data: undefined
    },
    mutations: {
        setData(state, data) {
            state.data = data
        }
    },
    actions: {
        async reqData ({ commit, state }, query) {
            console.log(`${api.roomDetail}&id=${query.id}`)
            const json = await axios.get(`${api.roomDetail}&id=${query.id}`)
            const res = json.data
            if (res.code === 0) {
                commit('setData', res.data)
            }
        }
    }
}
