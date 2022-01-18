import { createApp, VueElement } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Vue.config.productionTip = false   // 이건 뭐지?

// var App = {
//     template: '<div>app</div>'
// }

// new Vue({
//     render: h => h(App),
//     // compponents: {
//     //     'app': App
//     // }
// }).$mount('#app')

// new Vue({
//     el: '#app',
//     render: h => h(app)
// })