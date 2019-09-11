import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSectionsComponent } from './administrator/create-sections/create-sections.component';
import { CreateCoursesComponent } from './administrator/create-courses/create-courses.component';


const routes: Routes = [
  {path: 'create-sections', component: CreateSectionsComponent},
  {path: 'create-courses', component: CreateCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
