import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImguploadComponent } from './imgupload/imgupload.component';

const routes: Routes = [
  {path:'image',component:ImageDisplayComponent},
  {path:'add',component:ImageUploadComponent},
  {path:'upload',component:ImguploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
