/*let js = 'amazing'
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "BOB";
console.log(firstName)


let country = 'Bangladesh';
let continent = 'Asia';
let population = 16;

console.log(country);
console.log(continent);
console.log(population);


true;
console.log(true);

let javscriptIsFun = true;
console.log(javscriptIsFun);

console.log(typeof true);
console.log(typeof javscriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');*/

// let afe = 30;
// age = 31;

// const birthYear = 1991;

// var job = 'programmer';
// job = 'teacher';


// // type conversion
// const inputYear = '1991';
// console.log(inputYear);
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 19);
// console.log(Number('Nayeef'));
// console.log(typeof NaN);

// console.log(String(23), 23);


// // type coercion

// console.log('I am ' + 23 + ' Years old');
// console.log('23' - '10' - 3); // in js + sign means concate for strings


// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);


// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should Drive....');
// }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired)

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should Drive....');
// }


//Challange 3
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }

//Bonus1
// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log("No one wins the trophy");
// }


// const day = 'Sunday';

// switch (day) {
//     case 'monday': // day=='monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record Videos');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the Weekend');
//         break;
//     default:
//         console.log('Not a valid day !');
// }

// challange : use if else

// if (day === 'Monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'Tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('Write code examples');
// } else if (day === 'Friday') {
//     console.log('Record Videos');
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the Weekend');
// } else {
//     console.log('Not a valid day !');
// }

// const age = 19;
// // age >= 18 ? console.log('I like to drink wine') :
// // console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300

//solution

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// const totalBill = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`);