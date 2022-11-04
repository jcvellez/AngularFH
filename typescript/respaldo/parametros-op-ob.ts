(function () {
    function saludar(nombre: string,
        edad: number = 35,
        apellido?: string,
        profesion?: string,) {
        if (!apellido) {
            console.log(`Hola soy ${nombre} ${apellido} mi edad ${edad}`);
        }else if (profesion) {
            console.log(`Hola soy ${nombre} mi edad ${edad} soy ${profesion}`);
        } else {
            console.log(`Hola soy ${nombre} mi edad ${edad}`);
        }
    }
    
    saludar('Juank', 36,'Velez');
})();