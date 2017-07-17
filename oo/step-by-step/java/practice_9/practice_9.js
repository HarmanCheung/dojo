class Person {
    constructor(id,name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return 'My name is ' + this.name + '.I am ' + this.age + ' years old.';
    }
}

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass.leader === this.name){
            return super.introduce() + 'I am a Student.I am Leader of ' + this.klass.number;
        }
        else {
            return super.introduce() + 'I am a Student.I am at ' + this.klass.number;
        }
    }
}

class Klass{
    constructor(number){
        this.number = 'Class' + number;
    }
    assignLeader(student){
        this.leader = student.name;
    }
    
}

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass == '' || this.klass == undefined || this.klass == null) {
            return super.introduce() + 'I am a Teacher.I teach No Class';
        }
        else {
            return super.introduce() + 'I am a Teacher.I teach ' + this.klass.number + '.';
        }
    }


    introduceWith(student) {
        if (student.klass == this.klass) {
            return super.introduce() + 'I am a Teacher.I teach ' + student.name + '.';
        }
        else {
            return super.introduce() + 'I am a Teacher.I don’teach ' + student.name + '.';
        }
    }
}


module.exports.Person = Person;
module.exports.Student = Student;
module.exports.Klass = Klass;
module.exports.Teacher = Teacher;
