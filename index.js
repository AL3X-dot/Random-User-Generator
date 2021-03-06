var app = new Vue({
    el:'#app',
    data:{
        users:[],
        male:'blue lighten-3',
        female:'pink lighten-3'
    },
    methods:{
        async getUser(){
            var temp = []
            const res = await fetch('https://randomuser.me/api/')
            res.json().then(data=>{
                temp.push(data.results[0])
            })
            this.users = temp
        },
        getClass(){
            console.log('Hello');
            if(this.users.length != 0){
                if(this.users[0].gender=='male'){
                    return this.male
                }else{
                    return this.female
                }
            }
        }


    }
})