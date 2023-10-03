let people = [
    {id:1, nombre: "nombre1", apellido: "apellido1", edad: 20},
    {id:2, nombre: "nombre2", apellido: "apellido2", edad: 21},
    {id:3, nombre: "nombre3", apellido: "apellido3", edad: 22},
    {id:4, nombre: "nombre4", apellido: "apellido4", edad: 23},
]

// Usar el método .find() para encontrar una persona por su ID
/*
// Otra forma de hacerlo
let person = people.find(p => {
    let person1;
    person1 = p.id===4;
    return person1;
})

// Otra forma de hacerlo
let person = people.find(p => {
    let person = p.id===4;
    return person;
})
*/

let person = people.find(p => p.id === 4);

console.log(person);
