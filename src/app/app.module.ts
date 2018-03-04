import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';
import { DialogModule } from './components/dialog/dialog.module';

// import { DialogService } from './service/dialog.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DialogModule.forRoot(),
        RouterModule.forRoot(ROUTES),
    ],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HeaderComponent,
    ]
})

export class AppModule {};
