function addition(a,b){
    return a+b;
}

function capitalStart(cadena){
    if (cadena[0]==cadena[0].toUpperCse()) {
        return true
    } else {
        return false
    }
}

function convertToLowerCase(cadena){
    return cadena.toLowerCase()
}

function isGreaterThanZero(number){
    if (number>0) {
        return true
    } else {
        return false
    }
}

function division(a,b){
    if (b<=0) {
        return "Ingrese un denominador diferente de 0"
    } else {
        return a/b;
    }
}

export {addition, capitalStart, convertToLowerCase, isGreaterThanZero, division}
