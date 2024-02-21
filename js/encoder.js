let btnEncriptar = document.querySelector('.btn-encriptar');
let btnDesencriptar = document.querySelector('.btn-desencriptar');
let contenedorMsg = document.querySelector('.contenedor-mensaje');
let contenedorCopy = document.querySelector('.contenedor-copiar');
let resultado = document.querySelector('.texto-resultado');
let contenedorDolly = document.querySelector('.contenedor-dolly');


btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);


function encriptar() {
  // console.log('Encriptando...');
  let cajaTexto = recuperarTexto();
  if(cajaTexto.trim().length > 0) {
    ocultarAdelante();
    resultado.textContent = encriptarTexto(cajaTexto);
    limpiarCajaTexto();
  } 
}
function desencriptar() {
  let cajaTexto = recuperarTexto();
  if(cajaTexto.trim().length > 0) {
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(cajaTexto);
    limpiarCajaTexto();
  }
}

function ocultarAdelante() {
  contenedorDolly.classList.add('ocultar');
  contenedorMsg.classList.add('ocultar');
  contenedorCopy.classList.remove('ocultar');
  btnCopiar.classList.remove('ocultar');
  // document.getElementById(id).style.visibility = "hidden";
  // document.getElementById(id).style.visibility = "visible";
  // dolly.style.visibility = "hidden";
  // contenedorMsg.style.visibility = "hidden";
  // dolly.style.opacity = 0;
  // contenedorMsg.style.opacity = 0; // Better performance
}
function limpiarCajaTexto() {
  let cajaTexto = document.querySelector('.cajatexto');
  cajaTexto.value = '';
}
function recuperarTexto() {
  let cajaTexto = document.querySelector('.cajatexto');
  return cajaTexto.value;
}
function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = '';

  for(let i = 0; i < texto.length; i++) {
    if(texto[i] === 'a') {
      textoFinal += 'ai';
    } else if(texto[i] === 'e') {
      textoFinal += 'enter';
    } else if(texto[i] === 'i') {
      textoFinal += 'imes';
    } else if(texto[i] === 'o') {
      textoFinal += 'ober';
    } else if(texto[i] === 'u') {
      textoFinal += 'ufat';
    } else {
      textoFinal += texto[i];
    }
  }
  return textoFinal;
}
function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = '';

  for(let i = 0; i < texto.length; i++) {
    if(texto[i] === 'a') {
      textoFinal += 'a';
      i++;
    } else if(texto[i] === 'e') {
      textoFinal += 'e';
      i += 4;
    } else if(texto[i] === 'i') {
      textoFinal += 'i';
      i += 3;
    } else if(texto[i] === 'o') {
      textoFinal += 'o';
      i += 3;
    } else if(texto[i] === 'u') {
      textoFinal += 'u';
      i += 3;
    } else {
      textoFinal += texto[i];
    }
  }
  return textoFinal;
}


const btnCopiar = document.querySelector('.btn-copiar');
btnCopiar.addEventListener('click', () => {
  let contenido = document.querySelector('.texto-resultado').textContent;
  navigator.clipboard.writeText(contenido);

  let p = document.querySelector('.texto-resultado');
  p.style.backgroundColor = 'blue';
  p.style.color = 'white';
  setTimeout(() => {
    p.style.backgroundColor = '#f4f4fc';
    p.style.color = '#000';
  }, 3000);
});