function seletor(over_id) {
    //Retirando a classe 'selecionado' do personagem anterior:
    const personagemAnterior = document.getElementsByClassName('agente selecionado');
    personagemAnterior[0].setAttribute('class', 'agente');
    
    //Adicionando a classe 'selecionado' No personagem atual:
    const personagemAtual = document.getElementById(over_id);
    personagemAtual.setAttribute('class', 'agente selecionado');

    //Alterando Imagem e nome exibidos:
    const nomePersonagem = personagemAtual.getAttribute('data-name');
    document.getElementById('nome-1p').innerHTML = nomePersonagem;
    document.getElementById('img-1p').setAttribute('src', 'src/img/' + over_id + '.png');
}

