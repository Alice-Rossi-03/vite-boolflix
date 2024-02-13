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

      axios
      .get(store.apiUrlMovies)
      .then((result) => {
        console.log(result.data)
        store.cardListMovies = result.data.results
      })

      axios
      .get(store.apiUrlTv)
      .then((result) => {
        console.log(result.data)
        store.cardListTvs = result.data.results 
      })

      if(store.searchText !== ''){
        store.apiUrlMovies += `&title=${searchText}`
      }

      if(store.searchText !== ''){
        store.apiUrlTv += `&name=${searchText}`
      }
    }
  },
  mounted(){
    this.getList()
    console.log(store.cardList)
  }
};
</script>

<template>
  <header>
    <AppHeader @filterNetflix="getList"/>
  </header>
  <main>
    <AppMain/>
  </main>
</template>

<style lang="scss">
  
</style>