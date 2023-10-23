const createApp = Vue.createApp;
createApp({

    data() {
        return {
            picture: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
            message: 'Hello Vue!',
            classLogo: "logo",
            classTextCenter: "text-center", 
        }
    },

    methods() {

    }
}).mount('#app')