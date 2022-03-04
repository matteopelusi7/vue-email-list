const app = new Vue({

    el: '#app',
    data: {

        numEmail: 10,
        arrayEmail: [],
        
    },
    
    created() {
        
        for( let i = 0; i < this.numEmail; i++ ){

            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (res) => {
    
                this.arrayEmail.push(res.data.response)

            })
            
        }
        
    }

});