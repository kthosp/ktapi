<template>
    <div class="con-center">
        <h1>02.V-Model</h1>
        <br><hr>
        <h1>Hello {{name}}</h1>
        <input type="text" :value="name" placeholder="edit me" />
        <br><hr>
        <input type="text" v-model="name" placeholder="edit me" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            name : "Nont" //ค่า default
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


