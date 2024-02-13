<script>
import {store} from '../../store'

export default {
  name: 'AppHeader',
  data(){
    return{
      store
    }
  }
};

</script>

<template>
  <div class="bg-black">
    <figure>
      <img src="../../assets/img/Netflix-Brand-Logo.png" alt="logo">
    </figure>
    <input type="search" v-model="searchText" placeholder="Search...">
  </div>
</template>

<style lang="scss" scoped>

  @use '../../styles/partials/variables' as *; 
  @use '../../styles/partials/mixins' as *; 

  .bg-black{
    background-color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8em;

    input{
      height: 3em;
      border-radius: 1em;
      border: none;
      margin-right: 1.5em;
      width: 20em;
      padding: 1em; 

    }

    figure{
      width: 20%;

      img{
        width: 100%;
      }
    }
  }

</style>