const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    address:{
        street: '5th Avenue', 
        number: 6000
    }
};

const {address: {street}} = person;
console.log(street);

