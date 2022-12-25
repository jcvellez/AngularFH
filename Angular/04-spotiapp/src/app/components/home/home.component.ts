import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones :any[] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe( (data:any)=>{      
      this.nuevasCanciones= data.albums.items;    
      console.log(this.nuevasCanciones);  
    });
  }
  ngOnInit(): void {
  }
}