const path = require('path');

module.exports = Object.freeze({
    SIZE: {
        HEIGHT:768,
        WIDTH: 1024,
        MENU_WIDTH: 50
    },
    CUSTOMIZATION: {
        // 默认窗口大小
        DEFAULT_WINDOW_SIZE: {
            width: 1024,
            height: 768,
        },

        //是否开启边缘吸附功能
        IS_EDGE_SNAP_ENABLED: 1,

    },
    ERROR_MESSAGES: {
        ERROR: 'connection failed'
    }
    ,
    PATH: {
        APP_PATH: path.join(__dirname, '..'),
    },
    PREVIEW_IMG: "/gui/static/images/logo/preview_default.png",
    SETTING:[
        {
            tag:  "设置",
            name: "setting",
            url: "gui/dist/index.html/",
            // url: "http://localhost:5173/",
            img: "/gui/static/images/logo/setting.png",
        },
    ],
    SITES:[
        {
            tag: "腾讯元宝",
            name: "yuanbao",
            url: "https://yuanbao.tencent.com",
            img: "/gui/static/images/logo/yuanbao.png",
            isOpen:true,
            order:1,
        },
        {
            tag: "深度求索",
            name: "deepseek",
            url: "https://chat.deepseek.com/",
            img: "/gui/static/images/logo/deepseek.png",
            isOpen:true,
            order: 2,
        },
        {
            tag:  "字节豆包",
            name: "doubao",
            url: "https://www.doubao.com",
            img: "/gui/static/images/logo/doubao.png",
            isOpen:true,
            order: 3,
        },
        {
            tag:  "纳米搜索",
            name: "nami",
            url: "https://bot.n.cn/",
            img: "/gui/static/images/logo/nami.png",
            isOpen:true,
            order: 4,
        },
        {
            tag:  "月之暗面",
            name: "kimi",
            url: "https://kimi.moonshot.cn",
            img: "/gui/static/images/logo/kimi.png",
            isOpen:true,
            order: 5,
        },
        {
            tag:"通义千问",
            name: "alibaba",
            url: "https://tongyi.aliyun.com/qianwen",
            img: "/gui/static/images/logo/tongyi.png",
            isOpen:true,
            order: 6,
        },
        {
            tag: "文心一言",
            name: "baidu",
            url: "https://yiyan.baidu.com",
            img: "/gui/static/images/logo/baidu.png",
            isOpen:true,
            order: 7,
        },
        {
            tag: "阿里千问",
            name: "qianwen",
            url: "https://chat.qwen.ai",
            img: "/gui/static/images/logo/qianwen.png",
            isOpen:false,
            order: 8,
        },
        {
            tag:"智谱清言",
            name: "qingyan",
            url: "https://chatglm.cn",
            img: "/gui/static/images/logo/qingyan.png",
            isOpen:false,
            order: 9,
        },
        {
            tag:  "ChatGPT",
            name: "chatgpt",
            url: "https://chatgpt.com",
            img: "/gui/static/images/logo/chatgpt.png",
            isOpen:false,
            order: 10,
        },
        {
            tag:"Gemini",
            name: "gemini",
            url: "https://gemini.google.com",
            img: "/gui/static/images/logo/gemini.png",
            isOpen:false,
            order: 11,
        },
        {
            tag: "Midjourney",
            name: "midjourney",
            url: "https://www.midjourney.com",
            img: "/gui/static/images/logo/midjourney.png",
            isOpen:false,
            order: 12,
        }
    ],
    SHORTCUT:[
        {
            tag:  "退出软件",
            name: "softwareExit",
            cmd: "CommandOrControl+Q",
            isOpen:true,
        },
        {
            tag: "隐藏/显示 软件窗口",
            name: "softwareWindowVisibilityController",
            cmd: "CommandOrControl+H",
            isOpen:true,
        },
        {
            tag: "打开软件设置",
            name: "softwareSetting",
            cmd: "CommandOrControl+S",
            isOpen:true,
        },
        {
            tag: "选择下一站点",
            name: "softwareSiteSwitch",
            cmd: "CommandOrControl+Tab",
            isOpen:true,
        },
        {
            tag: "取消/设置 窗口置顶",
            name: "windowTopmostToggle",
            cmd: "CommandOrControl+T",
            isOpen:true,
        },
        {
            tag: "恢复默认窗口",
            name: "restoreDefaultWindow",
            cmd: "CommandOrControl+O",
            isOpen:true,
        },
        {
            tag: "刷新当前页面",
            name: "currentPageRefresher",
            cmd: "CommandOrControl+R",
            isOpen:true,
        },
        {
            tag: "最小化窗口",
            name: "windowMinimize",
            cmd: "CommandOrControl+[",
            isOpen:true,
        },
        {
            tag: "最大化窗口",
            name: "windowMaximizer",
            cmd: "CommandOrControl+]",
            isOpen:true,
        },
        {
            tag: "屏幕左边小窗",
            name: "leftScreenMiniWindow",
            cmd: "CommandOrControl+Left",
            isOpen:true,
        },
        {
            tag: "屏幕右边小窗",
            name: "rightScreenMiniWindow",
            cmd: "CommandOrControl+Right",
            isOpen:true,
        }
    ]
});