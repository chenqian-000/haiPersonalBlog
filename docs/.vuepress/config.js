module.exports = {
  title: "海的个人文档 | 海的个人网站",
  description: "海的个人文档 | 海的个人网站",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "./", // 这是部署到github相关的配置
  theme: "reco", // 主题
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "海的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/4020261431571208" },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_59878840?spm=1000.2115.3001.5343",
          },
        ],
      },
      {
        text: "GitHub",
        items: [
          { text: "GitHub地址", link: "https://github.com/chenqian-000" },
        ],
      },
    ],
  },
};
