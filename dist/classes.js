class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmI() {
        return this.name;
    }
}
const newPerson = new Person(1, 'Marcos', 28);
export {};
//# sourceMappingURL=classes.js.map