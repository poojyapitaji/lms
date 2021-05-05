<template>
  <div id="app">
    <v-app id="inspire">
      <Navbar />
      <v-main style="background-color:#F5F7FA">
        <vue-page-transition name="fade-in-down">
          <router-view></router-view>
        </vue-page-transition>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
