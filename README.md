# 樱降る代に決闘を / 散樱乱武组卡器

散樱乱武桌游的中文组卡器：随机抽取女神与卡牌、卡牌详情与 FAQ 查询、卡组广场（分享上位卡组）、赛季修订卡对比等功能的单页应用。

## 快速开始

```bash
npm install     # 安装依赖
npm run dev     # 启动开发服务器
npm run build   # 构建生产产物到 dist/
npm run preview # 本地预览构建产物
```

运行环境：Node.js + Vite，无需额外后端服务。

## 技术栈

- Vue 3 + Vite 2（2022-04 由 Vue 2 迁移升级）
- Pinia 全局状态管理
- SCSS 样式体系
- eslint（vite-plugin-eslint）代码检查
- vue3-lazyload 图片懒加载

## 文件结构

```
├── index.html                 # 入口 HTML，内联赛季/赛制配置（seasonVersion 等，改 HTML 即生效无需重新构建）
├── src/
│   ├── config/                # 配置与数据层
│   │   ├── lang.js            # 多语言 UI 文案（cn / jp / kr / en）
│   │   ├── nav.js             # 顶部导航结构
│   │   └── sakura/            # 樱战数据（统一收敛于此）
│   │       ├── carddata/      # 卡牌数据（分赛季；re/ 为再演，-ch 为官方中文版）
│   │       ├── decks/         # 卡组广场数据（2022 / 2024 / 2026_re）
│   │       ├── import_roll_faq.js   # FAQ 数据（规则 FAQ + 各女神卡牌 FAQ）
│   │       ├── roll-other-data.js   # 数据装配入口（index.html 以模块脚本加载，sakuraOtherData）
│   │       ├── sakura-with-card.js  # 连携战 / 扩展玩法数据
│   │       ├── sakura-cmdata.js     # 原初（CM）挑战副本数据
│   │       └── sakura-changedata.js # 赛季修订卡数据（to / from 新旧对比）
│   ├── components/            # UI 组件（卡牌、卡组、FAQ 等）
│   ├── pages/                 # 页面级组件（CardList / DecksList / OtherPlay / Scc）
│   ├── store/global.js        # Pinia 全局状态
│   ├── utils/                 # 工具函数（数据初始化、卡牌格式化、FAQ 生成工具 roll-cards-faq.js）
│   ├── App.vue                # 根组件，聚合各数据源并注入 FAQ
│   └── main.js
└── vite.config.js             # 构建配置（含手动分包 manualChunks）
```

## 数据维护约定

- **赛季 / 赛制配置**（当前赛季、禁用卡、禁组卡等）：改 `index.html` 内联脚本里的 `seasonVersion` / `seasonGirls` / `qiyuanGirls`，部署期直接修改 HTML 即可生效，无需重新构建。
- **新增赛季卡牌**：在 `src/config/sakura/carddata/` 按既有格式新增数据文件（日文版与 `-ch` 官方中文版成对），并在 `src/App.vue` 中 import。
- **卡组广场数据**：追加到 `src/config/sakura/decks/` 的赛季文件，默认展示赛季由 `roll-other-data.js` 中的 `sakuraPlayerDeckDataAnySeason` 配置。
- **FAQ 数据生成**：`src/utils/roll-cards-faq.js` 为本地生成工具，页面放置 `exportfaq` / `exportfaqSub` 输入框后输入原始日文 FAQ 即可格式化。

## 历史

- 2019-06-24 vue2.0 创立项目
- 2022-04-17 升级成 vite + vue3.0

# 组卡器更新日志

见同目录下的 random-update.html 文件