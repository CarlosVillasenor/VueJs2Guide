import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // this function will render a certain template in the
  // place of our 'el' selector, we import App from our App.vue file
  
  render: h => h(App)
})
