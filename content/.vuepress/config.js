module.exports = {
  base: "/nuxt-dashboard-template-doc/",
  title: "Dashboarding with Nuxt",
  description: "Helper for Non Professional Web Devs",
  head: [["link", { rel: "icon", href: "/favicon-nuxt.png" }]],
  dest: "./_dist",
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress"
  ],
  // serviceWorker: true,
  themeConfig: {
    algolia: {
      apiKey: "fd3694c4c215531b2b8b966520ce657e",
      indexName: "nuxt-dashboard-template"
    },
    repo: "https://github.com/oscar6echo/nuxt-dashboard-template-doc",
    editLinks: false,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Get Started",
        link: "/get-started/overview"
      },
      {
        text: "Structure",
        link: "/structure/general"
      },
      {
        text: "Worflow",
        link: "/workflow/config"
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: "Get Started",
        collapsable: false,
        children: [
          "/get-started/overview",
          "/get-started/install",
          "/get-started/start"
        ]
      },
      {
        title: "Structure",
        collapsable: false,
        children: [
          "/structure/general",
          "/structure/routing",
          "/structure/store",
          "/structure/state"
        ]
      },
      {
        title: "Worflow",
        collapsable: false,
        children: [
          "/workflow/config",
          "/workflow/scripts",
          "/workflow/phases",
          "/workflow/debug"
        ]
      }
    ]
  }
};
