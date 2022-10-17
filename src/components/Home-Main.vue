<template>
  <div class="container mx-auto">
    <div class="flex border-b border-gray-500 justify-between">
      <Navbar />
      <Searchbar />
    </div>
    <PopularMovies />
  </div>
</template>

<script>
import Navbar from "./header-main/Navbar.vue";
import Searchbar from "./header-main/Searchbar.vue";
import PopularMovies from "./PopularMovies.vue";

export default {
  components: {
    Navbar,
    Searchbar,
    PopularMovies,
  },
};
</script>

<style>
</style>