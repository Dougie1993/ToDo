import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './layout/task-view/task-view.component';
import { NewListComponent } from './layout/new-list/new-list.component';
import { NewTaskComponent } from './layout/new-task/new-task.component';
import { LoginComponent } from './layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
