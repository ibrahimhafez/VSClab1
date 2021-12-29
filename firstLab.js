// let result1 = prompt("Please enter your First Name");
// hello hello helloo

// console.log(result1);

firstName = prompt("Please enter your First Name?", "");

lastName = prompt("Please enter your Last Name?", "");

birthYear = prompt("Enter your year of birth, please", "year of birth");

let age = 2021 - Number(birthYear);

let message = (`welcome ${firstName} ${lastName} you are ${age} years old`);

confirm(message);

alert(message);