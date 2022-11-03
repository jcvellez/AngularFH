/*
function saludar(nombre: string) {
        console.table('Hola ' + nombre); // Hola Logan
    }

    const wolverine = {
        nombre: 'Logan'
    };

    saludar(wolverine.nombre);
*/

//convertir de string a number
//let num = new Number(numero).toString();
(function () {
    let mensaje: string= 'Hola';
    let numero: number = 123;   
    let booleano: boolean = true; //false
    let hoy: Date = new Date();

    let cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman= {
        nombre : 'Peter',
        edad: 30
    }
    
    console.log(mensaje + numero);
    console.log(booleano);
    console.log(hoy);
    

})();