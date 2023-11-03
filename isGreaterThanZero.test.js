const isGreaterThanZero = require('./funciones/isGreaterThanZero')

test('12 hould return true', () => {
    let result = isGreaterThanZero(12);
    expect(result).toBe(true);
})

test('-10 should return false', () => {
    let result = isGreaterThanZero(-10);
    expect(result).toBe(false);
})

test('0 should return false', () => {
    let result = isGreaterThanZero(0);
    expect(result).toBe(false);
})

test('-100 should return false', () => {
    let result = isGreaterThanZero(-100);
    expect(result).toBe(false);
})

test('0.1  should return true', () => {
    let result = isGreaterThanZero(0.1);
    expect(result).toBe(true);
})
