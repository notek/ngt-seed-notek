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

    private datas: Array<any> = [
        {
            consType: 1,
            patientName: '李星辰',
            departName: '内科',
            consMec: '下级医院',
            consDoctor: '周董可',
            applyDate: '2018-3-12'
        },
        {
            consType: 0,
            patientName: '不认识',
            departName: '骨科',
            consMec: '成都军区总医院',
            consDoctor: '华佗',
            applyDate: '2018-3-16'
        }
    ];

    private addNewNotes(): void {
        this.dialog.prompt('输入新纪录', {
            definiteFn: val => {
                if(val) {
                    this.dialog.alert('操作提示', {
                        icon: 1,
                        time: 2000,
                        content: `输入成功，您输入了${val}`
                    });
                }
            }
        });
    };

    private seeNotes(): void {
        this.dialog.create({
            title: '内容预览',
            content: '呵呵呵呵呵，你想看什么？'
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
