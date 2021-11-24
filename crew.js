const Person = require('./person')

class CrewMember extends Person {
    constructor(name,position,idNumber){
        super(name)
        this.position = position
        this.idNumber = idNumber
    }
}

// c1 = new CrewMember("Bob","copilot",7)
// console.log(c1 instanceof CrewMember)
console.log(CrewMember.prototype instanceof Person)

module.exports = CrewMember