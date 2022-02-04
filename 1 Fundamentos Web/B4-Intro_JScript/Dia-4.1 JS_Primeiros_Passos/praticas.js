//Primeira Pratica

/*const myName = 'Sandoerton';
const birthCity = 'Caruaru-PE';
let birthYear = 1985;

console.log(myName, birthCity, birthYear);

birthYear = 2022;

console.log(birthYear);*/

//Pratica 2

/*let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);

patientId = '50';

console.log(typeof patientId);*/

//Pratica 3

/*const base = 5;
let height = 8;
const area = base*height;
const perimeter = 2*base + 2*height;

console.log(area, perimeter);*/

//Pratica 4

/*const notaDesafio = (Math.floor(Math.random()*100)+1);
console.log('A nota do desafio foi ', notaDesafio);

if(notaDesafio >= 80) {
  console.log('Parabéns, você foi aprovado(a)!');
} else if (notaDesafio <80 && notaDesafio >= 60) {
  console.log('Você está na nossa lista de espera.');
} else {
  console.log('Infelizmente, você foi reprovado(a).');
}*/

//Pratica 5
/*
let currentHour = 0;
let message;

if (currentHour >= 22 && currentHour < 24 || currentHour >= 0 && currentHour < 4) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar.';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hummm, cheiro de café recém passado!';
} else {
  message = 'Horário inválido...';
}

console.log(message);
*/

//Pratica 6
/*
let weekDay = 'segunda-feiraa';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay === 'sábado' || weekDay === 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU');
} else {
  console.log('Error... Verifique a opção digitada.');
}
*/

//Pratica 7

const notaDesafio = (Math.floor(Math.random()*100)+1);
console.log('A nota do desafio foi ', notaDesafio);
let situacao;

if(notaDesafio >= 80) {
  situacao = 'Aprovado(a)';
} else if (notaDesafio <80 && notaDesafio >= 60) {
  situacao = 'Lista de espera';
} else {
  situacao = 'Reprovado(a)';
}

switch (situacao) {
  case 'Aprovado(a)':
    console.log('Parabéns, você foi aprovado(a)!');
    break;
  case 'Lista de espera':
    console.log('Você está na nossa lista de espera.');
    break;
  case 'Reprovado(a)':
    console.log('Infelizmente, você foi reprovado(a).');
    break;
  default: 
    console.log('Valor não identificado.');
}

console.log('Status: ',situacao);
