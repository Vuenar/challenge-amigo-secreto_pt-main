//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
	const input = document.getElementById('amigo');
	const nome = input.value.trim();
	if (nome === "") {
		alert("Por favor, insira um nome.");
		input.focus();
		return;
	}
	amigos.push(nome);
	input.value = "";
	input.focus();
	exibirListaAmigos();
}

function exibirListaAmigos() {
	const lista = document.getElementById('listaAmigos'); // Obter o elemento da lista
	lista.innerHTML = ""; // Limpar a lista existente
	for (let i = 0; i < amigos.length; i++) { // Percorrer o array
		const li = document.createElement('li'); // Criar elemento de lista
		li.textContent = amigos[i];
		lista.appendChild(li); // Adicionar elemento à lista
	}
}