## docs/template.md

---
title: 项目初始化模板
---

一直以来，在使用 Taro CLI 的 `taro init` 命令创建项目时，CLI 会提供若干内置模板给开发者选择。但是很多团队都有自己独特的业务场景，需要使用和维护的模板也不尽一致，因此 Taro 支持把项目模板打包成一个能力赋予给开发者。

`1.3.9` 对 CLI 的模板功能做了以下修改：

1. CLI 只保留最基础的 `default` 模板，其它模板被移除。
2. CLI 会从 CLI 全局配置中读取**模版源**配置项，然后从模板源拉取模板供开发者选择。
3. 开发者可以通过修改**模板源**来使用自己的模板。

## 模板源

模板源为 CLI 配置项的 **templateSource** 字段，可以使用 [taro config](./GETTING-STARTED#cli-%E9%85%8D%E7%BD%AE) 命令对其进行操作。

### 默认模版源

默认模板源为 [taro-project-templates](https://github.com/NervJS/taro-project-templates) 仓库，原本内置的模板都被抽离到此处。

### 配置模板源

模板源支持两种格式，**git 模板源** 和 **url 模板源**。

#### git 模板源

- GitHub - github:owner/name
- GitLab - gitlab:owner/name
- Direct - direct:url

```sh
# 初始化项目时可以使用 --clone 选项指定拉取远程模板时使用git clone
taro init --clone
```

#### url 模板源

指向某 zip 包的 url。

## 编写模板

### 模板组织格式

模板目录组织支持两种，分别是**单模板模式**和**模板组模式**。

#### 单模板模式

##### git

仓库根目录存在 package.json。

模板名为仓库名。

##### zip 包

zip 包解压出单文件夹，文件夹根目录包含 package.json。

模板名为 zip 包解压出的文件夹名。

![template](https://storage.jd.com/cjj-test/QQ20190717-154634.png)

#### 模板组模式

##### git

如[默认模板源](https://github.com/NervJS/taro-project-templates)，仓库根目录下存放着若干模板。

模板名对应根目录下所有文件夹名。

##### zip 包

zip 包解压出单文件夹，文件夹内包含若干模板。

模板名对应文件夹内所有文件夹名。

![templates](https://storage.jd.com/cjj-test/QQ20190717-152451.png)

### 静态模板

静态模板表示不带逻辑的模板，CLI 会遍历整个模板文件夹，把文件一一拷贝到目标位置。

### 动态模板

很多情况下需要为模板加入一些逻辑，从而根据不同的环境生成不同的模板内容。

开发者可以在模板根目录加入 **template_creator.js** 文件，文件对外 exports 包含 handler 、 basePageFiles 与 compiler 字段的对象：

```js {5,16} title="template_creator.js"
const path = require('path')

function normalizePath (path) {
  return path.replace(/\\/g, '/').replace(/\/{2,}/g, '/')
}

function createWhenTs(err, params) {
  return params.typescript ? true : false
}
const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
  '/src/pages/index/index.jsx' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.jsx')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.jsx'))
    }
  },
  '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.css')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.css'))
    }
  },
}

const basePageFiles = ['/src/pages/index/index.jsx', '/src/pages/index/index.css']

module.exports = {
  handler,
  basePageFiles,
  compiler: ['Webpack5', 'Webpack4', 'Wite']
}
```

#### 模板语言

请使用 [Handlebars](https://handlebarsjs.com/) 作为模板语言，各模板文件都将接收到全局模板参数。

##### 默认全局模板参数（模板中可直接使用的变量）

| 变量        | 类型                                   | 说明                                         |
| :---------- | :------------------------------------- | :------------------------------------------- |
| projectName | string                                 | 项目名                                       |
| description | string                                 | 项目描述                                     |
| version     | string                                 | Taro CLI 版本                                |
| date        | string                                 | 模板创建时间戳                               |
| css         | 'None' or 'Sass' or 'Stylus' or 'Less' | 样式预处理工具                               |
| cssExt      | string                                 | 样式文件后缀                                 |
| typescript  | boolean                                | 是否使用 TS                                  |
| pageName    | string                                 | `taro create` 时传入的页面名称，默认 'index' |
| template    | string                                 | 模板名称                                     |
| framework   | 'React' or 'Preact' or 'Vue' or 'Vue3' | 框架名称                                     |
| compiler    | 'Webpack4' or 'Webpack5' or 'Vite'     | 编译模式名称                                 |
##### 例子

```handlebars
import { defineConfig{{#if typescript }}, type UserConfigExport{{/if}} } from '@tarojs/cli'
{{#if typescript }}import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'{{/if}}
```

#### handler 字段

handler 用于控制是否生成某文件，或给文件传入特定参数。

##### handler: object

| 属性     | 类型     | value    |
| :------- | :------- | :------- |
| 文件路径 | function | 处理函数 |

> 文件路径以 “/” 开头，代表模板文件夹根目录

##### 处理函数

params: object

:::info
`params.pageDir` Taro v4.0.0+ 开始支持

`params.subPkg` Taro v4.0.0+ 开始支持
:::

| 属性         | 类型                                   | 说明                                          |
| :----------- | :------------------------------------- | :-------------------------------------------- |
| projectName  | string                                 | 项目名                                        |
| description  | string                                 | 项目描述                                      |
| version      | string                                 | Taro CLI 版本                                 |
| date         | string                                 | 模板创建时间戳                                |
| css          | 'none' or 'sass' or 'stylus' or 'less' | 样式预处理工具                                |
| typescript   | boolean                                | 是否使用 TS                                   |
| pageName     | string                                 | 页面名称                                      |
| pageDir      | string                                 | 页面路径（相对于「页面目录」的相对路径） taro create 时 --dir 传入的值|
| subPkg       | string                                 | 分包页面路径（相对于「src目录」的相对路径） taro create 时 --subpkg 传入的值|
| template     | string                                 | 模板名称                                      |
| templatePath | string                                 | 模板路径                                      |
| projectPath  | string                                 | 目标路径                                      |
| period       | 'createApp' or 'createPage'            | `taro init` 创建项目或 `taro create` 创建页面 |

return: boolean/object

:::info
`object.setSubPkgName` Taro v4.0.0+ 开始支持
:::

返回值说明

| 取值   | 说明                                                     |
| :----- | :------------------------------------------------------- |
| true   | 创建文件                                                 |
| false  | 不创建文件                                               |
| object | 创建文件，返回的 object 的字段会被合并到全局模板参数中。 |

若返回值为 object，其中某些属性有特殊作用：

| 属性        | 类型    | 说明                     |
| :---------- | :------ | :----------------------- |
| setPageName | string  | 将替换当前文件的输出路径 |
| changeExt   | boolean | 是否自动替换文件后缀     |

##### 例子

当用户选择了使用 typescript 时，才生成 **global.d.ts** 和 **tsconfig.json** 文件。

```js title="template_creator.js"
function createWhenTs(err, params) {
  return params.typescript ? true : false
}

const handler = {
  '/global.d.ts': createWhenTs,
  '/tsconfig.json': createWhenTs,
}

module.exports = { handler }
```

#### basePageFiles 字段

basePageFiles 告诉 CLI，当用户使用 `taro create` 命令创建页面时，创建以下文件。

##### 例子

结合 handler 字段，创建新页面。

当用户使用命令 `taro create --page=detail` 时，会创建 **/src/pages/detail/detail.jsx** 与 **/src/pages/detail/detail.css** 两个文件。

```js title="template_creator.js"
const path = require('path')

function normalizePath (path) {
  return path.replace(/\\/g, '/').replace(/\/{2,}/g, '/')
}

const handler = {
  '/src/pages/index/index.jsx' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.jsx')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.jsx'))
    }
  },
  '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.css')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.css'))
    }
  },
}

const basePageFiles = ['/src/pages/index/index.jsx', '/src/pages/index/index.css']

module.exports = {
  handler,
  basePageFiles,
}
```

### compiler 字段

:::info
Taro v4.0.0+ 开始支持
:::

compiler 告诉 cli 当前模版支持的编译器类型，该值是一个 `string[]`，目前 taro 支持的编译器类型有 `Webpack4、Webpack5、Vite`

---

## docs/version.md

---
title: Taro 版本说明
---

当前 Taro 已进入 3.x 时代，相较于 Taro 1/2 编译时架构，Taro 3 采用了重运行时的架构，让开发者可以获得完整的 React / Vue 等框架的开发体验。具体原理请参考 [《小程序跨框架开发的探索与实践》](https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247483770&idx=1&sn=ba2cdea5256e1c4e7bb513aa4c837834)。

### 最新版本

最新版本可在 [Taro Release](https://github.com/NervJS/taro/releases) 中查阅。

也可以在命令行输入命令查看：

```bash
npm info @tarojs/cli
```

### Taro 3.4

Taro 3.4 的主要改动是支持使用 Preact 和 Vue3.2 进行开发。

详情请参考 [《Taro 正式发布 3.4 版本 —— 全面支持 Preact 和 Vue3.2》](/blog/2022-01-20-Taro-3.4)。

### Taro 3.3

Taro 3.3 的主要改动是支持使用 HTML 标签进行开发。

详情请参考 [《Taro 3.3 alpha 发布：用 ant-design 开发小程序？》](/blog/2021-04-22-Taro-3.3-alpha)。

### Taro 3.2

Taro 3.2 新增了对 ReactNative 的支持。

详情请参考 [《Taro 3.2 版本正式发布：React Native 支持，王者归来》](/blog/2021-04-08-taro-3.2)。

### Taro 3.1

Taro 3.1 的主要改动是打造开放式架构，支持以插件的形式编译到任意小程序平台。

详情请参考 [《Taro 正式发布 3.1 版本》](/blog/2021-03-10-taro-3-1-lts)。

### Taro 1 / 2

如果你想使用 Taro 1/2，可以访问[文档版本](/versions)获得帮助。

### 版本信息

Taro 每个版本的详细发布信息可在 [Taro Release](https://github.com/NervJS/taro/releases) 中查阅。

### 开发计划

目前 Taro 团队的迭代重心在于 Taro 3，Taro 1 / 2 只会对重大问题进行修复，不会新增新特性。

Taro 每周会发布 **patch 版本**，进行小型特性新增和问题修复。

重大特性会首先通过 [Taro-RFC](https://github.com/NervJS/taro-rfcs) 进行公示与意见采集，然后经开发测试后，最终发布 **minor** 版本。

详细的开发计划可在 [Taro MileStones](https://github.com/NervJS/taro/milestones) 中查阅。

### 升级指南

如何从 Taro 1 / 2 升级到 Taro 3 请参考：[从旧版本迁移到 Taro Next](./migration)。

关于各版本间更详尽的迁移的指南请参考：[《Taro 版本升级权威指南》](/blog/2020-09-01-taro-versions)。

社区贡献的一键升级工具：[taro2-to-3](https://github.com/SyMind/taro2-to-3)，by @SyMind。

---

## docs/youshu.md

---
title: 接入腾讯有数无痕埋点能力
sidebar_label: 腾讯有数无痕埋点能力
---

Taro 引入了腾讯有数的微信小程序无痕埋点能力，为 Taro 的开发者提供真·零开发的 8 大无痕埋点能力以及自定义埋点能力，包含**小程序启动、显示、隐藏、页面浏览、页面离开、分享、下拉刷新、上拉触底**等**八大自动化埋点能力**以及搜索、商品归因等**定制化埋点**，以及经营分析、直播分析、导购分析等能力。

## 腾讯有数简介

[腾讯有数](https://youshu.tencent.com/)是由[腾讯智慧零售](https://lingshou.tencent.com)推出，为品牌商、零售商打造的数据分析与管理平台，融合腾讯数据、技术与生态优势，提供全链路经营数据分析、消费者洞察、精准营销等能力，让企业经营更“有数”。

更多介绍请关注：[https://mp.zhls.qq.com/youshu-docs/start/youshu_intro.html](https://mp.zhls.qq.com/youshu-docs/start/youshu_intro.html)

## 功能介绍

腾讯有数 & Taro 合作开发的微信小程序模板，可以快速的通过 `taro init myApp` 选择 `default-youshu` 模板即可快速拥有无痕埋点能力，无需任何开发即可拥有小程序启动、显示、隐藏、页面浏览、页面离开、分享、下拉刷新、上拉触底等八大自动化埋点能力。

## 零开发快速体验指南

> 需要升级 Taro 到 2.x 或 3.x

1. `taro init myApp`
2. 选择`default-youshu`模板
3. `npm run dev:weapp`
4. 微信小程序开发者工具控制台即可看到 8 大行为日志上报
5. 访问 [https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill](https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill) 申请有数数据查看权限

> 通过上述流程已经让你的微信小程序拥有了 8 大用户行为埋点的体验能力，体验完成后，只需要更换有数的 Token 和微信小程序 appid，即可拥有有数的正式版功能。正式账号获取路径：https://docs.qq.com/form/fill/DUkZHalR0RUJCVkVj#/fill

## 现存小程序的有数 SDK 接入

### 1. 安装

- 通过 npm 安装 SDK
  `npm i sr-sdk-wxapp`
- 在 app.jsx 中通过 import 引入 SDK
  `import sr from 'sr-sdk-wxapp'`

### 2. 添加可信域名

登录[微信公众平台](https://mp.weixin.qq.com/)，进入<开发><开发设置><服务器域名>，将 `https://zhls.qq.com` 添加为 request 合法域名。

> 在开发环境中还有 SDK 版本检查，所以会提示 `https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com 不在以下 request 合法域名列表中` , 可以通过设置不校验域名来处理。

### 3. init 初始化

`init(options: object)`

配置接口，用来调整 SDK 的基础机制。应该在`App()`调用之前调用。

首次调用初始化 SDK，再次调用覆盖之前传入的配置，可多次调用。

| 名称              | 类型   | 必填 | 描述                                                                                                                              |
| :---------------- | :----- | :--- | :-------------------------------------------------------------------------------------------------------------------------------- |
| appid             | string | Y    | 微信小程序 appId                                                                                                                  |
| token             | string | Y    | 通过接入申请后，有数提供的凭证字符串                                                                                              |
| usePlugin         | bool   |      | 是否使用了小程序插件，默认是：false                                                                                               |
| debug             | bool   |      | 是否打印日志，默认是：false                                                                                                       |
| openSdkShareDepth | bool   |      | 是否打开分享链路记录功能，默认值为 false，打开后，将记录用户分享链路 A->B->C->D                                                   |
| serverUrl         | string |      | 传入自定义的后台上报接口，若传入则 token 将无意义， 默认是：'https://zhls.qq.com/api/report'                                      |
| trackApp          | bool   |      | 是否开启自动跟踪 APP 的曝光事件（APP 相关预置事件，如 APP - onLuanch），默认是：true                                              |
| proxyPage         | bool   |      | 是否开启自动代理 Page，默认是：false。SDK 负责上报页面的 browse 、leave、share 等事件可以使用 sr.page 代替 Page(sr.page(options)) |
| autoStart         | bool   |      | 是否开启自动开始上报，默认是：false，open_id 无法自动获取，一般在 login 业务之后手动调用 sr.startReport 方法开启上报              |

### 4. 示例

```javascript
import sr from 'sr-sdk-wxapp'
sr.init({
  /**
   * 有数 - ka‘接入测试用’ 分配的 app_id，对应的业务接口人负责
   */
  token: 'bi72fccc7184ef4xxx',
  /**
   * 微信小程序appID，以wx开头
   */
  appid: 'wx195745e8e342bxxx',
  /**
   * 如果使用了小程序插件，需要设置为 true
   */
  usePlugin: false,
  /**
   * 开启打印调试信息， 默认 false
   */
  debug: true,
  /**
   * 建议开启-开启自动代理 Page， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   * 可以使用 sr.page 代替 Page(sr.page(options))
   * 元素事件跟踪，需要配合 autoTrack: true
   */
  proxyPage: true,
  /**
   * 建议开启-开启组件自动代理， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   */
  proxyComponent: true,
  // 建议开启-是否开启页面分享链路自动跟踪
  openSdkShareDepth: true,
  // 建议开启-元素事件跟踪，自动上报元素事件，入tap、change、longpress、confirm
  autoTrack: true,
})
```
