<template>
    <div class="con-center">
        <h1>05.v-if and v-show</h1>
        <br><hr>
        <h1 v-if="ok">Hello {{name}}</h1>
        <h2 v-show="ok"> UP NAME - {{ upperName }} </h2>
        <br>
        <input type="text" :value="name" placeholder="edit me" />
        <br><hr>
        <input type="text" v-model="name" placeholder="edit me" />
        <br>
        <button @click="doSave">SAVE ME</button>
    </div>
</template>



<script>
export default {
    data(){
        return{
            name : "Nont" , //ค่า default
            ok: true
        }
    },

    computed: {
        upperName(){
            return this.name.toUpperCase()
        }
    },
    methods: {
        doSave(){
            this.ok = !this.ok;
            console.log("This is Name " + this.name);
            console.log("This is Name " + this.upperName);
            
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

