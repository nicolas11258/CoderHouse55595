// Objetos que representan las ventas de productos
const ventas = [
    {
    manzanas: 3,
    peras: 2,
    carnes: 1,
    jugos:5,
    dulces: 2
    },
    {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4
    }
];

// Crear una lista (array) que contenga todos los tipos de productos sin repetir
const tiposDeProductos = [];

// Obtener tipos de productos de todas las ventas sin repetir
//const tiposDeProductos = [...new Set([...Object.keys(ventas[0]), ...Object.keys(ventas[1])])];

ventas.forEach(venta => {
    const tipos = Object.keys(venta);
    tipos.forEach(tipo => {
    if (!tiposDeProductos.includes(tipo)) {
        tiposDeProductos.push(tipo);
    }
    });
});

console.log('Tipos de productos:', tiposDeProductos);

// Calcular el total de productos vendidos
let totalDeProductosVendidos = 0;

ventas.forEach(venta => {
    const cantidades = Object.values(venta);
    cantidades.forEach(cantidad => {
    totalDeProductosVendidos += cantidad;
    });
});

console.log('Total de productos vendidos:', totalDeProductosVendidos);
