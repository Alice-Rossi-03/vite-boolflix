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

      if(store.searchText !== ''){
        store.apiUrlMovies += `&title=${searchText}`
      }

      if(store.searchText !== ''){
        store.apiUrlTv += `&title=${searchText}`
      }

      axios
      .get(store.apiUrlMovies)
      .then((result) => {
        console.log(result.data)
        store.cardList = result.data.results
      })

      axios
      .get(store.apiUrlTv)
      .then((result) => {
        console.log(result.data)
        store.cardList = result.data.results
      })
    }
  },
  mounted(){
    this.getList()
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