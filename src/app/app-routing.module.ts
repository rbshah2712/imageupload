import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  {path:'image',component:ImageDisplayComponent},
  {path:'add',component:ImageUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
