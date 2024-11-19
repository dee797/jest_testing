const { capitalize } = require("./index");

test("works", () => {
    expect(capitalize("hello world")).toEqual("Hello world");
});

