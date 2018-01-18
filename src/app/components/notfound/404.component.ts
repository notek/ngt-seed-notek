import { Component } from '@angular/core';

@Component({
    selector: 'notek',
    template: `
        <div class="notfound">
            <h2>404 not found.</h2>
            <a routerLink="/home">返回首页</a>
        </div>
        `,
    styles: ['.notfound {text-align: center;}']
})

export class NotfoundComponent {};
