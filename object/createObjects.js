// usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Product(name, price, discount){
    this.name = name;
    this.getPriceDiscount = () => {
        return price * (1 - discount);   
    }
}
const p1 = new Product('Caneta', 7.99, 0.15);
const p2 = new Product('Notebook', 2998.99, 0.25);
console.log(p1.getPriceDiscount(), p2.getPriceDiscount());


// Function Factory
function createForm(name, salaryBase, faults){
    return {
        name,
        salaryBase,
        faults,
        getSalario() {
            return (salaryBase / 30) * (30 - faults);
        }
    }
}
const f1 = createForm('João', 7980, 4);
const f2 = createForm('Maria', 11400, 1); 
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const daughter = Object.create(null)
daughter.name = 'Ana';
console.log(daughter);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);