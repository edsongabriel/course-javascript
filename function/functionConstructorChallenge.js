function People(name) {
    this.name = name;

    this.speak = function() {
        console.log(`Meu name ${this.name}`);
    }
}

const p1 = new People('João');
p1.speak();