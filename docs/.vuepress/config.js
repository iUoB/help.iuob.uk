module.exports = {
    dest: 'public',
    lang: 'zh-CN',
    title: '帮助中心 - iUoB',
    description: '为你通往伯明翰大学的路上亮起明灯',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: 'https://cdn.iuob.uk/favicon.ico',
            },
        ],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, user-scalable=no',
            },
        ],
        [
            'meta',
            {
                name: 'author',
                content: 'Harry Yep',
            },
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: 'iUoB, University of Birmingham, UoB, 伯明翰大学, Birmingham, Harry Yep',
            },
        ],
        [
            'link',
            {
                rel: 'icon',
                href: 'https://cdn.iuob.uk/assets/img/favicon-16x16.png',
                type: 'image/png',
                sizes: '16x16',
            },
        ],
        [
            'link',
            {
                rel: 'icon',
                href: 'https://cdn.iuob.uk/assets/img/favicon-32x32.png',
                type: 'image/png',
                sizes: '32x32',
            },
        ],
        [
            'link',
            {
                rel: 'apple-touch-icon',
                href: 'https://cdn.iuob.uk/assets/img/apple-touch-icon.png',
                sizes: '180x180',
            },
        ],
        [
            'link',
            {
                rel: 'mask-icon',
                href: 'https://cdn.iuob.uk/assets/img/safari-pinned-tab.svg',
                color: '#42b983',
            },
        ],
        [
            'link',
            {
                rel: 'manifest',
                href: '/manifest.json',
            },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
            },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black',
            },
        ],
        ['script', { 'data-token': '88QXOYUKYQYQ', async: true, src: 'https://cdn.splitbee.io/sb.js' }],
    ],
    plugins: [
        ['@vuepress/plugin-pwa'],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    },
                },
            },
        ],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-NQKDWXZQ9J',
            },
        ],
    ],
    themeConfig: {
        logo: '/iUoB_Logo_RB.png',
        repo: 'iUoB/help.iuob.uk',
        tip: '提示',
        warning: '请注意',
        danger: '危险提示',
        editLinkText: '帮助 iUoB 改善此页面',
        docsBranch: 'master',
        docsDir: 'docs',
        lastUpdatedText: '最后更新',
        contributors: false,
        notFound: ['你好像迷失了？？？快离开这里吧。', '看到这条消息的人，今天会有好运发送。', '希望你有美好的一天'],
        backToHome: '回到帮助中心 - iUoB',
        openInNewWindow: '在新窗口打开',
        navbar: [
            {
                text: '伯明翰大学官网',
                link: 'https://www.birmingham.ac.uk/',
            },
            {
                text: '主页',
                link: '/',
            },
            {
                text: '详情',
                link: '/details/',
            },
            {
                text: '问题选择',
                children: [
                    {
                        text: '入学前',
                        children: [
                            {
                                text: '详情',
                                link: '/details/uni/pre-admissions/',
                            },
                            {
                                text: '联系伯明翰大学',
                                link: '/details/uni/pre-admissions/contacts/',
                            },
                            {
                                text: '其他',
                                link: '/details/uni/pre-admissions/others/',
                            },
                        ],
                    },
                    {
                        text: '入学后',
                        children: [
                            {
                                text: '详情',
                                link: '/details/uni/enrolled/',
                            },
                            {
                                text: '常见解决方案',
                                link: '/details/uni/enrolled/solutions/',
                            },
                            {
                                text: '其他',
                                link: '/details/uni/enrolled/others/',
                            },
                        ],
                    },
                    {
                        text: '生活',
                        children: [
                            {
                                text: '详情',
                                link: '/details/daily/',
                            },
                            {
                                text: '未整理问题',
                                link: '/details/daily/unorganized/',
                            },
                        ],
                    },
                    {
                        text: 'iUoB',
                        children: [
                            {
                                text: '下载iUoB',
                                link: '/details/iUoB/download/',
                            },
                            {
                                text: '提交问题',
                                link: '/details/iUoB/submit/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '联系我们',
                link: '/contacts/',
            },
            {
                text: '关于iUoB',
                link: '/about/',
            },
            {
                text: '其他',
                children: [
                    {
                        text: 'Homepage - iUoB',
                        link: 'https://www.iuob.uk/',
                    },
                    {
                        text: 'iUoB 运行状态监控',
                        link: 'https://status.iuob.uk/',
                    },
                ],
            },
            {
                text: '语言',
                children: [
                    {
                        text: '简体中文',
                        link: '/',
                    },
                    {
                        text: 'British English',
                        link: 'https://en.help.iuob.uk/',
                    },
                ],
            },
        ],
    },
};
