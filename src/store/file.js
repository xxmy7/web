

export default {
    state: {
        images: [],
    },
    getters: {
    },
    mutations: {
        updateImages(state, url) {
            state.images.push(url);
        },
        replaceImages(state,images){
            state.images = images;
        },
        clearImages(state){
            state.images = [];
        }
    },
    actions: {
    },
    modules: {}
}