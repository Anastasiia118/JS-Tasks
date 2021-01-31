//отфильтровать массив на чётные целые числа и вывести их в новом массиве

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => { 
    return num % 2 === 0;
};

const filterArray = (array, filFunction) => {
    const NewArray = [];
    array.forEach(number => {
        if (filFunction(number)) {
            NewArray.push(number);
        }
    });
    return NewArray;
};

console.log(filterArray(mixedArray, isEven));
