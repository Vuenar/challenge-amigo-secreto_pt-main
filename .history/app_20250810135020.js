//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Insere um nome no campo de texto
 * @function
 * @param {Object} event - Evento de clique no bot o
/*******  df9b3c2e-9385-4a31-8edd-99d43f1224ab  *******/
function inserirNomeNoCampo() {
    let nome = document.querySelector('input-wrapper').value;
    amigos.push(nome);
}

