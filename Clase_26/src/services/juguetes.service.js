import * as juguetesDAO from "../persistence/juguetes.dao.js";

const obtenerJuguetes = () => {
  return juguetesDAO.obtenerJuguetes();
};

const agregarJuguete = (nuevoJuguete) => {
  juguetesDAO.agregarJuguete(nuevoJuguete);
};

export { obtenerJuguetes, agregarJuguete };
