// Prototypal Inheritance

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}`
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

Person.prototype.setAge = function (age) {
    this.age = age
}


const person1 = new Person('Hossam', 'Hassan', 25)
person1.setName('Nooh Hossam')
person1.setAge(3)
console.log(person1.getBio())

const person2 = new Person('Naima', 'Allen', 27)
console.log(person2.getBio())