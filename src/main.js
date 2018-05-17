import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(vuetify);

new Vue({
  el: '#app',
  render: h => h(App)
})