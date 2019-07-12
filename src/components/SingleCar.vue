<template>
  <div>
    Brand: {{car.brand}}
    <br />
    Model: {{car.model}}
    <br />
    Year: {{car.year}}
    <br />
    Max Speed: {{car.maxSpeed}}
    <br />
    Automatic: {{car.isAutomatic}}
    <br />
    Engine: {{car.engine}}
    <br />
    Number of doors: {{car.numberOfDoors}}
    <br />
  </div>
</template>

<script>
import { carsService } from "@/services/cars";
export default {
  data() {
    return {
      car: []
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      carsService
        .get(vm.$route.params.id)
        .then(response => {
          vm.car = response.data;
        })
        .catch($e => {
          alert($e);
        });
    });
  }
};
</script>

