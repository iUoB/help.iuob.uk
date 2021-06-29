module.exports = {
    theme: 'default-prefers-color-scheme',
    dest: 'public',
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
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
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '帮助中心 - iUoB',
            description: '为你通往伯明翰大学的路上亮起明灯',
        }
    },
    plugins: [
        ['@vuepress/google-analytics', {
            'ga': 'UA-182989275-1'
        }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const moment = require("moment");
                moment.locale(lang);
                return moment(timestamp).format("YYYY-MM-DD HH:mm");
            }
        }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/nprogress', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['pangu', true],
        ['sitemap', {
            hostname: 'https://help.iuob.uk'
        }],
        ['auto-sidebar', true],
        ['fulltext-search', true],
        ['copyright', {
            noCopy: false,
            noSelect: false,
            minLength: 100,
        }],
    ],
    themeConfig: {
        repo: 'iUoB/help.iuob.uk',
        editLinks: true,
        docsDir: 'docs',
        logo: '/iUoB_Logo_RB.png',
        displayAllHeaders: true,
        activeHeaderLinks: true,
        sidebar: 'auto',
        smoothScroll: true,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: '简体中文',
                selectText: 'Languages',
                lastUpdated: '最后更新',
                repo: 'iUoB/help.iuob.uk',
                repoLabel: '查看源码',
                editLinks: true,
                editLinkText: '在GitHub编辑此页面',
                nav: [{
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
                        ariaLabel: '问题选择',
                        items: [{
                                text: '入学前',
                                items: [{
                                        text: '详情',
                                        link: '/details/uni/pre-admissions/'
                                    },
                                    {
                                        text: '录取相关',
                                        link: '/details/uni/pre-admissions/admissions/'
                                    },
                                    {
                                        text: '联系方式',
                                        link: '/details/uni/pre-admissions/contacts/'
                                    },
                                    {
                                        text: '其他',
                                        link: '/details/uni/pre-admissions/others/'
                                    }
                                ]
                            },
                            {
                                text: '入学后',
                                items: [{
                                        text: '详情',
                                        link: '/details/uni/enrolled/'
                                    },
                                    {
                                        text: 'Solutions',
                                        link: '/details/uni/enrolled/solutions/'
                                    },
                                    {
                                        text: '其他',
                                        link: '/details/uni/enrolled/others/'
                                    }
                                ]
                            },
                            {
                                text: '其他问题',
                                items: [{
                                        text: '详情',
                                        link: '/details/tips/'
                                    },
                                    {
                                        text: '未整理问题',
                                        link: '/details/tips/unorganized/'
                                    },
                                ]
                            },
                            {
                                text: 'iUoB',
                                items: [{
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
                        ariaLabel: 'Others Menu',
                        items: [{
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
                        ariaLabel: 'Languages Menu',
                        items: [{
                                text: '简体中文',
                                link: '/'
                            },
                            {
                                text: 'British English',
                                link: 'https://en.help.iuob.uk/'
                            }
                        ]
                    }
                ],
                sidebar: 'auto'
            }
        }
    }
}