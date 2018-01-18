import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SettingsNameComponent } from './name.component';

describe('SettingsComponent --> SettingsNameComponent', () => {
    let coms: SettingsNameComponent;
    let realComs: ComponentFixture<SettingsNameComponent>;
    let debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SettingsNameComponent
            ],
            imports: [ FormsModule ]
        });

        realComs = TestBed.createComponent(SettingsNameComponent);
        coms = realComs.componentInstance;
        debugEl = realComs.debugElement;
    });

    describe('原始属性值测试', () => {
        it('检查原始属性值: display = false/uname = \'\'', () => {
            expect(coms.display).toBe(false);
            expect(coms.uname).toBe('');

            realComs.detectChanges();
        });
    });

    describe('「display」状态测试', () => {
        it('设置「this.display」为「false」', () => {
            coms.getUname();
            expect(coms.display).toBe(false);

            realComs.detectChanges();
        });

        it('设置「this.display」为「true」', () => {
            coms.confirmChangesUname();
            expect(coms.display).toBe(true);

            realComs.detectChanges();
        });
    });
});
