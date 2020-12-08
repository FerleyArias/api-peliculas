<template>
  <div>
    <div class="movie__card">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full movie__img"
          :src="rutaImagen(item.poster_path)"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 movie__content">
          <div
            class="font-bold text-xl mb-2"
          >{{item.original_title}} - {{item.original_language.toUpperCase()}}</div>
          <p class="text-gray-700 text-base" v-text="item.overview"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardMovie",
  props: {
    item: Object,
  },
  methods: {
    rutaImagen(ruta) {
      return `${this.$store.getters.getUrlMovie}${ruta}`;
    },
  },
};
</script>
<style>
.movie__card{
  width: 290px;
  padding: 10px;
}

.movie__img{
  width: 290px;
  height: 300px;
}

.movie__content{
  height: 300px;
}
</style>