'use strict';
function getYearOfBirth(age){
    return 2018-age;
}
function createGreeting(name,age){
    const yearOfBirth = getYearOfBirth(age);
  return (`Hi my name is ${name}, and I'm ${age} years old. I was born in the year ${yearOfBirth} `);
}

const createGreeating1 = createGreeting("Janet", 29);
console.log(createGreeating1);