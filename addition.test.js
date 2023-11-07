const addition = require('./funciones/addition')

test('12 and 5 should return 17', () => {
    let result = addition(12,5);
    expect(result).toBe(18);
})

test('-10 and 5 should return -5', () => {
    let result = addition(-10,5);
    expect(result).toBe(-5);
})

test('0 and 0 should return 0', () => {
    let result = addition(0,0);
    expect(result).toBe(0);
})

test('-100 and -100 should return -200', () => {
    let result = addition(-100,-100);
    expect(result).toBe(-200);
})

test('1000 and 1 should return 1001', () => {
    let result = addition(1000,1);
    expect(result).toBe(1001);
})

