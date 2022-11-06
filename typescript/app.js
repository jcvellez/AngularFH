"use strict";
(function () {
    let enviarMision = (xmen) => {
        console.log(`Enviamos a ${xmen.nombre} a la mision`);
    };
    let regresoAlCuartel = (spy) => {
        console.log(`Regresa ${spy.nombre} a la casa, tiene ${spy.edad} y su poder es ${spy.poder}`);
    };
    let wolverine = {
        nombre: 'Logan',
        edad: 63
    };
    let spiderman = {
        nombre: 'Peter',
        edad: 33,
        poder: true
    };
    enviarMision(wolverine);
    regresoAlCuartel(spiderman);
})();
