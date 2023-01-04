console.log("Hello vue ")


// Here we create app --- Application Instance 
const app = Vue.createApp({
  //data ,function
  // template : "<h2> This is Template </h2>"
  data() {
    return {
      showbooks: false,
      title: "Prakash",
      author : "Brace Wiliam",
      place : "Greece",
      age : 33,
      x : 0,
      y :0,
      books:[{'title':"My Name is Khan",author:"Xyz",'img':'assets/images/fe1.jpg',isFav:true},
      {'title':"Dhoni",author:"yzx",'img':'assets/images/fe2.jpg',isFav:false},
      {'title':"Veer Zara",author:"ssd",'img':'assets/images/fe3.jpg',isFav:true}

    ],
    url:'https://www.google.com'

    };
  },
  methods:{
    changeAuthor(authorn){
        // this.author ="PrakashM" 
        this.author = authorn
       console.log("Just change author ")
    },
    bookisthere(){
        this.showbooks = !this.showbooks
    },
    handleevent(e,data){
        console.log("Event",e.type)
        if(data){
            console.log("Event",data)    
        }
    },
    handlemousemove(e){
        this.x = e.offsetX
        this.y = e.offsetY
    },
    handlelievent(book){
       book.isFav = !book.isFav
    },
    


  },
  computed:{
    filteredBooks(){
        return this.books.filter((book)=> book.isFav)
    }
}
});
// # we can mount this on div -- View Model Instance of Component
app.mount("#app")