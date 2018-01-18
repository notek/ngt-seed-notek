import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SettingsAgeComponent } from './age.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: SettingsAgeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [SettingsAgeComponent], 
    bootstrap: [SettingsAgeComponent] 
})

export class SettingsAgeModule {};