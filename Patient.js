class Patient {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }

    getName() {
        return this.name
    }

    getSurname() {
        return this.surname
    }

    getAge() {
        return this.age
    }
}

module.exports = Patient
