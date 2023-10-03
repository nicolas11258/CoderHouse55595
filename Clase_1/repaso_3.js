function mostrarLista(lista){
    if(lista.length === 0){
        console.log("Lista vacía");
    } else {
        lista.forEach((element, indice) => {
            console.log(`${indice + 1}: ${element}`);
        });
    }
    console.log(`La longitud de la lista es ${lista.length}`);
    return "Termina el proceso";
}

const listaVacia = [];
const listaConElementos = ["Manzana", "Banana", "Cereza"];

// Forma 1: Llamando a la función y mostrando la salida en la consola
console.log("Lista Vacia:");
console.log(mostrarLista(listaVacia));

// Forma 2: Llamando a la función directamente sin console.log
/*
console.log("Lista Con Elementos:");
mostrarLista(listaConElementos);
*/

// Forma 3: Llamando a la función y mostrando la salida en la consola
console.log("Lista Con Elementos:");
console.log(mostrarLista(listaConElementos));
