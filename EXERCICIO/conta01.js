// desaafio conta bancaria


class contaBancaria{

    constructor( cliente, numero){

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
constructor( nome, num){
super(nome, num)
}

}


class contacorrente extends contaBancaria{
    constructor( nome, num){
    super(nome, num)
    }
    
}    
    

const user01 = new contapoupaca("willy", 2)
user01.depositar(2000)


const user02 = new contacorrente("willy", 20)
user02.depositar(200)
user02.sacar(50)


