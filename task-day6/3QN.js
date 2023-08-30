class Person {
    constructor(name, weight, age, colour, qualification, country) {
        this.name = name;
        this.weight = weight;
        this.age = age;
        this.colour = colour;
        this.qualification = qualification;
        this.country = country;
    }
    details() {
        console.log(`
        name:${this.name}
        weight:${this.weight}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        country:${this.country}`)
    }
}
let Person1 = new Person("Hari", "72", "20", "dark", "B.E", "India")
Person1.details()

