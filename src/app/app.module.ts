import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSectionsComponent } from './administrator/create-sections/create-sections.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCoursesComponent } from './administrator/create-courses/create-courses.component';
import { CreateLoginComponent } from './administrator/create-login/create-login.component';
import { CreateUsersComponent } from './administrator/create-users/create-users.component';
import { CreateAdvertsComponent } from './administrator/create-adverts/create-adverts.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './unauthenticated/register/register.component';
import { LoginComponent } from './unauthenticated/login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './authenticated/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateSectionsComponent,
    CreateCoursesComponent,
    CreateLoginComponent,
    CreateUsersComponent,
    CreateAdvertsComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
