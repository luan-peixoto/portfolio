// FUNÇÃO PARA REMOVER NAVBAR MOBILE SE CLICAR FORA DELA:
        
document.getElementsByClassName("backdrop")[0].addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    $('.backdrop').css("display", "none");
});

document.getElementsByClassName("btn-close")[0].addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    $('.backdrop').css("display", "none");
});

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function() {
    $('.backdrop').css("display", "block");
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
    container.classList.toggle('mover-container-btn-pais');
    
    let btn = document.getElementsByClassName('rotate')[0];
    btn.classList.toggle('rotate-180');
};

// FUNÇÃO PARA MOSTRAR OS SITES + LISTA

var cards = {
    html: {
        sneakers: {img: "/sneakers.png", url: "/sneakers.html"},
        editor_html: {img: "/editor-html.png", url: "/editor-html.html"},
        jogo_memoria: {img: "/jogo-memoria.png", url: "/jogo-memoria.html"},
        tips_pro: {img: "/tips-pro.png", url: "/tips-pro.html"}
    },
    react: {
        catalogo: {img: "/catalogo.png", url: "/catalogo.html"}
    },
    django: {
        rede_market: {img: "/rede-market.png", url: "/rede-market.html"},
        cadastro: {img: "/cadastro.png", url: "/cadastro.html"}
    },
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim()
    template.innerHTML = html;
    return template.content.firstChild;
}

function exibirCards(tipo) {
    let card_container = document.getElementById("card-container");
    card_container.innerHTML = "";
    if (tipo == 'todos') {
        for (let val in cards) {
            let lista_cards = cards[val];
            for (let card in lista_cards) {
                card = lista_cards[card];
                let card_div = `<div class="col-12 col-md-6 col-lg-4 p-0"><div class="card-bg p-2 m-2"><a href="/pages${card.url}" ><img class="card-img" src="../images${card.img}"></a></div></div>`
                card_div = htmlToElement(card_div);
                card_container.appendChild(card_div)
            };
        }
        return;
    };
    let lista_cards = cards[tipo];
    for (let card in lista_cards) {
        card = lista_cards[card];
        let card_div = `<div class="col-12 col-md-6 col-lg-4 p-0"><div class="card-bg p-2 m-2"><a href="/pages/sites${card.url}" ><img class="card-img" src="../images${card.img}"></a></div></div>`
        card_div = htmlToElement(card_div);
        card_container.appendChild(card_div)
    };

};

// FUNÇÃO PARA MUDAR PALAVRA DO PORTFOLIO

function mudarPortfolio(nome) {
    let titulo = document.getElementById('titulo');
    let card_container = document.getElementById("card-container");
    titulo.classList.remove('fade-in');
    titulo.classList.add('fade-out');
    card_container.classList.remove('fade-in');
    card_container.classList.add('fade-out');
    setTimeout(function () {
        if (nome == "html/css/js") {
            exibirCards("html");
        }
        else if (nome == "react.js") {
            exibirCards("react");
        }
        else {
            exibirCards(nome)
        }
        titulo.innerText = nome;
        titulo.classList.remove('fade-out');
        titulo.classList.add('fade-in');
        card_container.classList.remove('fade-out');
        card_container.classList.add('fade-in');
        
    }, 600)
}

// FUNÇÃO PARA APAGAR A BRAND

var texto_1 = "LP";
var len_t1 = 2;
var texto_2 = "Luan Peixoto";
var len_t2 = 0;

function aumentarTexto() {
    let texto = document.getElementById('brand');

    var interval_1 = setInterval(function() {
        if (len_t1 > 0) {
            texto.innerText = texto.innerText.substring(0,len_t1-1)
            len_t1 -= 1;
        }
        else {
            texto.innerText = texto_2.substring(0,len_t2 + 1)
            if (++ len_t2 == 12) {
                clearInterval(interval_1);
                setTimeout(() => {diminuirTexto()}, 3000);
                
            }
        };
    }, 300)
        
}

function diminuirTexto() {
    let texto = document.getElementById('brand');

    var interval_2 = setInterval(function() {
        if (len_t2 > 0) {
            texto.innerText = texto.innerText.substring(0,len_t2-1)
            len_t2 -= 1;
        }
        else {
            texto.innerText = texto_1.substring(0,len_t1 + 1)
            if (++ len_t1 == 2) {
                clearInterval(interval_2);
                setTimeout(() => {aumentarTexto()}, 5000);
            }
        };
    }, 300)
        
}
setTimeout(() => {aumentarTexto()}, 3000);

// TROCAR IMAGENS DA THUMBNAIL MOBILE

var img_atual = 0;

function trocarImagem(n) {
    let img_0 = document.getElementById("img-" + img_atual);
    let thumb_0 = document.getElementById("thumb-" + img_atual);
    img_0.classList.remove("d-inline-block")
    img_0.classList.add("d-none")
    thumb_0.classList.remove("active-thumb")

    let img_1 = document.getElementById("img-" + n);
    let thumb_1 = document.getElementById("thumb-" + n);
    img_1.classList.add("d-inline-block")
    img_1.classList.remove("d-none")
    thumb_1.classList.add("active-thumb")
    img_atual = n
}

function andarImagem(n) {
    let img_0 = document.getElementById("img-" + img_atual);
    let thumb_0 = document.getElementById("thumb-" + img_atual);
    img_0.classList.remove("d-inline-block")
    img_0.classList.add("d-none")
    thumb_0.classList.remove("active-thumb")
    
    let andar = img_atual + n
    if (andar > 3) {
        andar = 0;
    }
    else if (andar < 0) {
        andar = 3;
    }
    let img_1 = document.getElementById("img-" + andar);
    let thumb_1 = document.getElementById("thumb-" + andar);
    img_1.classList.add("d-inline-block")
    img_1.classList.remove("d-none")
    thumb_1.classList.add("active-thumb")
    img_atual = andar
    
}

// ANIMAÇÃO DE BRILHO DO BOTÃO

setInterval(function() {
    document.getElementsByClassName("btn-visitar")[0].classList.add("shiny-animate");
    document.getElementsByClassName("btn-visitar")[1].classList.add("shiny-animate");
    setTimeout(function() {
        document.getElementsByClassName("btn-visitar")[0].classList.remove("shiny-animate");
        document.getElementsByClassName("btn-visitar")[1].classList.remove("shiny-animate");
    }, 4000)
}, 7000)