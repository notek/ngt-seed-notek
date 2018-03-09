import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DialogService } from '../../service/dialog.service';
import { DialogComponent } from './dialog.component';
import { DialogConfig } from '../../interface/dialog.if';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        DialogComponent
    ],
    entryComponents: [DialogComponent]
})

export class DialogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DialogModule,
            providers: [DialogService]
        }
    };
};
