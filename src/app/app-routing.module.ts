import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CamerasetComponent } from './cameraset/cameraset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'camera', component: CamerasetComponent },
  { path: 'changepw', component: ChangePasswordComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
