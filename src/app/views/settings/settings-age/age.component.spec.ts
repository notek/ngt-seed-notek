import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SettingsAgeComponent } from './age.component';

describe('SettingsComponent --> SettingsAgeComponent', () => {
    let coms: SettingsAgeComponent;
    let realComs: ComponentFixture<SettingsAgeComponent>;
    let debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SettingsAgeComponent
            ],
            imports: [ FormsModule ]
        });

        realComs = TestBed.createComponent(SettingsAgeComponent);
        coms = realComs.componentInstance;
        debugEl = realComs.debugElement;
    });

    describe('原始属性值测试', () => {
        it('检查原始属性值: age = 10', () => {
            expect(coms.age).toBe(10);

            realComs.detectChanges();
        });
    });

    describe('年龄设置范围选项测试', () => {
        it('共有6个范围', () => {
            let agemaps = coms.ageSetMaps;
            expect(agemaps.length).toBe(6);

            realComs.detectChanges();
        });

        it('范围从「10」到「35」', () => {
            let agemaps = coms.ageSetMaps;
            let testmaps = [10, 15, 20, 25, 30 ,35];
            agemaps.forEach((age, index) => {
                expect(age).toBe(testmaps[index]);
            });

            realComs.detectChanges();
        });
    });
});
