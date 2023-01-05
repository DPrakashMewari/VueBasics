<template>
    <div class="backdrop" @click.self="closemodal">
        <div class="modal" :class="{sale:theme === 'sale'}">
            <!-- <h1>{{ header }} </h1>
        <p>{{ text }}</p>     -->
        <slot>No Slot Here</slot>
        <div class="actions">
            <slot name="links"></slot>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    // props:['header','text','theme'],
    props:['theme'],
    methods:{
      closemodal(){
        this.$emit('close')
      }
    }
}
</script>>

<style  scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
 top:0px;
 position: fixed;
 background: rgba(0, 0, 0,0.5);
 width: 100%;
 height: 100%;
}

h1{
   color :aqua ;
   border-bottom:none;
   padding: 0;
}


.modal.sale{
  background:crimson;
  color:white;
}
.modal.sale.h1,p{
  color: whitesmoke;
}
.modal .actions a{
  padding :8px;
  border:10px solid #eee;
  border-radius: 4px;
  margin:10px;
}
</style>