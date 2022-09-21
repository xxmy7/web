export default {
    state: {
        images: [],
    },
    getters: {},
    mutations: {
        updateImages(state, url) {
            state.images.push(url);
        },
        replaceImages(state, images) {
            state.images = images;
        },
        deleteImage(state, i) {
            state.images.splice(i, 1);
        },
        clearImages(state) {
            state.images = [];
        }
    },
    actions: {},
    modules: {}
}