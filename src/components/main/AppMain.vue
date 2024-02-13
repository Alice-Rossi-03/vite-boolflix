<script>


export default {
  name: 'AppMain'
}
</script>

<template>
  <div class="bg-darker">
    
  </div>
</template>

<style lang="scss" scoped>

  @use '../../styles/partials/variables' as *; 
  @use '../../styles/partials/mixins' as *; 

  .bg-darker{
    background-color: $darker;
    height: calc(100vh - 8em);
  }

</style>


