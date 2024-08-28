//exercicio crie um objeto produto  

/*esse projeto tem unica propiedade chamada quantidade
protela essa propiedade para que ela receba apenas numeros maiores que 0
toda vez que o valor de quantidade for consultado, mostre no console um contador 
evite variiaveis no scopo globlau*/

const tests = (function contador(){

let valor = new Number

const quantidade ={

get atualizarValor(){

    return valor
},

set atualizarValor(_valor){

    if(_valor <= 0 ){
        
        throw new Error("valor deve ser maior que zero");
        
    }else{

        valor = _valor

    }
}

}

return quantidade
} ())

tests.atualizarValor = 10



