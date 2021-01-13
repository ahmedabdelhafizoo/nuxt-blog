export default {
    state: () => ({
        axiosLoading: false,
        posts: null
    }),
    getters: {
        getAxiosLoadingStatus(state) {
            return state.axiosLoading;
        }
    },
    mutations: {
        updateAxiosLoadingStatus(state, payload) {
            state.axiosLoading = payload;
        },
        updatePosts(state, payload) {
            state.posts = payload;
        }
    },
    actions: {}
}