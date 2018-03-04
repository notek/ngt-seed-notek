import { Component } from '@angular/core';

@Component({
  selector: 'notek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.style.css']
})

export class HeaderComponent {
    public MenuMaps: Array<any> = [
        {
            name: '今日账单',
            url: '/today-bills'
        },
        {
            name: '历史账单',
            url: '/history-bills'
        }
    ];
};
