// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'; // Não recomendado
const grandFather = {
    attr1: 'A'
}
const Father = {
    __proto__: grandFather,
    attr2: 'B'
}
const son = {
    __proto__: Father,
    attr3: 'C'
}
console.log(son.attr0, son.attr1, son.attr2, son.attr3);

const car = {
    currentSpeed: 0,
    speedMax: 200,
    sppedUp(delta){
        if(this.currentSpeed + delta <= this.speedMax){
            this.currentSpeed += delta;
        }else{
            this.currentSpeed = this.speedMax;
        }
    },
    status(){
        return `${this.currentSpeed}Km/h de ${this.speedMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    speedMax: 324 // shadowing
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(ferrari);
console.log(volvo);
volvo.sppedUp(100);
console.log(volvo.status());
ferrari.sppedUp(300);
console.log(ferrari.status());