import { buttonDetector } from "./buttons.js";

const textoMostrado = document.querySelector('p')
let calculo = '0'
let calculoSCT = ''

buttonDetector(reemplazarTexto)

export function reemplazarTexto(value) {
    let valueS = String(value)
    console.log(valueS)
    if (valueS != '') {
        if (value === 'bin' || value === 'oct' || value === 'hex' || value === 'dec') {
            
        }else if (value != undefined) {
            if (value === '+' || value === '-' || value === '*' || value === '/' || value === 'sen' || value === 'cos' || value === 'tan' || value === '=') {
                if (calculo.includes('+') || calculo.includes('*') || calculo.includes('-') || calculo.includes('/')) {
                    if ( !calculo.includes('Sen') && !calculo.includes('Cos') && !calculo.includes('Tan')) {
                        calculo= eval(calculo)
                        calculo= String(calculo)
                    } else if ( calculo.includes('Sen') || calculo.includes('Cos') || calculo.includes('Tan')) {
                        calculo = eval(calculoSCT)
                        calculo = String(calculo)
                    }
                } else if ( calculo.includes('Sen') || calculo.includes('Cos') || calculo.includes('Tan')) {
                    calculo = eval(calculoSCT)
                    calculo = String(calculo)
                }
            }
            if (calculo === '0') {
                calculo = valueS
            } else if (value != '=') {
                calculo += valueS
                if (calculo.includes('Cos')) {
                    let indiceD = calculo.indexOf('s')
                    let grados = calculo.substring(indiceD+1)
                    let indiceH = calculo.indexOf('C')
                    let numeroI = calculo.substring(0, indiceH)
                    if (calculo[0] != 'C' && calculo[indiceH-1] != '+' && calculo[indiceH-1] != '-' && calculo[indiceH-1] != '*' && calculo[indiceH-1] != '/') {
                        calculoSCT = numeroI.concat(`*(Math.cos(${grados} * (Math.PI / 180))).toFixed(2)`)
                    } else if (calculo[indiceH-1] == '+' || calculo[indiceH-1] == '-' || calculo[indiceH-1] == '*' || calculo[indiceH-1] == '/') {
                        calculoSCT = numeroI.concat(`(Math.cos(${grados} * (Math.PI / 180))).toFixed(2)`)
                        console.log(calculo)
                    } else {
                        calculoSCT = `Math.cos(${grados} * (Math.PI / 180)).toFixed(2)`
                        console.log(calculoSCT)
                    }
                }
            }
            textoMostrado.textContent = calculo
        }
    }
}