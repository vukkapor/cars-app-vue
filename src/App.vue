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
        </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>
