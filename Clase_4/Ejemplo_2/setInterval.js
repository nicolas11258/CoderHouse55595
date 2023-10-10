//SetInterval
console.log("Inicio del cronómetro (setInterval)");

let segundos = 0;
const intervalo = 1000; // 1 segundo

function actualizarCronometro() {
  console.log("Segundos transcurridos:", segundos);
  segundos++;

  if (segundos >= 5) {
    clearInterval(intervaloID);
    console.log("Fin del cronómetro (setInterval)");
  }
}

const intervaloID = setInterval(actualizarCronometro, intervalo);
