export default function ({$axios, store}) {
    $axios.onRequest(config => {
        store.commit("updateAxiosLoadingStatus", true);
    })

    $axios.onResponse(() => {
        store.commit("updateAxiosLoadingStatus", false);
    })

    $axios.onError(() => {
        store.commit("updateAxiosLoadingStatus", false);
    })
}
