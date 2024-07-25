


class veiculos{

constructor(nome,modelo,ano){

    this.nome= nome
    this.modelo=modelo
   this.ano=ano
}

chamar(){

    console.log(this.modelo, "tirado no nome de", this.nome, "no ano de", this.ano)
}
}

veiculos.prototype.criador = "willy"

class carros extends veiculos{
    
     constructor(nome,modelo,ano){
     super(nome, modelo, ano)

     }


}

const carr01 = new carros("gaby ", "ferrari", "2024")
carr01.chamar()

c
