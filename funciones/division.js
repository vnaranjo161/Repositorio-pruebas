function division(a,b){
    if (b<=0) {
        return "Ingrese un denominador diferente de 0"
    } else {
        return a/b;
    }
}
module.exports = division
