import {    
        Injector, 
        Injectable, 
        ComponentRef, 
        ApplicationRef,
        EmbeddedViewRef, 
        ComponentFactory, 
        ComponentFactoryResolver 
} from '@angular/core';  

import { DialogConfig } from '../interface/dialog.if';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {
    private componentRef: ComponentRef<DialogComponent>;

    constructor(private injector: Injector,
                private apRef: ApplicationRef,
                private resolver: ComponentFactoryResolver) {};

    public create(options?: DialogConfig, isInsert?: boolean): void {
        const FACTORY = this.resolver.resolveComponentFactory(DialogComponent);
        this.componentRef = FACTORY.create(this.injector);
        const DIALOG_NODE = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        for(let op in options) {
            this.componentRef.instance[op] = options[op];
        }

        if(!isInsert) {
            document.body.appendChild(DIALOG_NODE);
        }else {
            if(Array.from(document.body.children).pop().tagName === 'NOTEK-DIALOG') {
                document.body.removeChild(Array.from(document.body.children).pop());
            }
            document.body.appendChild(DIALOG_NODE);
        }

        // add angular dirty check.
        this.apRef.attachView(this.componentRef.hostView);
    };
};