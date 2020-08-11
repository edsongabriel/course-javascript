Array.prototype.reduce2 = function (callback, initial) {
    let initialIndex = initial ? 0 : 1;
    let count = initial || this[0];
    for (let index = initialIndex; index < this.length; index++) {
        count = callback(count, this[index], index, this);
    }
    return count;
}

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce2((count, current) => count + current, 1);
console.log(result);