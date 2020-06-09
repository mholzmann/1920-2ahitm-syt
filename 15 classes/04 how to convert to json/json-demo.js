class Person {
    #age = 0             // private field

    constructor(firstName, lastName, age) {
        this.firstName = firstName;             // public field
        this.lastName = lastName;               // public field
        this.#age = age;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    isFullAged() {
        return this.#age >= 18;
    }

    // Getter vor #age field
    get age() {
        return this.#age;
    }

    // Setter for #age field
    set age(value) {
        if (value >= 0) {
            this.#age = value;
        } else {
            console.error('Person.age must not be negative!');
        }
    }

    // By default private fields are not part of JSON.
    // If they should be included you have to implement toJSON() method.
    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.#age
        }
    }

    static fromJSON(json) {
        const person = JSON.parse(json);
        return new Person(person.firstName, person.lastName, person.age);
    }
}

const person = new Person('John', 'Smith', 34);
console.log(person);

const personJSON = JSON.stringify(person);
console.log(personJSON);

const newPerson = Person.fromJSON(personJSON);
console.log(newPerson);