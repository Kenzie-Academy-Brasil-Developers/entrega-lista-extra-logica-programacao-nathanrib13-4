function calculateSalary(salario, totalVendas){
    if(totalVendas<=1200) {
        let comissao = totalVendas * 0.03
        return comissao + salario
    } else {
        let comissao = totalVendas * 0.05
        return comissao + salario
    }
}

console.log(calculateSalary (2000, 1000))

function cashMachine(saque, salary) {
    if (saque > salary) {
        return "Saldo Insuficiente"
    } 

    let saldoPosSaque = salary - saque
    let notas200 = 0
    let notas100 = 0
    let notas50 = 0
    let notas20 = 0 
    let notas10 = 0
    let notas5 = 0
    let notas2 = 0 

    while(saque>=200){
        saque-=200
        notas200++
    }
    while (saque>=100){
        saque-=100
        notas100++
    }
    while(saque>=50){
        saque-=50
        notas50++
    }
    while(saque>=20){
        saque-=20
        notas20++
    }
    while(saque>=10){
        saque-=10
        notas10++
    }
    while(saque>=5){
        saque-=5
        notas5++
    }
    while(saque>=2){
        saque-=2
        notas2++
    }
    
    
    return `Total de notas Sacadas:
     nota de 200 = ${notas200}
     nota de 100 = ${notas100}
     nota de 50 = ${notas50}
     nota de 20 = ${notas20}
     nota de 10 = ${notas10}
     nota de 5 = ${notas5}
     nota de 2 = ${notas2}
     Saldo após saque é de ${saldoPosSaque}}`
}


console.log(cashMachine (1187, 2000))



function calculateStock(quantEstoque, maxEstoque, minEstoque){
let mediaEstoque = (maxEstoque + minEstoque)/2

if (quantEstoque >= mediaEstoque) {
    return "nao precisa comprar"    
}
return "Precisamos comprar"
}

console.log(calculateStock(299,500,100))

function calculateAge(anoNasci){
let idadeAtual = 2022 - anoNasci
let idadeEmMeses = 12*idadeAtual
let idadeEmSemanas = idadeEmMeses*4
let idadeEmDias = idadeAtual*365

return `A sua idade é de ${idadeAtual} anos ou ${idadeEmMeses} meses ou ${idadeEmSemanas} semanas ou ${idadeEmDias} dias aproximadamente`
}

console.log(calculateAge(1997))

function getDiagonal(matrizQuadrada){
    let diagonal = []
    for(let i = 0; i<matrizQuadrada.length; i++){
    diagonal.push(matrizQuadrada[i][i])
    }
    return diagonal
}
console.log(getDiagonal([[1, 2, 3] , [4, 5, 6] , [7, 8, 9]]))