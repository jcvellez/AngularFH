(function () {
    let retirarDinero = (montoRetirar: number):Promise<string>=>{
        let saldoActual: number = 1000;
        return new Promise ((resolve, reject) => {
            if (montoRetirar>saldoActual) {
                reject('No tienes suficiente dinero');
            } else {
                saldoActual-= montoRetirar;
                resolve(`Saldo: ${saldoActual}`);
            }
        });
    };
    
    retirarDinero(1800).
    then(res=>console.log(res))
    .catch(err=>console.log(err));
    
    })();