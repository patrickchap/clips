import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { UploadComponent } from './components/upload/upload.component';
import { MyClipsComponent } from './components/my-clips/my-clips.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DefaultComponent},
  { path: 'upload', component: UploadComponent },
  { path: 'my-clips', component: MyClipsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
