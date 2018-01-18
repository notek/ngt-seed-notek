import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { routeAnimation } from './app.animations';

@Component({
    selector: 'notek',
    template: `
        <notek-header></notek-header>

        <main [@routeSwitchAnimation]="routerStateCode">
            <router-outlet></router-outlet>
        </main>
    `,
    animations: [routeAnimation]
})

export class AppComponent {
    private routerState: boolean = true;
    private routerStateCode: string = 'active';

    constructor(private router: Router){
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // each route jump changes state.
                this.routerState = !this.routerState;
                this.routerStateCode = this.routerState ? 'active' : 'inactive';
            }
        });
    }
};
