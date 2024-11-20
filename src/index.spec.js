const { capitalize, reverseString, calculator, caesarCipher } = require("./index");

test.skip("Capitalize first letter", () => {
    expect(capitalize("hello world")).toEqual("Hello world");
});

test.skip("Reverse characters in a string", () => {
    expect(reverseString("Hello World")).toEqual("dlroW olleH");
});

describe("calculator", () => {
    test.skip("Add two numbers", () => {
        expect(calculator.add(33.222, 5.4)).toEqual(38.62);
    });

    test.skip("Subtract two numbers", () => {
        expect(calculator.subtract(23.571, 34.25)).toEqual(-10.68);
    });

    test.skip("Multiply two numbers", () => {
        expect(calculator.multiply(0, 3.33)).toEqual(0);
    });

    test.skip("Divide two numbers", () => {
        expect(calculator.divide(3, 2)).toEqual(1.50);
    });
});

describe("caesarCipher", () => {

    test("Wrap from z to a", () => {
        expect(caesarCipher("xyz", 3)).toEqual("abc");
    })

    test("Case preservation", () => {
        expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
    });

    test("Punctuation preservation", () => {
        expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
    });
})