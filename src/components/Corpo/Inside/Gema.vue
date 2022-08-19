<template>
  <hr class="border border-2 border-warning opacity-100 mb-1">
  <hr class="border border-2 border-warning opacity-100 mt-0">
  <!-- tabela quantidade de gemas  -->
  <table class="table table-striped-columns">
    <thead>
      <tr>
        <th>Gemas lvl 1 necessarias para o lvl:</th>
        <th v-for="n in 10" :key='n'>{{n}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>quantidade de gemas:</td>
        <td v-for="(qnt ,index) in quantidadeGemas" :key='index'>{{qnt.toLocaleString('pt-BR',{style:'decimal'})}}</td>
      </tr>
    </tbody>
  </table>
  <hr class="border border-2 border-warning opacity-100 mb-1">
  <hr class="border border-2 border-warning opacity-100 mt-0">
  <!-- tabela rendimento das gemas  -->
  <table class="table table-striped-columns">
    <thead>
      <tr>
        <th>level da gema</th>
        <th v-for="(gema, index) in gemas" :key='index'>{{gema.level}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>preço mercado:</td>
        <td v-for="(gema, index) in gemas" :key='index'>{{gema.price.toLocaleString('pt-BR',{style:'decimal'}) }}</td>
      </tr>
      <tr>
        <td>rendimento:</td>
        <td v-for="(gema, index) in gemas" :key='index'>
          {{rendimentoGema(gema.price, index)}}
          <div class="form-text">ultimo update: {{gema.last_update}}</div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- form update gema  -->
  <button @click="formGemaShowF()">Atualizar preço das gemas</button>
  <!-- <gema-form  v-if="formGemaShow" :gemaData='this.gemas'> </gema-form> -->
  <gema-form  v-if="formGemaShow" :gemaData='this.gemas' @atualizacao='gemaAtualizacao= $event'> </gema-form>
  <hr class="border border-2 border-warning opacity-100 mb-1">
  <hr class="border border-2 border-warning opacity-100 mt-0">
</template>

<script>
  import { supabase } from "@/supabase"
  import gemaForm from '@/components/Corpo/Inside/GemaForm.vue'

  export default {
  components: { gemaForm },
    name: 'Gema',
    data:()=>({
      gemas:{},
      error:{},
      quantidadeGemas:[1,3,9,27,81,243,729,2187,6561,19683],
      formGemaShow: false,
      gemaAtualizacao:''
    }),
    methods:{
      async getGemas(){
        try{
          const { data } = await supabase
          .from('gem')
          .select('*')
          .order('id' )
          this.gemas= data
        }catch(error){
          console.log(error)
        }
      },
      formGemaShowF(){
        this.formGemaShow= !this.formGemaShow
      },
      rendimentoGema(p1, p2){// gema.level, gema.price, index
        let lvl1Preco = Math.floor(this.gemas[0].price*0.95)
        let custoProducao = lvl1Preco* this.quantidadeGemas[p2]
        let valorMercadoLevelAtual = Math.floor(p1*0.95)
        let rendimento =  ((valorMercadoLevelAtual*100)/custoProducao)-100
        let ajuste = Math.floor(rendimento)
        return ajuste+'%'
      }
    },
   created(){
      this.getGemas()
    },
    watch:{
      gemaAtualizacao(p1){ 
        this.gemas[p1[0].id-1].price = p1[0].price
        this.gemas[p1[0].id-1].last_update = p1[0].last_update
      }
    }
  }
  
</script>

<style scoped>
</style>