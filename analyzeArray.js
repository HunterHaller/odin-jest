function sumArray(array) {
    let sum = 0;

    array.forEach((number) => {
        sum += number;
    })

    return sum;
}

function findMin(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

function findMax(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

export function analyzeArray(array) {
    
    const dataObject = {
        average: Number((sumArray(array) / array.length).toFixed(0)),
        min: findMin(array),
        max: findMax(array),
        length: array.length
    }

    return dataObject;
}