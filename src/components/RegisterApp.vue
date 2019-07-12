<template>
  <div class="container mt-4">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Register</h2>
      <input
        v-model="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Name"
        required
        autofocus
      />
      <input
        v-model="email"
        type="email"
        class="form-control"
        name="email"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/Auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },

  methods: {
    register() {
      authService.register(this.name, this.email, this.password).then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>
