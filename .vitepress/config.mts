import { defineConfig } from 'vitepress'
import { sidebarConfig } from './config/sidebar'
import { socialLinksConfig } from './config/socialLinks'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A VitePress Site",
  description: "description",
  base: '/',
  srcDir: 'articles',
  outDir: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon-32x32.webp',

    lastUpdated: {
      text: 'Last Updated At',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Animations', link: '/animations/kun-animations' },
      {
        text: 'KUNGalgame Doc',
        link: '/kun-visualnovel-docs/kun-forum',
      },
      { text: 'Visual Novels', link: '/visualnovels/kun-visualnovels' },
      { text: 'Technology', link: '/technology/kun-technology' },
    ],

    sidebar: sidebarConfig,

    socialLinks: socialLinksConfig,

    search: {
      provider: 'local',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
