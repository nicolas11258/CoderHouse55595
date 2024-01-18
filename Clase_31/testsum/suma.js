const suma = (...numbers) => {
  // if (!num1 && !num2) return 0
  // if (typeof num1 !== 'number' || typeof num2 !== 'number') return null

  // const notNumber = numbers.find(number => typeof number !== 'number')
  // if (notNumber) return null

  if (!numbers.every((number) => typeof number === "number")) return null;
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

let testTotales = 0;
let testPasados = 0;

console.log(
  "Test 1: La función debe devolver null si algún parámetro no es numérico"
);

const resultTest1 = suma(5, "9");
testTotales++;
if (resultTest1 === null) {
  console.log("Test 1 pasó");
  testPasados++;
} else {
  console.log("Test 1 no pasó");
  console.log("Se esperaba null");
  console.log(`Se recibió ${resultTest1}`);
}

console.log(
  "Test 2: La función debe devolver 0 si no se pasó ningún parámetro"
);
const resultTest2 = suma();
testTotales++;
if (resultTest2 === 0) {
  console.log("Test 2 pasó");
  testPasados++;
} else {
  console.log("Test 2 no pasó");
  console.log("Se esperaba 0");
  console.log(`Se recibió ${resultTest2}`);
}

console.log("Test 3: La función debe poder realizar la suma correctamente");
const resultTest3 = suma(3, 6);
testTotales++;
if (resultTest3 === 9) {
  console.log("Test 3 pasó");
  testPasados++;
} else {
  console.log("Test 3 no pasó");
  console.log("Se esperaba 9");
  console.log(`Se recibió ${resultTest3}`.red);
}

console.log(
  "Test 4: La función debe poder hacer la suma con cualquier cantidad de números"
);
const resultTest4 = suma(3, 6, 2, 9, 5);
testTotales++;
if (resultTest4 === 25) {
  console.log("Test 4 pasó");
  testPasados++;
} else {
  console.log("Test 4 no pasó".red);
  console.log("Se esperaba 25");
  console.log(`Se recibió ${resultTest3}`.red);
}

if (testPasados < testTotales) {
  console.log(`${testPasados} test pasados de ${testTotales} test totales`.red);
} else {
  console.log(`${testPasados} test pasados de ${testTotales} test totales`);
}
