// PROTOTYPER

const animal = function(){

this.tipo = "vazil"
this.genero = "vazil"
this.descrever = function( teste){
    
    console.log(this.tipo ,  "com caracteristica " + this.genero , teste)
}}



const gatos = function( tipo , dois){
    const gato = new animal()
    this.tipo = tipo
    this.genero = dois
    Object.setPrototypeOf(this, gato)

   
}

const gato01 = new gatos("raivoso", "bravo")
gato01.descrever("deu certo pela segunda vez")

const gato02 = new gatos("raivoso", "bravo")
gato01.descrever("deu certo pela terceira vez")


