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
    <div>
      <input type="search" v-model="store.searchText" placeholder="Search..." @keyup.enter="$emit('filterNetflix')">
      <button @click="$emit('filterNetflix')">GET ALL</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  @use '../../styles/partials/variables' as *; 
  @use '../../styles/partials/mixins' as *; 

  .bg-black{
    box-shadow: 0px 0px 100px black;
    background-color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8em;

    input{
      height: 3em;
      border-radius: 1em;
      border: none;
      margin-right: 1em;
      width: 20em;
      padding: 1em; 

    }

    figure{
      width: 20%;

      img{
        width: 100%;
      }
    }

    button{
      height: 3em;
      border-radius: 1em;
      border: none;
      margin-right: 1em;
      padding: 0.5em;
      background-color: #F45555;
      color: white;
      font-weight: bold;

      &:hover{
        color: black;
        background-color: #ff9696;
      }
    }
  }

</style>