import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MiComponente} from './components/mi-componente/mi-component.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CourseService } from './course.service';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';



const appRoutes:Routes = [
   { path: 'list', component: ListTaskComponent},
   { path: 'create', component: CreateTaskComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
