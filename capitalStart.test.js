const capitalStart = require(`./funciones/capitalStart`)

test('Hello should return true', () => {
    let result = capitalStart("Hello");
    expect(result).toBe(true);
})

test('hEllO should return false', () => {
    let result = capitalStart("hEllO");
    expect(result).toBe(false);
})

test('0ello should return false', () => {
    let result = capitalStart("hello");
    expect(result).toBe(false);
})
