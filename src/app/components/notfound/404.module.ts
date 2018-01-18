import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './404.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: NotfoundComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [NotfoundComponent], 
    bootstrap: [NotfoundComponent] 
})

export class NotfoundModule {};