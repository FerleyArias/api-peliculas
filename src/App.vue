<template>
  <div class="app container">
    <!-- component -->
    <div
      class="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative"
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Buscar pelicula"
        class="appearance-none w-full outline-none focus:outline-none active:outline-none"
        v-model="buscar"
      />
      <button
        type="button"
        @click="busqueda()"
        class="ml-1 outline-none focus:outline-none active:outline-none"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="float-left">
        <cardMovie :item="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import cardMovie from "./components/cardMovie.vue";
import axios from 'axios'
export default {
  name: "App",
  data() {
    return {
      items: [],
      buscar: ""
    };
  },
  methods: {
    cargar() {
      axios.get(this.$store.getters.getMovies)
      .then((response) => {
        this.items = response.data.results;
      });
    },
    busqueda(){
        axios.get(`${this.$store.getters.getQuery}${this.buscar}`)
        .then((response)=> {
          this.items = response.data.results;
        })
        .catch((error)=>{
          alert(error.message)
        })
    }
  },
  created() {
    this.cargar();
  },
  components: {
    cardMovie,
  },
};
</script>
<style>
html {
  background: #e9e4e4;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.container {
  width: 1200px;
  margin: auto;
}
</style>

