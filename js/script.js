function car(name, model, year, phone, image) {
  return {
    name, model, year, phone, image
  }
}
const cars = [
  car("Ford", "Focus", 2015, "+79111234567", "img/focus.jpeg"),
  car("Ford", "Mondeo", 2016, "+79111236789", "img/mondeo.jpeg"),
  car("Nissan", "Juke", 2018, "+79111231234", "img/nissan.jpeg")
]

new Vue({
  el: "#app",
  data: {
    cars: cars,
    car: cars[0],
    selectedCarIndex: 0,
    phoneVisibility: false
  },
  methods: {
    selectCar: function (index) {
      this.car = cars[index]
      this.selectedCarIndex = index
    }
  },
  computed: {
  }
})
