const value = 'Global';

function myFunction() {
    console.log(value);
}

function run() {
    const value = 'Local';
    myFunction();
}

run();