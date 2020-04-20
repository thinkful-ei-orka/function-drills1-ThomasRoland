'use strict';

function getYearOfBirth(age) {
    if(age < 0) {
        throw new Error('Age can not be negative!');
    }
    return 2020 - age;
}
function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    const greeting1 = createGreeting('Roland', 31);
    console.log(greeting1);
} catch(error) {
    console.log(error);
}
