(function () {
    console.log('inicio');

    let prom1= new Promise((resolve, reject)=>{
        if (false) {
            setTimeout(() => {
                resolve('Se termino el timeout');
            }, 1000);    
        } else {
            setTimeout(() => {
                reject('elegiste false');
            }, 1000);
        }
        
    });

    prom1.then(
        mensaje=>console.log(mensaje)
    ).catch(
        mensaje=>console.log(mensaje)
    );
    console.log('Fin');

})();