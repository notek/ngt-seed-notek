import { Component } from '@angular/core';

@Component({
    selector: 'settings-age',
    templateUrl: './age.component.html',
    styleUrls: ['./age.style.css']
})
export class SettingsAgeComponent {
    public age: number = 10;
    public ageSetMaps: Array<number> = [10, 15, 20, 25, 30, 35];

    public setAge(evt: any) {
        this.age = evt.target.value;
    };
}
