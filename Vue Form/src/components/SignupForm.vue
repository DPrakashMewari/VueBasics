<template>

     <form @submit.prevent="handleSubmit">

        <label > Email :</label>
        <input type="email" required v-model="email">

        
        <label > Password :</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label > Role :</label><br>
        <select v-model="role">
            <option value="developer"> Web developer </option>
            <option value="Engineer"> Software Engineer </option>
            <option value="Architecture"> Database Architecture </option>

        </select>    

        <label > Skills :</label>
        <input type="text"  v-model="tempskills" @keyup="addskill">
        <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteskill(skill)">{{ skill }}</span>
        </div>

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label> Accept Terms and Condition </label>
        </div>
       <!-- <div>
         <input type="checkbox" value="Prakash" v-model="names">
         <label> Prakash</label>
       </div>
       <div>
         <input type="checkbox" value="Aysh" v-model="names">
         <label> aysh</label>
        </div>
        <div>
         <input type="checkbox" value="himanshu" v-model="names">
         <label> himanshu </label>
       </div> -->

       <div class="submit">
        <button >Create an Account</button>
        </div>
     </form>
     <p>{{ email }}</p>
     <p>{{ password }}</p>
     <p>{{ role }}</p>
     <p>{{ terms }}</p>
     <p>{{ skills }}</p>

</template>

<script>
    export default {
        data(){
            return {
                email : '',
                password : '',
                role:'',
                terms: false,
                tempskills:'',
                skills :[],
                passwordError : ''

            }
        },
    methods: {
        addskill(e) {

            if (e.key === ',' && this.tempskills) {
                if (!this.skills.includes(this.tempskills)) {
                    this.skills.push(this.tempskills)
                }
                this.tempskills = ''
            }
        },
        deleteskill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },

        handleSubmit(){
            this.passwordError = this.password.length > 5 ? 
            '' : 'Password must be greater then 6 chars long'
            if (!this.passwordError){
                console.log('Form Submitted')
            }
        }

        }
        

    }
</script>

<style  scoped>

form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input ,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
</style>