(function () {
    // let mifunc= (a: string)=>{
    //     return a;
    // }
    // let sumaN= (num1: number, num2: number)=> {return num1+num2;};
    // //let resultado= mifunc('nuevo retorno con func de flecha');
    // //console.log(resultado);
    // console.log(`Suma es ${sumaN(4,5)}`);
    let param: string = 'superhero';
    let miFunc = {
        nombre: 'Juank',
        smash() {
            setTimeout((a: string) => {
                a= param;
                console.log(`${this.nombre} smash!!! tipo ${a}`);
            }, 1000);
        },
        edad:30
    };
    miFunc.smash();
    console.log(miFunc.edad);
    
})();