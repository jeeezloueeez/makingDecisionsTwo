// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fizzbuzz`)
//   } else if (i % 3 === 0) {
//     console.log(`fizz`)
//   } else if (i % 5 === 0) {
//     console.log(`buzz`) 
//   } else {
//     console.log(i);
//   }
// }

let scores = [80, 60, 70, 75, 85, 100, 50, 88, 92];

// This is the more tedious and long way of adding 5 points to each score in the `score` array
// scores[0] += 5;
// scores[1] += 5;
// scores[2] += 5;
// scores[3] += 5;
// scores[4] += 5;
// scores[5] += 5;
// scores[6] += 5;
// scores[7] += 5;
// scores[8] += 5;

// console.log(scores);

// This loop is the easier way to add 5 points to each score in the `score` array
for (let i = 0; i < scores.length; i++){
  scores[i] +=5
}

console.log(scores)