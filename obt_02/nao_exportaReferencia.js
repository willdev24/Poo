const minhaCasaMinhaVida = (function propriedades(){

    let casasCadastradas = []
    let preAprovados = []
    let cadastrRepetido = []

 
    const opcoes={

        get casas(){
     
           
            preAprovados.push("MENCIA","ALLICE")
            return  preAprovados
        },

        set casas(_nomes){
            
            if(preAprovados.indexOf(_nomes) <= -1 ){
                
                preAprovados.push( _nomes)
                casasCadastradas = [... preAprovados ]     
            }else{
               
            cadastrRepetido.push( _nomes )
         
            }
          
      },


               listaDEcasas(){
                 console.log( cadastrRepetido ,"\n", casasCadastradas)
                }
        
        }
return opcoes


    }
)()


minhaCasaMinhaVida.casas  = "willy"
minhaCasaMinhaVida.casas  = "willy"
minhaCasaMinhaVida.casas  = "GABS"
minhaCasaMinhaVida.casas  = "willy"
minhaCasaMinhaVida.casas  = "GABS"
minhaCasaMinhaVida.casas  = "willy"
minhaCasaMinhaVida.casas  = "GABS"
minhaCasaMinhaVida.casas  = "GABS"
minhaCasaMinhaVida.casas  = "thiago"
minhaCasaMinhaVida.casas  = "xavier"

console.log(minhaCasaMinhaVida.casas)


minhaCasaMinhaVida.listaDEcasas()


