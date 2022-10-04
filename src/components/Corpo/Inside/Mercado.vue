<template>
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2">
        <!-- coluna t2 -->
        <div class="col">
          <div class=" row border border-dark bg-primary" v-for="(item, index) in t2" :key='index'>
            <label for="" class="col-6">{{item.name}}: </label>
            <input type="number" size="6" class="bg-primary border border-0 col-3"  v-model='item.price'>
            <button class="btn btn-warning col-2" @click="enviar(item)">atualizar</button>
          </div>
        </div>
        <!-- coluna t1 -->
        <div class="col">
          <div class=" row border border-dark bg-success" v-for="(item, index) in t1" :key='index'>
            <label class="col-6" for="">{{item.name}}: </label>
            <input  type="number" size="6" class="bg-success border border-0 col-3"  v-model='item.price'>
            <button class="col-2 btn btn-warning" @click="enviar(item)">atualizar</button>
          </div>
        </div>
        <!-- coluna t3 -->
        <div class="col">
          <div class=" row border border-dark t3" v-for="(item, index) in t3" :key='index'>
            <label for="" class="col-6">{{item.name}}: </label>
            <input  type="number" size="6" class="t3 border border-0 col-3"  v-model='item.price' >
            <button class="btn btn-warning col-2"  @click="enviar(item)">atualizar</button>
          </div>
        </div>
        <!-- aqui é para ser a ls -->
        <div class="col">
          <div class=" row  border border-dark t3" v-for="(item, index) in t3" :key='index'>
            <label for="" class="col-6">{{item.name}}: </label>
            <input  type="number" size="6" class="t3 border border-0 col-3" v-model='item.price'>
            <button class="btn btn-warning col-2"  @click="enviar(item)">atualizar</button>
          </div>
        </div> 
        <!--  -->
      </div>
    </div>
</template>

<script>
  import { supabase } from "@/supabase"
  export default {
    name: 'Mercado',
    data: ()=>({
      mkt: {},
      t1:{},
      t2:{},
      t3:{},
      ls:{}
    }),
    methods:{
      async getmkt(){
        try{
          const { data } = await supabase
          .from('mkt_sa')
          .select('*')
          .order('id' )
          this.mkt= data
          this.getT1()
          this.getT2()
          this.getT3()
          this.getLS()
        }catch(error){
          console.log(error)
        }
      },
      async enviar(item){
        try{
            let dataAtual = new Date().toLocaleString('pt-BR')
            const {data} = await supabase
            .from('mkt_sa')
            .update({ price : item.price,last_update: dataAtual })
            .eq('id', item.id)
            console.log(data)
        }catch(error){
          console.log('error->>>',error)
        } 
      },
      getT1(){
        this.t1 = this.mkt.filter(this.setT1)
      },
      setT1(obj){
        if (obj.categoria == 't1'){
          return true
        }else{
          return false
        }
      },
      getT2(){
        this.t2 = this.mkt.filter(this.setT2)
      },
      setT2(obj){
        if (obj.categoria == 't2'){
          return true
        }else{
          return false
        }
      },
      getT3(){
        this.t3 = this.mkt.filter(this.setT3)
      },
      setT3(obj){
        if (obj.categoria == 't3'){
          return true
        }else{
          return false
        }
      }   
    },
    created(){
      this.getmkt()
    },
  }
</script>

<style scoped>
.t3{
  background-color: #EF5E1A;
}
</style>