function Car(maximumSpeed = 200, delta = 5) {
    // atributo privado
    let currentSpeed = 0;

    // metodo publico
    this.sppedUp = function () {
        if ((currentSpeed + delta) <= maximumSpeed) {
            currentSpeed += delta;
        } else {
            currentSpeed = maximumSpeed;
        }
    }

    // metodo publico
    this.getCurrentSpeed = function () {
        return currentSpeed;
    }
}

const uno = new Car;
uno.sppedUp();
console.log(uno.getCurrentSpeed());

const ferrari = new Car(350, 20);
ferrari.sppedUp();
console.log(ferrari.getCurrentSpeed());