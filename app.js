const app = Vue.createApp({
    data(){
        return{
            url: 'https://github.com/iuhggiuhhgbnr',
            showThing: true,
            testWord: "Data list",
            datas: [
                { title: "Computer 1970",           type: "Hardware",   description: "A computer from 1970",      img: 'assets/1.png',isFav:false},
                { title: "Mouse Razer Mamba 4G",    type: "Hardware",   description: "Gaming mouse",      img: 'assets/2.png',isFav:false},
                { title: "Razer Kraken",            type: "Hardware",   description: "Razer kraken headphones",      img: 'assets/3.png',isFav:false},
                { title: "Razer Keyboard",          type: "Hardware",   description: "Razer keyboard",      img: 'assets/4.png',isFav:false},
            ],
        }
    },
    methods: {
        debugSomehing(){
            console.log("Clicker");
            this.title = 'trollge'
        },
        toggleThink(){
            this.showThing = !this.showThing
        },

        toggleFav(data){
            data.isFav = !data.isFav
        },
    }
})

app.mount('#app')