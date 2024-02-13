<script>
import AppCard from './AppCard.vue';
import {store} from '../../store'

export default {
  name: 'AppMain',
  components:{
    AppCard
  },
  data(){
    return{
      store
    }
  },
  methods: {
    
  },
}
</script>

<template>
  <div class="bg-darker">
    <div class="contanier-flex">
      <AppCard v-for="(element, index) in store.cardList" :key="index" :propsElement="element"/> 

    </div>
  </div>
</template>

<style lang="scss" scoped>

  @use '../../styles/partials/variables' as *; 
  @use '../../styles/partials/mixins' as *; 

  .bg-darker{
    background-color: $darker;
      .contanier-flex{
      background-color: $darker;
      display: flex;
      gap: 0.3em;
      padding: 1em;
      align-items: start;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
      margin: auto;
      overflow-y: scroll;
      padding-block: 2em;
      
    }
  }
  

</style>


