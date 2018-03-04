import { Component } from '@angular/core';

import { DialogService } from '../../service/dialog.service';

@Component({
    selector: 'today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.style.css']
})
export class TodayBillsComponent {
    constructor(private dialog: DialogService) {};

    addContent() {
        this.dialog.createComponent({
            title: '添加记录',
            content: '<ol class="toc"><li class="toc-item toc-level-2"><a class="toc-link" href="#ViewChild"><span class="toc-number">1.</span> <span class="toc-text">@ViewChild</span></a></li><li class="toc-item toc-level-2"><a class="toc-link" href="#ElementRef"><span class="toc-number">2.</span> <span class="toc-text">ElementRef</span></a></li><li class="toc-item toc-level-2"><a class="toc-link" href="#TemplateRef"><span class="toc-number">3.</span> <span class="toc-text">TemplateRef</span></a></li><li class="toc-item toc-level-2"><a class="toc-link" href="#ViewRef"><span class="toc-number">4.</span> <span class="toc-text">ViewRef</span></a><ol class="toc-child"><li class="toc-item toc-level-3"><a class="toc-link" href="#Creating-embedded-view-（创建嵌入视图）"><span class="toc-number">4.1.</span> <span class="toc-text">Creating embedded view （创建嵌入视图）</span></a></li><li class="toc-item toc-level-3"><a class="toc-link" href="#Creating-host-view（创建宿主视图）"><span class="toc-number">4.2.</span> <span class="toc-text">Creating host view（创建宿主视图）</span></a></li></ol></li><li class="toc-item toc-level-2"><a class="toc-link" href="#ViewContainerRef"><span class="toc-number">5.</span> <span class="toc-text">ViewContainerRef</span></a><ol class="toc-child"><li class="toc-item toc-level-3"><a class="toc-link" href="#Manipulating-views-（操作视图）"><span class="toc-number">5.1.</span> <span class="toc-text">Manipulating views （操作视图）</span></a></li><li class="toc-item toc-level-3"><a class="toc-link" href="#Creating-Views-创建视图"><span class="toc-number">5.2.</span> <span class="toc-text">Creating Views (创建视图)</span></a></li></ol></li><li class="toc-item toc-level-2"><a class="toc-link" href="#ngTemplateOutlet-和-ngComponentOutlet"><span class="toc-number">6.</span> <span class="toc-text">ngTemplateOutlet 和 ngComponentOutlet</span></a><ol class="toc-child"><li class="toc-item toc-level-3"><a class="toc-link" href="#ngTemplateOutlet"><span class="toc-number">6.1.</span> <span class="toc-text">ngTemplateOutlet</span></a></li><li class="toc-item toc-level-3"><a class="toc-link" href="#ngComponentOutlet"><span class="toc-number">6.2.</span> <span class="toc-text">ngComponentOutlet</span></a></li></ol></li><li class="toc-item toc-level-2"><a class="toc-link" href="#总结"><span class="toc-number">7.</span> <span class="toc-text">总结</span></a></li></ol>'
        }, true)
    };
}
