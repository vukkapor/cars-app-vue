<template>
  <div>
    <form @submit.prevent="addNewCar(newCar)">
      <div>
        <label for="brand">Brand</label>
        <input type="text" minlength="2" id="brand" v-model="newCar.brand" required>
      </div>
      <div>
        <label for="model">Model</label>
        <input type="text" minlength="2" id="model" v-model="newCar.model" required>
      </div>
      <div>
        <label for="year">Year</label>
        <select id="year" v-model="newCar.year" required>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
        </select>
      </div>
      <div>
        <label for="maxSpeed">Max speed</label>
        <input type="number" id="maxSpeed" v-model="newCar.maxSpeed">
      </div>
      <div>
        <label for="numberOfDoors">Number of doors</label>
        <input type="number" id="numberOfDoors" v-model="newCar.numberOfDoors" required>
      </div>
      <div>
        <label for="isAutomatic">Automatic</label>
        <input type="checkbox"  id="isAutomatic" v-model="newCar.isAutomatic">
      </div>
      <div>
        <label for="engine">Engine type</label>
        <input type="radio" name="engine" id="engine" value="diesel" v-model="newCar.engine" required> Diesel
        <input type="radio" name="engine" id="engine" value="petrol" v-model="newCar.engine"> Petrol
        <input type="radio" name="engine" id="engine" value="electric" v-model="newCar.engine"> Electric
        <input type="radio" name="engine" id="engine" value="hybrid" v-model="newCar.engine"> Hybrid
      </div>
      <div>
        <button type="submit">Add a new car</button>
      </div>
    </form>
    <div>
      <button @click="resetForm()">Reset form</button>
    </div>
    <div>
      <button @click="preview()">Preview car</button>
    </div>
  </div>
</template>

<script>
import { carsService } from "@/services/cars";
export default {
  data() {
    return {
      newCar: { isAutomatic: false, maxSpeed: 0 }
    };
  },

  methods: {
    addNewCar(newCar) {
      carsService
        .add(newCar)
        .then(() => {
          this.newCar = { isAutomatic: false };
          this.$router.push("/cars");
        })
        .catch(e => {
          alert(e);
        });
    },

    resetForm() {
      this.newCar = { isAutomatic: false, maxSpeed: 0, numberOfDoors: 0 };
    },

    preview() {
      alert(
        "Brand: " + this.newCar.brand +
        "\nModel: "  + this.newCar.model +
        "\nYear: "  + this.newCar.year +
        "\nMax speed: "  + this.newCar.maxSpeed +
        "\nAutomatic: "  + this.newCar.isAutomatic +
        "\nEngine: "  + this.newCar.engine +
        "\nNumber of doors: "  + this.newCar.numberOfDoors
        )
    }
  }
};
</script>

