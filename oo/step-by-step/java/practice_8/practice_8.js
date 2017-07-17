class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return 'My name is ' + this.name + '.I am ' + this.age + ' years old.';
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass.number;
    }

    introduce(){
        return super.introduce() + 'I am a Student.I am at ' + this.klass;
    }
}

class klass{
    constructor(number){
        this.number = 'Class' + number;
    }
    
}

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass ==''||this.klass == undefined||this.klass == null) {
            this.klass = 'No Class';
        }
        return super.introduce() + 'I am a Teacher.I teach ' + this.klass + '.';
    }

    introduceWith(student){
        if(student.klass == this.klass){
            return super.introduce() + 'I am a Teacher.I teach ' + student.name + '.';
        }
        else{
            return super.introduce() + 'I am a Teacher.I don’teach ' + student.name + '.';
        }
    }
}
