"use strict";
(function () {
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
            // this.nombre = nombre;
            // this.equipo = equipo;
            // this.nombreReal = nombreReal;
            // this.peleasGanadas = peleasGanadas;
            // this.puedePelear = puedePelear;
        }
    }
    let antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
