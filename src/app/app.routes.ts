import { Routes } from '@angular/router';
import { HomeComponent } from './components/router/home/home.component';
import { AboutusComponent } from './components/router/aboutus/aboutus.component';
import { ContactusComponent } from './components/router/contactus/contactus.component';
import { InterpolationComponent } from './components/databinding/interpolation/interpolation.component';
import { EventhandlingComponent } from './components/databinding/eventhandling/eventhandling.component';


export const routes : Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',component: HomeComponent
    },
    {
       path: 'aboutus',component: AboutusComponent 
    },
     {
       path: 'contactus',component: ContactusComponent 
    },
    {
       path: 'interpolation',component: InterpolationComponent 
    },
     {
       path: 'eventhandling',component: EventhandlingComponent 
    }
];
