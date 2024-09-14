<style>

    .background{
        background-color: rgba(0, 0, 0, 0.3);
        width: 100vw;
        height: 100vh;
        position:absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .wrapper{
        background-color: white;
        height: 50%;
        z-index: 2;
    }
    .productInput{
        padding-left: 20%;
        padding-right: 20%;
        margin-bottom: 2%
    }

</style>

<template>

     <div class="background">
        <div class="container wrapper">
            <div class="row justify-content-end">
                <div class="col-1">   
                    <button  @click="close">&times;</button>
                </div>
            </div>
            <div class="row align-items-end">
                <form>
                    <div class="row productInput">
                        <label for="nomeProd">Nome do Produto: </label>
                        <input id="nomeProd" name="nomeProd" type="text">
                    </div>
                    <div class="row productInput">
                        <label for="categoriaProd">Categoria: </label>
                        <select name="categoriaProd" id="categoriaProd">
                            <option value="limpeza">Limpeza</option>
                            <option value="hortifruti">Hortifruti</option>
                            <option value="mercearia">Mercearia</option>
                        </select>                   
                    </div>
                    <div class="row productInput">
                        <label for="imgProd">Imagem do Produto: </label>
                        <input name="imgProd" id="imgProd" type="file" >
                    </div>
                    <div class="row productInput">
                        <button type="submit">Cadastrar Produto</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "registerForm",
        data(){
            return{
                
            }
        },
        methods:{
            close(){
                this.$emit('close')
            }
        }
    }
</script>