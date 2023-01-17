<template>
    <div>
      {{ msg }}
      <i>{{ amsg }} </i>

        <p>
            <button @click="getSomeJoke"> Can You Always Smile Bro :) For that I have Jokes For You </button>
            <br> <br><br><span v-if="Jokes.length != 0"> {{ Jokes }}  &#128540;</span>
        </p>

        <h6> {{ fakejson }} </h6>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: "Ping",
    data(){
        return {
            msg :"",
            amsg: "",
            Jokes:"",
            fakejson :"",
        }
    },
    methods:{
        getMsg(){
            const path = "http://localhost:5000/ping";
            axios.get(path)
            .then((res) => {
                this.msg = res.data;
                console.log(res.data)
            })
            .catch((error) =>{
                console.error(error);
            })
        },
        getAnot(){
            const path = "http://localhost:5000/y";
            axios.get(path)
            .then((res) => {
                this.amsg = res.data;
            })
            .catch((error) =>{
                console.error(error);
            })
        },
        getSomeJoke(){
            const path = "https://icanhazdadjoke.com/"
            let conf ={
                headers:{
                'Accept' : 'application/json'
                }
            }
             axios.get(path,conf)
             .then((res) => {
                 console.log(res);
                 this.Jokes=res.data.joke
            })
            .catch((error) =>{
                console.error(error);
            })
        
        },
        getFakejson(){
            const path = "http://localhost:5000/api_call";
            axios.get(path)
            .then((res) => {
                this.fakejson = res.data;
            })
            .catch((error) =>{
                console.error(error);
            })
        }

    },
    created(){
        this.getMsg();
        this.getAnot();
        // It is not needed because it configured on click // this.getSomeJoke();
        this.getFakejson();
    },
    watch (){
        this.msg
        this.amsg
    }
}


</script>

<style  scoped>

</style>