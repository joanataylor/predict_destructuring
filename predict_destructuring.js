//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
// logs first car ---> Tesla
// logs second car ---> Mercedes
console.log(randomCar)
console.log(otherRandomCar)

//________________________________________________________//

//2
const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//variable name is not defined - it will log an error
//wont run the next console.log -> but if it did it would log 'Elon'
// console.log(name);
console.log(otherName);

//________________________________________________________//

//3
const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
//logs password '12345'
//logs undefined because there is no password in the const person
console.log(password);
console.log(hashedPassword);

//________________________________________________________//

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
//2 == 5 ---> is false
//2 == 2 ---> is true
console.log(first == second);
console.log(first == third);

//________________________________________________________//

//5
const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
//value
//[1, 5, 1, 8, 3, 3]
//1
//5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//________________________________________________________//