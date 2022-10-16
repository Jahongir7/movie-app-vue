<template>
  <div>
    <Navbar />
    <Searchbar />
  </div>
</template>

<script>
import Navbar from "./header-main/Navbar.vue";
import Searchbar from "./header-main/Searchbar.vue";

export default {
  components: {
    Navbar,
    Searchbar,
  },
};
</script>

<style>
</style>