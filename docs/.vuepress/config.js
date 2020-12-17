module.exports = {
  // 设置网站标题
  title: "全栈笔记📒",
  // 描述
  description: "我大意了，没有学，很快啊，就更新了",
  // 设置输出目录
  dest: "./dist",
  // 端口
  port: "2020",
  head: [["link", { rel: "icon", href: "/img/favicon.ico" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
    lastUpdated: "最后一次更新",
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: "新内容可用。",
        buttonText: "刷新",
      },
    },
    search: true,
    searchMaxSuggestions: 10,
    // 添加导航栏
    nav: [
      { text: "主页 🏡", link: "/" },
      {
        text: "摸鱼小工具 🐟",
        items: [
          {
            text: "图标库",
            items: [{ text: "矢量图标库", link: "https://www.iconfont.cn/" }],
          },
          {
            text: "博客指南",
            items: [
              { text: "掘金", link: "https://juejin.im/" },
              { text: "CSDN", link: "https://blog.csdn.net/" },
            ],
          },
        ],
      },
      { text: "划水摸鱼 🌧", link: "/fish/" },
      { text: "打怪升级 👾", link: "/book/" },
      { text: "前端小抄 🎈", link: "/css-card/" },
      {
        text: "缓缓打出一个❓",
        items: [
          { text: "gitea", link: "https://github.com/go-gitea/gitea.git" },
          { text: "colorui", link: "https://github.com/weilanwl/ColorUI.git" },
        ],
      },
    ],
    // 添加侧边栏
    sidebar: {
      // 快速开始
      "/fish/": [
        {
          title: "摸鱼技巧一",
          collapsable: true,
          children: [{ title: "打怪", path: "one/one" }],
        },
        {
          title: "摸鱼技巧二",
          collapsable: true,
          children: [{ title: "升级", path: "two/two" }],
        },
      ],
      "/book/": [
        {
          title: "开始懵逼",
          collapsable: true,
          children: [{ title: "打怪", path: "vue/zero/one" }],
        },
        {
          title: "完全懵逼",
          collapsable: true,
          children: [{ title: "打怪", path: "vue/high/one" }],
        },
      ],
      "/css-card/": [
        {
          title: "前端小抄",
          collapsable: true,
          children: [
            "flexbox",
            "git",
            "grid",
            "head",
            "http",
            "markdown",
            "preview",
            "sass",
            "regex",
            "boxmodel",
            "console",
          ],
        },
      ],
    },
  },
};
