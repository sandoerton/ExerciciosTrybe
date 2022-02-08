let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

//  for (let i = 1; i < numbers.length; i++) {
//      for (let j = 0; j < i; j++) {
//          if (numbers[i] < numbers[j]) {
//              let troca = numbers[i];
//              numbers[i] = numbers[j];
//              numbers[j] = troca;
//          }
//      }
//  }

//  console.log(numbers);

//  for (let i = 1; i < numbers.length; i++) {
//      for (let j = 0; j < i; j++) {
//          if (numbers[i] > numbers[j]) {
//              let troca = numbers[i];
//              numbers[i] = numbers[j];
//              numbers[j] = troca;
//          }
//      }
//  }

//  console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (i == numbers.length - 1) {
        numbers2.push(numbers[i]*2);
    } else {
        numbers2.push(numbers[i]*numbers[i+1]);
    }
}

console.log(numbers);
console.log(numbers2);