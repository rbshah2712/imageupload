class ImageSnippet {
  constructor(public src: string, public imginput: File) {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadserviceService } from '../uploadservice.service';

@Component({
  selector: 'app-imgupload',
  templateUrl: './imgupload.component.html',
  styleUrls: ['./imgupload.component.css']
})
export class ImguploadComponent implements OnInit {

form1!: FormGroup<any>;
selectedFile: ImageSnippet | undefined;

  constructor(private imageuploadService:UploadserviceService) { }

  ngOnInit(): void {
    this.form1 = new FormGroup({
      imagefile: new FormControl(null, {
          validators: [Validators.required]
      })
  });
  }

  uploadFile(imagefile: any) {
    const imginput:File = imagefile.files[0];
    const reader = new FileReader();

    reader.addEventListener('load',(event:any) => {
        this.selectedFile = new ImageSnippet(event.target.result,imginput);
        this.imageuploadService.PostPhotos(this.selectedFile.imginput).subscribe(
          (res) => {
              console.log(res);
          },
          (err) => {
              console.log(err);
          })
      });

      reader.readAsDataURL(imginput);
  }

  onSavePost(){
    this.imageuploadService.PostPhotos(this.form1.value.image);
  }

}
