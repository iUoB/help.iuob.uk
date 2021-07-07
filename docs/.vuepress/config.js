module.exports = {
    dest: 'public',
    lang: 'zh-CN',
    title: '帮助中心 - iUoB',
    description: '为你通往伯明翰大学的路上亮起明灯',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ['meta', {
            name: 'author',
            content: 'Harry Yep'
        }],
        ['meta', {
            name: 'keywords',
            content: 'iUoB, University of Birmingham, UoB, 伯明翰大学'
        }],
        ['link', {
            rel: 'icon',
            href: '/favicon-16x16.png',
            type: 'image/png',
            sizes: '16x16'
        }],
        ['link', {
            rel: 'icon',
            href: '/favicon-32x32.png',
            type: 'image/png',
            sizes: '32x32'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#42b983'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
    ],
    plugins: [
        ['@vuepress/plugin-pwa'],
        ['@vuepress/plugin-pwa-popup', {
            locales: {
                '/': {
                    message: '发现新内容可用',
                    buttonText: '刷新',
                },
            },
        }, ],
        ['@vuepress/plugin-search', {
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            },
        }, ],
        ['@vuepress/plugin-google-analytics', {
            id: 'G-NQKDWXZQ9J',
        }, ],
    ],
    themeConfig: {
        logo: '/iUoB_Logo_RB.png',
        repo: 'iUoB/help.iuob.uk',
        tip: '提示',
        warning: '请注意',
        danger: '危险提示',
        editLinkText: '帮助iUoB改善此页面',
        docsBranch: 'master',
        docsDir: 'docs',
        lastUpdatedText: '最后更新',
        contributors: false,
        notFound: [
            '你好像迷失了？？？快离开这里吧。',
            '看到这条消息的人，今天会有好运发送。',
            '希望你有美好的一天'
        ],
        backToHome: '回到帮助中心 - iUoB',
        openInNewWindow: '在新窗口打开',
        navbar: [{
                text: '伯明翰大学官网',
                link: 'https://www.birmingham.ac.uk/'
            },
            {
                text: '主页',
                link: '/'
            },
            {
                text: '详情',
                link: '/details/'
            },
            {
                text: '问题选择',
                children: [{
                        text: '入学前',
                        children: [{
                                text: '详情',
                                link: '/details/pre-admissions/'
                            },
                            {
                                text: '录取相关',
                                link: '/details/pre-admissions/admissions/'
                            },
                            {
                                text: '联系方式',
                                link: '/details/pre-admissions/contacts/'
                            },
                            {
                                text: '其他',
                                link: '/details/pre-admissions/others/'
                            }
                        ]
                    },
                    {
                        text: '入学后',
                        children: [{
                                text: '详情',
                                link: '/details/enrolled/'
                            },
                            {
                                text: 'Solutions',
                                link: '/details/enrolled/solutions/'
                            },
                            {
                                text: '其他',
                                link: '/details/enrolled/others/'
                            }
                        ]
                    },
                    {
                        text: '其他问题',
                        children: [{
                                text: '详情',
                                link: '/details/others/'
                            },
                            {
                                text: '关键词查询',
                                link: '/details/others/keywords/'
                            },
                            {
                                text: '未整理问题',
                                link: '/details/others/unorganized/'
                            },
                        ]
                    },
                    {
                        text: 'iUoB',
                        children: [{
                                text: '下载iUoB',
                                link: '/details/iUoB/download/'
                            },
                            {
                                text: '提交问题',
                                link: '/details/iUoB/submit/'
                            },
                            {
                                text: '最近更新',
                                link: '/details/iUoB/updates/'
                            }
                        ]
                    }

                ]
            },
            {
                text: '联系我们',
                link: '/contacts/'
            },
            {
                text: '关于iUoB',
                link: '/about/'
            },
            {
                text: '其他',
                children: [{
                        text: 'Homepage - iUoB',
                        link: 'https://www.iuob.uk/'
                    },
                    {
                        text: 'Status - iUoB',
                        link: 'https://status.iuob.uk/'
                    }
                ]
            },
            {
                text: '语言',
                children: [{
                        text: '简体中文',
                        link: '/'
                    },
                    {
                        text: 'British English',
                        link: 'https://en.help.iuob.uk/'
                    }
                ]
            }
        ]
    },
}