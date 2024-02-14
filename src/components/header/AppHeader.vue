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
    box-shadow: 0px 0px 3em 3em rgba(0, 0, 0, .800);
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    height: 8em;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

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