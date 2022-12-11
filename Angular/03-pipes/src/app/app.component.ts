import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "JuanCarlos";
  nombre2: string = 'jUAn cArLoS vElEz';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = '';
  video: string = 'https://www.youtube.com/embed/mTErlB_wT6A';
  activar: boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data..');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 21,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  Espaniol(lan: string) {
    this.idioma = lan;
  }
  Ingles(lan: string) {
    this.idioma = lan;
  }
  Frnaces(lan: string) {
    this.idioma = lan;
  }

  cambiaEstado() {
    if (this.activar === true) {
      this.activar = false;
    } else {
      this.activar = true;
    }
  }
}

