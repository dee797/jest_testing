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


module.exports = {
    capitalize,
    reverseString,
    calculator,
};