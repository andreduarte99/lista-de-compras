const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("button-item");
const lista = document.getElementById("container-lista");
let contador = 1;
let contador2 = 1;


botaoSalvarItem.addEventListener("click", adicionarItem);


function adicionarItem(evento){
    evento.preventDefault();

    const containerItem = document.createElement("div");
    containerItem.classList.add("container-item");
    containerItem.id = "item-" + contador++;
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador2 ++;
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");
    checkboxCustomizado.classList.add("checked"); //checkado

    const nomeItem = document.createElement("h2");
    nomeItem.innerText = item.value;

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes");
    
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-Editar");
    botaoEditar.innerText = "Editar";
    botaoEditar.addEventListener("click", function(evento){
        const nomeNovo = prompt("Digite sua alteração:");
        nomeItem.innerText = nomeNovo;
    });

    const botaoRemover  = document.createElement("button");
    botaoRemover.classList.add("botao-remover");
    botaoRemover.innerText = "Remover"
    botaoRemover.addEventListener("click", function(evento){
        const identificaItem = evento.target.parentElement.parentElement;
        console.log(identificaItem);
        identificaItem.remove();
    });
    

   
    lista.appendChild(containerItem);
    containerItem.appendChild(containerCheckbox);
    containerCheckbox.appendChild(checkboxLabel);
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    containerItem.appendChild(nomeItem);
    containerItem.appendChild(containerBotoes);
    containerBotoes.appendChild(botaoEditar);
    containerBotoes.appendChild(botaoRemover);
    
    console.log(checkboxInput.id);
}


