//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
	const input = document.getElementById('amigo');
	const nome = input.value.trim();
	if (nome === "") {
		alert("Por favor, digite um nome antes de adicionar.");
		input.focus();
		return;
	}
	// ...adicione lógica para adicionar o nome à lista de amigos...
	amigos.push(nome);
	input.value = "";
	input.focus();
	// ...atualize a lista na tela se necessário...
}       