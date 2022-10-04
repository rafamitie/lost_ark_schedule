<template>
    <form action="" class="row">
        <div class="col-sm-6 mb-1" v-for="(gema, index) in gemas" :key='index'>
            <div class="row">
                <label class="col-3 col-form-label" for='' >Gema level {{gema.level}}:</label>
                <div class="col-6">
                    <input  type="number" class="form-control " v-model='gemas[index].price'>
                </div>
                <button class="btn btn-success col-3" type="button" @click="enviar(index, gema.id)">Atualizar </button>            
            </div>
        </div>    
    </form>   
</template>
<script>
import { supabase } from "@/supabase"
export default {
    name: 'GemaForm',
    props:{gemaData:{type: Object, required: true}},
    data:()=>({
        gemas:{}
    }),
     created(){
        this.gemas = JSON.parse(JSON.stringify(this.gemaData))
        // this.gemas= this.gemaData //aqui ainda estou apontando para o gemas la do pai, da mo B.O.
    },
    methods:{
        async enviar(p1,p2){
        try{
            let dataAtual = new Date().toLocaleString('pt-BR')
            const {data} = await supabase
            .from('gem')
            .update({ price : this.gemas[p1].price,last_update: dataAtual })
            .eq('level', p2)
            this.$emit('atualizacao', data)
        }catch(error){
          console.log('error->>>',error)
        }
      }
    }
}
</script>