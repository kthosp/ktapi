<template>
<div>
    <div> 
        <nuxt-link to="/vue-ability">back</nuxt-link>
    </div>
    <div class="con-center">
        <h1>01.Data-Binding</h1>
        <br><hr>
        <h1>Hello {{name}}</h1>
        <input type="text" :value="name" />
    </div>
</div>    
</template>

<script>
export default {
    data(){
        return{
            name : "Nont"
        }
    }
}
</script>

<style>
 .con-center{
     text-align: center;
     margin-top: 2rem;
 }
</style>


