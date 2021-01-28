module.exports = {
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: 'Harry Yep' }],
        ['meta', { name: 'keywords', content: 'iUoB, University of Birmingham, UoB, 伯明翰大学' }],
        ['link', { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }],
        ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }],
        ['link', { rel: 'apple-touch-icon', href: '/favicon-32x32.png', sizes: '180x180' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#42b983' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    locales: {
        '/': {
            lang: 'en-GB',
            title: 'Help Center - iUoB',
            description: 'Light up your way to the University of Birmingham',
        },
        '/zh-Hans/': {
            lang: 'zh-CN',
            title: '帮助中心 - iUoB',
            description: '为你通往伯明翰大学的路上亮起明灯',
        }
    },
    plugins: [
        ['@vuepress/google-analytics', { 'ga': 'G-SCWB4S9801' }],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['@vuepress/medium-zoom'],
        ['@vuepress/nprogress'],
        ['@vuepress/pwa'],
    ],
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        feed: {
            canonical_base: 'http://help.iuob.uk/'
        },
        locales: {
            '/': {
                label: 'British English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                repo: 'iUoB/help',
                repoLabel: 'View source code',
                editLinks: true,
                editLinkText: 'Edit this page on GitHub',
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Help', link: '/details/' },
                    { text: 'Contacts', link: '/contacts/' },
                    { text: 'About', link: '/about/' },
                    {
                        text: 'Others',
                        ariaLabel: 'Others Menu',
                        items: [
                            { text: 'Homepage - iUoB', link: 'https://www.iuob.uk/' },
                            { text: 'Status - iUoB', link: 'https://status.iuob.uk/' }
                        ]
                    }
                ],
                sidebar: [
                    ['/details/', 'Navigation Page'],
                    ['/details/contacts/', 'Contacts-related Questions'],
                    ['/details/admissions/', 'Admissions/Offer-related Questions']
                ]
            },
            '/zh-Hans/': {
                label: '简体中文',
                selectText: 'Languages',
                lastUpdated: '最后更新',
                repo: 'iUoB/help',
                repoLabel: '查看源码',
                editLinks: true,
                editLinkText: '在GitHuB编辑此页面',
                nav: [
                    { text: 'Home', link: '/zh-Hans/' },
                    { text: 'Help', link: '/zh-Hans/details/' },
                    { text: 'Contacts', link: '/zh-Hans/contacts/' },
                    { text: 'About', link: '/zh-Hans/about/' },
                    {
                        text: 'Others',
                        ariaLabel: 'Others Menu',
                        items: [
                            { text: 'Homepage - iUoB', link: 'https://www.iuob.uk/' },
                            { text: 'Status - iUoB', link: 'https://status.iuob.uk/' }
                        ]
                    }
                ],
                sidebar: [
                    ['/zh-Hans/details/', '导航页面'],
                    ['/zh-Hans/details/contacts/', '联系方式类问题'],
                    ['/zh-Hans/details/admissions/', '录取/Offer类问题']
                ]
            },

        }
    }
}