import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: SettingsComponent,
        children: [
            {
                path: 'name',
                loadChildren: './settings-name/name.module#SettingsNameModule'
            },
            {
                path: 'age',
                loadChildren: './settings-age/age.module#SettingsAgeModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        SettingsComponent
    ], 
    bootstrap: [SettingsComponent] 
})

export class SettingsModule {};