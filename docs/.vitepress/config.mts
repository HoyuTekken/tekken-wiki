import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "鉄研Wiki",
    description: "朋優学院高等学校 鉄道研究部ドキュメントサイト",
    base: "/tekken-wiki/",
    head: [
        ["meta", { name: "robots", content: "noindex, nofollow" }],
        // Favicon and related icons
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                href: "/tekken-wiki/favicon-96x96.png",
                sizes: "96x96",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/svg+xml",
                href: "/tekken-wiki/favicon.svg",
            },
        ],
        ["link", { rel: "shortcut icon", href: "/tekken-wiki/favicon.ico" }],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/tekken-wiki/apple-touch-icon.png",
            },
        ],
        [
            "meta",
            { name: "apple-mobile-web-app-title", content: "Tekken Wiki" },
        ],
        ["link", { rel: "manifest", href: "/tekken-wiki/site.webmanifest" }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "ホーム", link: "/" },
            { text: "鉄研について", link: "/about/what-is-hoyutekken" },
            { text: "プラレール", link: "/plarail/" },
        ],

        sidebar: [
            {
                text: "鉄研について",
                items: [
                    {
                        text: "鉄研Wikiとは?",
                        link: "/about/what-is-tekkenwiki",
                    },
                    {
                        text: "鉄研とは?",
                        link: "/about/what-is-hoyutekken",
                    },
                    {
                        text: "メンバー構成",
                        link: "/about/tekken-member",
                    },
                ],
            },
            {
                text: "プラレール",
                link: "/plarail/",
            },
            {
                text: "ジオラマ",
                link: "/diorama/",
            },
        ],

        socialLinks: [
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Website</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
                },
                link: "https://www.ho-yu.ed.jp/club-news/category/culture/train/",
            },
            {
                icon: "github",
                link: "https://github.com/hoyutekken/",
            },
            {
                icon: "instagram",
                link: "https://www.instagram.com/hy_tkc/",
            },
            {
                icon: "x",
                link: "https://x.com/hoyu_tekken",
            },
        ],
        search: {
            provider: "local",
        },
        footer: {
            message:
                'この<a href="/tekken-wiki/about" style="text-decoration: underline;">サイト</a>について',
            copyright: "Copyright © 2026 朋優学院高等学校 鉄道研究部",
        },
    },
});
