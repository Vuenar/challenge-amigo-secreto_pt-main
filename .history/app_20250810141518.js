// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array que armazena os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
	const input = document.getElementById('amigo'); // Seleciona o campo de entrada de texto
	const nome = input.value.trim(); // Obtém o valor do campo e remove espaços em branco
	if (nome === "") { // Verifica se o campo está vazio
		alert("Por favor, insira um nome."); // Exibe alerta se estiver vazio
		input.focus(); // Foca novamente no campo de entrada
		return; // Interrompe a função
	}
	amigos.push(nome); // Adiciona o nome ao array de amigos
	input.value = ""; // Limpa o campo de entrada
	input.focus(); // Foca novamente no campo de entrada
	exibirListaAmigos(); // Atualiza a lista exibida na tela
}

// Função para exibir a lista de amigos na tela
function exibirListaAmigos() {
	const lista = document.getElementById('listaAmigos'); // Seleciona o elemento <ul> da lista
	lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
	for (let i = 0; i < amigos.length; i++) { // Percorre o array de amigos
		const li = document.createElement('li'); // Cria um novo elemento <li>
		li.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
		lista.appendChild(li); // Adiciona o <li> à lista
	}
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
	if (amigos.length === 0) { // Verifica se há amigos cadastrados
		alert("Adicione pelo menos um amigo antes de sortear."); // Alerta se não houver amigos
		return; // Interrompe a função
	}
	const indice = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
	const nomeSorteado = amigos[indice]; // Obtém o nome sorteado
	const resultado = document.getElementById('resultado'); // Seleciona o elemento de resultado
	resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado} ! 🎁`; // Exibe o nome sorteado na tela

	let tempo = 10; // Define o tempo da contagem regressiva
	const listaContagem = document.createElement('li'); // Cria um elemento <li> para a contagem
	listaContagem.id = 'contagemRegressiva'; // Define um id para o elemento de contagem
	resultado.appendChild(listaContagem); // Adiciona o elemento de contagem ao resultado

	listaContagem.textContent = `Reiniciando em ${tempo} segundos...`; // Mostra a contagem inicial

	// Inicia a contagem regressiva
	const intervalo = setInterval(() => {
		tempo--; // Diminui o tempo
		if (tempo > 0) {
			listaContagem.textContent = `Reiniciando em ${tempo} segundos...`; // Atualiza o texto da contagem
		} else {
			clearInterval(intervalo); // Para o intervalo quando chegar a 0
			reiniciarJogo(); // Reinicia o jogo
		}
	}, 1000); // Executa a cada 1 segundo
}

// Função para reiniciar o jogo
function reiniciarJogo() {
	amigos = []; // Limpa o array de amigos
	document.getElementById('listaAmigos').innerHTML = ""; // Limpa a lista de amigos exibida
	document.getElementById('resultado').innerHTML = ""; // Limpa o resultado exibido
	document.getElementById('amigo').value = ""; // Limpa o campo de entrada
}