

const testee = (function (){

    let _pessoas = []

  this.pessoa = {

    get pessoas(){
       return _pessoas

    },

    set pessoas(_valor){

    const as =  _pessoas.indexOf(_valor )
        console.log(as)
        if( as < 0){
             _pessoas.push(
                _valor
             )
        }else{
            throw new Error("pessoa ja cadastrada");
            
        }

    }}

return this.pessoa
})()

testee.pessoas ="willy"
testee.pessoas ="gabriela"
//testee.pessoas ="willy"

console.log(testee.pessoas)

