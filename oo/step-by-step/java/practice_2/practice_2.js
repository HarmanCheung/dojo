class Person {
    constructor(name, age) {
        this.name = 'Tom';
        this.age = 21;
    }

    introduce() {
        return 'My name is ' + this.name + '.I am ' + this.age + ' years old.';
    }
}

class Student {
    constructor(name,age,klass){
        this.name = 'Tom';
        this.age = 21;
        this.klass = 'Class 2';
    }

    introduce(){
        return 'My name is ' + this.name + '.I am ' + this.age + ' years old.I am a Student.I am at ' + this.klass;
    }
}
