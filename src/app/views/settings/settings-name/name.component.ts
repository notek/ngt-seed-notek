import { Component } from '@angular/core';

@Component({
    selector: 'settings-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.style.css']
})
export class SettingsNameComponent {
    public uname: string = '';
    public display: boolean = false;

    public getUname() {
        this.display = false;
    };

    public confirmChangesUname() {
        this.display = true;
    };
}
