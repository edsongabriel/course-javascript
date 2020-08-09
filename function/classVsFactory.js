class People {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Meu name é ${this.name}`);
        
    }
}

const p1 = new People('João');
p1.speak();


const createPeople = name => {
    return {
        speak: () => console.log(`Meu name é ${name}`)
    }
}

const p2 = createPeople('João');
p2.speak();