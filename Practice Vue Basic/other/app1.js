
// #root Component 
const Option ={
    // # Important 
    data (){
        return {
            // # to see in our html
            appName :"Prakash",
            id : '123',
            t: 'bol',
            attr: 'class',
            custhtml : "<h1> Hi This is Jokeer </h1>",
            counter : 1 ,
            showName : false,
            user : 0 ,
            shopping_item:['Laptop','Mobile','Charger'],
            person: {'name':'Ram','Place': 'Ayodhya','Age':'Infinite'}
        }
    
    },
    // this thing called method we can use it like javascript
    methods:{
        increment(){
            this.counter++;
        },
        showDate(){
            var date = new Date();
            return date.toUTCString();
        },
        additem(){
            this.shopping_item.push('Accessory')            
        }     
    }

}


// Here we create app --- Application Instance 
const app = Vue.createApp(Option);
// # we can mount this on div -- View Model Instance of Component
const vm = app.mount("#app")
