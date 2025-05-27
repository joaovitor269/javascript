let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let n = Number(num.value)
        let opcao = document.createElement('option')
        opcao.text = `Valor ${n} adicionado.`
        lista.appendChild(opcao)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    if (num.value.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
    res.innerHTML += `Ao todo temos ${lista.length} números cadastrados.<br>`
    res.innerHTML += `O maior valor informado foi ${maior}.`
    res.innerHTML += `O menor valor informado foi ${menor}`
    }
}
