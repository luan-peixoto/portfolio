// FUNÇÃO PARA REMOVER NAVBAR MOBILE SE CLICAR FORA DELA:

$(document).click(function (event) {
    if (!$(event.target).is('.navbar-collapse *')) {
        $('.navbar-collapse').collapse('hide');
    }
});

// FUNÇÃO PARA FECHAR A DIV DE PAIS SE CLICAR FORA DELA

$(document).click(function (event) {
    if (!document.getElementsByClassName('container-pais')[0].classList.contains('mover-container-btn-pais')) {
        if (!$(event.target).is('.container-pais *')) {
            toggleBotaoLinguagem();
        }
    }
});

// FUNÇÃO PARA ABRIR BOTÃO DE LINGUAGEM

function toggleBotaoLinguagem() {
    let container = document.getElementsByClassName('container-pais')[0];
    console.log(container);
    container.classList.toggle('mover-container-btn-pais');
    
    let btn = document.getElementsByClassName('rotate')[0];
    btn.classList.toggle('rotate-180');
};

function mudarLinguagem(lingua) {
        console.log('asd');
};

// FUNÇÃO PARA MUDAR PALAVRA DO PORTFOLIO

function mudarPortfolio(nome) {
    let titulo = document.getElementById('titulo');
    titulo.classList.remove('fade-in');
    titulo.classList.add('fade-out');
    setTimeout(function () {
        titulo.innerText = nome;
        titulo.classList.remove('fade-out');
        titulo.classList.add('fade-in');
    }, 600)

}