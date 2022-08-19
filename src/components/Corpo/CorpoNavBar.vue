<template>
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid justify-content-enter">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link"  href="#"  @click="navegarPara('agenda')" >Agenda</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" @click="navegarPara('gema')" >Gema</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" @click="navegarPara('mercado')" >Mercado</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" @click="navegarPara('mkt-x-mari')" >Mercado x Mari</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" @click="navegarPara('dg-infinita')" >DG infinita</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'CorpoNavBar',
    methods:{
      navegarPara(p){
        this.$emit('navegar',p)
      }
    }
  }
</script>

<style scoped>
</style>