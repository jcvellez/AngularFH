import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify listo!!!');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB1JPswzkN7DB6urJn-o4lRM5CIsoMUvK1AcEuYua-zwBlNQB90YFl-NgqlAFGuwkCkRti-pvsGEPRmkZrK3df2A6EsII5eKADaKfK_Ws4xIl5_p0I'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
