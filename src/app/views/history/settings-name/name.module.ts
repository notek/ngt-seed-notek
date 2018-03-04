import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SettingsNameComponent } from './name.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: SettingsNameComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [SettingsNameComponent], 
    bootstrap: [SettingsNameComponent] 
})

export class SettingsNameModule {};