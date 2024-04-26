import { buttonDetector } from "./buttons.js";

const textoMostrado = document.querySelectorAll('p')
let calculo = '0'
let calculoSCT = 'p'
let tipo = 'decimal'

buttonDetector(calculadora)

export function calculadora(value) {
    let valueS = String(value)
    valueS = comprobarUltimo(calculo, valueS)
    console.log(calculo)
    if (valueS != 'c') {
        if ((value === 'bin' || value === 'oct' || value === 'hex' || value === 'dec')) {
            let calculoDec = Number(calculo)
            console.log(calculo)
            console.log(calculoDec)
            calculo = convertirNumeros(value, calculoDec, calculo) 
            textoMostrado[0].textContent = tipo
            textoMostrado[1].textContent = calculo
        }else if (value != undefined) {
            if (value === '+' || value === '-' || value === '*' || value === '/' || value === 'Sen' || value === 'Cos' || value === 'Tan' || value === '=' || value === '**') {
                if (calculo.includes('+') || calculo.includes('*') || calculo.includes('-') || calculo.includes('/') || calculo.includes('Sen') || calculo.includes('Cos') || calculo.includes('Tan') || calculo.includes('√') || calculo.includes('**')){
                    if ( !calculo.includes('Sen') && !calculo.includes('Cos') && !calculo.includes('Tan') && !calculo.includes('√')) {
                        try {
                            calculo= eval(calculo)
                        } catch (error) {
                            console.log('')
                        }
                        calculo= String(calculo)
                    } else if ( calculo.includes('Sen') || calculo.includes('Cos') || calculo.includes('Tan')) {
                      console.log(calculoSCT)
                      try {
                        calculo = eval(calculoSCT)
                      } catch (error) {
                        calculo = 'syntaxError'
                      }
                      calculo = String(calculo)
                    } else if (calculo.includes('√')){
                      let raiz= sqrt(calculo)
                      calculo= eval(raiz)
                    }
                } 
            }
            if (calculo === '0') {
                calculo = valueS
                if (valueS === '=') {
                    calculo = '0'
                }
            } else if (value != '=') {
                calculo += valueS
                console.log(valueS)
                if (calculo.includes('Sen') || calculo.includes('Tan') || calculo.includes('Cos') ) {
                    calculoSCT= SCT(valueS, calculo)
                } 
            }
            textoMostrado[0].textContent = tipo
            textoMostrado[1].textContent = calculo
        }
    } else {
        calculo = '0'
        tipo = 'decimal'
        textoMostrado[0].textContent = tipo
        textoMostrado[1].textContent = calculo
    }
}

