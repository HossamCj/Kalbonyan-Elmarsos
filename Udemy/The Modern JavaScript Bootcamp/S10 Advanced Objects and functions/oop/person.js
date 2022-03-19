// Prototypal inheritance

class PersonClass {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })
        return bio
    }
}

const myPerson = new PersonClass('Hossam', 'AboNooh', 25, ['Reading', 'Recite Quran and Hadith'])
console.log(myPerson.getBio())

const Person = function (firstName, lastName, age, like = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.like = like
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}`
    this.like.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}`   
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Hossam', 'Hassan', 25, ['Reading', 'Parkour'])
me.setName('Abo Nooh')
console.log(me.getBio())

const person1 = new Person('Nooh', 'Hossam', 20, ['Reading', 'Parkour', 'Shouting'])
console.log(person1.getBio())











