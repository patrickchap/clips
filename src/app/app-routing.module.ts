import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { UploadComponent } from './components/upload/upload.component';
import { MyClipsComponent } from './components/my-clips/my-clips.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DefaultComponent},
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'my-clips', component: MyClipsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
