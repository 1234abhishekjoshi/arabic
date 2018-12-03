import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

import { FoodComponent } from './food/food.component';
import { SportComponent } from './sport/sport.component';
import { MeditationComponent } from './meditation/meditation.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
	{
        path: '',
        component: LoginComponent
    },
    {
        path: 'food',
        component: FoodComponent
    },
    {
    	path: 'register',
        component: RegisterComponent
    },

    {
    	path: 'main',
        component: MainComponent
    },
    {
    	path: 'sport',
        component: SportComponent
    },
    {
    	path: 'meditation',
        component: MeditationComponent
    },
    {
    	path: 'video',
        component: VideoComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
