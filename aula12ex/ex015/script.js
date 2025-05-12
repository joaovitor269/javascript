function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    // Pegando ano atual
    var fano = document.getElementById('txtano')  // Selecionando o ano de nascimento
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {  // validação 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')  // Selecionando os inputs:radio o Masculino fica com o valor [0] e o feminino com o valor [1].
        var idade = ano - Number(fano.value) // Pegando a idade do usuário
        var gênero = ''
        var img = document.createElement('img') // Cria a tag img no html
        img.setAttribute('id', 'foto') // define o id="foto" para a tag img.
        if (fsex[0].checked) { // Se o input 0 que é masculino tiver marcado então definimos o gênero que é homem e dependendo da idade, a imagem que representa uma pessoa da sua idade.
             gênero = 'Homem'
             if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
             } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
             } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
             } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
             }
        } else if (fsex[1].checked) {
             gênero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
             } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
             } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
             } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` // mostra para o usuário a idade dele e o gênero dele dps da validação.
        res.appendChild(img) // Mostra a tag img na tela e na div com o id="res".
    }
}   