const producer = ['Mercedes', 'Audo', 'BMW'];

function print(name, index) {
    console.log(`${index + 1}. ${name}`);
}

producer.forEach(print);


// DESTA MANEIRA, É MAIS BONITO E RÁPIDO FAZER UM forEach.
// for(i in producer){
//     console.log(producer[i]);
// }

// producer.forEach(name => console.log(name));