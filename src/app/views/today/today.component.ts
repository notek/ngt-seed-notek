import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { DialogService } from '../../service/dialog.service';

@Component({
    selector: 'today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.style.css']
})
export class TodayBillsComponent {
    constructor(private router: Router,
                private dialog: DialogService) {};

    private recording: string;

//     confirmDialog(): void {
//         this.dialog.create({
//             animType: 3,
//             title: '删除确认',
//             content: '确定要删除这条记录吗？',
//             definiteFn: () => {
//                 console.log('确认');
//             },
//             cancelFn: () => {
//                 console.log('取消');
//             }
//         });
//     };

//     alertDialog(): void {
//         this.dialog.create({
//             icon: 2,
//             type: 2,
//             content: '对不起，操作失败！'
//         });
//     };

//     alertTimeendDialog(): void {
//         this.dialog.create({
//             icon: 1,
//             type: 2,
//             time: 3000,
//             animType: 2,
//             title: '3秒后消失',
//             content: '恭喜，操作成功！'
//         });
//     };

    private addNewNotes(): void {
        this.dialog.create({
            type: 3,
            animType: 2,
            title: '添加记录',
            place: '请输入新记录',
            definiteFn: val => {
                this.recording = val;
            }
        });
    };

    private seeNotes(): void {
        this.dialog.create({
            width: '65%',
            title: '内容预览',
            content: `
            <div class="notek-md-12">
                <table class="notek-table highlight">
                    <colgroup>
                        <col width="100">
                        <col width="100">
                        <col width="100">
                        <col width="100">
                        <col width="100">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>苹果</th>
                            <th>鸭梨</th>
                            <th>香蕉</th>
                            <th>草莓</th>
                            <th>火龙果</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6.00元/斤</td>
                            <td>9.00元/斤</td>
                            <td>3.98元/斤</td>
                            <td>18.00元/斤</td>
                            <td>12.00元/个</td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
        });
    };

//     preValDialog(): void {
//         this.dialog.create({
//             type: 3,
//             preVal: '就是我了',
//             place: '请一定输入哈',
//             title: '我有预置值哦',
//             definiteFn: val => {
//                 console.log(val);
//             }
//         });
//     };

//     anim1Dialog(): void {
//         this.dialog.create({
//             type: 2,
//             animType: 1,
//             content: '动画1'
//         });
//     };

//     anim2Dialog(): void {
//         this.dialog.create({
//             type: 2,
//             animType: 2,
//             content: '动画2'
//         });
//     };

//     anim3Dialog(): void {
//         this.dialog.create({
//             type: 2,
//             animType: 3,
//             content: '动画3'
//         });
//     };

}
