function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if(de >= ate){
        alert('O valor do campo "do número" deve ser menor do que o valor do campo "até o número". Verifique!');
        return;
    }
    if(quantidade > (ate - de + 1)){
        alert('O campo "quantidade" deve receber um valor menor ou igual o intervalo informado no campo "do número" até o campo "até o numero"');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; ){
        numero = obterNumero(de, ate);

        if (sorteados.includes(numero)){
            return obterNumero(de, ate);
        } else{
            sorteados.push(numero);
            i++;
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`

    alterarStatusBotaoR();
    alterarStatusBotaoS();
};

function obterNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotaoR();
    alterarStatusBotaoS();
}

function alterarStatusBotaoR(){
    let botao1 = document.getElementById('btn-reiniciar');
    if(botao1.classList.contains('container__botao-desabilitado')){
        botao1.classList.remove('container__botao-desabilitado');
        botao1.classList.add('container__botao');
    } else{
        botao1.classList.remove('container__botao');
        botao1.classList.add('container__botao-desabilitado');
    };
}

function alterarStatusBotaoS(){
    let botao2 = document.getElementById('btn-sortear');
    if(botao2.classList.contains('container__botao')){
        botao2.classList.remove('container__botao');
        botao2.classList.add('container__botao-desabilitado');
    } else{
        botao2.classList.remove('container__botao-desabilitado');
        botao2.classList.add('container__botao');
    };
}