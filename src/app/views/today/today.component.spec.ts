import { TestBed, async } from '@angular/core/testing';

import { TodayBillsComponent } from './today.component';

describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodayBillsComponent
            ]
        }).compileComponents();
    }));

    it('包含一个值为 "today-bills" 的 "title" 属性', async(() => {
        const fixture = TestBed.createComponent(TodayBillsComponent);
        fixture.detectChanges();
        const context = fixture.componentInstance;
        expect(context.title).toEqual('today-bills');
    }));
});
