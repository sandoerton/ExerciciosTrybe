let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
let maior = 0;
let par = 0;
let impar = 0;
let menor = numbers[0];
let newAr = [];
let newAr2 = [];

for (const number of numbers) {
    console.log(number);
    soma += number
    if (number > maior) {
        maior = number;
    }
    if (number % 2 == 0) {
        par += 1;
    } else {
        impar += 1;
    }
    if (number < menor) {
        menor = number;
    }
}
media = soma/numbers.length;

console.log('A soma destes valores é: ', soma);
console.log('A média destes valores é: ', media);

if (media > 20) {
    console.log('A média é maior que 20');
} else {
    console.log('A média é menor que 20');
}

console.log('O maior valor entre eles é: ', maior);
console.log('O menor valor entre eles é: ', menor);

if (par > 0) {
    console.log('Existem ', par, 'números pares.');
} else {
    console.log('Não existem números pares.');
}

if (impar > 0) {
    console.log('Existem ', impar, 'números impares.');
} else {
    console.log('Não existem números impares.');
}

for (let j = 1; j <= 25 ; j++) {
    newAr.push(j);
}

console.log(newAr);

for (let d = 0; d < newAr.length; d++) {
    newAr2.push(newAr[d] / 2);
}

console.log(newAr2);


