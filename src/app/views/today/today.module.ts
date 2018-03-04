import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TodayBillsComponent } from './today.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: TodayBillsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [TodayBillsComponent], 
    bootstrap: [TodayBillsComponent] 
})

export class TodayBillsModule {};