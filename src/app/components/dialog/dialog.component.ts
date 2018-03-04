import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { dialog } from '../../app.animations';

@Component({
    selector: 'notek-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.style.css'],
    animations: [dialog]
})
export class DialogComponent {
    @Input() width: number;
    @Input() contentHeight: number;
    @Input() title: string = '提示';
    @Input() content: any = '提示内容';
    private animState: boolean = true;

    constructor(private sanitizer: DomSanitizer) {
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.content);   
    }

    close(): void {
        this.animState = false;
    };

    animEnd(evt: any): void {
        if(evt.toState === 'void' && !this.animState) {
            setTimeout(() => {
                if(Array.from(document.body.children).pop().tagName === 'NOTEK-DIALOG') {
                    document.body.removeChild(Array.from(document.body.children).pop());
                }
            }, 100);            
        }
    };
}
