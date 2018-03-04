import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HistoryBillsComponent } from './history.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: HistoryBillsComponent,
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
        HistoryBillsComponent
    ], 
    bootstrap: [HistoryBillsComponent] 
})

export class HistoryBillsModule {};