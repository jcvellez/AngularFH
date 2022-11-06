(function () {
    interface Xmen {
        nombre: string,
        edad: number,
        poder?: boolean
    }

    let enviarMision = (xmen: Xmen) => {
        console.log(`Enviamos a ${xmen.nombre} a la mision`);
    };
    let regresoAlCuartel = (spy: Xmen) => {
        console.log(`Regresa ${spy.nombre} a la casa, tiene ${spy.edad} y su poder es ${spy.poder}`);
    };

    let wolverine: Xmen = {
        nombre: 'Logan',
        edad: 63
    };

    let spiderman: Xmen={
        nombre:'Peter',
        edad:33,
        poder: true
    }

    enviarMision(wolverine);
    regresoAlCuartel(spiderman);

})();