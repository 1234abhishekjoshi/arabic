import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FoodComponent } from './food/food.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { SportComponent } from './sport/sport.component';
import { MeditationComponent } from './meditation/meditation.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FoodComponent,
    RegisterComponent,
    MainComponent,
    SportComponent,
    MeditationComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
