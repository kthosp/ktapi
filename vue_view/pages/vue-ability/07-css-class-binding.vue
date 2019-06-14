<template>
    <div class="con-center">
        <h1>07.css class binding</h1>
        <br><hr>
        <h1>Student List</h1>
        <br>
        <ul>
            <li v-for="st in student" :key="st.code"
            :class="{fail: st.score < 50 , good : st.score >=80}">
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
                {code:"001",name:"Name1",score:49},
                {code:"002",name:"Name2",score:60},
                {code:"003",name:"Name3",score:50},
                {code:"004",name:"Name4",score:85}
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

 .good{
     color: green;
 }
.fail{
    color: red;
}
</style>

