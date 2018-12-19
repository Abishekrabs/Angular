import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import {RouterModule, Routes} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Retrievecourse', component: StudentComponent },
  { path: 'Addcourse', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    RegistrationComponent,
    LoginComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
