const capitalize = string => {
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter += string.slice(1, string.length);
}


const reverseString = string => {
    let newString = "";
    for (let i = string.length - 1; i > - 1; i--) {
        newString += string[i];
    }
    return newString;
}


const calculator = (function() {
    const add = (num1, num2) => {
        return Math.round((num1 + num2) * 100) / 100
    }

    const subtract = (num1, num2) => {
        return Math.round((num1 - num2) * 100) / 100
    } 

    const multiply = (num1, num2) => {
        return Math.round((num1 * num2) * 100) / 100
    }

    const divide = (num1, num2) => {
        return Math.round((num1 / num2) * 100) / 100
    }

    return { add, subtract, multiply, divide }
})();


const caesarCipher = (string, shiftFactor) => {
    const [shiftedLowerCase, shiftedUpperCase] = shiftAlphabet(shiftFactor);
    const newString = findLetters(string, shiftedLowerCase, shiftedUpperCase);
    return newString;
}


const shiftAlphabet = shiftFactor => {
    const shiftedAlphabet = [];
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

    for (let i=0; i < ALPHABET.length; i++) {
        if (i + shiftFactor > ALPHABET.length - 1) {
            shiftedAlphabet[i] = ALPHABET[(i + shiftFactor) - 26];
        } else {
            shiftedAlphabet[i] = ALPHABET[i + shiftFactor];
        }
    }

    const lowerCase = shiftedAlphabet.join("");
    const upperCase = lowerCase.toUpperCase();

    return [lowerCase, upperCase];
}


const findLetters = (string, shiftedLowerCase, shiftedUpperCase) => {
    const lowerALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const upperALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";
    let index;

    for (let i=0; i < string.length; i++) {
        if (lowerALPHABET.includes(string[i])) {
            index = lowerALPHABET.indexOf(string[i]);
            newString += shiftedLowerCase[index];
        } else if (upperALPHABET.includes(string[i])) {
            index = upperALPHABET.indexOf(string[i]);
            newString += shiftedUpperCase[index];
        } else {
            newString += string[i];
        }
    }

    return newString;
}


const analyzeArray = (numArray) => {
    const avg = numArray.reduce((total, currentNum) => {
        return total + currentNum;
    }) / numArray.length;

    let max = numArray[0];
    let min = numArray[0];

    for (const num of numArray) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return {
        average: avg,
        min: min,
        max: max,
        length: numArray.length
    }
}


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};