
function botaoMais(){
    let elementoPorcentagem = document.getElementById('porcento');
    let valorAtual = parseInt(elementoPorcentagem.textContent.replace('%', '')); // Remove o símbolo de % e converte para número
    let novoValor = valorAtual + 10; // Aumenta em 10%
    elementoPorcentagem.textContent = novoValor + '%';
    novoValor = Math.min(novoValor, 100); // Limita o valor máximo a 100%
    elementoPorcentagem.textContent = novoValor.toFixed() + '%';
    if (novoValor == 100) {
        desabilitarBotao();
        document.getElementById('solamente').style.display = "block";
        return;
    }
}

function botaoMenos(){
    let elementoPorcentagem = document.getElementById('porcento');
    let valorAtual = parseInt(elementoPorcentagem.textContent.replace('%', ''));
    let novoValor = valorAtual - 10;
    // Impede que o valor vá abaixo de 0
    novoValor = Math.max(novoValor, 0);
    elementoPorcentagem.textContent = novoValor + '%';
    habilitarBotao();
    if (novoValor <= 99) {
        document.getElementById('solamente').style.display = "none";
    }
}

function desabilitarBotao(){
    let botao = document.getElementById('botaoMais');
    if (botao.classList.contains('botao')) {
        botao.classList.remove('botao');
        botao.classList.add('botao__desabilitado')
    }
}

function habilitarBotao(){
    let botao = document.getElementById('botaoMais');
    if (botao.classList.contains('botao__desabilitado')) {
        botao.classList.remove('botao__desabilitado');
        botao.classList.add('botao');
    }
}
