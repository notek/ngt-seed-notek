import { Component } from '@angular/core';

import { User } from '../../../app.interface';

@Component({
    selector: 'settings-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.style.css']
})

export class SettingsNameComponent {
    private user: User;
    private uname: string = '';
    private display: boolean = false;

    ngOnInit() {
        this.t({
            age: 1,
            name: 'notek',
            gender: 'male'
        });

        console.log(this.user);
    };

    private getUname() {
        this.display = false;
    };

    private confirmChangesUname() {
        this.display = true;
    };

    private t(u: User) {
        this.user = u;
    };
}
