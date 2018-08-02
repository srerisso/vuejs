const app = new Vue({
  el: '#app',
  template: "#ejemplo",
  data: {
    cursos: [
        {name:"Reactjs", url:"https://reactjs.org/", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"},
        {name:"Vuejs", url:"https://vuejs.org/", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/240px-Vue.js_Logo.svg.png"},
        {name:"Angularjs", url:"https://angular.io/", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/320px-AngularJS_logo.svg.png"}
    ],
    mostrar: true,
    mensaje: "Hola mundo" ,
    imagen: "https://raw.githubusercontent.com/vuejs/art/master/logo.png"
  },
  methods: {
    toggleMostrar: function() {
      this.mostrar = !this.mostrar
    }
  }
})