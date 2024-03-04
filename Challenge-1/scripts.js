const firstName = 'John';
const age = 35;
const hobby = 'Coding'; // Changed variable name 'hobby' to 'myHobby'

const logTwice = (parameter) => {
  console.log(parameter); // Corrected console.log usage and added missing semicolon
  console.log(parameter); // Logging the parameter twice
};

const myHobby = () => { // Changed function name from 'hobby' to 'myHobby'
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`); // Corrected variable name to 'firstName'
};

myHobby(); // Call the function to execute
