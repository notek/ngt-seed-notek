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
    // 不匹配任何路由,重定向到首页
    {   
        path: '**', 
        loadChildren: './components/notfound/404.module#NotfoundModule' 
    }
];