const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    address:{
        street: '5th Avenue', 
        number: 6000
    }
};

const {address: {street = 'Avenida getulio vargas', number}} = person;
console.log(street, number);