function SCT(valor, calculoF) {
        if (calculoF.includes('Cos')) {
            let indiceD = calculoF.indexOf('s')
            let grados = calculoF.substring(indiceD+1)
            let indiceH = calculoF.indexOf('C')
            let numeroI = calculoF.substring(0, indiceH)
            if (calculoF[0] != 'C' && calculoF[indiceH-1] != '+' && calculoF[indiceH-1] != '-' && calculoF[indiceH-1] != '*' && calculoF[indiceH-1] != '/' && calculoF[indiceH-1] != '(') {
                calculoSCT = numeroI.concat(`*(Math.cos(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else if (calculoF[indiceH-1] == '+' || calculoF[indiceH-1] == '-' || calculoF[indiceH-1] == '*' || calculoF[indiceH-1] == '/' || calculoF[indiceH-1] == '(') {
                calculoSCT = numeroI.concat(`(Math.cos(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else {
                calculoSCT = `Math.cos(${grados} * (Math.PI / 180)).toFixed(2)`
                return calculoSCT
            }
        } else if (calculoF.includes('Sen')) {
            let indiceD = calculoF.indexOf('n')
            let grados = calculoF.substring(indiceD+1)
            let indiceH = calculoF.indexOf('S')
            let numeroI = calculoF.substring(0, indiceH)
            if (calculoF[0] != 'S' && calculoF[indiceH-1] != '+' && calculoF[indiceH-1] != '-' && calculoF[indiceH-1] != '*' && calculoF[indiceH-1] != '/' && calculoF[indiceH-1] != '(') {
                calculoSCT = numeroI.concat(`*(Math.sin(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else if (calculoF[indiceH-1] == '+' || calculoF[indiceH-1] == '-' || calculoF[indiceH-1] == '*' || calculoF[indiceH-1] == '/' || calculoF[indiceH-1] == '(') {
                calculoSCT = numeroI.concat(`(Math.sin(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else {
                calculoSCT = `Math.sin(${grados} * (Math.PI / 180)).toFixed(2)`
                return calculoSCT
            }
        } else if (calculoF.includes('Tan')) {
            let indiceD = calculoF.indexOf('n')
            let grados = calculoF.substring(indiceD+1)
            let indiceH = calculoF.indexOf('T')
            let numeroI = calculoF.substring(0, indiceH)
            if (calculoF[0] != 'T' && calculoF[indiceH-1] != '+' && calculoF[indiceH-1] != '-' && calculoF[indiceH-1] != '*' && calculoF[indiceH-1] != '/' && calculoF[indiceH-1] != '(') {
                calculoSCT = numeroI.concat(`*(Math.tan(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else if (calculoF[indiceH-1] == '+' || calculoF[indiceH-1] == '-' || calculoF[indiceH-1] == '*' || calculoF[indiceH-1] == '/' || calculoF[indiceH-1] == '(') {
                calculoSCT = numeroI.concat(`(Math.tan(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else {
                calculoSCT = `Math.tan(${grados} * (Math.PI / 180)).toFixed(2)`
                return calculoSCT
            }
        }
    }

function sqrt(calculo) {
    let indice = calculo.indexOf('√')
    let numeroII = calculo.substring(indice+1)
    let numeroI = calculo.substring(0, indice)
    if (calculo[0] != '√' && calculo[indice-1] != '+' && calculo[indice-1] != '-' && calculo[indice-1] != '*' && calculo[indice-1] != '/') {
        return numeroI.concat(`*Math.sqrt(${numeroII})`)
    } else if (calculo[indice-1] == '+' || calculo[indice-1] == '-' || calculo[indice-1] == '*' || calculo[indice-1] == '/') {
        return numeroI.concat(`Math.sqrt(${numeroII})`)
    } else {
        return `Math.sqrt(${numeroII})`
    }
}

function comprobarUltimo(calculo, valor) {
    if ((valor == '*' || valor == '/' || valor == '+' || valor == '-') &&  (calculo[calculo.length - 1] == '+' || calculo[calculo.length - 1] == '-' )){
        return ''
    } else if ((valor == '*' || valor == '/') && (calculo[calculo.length - 1] == '*' || calculo[calculo.length - 1] == '/' )) {
        return ''
    } else {
        return valor
    }
}

function convertirNumeros(value, calculoDec, calculo) {
    if ((tipo === 'decimal' && value === 'dec') || (tipo === 'hex' && value === 'hex') || (tipo === 'oct' && value === 'oct') || (tipo === 'bin' && value === 'bin')) {
        return calculoDec;
    }
    if (tipo === 'decimal' && value === 'bin' && /^[0-9]+$/.test(calculoDec)) {
      return decToBin(calculoDec);
    } else if (tipo === 'decimal' && value === 'hex' && /^[0-9]+$/.test(calculoDec)) {
      return decToHex(calculoDec);
    } else if (tipo === 'decimal' && value === 'oct' && /^[0-9]+$/.test(calculoDec)) {
      return decToOct(calculoDec);
    } else if (tipo === 'bin' && value === 'dec' && /^[01]+$/.test(calculoDec)) {
      return binToDec(calculoDec);
    } else if (tipo === 'bin' && value === 'hex' && /^[01]+$/.test(calculoDec)) {
      return binToHex(calculoDec);
    } else if (tipo === 'bin' && value === 'oct' && /^[01]+$/.test(calculoDec)) {
      return binToOct(calculoDec);
    } else if (tipo === 'hex' && value === 'dec' && /^[0-9A-Fa-f]+$/.test(calculo)) {
      return hexToDec(calculo);
    } else if (tipo === 'hex' && value === 'bin' && /^[0-9A-Fa-f]+$/.test(calculo)) {
      return hexToBin(calculo);
    } else if (tipo === 'hex' && value === 'oct' && /^[0-9A-Fa-f]+$/.test(calculo)) {
      return hexToOct(calculo);
    } else if (tipo === 'oct' && value === 'dec' && /^[0-7]+$/.test(calculoDec)) {
      return octToDec(calculoDec);
    } else if (tipo === 'oct' && value === 'bin' && /^[0-7]+$/.test(calculoDec)) {
      return octToBin(calculoDec);
    } else if (tipo === 'oct' && value === 'hex' && /^[0-7]+$/.test(calculoDec)) {
      return octToHex(calculoDec);
    } else {
      return 'SyntaxError';
    }
  }
  
  function decToBin(decimal) {
    tipo = 'bin'
    console.log(tipo)
    return (decimal >>> 0).toString(2);
  }
  
  function decToHex(decimal) {
    tipo = 'hex'
    return decimal.toString(16).toLowerCase();
  }
  
  function decToOct(decimal) {
    tipo = 'oct'
    return decimal.toString(8);
  }
  
  function binToDec(binario) {
    tipo = 'decimal'
    return parseInt(binario, 2);
  }
  
  function binToHex(binario) {
    tipo = 'hex'
    return parseInt(binario, 2).toString(16).toLowerCase();
  }
  
  function binToOct(binario) {
    tipo = 'oct'
    return parseInt(binario, 2).toString(8);
  }
  
  function hexToDec(hexadecimal) {
    tipo = 'decimal'
    return parseInt(hexadecimal, 16);
  }
  
  function hexToBin(hexadecimal) {
    tipo = 'bin'
    return parseInt(hexadecimal, 16).toString(2);
  }
  
  function hexToOct(hexadecimal) {
    tipo = 'oct'
    return parseInt(hexadecimal, 16).toString(8);
  }
  
  function octToDec(octal) {
    tipo = 'decimal'
    return parseInt(octal, 8);
  }
  
  function octToBin(octal) {
    tipo = 'bin'
    return parseInt(octal, 8).toString(2);
  }
  
  function octToHex(octal) {
    tipo = 'hex'
    return parseInt(octal, 8).toString(16).toLowerCase();
  }
  