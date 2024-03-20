
function encriptar() {
  let titulo = document.getElementById("titulo");
  let salida = document.getElementById("salida");
  let cajita = document.getElementById("cajita");
  let mensajeIngresado = cajita.value;
  let contador = 0;
  let mensajeGuardado = "";
  let llave = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

  while (mensajeIngresado.length > contador) {
    let EsVocal = false;
    for (let clave in llave) {
      if (mensajeIngresado[contador] == clave) {
        mensajeGuardado += llave[clave];
        EsVocal = true;
        break;
      } else {
        EsVocal = false;
        continue;
      }
    }
    mensajeGuardado += EsVocal ? "" : mensajeIngresado[contador];
    contador++;
  }
  let botonCopiar = document.getElementById("copiar");

  let textos = document.getElementById("textos");
  textos.style.display = "none";
  botonCopiar.style.display = "inline";

  if (screen.width > 1439) {
    let imginitial = document.getElementsByClassName("imagen");
    imginitial[0].style.display = "initial";
  }

  salida.style.fontSize = "24px";
  salida.style.lineHeight = "36px";

  titulo.innerHTML = "Tu mensaje es:";
  salida.innerHTML = mensajeGuardado;

}
function caracteresPermitidos() {
  let cajita = document.getElementById("cajita");
  let mensajeIngresado = cajita.value;

  for (let i = 0; i < mensajeIngresado.length; i++) {
    if ((mensajeIngresado.charCodeAt(i) >= 97 && mensajeIngresado.charCodeAt(i) <= 122) || (mensajeIngresado.charCodeAt(i) == 32)) {
      if (i = mensajeIngresado.length - 1)
        encriptar();
      else
        continue;
    } else {
      alert("Solo letras minusculas y sin acentos");
      break;
    }
  }
}
function compararClaves(mensajeEntregado, contador, llave) {
  let letraComparada = "";
  letraComparada += mensajeEntregado[contador];
  for (let i = 1; i < llave[mensajeEntregado[contador]].length; i++) {
    letraComparada += mensajeEntregado[contador + i];
  }
  if (letraComparada == llave[mensajeEntregado[contador]]) {
    return true;
  } else {
    return false;
  }
}

function desencriptar() {
  let titulo = document.getElementById("titulo");
  let salida = document.getElementById("salida");
  let cajita = document.getElementById("cajita");
  let mensajeEntregado = cajita.value;
  let contador = 0;
  let mensajeDesencriptado = "";
  let llave = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
  let valor = false;

  while (mensajeEntregado.length > contador) {
    switch (mensajeEntregado[contador]) {
      case "a":
        valor = compararClaves(mensajeEntregado, contador, llave);
        if (valor) {
          mensajeDesencriptado += mensajeEntregado[contador];
          contador += llave[mensajeEntregado[contador]].length - 1;
        } else {
          mensajeDesencriptado += mensajeEntregado[contador];
        }
        break;
      case "e":
        valor = compararClaves(mensajeEntregado, contador, llave);
        if (valor) {
          mensajeDesencriptado += mensajeEntregado[contador];
          contador += llave[mensajeEntregado[contador]].length - 1;
        } else {
          mensajeDesencriptado += mensajeEntregado[contador];
        }
        break;
      case "i":
        valor = compararClaves(mensajeEntregado, contador, llave);
        if (valor) {
          mensajeDesencriptado += mensajeEntregado[contador];
          contador += llave[mensajeEntregado[contador]].length - 1;
        } else {
          mensajeDesencriptado += mensajeEntregado[contador];
        }
        break;
      case "o":
        valor = compararClaves(mensajeEntregado, contador, llave);
        if (valor) {
          mensajeDesencriptado += mensajeEntregado[contador];
          contador += llave[mensajeEntregado[contador]].length - 1;
        } else {
          mensajeDesencriptado += mensajeEntregado[contador];
        }
        break;
      case "u":
        valor = compararClaves(mensajeEntregado, contador, llave);
        if (valor) {
          mensajeDesencriptado += mensajeEntregado[contador];
          contador += llave[mensajeEntregado[contador]].length - 1;
        } else {
          mensajeDesencriptado += mensajeEntregado[contador];
        }
        break;
      default:
        mensajeDesencriptado += mensajeEntregado[contador];
    }
    contador++;


    let textos = document.getElementById("textos");
    let botonCopiar = document.getElementById("copiar");
    botonCopiar.style.display = "inline";
  }


  textos.style.display = "none";
  salida.style.fontSize = "24px";
  salida.style.lineHeight = "36px";


  if (screen.width > 1439) {
    let imginitial = document.getElementsByClassName("imagen");
    imginitial[0].style.display = "initial";
  }
  titulo.innerHTML = "Tu mensaje inicial es:";
  salida.innerHTML = mensajeDesencriptado;
}

function copiar() {
  let textoCopiado = document.getElementById("salida").textContent;
  let botonCopiar = document.getElementById("copiar");
  navigator.clipboard.writeText(textoCopiado);
  botonCopiar.textContent = "copiado";
}

