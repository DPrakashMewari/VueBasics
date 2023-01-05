<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="boo"> -->
   <!-- <button @click="handleclick">Click me</button> -->
  <Teleport to=".modal" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="checkModal"/> -->
    <Modal theme="sale1" @close="checkModal">
      <template v-slot:links>
        <a href="#"> More Info </a>
        <a href="#"> Know About </a>
      </template>
      <h1>Hi This Is Not Far Around</h1>
      <p>Ley this </p>
      <p> JDISJ</p>
    </Modal>
  
  </Teleport>

  <Teleport to=".modal" v-if="showModaltwo">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="checkModal"/> -->
    <Modal @close="checkModaltwo">
      <h1>Sign Up</h1>
      <p>Login this ....</p>
    </Modal>
  
  </Teleport>
    <!-- <button @click.alt="checkModal">Open Modal</button>
    <button @click.right="checkModal">Open Modal</button>
    <button @click.left="checkModal">Open Modal</button>
    <button @click.shift="checkModal">Open Modal</button> -->
    <button @click="checkModal">Open Modal</button>
    <button @click="checkModaltwo">Open Another Modal</button>

    
</template>

<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title : 'My fist vue by Prakash',
      header:"Hi this is Prakash",
      text : "Hey this is Aysh",
      showModal:false,
      showModaltwo:false  
    }
  },
  methods:{
    // handleclick(){
    //   console.log(this.$refs.boo)
    //   this.$refs.boo.classList.add('visiblity:false')
    //   this.$refs.boo.focus()
    // }
    checkModal(){
      this.showModal = !this.showModal
    },
    checkModaltwo(){
      this.showModaltwo = !this.showModaltwo
    }
  }
}
</script>

<style>
#app,.modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid rebeccapurple;
}


</style>
