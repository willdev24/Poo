
const car06 =  (function veiculo(){

this.tpo =[ "popular","espoertivo", "de luxo"]
this.categoria = "vazil"

const carro05={

get valiDcategoria(){

    
    return this.categoria
},

set valiDcategoria(_tipo){
    const valor =  this.tpo.indexOf( _tipo)

    if(!valor >= 0 ){
        throw new Error("nao esta dentro os requisitos");
        
    
    }
    this.categoria = _tipo

}
}

return carro05
} ())

car06.valiDcategoria("popular")



