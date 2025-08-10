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
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um amigo antes de sortear.");
            return;
        }
        const indice = Math.floor(Math.random() * amigos.length); // Gerar índice aleatório
        const nomeSorteado = amigos[indice]; // Obter nome sorteado
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado} ! 🎁`; // Mostrar resultado
       
		   let tempo = 10;
		   const listaContagem = document.createElement('li');
		   listaContagem.id = 'contagemRegressiva';
		   resultado.appendChild(listaContagem);
       
		   listaContagem.textContent = `Reiniciando em ${tempo} segundos...`;
       
		   const intervalo = setInterval(() => {
			   tempo--;
			   if (tempo > 0) {
				   listaContagem.textContent = `Reiniciando em ${tempo} segundos...`;
			   } else {
				   clearInterval(intervalo);
				   reiniciarJogo();
			   }
		   }, 1000);
	   }
   
	   function reiniciarJogo() {
		   amigos = [];
		   document.getElementById('listaAmigos').innerHTML = "";
		   document.getElementById('resultado').innerHTML = "";
		   document.getElementById('amigo').value = "";
	   }
    }