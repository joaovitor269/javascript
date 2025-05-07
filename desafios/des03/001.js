var dia = new Date()
var d = dia.getDay()
/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(d) {
    case 0 :
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-feira')
        break
    case 2: 
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4: 
        console.log('Quinta-feira')
        break
    case 5: 
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia invalido!')
        break
}

var date = new Date()
var data = date.getDate()

var ano = new Date()
var a = ano.getFullYear()

var hora = new Date()
var h = hora.getHours()

var minutos = new Date()
var m = minutos.getMinutes()

console.log(`Hoje é dia ${data} de maio de ${a}, e são exatamente ${h}:${m} no horário de Brasília`)






