function speakAfter(seconds, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text); // aceita apenas um parâmetro
            //reject(text);
        }, seconds * 1000)
    })
}
speakAfter(3, 'Que legal')
    .then(text => text.concat('?!?'))
    .then(otherText => console.log(otherText));
    //.catch(e => console.log(e));