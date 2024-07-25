
const animal01 = function(tipo){
         
      if(tipo){
    this.tipo = tipo
}}

animal01.prototype.obiterTipo = function(){ 
    return this.tipo }
 animal01.prototype.tipo = "vazil"
    

    const cavalo = new animal01("mamifero")
    const egua = new animal01("reptil")
    const zebra = new animal01()
    console.log(cavalo.obiterTipo())

    console.log(egua.tipo)
    console.log(zebra.obiterTipo())


   
Array.prototype.teste="pai"
const arr = new Array

