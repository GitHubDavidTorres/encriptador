let input = document.querySelector('.text-input');
let output = document.querySelector('.text-output');
let seccionTexto1 = document.querySelector('.texto1');
let seccionTexto2 = document.querySelector('.texto2');
let btnCopiar = document.querySelector('.copiar');

function validar(textoValidar) {
  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  let i = 0;

  for (let posicion = 0; posicion < textoValidar.length; posicion++) {
    if (letrasMinusculas.indexOf(textoValidar.charAt(posicion)) !== -1) {
      i++;
    }
  }
  if (i === textoValidar.length) {
    return true;
  }
  return false;
}

function encriptar() {
  let texto = input.value;
  let salida = '';
  if (!validar(texto)) {
    alert('Recuerde ingresar solo letras minusculas.');
    return;
  }
  for (let posicion = 0; posicion < texto.length; posicion++) {
    if (texto.charAt(posicion) == 'a') {
      salida = salida + 'ai';
    } else if (texto.charAt(posicion) == 'e') {
      salida = salida + 'enter';
    } else if (texto.charAt(posicion) == 'i') {
      salida = salida + 'imes';
    } else if (texto.charAt(posicion) == 'o') {
      salida = salida + 'ober';
    } else if (texto.charAt(posicion) == 'u') {
      salida = salida + 'ufat';
    } else {
      salida = salida + texto.charAt(posicion);
    }
  }
  input.value = '';
  output.value = salida;
  ocultar();
}

function desencriptar() {
  let texto = input.value;
  let salida = '';
  if (!validar(texto)) {
    alert('Texto invalido, verifique su texto.');
    return;
  }
  for (let posicion = 0; posicion < texto.length; posicion++) {
    if (texto.charAt(posicion) == 'a' && texto.charAt(posicion + 1) == 'i') {
      salida = salida + 'a';
      posicion = posicion + 1;
    } else if (
      texto.charAt(posicion) == 'e' &&
      texto.charAt(posicion + 1) == 'n' &&
      texto.charAt(posicion + 2) == 't' &&
      texto.charAt(posicion + 3) == 'e' &&
      texto.charAt(posicion + 4) == 'r'
    ) {
      salida = salida + 'e';
      posicion = posicion + 4;
    } else if (
      texto.charAt(posicion) == 'i' &&
      texto.charAt(posicion + 1) == 'm' &&
      texto.charAt(posicion + 2) == 'e' &&
      texto.charAt(posicion + 3) == 's'
    ) {
      salida = salida + 'i';
      posicion = posicion + 3;
    } else if (
      texto.charAt(posicion) == 'o' &&
      texto.charAt(posicion + 1) == 'b' &&
      texto.charAt(posicion + 2) == 'e' &&
      texto.charAt(posicion + 3) == 'r'
    ) {
      salida = salida + 'o';
      posicion = posicion + 3;
    } else if (
      texto.charAt(posicion) == 'u' &&
      texto.charAt(posicion + 1) == 'f' &&
      texto.charAt(posicion + 2) == 'a' &&
      texto.charAt(posicion + 3) == 't'
    ) {
      salida = salida + 'u';
      posicion = posicion + 3;
    } else {
      salida = salida + texto.charAt(posicion);
    }
  }
  input.value = '';
  output.value = salida;
  ocultar();
}

function ocultar() {
  output.style.background = 'white';
  seccionTexto1.style.display = 'none';
  seccionTexto2.style.display = 'none';
  btnCopiar.style.display = '';
}

function mostrar() {
  output.style.background = '#FFF no-repeat center url(Capture.PNG)';
  seccionTexto1.style.display = '';
  seccionTexto2.style.display = '';
  btnCopiar.style.display = 'none';
}

function copiar() {
  let copia = output.value;
  navigator.clipboard.writeText(copia);

  let anuncio = document.querySelector('.anuncio');
  anuncio.textContent = 'Texto copiado';
  anuncio.style.display = 'block';
  setTimeout(() => {
    anuncio.style.display = 'none';
    output.value = '';
    mostrar();
  }, 10000);
}
