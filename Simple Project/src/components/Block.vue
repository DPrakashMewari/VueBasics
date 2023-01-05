<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Click Me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime : 0 
        }
    },
    mounted() {
      console.log("Mounted ")
      setTimeout(()=>{
        this.showBlock = true
        this.startTimer()
      },this.delay)
    },
    methods:{
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime +=10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            console.log("Reaction Time ",this.reactionTime)
            this.$emit('end',this.reactionTime)

        }

    }

}
</script>

<style  scoped>
.block{
    width:400px;
    border-radius: 20px;
    background: cyan;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40 px auto;
    justify-content: center;
    position:absolute;
    right: 682px;
}
</style>