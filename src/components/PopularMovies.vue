<template>
  <div>
    <h2 class="mt-5 text-yellow-600 text-lg font-semibold uppercase">
      Popular movies
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:cols-4 lg:cols-4">
      <MovieItems />
    </div>
  </div>
</template>

<script>
import MovieItems from "./items/MovieItem.vue";
export default {
  components: { MovieItems },
};
</script>

<style>
</style>