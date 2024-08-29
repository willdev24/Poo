

const rodar = (function(){

  let cadastrados = []

  const pessoas ={

get usuarios(){
    
    return cadastrados
},

get usuario(){
  
  const ultimo = cadastrados.findIndex(this.pesoa)

  return ultimo

},

set usuario(_pessoa){
this.pesoa = _pessoa

  if(!_pessoa == String){
    throw new Error("o valor nao é uma string");
    
  }else{cadastrados.push(_pessoa)
  }

}

  }

return pessoas

})()

rodar.usuario = "willy "

rodar.usuario = "gabs"

rodar.usuario = "mencia alicy"

rodar.usuario = "Ayra Ariadyna"


