// Configurações do slide
var currentSlide = 0;
var slides = document.querySelectorAll('.slide-item');
var visibleClients = 6; // Define o número de clientes visíveis por vez
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

// Função para definir o número de clientes visíveis com base na largura da tela
function setVisibleClients() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 641) { // Defina a largura de tela limite para quando deseja mostrar 3 clientes
        visibleClients = 3;
    } else {
        visibleClients = 4; // Se a largura da tela for maior que 768px, mostre 4 clientes
    }
}

// Inicia a exibição dos slides após o carregamento da página e define o número de clientes visíveis
window.onload = function() {
    setVisibleClients();
    setSlideWidth();
    showSlides();
}

// Atualiza o número de clientes visíveis quando a tela for redimensionada
window.addEventListener('resize', function() {
    setVisibleClients();
    setSlideWidth();
});
