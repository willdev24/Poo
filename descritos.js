//aula sobre descritos

//Object.getOwnPropertyDescriptors => método estático retorna todos os descritores 
//                                    de propriedade de um determinado objeto.

/* value: 'willy',
    writable: true, POSSO ALTERAR OU NAO UMA PROPIEDADE
    enumerable: true, POSSO USAR OU NAO O "FOR IN ""
    configurable: true  POSSO DELETAR OU NAO UMA PROPIEDADE
  }*/ 
'use strick'

const pessoA = {

    nome:"willy"

}

console.log(Object.getOwnPropertyDescriptors(pessoA, "nome")) 

pessoA.nome = "gabs"   /* writable: true*/

for(let p in pessoA){  /*enumerable: true*/
    console.log("usando for in:",p)
}
delete pessoA.nome  /* configurable: true*/

//pos alteraçao
console.log(Object.getOwnPropertyDescriptor(pessoA, "nome")) 


// criando uma propiedade bloquada ---------------------\-----------\-\-\------------------\\-
Object.defineProperty(pessoA,"idade",{

    value: "15 anos",
    writable: true,
    enumerable:true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(pessoA, "idade"))

pessoA.idade = "85"

for(let p in pessoA){
    console.log(p)
}

console.log(Object.getOwnPropertyDescriptor(pessoA, "idade"))

delete pessoA.idade
console.log(Object.getOwnPropertyDescriptor(pessoA, "idade"))
