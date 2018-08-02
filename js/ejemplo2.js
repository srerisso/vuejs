var app = new Vue({
  el: '#app',
  data : {
    seen: true,
    message: "Hello vue!"
  }
})

var app2 = new Vue ({
  el: '#app2',
  data: {
    message: "Hello vue!"
  }
})

app2.message = "I have changed data !";

var app3 = new Vue({
  el: '#app3',
  data: {
    todos: [
      { text: 'Learn Javascript'},
      { text: 'Learn Vue' },
      { text : 'Build something cling-cling' }
    ]
  }
})

app.todos.push({ text: "New item" });
