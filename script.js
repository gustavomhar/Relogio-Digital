const Horas = document.getElementById('Horas')
const Minutos = document.getElementById('Minutos')
const Segundos = document.getElementById('Segundos')


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();    
    let min = dateToday.getMinutes();    
    let seg = dateToday.getSeconds(); 
    
    
    if(hora < 10) hora = '0' + hora;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;


    Horas.textContent = hora;
    Minutos.textContent = min
    Segundos.textContent = seg
})