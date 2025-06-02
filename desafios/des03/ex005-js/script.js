let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function éNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    // podemos usar esse método tbm, mas não conseguimos encaixar: includes(n): é um método de array que verifica se o valor existe no array.
    // return l.includes(n)
    /*
        let lista = [10, 20, 30];

        console.log(naLista(20, lista)); // true
        console.log(naLista(50, lista)); // false
    */
}

function adicionar() {
    if (éNumero(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`Valor inválido! ou já encontrado na lista`)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    let media = soma / tot

    res.innerHTML = `<p>O total de valores adicionados foi ${tot}</p>`
    res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores adicionados é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`

    num.value = ''
    num.focus()
}