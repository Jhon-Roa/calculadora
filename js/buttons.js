const buttonInfo = document.querySelectorAll('.button') //importamos todos los botones

export function buttonDetector(callback) { //callback es una forma de una funcion (similar a un return solo que este se cooloca en donde va la funcion)

    buttonInfo.forEach(button => { //el foreach extrae la informacion de la lista
        button.addEventListener('click', (e) => { //addEventListener que detecta un click en uno de los botones de la lista
            const value = e.target.textContent; //la variable e extrae el textcontent con target

            switch (value) {
                case 'Bin': 
                    callback('bin');
                    break;
                case 'oct': 
                    callback('oct');
                    break;
                case 'hex': 
                    callback('hex');
                    break;
                case 'dec': 
                    callback('dec');
                    break;
                case '1': 
                    callback('1');
                    break;
                case '2': 
                    callback('2');
                    break;
                case '3': 
                    callback('3');
                    break;
                case '4': 
                    callback('4');
                    break;
                case '5': 
                    callback('5');
                    break;
                case '6': 
                    callback('6');
                    break;
                case '7': 
                    callback('7');
                    break;
                case '8': 
                    callback('8');
                    break;
                case '9': 
                    callback('9');
                    break;
                case '.': 
                    callback('.');
                    break;
                case '0': 
                    callback('0');
                    break;
                case '=': 
                    callback('=');
                    break;
                case '(': 
                    callback('(');
                    break;
                case ')': 
                    callback(')');
                    break;
                case 'C': 
                    callback('');
                    break;
                case '+': 
                    callback('+');
                    break;
                case '-': 
                    callback('-');
                    break;
                case '*': 
                    callback('*');
                    break;
                case '/': 
                    callback('/');
                    break;
                case 'Tan': 
                    callback('Tan');
                    break;
                case 'Sen': 
                    callback('Sen');
                    break;
                case 'Cos': 
                    callback('Cos');
                    break;
                case '√': 
                    callback('√');
                    break;
                case 'xy': 
                    callback('x^y');
                    break;
                default:
                    callback(null); // En caso de no coincidir con ninguno
            }
        });
    });
}
