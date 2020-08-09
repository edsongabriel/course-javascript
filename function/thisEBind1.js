const people = {
    greeting: 'Bom dia!',
    speak() {
        console.log(this.greeting);
    }
}

people.speak();
const speak = people.speak;
speak(); // CONFLITO ENTRE PARADIGMAS: FUNCIONAL E OO.

const speakOfPeople = people.speak.bind(people); // O BIND FAZ COM QUE O this SEJA REFERENTE AO OBJETO PASSADO COMO PARÂMETRO
speakOfPeople();