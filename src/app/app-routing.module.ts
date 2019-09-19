import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSectionsComponent } from './administrator/create-sections/create-sections.component';
import { CreateCoursesComponent } from './administrator/create-courses/create-courses.component';
import { CreateLoginComponent } from './administrator/create-login/create-login.component';
import { CreateUsersComponent } from './administrator/create-users/create-users.component';
import {CreateAdvertsComponent} from './administrator/create-adverts/create-adverts.component';


const routes: Routes = [
  {path: 'create-sections', component: CreateSectionsComponent},
  {path: 'create-courses', component: CreateCoursesComponent},
  {path: 'create-logins', component: CreateLoginComponent},
  {path: 'create-users', component: CreateUsersComponent},
  {path: 'create-adverts', component: CreateAdvertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
