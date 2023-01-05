<template>
    <div>
         <p> You Reaction time is: {{ score }} ms</p>  
         <p> Rank: {{ rank }} </p>  

    </div>
</template>

<script>
    export default {
     props:['score'],
     data(){
        return {
            rank : null
        }
     },
     mounted(){
        if(this.score < 250){
            this.rank = 'Prakash Fingers'
        }
        else if (this.score < 400){
            this.rank = 'Vzzz Fingers' 
        }
        else{
            this.rank = 'Lazy finger '
        }
     }   
    }
</script>

<style  scoped>



</style>