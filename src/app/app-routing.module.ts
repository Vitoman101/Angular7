import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSectionsComponent } from './administrator/create-sections/create-sections.component';
import { CreateCoursesComponent } from './administrator/create-courses/create-courses.component';
import { CreateLoginComponent } from './administrator/create-login/create-login.component';
import { CreateUsersComponent } from './administrator/create-users/create-users.component';
import { CreateAdvertsComponent } from './administrator/create-adverts/create-adverts.component';
import { RegisterComponent } from './unauthenticated/register/register.component';
import { LoginComponent } from './unauthenticated/login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './authenticated/profile/profile.component';

import { AuthGuard } from './auth.guard';
import { InterceptorService } from './services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdvertisementComponent } from './authenticated/advertisement/advertisement.component';


const routes: Routes = [
  { path: 'create-sections', component: CreateSectionsComponent },
  { path: 'create-courses', component: CreateCoursesComponent },
  { path: 'create-logins', component: CreateLoginComponent },
  { path: 'create-users', component: CreateUsersComponent },
  { path: 'create-adverts', component: CreateAdvertsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'advertisement', component: AdvertisementComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
