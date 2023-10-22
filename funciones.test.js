import { addition, capitalStart, division, convertToLowerCase, isGreaterThanZero} from "./funciones";

/**
 * Test de la funcion addition
 */

test('12 and 5 should return 17', () => {
    let result = addition(12,5);
    expect(result).toBe(17);
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

/**
 * Test de la funcion capitalStart
 */

test('Hello should return true', () => {
    let result = capitalStart("Hello");
    expect(result).toBe(true);
})

test('hEllO should return false', () => {
    let result = capitalStart("hEllO");
    expect(result).toBe(false);
})

test('0ello should return false', () => {
    let result = capitalStart("0ello");
    expect(result).toBe(false);
})

test(' Hello should return true'), ()=>{
    let result = capitalStart(' Hello')
    expect(result).toBe(true)
}

test(' Hello should return true'), ()=>{
    let result = capitalStart(' Hello')
    expect(result).toBe(true)
}
