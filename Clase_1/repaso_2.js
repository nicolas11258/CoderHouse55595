let i = 1;

// Forma 1: Utilizando una función
/*
function foo() {
    console.log(i);
}
*/

// Forma 2: Utilizando una función de flecha
/*
const foo = () => {
    console.log(i);
}
*/

// Forma 3: Utilizando una función de flecha con argumento y retorno
const foo = (n) => n;

let total = foo(4);

console.log(total);
