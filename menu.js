document.addEventListener("DOMContentLoaded", function() {
    const abrirMenu = document.querySelector('.abrir-menu');
    const fecharMenu = document.querySelector('.fechar-menu');
    const menuMobile = document.querySelector('.menu-mobile');
    const overlayMenu = document.querySelector('.overlay-menu');

    abrirMenu.addEventListener('click', function() {
        menuMobile.classList.add('abrindo-menu');
        overlayMenu.style.display = 'block';
    });

    fecharMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrindo-menu');
        overlayMenu.style.display = 'none';
    });

    overlayMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrindo-menu');
        overlayMenu.style.display = 'none';
    });
});

// Configurações do slide
var currentSlide = 0;
var slides = document.querySelectorAll('.slide-item');
var visibleClients = 5; // Define o número de clientes visíveis por vez
var intervalId; // Variável para armazenar o ID do intervalo
var totalSlides = slides.length;

// Função para exibir os slides
function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        var index = (currentSlide + i) % totalSlides; // Índice calculado para garantir o carrossel infinito
        if (i < visibleClients) {
            slides[index].style.display = "block"; // Mostra os slides visíveis
        } else {
            slides[index].style.display = "none"; // Oculta os slides invisíveis
        }
    }

    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Volta para o primeiro slide
    }

    intervalId = setTimeout(showSlides, 900);
}

// Inicia a exibição dos slides após o carregamento da página
window.onload = function() {
    setSlideWidth();
    showSlides();
}

// Função para definir a largura dos slides com base no tamanho da tela
function setSlideWidth() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1024) { // Tamanho da tela maior ou igual a 1024px (por exemplo, dispositivos de desktop)
        visibleClients = 6; // Exibe 5 clientes
    } else if (windowWidth >= 768) { // Tamanho da tela maior ou igual a 768px (por exemplo, tablets)
        visibleClients = 4; // Exibe 4 clientes
    } else { // Tamanho da tela menor que 768px (por exemplo, dispositivos móveis)
        visibleClients = 3; // Exibe 3 clientes
    }

    var containerWidth = document.getElementById("slideContainer").offsetWidth;
    var slideWidth = containerWidth / visibleClients;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = slideWidth + "px"; // Define a largura do slide
    }
}

// Redimensiona os slides e redefine a largura dos slides quando a janela é redimensionada
window.addEventListener("resize", function() {
    setSlideWidth();
});

// Defina o limite máximo para os contadores
const limiteLogotipos = 20;
const limiteCampanhas = 25;
const limiteClientes = 30;

let contadorLogotipos = 0;
let contadorCampanhas = 0;
let contadorClientes = 0;

const contadorLogotiposElemento = document.querySelector('.contador-logotipos');
const contadorCampanhasElemento = document.querySelector('.contador-campanhas');
const contadorClientesElemento = document.querySelector('.contador-clientes');

function atualizarContadores() {
    if (contadorLogotipos < limiteLogotipos) {
        contadorLogotipos++;
        contadorLogotiposElemento.textContent = contadorLogotipos;
    } else {
        contadorLogotiposElemento.textContent = limiteLogotipos + "+";
    }

    if (contadorCampanhas < limiteCampanhas) {
        contadorCampanhas++;
        contadorCampanhasElemento.textContent = contadorCampanhas;
    } else {
        contadorCampanhasElemento.textContent = limiteCampanhas + "+";
    }

    if (contadorClientes < limiteClientes) {
        contadorClientes++;
        contadorClientesElemento.textContent = contadorClientes;
    } else {
        contadorClientesElemento.textContent = limiteClientes + "+";
    }
}

setInterval(() => {
    atualizarContadores();
}, 200); // Atualiza os contadores a cada segundo

window.addEventListener('scroll', function () {
    var section = document.querySelector('.contador-section');
    var offset = section.offsetTop - window.innerHeight + 100; // Adicionei uma margem de 100 pixels

    if (window.pageYOffset > offset) {
        startCounting();
        window.removeEventListener('scroll', startCounting);
    }
});

function startCounting() {
    var counters = document.querySelectorAll('.contador-numero');
    var speed = 200; // Velocidade da contagem em milissegundos

    counters.forEach(counter => {
        var updateCount = () => {
            var target = +counter.getAttribute('data-target');
            var count = +counter.innerText;

            var inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}
