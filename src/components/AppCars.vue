<template>
  <table style="width:100%">
    <tr>
      <th>ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Year</th>
      <th>Max speed</th>
      <th>Automatic</th>
      <th>Engine</th>
      <th>Number of doors</th>
      <th>Actions</th>
    </tr>
    <tr v-for="car in cars" :key="car.id">
      <td>{{car.id}}</td>
      <td>{{car.brand}}</td>
      <td>{{car.model}}</td>
      <td>{{car.year}}</td>
      <td>{{car.maxSpeed}}</td>
      <td>{{car.isAutomatic}}</td>
      <td>{{car.engine}}</td>
      <td>{{car.numberOfDoors}}</td>
      <td>
        <button type="button" @click="editCar(car.id)">Edit</button>
      </td>
      <router-link :to="showCar(car.id)">
        <button type="button">Show Car</button>
      </router-link>
      <td>
        <button type="button" @click="deleteCar(car.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import { carsService } from "@/services/cars";
export default {
  data() {
    return {
      cars: [],
      errors: []
    };
  },

  created() {
    carsService
      .getAll()
      .then(response => {
        this.cars = response.data;
      })
      .catch(e => {
        alert(e);
      });
  },

  methods: {
    editCar(id) {
      carsService.get(id).then(() => {
        this.$router.push("edit/" + id);
      });
    },
    deleteCar(id) {
      carsService
        .delete(id)
        .then(() => {
          this.$router.go();
        })
        .catch(e => {
          alert(e);
        });
    },

    showCar(id) {
      return "/cars/" + id;
    }
  }
};
</script>