<template>
  <h1>Prakash Reaction Timer</h1>
  <button @click="start" :disabled="isplaying">play</button>
  <Block v-if="isplaying" :delay="delay" @end="endgame"/>
  <!-- <p v-if="showResult" > Reaction Time {{score  }} ms</p> -->
  <Result v-if="showResult" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'
export default {
  name: 'App',
  components:{Block,Result},
  data(){
    return{
      isplaying : false,
      delay : null,
      score: null,
      showResult:false
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isplaying = true 
      this.showResult = false
      console.log(this.delay)
    },
    endgame(reactionTime){
      this.score += reactionTime
      this.isplaying=false
      this.showResult=true
      console.log('score',this.score)
    }


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
  
}

button {
  transition-duration: 0.4s;
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
</style>
