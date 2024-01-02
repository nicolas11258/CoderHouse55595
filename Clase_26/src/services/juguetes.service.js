import * as juguetesDAO from '../persistence/juguetes.dao.js';

function obtenerJuguetes() {
  return juguetesDAO.obtenerJuguetes();
}

function agregarJuguete(nuevoJuguete) {
  juguetesDAO.agregarJuguete(nuevoJuguete);
}

export { obtenerJuguetes, agregarJuguete };
