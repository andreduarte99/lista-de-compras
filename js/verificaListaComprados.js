const tituloItensComprados = document.getElementById("texto-lista-comprados");
const linhaItensComprados = document.getElementById("linha-lista-comprados");

export function verificarListaComprados(lista){
    if(lista.childElementCount === 0){
        tituloItensComprados.style.display = "none";
        linhaItensComprados.style.display = "none";
    }else{
        tituloItensComprados.style.display = "block";
        linhaItensComprados.style.display = "block";
    }

}


