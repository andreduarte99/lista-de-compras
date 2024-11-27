const tituloItensComprados = document.getElementById("texto-lista-comprados");


export function verificarListaComprados(lista){
    if(lista.childElementCount === 0){
        tituloItensComprados.style.display = "none";
    }else{
        tituloItensComprados.style.display = "block";
    }
}