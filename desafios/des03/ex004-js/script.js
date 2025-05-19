function tabuada() {
    let num = document.getElementById('txtn')
    let tabu = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Você não digitou um número! Digite para ver a Tabuada')
    } else {
        let n = Number(num.value)
        var c = 1
        tabu.innerHTML = ''
        do {
            let controle = document.createElement('option')
            controle.text = `${n} x ${c} = ${n*c}`
            controle.value = `tabu${c}`
            tabu.appendChild(controle)
            c++
        } while (c <= 10)
    }
}