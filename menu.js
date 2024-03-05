// Configurações do slide
var slideIndex = 0;
var slides = document.getElementsByClassName("slide-item");
var visibleClients = 4; // Define o número de clientes visíveis por vez
var intervalId; // Variável para armazenar o ID do intervalo
var slideWidth; // Variável para armazenar a largura do slide

// Função para calcular a largura do slide
function setSlideWidth() {
    var containerWidth = document.getElementById("cliente").offsetWidth;
    slideWidth = containerWidth / visibleClients;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = slideWidth + "px";
    }
}

// Função para exibir os slides
function showSlides() {
    // Mostra os próximos 'visibleClients' slides
    slideIndex++;
    var translateValue = -(slideIndex * slideWidth);
    document.getElementById("slideContainer").style.transition = "transform 0.5s ease";
    document.getElementById("slideContainer").style.transform = "translateX(" + translateValue + "px)";

    // Se atingir o último slide, volta para o primeiro
    if (slideIndex >= slides.length / visibleClients) {
        slideIndex = 0;
        setTimeout(function() {
            document.getElementById("slideContainer").style.transition = "none";
            document.getElementById("slideContainer").style.transform = "translateX(0)";
        }, 500); // Espera 0.5 segundos antes de voltar para o primeiro slide
    }

    // Define um tempo para avançar automaticamente para o próximo slide
    intervalId = setTimeout(showSlides, 3000); // Tempo em milissegundos (exemplo: 3000 = 3 segundos)
}

// Inicia a exibição dos slides após o carregamento da página
window.onload = function() {
    setSlideWidth();
    showSlides();
}

// Pausa a exibição do slide quando o cursor estiver sobre ele
document.getElementById("cliente").addEventListener("mouseenter", function() {
    clearInterval(intervalId);
});

// Continua a exibição do slide quando o cursor sair dele
document.getElementById("cliente").addEventListener("mouseleave", function() {
    intervalId = setTimeout(showSlides, 3000);
});
