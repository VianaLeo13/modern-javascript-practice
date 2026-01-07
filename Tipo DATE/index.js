
function getDiaSemanaTexto(diaDaSemana){
let diaSemanaTexto;
switch(diaDaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
        break;  
    case 4:
        diaSemanaTexto = 'Quinta-feira';            
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;

        default:
        return diaSemanaTexto = '';
}   
}

const data = new Date('1966-09-24 00:00:00');
let diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);
 console.log(diaDaSemana, diaSemanaTexto);