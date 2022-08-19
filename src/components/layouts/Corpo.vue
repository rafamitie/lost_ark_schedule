<template>
  <div class="container">
    <corpo-nav-bar @navegar=" componenteRenderizar = $event" ></corpo-nav-bar>
    <corpo-body :propsRenderizar="componenteRenderizar"></corpo-body>
  </div>

</template>

<script>
import CorpoBody from '@/components/Corpo/CorpoBody.vue'
import CorpoNavBar from '@/components/Corpo/CorpoNavBar.vue'
  export default {
    name: 'Corpo',
    components:{
      CorpoBody,
      CorpoNavBar
    },
    data: ()=>({
      componenteRenderizar: 'Gema'
    }),
    methods:{}
  }
</script>

<style scoped>
</style>