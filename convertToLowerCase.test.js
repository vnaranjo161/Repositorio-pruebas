const convertToLowerCase = require(`./funciones/convertToLowerCase`)

test('Hello should return hello', () => {
    let result = convertToLowerCase("Hello");
    expect(result).toBe(`hello`);
})

test('hEllO should return false', () => {
    let result = convertToLowerCase("hEllO");
    expect(result).toBe(`hello`);
})

test('hello should return hello', () => {
    let result = convertToLowerCase("hello");
    expect(result).toBe(`hello`);
})

test('hello should return convertToLowerCase', () => {
    let result = convertToLowerCase("convertToLowerCase");
    expect(result).toBe(`converttolowercase`);
})