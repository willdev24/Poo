class carro{

    constructor(tipo, estagioTurbo){
     
   this.potencia = new turbo(estagioTurbo)

            if(tipo == 0){
                this.velMax = 0
                this.nome = "carro parado " 

            }else if(tipo == 1){
                this.velMax = 60
                this.nome = "carro normal "
            }else if(tipo == 2){
                this.velMax = 100
                this.nome = "carro esportivo "
            }else if(tipo == 3){
                this.velMax = 150
                this.nome = "carro super esportivo "
            }

            this.velMax += this.potencia.poten

}

visulizar(){
       console.log(`este veiculo tem velocidade axima de: ${this.velMax} entrando na categoria de ${this.nome}  `)
 }
}



class turbo{
 constructor(turb){

    if(turb == 0){
     this.poten = 0

}else if(turb == 1){
this.poten = 30

}else if(turb == 2){
this.poten = 60

}else if(turb == 3){
this.poten = 100
    
  }
 }
}

class carroEspecial extends carro{
   constructor(turbo){
    super(4, turbo)
    this.nome='carro especial'
    this.velMax = 300 
    this.velMax += this.potencia.poten

}

   
visulizar(){
    super.visulizar()
   // console.log(`este veiculo tem velocidade axima de: ${this.velMax} entrando na categoria de ${this.nome}  `)
}


}

const carro02 = new carro(3,3)
carro02.visulizar()

const carro01 = new carroEspecial(3)
carro01.visulizar()