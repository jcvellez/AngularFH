(() => {
    let sumar = (a: number, b: number): number => a + b;

    let obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (false) {
                resolve('estamos con resolve');
            } else {
                setTimeout(() => reject('Estamos por reject') , 2000);
            }

        })
    }

    obtenerSalario().then((a) => console.log(a)
    ).catch((e)=>console.log(e)
    );


})();