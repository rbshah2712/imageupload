import { Component, OnInit } from '@angular/core';
import {UploadserviceService} from '../uploadservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  photos: any | undefined;
  constructor(private imageuploadService:UploadserviceService) { }

  ngOnInit(){
    this.getphotos();

  }

  getphotos(){
      this.imageuploadService.GetPhotos().subscribe(result => {
       this.photos = result;
      });
  }

}
