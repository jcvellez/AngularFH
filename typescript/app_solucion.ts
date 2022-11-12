(() => {

    // Uso de Let y Const
    let nombre: string = 'Ricardo Tapia';
    let edad: number = 23;

    const PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    //console.log(`Eres ${PERSONAJE.nombre} y tienes ${PERSONAJE.edad} anios`);



    // Cree una interfaz que sirva para validar el siguiente objeto
    interface superheroe {
        nombre: string,
        artesMarciales: string[]
    }

    let batman: superheroe = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    }
    let superman: superheroe = {
        nombre: 'Henrry',
        artesMarciales: ['crypto', 'baseball', 'orbita']
    }
    console.log(batman);
    console.log(superman);




    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a: number, b: number): number {
        return (a + b) * 2;
    }
    let funcflecha = (a: number, b: number): number => { return (a + b) * 2 };

    //console.log(`normal ${resultadoDoble(9, 9)}`);
    //console.log(`flecha ${funcflecha(9,9)}`);




    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    let avenger={
        NOMBRE:'batman',
        PODER:'volar',
        ARMA:'arco'
    }

    function getAvenger(nombre:string, arma:string='arco', poder?:string):string {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        } else {
            mensaje = nombre + ' tiene un ' + arma
        }
        return mensaje;
    };

    //console.log(getAvenger(avenger.NOMBRE,avenger.PODER,avenger.ARMA));
     
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

class rectangulo {

    constructor(public base:number,public altura:number) { }

    calcularArea(base: number,altura: number):number{
         return base * altura; 
       }
}

let rec= new rectangulo(0,0); 
//console.log(`El area es ${rec.calcularArea(7,7)}`);

})();