//Sincronismo
console.log("Inicio del cronómetro (sincronismo)");

function iniciarCronometro() {
  let segundos = 0;
  const intervalo = 1000; // 1 segundo

  while (segundos < 5) {
    console.log("Segundos transcurridos:", segundos);
    segundos++;

    // Espera activa para simular un segundo
    const inicioEspera = new Date().getTime();
    while (new Date().getTime() - inicioEspera < intervalo) {
      // Espera activa
    }
  }

  console.log("Fin del cronómetro (sincronismo)");
}

iniciarCronometro();
