const juguetes = [];

const obtenerJuguetes = (req, res) => res.json(juguetes);

const agregarJuguete = (req, res) => {
  const { body } = req;
  const { nuevoJuguete } = body;
  juguetes.push(nuevoJuguete);
  res.json({ mensaje: 'Juguete agregado correctamente' });
};

export { obtenerJuguetes, agregarJuguete };
