// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// Exerc 1

// const testingScope = escopo => {
//     if (escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)...';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         console.log(ifScope);
//     } else {
//         let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(false);



//Exerc 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// const ordenar = numbers => {
//     for (let a = 0; a < numbers.length; a += 1) {
//         for (let b = 0; b < numbers.length; b += 1) {
//             let compare = numbers[b];
//             if (numbers[a] < compare) {
//                 numbers[b] = numbers[a];
//                 numbers[a] = compare;
//             }
//         }
//     }
//     return oddsAndEvens;
// }

// ordenar (oddsAndEvens);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

//Exerc 2 Opção 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const ordenar = numbers => newOrdem = numbers.sort((a, b) => a - b);

// ordenar(oddsAndEvens);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

/*//Outras Práticas com Sort
//1-Strings

const frutas = ['maça', 'banana', 'uva', 'abacaxi'];

frutas.sort();

console.log(frutas);

const nums = [32, 10, 5, 15, 3, 2];

nums.sort();

console.log(nums);

//2-Numbers

const numbers = [32, 10, 5, 15, 3, 2];

numbers.sort(
    function(a, b) {
        return a - b;
    }
);

console.log(numbers);*/



//Parte II

//Exerc1

// const fatorialNumber = (num) => {
//     let fatorial = 1;
//     if (num > 0) {
//         for (let i = 1; i <= num; i += 1) {
//             fatorial = fatorial * i;
//         } else {
//             fatorial = 1
//         }
//     }
//     return fatorial;
// }

// console.log(fatorialNumber(5));

