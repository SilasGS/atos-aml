// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolar suavemente
    });
}

// Exibir o botão quando o usuário rolar para baixo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-top").style.display = "block";
    } else {
        document.getElementById("btn-top").style.display = "none";
    }
}
