import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-heroes-find',
  templateUrl: './heroes-find.component.html',
  styleUrls: ['./heroes-find.component.css']
})
export class HeroesFindComponent implements OnInit {
  heroes: any[] = [];
  nombre: string ="";
  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {    

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {  //esto sirve para atrapar el o los parametros
      this.nombre=  params['nombre'];                  //que estan en la ruta.
      this.heroes = this._heroesService.buscarHeroes(params['nombre']); 
      console.log(this.heroes);
    });
    
  }
  arrayVacio(){
    if ((this.heroes).length===0) {
      return true;  
    }else{
      return false;
    }
    
  }
}