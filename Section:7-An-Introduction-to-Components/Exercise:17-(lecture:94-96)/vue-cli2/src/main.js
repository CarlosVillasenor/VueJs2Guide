import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//here we can add elements to be render in our template
// this is how we register a component globally
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
