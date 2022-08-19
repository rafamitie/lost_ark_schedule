<template>
    <keep-alive>
      <component :is="propsRenderizar" />
    </keep-alive>
</template>

<script>
import Agenda from '@/components/Corpo/Inside/Agenda.vue'
import DgInfinita from '@/components/Corpo/Inside/DgInfinita.vue'
import Gema from '@/components/Corpo/Inside/Gema.vue'
import Mercado from '@/components/Corpo/Inside/Mercado.vue'
import MktXMari from '@/components/Corpo/Inside/MktXMari.vue'


  export default {
    name: 'CorpoBody',
    components:{DgInfinita,Gema,Mercado,MktXMari,Agenda},
    data: () =>({
    }),
    props:{
      propsRenderizar:{ type: String, required: true},
    }
  }
</script>

<style scoped>

</style>