const juguetes = [];

function obtenerJuguetes() {
  return juguetes;
}

function agregarJuguete(nuevoJuguete) {
  juguetes.push(nuevoJuguete);
}

export { obtenerJuguetes, agregarJuguete };
