import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {

  constructor(private http: HttpClient) { }

GetPhotos(){
  return this.http.get('https://api.thecatapi.com/v1/images/search?limit=10');
}



}

