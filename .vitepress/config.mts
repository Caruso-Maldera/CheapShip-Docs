import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CheapShip.app",
  description: "Make your game process faster and easier.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Website', link: '/website/index.md' },
      { text: 'Plugin', link: '/plugin/index.md' },
      { text: 'CheapShip.app', link: 'cheapship.app' },

    ],
    sidebar: [
      {
        text: 'Website',
        items: [
          { text: 'Introduction', link: '/website/introduction' },
          { text: 'Teams', link: '/website/teams' },
          { text: 'Projects', link: '/website/projects' },
          { text: 'Account', link: '/website/account' },
          { text: 'Subscription', link: '/website/subscription' },        
        ]
      },
      {
        text: 'Plugin',
        items: [
          { text: 'Installation', link: '/plugin/installation' },
          { text: 'Usage', link: '/plugin' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/8AtU3sbujp' }
    ]
  }
})
