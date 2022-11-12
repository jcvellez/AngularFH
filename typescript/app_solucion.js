"use strict";
(() => {
    // Uso de Let y Const
    let nombre = 'Ricardo Tapia';
    let edad = 23;
    const PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    let batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    let superman = {
        nombre: 'Henrry',
        artesMarciales: ['crypto', 'baseball', 'orbita']
    };
    console.log(batman);
    console.log(superman);
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a, b) {
        return (a + b) * 2;
    }
    let funcflecha = (a, b) => { return (a + b) * 2; };
    //console.log(`normal ${resultadoDoble(9, 9)}`);
    //console.log(`flecha ${funcflecha(9,9)}`);
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    let avenger = {
        NOMBRE: 'batman',
        PODER: 'volar',
        ARMA: 'arco'
    };
    function getAvenger(nombre, arma = 'arco', poder) {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + arma;
        }
        return mensaje;
    }
    ;
    //console.log(getAvenger(avenger.NOMBRE,avenger.PODER,avenger.ARMA));
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        calcularArea(base, altura) {
            return base * altura;
        }
    }
    let rec = new rectangulo(0, 0);
    //console.log(`El area es ${rec.calcularArea(7,7)}`);
})();
