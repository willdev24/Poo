
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
  // this.constructor = cachorro
      
} 
cachorro.prototype = new animal01()

const rex = new cachorro("will","mamifero")



for(let prop in rex){
    if(rex.hasOwnProperty(prop)){ // so mostra as propiedades da function cachorro ou qualquer que seja o nome 
        console.log(prop)
    }
}


    // verifica se cachorro é prototyco de rex
        console.log(Object.prototype.isPrototypeOf(rex))




console.log(rex instanceof animal01)  //verifica se rex é uma instancia de aniaml01


