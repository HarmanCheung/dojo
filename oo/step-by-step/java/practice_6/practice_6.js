class Person {
    constructor(name, age) {
        this.name = 'Tom';
        this.age = 21;
    }

    introduce() {
        return 'My name is ' + this.name + '.I am ' + this.age + ' years old.';
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super();
        this.klass = 'Class 2';
    }

    introduce(){
        return super.introduce() + 'I am a Student.I am at ' + this.klass;
    }
}

class Worker extends Person{
    constructor(name,age){
        super();
    }

    introduce(){
        return super.introduce() + 'I am a Worker.I have a job.';
    }
}
