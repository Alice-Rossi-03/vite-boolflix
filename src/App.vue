<script>
import axios from 'axios';
import AppHeader from './components/header/AppHeader.vue'
import AppMain from './components/main/AppMain.vue'
import {store} from './store'

export default {
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getList(){

      store.apiUrlMoviesSearch = 'https://api.themoviedb.org/3/search/movie?api_key=9cc9fcb5482c5e3d9b233e9976513ee0'
      store.apiUrlTvSearch = 'https://api.themoviedb.org/3/search/tv?api_key=9cc9fcb5482c5e3d9b233e9976513ee0'

      if(store.searchText !== ''){
        store.apiUrlMoviesSearch += `&query=${store.searchText}`
      }

      if(store.searchText !== ''){
        store.apiUrlTvSearch += `&query=${store.searchText}`
      }

      axios
      .get(store.apiUrlMoviesSearch)
      .then((result) => {
        console.log(result.data)
        store.cardListMovies = result.data.results
      })

      axios
      .get(store.apiUrlTvSearch)
      .then((result) => {
        console.log(result.data)
        store.cardListTvs = result.data.results 
      })
    }
  },
  mounted(){
    this.getList()
    console.log(store.cardListMovies)
    console.log(store.cardListTv)
  }
};
</script>

<template>
    <AppHeader @filterNetflix="getList"></AppHeader>
    <AppMain/>
</template>

<style lang="scss">

</style>