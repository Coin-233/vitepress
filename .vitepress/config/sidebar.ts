import type { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = [
  {
    text: 'Game',
    collapsed: true,
    items: [
      {
        text: 'Minecraft',
        collapsed: false,
        items: [
          {
            text: '关于',
            link: '/game/minecraft/',
          },
          {
            text: '自定义合成',
            link: '/game/minecraft/custom_crafting'
          }
        ],
      },
      {
        text: '100% Orange Juice',
        collapsed: false,
        items: [
          {
            text: ' ',
            link : '/game/100oj/'
          }
        ]
      }
    ],
  }
]
