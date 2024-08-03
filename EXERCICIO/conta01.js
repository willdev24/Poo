// desaafio conta bancaria


class clinte{
  constructor(nome, doc , data){
  this.nome = nome
  this.doc = doc
  
  }
  }

class contaBancaria{

    constructor( cliente, numero){

      if( this.constructor === contaBancaria){
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
        console.log(`${this.cliente}, numero: ${this.numero} possui saldo de : R$ ${this.saldo}`)
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
  console.log(`${contaBancaria.name}:\nextrato do dia ${this.data} \nnome: ${this.cliente} \naniversario:${this.aniversario} \npossui saldo de : R$ ${this.saldo}`)
}

}


class contacorrente extends contaBancaria{
    constructor( nome){
    super(nome)
    this.limite = 5000 
    }
    
    visualiza(){     
      console.log(`\n\n${contacorrente.name}:\nnome: ${this.cliente} \ncpf: ${this.numero} \npossui saldo de : R$ ${this.saldo},  \nlimite de ${this.limite} `)
  }

}    
//const teste = new contaBancaria("teste","teste02")



const willy = new clinte('willy', 70219835225)

const user01 = new contapoupaca( willy," 06/02/2000")
user01.depositar(2000)
user01.visualiza()

const user02 = new contacorrente(willy)
user02.depositar(200)
user02.sacar(50)
user02.visualiza()

