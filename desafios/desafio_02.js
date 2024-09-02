

const rodar = (function(){

  let cadastrados = []

  const pessoas ={

get usuarios(){
    let cadastrados = []
    
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
    
  }
  
  if(cadastrados.indexOf(_pessoa) < 0)
    {cadastrados.push(_pessoa)
  }else{
    throw new Error("usuario ja cadastrado")
  }

}

  }

return pessoas

})()

rodar.usuario = "willy "

rodar.usuario = "gabs"

rodar.usuario = "mencia alicy"

rodar.usuario = "Ayra Ariadyna"





