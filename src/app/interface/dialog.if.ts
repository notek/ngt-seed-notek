export interface DialogConfig {
    title?: string;           // 标题.
    content?: string;         // 内容 支持html.
    width?: string;           // 宽度.
    contentHeight?: string;   // 内容固定高度.
    contentMaxHeight?: string;   // 内容最大高度.
    definiteFn?: any;         // 确定按钮回调.
    cancelFn?: any;           // 取消按钮回调.
    time?: number;            // 定时关闭 ms.
    timeFn?: any;             // 定时关闭回调.
    definiteBtnText?: string; // 确定按钮文本 默认「确定」.
    cancelBtnText?: string;   // 取消按钮文本 默认「取消」.
    isBtns?: boolean;         // 是否显示按钮 默认显示.  
    isTitle?: boolean;        // 是否显示标题 默认显示.  
    type?: number;            // 弹出层类型 1 通用 2 提示 3 输入交互.
    icon?: number;            // 图标类型 1 成功 2 失败 3 警告 只能在type不等于3时使用.
};