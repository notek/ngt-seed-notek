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
    icon?: number;            // 图标类型 1 成功 2 失败 3 警告 只能在type等于2时使用.
    bgClickHide?: boolean;    // 点击页面其他地方是否允许关闭 默认不关闭.
    isBg?: boolean;           // 是否需要遮照背景 默认需要.
    animType?: number;        // 动画类型 1 跳动(默认) 2 从上到下 3 抖动.
    place?: string;           // 输入框placeholder文本 只能在type等于3时使用.
    preVal?: string;          // 输入框预置内容 只能在type等于3时使用.
    isTextarea?: boolean;      // 当type为3时 输入框是否呈现为textarea 默认呈现input.
};

export interface DialogAlertConfig {
    title?: string;           // 标题.
    content?: string;         // 内容 不支持html.
    time?: number;            // 定时关闭 ms.
    timeFn?: any;             // 定时关闭回调.
    definiteBtnText?: string; // 确定按钮文本 默认「确定」.
    definiteFn?: any;                 // 确定按钮回调.
    icon?: number;            // 图标类型 1 成功 2 失败 3 警告 只能在type等于2时使用.
    bgClickHide?: boolean;    // 点击页面其他地方是否允许关闭 默认不关闭.
    isBg?: boolean;           // 是否需要遮照背景 默认需要.
};

export interface DialogPromptConfig {
    title?: string;           // 标题.
    definiteFn?: any;         // 确定按钮回调.
    cancelFn?: any;           // 取消按钮回调.
    definiteBtnText?: string; // 确定按钮文本 默认「确定」.
    cancelBtnText?: string;   // 取消按钮文本 默认「取消」.
    bgClickHide?: boolean;    // 点击页面其他地方是否允许关闭 默认不关闭.
    isBg?: boolean;           // 是否需要遮照背景 默认需要.
    place?: string;           // 输入框placeholder文本 只能在type等于3时使用.
    preVal?: string;          // 输入框预置内容 只能在type等于3时使用.
    isTextarea?: boolean;      // 当type为3时 输入框是否呈现为textarea 默认呈现input.
};