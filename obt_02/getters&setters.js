
const car06 =  (function veiculo(){

const tipo =[ "popular","esportivo", "de luxo"]
let categoria = "vazil"

const carro05={

get valiDcategoria(){
    
    return categoria
},

set valiDcategoria(_tipo){
    const valor =  tipo.indexOf( _tipo)

    if(valor < 0 ){
        throw new Error("nao esta dentro os requisitos");
    
    }else{
    categoria = _tipo
}

}}

return carro05
} ())

car06.valiDcategoria = "popular"



