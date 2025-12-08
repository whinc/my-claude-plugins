## docs/team/58anjuke.md

---
title: 58安居客 团队
---

import Link from '@docusaurus/Link'

## 使用 Taro 高效开发 APP

Taro 3 React Native 部分由 58 的团队开发。RN 相关的 RFC 可以关注 [Pull Request](https://github.com/NervJS/taro-rfcs/pull/8)。测试进展及相关问题可以关注 [Taro 3.2 测试公告](https://github.com/NervJS/taro/issues/8180)。

![](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/d84aad22aa5b1f140b9b186858c3bf81_7la5x-fcodr.gif)

更多细节，请参考 [React Native 端开发教程](../react-native)。

## 团队介绍

58 同城技术委员会前端分会成立于 2016 年，由各个事业群、部门的前端团队联合组成，旨在促进公司内前端领域技术共享交流、协同共建、代码开源，统一技术标准和开发方案，提高公司整体前端基础建设水平，提升各团队之间沟通协作效率。58 也在积极参与开源社区建设，已对外开源 [Fair](https://github.com/wuba/Fair)、[WBBlades](https://github.com/wuba/WBBlades)、[Picasso](https://github.com/wuba/Picasso)、[React Native ECharts](https://github.com/wuba/react-native-echarts) 等多个项目，更多开源请关注：[https://github.com/wuba](https://github.com/wuba)。

## 公司介绍

<Link to="//www.58.com">
  <img src="//storage.jd.com/taro-jd-com/static/58.png" style={{ height: "88px" }} />
</Link>

58 同城作为中国领先的生活服务平台，业务覆盖招聘、房产、汽车、二手、本地生活服务及金融等各个领域。
在用户服务层面，不仅是一个信息交互的平台，更是一站式的生活服务平台，同时也逐步为商家建立全方位的市场营销解决方案。

<Link to="//www.anjuke.com">
  <img src="//pic3.58cdn.com.cn/nowater/fangfe/n_v2bcd2cc376dc54a5e9b0ce864424394f9.png" style={{ height: "88px" }} />
</Link>

安居客是体量领先的优质找房平台，于 2007 年正式创立。以“人人信赖的生活服务平台”为企业愿景，全面覆盖新房、二手房、租房、商业地产、海外地产五大业务。为用户提供房产租售一站式的专业服务，同时为开发商与经纪人提供高效的网络推广平台。

## 58 开源项目

<Link to="//github.com/wuba/fair" style={{display: "inline-block", margin: "0 10px 10px 0"}}>
  <img src="//pic3.58cdn.com.cn/nowater/fangfe/n_v2517a26db956a49d6a915d304c4821958.png" style={{ height: "88px" }} />
</Link>

Fair 是为 Flutter 设计的，UI&模板动态化框架，用于动态更新 Widget Tree。在线文档：[https://fair.58.com/](https://fair.58.com/)。

<Link to="//github.com/wuba/Picasso" style={{display: "inline-block", margin: "0 10px 10px 0"}}>
  <img src="//pic5.58cdn.com.cn/nowater/fangfe/n_v20bf90dff9429494da3544886e0fc3192.png" style={{ height: "88px" }} />
</Link>

Picasso 是 58 同城推出的一款 sketch 设计稿解析插件，可将 sketch 设计稿自动解析成还原精准，可用度高的前端代码。

更多开源请关注：[https://github.com/wuba](https://github.com/wuba)

## 58 技术 官方订阅号

![58技术](https://pic3.58cdn.com.cn/nowater/fangfe/n_v2ebcfb754ae6b48b788a73b8e5743d0bb.jpg)

## 联系方式

chenzhiqing01(at)58.com

---

## docs/team/components.tsx

import Link from '@docusaurus/Link'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import members from '@site/static/data/contributors.json'
import o2logo from '@site/static/img/o2logo.png'
import taro from '@site/static/img/taro-logo_180.png'
import React from 'react'
⋮----
interface ITeam {
  href?: string
  image?: string
}

---

## docs/team/index.mdx

---
title: 团队介绍
---

import { TeamList } from './components'

## 团队构成

Taro 各个模块的核心开发者。设计并实现 Taro 的核心功能，把控模块的功能规划、特性引入和实现进度，当社区无法达成共识时做出最终决定。

![团队架构图](@site/static/img/team-structure.png)

运行机制包含技术委员会以及下设的 5 个团队（Core 团队、Plugins 团队、Platform 团队、创新团队、社区团队）。技术委员会由技术委员会委员组成，负责技术方向、项目管理、贡献政策、仓库托管、行为准则、维护合作者列表等，技术委员会主席负责定期组织会议。工作组由合作者成员组成，每个方向有一个 Owner，负责相关工作组的开发进展。

### [Core 团队](./team-core)

- **Cli 工作组**
  主要负责 Taro 命令行工具的开发和维护工作。
- **Compile 工作组**
  负责维护、优化小程序和 H5 的编译系统。
- **Runtime 工作组**
  负责维护小程序运行时系统。

### [Plugin 团队](./team-plugin)

负责维护各 Taro 插件，包括端平台插件，React、Vue DevTools 等。

- **端平台插件工作组**
  负责维护各端平台插件，包括对微信、支付宝、百度、字节跳动、QQ、京东、企业微信、飞书、快手、钉钉、小红书等厂商小程序的适配等。
- **混合开发工作组**
  负责维护 Taro 与原生小程序的相互调用功能、Taro 开发原生插件等。

### [Platform 团队](./team-platform)

负责 App、Web、Open Harmony 等跨平台开发。

- **H5 工作组**
  负责维护 H5 的各模块，包括路由、组件库、API 库等。
- **React Native 工作组**
  负责 React Native 适配核心、组件库、API 库等部分的开发。
- **Open Harmony 工作组**
  负责鸿蒙适配核心、组件库、API 库等部分的开发。
- **快应用工作组**

### [创新团队](./team-innovate)

Taro 创新特新、新方向探索，如 wasm、rust、vite、flutter、electron 等。

- **UI 框架兴趣组**
  TaroUI、NutUI 等 UI 库和其他类型生态工具的研发与管理。

### [社区团队](./team-community)

负责 Taro 生态与运营，和 Taro 社区的运营推广工作。

## 战略合作伙伴（联合团队）

共同参与 Taro 的研发和推广，监督 Taro 的发展流程，推动 Taro 在各领域真实业务场景中的落地和实践，促进 Taro 在业界的广泛应用。

<TeamList
  list={[
    {
      href: '//www.58.com/',
      image: '//storage.jd.com/taro-jd-com/static/58.png',
    },
    {
      href: '//www.anjuke.com/',
      image: '//pic3.58cdn.com.cn/nowater/fangfe/n_v2bcd2cc376dc54a5e9b0ce864424394f9.png',
    },
  ]}
/>

Taro 3 React Native 部分由 58 的团队开发。[RN 相关的 RFC 可以关注](https://github.com/NervJS/taro-rfcs/pull/8)

58 同城技术委员会前端分会成立于 2016 年，由各个事业群、部门的前端团队联合组成，旨在促进公司内前端领域技术共享交流、协同共建、代码开源，统一技术标准和开发方案，提高公司整体前端基础建设水平，提升各团队之间沟通协作效率。58 也在积极参与开源社区建设，已对外开源 [Fair](https://github.com/wuba/Fair)、[WBBlades](https://github.com/wuba/WBBlades)、[Picasso](https://github.com/wuba/Picasso)、[React Native ECharts](https://github.com/wuba/react-native-echarts) 等多个项目，更多开源请关注：[https://github.com/wuba](https://github.com/wuba)。

<TeamList
  list={[
    {
      href: '//youshu.tencent.com/',
      image: '//mp.zhls.qq.com/sdk/img/youshu-logo.jpeg',
    },
    {
      href: '//cdc.tencent.com/',
      image: '//storage.jd.com/taro-jd-com/static/cdc.png',
    },
    {
      href: '//cdc.tencent.com/',
      image: '//storage.jd.com/taro-jd-com/static/tencent.png',
    },
    {
      href: '//www.quickapp.cn/',
      image: '//storage.jd.com/taro-jd-com/static/quick.png',
    },
    {
      href: '//smartprogram.baidu.com/developer/index.html',
      image: '//storage.jd.com/taro-jd-com/static/baidu.png',
    },
    {
      href: '//q.qq.com/',
      image: '//storage.jd.com/taro-jd-com/static/qq.png',
    },
    {
      href: '//open.alipay.com/channel/miniIndex.htm',
      image: '//storage.jd.com/taro-jd-com/static/zfb.png',
    },
    {
      href: '//www.midea.cn/',
      image: '//storage.jd.com/taro-jd-com/static/midea.png',
    },
    {
      href: '//www.sxl.cn/',
      image: '//storage.jd.com/taro-jd-com/static/sxl.png',
    },
    {
      image: '//storage.jd.com/taro-jd-com/static/yx.png',
    },
    {
      href: '//www.16888.com/',
      image: '//img12.360buyimg.com/ling/jfs/t1/150151/24/2373/15562/5f05ad52Ec372ce39/80b555a4d0a0a929.png',
    },
    {
      href: '//www.ikandy.cn/',
      image: '//storage.360buyimg.com/taro-resource/team/tx-tech.jpg',
    },
  ]}
/>

## [技术委员会](./role-committee)

负责技术方向、项目管理、项目发布、贡献政策、仓库托管、行为准则、维护合作者列表，定期参加 TSC 活动，主席（主持人）会在线上主持活动，并做好活动记录并公布。

- 技术委员会双周会
  - 时间：每双周周四前，在技术委员会中预告下次会议的内容和日期。
  - 议题：来自 Taro 下各项目中标注了 tsc-agenda 标签的事宜。会议结束后提交[会议纪要](https://tarojs.notion.site/979a8aad451b4316b04878d252073987?v=88c5bbd1d2c0416590a25cefebde1c74)。每次会议可邀请非委会参加，但无投票权。
- 基于共识决策的投票机制 _各个晋升投票环节，基于共识决策原则，原则上达成多数一致。_
  - 待投票的议题需要在会议前周知各成员，给与成员足够调研思考时间
  - 议题在即将达成一致时，在结题前必须询问“有人反对吗？”，以周知最后反对的机会
  - 议题无法达成一致时，可以投票多数支持是否延期到下一个会议，否则必须继续讨论
  - 议题满足“多数胜利”后即可通过，成员可以弃票
- 引导 / 培训机制
  - 助手、合作者和技术委员会成员每个阶段，均提供相应的引导和培训，让新晋升者可以快速开展工作。

## [合作者 & 生态合作者](./role-collaborator)

维护 taro 相关仓库，帮助用户和初级贡献者，参加具体工作组为当前项目贡献代码和文档，评审和评论 issues 和 pull requests。

- 目的
  - 旨在不断丰富 Taro 特性、性能、安全等。
- 权益
  - Github NervJS 组 Member 权限，Github Write 权限，可以提交 commit 到 [NervJS/taro](https://github.com/NervJS/taro) 仓库，可以配置持续集成任务，负责 pull request 评审及合并
  - 1 个 PR 合并需至少 2 名合作者或 1 名技术委员会成员同意即可进入观察期，观察期 3 个月即可正式成为合作者。
- 申请方法
  - 合作者提名有突出贡献的个人贡献者，通过投票机制决定是否可以成为合作者。一名合格的合作者需具备：技术精进，业务精湛；沟通无障碍，至少读写无阻碍；人品优良，能钻研，不轻易半途而废；态度谦逊，能接受他人意见；Owner 心态，积极主动。
  - 申请 pull request 参考模版如下：
    ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Collaborator.png)
- 退出机制
  - 对不活跃的合作者，技术委员会有权进行移除或设置为荣休状态，荣休成员可以重新向技术委员会申请为活跃状态。如果一个合作者超过 6 个月无任何贡献，会自动设置成荣休状态。

## [助手](./role-triage)

负责 taro 相关仓库新 issues 的维护，负责给 issues 或 pull requests 打标签，以及负责评论、关闭和重新开启 issue 或 pull request，负责将 bug 或 feature 分流给具体工作组。

- 目的
  - 旨在减少 issue 列表，保持 issue 及时跟踪，促进新人参与及贡献 pull request。
- 权益
  - Github NervJS 组 Member 权限，相关项目 Triage 权限，可以管理 issues 和 pull requests（没有写权限）。
- 申请方法
  - 对 Taro 项目有全面了解和深度开发经验的任何人，可以在 NervJS/taro README.md 中提交一个 pull request，说明申请成为助手的动机并同意本项目的行为守则，经 2 名合作者同意即可通过。
  - 申请 pull request 参考模版如下：
    ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Triage.png)
- 退出机制
  - 对 6 个月不活跃的小助手进行定期移除。

## [个人贡献者](./role-committer)

感谢为 Taro 贡献过代码的每一位开发者。

[![contributors](https://opencollective.com/taro/contributors.svg?width=890&button=false)](https://github.com/NervJS/taro/graphs/contributors)

## 特别鸣谢

| [![nanjingboy](https://avatars1.githubusercontent.com/u/1390888?s=100&v=4)](https://github.com/nanjingboy/) | [![jsNewbee](https://avatars3.githubusercontent.com/u/20449400?s=100&v=4)](https://github.com/js-newbee/) | [![Qiyu8](https://avatars2.githubusercontent.com/u/15245051?s=100&v=4)](https://github.com/Qiyu8/) | [![Garfield550](https://avatars2.githubusercontent.com/u/3471836?s=100&v=4)](https://github.com/Garfield550/) | [![zhiqingchen](https://avatars3.githubusercontent.com/u/1876158?s=100&v=4)](https://github.com/zhiqingchen) |
| :---------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
|                                [nanjingboy](https://github.com/nanjingboy/)                                 |                                 [jsNewbee](https://github.com/js-newbee/)                                 |                                 [Qiyu8](https://github.com/Qiyu8/)                                 |                                [Garfield Lee](https://github.com/Garfield550/)                                |                                [zhiqingchen](https://github.com/zhiqingchen)                                 |

---

## docs/team/role-collaborator.mdx

---
title: 合作者
---

import { ListPage } from './components'

负责维护 [NervJS/taro](https://github.com/NervJS/taro)、[NervJS/taro-ui](https://github.com/NervJS/taro-ui) 仓库，帮助用户和初级贡献者，参加具体工作组为当前项目贡献代码和文档，评审和评论 issues 和 pull requests。

## 成员

<ListPage type="role" role="173f3699-4a3f-4af4-bd8d-c8b47a0d2ca9" name="合作者" full />

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="role" role="173f3699-4a3f-4af4-bd8d-c8b47a0d2ca9" name="合作者" alumni full />

---

## docs/team/role-committee.mdx

---
title: 技术委员会
---

import { ListPage } from './components'

负责技术方向、项目管理、项目发布、贡献政策、仓库托管、行为准则、维护合作者列表，定期参加 TSC 活动，主席（主持人）会在线上主持活动，并做好活动记录并公布。

## 成员

<ListPage type="role" role="71ff4a6e-5b97-4c7d-937b-806d1dd662ac" name="技术委员会" full />

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="role" role="71ff4a6e-5b97-4c7d-937b-806d1dd662ac" name="技术委员会" alumni full />

---

## docs/team/role-committer.mdx

---
title: 贡献者
---

import { ListPage } from './components'

感谢为 Taro 贡献过代码的每一位开发者。

## 成员

<ListPage type="role" role="7c557d2c-e604-45a3-8680-05867408143c" name="贡献者" full />

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="role" role="7c557d2c-e604-45a3-8680-05867408143c" name="贡献者" alumni full />

---

## docs/team/role-triage.mdx

---
title: 社区助手
---

import { ListPage } from './components'

负责 taro 相关仓库新 issues 的维护，负责给 issues 或 pull requests 打标签，以及负责评论、关闭和重新开启 issue 或 pull request，负责将 bug 或 feature 分流给具体工作组。

## 成员

<ListPage type="role" role="47959165-618b-4fa7-83a9-6a25a2c82b56" name="助手" full />

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="role" role="47959165-618b-4fa7-83a9-6a25a2c82b56" name="助手" alumni full />

---

## docs/team/team-community.mdx

---
title: 社区团队
---

import { ListPage } from './components'

负责 Taro 生态与运营，和 Taro 社区的运营推广工作。

## 成员

<ListPage type="team" team="e3ff4b01-9ab6-482a-abfe-feb19a421e73" full />

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="team" team="e3ff4b01-9ab6-482a-abfe-feb19a421e73" alumni full />

---

## docs/team/team-core.mdx

---
title: Core 团队
---

import { ListPage } from './components'

## 成员

<ListPage type="team" team="1db056fc-165e-4209-bf2d-442530065e78" full />

### Cli 工作组

主要负责 Taro 命令行工具的开发和维护工作。

### Compile 工作组

负责维护、优化小程序和 H5 的编译系统。

### Runtime 工作组

负责维护小程序运行时系统。

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="team" team="1db056fc-165e-4209-bf2d-442530065e78" alumni full />

---

## docs/team/team-innovate.mdx

---
title: 创新团队
---

import { ListPage } from './components'

Taro 创新特新、新方向探索，如 wasm、rust、vite、flutter、electron 等。

## 成员

<ListPage type="team" team="f154527a-8950-4e92-8f3e-49ef5cd3e866" full />

### UI 框架兴趣组

TaroUI、NutUI 等 UI 库和其他类型生态工具的研发与管理。

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="team" team="f154527a-8950-4e92-8f3e-49ef5cd3e866" alumni full />

---

## docs/team/team-platform.mdx

---
title: Platform 团队
---

import { ListPage } from './components'

负责 App、Web、Open Harmony 等跨平台开发。

## 成员

<ListPage type="team" team="938a3f82-1e7e-4993-8d16-3ee2022706d1" full />

### H5 工作组

负责维护 H5 的各模块，包括路由、组件库、API 库等。

### React Native 工作组

负责 React Native 适配核心、组件库、API 库等部分的开发。

### Open Harmony 工作组

负责鸿蒙适配核心、组件库、API 库等部分的开发。

### 快应用工作组

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="team" team="938a3f82-1e7e-4993-8d16-3ee2022706d1" alumni full />

---

## docs/team/team-plugin.mdx

---
title: Plugin 团队
---

import { ListPage } from './components'

负责维护各 Taro 插件，包括端平台插件，React、Vue DevTools 等。

## 成员

<ListPage type="team" team="f154527a-8950-4e92-8f3e-49ef5cd3e866" full />

### 端平台插件工作组

负责维护各端平台插件，包括对微信、支付宝、百度、字节跳动、QQ、京东、企业微信、飞书、快手、钉钉、小红书等厂商小程序的适配等。

### 混合开发工作组

负责维护 Taro 与原生小程序的相互调用功能、Taro 开发原生插件等。

## 荣誉成员

我们也要感谢所有过去的成员，感谢他们的宝贵贡献！

<ListPage type="team" team="f154527a-8950-4e92-8f3e-49ef5cd3e866" alumni full />

---

## docs/CONTRIBUTING-GUIDE.md

---
title: 贡献指南
---

## 贡献代码

### 1. 环境准备

:::note
需要安装 [Node.js](https://nodejs.org/en/)（`18` 及以上版本）及 [pnpm 9](https://pnpm.io/zh/installation)

各版本 pnpm 与各版本 Node.js 之间的支持情况见 [pnpm 兼容性](https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7)
:::

首先把 Taro 仓库 fork 一份到自己的 Github，然后从个人仓库把项目 clone 到本地，项目默认是 `main` 分支。

然后依次在项目根目录运行以下命令：

```bash
# 安装依赖
$ pnpm i
# 编译构建
$ pnpm build
```

运行完上述命令后，环境已经准备好，此时可以新拉一条分支进行开发。

### 2. 开发与调试

Taro 由一系列子 npm 包组成，整体项目组织基于 **pnpm workspace**。

开发者可以单独修改、编译某个子包：

```bash
# 编译某个子包，[package-name] 为该子包的 package.json 里的 name 字段
$ pnpm --filter [package-name] run dev
```

开发过程中，一般会使用 **link** 的方式把需要调试的包软链到一个测试项目中，然后便可进行断点调试。开发者可以根据测试项目的包管理器以及自己的喜好选择使用 `内置命令` 或 [npm link](https://docs.npmjs.com/cli/v7/commands/npm-link) 或 [yarn link](https://yarnpkg.com/cli/link)（推荐）或 [pnpm link](https://pnpm.io/zh/cli/link) 。

**使用 `内置命令` 的具体示例如下：**

```bash
$ pnpm run debug --projectPath /Users/taro/testapp --packages @tarojs/shared,@tarojs/runtime
```

1. 此命令会自动 `link` 并启动编译 `packages` 参数中的 npm 包
2. 增加`--unlink`参数可批量 unlink

**使用 `yarn link` 的具体示例如下：**

1. 进入需要调试的子包的根目录，然后执行 `yarn link`。
2. 进入测试项目的根目录，然后执行 `yarn link`。（注意被调试的子包的版本要和测试项目中该依赖的版本保持一致）

**使用 `pnpm link` 的具体示例如下：**

情况一、测试项目 `package.json` 中有声明对该包的依赖

1. 进入需要调试的子包的根目录，然后执行 `pnpm link --global`。
2. 进入测试项目的根目录，然后执行 `pnpm link --global [package-name]`。

情况二、测试项目 `package.json` 中没有声明对该包的依赖，该依赖包是被某个 Taro 包间接依赖的，如 `@tarojs/runner-utils`。

1. 测试项目的 `package.json` 中新增 pnpm 配置并配置该依赖包的具体链接路径

```json
"pnpm": {
  "overrides": {
    "@tarojs/runner-utils": "/Users/.../taro/packages/taro-runner-utils"
  }
},
```

2. 执行 `pnpm i` 重新安装测试项目的依赖

在测试项目中创建好链接后，接下来就可以启动项目编译。注意如果是编译 H5 或小程序时，请提前关闭依赖预编译配置：

```json
// /demo/config/dev.js
compiler: {
  type: "webpack5",
  prebundle: {
    enable: false,
  }
}
```

接下来在需要被调试的包中加入断点，**运行时代码**可以在各端的开发工具（小程序开发者工具、Chrome...）中断点调试，而**编译时**的代码需要使用 VSCode debugger 进行断点调试，请参考 [《单步调测》](./debug-config)。

### 3. 新增/删除依赖

推荐遵循的依赖治理规范：

- 尽量把子包用到的 `dependencies` 和 `devDependencies` 安装在子包。
- TypeScript、各种 Lint 工具、Rollup 等用于治理 Taro 项目的依赖推荐安装在主包。
- 如果子包是插件类项目，使用 `peerDependencies` 声明实际项目中肯定会安装的依赖。

```bash
# 在根目录新增依赖
$ pnpm add -wD <dependency>
# 在根目录删除依赖
$ pnpm remove -wD <dependency>
# 为某个子包（如 @tarojs/cli）新增一个依赖
$ pnpm --filter @tarojs/cli add <dependency>
# 为某个子包（如 @tarojs/cli）删除一个依赖
$ pnpm --filter @tarojs/cli remove <dependency>
# 为所有子包新增一个依赖
$ pnpm -r --filter=./packages/* add <dependency>
# 为所有子包删除一个依赖
$ pnpm -r --filter=./packages/* remove <dependency>
# 删除根目录的 node_modules 和所有 workspace 里的 node_modules
$ npm run clear-all
```

### 4. 单元测试

`package.json` 中设置了 `test:ci` 命令的子包都配备了单元测试。

开发者在修改这些包后，请运行 `pnpm --filter [package-name] run test:ci`，检查测试用例是否都能通过。

同时，在开发一些重要功能后，也请抽时间补上对应的测试用例。

**注意：**

`@tarojs/mini-runner`、`@tarojs/webpack-runner`、`@tarojs/webpack5-runner` 使用了 `snapshot`（测试结果快照）。在修改这两个包或其它一些包时，有可能导致这些快照失效，从而通过不了测试。当你修改了这两个包、或 Github CI 提示这些包的测试用例出错时，请运行 `pnpm --filter [package-name] runupdateSnapshot` 更新 snapshot 后重新提交。

### 5. 代码风格

- `JavaScript`：JavaScript 风格遵从 [JavaScript Standard Style](https://github.com/standard/standard)。
- `TypeScript`：TypeScript 风格也是 [JavaScript Standard Style](https://github.com/standard/standard) 的变种，详情请看相关包目录下的 `eslint.json` 和 `tsconfig.json`。
- 样式：遵循相关包目录下的 `.stylelintrc` 风格。

### 6. 提交 commit

整个 Taro 仓库遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，在输入 commit message 的时候请务必遵从此规范。

### 7.提交 Pull Request

> 如果对 PR（Pull Request）不了解，请阅读 [《About Pull Requests》](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

完成开发后，推送到自己的 Taro 仓库，就可以准备提交 Pull Request 了。

提交 PR 前请阅读以下注意事项：

1. 保证 `npm run build` 能够编译成功。
2. 保证代码能通过 ESLint 测试。
3. 当相关包含有 `npm test:ci` 命令时，必须保证所有测试用例都能够通过；
4. 当相关包有测试用例时，请给你提交的代码也添加相应的测试用例；
5. 保证 commit 信息需要遵循 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)。
6. 如果提交到代码非常多或功能复杂，可以把 PR 分成几个 commit 一起提交。我们在合并时会会根据情况 squash。
7. PR 作者可以选择加入到 Taro 开发者微信群，方便合并 PR 和技术交流。

### 8. 发布测试版本

提交 PR 后，开发者可以在开发分支上发布测试版本到 npm。部分难以在本地验证的功能可以使用这种方式进行验证。

1. 确保分支名以 `feat/` 或 `chore/` 开头。
2. 在 Taro 项目根目录执行命令：

```bash
# 更新 workspace 内所有子包的版本号，如 pnpm version 3.6.22-alpha.0
$ pnpm version <version>
```

3. 执行 `git commit --amend` 命令，手动修改最新一个 commit 的 commit message，加上 `--tag=<tag>`（此 tag 代表发布的 npm tag）。如发布 alpha 版本：`chore(release): publish 3.6.22-alpha.0 --tag=alpha`。
4. 提交修改到远程仓库，将会触发 Github CI 的发布流程。

### 9. 文档

当提交涉及新增特性、Breaking Changes 或重要修改时，请及时新增、修改对应的文档。

关于文档的开发请阅读下一章节：《贡献文档》。

### 10. Rust 部分

Taro 仓库里有部分使用 Rust 开发的子包，在开发、调试、测试这些包时有不一样的流程。

Rust 代码存放在 `crates` 文件夹下，使用 Cargo workspace 管理，目前包括 NAPI bindings 和若干 SWC 插件。

开发前请使用 `rustup` 安装 Rust 工具链。

#### NAPI bindings

在根目录执行 `pnpm build:binding:debug` 或 `pnpm build:binding:release` 命令，会在 `crates/native-binding` 文件夹中编译出 binding 文件 `taro.[os-platform].node`。

然后可以执行单元测试：

```bash
$ pnpm --filter @tarojs/binding run test
```

或结合调用方执行集成测试。

#### SWC 插件

首先在项目根目录执行 `rustup target add wasm32-wasi` 命令安装 `wasm32-wasi` 的 `target`。

开发过程中可以使用 SWC 测试套件进行单元测试：

```bash
# 执行所有 SWC 插件的单元测试
$ cargo test-swc-plugins
# 执行某个 SWC 插件的单元测试
$ cargo test -p [package-name]
```

功能完成后可以编译出 `.wasm` 文件，联合调用方进行集成测试：

```bash
# 编译所有 SWC 插件
$ cargo build-swc-plugins
# 编译某个 SWC 插件
$ cargo build -p [package-name]
```

Cargo workspace 会把编译产物输出到根目录的 `target` 文件夹中。进行集成测试时，需要手动把 `.wasm` 产物软链到目标文件夹，而 Github CI 在正式发布时会自动拷贝产物到正确的文件夹中。

如对 `@taorjs/helper` 进行集成测试时，会把 `target/wasm32-wasi/release/swc_plugin_xxx.wasm` 文件的软链到 `packages/taro-helper/swc/swc_plugin_xxx.wasm`。

## 贡献文档

当阅读时遇到明显的错误，开发者可以点击每篇文档最下方的 `Edit this page` 按钮，即会打开 Github 的编辑界面。开发者对文档进行编辑后，就可以提交一个 Pull Request。

如果是较复杂的修改，可以按以下步骤进行操作：

#### 1. fork & clone

1. fork [taro-docs](https://github.com/NervJS/taro-docs) 仓库
2. clone 个人仓库的 taro-docs 至本地：

```bash
git clone https://github.com/{your github name}/taro-docs.git
```

#### 2. 编译预览

```bash
$ pnpm install
$ pnpm run start
```

#### 3. 修改、新增对应文档

> 文档支持 `md` 和 `mdx` 后缀，语法详见 [Docusaurus 官网](https://docusaurus.io/docs/next/markdown-features)

1. 修改文档

进入 `docs` 目录，找到对应的文件进行编辑。（必须，对应**下个版本**的相关文档）

进入 `versioned_docs/version-3.x` 目录，找到对应的文件进行编辑。（可选，对应**3.x 版本**的相关文档。不修改则需要等待 Taro 团队更新文档版本后，才会同步到文档的 `3.x` 版本）

2. 新增文档

新增文档和修改文档类似，首先分别到 `docs` 和 `versioned_docs/version-3.x` 目录新增一个文件。然后在 `sidebars.js` 和 `versioned_sidebars/version-3.x-sidebars.json` 文件中添加上述新增文件的路径。

#### 4. 提交 Pull Request

---

## docs/CONTRIBUTING.md

---
title: 贡献形式
---

正如我们在[《给开发者的信》](./join-in) 中所写的，我们非常欢迎各位开发者为 Taro 社区做出贡献。

贡献之前，请你花一些时间阅读以下内容，保证贡献是符合规范并且能帮助到社区。

> “Taro 社区如何运作？我可以怎样参与？”

Taro 接受各种形式的贡献，无论是提交一个重大改动，还是反馈一个问题或参加一次讨论，都能强化 Taro 的网络效应，让 Taro 变得越来越好用。

接下来，我们整理了 Taro 社区日常运营中常遇的各种细分情景。开发者可以从“参与讨论”、“提出问题”开始，一步一步融入社区，和 Taro 互相成就、共同成长。

### 参与讨论

可以到 [Taro 论坛](https://github.com/NervJS/taro/discussions) 的对应板块参与讨论。

Taro Github 上不断地产生着 [Issues](https://github.com/NervJS/taro/issues) 和 [Pull Request](https://github.com/NervJS/taro/pulls)，也非常欢迎各位开发者 Review 并参与讨论。

### Bug 反馈

请使用 [Issue 生成工具](https://issue.taro.zone/) 提交 Bug 反馈，并在上尽可能详细地提供一切必要信息，最好能附上一个可复现的 Demo。

一般情况下，**信息提供得越完整，响应时间越短**。

### Feature Request

如果你有一个 Feature Request，请到[论坛](https://github.com/NervJS/taro/discussions/categories/feature-request)新建一条帖子进行描述。

Taro 会收集重要的 Feature Requests，在 [《来为 Taro 的 Feature Request 投票吧！》](https://github.com/NervJS/taro/issues/6997) 中进行公示，开发者可以根据需要进行投票，需求强烈的特性会被**优先支持**。

### 修改文档

文档是开发者与框架沟通的桥梁，但文档一直以来是 Taro 的弱项。一方面我们会不断完善文档，另一方面也希望社区能协助我们把文档做好。

在修改之前请先阅读[《贡献指南》](./CONTRIBUTING-GUIDE#贡献文档)，它介绍了 Taro 文档的仓库地址、如何修改等信息。

### 新想法

无论是 Taro 团队内部还是社区第三方开发者，在为 Taro 提交一个重大特性时，都必须按照 Taro 的 [RFC（Request For Comment）机制](https://github.com/NervJS/taro-rfcs) 进行操作，经过社区讨论完善后再进行代码的提交。

因此如果你对 Taro 的发展有新的想法，如实现一个重要功能、拓展新的使用场景等，需要先撰写对应功能的 **RFC** 文档，Taro 团队会进行一系列推送，在社区征集意见。

> 可以访问 [taro-rfcs 仓库](https://github.com/NervJS/taro-rfcs)提交 RFC 或者查看相关的 RFC。

### 提交代码

> “我可以从哪些方向入手？又应该怎么做？”

开发者可以从处理 Issues 入手，[这里](https://github.com/NervJS/taro/issues?q=label%3A%22good+first+issue%22+is%3Aissue+is%3Aopen)会列出所有被标记为 **good first issue** 的 Issues，这是社区专门留给新贡献者的相对简单的入门级 Issues。也可以通过通过 Label 筛选出 **Helper Wanted** 的 Issues，并且会被分为 `Easy`、 `Medium`、 `Hard` 三种难易程度。

除了帮忙处理 Issues，Taro 还有很多方向需要人力进行建设。

随着对 Taro 内部运行机制的熟悉，开发者可能会产生一些新的想法，例如希望开发一些新的功能等。这时需要先编写 RFC 文档，在社区谈论完善后再开始编码。

在开发之前请先阅读[《Taro 的仓库概览》](./codebase-overview)以及[《贡献指南》](./CONTRIBUTING-GUIDE#贡献代码)，它们介绍了 Taro 仓库构成、如何开发和提交规范等信息。

如果是首次提交代码，可参考文章：[如何参与大型开源项目-Taro 共建](/blog/2022-01-19-how-to-join-Taro)。

### 工具分享

在社区分享你的 “轮子”（例如**SDK**、**组件**、**插件**、**UI 库**、**开源项目**等）。

可以提交到 [Taro 物料市场](https://taro-ext.jd.com)、文档[《社区优质物料》](./treasures) 、仓库 [awesome-taro](https://github.com/NervJS/awesome-taro) 里，并提供完善的说明。然后在 [Taro 论坛](https://github.com/NervJS/taro/discussions/categories/%E7%94%9F%E6%80%81) 中添加一条讨论，与开发者进行沟通。

Taro 团队会定期甄选优秀的物料汇集成文，在 Taro 社区和各大有影响力的前端渠道进行推广。

### 案例分享

分享你的成功案例，可以提交到 [taro-user-cases](https://github.com/NervJS/taro-user-cases)（只需提交小程序码、二维码）。

### 文章投稿

分享你的经验（教程、文章等），可以给「Taro 社区」公众号投稿。

## Credits

感谢以下所有给 Taro 贡献过代码的开发者：

<a href="https://github.com/NervJS/taro/graphs/contributors"><img src="https://opencollective.com/taro/contributors.svg?width=890&avatarHeight=36&button=false" /></a>

---

## docs/join-in.md

---
title: 给开发者的信
---

> 2019.10.29

[Taro](https://taro.jd.com) 作为一个多端统一开发解决方案，自诞生以来一直保持着高速的发展态势， 从一个单一的开发框架发展到如今服务数万名开发者的多端解决方案，Taro 的成长有 Taro 团队不忘初心的努力，但更重要的是，离不开社区广大开发者的支持和帮助。

## 开源面临着什么

我们可以先来看一组数据。

Taro 从开源到当前行文为止，总共有 **5227** 次 commits，发布了 **235** 个版本，同时有 **3908** 个 issues 被开启，在 Taro 团队和社区的努力下，已经关闭了 **3296** 个，还有近 **600** 个 issues 有待解决，而每周 Taro 的新开启的 issues 也在 **50** 个左右；同时也收获了 **709** 个 PR，合入了 **656** 个。

除此之外，[Taro 交流社区](https://taro-club.jd.com/) 发帖数也达到 **3000** 个，每周以 **200** 个左右的增速在增加，而 [Taro 官方文档](/docs) 作为 Taro 入门及开发必备的资源，每周的访问量达到了 **20w**。

同时 Taro 还有 **20 余** 个 **500** 人左右的开发者交流微信群，以及 10 余个跟各小程序官方团队、各大公司研发团队的研讨群，每天 Taro 团队的开发人员都要遭受大规模的信息轰炸。

由此可见，Taro 目前拥有庞大且活跃的开发者社区，每天都会产生大量的信息，或是问题，或是建议，或是代码提交，或是有用的轮子。当社区变得越来越大后，如何进行有效的管理，提升社区整体的使用体验，便成了困扰 Taro 团队的问题，迫切需要在方案迭代与社区维护之间寻找到一个平衡点，以使 Taro 可以走得更远，发展得更好。

## 来自社区的力量

正所谓「单丝不成线，独木不成林」。

Taro 发展至今早已不在属于单一团队的项目了，而是整个 Taro 开发社区共同的项目。在 Taro 所属的 NervJS 组织的[成员](https://github.com/orgs/NervJS/people)中也已经加入了像华为、腾讯等其他公司的研发人员，共同建设项目，而整个社区的贡献者也达到了 **230** 位。

![WX20191010-150217@2x.png](https://img10.360buyimg.com/ling/jfs/t1/51716/38/13586/794849/5da564c9Ef215f164/cd2069db4f105db4.jpg)

而在所有的社区贡献中，需要特别感谢：

- [Tom Huang](https://github.com/nanjingboy/) ，独立为 Taro 开发所有端的 MobX 支持
- [jsNewbee](https://github.com/js-newbee/)，为 Taro 贡献了一个完整支持 小程序 + H5 + React Native 的[多端样例](https://github.com/qit-team/taro-yanxuan)
- [Chunlin](https://github.com/Qiyu8/)，来自华为，为 Taro 完善了快应用的转换支持

同时也感谢受邀成为 [TaroUI](https://github.com/NervJS/taro-ui) 核心维护人员的 [Garfield550](https://github.com/Garfield550) (小姐姐)、[梁音](https://github.com/yinLiangDream)、[ShaoQian Liu](https://github.com/lsqy)，他们将支撑起 TaroUI 的后续迭代与维护。

当然还有在社区中乐于助人、积极贡献的 [zacksleo](https://github.com/zacksleo) 、[Jay Fong](https://github.com/fjc0k)、[loveonelong](https://github.com/loveonelong)、[lolipop99](https://github.com/lolipop99)、[波仔糕](https://github.com/bozaigao)、[原罪](https://github.com/fwh1990)、[lentoo](https://github.com/lentoo/) 、[白领夏公子](https://taro-club.jd.com/user/%E7%99%BD%E9%A2%86%E5%A4%8F%E5%85%AC%E5%AD%90) 、YuanQuan、 tourze、 lingxiaoZhu 等等。

此外，还要感谢一直默默为 Taro 发展提供宝贵建议的研发团队：腾讯云、数字广东、腾讯 CDC、网易严选、华为开源团队、招联消费金融等等

社区的力量一直在支撑 Taro 前进。

所以，如今 Taro 面临的社区维护问题我们希望可以交给社区来进行自我管理。

## 期待你的加入

为了能够让社区更加高效、健康的运转下去，Taro 官方团队希望能够从社区中吸引开发者来共同维护，进行社区共建。

社区共建本次拟开放三大类角色，Taro 团队会为每一类角色设定一定门槛以及激励机制，从而保证整体质量。

### 能力完善

| 头衔       | 准入机制                                                                      | 权益                                                                                                            |
| ---------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 认证开发者 | 1. 为 Taro 实现过独立功能特性 <br/> 2. 代码 commit 数及代码贡献量达到一定标准 | 1. 获取 Taro 项目 developer 权限 <br/> 2. 来自 Taro 团队定期礼品与开源认证证书 <br/> 3. Readme 及官网、文档展示 |
| 代码贡献者 | 为 Taro 提交过 PR                                                             | Readme 及官网、文档展示                                                                                         |

### 社区管理

| 头衔                 | 准入机制                                                                                      | 权益                                                                                                                                                    | 职责                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 社区版主             | 1. 通过社区报名，遴选后产生 <br/> 2. 通过考察在 Taro 社区的活跃程度，由 Taro 团队进行定向邀请 | 1. Readme 及官网、文档展示 <br/> 2. 所提出特性会优先考虑在 Taro 版本中加入 <br/>3. 来自 Taro 团队定期礼品与开源认证证书                                 | 1. 负责社区各版块的管理<br/>2. 定期发布版块相关主题帖 <br/> 3. 定期收集版块问题帖子，进行汇总，反馈给 Taro 团队 <br/> 4. 对版块内帖子进行审核，剔除无用、违反法律等帖子                |
| GitHub Issues 管理员 | 1. 通过社区报名，遴选后产生 <br/> 2. 通过考察在 Taro 社区的活跃程度，由 Taro 团队进行定向邀请 | 1. Readme 及官网、文档展示 <br/> 2. 所提出特性会优先考虑在 Taro 版本中加入 <br/>3. 来自 Taro 团队定期礼品与开源认证证书 <br/> 4. 参与 GitHub robot 完善 | 1. 负责对 GitHub issues 答疑解惑以及打标分类 <br/> 2. 负责每周汇总 issues，并将 issues 提交到 Taro 团队 <br/>3. 负责每周精选 issues，并将数据同步到 Taro 社区                          |
| 交流群管理员         | 1. 通过社区报名，遴选后产生 <br/> 2. 通过考察在 Taro 社区的活跃程度，由 Taro 团队进行定向邀请 | 1. Readme 及官网、文档展示 <br/> 2. 所提出特性会优先考虑在 Taro 版本中加入 <br/>3. 来自 Taro 团队定期礼品与开源认证证书 <br/>4. 参与 群小助手 完善      | 1. 负责群内内容的管理，创造良好的沟通交流环境 <br/> 2. 负责群内问题的答疑解惑，引导开发者去社区、GitHub issues 获取答案 <br/>3. 负责操作社区群管理工具，整理群内问题，同步到 Taro 社区 |

### 知识构建

| 形式                  | 提交方式                                                                                                                                                                                          | 权益                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Taro 课程视频录制     | 通过邮箱发送个人信息及试讲视频<br/>邮箱：taro@jd.com<br/>内容：<br/>1. 个人信息：主攻技术方向、从业经历、公开分享经验等 <br/>2. 试讲视频链接通过遴选后，Taro 团队会与你联系沟通后续的视频录制事宜 | 成为 Taro 官方合作伙伴，视频课程经由 Taro 团队审核后，Taro 团队会全力协助进行运营推广 |
| Taro 开发实践文章撰写 | 通过邮箱投稿<br/>邮箱：taro@jd.com<br/>内容：<br/>1. md 文件（若为系列文章请添加大纲） <br/>2. 是否在 Taro 渠道首发通过遴选后，Taro 团队会与你联系沟通后续发布事宜                                | 成为 Taro 官方合作伙伴，文章经由 Taro 团队审核后，会通过 Taro 相关优质渠道进行发布    |

## 写在最后

Taro 作为一个多端开发解决方案，还处在初级的发展阶段，是一个发展中的方案，在不久的未来我们会有更多新的功能、特性推向开发者，甚至可能也有颠覆性的东西出现，让 Taro 成为一个更棒的方案。目前 Taro 已经翻过了一座座发展的山峰，但他正在向更高山峰迈进。

长风破浪会有时，直挂云帆济沧海。

## Taro 诚邀你的加入

联系邮箱：[taro@jd.com](mailto:taro@jd.com)
邮件标题：【共建】+ 你想说的话

---

## docs/ossa.md

---
title: 使用 OSSA(React) UI组件库
---

> 注意：OSSA 目前必须使用 taro 3.x 版本 + **React 技术栈** 进行开发。

[OSSA](https://ossa.miaode.com/) 提供了 30+ 组件涵盖了日常业务开发使用的大部分组件。

## 预览体验

<img src='https://yanxuan.nosdn.127.net/static-union/1656314230833368.png' width='200' height='200' alt='OSSA DEMO' />
<img src='https://yanxuan.nosdn.127.net/static-union/16594970359a4f1b.png' width='200' height='200' alt='OSSA DEMO' />

## 如何使用

### 安装

- 通过 Npm 或 Yarn 安装

#### 安装 Taro 脚手架

```bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现 sass 相关的安装错误，请在安装 mirror-config-china 后重试。

```bash
npm install -g mirror-config-china
```

#### 检查是否安装成功

```bash
taro -v
```

#### 项目初始化

使用命令创建模板：

```bash
taro init myApp
```

#### 安装 OSSA

```bash
npm install ossaui
```

### 使用

#### 全量引入

1. 在入口文件中引入样式文件

```javascript
// app.tsx
import 'ossaui/dist/style/index.scss'

// 或者在app.scss中引入
@import 'ossaui/dist/style/index.scss'
```

2. 在页面中引入`OSSA`组件

```javascript title="page/index.tsx"
import { OsButton } from 'ossaui'

const demo = () => {
  return (
    <OsButton type="primary" onClick={() => handleClick()}>
      按钮
    </OsButton>
  )
}
```

#### 按需引入

全量引用会导致所有组件都打包进最终的产物中，所以更推荐按需引入

> 注意，目前组件库的按需引入需要借助一个 babel 插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)来实现

1. 安装插件

```bash
npm i babel-plugin-import -D
```

2. 添加配置：

```javascript title="babel.config.js"
{
  // ...
  plugins: [
    [
      'import',
      {
        libraryName: 'ossaui',
        customName: (name) => `ossaui/lib/components/${name.replace(/^os-/, '')}`,
        customStyleName: (name) => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`,
      },
      'ossaui',
    ],
  ]
}
```

3. 在页面中使用`OSSA`组件

```javascript title="page/index.tsx"
import { OsButton } from 'ossaui'

const demo = () => {
  return (
    <OsButton type="primary" onClick={() => handleClick()}>
      按钮
    </OsButton>
  )
}
```

#### 关闭组件库的 prebundle

:::tip
在 taro3.5 之后的版本中，在开启 prebundle(默认开启)的情况下，会导致`ossaui`所引用的`@taro/components`组件没有被打进最终的 bundle 中，导致页面表现异常。
:::

为了解决上述问题，可以手动将`ossaui`排除在 prebundle 列表之外。

```javascript title="config/index.js"
module.exports = {
  // ...
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['ossaui'],
    },
  },
}
```

#### 输出 H5 时编译组件

:::tip
在输出 H5 时，组件的尺寸可能会表现异常
:::
为了解决上述问题，可以配在在输出 H5 时，对`ossaui`进行 postcss 处理。

```javascript title="config/index.js"
module.exports = {
  // ...
  h5: {
    // ...
    esnextModules: ['ossaui'],
  },
}
```

#### 定制化主题

创建定制化主题样式文件 `src/styles/variables.scss` ，样式变量覆盖表参考 [OSSA UI variables](https://github.com/NeteaseYanxuan/OSSA/blob/main/packages/ossa/src/style/_variable.scss)

```scss title="src/styles/variables.scss"
$--text-color-base: #333;
$--color-border-base: #d9d9d9;
```

然后需要在 `config/index.js` 文件中配置 `scss` 文件全局覆盖如：

```javascript
const path = require('path');
const config = {
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/styles/variables.scss')
    ]
  },
  // ...
```

### 预览

详细的 Taro 项目预览可参考[Taro 文档](https://docs.taro.zone/docs/GETTING-STARTED#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C)

```bash
// 微信小程序预览
npm run dev:weapp

// h5预览
npm run dev:h5
```

---

