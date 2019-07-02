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
      .getCars()
      .then(response => {
        this.cars = response.data;
      })
      .catch(e => {
        alert(e);
      });
  }
};
</script>