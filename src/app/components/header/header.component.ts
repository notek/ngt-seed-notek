import { Component } from '@angular/core';

@Component({
  selector: 'notek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.style.css']
})

export class HeaderComponent {
    public MenuMaps: Array<any> = [
        {
            name: '首页',
            url: '/home'
        },
        {
            name: '设置',
            url: '/settings'
        }
    ];
};
