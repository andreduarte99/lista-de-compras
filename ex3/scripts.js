const lista = document.getElementById("lista")
const itemDaLista = document.createElement("li");
const containerItemLista = document.createElement("div");
containerItemLista.classList.add("lista-item-container");

lista.appendChild(itemDaLista);
itemDaLista.appendChild(containerItemLista);

const textoDaLista = document.createElement("p");
textoDaLista.innerText =  prompt("Digite o conteúdo");

containerItemLista.appendChild(textoDaLista);

const containerBotoes = document.createElement("div");
const botaoRemover = document.createElement('button');
botaoRemover.innerText = "Remover";


containerBotoes.appendChild(botaoRemover);
containerItemLista.appendChild(containerBotoes);

containerItemLista.style.display = "flex";
containerItemLista.style.alignItems = "center";
containerItemLista.style.gap = "10px";

lista.style.listStyle = "none";

