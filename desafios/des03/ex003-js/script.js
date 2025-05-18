function contando() {
    var res = document.querySelector('div#res')
    var val = document.getElementsByName('ini')

    var inicio = Number(val[0].value)
    var fim = Number(val[1].value)
    var passo = Number(val[2].value)

    if (val[0].value.length == 0 || val[1].value.length == 0 || val[2].value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        
        res.innerHTML = 'Contando: </br>'
        if (inicio < fim) {
            // Contagem Crescente
            for(var c = inicio; c <= fim; c+= passo) {
                res.innerHTML += `${c} \u{1F449}` // mão seta ->
            }
        } else if (fim < inicio) {
            // Contagem Decrescente
            for(var c = inicio; c >= fim; c-= passo) {
                res.innerHTML += `${c} \u{1F449}` // mão seta ->
            }
        }
        res.innerHTML += `\u{1F3C1}` // Bandeira de Chegada
    }
}