import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [HomeComponent], 
    bootstrap: [HomeComponent] 
})

export class HomeModule {};