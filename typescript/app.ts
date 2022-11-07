(function () {
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(public nombre: string,
            public equipo?: string,
            public nombreReal?: string,
            public puedePelear: boolean = true,
            public peleasGanadas: number = 0) {
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