
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

import { Component, OnInit } from '@angular/core';
import { UploadserviceService } from '../uploadservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  form!:FormGroup;
  imagePreview:string | undefined;
  selectedFile: ImageSnippet | undefined;
  progress: any;
  
  constructor(private imageuploadService:UploadserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      imageInput: new FormControl(null, {
          validators: [Validators.required]
      })
  });
  }

  processFile(imageInput: any) {
   
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageuploadService.PostPhotos(this.selectedFile.file).subscribe(
        (res) => {
            console.log(res);
        },
        (err) => {
            console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

  onSavePost(){
    this.imageuploadService.PostPhotos(this.form.value.image);
  }

}
