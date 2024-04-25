import { buttonDetector } from "./buttons.js";

const textoMostrado = document.querySelector('p')
let calculo = '0'
let calculoSCT = ''

buttonDetector(calculadora)

export function calculadora(value) {
    let valueS = String(value)
    if (valueS != 'c') {
        if (value === 'bin' || value === 'oct' || value === 'hex' || value === 'dec') {
            
        }else if (value != undefined) {
            if (value === '+' || value === '-' || value === '*' || value === '/' || value === 'Sen' || value === 'Cos' || value === 'Tan' || value === '=') {
                if (calculo.includes('+') || calculo.includes('*') || calculo.includes('-') || calculo.includes('/') || calculo.includes('Sen') || calculo.includes('Cos') || calculo.includes('Tan')){
                    if ( !calculo.includes('Sen') && !calculo.includes('Cos') && !calculo.includes('Tan')) {
                        try {
                            calculo= eval(calculo)
                        } catch (error) {
                            console.log('')
                        }
                        calculo= String(calculo)
                    } else if ( calculo.includes('Sen') || calculo.includes('Cos') || calculo.includes('Tan')) {
                        calculo = eval(calculoSCT)
                        calculo = String(calculo)
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
                calculoSCT= SCT(valueS, calculo)
                console.log(calculoSCT)
            }
            textoMostrado.textContent = calculo
        }
    } else {
        calculo = '0'
        textoMostrado.textContent = calculo
    }
}

function SCT(valor, calculoF) {
        if (calculoF.includes('Cos')) {
            let indiceD = calculoF.indexOf('s')
            let grados = calculoF.substring(indiceD+1)
            let indiceH = calculoF.indexOf('C')
            let numeroI = calculoF.substring(0, indiceH)
            if (calculoF[0] != 'C' && calculoF[indiceH-1] != '+' && calculoF[indiceH-1] != '-' && calculoF[indiceH-1] != '*' && calculoF[indiceH-1] != '/') {
                calculoSCT = numeroI.concat(`*(Math.cos(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else if (calculoF[indiceH-1] == '+' || calculoF[indiceH-1] == '-' || calculoF[indiceH-1] == '*' || calculoF[indiceH-1] == '/') {
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
            if (calculoF[0] != 'S' && calculoF[indiceH-1] != '+' && calculoF[indiceH-1] != '-' && calculoF[indiceH-1] != '*' && calculoF[indiceH-1] != '/') {
                calculoSCT = numeroI.concat(`*(Math.sin(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else if (calculoF[indiceH-1] == '+' || calculoF[indiceH-1] == '-' || calculoF[indiceH-1] == '*' || calculoF[indiceH-1] == '/') {
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
            if (calculoF[0] != 'T' && calculoF[indiceH-1] != '+' && calculoF[indiceH-1] != '-' && calculoF[indiceH-1] != '*' && calculoF[indiceH-1] != '/') {
                calculoSCT = numeroI.concat(`*(Math.tan(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else if (calculoF[indiceH-1] == '+' || calculoF[indiceH-1] == '-' || calculoF[indiceH-1] == '*' || calculoF[indiceH-1] == '/') {
                calculoSCT = numeroI.concat(`(Math.tan(${grados} * (Math.PI / 180))).toFixed(2)`)
                return calculoSCT
            } else {
                calculoSCT = `Math.tan(${grados} * (Math.PI / 180)).toFixed(2)`
                return calculoSCT
            }
        }
    }