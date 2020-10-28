//exportando las funciones de otra manera usando
//module.exports = Math;

const Math = {}; //esto es un objeto

function add(x1,x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function divide(x1,x2){
    if (x2==0){
        console.log("no se puede dividir por cero")
    }else{
        return x1/x2;
    }
}
//exports.add = add;
//exporta una propiedad de un objeto

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//module puede exportar cosas como funciones, variables

module.exports = Math;