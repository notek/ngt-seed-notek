import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [ RouterTestingModule ]
          }).compileComponents();
    }));

    it('必须是两个菜单', async(() => {
        const header = TestBed.createComponent(HeaderComponent);

        const headerIns = header.componentInstance;
        const menus = headerIns.MenuMaps;

        // 必须包含两个菜单.
        expect(menus.length).toEqual(2);

        // 第一个是 首页.
        expect(menus[0].name).toEqual('今日账单');
        expect(menus[0].url).toEqual('/today-bills');

        // 第二个是 设置.
        expect(menus[1].name).toEqual('历史账单');
        expect(menus[1].url).toEqual('/history-bills');
    }));
});
