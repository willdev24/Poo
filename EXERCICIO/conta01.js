// desaafio conta bancaria //


//class concreta quando pode ser instanciada igual no caso a class cliente 
//existem tamb metodos abstratos 

/*
Em outras linguagens, bastaria colocar uma palavra-chave como abstract antes do nome da classe ou do método, 
e seria suficiente para que o programa indicasse 
um erro ao tentar instanciar a classe abstrata ou usar o método abstrato.
No JS nós precisamos simular esse comportamento, fazendo mais "na mão" mesmo.
*/


class trasferir{
static execute(contaOrigem, ContaDestino, valor){

  if(!contaOrigem instanceof contaBancaria ||
    !ContaDestino instanceof contaBancaria){
     throw new Error("erro dados nao sao instancia de conta bancaria");     
    }

    try{
        contaOrigem.sacar(valor)
        contaOrigem.visualiza()
        ContaDestino.depositar(valor)
        ContaDestino.visualiza()

    }catch(e){

      console.log("deu ruim", e.message)

    }


  }
}



  //class abstrata apenas herda mas nao é possivel instanciar  
class contaBancaria{

    constructor( cliente, numero){

      if( this.constructor === contaBancaria){ //comando para tornar a class abstrata 
        throw new Error("conta bancaria é uma conta abstrada")
      }

      this.cliente = cliente
      this.numero = numero
      this.saldo = 0
      this.deposito = 0
    }

   depositar(valor){
    this.deposito = valor
    this.saldo += valor   
    }

  sacar(val){
    this.saque = val 
    this.saldo =  this.saldo -this.saque 
    }


  visualiza(){  
          
        if(this.constructor === contapoupaca){
          throw new Error("esse metodo precisa ser sobrescido");
        }          
      //  console.log(`${this.cliente}, numero: ${this.numero} possui saldo de : R$ ${this.saldo}`)
    }
}


class contapoupaca extends contaBancaria{

  constructor( nome, data){
super(nome, data)

this.aniversario = data
const datas = new Date
this.data = datas.toLocaleString("pt-BR",{})

}

visualiza(){     
  console.log(`\n\n${contapoupaca.name}:\nextrato do dia ${this.data} \ncliente: ${this.cliente} \naniversario:${this.aniversario} \npossui saldo de : R$ ${this.saldo}`)
}

}


class contacorrente extends contaBancaria{
    constructor( nome){
    super(nome)
    this.limite = 5000 
    }
    
    visualiza(){     
      console.log(`\n\n${contacorrente.name}:\ncliente: ${this.cliente} \npossui saldo de : R$ ${this.saldo},  \nlimite de ${this.limite} `)
  }

}    
//const teste = new contaBancaria("teste","teste02")


class clinte{
  constructor(nome, doc, pessoa ){
 if(this.constructor === clinte){
  throw new Error("classe abstrata nao é posivel instanciar, apenas herdar");
 }

 const dados={
  nome:nome,
  doc:doc,
  pessoa:pessoa,
 } 
this.dadosstring = JSON.stringify(dados)

/*
 if(pessoa ==="fisica"){
  
  const user01 = new contapoupaca( dadosstring , " 06/02/2000")
  user01.depositar(2000)
  user01.visualiza()  

} if(pessoa ==="juridica"){

const user02 = new contacorrente(dadosstring)
user02.depositar(200)
user02.sacar(50)
user02.visualiza()

}
*/
  } 
}

class pessoaFisica extends clinte{

  constructor(nome, doccumento,fisica){
    fisica = "fisica"
    super(nome, doccumento, fisica )

  }
}

class pessoaJuridica extends clinte{

  constructor(nome, doccumento,juridica){
    juridica = "juridica"
    super(nome, doccumento,juridica)
  }
}

const user = new pessoaFisica("willy", 70219835225)
const user02 = new pessoaJuridica("willy", "8945158/984656")
const user03 = new pessoaFisica("Gabs",70635476231)



const willy = new contapoupaca( user.dadosstring , " 06/02/2000")
willy.depositar(2000)
willy.sacar(200)
willy.visualiza()  


const willy02 = new contacorrente(user02.dadosstring)
willy02.depositar(200)
willy02.sacar(50)
willy02.visualiza()

const Gabs = new contacorrente(user03.dadosstring)
Gabs.depositar(2000)
Gabs.sacar(50)
Gabs.visualiza()



trasferir.execute(willy, Gabs, 1000)



//wylly,gabs, willy02: sao 3 instancias de conta bancria, 
//sendo assim posso passar como arguento para outra classe abstrata e ultilizar os metodos de dentro da classe abstrata
//




