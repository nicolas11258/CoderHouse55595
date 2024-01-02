import * as juguetesService from '../services/juguetes.service.js';

const obtenerJuguetes = (req, res) => res.json(juguetesService.obtenerJuguetes());

const agregarJuguete = (req, res) => {
  const { body } = req;
  juguetesService.agregarJuguete(body);
  res.json({ mensaje: 'Juguete agregado correctamente' });
};

export { obtenerJuguetes, agregarJuguete };
