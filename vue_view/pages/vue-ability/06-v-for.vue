<template>
    <div class="con-center">
        <h1>06.v-for</h1>
        <br><hr>
        <h1>Student List</h1>
        <br>
        <ul>
            <li v-for="st in student" :key="st.code">
                <span>{{st.code}}</span>
                <span>{{st.name}}</span>
            </li>
        </ul>
    </div>
</template>



<script>
export default {
    data(){
        return{
            student :[
                {code:"001",name:"Name1"},
                {code:"002",name:"Name2"},
                {code:"003",name:"Name3"},
                {code:"004",name:"Name4"}
            ]
        }
    },

 
}
</script>


<style>
 .con-center{
     text-align: center;
     margin-top: 2rem;
 }
</style>

