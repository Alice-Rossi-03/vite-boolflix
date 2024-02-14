<script>
export default {
  
}
</script>

<template>
  <div>
    
  </div>
</template>


<style></style>
<!-- <script>

  export default {
    name: 'AppCardTv',
    props:[
      'propsElement'
    ]
  }

</script>

<template>
  <div class="card">
    <div class="pos-rel">
        <figure v-if="propsElement.poster_path">
            <img :src=" `https://image.tmdb.org/t/p/w342${propsElement.poster_path}`" alt="img">
        </figure>

        <div v-else class="img-not-found">Image Not Found :c</div>

    </div>
    
    <div class="hover-content">
        <h3 class="bigger-text">{{propsElement.name}}</h3>
        <h4 v-show="propsElement.name !== propsElement.original_name">Original Name: {{propsElement.original_name}}</h4>
        <div class="d-flex">
          <span style="font-weight: bold;">Language:  </span>
          <span :class="`lang-icon lang-icon-${propsElement.original_language}`"></span>
        </div>
        <div>{{propsElement.vote_average}}</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  @use '../../styles/partials/variables' as *; 
  @use '../../styles/partials/mixins' as *; 

  .card{
        width: 15em;
        height: 22.75em;
        position: relative;
        color: white;
        border-radius: 0.5em;
    .pos-rel{
        .img-not-found{
            padding-block: 5em;
            text-align: center;
        }
        figure{
            img{
                width: 100%;
                height: 100%;

            }
        }
    }
    .hover-content{
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.54);
        width: 100%;
        height: 100%;
        opacity: 0;
        padding-block: 2em ;
        padding-inline: 1em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        .bigger-text{
          font-size: 1.5em;
        }
        &:hover{
            opacity: 1;
        }
        .d-flex{
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
    }
}

</style> -->