Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables'},
      { id: 1, text: 'Pecorino cheese'},
      { id: 2, text: 'Chickpeas'}
    ]
  }
})
