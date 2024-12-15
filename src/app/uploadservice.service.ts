import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {

  constructor(private http: HttpClient) { }

GetPhotos(){
  return this.http.get('https://api.thecatapi.com/v1/images/search?limit=10');
}

PostPhotos(image: File){
  let api_key = "live_nJNoeePp19x6lK689uAOZj1EgLsYwrv8cBCyhFaDbhmIfd1aD6g97UiPg7Ashe0V";
  const data = new FormData();
  data.append("file", image);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
     'x-api-key': api_key
    })
  };
  return this.http.post('https://api.thecatapi.com/v1/images/upload',data,httpOptions);
}



}

