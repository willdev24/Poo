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

const filho = Object.create(pai,{nome:{value:"thiago", enumerable:true}})
console.log(Object.getOwnPropertyDescriptor(filho, "nome"))


filho.visualizar()
pai.visualizar()

console.log(filho)


// OBJCT.ASSIGN()
const obj ={
    a: "1",
    b: "2",
    c: "3"
}

const filha = Object.assign(obj, filho) // o metodo ASSIGN so copias as propiedades que sao  enumerabs:true 
console.log(filha)                     // objct.assign pode ser substituido por creat opereito