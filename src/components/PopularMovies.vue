<template>
  <div>
    <h2 class="mt-5 text-yellow-500 text-lg font-semibold uppercase">
      Popular movies
    </h2>
    <MovieItems />
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