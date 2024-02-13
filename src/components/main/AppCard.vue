<script>


export default {
  name: 'AppCard',
  props:[
    'propsElement'
  ]
}
</script>

<template>
  <div class="card">
    <figure>
        <img src="" alt="img">
    </figure>
    <h3>Title</h3>
    <h4>Original Title</h4>
    <div>Language</div>
    <div>Voto</div>
  </div>
  <div class="card">
    <figure>
        <img src="" alt="img">
    </figure>
    <h3>Title</h3>
    <h4>Original Title</h4>
    <div>Language</div>
    <div>Voto</div>
  </div>
</template>

<style lang="scss" scoped>

  @use '../../styles/partials/variables' as *; 
  @use '../../styles/partials/mixins' as *; 

  .card{
    width: 15em;
    color: white;
    padding: 0.5em;
    border: 1px solid white;
    border-radius: 0.5em;
  }

</style>


