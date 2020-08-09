function Class(name, videoID) {
    this.name = name;
    this.videoID = videoID;
}

const class1 = new Class('Bem vindo', 123);
const class2 = new Class('Até breve', 456);
console.log(class1, class2);

// Simulando o comando new
function New(f, ...args) {
    const obj = {}
    obj.__proto__ = f.prototype;
    f.apply(obj, args);
    return obj;
}

const class3 = New(Class, 'Bem vindo', 123);
const class4 = New(Class, 'Até breve', 456);
console.log(class3, class4);
