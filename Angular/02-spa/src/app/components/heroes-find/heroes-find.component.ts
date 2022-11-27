import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes-find',
  templateUrl: './heroes-find.component.html',
  styleUrls: ['./heroes-find.component.css']
})
export class HeroesFindComponent implements OnInit {
  heroes : Heroe[] = [];
  heroe: any = {};
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _router:Router) { 
                this._activatedRoute.params.subscribe(params => {
                  this.heroe = _heroesService.getHeroe(params['nombre'])
                  console.log(this.heroe);
            
                });
              }

  ngOnInit(): void {
    this.heroes= this._heroesService.buscarHeroes(this.heroe);
  }
  
  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);    
  }
}
