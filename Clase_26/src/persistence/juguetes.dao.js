const juguetes = [];

const obtenerJuguetes = () => {
  return juguetes;
};

const agregarJuguete = (nuevoJuguete) => {
  juguetes.push(nuevoJuguete);
};

export { obtenerJuguetes, agregarJuguete };
