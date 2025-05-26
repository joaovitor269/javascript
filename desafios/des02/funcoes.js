function somarvet(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i] // soma cada elemento
    }
    return soma
}
console.log(somarvet([1, 4, 6, 8])) // 19


function subtrairvet(vetor) {
    let subtracao = 0
    for (let i = 0; i < vetor.length; i++) {
        subtracao -= vetor[i] // subtrai cada elemento
    } 
    return subtracao
}
console.log(subtrairvet([2, 3, 5])) // -10



function maiorvalor(vetor) {
    let maior = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i] // atualiza o maior elemento
        }
    }
    return maior
}
console.log(maiorvalor([12, 43, 56, 89])) // 89


function menorvalor(vetor) {
    let menor = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i] // atualiza o menor elemento
        }
    }
    return menor
}
console.log(menorvalor([12, 2, 9, 7])) // 2