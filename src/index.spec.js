const { capitalize, reverseString, calculator } = require("./index");

test("Capitalize first letter", () => {
    expect(capitalize("hello world")).toEqual("Hello world");
});

test("Reverse characters in a string", () => {
    expect(reverseString("Hello World")).toEqual("dlroW olleH");
});

describe("calculator", () => {
    test("Add two numbers", () => {
        expect(calculator.add(33.222, 5.4)).toEqual(38.62);
    });

    test("Subtract two numbers", () => {
        expect(calculator.subtract(23.571, 34.25)).toEqual(-10.68);
    });

    test("Multiply two numbers", () => {
        expect(calculator.multiply(0, 3.33)).toEqual(0);
    });

    test("Divide two numbers", () => {
        expect(calculator.divide(3, 2)).toEqual(1.50)
    })
})