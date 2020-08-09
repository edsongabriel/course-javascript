const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
approved.forEach((element, index, array) => {
    console.log(`${index + 1}) ${element}`); // 1) Agatha ...
    console.log(array);
});
console.log();
approved.forEach(element => console.log(element)); // Agatha ...
console.log();
// Ou ainda:
const displayApproved = element => console.log(element);
approved.forEach(displayApproved);