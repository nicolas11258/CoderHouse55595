import * as juguetesService from '../services/juguetes.service.js';

const obtenerJuguetes = (req, res) => res.json(juguetesService.obtenerJuguetes());

const agregarJuguete = (req, res) => {
  const { body } = req;
  const { nuevoJuguete } = body;
  juguetesService.agregarJuguete(nuevoJuguete);
  res.json({ mensaje: 'Juguete agregado correctamente' });
};

export { obtenerJuguetes, agregarJuguete };
