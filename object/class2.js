class grandFather {
    constructor(surname) {
        this.surname = surname;
    }
}

class Father extends grandFather {
    constructor(surname, profession = 'professor') {
        super(surname);
        this.profession = profession;
    }
}

class Son extends Father {
    constructor() {
        super('Silva');
    }
}

const son = new Son();
console.log(son);