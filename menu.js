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

    intervalId = setTimeout(showSlides, 3000);
}

// Inicia a exibição dos slides após o carregamento da página
window.onload = function() {
    setSlideWidth();
    showSlides();
}

// Função para definir a largura dos slides
function setSlideWidth() {
    var containerWidth = document.getElementById("slideContainer").offsetWidth;
    var slideWidth = containerWidth / visibleClients;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = slideWidth + "px"; // Define a largura do slide
    }
}

// Pausa a exibição do slide quando o cursor estiver sobre ele
document.getElementById("cliente").addEventListener("mouseenter", function() {
    clearInterval(intervalId);
});

// Continua a exibição do slide quando o cursor sair dele
document.getElementById("cliente").addEventListener("mouseleave", function() {
    intervalId = setTimeout(showSlides, 3000);
});

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

// Inicia a exibição dos slides e define a largura dos slides após o carregamento da página
window.onload = function() {
    setSlideWidth();
    showSlides();
}

// Redimensiona os slides e redefine a largura dos slides quando a janela é redimensionada
window.addEventListener("resize", function() {
    setSlideWidth();
});
