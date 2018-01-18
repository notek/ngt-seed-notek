import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ]
        }).compileComponents();
    }));

    it('包含一个值为 "app home" 的 "title" 属性', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const context = fixture.componentInstance;
        expect(context.title).toEqual('app home');
    }));
});
