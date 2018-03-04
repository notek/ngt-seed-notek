import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'today-bills'
    },
    {
        path: 'today-bills',
        loadChildren: './views/today/today.module#TodayBillsModule'
    },
    {
        path: 'history-bills',
        loadChildren: './views/history/history.module#HistoryBillsModule'
    },
    // does not match any route, redirect to 404.
    {   
        path: '404', 
        loadChildren: './components/notfound/404.module#NotfoundModule' 
    },
    {   
        path: '**', 
        redirectTo: '404'
    }
];