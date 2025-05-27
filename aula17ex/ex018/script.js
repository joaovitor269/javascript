let num = document.querySelector('input#txtn')
let sel = document.querySelector('select#val')
let res = document.querySelector('div#res')

function adicionar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let n = Number(num.value)
        let opcao = document.createElement('option')
        opcao.text = `Valor ${n} adicionado.`
        sel.appendChild(opcao)
    }
}

function finalizar() {
    if (num.value.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
    res.innerHTML += `Ao todo temos ${sel.length} números cadastrados.<br>`
    res.innerHTML += `O maior valor informado foi ${maior}.`
    res.innerHTML += `O menor valor informado foi ${menor}`
    }
}
