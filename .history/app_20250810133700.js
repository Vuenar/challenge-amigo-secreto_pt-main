//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo(nome) {
    let nome = document.querySelector('input-name').value;
    amigos.push(nome);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        console.log("Nenhum amigo cadastrado.");
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log("Amigo sorteado:", amigoSorteado);
}