
const animal01 = function(tipo){
         
    if(tipo){
  this.tipo = tipo

}
}

animal01.prototype.obiterTipo = function(){ 
  return this.tipo }
animal01.prototype.tipo = "vazil"
  

const cachorro = function(nome,tipo){

     this.nome = nome
     animal01.call(this, tipo)
    
} 
cachorro.prototype = new animal01()
cachorro.prototype = cachorro()

const rex = new cachorro("will","mamifero")
console.log(rex)
rex
