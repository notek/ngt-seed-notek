import { Component } from '@angular/core';

import { DialogService } from '../../service/dialog.service';

@Component({
    selector: 'today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.style.css']
})
export class TodayBillsComponent {
    constructor(private dialog: DialogService) {};

    private lists: Array<string> = ['买烟：30元', '加油：350元', '逛超市：448元'];

    addContent(): void {
        this.dialog.create({
            type: 3,
            title: '添加记录',
            definiteFn: enter => {
                this.lists.push(enter);

                this.dialog.create({
                    icon: 1,
                    type: 2,
                    time: 3000,
                    isBtns: false,
                    title: '添加成功',
                    content: '成功添加一条记录！'
                });
            }
        });
    };

    deleteContent(): void {
        this.dialog.create({
            title: '删除提示',
            content: '是否删除该记录？',
            definiteFn: () => {
                this.lists.splice(0, 1);

                this.dialog.create({
                    icon: 1,
                    type: 2,
                    time: 3000,
                    isBtns: false,
                    title: '删除成功',
                    content: '成功删除一条记录！'
                });
            }
        });
    };
}
