
const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');


let dia = prompt("Digite o dia do seu aniversário");
let mes = prompt("Digite o mês do seu aniversário");
let ano = prompt("Digite o ano em que você gostaria de calcular");





function calculo(dia, mes, ano) {
    const estrutura = (dia + " " + BirthDay(mes) + " " + ano);
    estrutura.toString();
    return estrutura;
}



function countdown(valor) {
    //check if the countdown is to reset totally the clock
    if (valor == 0) {
        const newYearsDate = new Date();
        const currentDate = new Date();
        console.log(newYearsDate - currentDate);
        console.log("funcionou");
        const seconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(seconds / 3600 / 24);
        const hours = Math.floor(seconds / 3600) % 24;
        const minutes = Math.floor(seconds / 60) % 60;
        const totalseconds = Math.floor(seconds) % 60;

        daysEL.innerHTML = formatTime(days);
        hoursEL.innerHTML = formatTime(hours);
        minsEL.innerHTML = formatTime(minutes);
        secondsEL.innerHTML = formatTime(totalseconds);
        clearInterval(myInterval);
    }

    else {
        const newYearsDate = new Date(calculo(dia, mes, ano));
        const currentDate = new Date();

        const seconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(seconds / 3600 / 24);
        const hours = Math.floor(seconds / 3600) % 24;
        const minutes = Math.floor(seconds / 60) % 60;
        const totalseconds = Math.floor(seconds) % 60;

        daysEL.innerHTML = formatTime(days);
        hoursEL.innerHTML = formatTime(hours);
        minsEL.innerHTML = formatTime(minutes);
        secondsEL.innerHTML = formatTime(totalseconds);
       
    }



}


function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


const myInterval = setInterval(countdown, 1000);
countdown();




function BirthDay(mes) {
    switch (mes) {
        case '1': {
            const mesX = 'Jan';
            return mesX;
            break;
        }

        case '2': {
            const mesX = 'Feb';
            return mesX;
            break;
        }

        case '3': {
            const mesX = 'Mar';
            return mesX;
            break;
        }

        case '4': {
            const mesX = 'Apr';
            return mesX;
            break;
        }

        case '5': {
            const mesX = 'May';
            return mesX;
            break;

        }
        case '6': {
            const mesX = 'Jun';
            return mesX;
            break;

        }
        case '7': {
            const mesX = 'Jul';
            return mesX;
            break;
        }

        case '8': {
            const mesX = 'Aug';
            return mesX;
            break;
        }

        case '9': {
            const mesX = 'Sep';
            return mesX;
            break;
        }

        case '10': {
            const mesX = 'Oct';
            return mesX;
            break;

        }
        case '11': {
            const mesX = 'Nov';
            return mesX;
            break;
        }

        case '12': {
            const mesX = 'Dec';
            return mesX;
            break;
        }

        default:
            console.log("nao encontrado :)");


    }
}

document.getElementById("zerar").onclick = function () { funcaoZerar() };
function funcaoZerar() {
    const valor = 0;
    countdown(valor);

}


document.getElementById("newdata").onclick = function () { funcaoAgain() };
function funcaoAgain() {
    let dia = prompt("Digite o dia do seu aniversário");
    console.log(dia);
    let mes = prompt("Digite o mês do seu aniversário");
    console.log(mes);
    let ano = prompt("Digite o ano em que você gostaria de calcular");
    countdown();

}





