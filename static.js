// es5 

function animal(){}

animal.prototype.whomi = function(){
    return this
}

animal.categoria = "teste" // ao criar categoria fora do prototiper ela se torna uma propriedade statica.
                              //  podendo ser USADA apenas pela class animal. porem pode ser vista de qualquer objeto 
                                //criado a partir de seus prototicos. 

const dog = new animal()


//ES6


class animal02 {
    constructor(){

        this.categoria2 = "teste02"
        animal02.whomi02()

    }
    
   static whomi02(){
        console.log(this)
    }

    
  
}



const gog2 = new animal02('will')
const gog3 = new animal02('will')




