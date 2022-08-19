<template>
  <navbar-topo/>
  <corpo-padrao/>
  <rodape-bar/>
</template>

<script>

import CorpoPadrao from './components/layouts/Corpo.vue'
import RodapeBar from './components/layouts/Rodape.vue'
import NavbarTopo from './components/layouts/Topo.vue'

export default {
  name: 'App',
  components: {
    CorpoPadrao,
    RodapeBar,
    NavbarTopo
  },
  data: ()=> ({
    }),
  methods:{}
}
</script>

<style>

</style>
