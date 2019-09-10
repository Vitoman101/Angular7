import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSectionsComponent } from './administrator/create-sections/create-sections.component';


const routes: Routes = [
  {path: 'create-sections', component: CreateSectionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
