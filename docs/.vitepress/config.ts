import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'AI 全产业链深度拆解',
    description: '12 周长周期迭代研究知识库',
    lang: 'zh-CN',
    lastUpdated: true,
    // GitHub Pages: 如果仓库名是 username.github.io，改为 '/'
    // 否则填 '/<repo-name>/'，例如 '/ai-industry-research/'
    base: '/ai-industry-research/',

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ],

    themeConfig: {
      logo: '/logo.svg',
      siteTitle: 'AI 产业链研究',

      nav: [
        { text: '首页', link: '/' },
        { text: '大纲', link: '/outline' },
        {
          text: '周计划',
          items: [
            { text: 'Week 1 · 电力与能源底层', link: '/week-01/lecture' },
            { text: 'Week 2 · 数据中心', link: '/week-02/lecture' },
            { text: 'Week 3 · 高速互联', link: '/week-03/lecture' },
            { text: 'Week 4 · GPU 架构', link: '/week-04/lecture' },
          ]
        },
        { text: '术语表', link: '/glossary' },
        { text: '思维模型', link: '/mental-models' },
      ],

      sidebar: {
        '/': [
          {
            text: '项目总览',
            items: [
              { text: '首页', link: '/' },
              { text: '12 周大纲', link: '/outline' },
              { text: '产业投资地图', link: '/investment-map' },
            ]
          },
          {
            text: '第一阶段：物理基础设施层',
            collapsed: false,
            items: [
              {
                text: 'Week 1 · 电力与能源底层',
                collapsed: false,
                items: [
                  { text: '📖 讲义', link: '/week-01/lecture' },
                  { text: '💬 互动记录', link: '/week-01/interaction' },
                  { text: '✅ 认知存盘', link: '/week-01/takeaways' },
                ]
              },
              {
                text: 'Week 2 · 数据中心',
                collapsed: false,
                items: [
                  { text: '📖 讲义', link: '/week-02/lecture' },
                  { text: '💬 互动记录', link: '/week-02/interaction' },
                  { text: '✅ 认知存盘', link: '/week-02/takeaways' },
                ]
              },
              {
                text: 'Week 3 · 高速互联',
                collapsed: false,
                items: [
                  { text: '📖 讲义', link: '/week-03/lecture' },
                  { text: '💬 互动记录', link: '/week-03/interaction' },
                  { text: '✅ 认知存盘', link: '/week-03/takeaways' },
                ]
              },
            ]
          },
          {
            text: '第二阶段：芯片与硬件层',
            collapsed: false,
            items: [
              {
                text: 'Week 4 · GPU 架构',
                collapsed: false,
                items: [
                  { text: '📖 讲义', link: '/week-04/lecture' },
                  { text: '💬 互动记录', link: '/week-04/interaction' },
                  { text: '✅ 认知存盘', link: '/week-04/takeaways' },
                ]
              },
              { text: 'Week 5 · AI 芯片竞争 🔒', link: '/week-05/' },
              { text: 'Week 6 · 存储与内存墙 🔒', link: '/week-06/' },
            ]
          },
          {
            text: '第三阶段：模型与算法层 🔒',
            collapsed: true,
            items: [
              { text: 'Week 7 · Transformer 与 Scaling Law', link: '/week-07/' },
              { text: 'Week 8 · 训练工程', link: '/week-08/' },
              { text: 'Week 9 · 推理优化', link: '/week-09/' },
            ]
          },
          {
            text: '第四阶段：应用与 Agent 层 🔒',
            collapsed: true,
            items: [
              { text: 'Week 10 · 云计算与算力调度', link: '/week-10/' },
              { text: 'Week 11 · AI Agent 架构', link: '/week-11/' },
              { text: 'Week 12 · 终局推演', link: '/week-12/' },
            ]
          },
          {
            text: '工具箱',
            collapsed: false,
            items: [
              { text: '📚 术语表', link: '/glossary' },
              { text: '🧠 思维模型库', link: '/mental-models' },
              { text: '🗺️ 产业投资地图', link: '/investment-map' },
            ]
          },
        ],
      },

      outline: {
        level: [2, 3],
        label: '本页目录'
      },

      search: {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
            modal: {
              noResultsText: '没有找到相关结果',
              resetButtonTitle: '清除查询',
              footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
            }
          }
        }
      },

      lastUpdated: {
        text: '最后更新于',
      },

      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },

      footer: {
        message: 'AI 全产业链深度拆解 · 12 周迭代研究',
        copyright: '个人知识库 · 持续更新中'
      }
    },

    mermaid: {},
    mermaidPlugin: {
      class: 'mermaid',
    },
  })
)
