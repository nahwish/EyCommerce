function esPosibleColorearTablero(n) {
  // Comprobar si el tamaño del tablero es impar, en cuyo caso no es posible colorearlo según los parámetros dados
  if (n % 2 === 1) {
    return false;
  }

  // Comprobar si el tamaño del tablero es divisible por 4
  if (n % 4 === 0) {
    // Si es divisible por 4, es posible colorear el tablero
    return true;
  } else {
    // Si no es divisible por 4, no es posible colorear el tablero
    return false;
  }
}

const tamanoTablero = 1000; // Cambia esto al tamaño deseado del tablero
const esPosible = esPosibleColorearTablero(tamanoTablero);

if (esPosible) {
  console.log(
    `Es posible colorear un tablero de ${tamanoTablero}x${tamanoTablero} según los parámetros dados.`
  );
} else {
  console.log(
    `No es posible colorear un tablero de ${tamanoTablero}x${tamanoTablero} según los parámetros dados.`
  );
}
