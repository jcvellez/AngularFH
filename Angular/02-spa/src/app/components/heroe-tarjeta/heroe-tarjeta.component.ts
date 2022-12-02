import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe: any ={};
  @Input() idx:number =0;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  
  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]); 
    console.log(idx);    
  }
}
