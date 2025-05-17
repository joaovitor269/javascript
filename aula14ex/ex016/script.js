function contando() {
    var res = document.querySelector('div#res')
    var val = document.getElementsByName('ini')

    var inicio = Number(val[0].value)
    var fim = Number(val[1].value)
    var passo = Number(val[2].value)

    if (val[0].value.length == 0 || val[1].value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else if (passo == 0) {

        alert('Passo invalidado! Considerando PASSO 1')
        passo = 1
        res.innerHTML = 'Contando: </br>'
        if (inicio < fim) {
            for(var c = inicio; c <= fim; c+= passo) {
                res.innerHTML += `${c} \u{1F449}` // mão seta ->
            }
        } else if (fim < inicio) {
            for(var c = inicio; c >= fim; c-= passo) {
                res.innerHTML += `${c} \u{1F449}` // <- mão seta lado contrário
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    } else {
        
        res.innerHTML = 'Contando: </br>'
        if (inicio < fim) {
            for(var c = inicio; c <= fim; c+= passo) {
                res.innerHTML += `${c} \u{1F449}` // mão seta ->
            }
        } else if (fim < inicio) {
            for(var c = inicio; c >= fim; c-= passo) {
                res.innerHTML += `${c} \u{1F449}` // <- mão seta lado contrário
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}