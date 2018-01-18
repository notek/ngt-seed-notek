import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
    },
    {
        path: 'settings',
        loadChildren: './views/settings/settings.module#SettingsModule'
    },
    // does not match any route, redirect to 404.
    {   
        path: '**', 
        loadChildren: './components/notfound/404.module#NotfoundModule' 
    }
];