// PROTOTYPER

const animal = function(){
animal.prototype = "prototyper-pai"
this.tipo = "vazil"
this.genero = "vazil"
this.descrever = function( teste){
    
    console.log(this.tipo ,  "com caracteristica " + this.genero , teste)
}}



const gatos = function( tipo , dois){
    this.tipo = tipo
   const gatinho  =  new animal()
   Object.setPrototypeOf(this, gatinho)

}

const gat = new gatos("miau", "miau")


gat.descrever()


//const gato01 = new gatos("raivoso", "bravo")
//gato01.descrever("deu certo pela segunda vez")

//const gato02 = new gatos("raivoso", "bravo")
//gato01.descrever("deu certo pela terceira vez")


