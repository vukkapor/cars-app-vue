<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/cars">Cars</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add">Add car</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-else>
          <button @click="logout()">Logout</button>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { authService } from "./services/Auth";

export default {
  name: "app",
  data() {
    return {
      isAuthenticated: false
    };
  },
  created() {
    this.isAuthenticated = authService.isAuthenticated();
  },
  methods: {
    logout() {
      authService.logout();
      this.$router.push("/login");
    }
  }
};
</script>
