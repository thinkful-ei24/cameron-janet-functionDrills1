'use strict';
function getYearOfBirth(age){
  if(age < 0){
    throw new Error ('Age cannot be negative'); 
  }
  
  return 2018-age;
}


function createGreeting(name,age){
  const yearOfBirth = getYearOfBirth(age);
  return (`Hi my name is ${name}, and I'm ${age} years old. I was born in the year ${yearOfBirth} `);
}

const createGreeting1 = createGreeting("Janet", 29);
console.log(createGreeting1);

try {
  createGreeting("janet",-5);
} catch (e) {
  console.error(e.message);
}
