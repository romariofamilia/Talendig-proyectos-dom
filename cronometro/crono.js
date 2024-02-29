const crono = document.querySelector('#cronometro');
const iniciarButton = document.querySelector('#iniciar');
const reiniciarButton = document.querySelector('#reinicar')

let [ms, segundos, minutos, horas] = [0, 0, 0, 0];

let estadoCronometro = 'pausado';
let intervalo;

function iniciarCrono() {
    let fMinutos = formato(minutos)
    let fSegundos = formato(segundos)
    let fHoras = formato(horas)
    let fMs = formato(ms)
    ms++;
    if(ms/100 === 1) {
        ms = 0
        segundos++;
        if(segundos/60 == 1) {
            segundos = 0;
            minutos++;

            if(minutos/60 == 1) {
                minutos = 0;
                horas++;
            }
        }
    }

    
    crono.innerHTML = `${fMinutos} : ${fSegundos} : ${fMs}`
    if(horas >= 1) {
        crono.innerHTML = `${fHoras} : ${fMinutos} : ${fSegundos}`;
    }
    

    
}

function formato(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo
}

iniciarButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (estadoCronometro === 'pausado') {
        intervalo = window.setInterval(iniciarCrono, 10);
        estadoCronometro = 'iniciado';
        iniciarButton.textContent = 'Pausar'
    }
    else {
        window.clearInterval(intervalo);
        estadoCronometro = 'pausado';
        iniciarButton.textContent = 'Iniciar'
    }
})


reiniciarButton.addEventListener('click', (e) => {
    e.preventDefault();

    window.clearInterval(intervalo);

    horas = 0;
    minutos = 0;
    segundos = 0;
    ms = 0;

    crono.innerHTML = '00 : 00 : 00';
    estadoCronometro = 'pausado';
})