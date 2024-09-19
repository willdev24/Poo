const pai ={

    nome: "willy",

    visualizar(){
        console.log(this.nome ,"é o pai")
    }
    
}
Object.defineProperty(pai,"nome",{

    writable:false,
    configurable:false
}),

console.log(Object.getOwnPropertyDescriptor(pai, "nome"))

const filho = Object.create(pai,{nome:{value:"thiago"}})
console.log(Object.getOwnPropertyDescriptor(filho, "nome"))

Object.defineProperty(filho,"nome",{

}),


filho.visualizar()
pai.visualizar()

console.log(filho)