module.exports = {
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: 'Harry Yep' }],
        ['meta', { name: 'keywords', content: 'iUoB, University of Birmingham, UoB, 伯明翰大学' }],
        ['link', { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }],
        ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#42b983' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '帮助中心 - iUoB',
            description: '为你通往伯明翰大学的路上亮起明灯',
        },
        '/en-GB/': {
            lang: 'en-GB',
            title: 'Help Center - iUoB',
            description: 'Light up your way to the University of Birmingham',
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
        ['@vuepress/nprogress'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['pangu', true],
        ['sitemap', {
            hostname: 'https://help.iuob.uk'
        }],
        ['auto-sidebar', true],
        ['fulltext-search', true]
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
                nav: [
                    { text: '主页', link: '/' },
                    { text: '详情', link: '/details/' },
                    {
                        text: '问题选择',
                        ariaLabel: '问题选择',
                        items: [{
                                text: '入学前',
                                items: [
                                    { text: 'Admissions', link: '/details/pre-admissions/admissions/' },
                                    { text: 'Contacts', link: '/details/pre-admissions/contacts/' }
                                ]
                            },
                            {
                                text: '入学后',
                                items: [
                                    { text: 'Solutions', link: '/details/enrolled/solutions/' }
                                ]
                            },
                            { text: '未整理问题', link: '/details/unorganized/' },
                            {
                                text: 'iUoB',
                                items: [
                                    { text: '下载iUoB', link: '/details/iUoB/download/' },
                                    { text: '提交问题', link: '/details/iUoB/submit/' },
                                    { text: '最近更新', link: '/details/iUoB/updates/' }
                                ]
                            }

                        ]
                    },
                    { text: '联系我们', link: '/contacts/' },
                    { text: '关于iUoB', link: '/about/' },
                    {
                        text: '其他',
                        ariaLabel: 'Others Menu',
                        items: [
                            { text: 'Homepage - iUoB', link: 'https://www.iuob.uk/' },
                            { text: 'Status - iUoB', link: 'https://status.iuob.uk/' }
                        ]
                    }
                ],
                sidebar: 'auto'
            },
            '/en-GB/': {
                label: 'British English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                repo: 'iUoB/help.iuob.uk',
                repoLabel: 'View source code',
                editLinks: true,
                editLinkText: 'Edit this page on GitHub',
                nav: [
                    { text: 'Home', link: '/en-GB/' },
                    { text: 'Help', link: '/en-GB/details/' },
                    {
                        text: 'Questions',
                        ariaLabel: 'Questions Select Menu',
                        items: [{
                                text: 'Pre-Admissions',
                                items: [
                                    { text: 'Admissions', link: '/en-GB/details/pre-admissions/admissions/' },
                                    { text: 'Contacts', link: '/en-GB/details/pre-admissions/contacts/' }
                                ]
                            },
                            {
                                text: 'Enrolled',
                                items: [
                                    { text: 'Solutions', link: '/en-GB/details/enrolled/solutions/' }
                                ]
                            },
                            { text: 'Unorganized Questions', link: '/en-GB/details/unorganized/' },
                            {
                                text: 'iUoB',
                                items: [
                                    { text: 'Dwonload iUoB', link: '/en-GB/details/iUoB/download/' },
                                    { text: 'Sumbit Questions', link: '/en-GB/details/iUoB/submit/' },
                                    { text: 'Recent Updates', link: '/en-GB/details/iUoB/updates/' }
                                ]
                            }

                        ]
                    },
                    { text: 'Contact Us', link: '/en-GB/contacts/' },
                    { text: 'About iUoB', link: '/en-GB/about/' },
                    {
                        text: 'Others',
                        ariaLabel: 'Others Menu',
                        items: [
                            { text: 'Homepage - iUoB', link: 'https://www.iuob.uk/' },
                            { text: 'Status - iUoB', link: 'https://status.iuob.uk/' }
                        ]
                    }
                ],
                sidebar: 'auto'
            },
        }
    }
}