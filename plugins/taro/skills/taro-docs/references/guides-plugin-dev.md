## docs/platform-plugin/how.md

---
title: 编写端平台插件
---

扩展一个编译平台，需要编写一个 [Taro 插件](../plugin)，对编译时和运行时分别进行兼容。

## 端平台插件架构

### 插件目录组织

以 `@tarojs/plugin-platform-weapp` 为例：

    ├── src                      源码目录
    |   ├── index.ts             插件入口
    |   ├── program.ts           编译时入口
    |   ├── template.ts          模板处理逻辑
    |   ├── runtime.ts           运行时入口
    |   ├── runtime-utils.ts     运行时依赖工具
    |   ├── apis.ts              API 相关处理
    |   ├── apis-list.ts         API 列表
    |   ├── components.ts        组件列表
    |   └── components-react.ts  给 React 使用的组件类型
    ├── types                    类型
    ├── index.js                 编译时入口
    ├── tsconfig.json
    ├── rollup.config.json
    ├── package.json
    └── README.md

### 架构图

![](https://storage.jd.com/cjj-pub-images/platform-plugin-construct.png)

## 编译时

处理编译相关操作，如 Webpack 配置、模板生成规则等。

### 一、编写 Taro 插件

前置阅读：[【如何编写一个 Taro 插件】](../plugin-custom)。

首先我们需要编写一个 Taro 插件来注册我们的编译平台，如：

```js title="index.ts"
export default (ctx) => {
  ctx.registerPlatform({
    name: 'weapp',
    useConfigName: 'mini',
    async fn(arg) {
      // ...
    },
  })
}
```

#### ctx.registerPlatform(options: object)

注册一个编译平台

##### options.name

`string`

平台名称，用于 CLI 编译命令。

如配置了 'xxx'，则编译此平台时使用的 CLI 命令为：

```shell
taro build --type xxx
taro build --type xxx --watch
```

##### options.useConfigName

`string`

把 Taro 编译配置中的指定字段纳入编译。

Taro 小程序相关配置默认放在 `mini` 字段下，因此一般情况配置 `usingConfigName: mini` 即可。

##### options.fn(arg)

`function`

端平台编译的入口函数，接受一个参数 `arg`，在此函数内我们可以开始编写端平台编译的逻辑。

###### arg

`object`

整合上述 [options.useConfigName](./how#optionsuseconfigname) 指定字段后的 Taro 编译配置，编译配置各字段详情请看[编译配置详情](../config-detail)。

### 二、编写平台类

接下来给上一节中提到的插件入口函数添加内容。

我们把编译时常用的逻辑抽象出了一个基类 [TaroPlatformBase](./platform-mini)，开发者可以[继承](./platform-mini#自定义平台类)于此基类，从而实现端平台的编译。

然后在插件入口函数中调用上述自定义平台类的编译接口：

```js title="index.ts"
import Weapp from './program'

export default (ctx) => {
  ctx.registerPlatform({
    name: 'weapp',
    useConfigName: 'mini',
    async fn(arg) {
      // 调用自定义平台类的 start 函数，开始端平台编译
      const program = new Weapp(ctx, config)
      await program.start()
    },
  })
}
```

## 运行时

处理运行时相关操作，如 API、组件、Taro runtime 逻辑等。

### 一、处理运行时入口

#### 1. 编写 runtime.ts

`runtime.ts` 是我们运行时的入口文件，`Webpack` 编译时会把它注入到 `app.js` 中进行引用。

例子：

```js title="runtime.ts"
import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import { hostConfig, components } from './runtime-utils'

mergeReconciler(hostConfig)
mergeInternalComponents(components)
```

```js title="runtime-utils.ts"
export * from './components'
export const hostConfig = {}
```

`runtime.ts` 主要负责：

- 使用 `mergeReconciler` 函数把自定义的 `hostConfig` 合并到全局 [Reconciler](./reconciler) 中。
- 使用 `mergeInternalComponents` 函数把自定义组件信息 [components.ts](./platform-mini#31-编写-componentsts) 合并到全局 `internalComponents` 组件信息对象中。

> 抽取 runtime-utils.ts 是为了方便其它插件引用

#### 2. 连接插件入口

为了让 `Webpack` 知道去哪里引用上述运行时入口文件，需要配置 `runtimePath`：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'
}
```

### 二、处理 API

在 Taro 中，用户需要从 `@tarojs/taro` 中引用 Taro 的内置 API 和 **Promise 化** 后的小程序 API。

```js
import Taro from '@tarojs/taro'

// 内置 API
Taro.getCurrentInstance()
// 小程序 API
Taro.request()
```

#### 1. 配置 initNativeApi

原始的 `@tarojs/taro` 包只提供了内置 API。我们需要通过配置 `Reconciler` 的 [initNativeApi](./reconciler#initnativeapi-taro) 选项，为全局 Taro 对象增加小程序的 API 和我们想要挂载在 Taro 对象上的 API。

```js title="apis-list.ts"
// 需要新增额外的原生 API 时，分拆一个单独的 `apis-list.ts` 文件能有利于维护。

// 同步 API
export const noPromiseApis = new Set(['getAccountInfoSync'])

// 异步 API，这些 API 都可以设置 `success`、`fail`、`complete` 回调，需要对它们进行 Promise 化。
export const needPromiseApis = new Set(['addCard'])
```

```js title="apis.ts"
import { processApis } from '@tarojs/shared'
import { noPromiseApis, needPromiseApis } from './apis-list'

declare const wx: any

export function initNativeApi (taro) {
  // 下文将详细介绍 processApis 函数
  processApis(taro, wx, {
    noPromiseApis,
    needPromiseApis
  })
  // 可以为 taro 挂载任意的 API
  taro.cloud = wx.cloud
}
```

```js title="runtime-utils.ts"
import { initNativeApi } from './apis'
export const hostConfig = { initNativeApi }
```

#### 2. processApis(taro, global, options)

##### 入参

| 参数    | 类型   | 说明                        |
| :------ | :----- | :-------------------------- |
| taro    | object | Taro 对象                   |
| global  | object | 小程序全局对象，如微信的 wx |
| options | object | 配置项                      |

###### options

| 属性            | 类型          | 说明           |
| :-------------- | :------------ | :------------- |
| noPromiseApis   | Set`<string>` | 新增的同步 API |
| needPromiseApis | Set`<string>` | 新增的异步 API |

上述 `processApis` 函数帮助我们做了三件事情：

1. 挂载所有平台公共的小程序 API 到 Taro 对象上
2. 挂载常用的小程序全局对象属性 到 Taro 对象上
3. 挂载用户传入的小程序 API 到 Taro 对象上

## 打包

插件使用 `Rollup` 进行打包，需要打包出以下文件：

| 入口文件                | 模式 | 必要 | 说明                                |
| :---------------------- | :--- | :--- | :---------------------------------- |
| src/index.ts            | cjs  | 是   | 插件入口，供 Taro CLI 解析          |
| src/runtime.ts          | es   | 是   | 运行时入口                          |
| src/runtime-utils.ts    | es   | 否   | 运行时工具集合，供继承的子类引用    |
| src/components-react.ts | es   | 否   | 有新增组件时需要实现，供 React 引用 |

注意，Taro 相关的包需要配置 `external`，以免重复打包：

```js title="rollup.config.js"
{
  external: ['@tarojs/shared', '@tarojs/service']
}
```

## 类型

Taro 核心库维护的类型可能没有包括当前插件新增的组件和 API，这时我们需要对 `@tarojs/taro` 和 `@tarojs/components` 进行[模块补充 (module augmentation)](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)。

创建一个类型定义文件：

```ts title="types/shims-iot.d.ts"
// 为支付宝 IOT 小程序拓展新增的 API 和组件定义
import { ComponentType } from 'react'
import Taro from '@tarojs/taro'

declare module '@tarojs/taro' {
  interface Ix {
    onCashierEventReceive(cb: any): void
  }
  interface TaroStatic {
    ix: Ix
  }
}

interface PosterProps {
  posid: string
  audible?: boolean
  onSuccess?: () => void
  onFail?: () => void
  onChange?: () => void
}

declare module '@tarojs/components' {
  export const Poster: ComponentType<PosterProps>
}
```

开发者在类型定义文件中引入此文件即可：

```ts title="global.d.ts"
/// <reference types="@tarojs/plugin-platform-alipay-iot/types/shims-iot" />
```

## Web 端平台插件

编译时常用的逻辑抽象出了一个基类 [TaroPlatformWeb](./platform-web)，开发者可以[继承](./platform-web#自定义平台类)于此基类，从而实现端平台的编译。

:::info
自 3.6 版本开始支持 Web 端平台插件，并提供 `@tarojs/plugin-platform-h5` 插件
:::

---

## docs/platform-plugin/index.md

---
title: 概述
---

## 端平台插件

自 `v3.1.0` 起，我们把对每个小程序平台的兼容逻辑抽取了出来，以 [Taro 插件](../plugin)的形式注入 Taro 框架，从而支持对应平台的编译。

> Web 端平台插件自 `v3.6.0` 开始支持

### Taro 内置的端平台插件

| 插件                           | 编译平台     |
| :----------------------------- | :----------- |
| @tarojs/plugin-platform-weapp  | 微信小程序   |
| @tarojs/plugin-platform-alipay | 支付宝小程序 |
| @tarojs/plugin-platform-swan   | 百度小程序   |
| @tarojs/plugin-platform-tt     | 抖音小程序   |
| @tarojs/plugin-platform-qq     | QQ 小程序    |
| @tarojs/plugin-platform-jd     | 京东小程序   |
| @tarojs/plugin-platform-h5     | Web 端       |

### 其它端平台插件

| 插件                                                                                            | 编译平台          |
| :---------------------------------------------------------------------------------------------- | :---------------- |
| [@tarojs/plugin-platform-weapp-qy](https://github.com/NervJS/taro-plugin-platform-weapp-qy)     | 企业微信小程序    |
| [@tarojs/plugin-platform-alipay-dd](https://github.com/NervJS/taro-plugin-platform-alipay-dd)   | 钉钉小程序        |
| [@tarojs/plugin-platform-alipay-iot](https://github.com/NervJS/taro-plugin-platform-alipay-iot) | 支付宝 IOT 小程序 |
| [@tarojs/plugin-platform-lark](https://github.com/NervJS/taro-plugin-platform-lark)             | 飞书小程序        |

### 端平台插件使用方法

1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: ['@tarojs/plugin-platform-alipay-iot'],
}
```

2. 编译为支付宝 IOT 端小程序

```shell
taro build --type iot
taro build --type iot --watch
```

## 背景

### 开放式框架

近年来业界推出的小程序平台越来越多，但 Taro 核心维护的平台只有 6 个（微信、支付宝、百度、头条、QQ、京东小程序），因此常常有同学提出能不能支持某某平台的 Feature Request。

基于目前的架构，对于单一平台的兼容性代码分布于 Taro 核心库的各个角落，涉及编译时与运行时等部分。支持一个新的平台需要改动所有的这些地方，开发复杂度高，同时社区也难以参与贡献。

为此我们萌生了打造一个**开放式框架**的想法。目标是可以通过插件的形式扩展 Taro 的端平台支持能力：

- 插件开发者无需修改 Taro 核心库代码，按照一定的规则即可编写出一个端平台插件。
- 插件使用者只需安装、配置端平台插件，即可把代码编译到指定平台。

端平台扩展又可以分为横向扩展和纵向扩展两种方式：

- 横向扩展

  扩展一个全新的编译平台，如美团小程序。

- 纵向扩展

  继承现有的端平台插件，扩展出新的编译平台，如 QQ 小程序插件继承于微信小程序插件。

#### 开放式编译平台架构图

![](https://storage.jd.com/cjj-pub-images/platform-plugin-all.png)

### 还可以做什么有意思的事

除了扩展新的编译平台，我们还可以通过继承于现有的端平台插件，来编写自定义的端平台插件，为平台的编译过程注入自定义逻辑：

> 使用插件 [@tarojs/plugin-inject](https://github.com/NervJS/taro-plugin-inject) 能为所有小程序平台快速新增 API、组件，调整组件属性等

#### 快速修复问题

由于小程序平台众多，而且它们也在不断地迭代，往往会出现 Taro 对某个小程序新推出的组件或 API 支持不及时的问题。这时开发者首先需要联系 Taro 团队，再等待我们跟进修复、发布新版本后才能正常使用，平均需要等待一周或两周的时间才能得到解决。

而基于开放式的编译平台架构，开发者能够通过继承目标的端平台插件，迅速开发出自定义端平台插件，完成对这些新组件或 API 的支持，无需等待 Taro 发布版本。

#### 属性精简

因为小程序组件的属性和事件都必须静态写死，不可以动态添加，所以 Taro 会把组件的所有属性和事件全部在模板里提前进行绑定。

但实际项目中很多情况下并不会使用到组件的所有属性和事件，循环这些冗余的属性和事件绑定也会占据很大一部分的体积，另外太多的事件绑定也会在一定程度上降低小程序的性能。

以下是 `View` 组件模板的伪代码：

```html
<template name="tmpl_0_view">
  <view
    hover-class="..."
    hover-stop-propagation="..."
    hover-start-time="..."
    hover-stay-time="..."
    animation="..."
    onTouchStart="..."
    onTouchMove="..."
    onTouchEnd="..."
    onTouchCancel="..."
    onLongTap="..."
    onAnimationStart="..."
    onAnimationIteration="..."
    onAnimationEnd="..."
    onTransitionEnd="..."
    disable-scroll="..."
    hidden="..."
    onAppear="..."
    onDisappear="..."
    onFirstAppear="..."
    style="..."
    class="..."
    onTap="..."
    id="..."
  >
    ...
  </view>
</template>
```

Taro 需要把 `View` 组件的所有属性和事件提前进行绑定，才能满足不同开发者的使用需求。但可能对于某位开发者来说，整个项目的 `View` 组件都没有使用到 `hover-stop-propagation` 这个属性，那么则可以考虑把它精简掉，不编译到 `View` 模板当中。

属性精简的功能同样可以通过实现一个自定义端平台插件来实现。但是需要提醒的是，对属性的精简可能会引起不必要的问题、使项目的维护变得困难，特别当项目变大，开发者众多时，需要谨慎设计和使用。

#### 欢迎共建

我们希望在开放式架构推出后，能激起社区各位开发者的创造力，一起为 Taro 生态创造新的端平台支持插件，或各种优秀的自定义端平台组件，期待您的参与和贡献！

---

## docs/platform-plugin/platform-mini.md

---
title: TaroPlatformBase
---

我们把编译时常用的逻辑抽象出了一个基类 `TaroPlatformBase`，开发者可以继承于此基类，从而实现端平台的编译。

例如我们创建一个微信小程序平台：

```js title="program.ts"
import { TaroPlatformBase } from '@tarojs/service'
export default class Weapp extends TaroPlatformBase {
  // ...
}
```

## 方法与属性

### constructor (ctx, config)

构造函数，接受两个参数。

| 参数   | 类型   | 说明           |
| :----- | :----- | :------------- |
| ctx    | object | 插件上下文对象 |
| config | object | Taro 编译配置  |

### ctx

`object`

插件上下文对象。

#### this.ctx.modifyWebpackChain

获取 WebpackChain，例子：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  modifyWebpackChain() {
    // 通过 this.ctx.modifyWepackChain 能获取到 WebpackChain 实例
    this.ctx.modifyWebpackChain(({ chain }) => {
      // chain.xxxx
    })
  }
}
```

### helper

`object`

存放着一系列工具函数，对应 `@tarojs/helper` 包的导出内容。

### config

`object`

编译配置对象。

### (abstract) platform

> 抽象属性，子类必须实现。

`string`

平台名称，如：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  platform = 'weapp'
}
```

### (abstract) globalObject

> 抽象属性，子类必须实现。

`string`

小程序挂载各种 API 的全局对象名称。如微信小程序的 `wx`，支付宝小程序的 `my`，例如：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  globalObject = 'wx'
}
```

### (abstract) runtimePath

> 抽象属性，子类必须实现。

`stirng` | `string[]`

小程序编译的运行时文件的解析路径，如：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'
}
```

### (abstract) fileType

> 抽象属性，子类必须实现。

`object`

平台的各种文件的后缀名，如：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  fileType = {
    // 模板文件后缀
    templ: '.wxml',
    // 样式文件后缀
    style: '.wxss',
    // 配置文件后缀
    config: '.json',
    // 脚本文件后缀
    script: '.js',
    // 【可选】渲染层脚本文件后缀，如微信小程序的 wxs，支付宝小程序的 sjs
    xs: '.wxs',
  }
}
```

### (abstract) template

> 抽象属性，子类必须实现。

`object`

[模板对象](./template)的实例。

### (optional) projectConfigJson

> 子类可选择是否进行设置。

小程序配置文件的名称。

如果子类有实现 `projectConfigJson`，则会自动拷贝此文件到 `dist` 目录下。

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  projectConfigJson = 'project.config.json'
}
```

### (optional) taroComponentsPath

> 子类可选择是否进行设置。

编译时对 `@tarojs/components` 包的 alias，下文将详细介绍。

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  taroComponentsPath = '@tarojs/plugin-platform-weapp/dist/components-react'
}
```

### setupTransaction

`setup` 阶段的事务钩子。

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.setupTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}
```

### buildTransaction

`build` 阶段的事务钩子。

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.buildTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}
```

### start ()

插件入口调用 `start` 方法开启编译，如：

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  // ...
}

export default (ctx) => {
  ctx.registerPlatform({
    name: 'weapp',
    useConfigName: 'mini',
    async fn({ config }) {
      const program = new Weapp(ctx, config)
      await program.start()
    },
  })
}
```

### generateProjectConfig (src, dist)

用于生成 project.config.json 此类项目配置文件。

| 参数 | 类型   | 默认值                | 说明                     |
| :--- | :----- | :-------------------- | :----------------------- |
| src  | string |                       | 项目源码中配置文件的名称 |
| dist | string | 'project.config.json' | 编译后配置文件的名称     |

例子：

```js
// 把用户编写的 `project.tt.json` 输出为 `project.config.json`
generateProjectConfig('project.tt.json')
// 把用户编写的 `project.swan.json` 输出为 `project.swan.json`
generateProjectConfig('project.swan.json', 'project.swan.json')
```

### recursiveReplaceObjectKeys (target, keyMap)

递归替换目标对象的 key 值。

| 参数   | 类型   | 说明           |
| :----- | :----- | :------------- |
| target | object | 目标对象       |
| keyMap | object | key 值替换规则 |

例子，支付宝小程序配置项 key 值和大多数小程序的规范不一样，需要进行对齐：

```js
// this.ctx.modifyMiniConfigs 能获取到小程序入口和页面配置文件的列表
this.ctx.modifyMiniConfigs(({ configMap }) => {
  const replaceKeyMap = {
    navigationBarTitleText: 'defaultTitle',
    navigationBarBackgroundColor: 'titleBarColor',
    enablePullDownRefresh: 'pullRefresh',
    list: 'items',
    text: 'name',
    iconPath: 'icon',
    selectedIconPath: 'activeIcon',
    color: 'textColor',
  }
  Object.keys(configMap).forEach((key) => {
    const item = configMap[key]
    if (item.content) {
      // 递归替换配置文件里的 key 值为目标对象的 key 值
      this.recursiveReplaceObjectKeys(item.content, replaceKeyMap)
    }
  })
})
```

## 自定义平台类

接下来将以扩展对微信小程序的编译支持为例，介绍如何创建一个自定义平台类。

### 1. 继承基类

继承 `TaroPlatformBase` 以实现 `Weapp` 类，并实现所有抽象属性、可选属性：

```js title="program.ts"
import { TaroPlatformBase } from '@tarojs/service'

const PACKAGE_NAME = '@tarojs/plugin-platform-weapp'

class Weapp extends TaroPlatformBase {
  // 平台名称
  platform = 'weapp'
  // 小程序全局对象
  globalObject = 'wx'
  // 小程序编译的运行时文件的解析路径
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  // 文件后缀
  fileType = {
    templ: '.wxml',
    style: '.wxss',
    config: '.json',
    script: '.js',
    xs: '.wxs'
  }
  template = new Template()
  // 小程序配置文件名称
  projectConfigJson = 'project.config.json'
  // 对 `@tarojs/components` 包的 alias 路径
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`

  constructor (ctx, config) {
    super(ctx, config)

    /**
    * 1. setupTransaction - init
    * 2. setup
    * 3. setupTransaction - close
    * 4. buildTransaction - init
    * 5. build
    * 6. buildTransaction - close
    */

    // 可以在 setup 的不同阶段注入自定义逻辑
    this.setupTransaction.addWrapper({
      init () {}
      close () {}
    })

    // 可以在 build 的不同阶段注入自定义逻辑
    this.buildTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}

export default Weapp
```

### 2. 处理模板逻辑

编写一个[模板类](./template)以处理模板逻辑，把它的实例设置为自定义平台类的 `template` 属性：

```js title="program.ts"
import { Template } from './template'

class Weapp extends TaroPlatformBase {
  // ...
  // 模板实例
  template = new Template()
}
```

### 3. 处理组件

我们把目前支持的 6 种小程序进行了组件和组件属性的比对，得出了一份最通用的组件以及其属性。访问 `Template` 类实例的 [internalComponents](./template#thisinternalcomponents) 属性可以获取到这些通用组件以及属性。

> 抽取这份通用组件的目的是为了在生成 B 小程序的模板时，尽量不会含有 A 小程序独有的组件或属性。

但随着各小程序平台发展，各平台都可能独自新增一些组件或属性。这时我们的端平台插件就需要通过修改 `template.internalComponents` 来处理这些特殊的组件或属性。

#### 3.1 编写 components.ts

`components.ts` 可以导出一个对象，以表示对 `internalComponents` 修改属性、新增属性或新增组件。

规范：

```js title="components.ts"
import { singleQuote } from '@tarojs/shared'

export const components = {
  // 组件名 CamelCase
  ScrollView:
    // 属性对象
    {
      // value 为空字符串时，代表不设置默认值
      'scroll-left': '',
      // 属性默认值为布尔值或数字时，value 写为字符串
      'enable-flex': 'false',
      'refresher-threshold': '45',
      // 属性默认值为字符串时，需要使用 singleQuote 函数进行包裹
      'refresher-default-style': singleQuote('black'),
      // 事件
      bindRefresherAbort: '',
    },
}
```

#### 3.2 合并到 template.internalComponents

编写好 `components.ts` 后，可以借助 `Template` 类实例的 `mergeComponents` 方法进行合并。

##### template.mergeComponents (ctx, patch)

合并组件补丁到 `this.internalComponents`。

| 参数  | 类型   | 说明           |
| :---- | :----- | :------------- |
| ctx   | object | 插件上下文对象 |
| patch | object | 组件补丁       |

例子：

```js title="program.ts"
import { components } from './components'

class Weapp extends TaroPlatformBase {
  constructor(ctx, config) {
    super(ctx, config)

    // 在 setup 阶段结束时，修改模板
    this.setupTransaction.addWrapper({
      close: this.modifyTemplate,
    })
  }

  modifyTemplate() {
    this.template.mergeComponents(this.ctx, components)
  }
}
```

```js title="components.ts"
export const components = {
  ScrollView: {
    'enable-flex': 'true',
    'refresher-threshold': '45',
  },
  Xyz: {
    a: '',
  },
}
```

假设 `template.internalComponent` 的默认值为：

```js
internalComponent = {
  ScrollView: {
    'scroll-left': '',
    'enable-flex': 'false',
  },
}
```

合并后的结果为：

```js
internalComponent = {
  ScrollView: {
    'scroll-left': '',
    // enable-flex 的默认值修改了
    'enable-flex': 'true',
    // 新增了 refresher-threshold 属性
    'refresher-threshold': '45',
  },
  // 新增了 Xyz 组件
  Xyz: {
    a: '',
  },
}
```

#### 3.3 直接修改 template.internalComponents

除了借助 `template.mergeComponents` 进行合并，我们也可以直接修改 `template.internalComponents`。

```js title="program.ts"
class Weapp extends TaroPlatformBase {
  modifyTemplate() {
    // 删除 Slider 组件里的一些属性
    this.modifySlider(this.template.internalComponents.Slider)
    // 改写 View 组件的属性对象
    this.template.internalComponents.View = {}
  }

  modifySlider(slider) {
    delete slider['block-size']
    delete slider['block-color']
  }
}
```

> 建议尽量编写一份 `components.ts` 进行 merge，而不是直接操作。因为运行时也需要合并后的组件信息，编写一份 `components.ts` 能进行复用。

#### 3.4 编写 components-react.ts

在 Taro 里使用 React，内置组件需要从 `@tarojs/components` 中引用后再使用。

```js
import { View } from '@tarojs/components'
```

但如果我们**增加了新的内置组件，再从 `@tarojs/components` 中引用就取不到这些新增的组件**。

因此当我们**新增加了组件**时，需要编写一份 `components-react.ts`，并配置 Webpack alias，供 **React** 引用。

例子：

1. 编写 `components-react.ts` 文件

```js title="components-react.ts"
// 原有的组件
export * from '@tarojs/components/mini'
// 新增的组件
export const Editor = 'editor'
export const OfficialAccount = 'official-account'
```

2. 设置 [taroComponentsPath](./platform-mini#optional-tarocomponentspath)

```js title="program.ts"
const PACKAGE_NAME = '@tarojs/plugin-platform-weapp'
class Weapp extends TaroPlatformBase {
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`
}
```

---

## docs/platform-plugin/platform-web.md

---
title: TaroPlatformWeb
---

我们把编译时常用的逻辑抽象出了一个基类 `TaroPlatformWeb`，开发者可以继承于此基类，从而实现端平台的编译。

例如我们创建一个 H5 平台：

```js title="program.ts"
import { TaroPlatformWeb } from '@tarojs/service'
export default class H5 extends TaroPlatformWeb {
  // ...
}
```

## 方法与属性

### constructor (ctx, config)

构造函数，接受两个参数。

| 参数   | 类型   | 说明           |
| :----- | :----- | :------------- |
| ctx    | object | 插件上下文对象 |
| config | object | Taro 编译配置  |

### ctx

`object`

插件上下文对象。

#### this.ctx.modifyWebpackChain

获取 WebpackChain，例子：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  modifyWebpackChain() {
    // 通过 this.ctx.modifyWepackChain 能获取到 WebpackChain 实例
    this.ctx.modifyWebpackChain(({ chain }) => {
      // chain.xxxx
    })
  }
}
```

### helper

`object`

存放着一系列工具函数，对应 `@tarojs/helper` 包的导出内容。

### config

`object`

编译配置对象。

### (abstract) platform

> 抽象属性，子类必须实现。

`string`

平台名称，如：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  platform = 'h5'
}
```

### (abstract) runtimePath

> 抽象属性，子类必须实现。

`stirng` | `string[]`

Web 端编译的运行时文件的解析路径，如：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  runtimePath = '@tarojs/plugin-platform-h5/dist/runtime'
}
```

### setupTransaction

`setup` 阶段的事务钩子。

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.setupTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}
```

### buildTransaction

`build` 阶段的事务钩子。

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.buildTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}
```

### start ()

插件入口调用 `start` 方法开启编译，如：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  // ...
}

export default (ctx) => {
  ctx.registerPlatform({
    name: 'h5',
    useConfigName: 'h5',
    async fn({ config }) {
      const program = new H5(ctx, config)
      await program.start()
    },
  })
}
```

## 自定义平台类

接下来将以扩展对 Web 端的编译支持为例，介绍如何创建一个自定义平台类。

### 1. 继承基类

继承 `TaroPlatformWeb` 以实现 `H5` 类，并实现所有抽象属性、可选属性：

```js title="program.ts"
import { TaroPlatformWeb } from '@tarojs/service'

const PACKAGE_NAME = '@tarojs/plugin-platform-h5'

class H5 extends TaroPlatformWeb {
  // 平台名称
  platform = 'h5'
  // Web 端运行时文件的解析路径
  runtimePath = `${PACKAGE_NAME}/dist/runtime`

  constructor (ctx, config) {
    super(ctx, config)

    /**
    * 1. setupTransaction - init
    * 2. setup
    * 3. setupTransaction - close
    * 4. buildTransaction - init
    * 5. build
    * 6. buildTransaction - close
    */

    // 可以在 setup 的不同阶段注入自定义逻辑
    this.setupTransaction.addWrapper({
      init () {}
      close () {}
    })

    // 可以在 build 的不同阶段注入自定义逻辑
    this.buildTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}

export default H5
```

### 2. 处理 API

在 Web 端环境中增减 API 其实并不难，在之前版本中开发者也可以通过配置为 `@tarojs/taro` 配置 alias 参数实现，在 `@tarojs/plugin-platform-h5` 中也是如此，通过将 runner 中相关的代码抽离实现的这一特性。

```ts
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      const alias = chain.resolve.alias
      alias.set('@tarojs/taro', require.resolve('./runtime/apis'))
    })
  }
```

虽然对 API 修改很容易，但是新增的 API 却不能通过 `Taro.newAPI` 的形式来使用，为此我们需要在插件打包时需要借助 exportNameOnly 插件输出当前插件支持的 API 列表。

```js title="rollup.config.js"
import exportNameOnly from '@tarojs/plugin-platform-h5/build/rollup-plugin-export-name-only'
{
  input: path.join(cwd, 'src/runtime/apis/index.ts'),
  output: {
    file: 'dist/taroApis.js',
    format: 'cjs',
    inlineDynamicImports: true
  },
  plugins: [exportNameOnly()]
}
```

并将 API 列表通过 `babel-plugin-transform-taroapi` 注册，帮助开发者将 `Taro.newAPI` 转换成对应语法使用。

```ts
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      const rules = chain.module.rules
      const script = rules.get('script')
      const babelLoader = script.uses.get('babelLoader')
      babelLoader.set('options', {
        ...babelLoader.get('options'),
        plugins: [
          [require('babel-plugin-transform-taroapi'), {
            packageName: '@tarojs/taro',
            apis: require(resolveSync('./taroApis'))
          }]
        ]
      })
    })
  }
```

### 3. 处理组件

使用 Taro 提供的组件仅仅需要在 runtime 中注册，并通过别名为不同前端 UI 框架配置所需的适配器（@tarojs/components/lib/[framework]）。

```ts
import '@tarojs/components/dist/taro-components/taro-components.css'

import { applyPolyfills, defineCustomElements } from '@tarojs/components/loader'

// Note: 3.6.3 开始，不再需要手动调用 applyPolyfills 和 defineCustomElements
applyPolyfills().then(function () {
  defineCustomElements(window)
})
```

如果需要新增组件可以考虑与 Taro 一样使用 stencil 或者其他 web-components 方案，当然也可以仅为单一框架提供组件库（例如 useHtmlComponents 模式，将组件库替换为 @tarojs/components-react）。需要注意的是，如果仅替换部分又不希望注册全部组件，可以手动注册所需组件并导出，比如 taro-pull-to-refresh 提供了下拉刷新的特性，如果未注册会导致相关特性无法使用。

```ts title="src/runtime/index.ts"
import { defineCustomElement } from '@tarojs/components/dist/components/taro-pull-to-refresh'

// Note: 3.6.3 开始，组件会自动注册，不需要手动调用 defineCustomElement
defineCustomElement()
```

对于下拉组件，也可以通过为 appConfig 新增 PullDownRefresh 配置替换使用，对于插件来说可以参考以下写法。

```ts
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      chain.plugin('mainPlugin')
        .tap(args => {
          args[0].loaderMeta ||= {
            extraImportForWeb: '',
            execBeforeCreateWebApp: ''
          }
          args[0].loaderMeta.extraImportForWeb += `import { PullDownRefresh } from '@tarojs/components'\n`
          args[0].loaderMeta.execBeforeCreateWebApp += `config.PullDownRefresh = PullDownRefresh\n`
          return args
        })
    })
  }
```

---

## docs/platform-plugin/reconciler.md

---
title: Reconciler
---

Taro 的运行时包括 DOM、BOM、React 兼容层、Vue 兼容层等内容，而不同的端平台或开发框架都有可能需要对 Taro 运行时进行侵入定制。

为了解耦，我们参考了 **React Reconciler** 的概念，外部可以通过提供一个自定义的 `hostConfig` 配置对象，对运行时进行定制。

> 遇到 hostConfig 的配置项不满足需求，需要进行扩展时，可以给 Taro 提交 PR ～

## hostConfig 配置

### appendChild (parent, child)

`DOMNode` 调用 `appendChild` 方法时触发。

| 参数   | 类型                  | 说明                 |
| :----- | :-------------------- | :------------------- |
| parent | DOMNode               | 父节点               |
| child  | DOMNode / TextElement | 要给父节点追加的节点 |

### removeChild (parent, child, oldChild)

`DOMNode` 调用 `replaceChild` 方法时触发。

| 参数     | 类型                  | 说明                       |
| :------- | :-------------------- | :------------------------- |
| parent   | DOMNode               | 父节点                     |
| child    | DOMNode / TextElement | 用来替换 oldChild 的新节点 |
| oldChild | DOMNode / TextElement | 被替换掉的原始节点         |

### insertBefore (parent, child, refChild)

`DOMNode` 调用 `insertBefore` 方法时触发。

| 参数     | 类型                  | 说明                 |
| :------- | :-------------------- | :------------------- |
| parent   | DOMNode               | 父节点               |
| child    | DOMNode / TextElement | 用于插入的节点       |
| refChild | DOMNode / TextElement | 将要插在这个节点之前 |

### removeAttribute (element, qualifiedName)

`DOMElement` 调用 `removeAttribute` 方法时触发。

| 参数          | 类型       | 说明                           |
| :------------ | :--------- | :----------------------------- |
| element       | DOMElement | 当前操作元素                   |
| qualifiedName | string     | 指定要从元素中移除的属性的名称 |

### setAttribute (element, qualifiedName, value)

`DOMElement` 调用 `setAttribute` 方法时触发。

| 参数          | 类型       | 说明                 |
| :------------ | :--------- | :------------------- |
| element       | DOMElement | 当前操作元素         |
| qualifiedName | string     | 表示属性名称的字符串 |
| value         |            | 属性的值/新值        |

### prepareUpdateData (data, page)

每次 Taro DOM 树更新，调用小程序 `setData` 前触发。

| 参数 | 类型            | 说明                                |
| :--- | :-------------- | :---------------------------------- |
| data | DataTree        | 将要 setData 的 Taro DOM 树数据结构 |
| page | TaroRootElement | 页面根元素                          |

### appendInitialPage (data, page)

Taro DOM 树初始化，第一次调用小程序 `setData` 前触发。在调用 `prepareUpdateData` 后立刻执行。

| 参数 | 类型            | 说明                                |
| :--- | :-------------- | :---------------------------------- |
| data | DataTree        | 将要 setData 的 Taro DOM 树数据结构 |
| page | TaroRootElement | 页面根元素                          |

### getLifecyle (instance, lifecyle)

小程序页面的生命周期被触发时调用。

| 参数     | 类型     | 说明                               |
| :------- | :------- | :--------------------------------- |
| instance | Instance | 用户编写的页面实例                 |
| lifecyle | string   | 小程序页面被触发的生命周期函数名称 |

需要返回 **function** 或 **function[]**，表示将要执行的函数。

例子：

```js
// 默认值：
// 直接取用户编写的页面实例中，对应的生命周期方法
getLifecyle (instance, lifecyle) {
  return instance[lifecyle]
}

// 在 React 中，
// 小程序触发 onShow，调用用户编写的 componentDidShow
// 小程序触发 onHide，调用用户编写的 componentDidHide
getLifecyle (instance, lifecycle) {
  if (lifecycle === 'onShow') {
    lifecycle = 'componentDidShow'
  } else if (lifecycle === 'onHide') {
    lifecycle = 'componentDidHide'
  }
  return instance[lifecycle]
}
```

### onTaroElementCreate (tagName, nodeType)

`DOMElement` 构造时触发。

| 参数     | 类型     | 说明                     |
| :------- | :------- | :----------------------- |
| tagName  | string   | 当前创建的元素的标签名   |
| nodeType | NodeType | 当前创建的元素的节点类型 |

| nodeType | 说明                        |
| :------- | :-------------------------- |
| 1        | ELEMENT_NODE                |
| 2        | ATTRIBUTE_NODE              |
| 3        | TEXT_NODE                   |
| 4        | CDATA_SECTION_NODE          |
| 5        | ENTITY_REFERENCE_NODE       |
| 6        | COMMENT_NODE                |
| 7        | PROCESSING_INSTRUCTION_NODE |
| 9        | DOCUMENT_NODE               |

### getPathIndex (indexOfNode)

`DOMNode` 获取 `path` 属性时触发。

| 参数        | 类型   | 说明                                   |
| :---------- | :----- | :------------------------------------- |
| indexOfNode | number | 当前节点在父节点 children 列表中的下标 |

需要返回一个 **string** 值，代表小程序按路径 `setData` 时的数组下标。

例子：

```js
// 默认值：
getPathIndex (indexOfNode) {
  return `[${indexOfNode}]`
}

// 百度小程序不需要 [] 包裹
getPathIndex (indexOfNode) {
  return indexOfNode
}
```

### getEventCenter(Events)

`Taro.eventCenter` 初始化值时触发。

| 参数   | 类型 | 说明                    |
| :----- | :--- | :---------------------- |
| Events |      | Taro 事件中心的构造函数 |

需要返回 Taro 事件中心的实例，其将会被赋值给 `Taro.eventCenter`。

例子：

```js
// 默认值：
getEventCenter (Events) {
  return new Events()
}

// 支付宝小程序中，
// 优先从小程序全局对象 my 中取出创建过的事件中心实例，避免分包时出现问题。
getEventCenter (Events) {
  if (!my.taroEventCenter) {
    my.taroEventCenter = new Events()
  }
  return my.taroEventCenter
}
```

### initNativeApi (taro)

引用 `@tarojs/taro` 包时触发。

| 参数 | 类型 | 说明      |
| :--- | :--- | :-------- |
| taro |      | Taro 对象 |

例子：

```js
initNativeApi (taro) {
  // 为 Taro 对象增加 getApp 方法
  taro.getApp = getApp
}
```

---

## docs/platform-plugin/template.md

---
title: 模板
---

Taro3 通过把 DOM 树的数据进行 `setData`，从而驱动模板（`<template>`）拼接来渲染出视图。

因此开发者可以看到编译后的代码中，页面模板文件的内容很简单，只是引用了公共模板 `base.xml`，所有组件的模板都在此文件中进行声明。

我们可以创建一个模板类，控制 `base` 模板的编译结果。

## 递归与非递归模板

我们把模板相关的处理逻辑封装成了基类。分别是给**支持模板递归**的小程序继承的 `RecursiveTemplate` 类，和给**不支持模板递归**的小程序继承的 `UnRecursiveTemplate` 类。

### 可递归模板

支持模板递归的小程序中，同一个模板能够不断调用自身，包括支付宝、头条、百度小程序。

`view_0` 引用 `container_0`，`container_0` 能再引用 `view_0`：

![](https://storage.jd.com/cjj-pub-images/recursive_temp.png)

### 非递归模板

不支持模板递归的小程序中，引用过的模板不能再调用自身，包括微信、QQ、京东小程序。

`view_0` 引用 `container_0`，`container_0` 不能再引用 `view_0`，只能引用新的 `view` 模板 `view_1`：

![](https://storage.jd.com/cjj-pub-images/unrecursive_temp.png)

## 模板基类

### this.Adapter

`object`

平台的模板语法关键词。

例子：

```js
// 声明了微信小程序模板语法关键词的 Adapter
class Template extends UnRecursiveTemplate {
  Adapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    xs: 'wxs',
    type: 'weapp',
  }
}
```

### this.isSupportRecursive

`boolean`

只读，是否支持模板递归。

### this.supportXS

`boolean`

默认值：false

是否支持渲染层脚本，如微信小程序的 wxs，支付宝小程序的 sjs。

### this.exportExpr

`string`

默认值：'module.exports ='

渲染层脚本的导出命令。

例子：

```js
// 支付宝小程序 sjs 脚本的导出命令为 ES 模式
class Template extends RecursiveTemplate {
  exportExpr = 'export default'
}
```

### this.internalComponents

`object`

Taro 内置组件列表，包括了相对通用的组件及其部分通用属性。

### this.focusComponents

`Set<string>`

可以设置 focus 聚焦的组件。

默认值：

```js
focusComponents = new Set(['input', 'textarea', 'editor'])
```

### this.voidElements

`Set<string>`

不需要渲染子节点的元素。配置后这些组件不会渲染子节点，能够减少模板体积。

默认值：

```js
voidElements = new Set([
  'progress',
  'icon',
  'rich-text',
  'input',
  'textarea',
  'slider',
  'switch',
  'audio',
  'live-pusher',
  'video',
  'ad',
  'official-account',
  'open-data',
  'navigation-bar',
])
```

### this.nestElements

`Map<string, number>`

对于一个小程序来说，只有部分组件有可能递归调用自身。如 `<Map>` 组件不会再调用 `<Map>`，而 `<View>` 则可以不断递归调用 `<View>`。

如果此小程序不支持递归，我们又把 `<Map>` 模板循环渲染了 N 次，那么小程序体积就会变大，而这些循环出来的模板又是不必要的。因此使用了 `nestElements` 去标记那些可能递归调用的组件。

但考虑到例如 `<Form>` 这些组件即使可能递归调用，但也不会递归调用太多次。因此在 `nestElements` 中可以对它的循环渲染次数进行控制，假设 `<Form>` 不会递归调用超过 N 次，进一步减少模板体积。

默认值：

```js
nestElements = new Map([
  ['view', -1],
  ['cover-view', -1],
  ['block', -1],
  ['text', -1],
  ['slot', 8],
  ['slot-view', 8],
  ['label', 6],
  ['form', 4],
  ['scroll-view', 4],
])
```

`key` 值为可以递归调用自身的组件。

`value` 值代表递归生成此组件的次数，**-1** 代表循环 [baseLevel](../config-detail#minibaselevel) 层。

### replacePropName (name, value, componentName)

代替组件的属性名。

| 参数         | 类型   | 说明   |
| :----------- | :----- | :----- |
| name         | string | 属性名 |
| value        | string | 属性值 |
| componetName | string | 组件名 |

例子：

```js
replacePropName (name, value, componentName) {
  // 如果属性值为 'eh'，代表这是一个事件，把属性名改为全小写。
  if (value === 'eh') return name.toLowerCase()
  return name
}
```

### buildXsTemplate ()

支持渲染层脚本的小程序，Taro 会生成一个 utils 脚本在根目录。此时需要声明此函数以设置 base 模板中对 utils 脚本的引用语法。

例子：

```js
// 微信小程序 base 模板引用 utils.wxs 脚本
buildXsTemplate () {
  return '<wxs module="xs" src="./utils.wxs" />'
}
```

### modifyLoopBody (child, nodeName)

修改组件模板的子节点循环体。

| 参数     | 类型   | 说明                   |
| :------- | :----- | :--------------------- |
| child    | string | 组件模板的子节点循环体 |
| nodeName | string | 组件名                 |

没有在 [this.voidElements](./template#thisvoidelements) 中声明过的组件，会遍历子节点进行渲染。

这些组件的模板通用格式为：

```html
<template name="tmpl_0_view">
  <view>
    <!-- 子节点循环 begin -->
    <block wx:for="{{i.cn}}" wx:key="uid">
      <!-- 子节点循环体 begin -->
      <template is="{{...}}" data="{{...}}" />
      <!-- 子节点循环体 end -->
    </block>
    <!-- 子节点循环 end -->
  </view>
</template>
```

例子：

```js
// 支付宝小程序的 <swiper> 组件中，循环体套一层 <swiper-item> 和 <view> 组件
modifyLoopBody (child, nodeName) {
  if (nodeName === 'swiper') {
    return `<swiper-item>
      <view a:for="{{item.cn}}" a:key="id">
        ${child}
      </view>
    </swiper-item>`
  }
  return child
}
```

### modifyLoopContainer (children, nodeName)

修改组件模板的子节点循环。

| 参数     | 类型   | 说明                 |
| :------- | :----- | :------------------- |
| children | string | 组件模板的子节点循环 |
| nodeName | string | 组件名               |

例子：

```js
// 支付宝小程序的 <picker> 组件中，子节点循环套一层 <view> 组件
modifyLoopContainer (children, nodeName) {
  if (nodeName === 'picker') {
    return `
<view>${children}</view>
`
  }
  return children
}
```

### modifyTemplateResult (res, nodeName, level, children)

修改组件模板的最终结果。

| 参数     | 类型   | 说明                 |
| :------- | :----- | :------------------- |
| res      | string | 组件模板的结果       |
| nodeName | string | 组件名               |
| level    | string | 循环层级             |
| children | string | 组件模板的子节点循环 |

例子：

```js
// 支付宝小程序当遇到 <swiper-item> 组件时不渲染其模板
modifyTemplateResult = (res: string, nodeName: string) => {
  if (nodeName === 'swiper-item') return ''
  return res
}
```

### getAttrValue (value, key, nodeName)

设置组件的属性绑定语法。

| 参数     | 类型   | 说明   |
| :------- | :----- | :----- |
| value    | string | 属性值 |
| key      | string | 属性名 |
| nodeName | string | 组件名 |

例子：

```js
getAttrValue (value, key, nodeName) {
  const swanSpecialAttrs = {
    'scroll-view': ['scrollTop', 'scrollLeft', 'scrollIntoView']
  }

  // 百度小程序中 scroll-view 组件部分属性的属性绑定语法是: {= value =}
  if (isArray(swanSpecialAttrs[nodeName]) && swanSpecialAttrs[nodeName].includes(key)) {
    return `= ${value} =`
  }

  // 其余属性还是使用 {{ value }} 绑定语法
  return `{ ${value} }`
}
```

## 例子

### 抖音小程序模板

- 抖音小程序支持模板递归，所以继承 `RecursiveTemplate` 基类。

- 因为不需要调整模板内容，所以只用设置 `supportXS` 和 `Adapter` 属性即可。

```js
import { RecursiveTemplate } from '@tarojs/shared/dist/template'

export class Template extends RecursiveTemplate {
  supportXS = false
  Adapter = {
    if: 'tt:if',
    else: 'tt:else',
    elseif: 'tt:elif',
    for: 'tt:for',
    forItem: 'tt:for-item',
    forIndex: 'tt:for-index',
    key: 'tt:key',
    type: 'tt',
  }
}
```

### 微信小程序模板

- 微信小程序不支持模板递归，所以继承 `UnRecursiveTemplate` 基类。
- 设置 `supportXS` 和 `Adapter` 属性。
- 因为微信小程序支持渲染层脚本 `wxs`，所以  通过 `buildXsTemplate` 设置 base 模板中对 utils 脚本的引用语法。
- 利用 `replacePropName` 修改了组件绑定的属性名。

```js
import { UnRecursiveTemplate } from '@tarojs/shared/dist/template'

export class Template extends UnRecursiveTemplate {
  supportXS = true
  Adapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    xs: 'wxs',
    type: 'weapp',
  }

  buildXsTemplate() {
    return '<wxs module="xs" src="./utils.wxs" />'
  }

  replacePropName(name, value, componentName) {
    if (value === 'eh') {
      const nameLowerCase = name.toLowerCase()
      if (nameLowerCase === 'bindlongtap' && componentName !== 'canvas') return 'bindlongpress'
      return nameLowerCase
    }
    return name
  }
}
```

---

## docs/plugin-custom.md

---
title: 编写插件
---

## 快速开始

```bash
# 生成用于扩展命令行的插件模版
$ taro create plugin-name --type=plugin-command
# 生成用于扩展编译时的插件模版
$ taro create plugin-name --type=plugin-build
# 生成用于扩展自定义页面模版的插件模版
$ taro create plugin-name --type=plugin-template
```

### 代码结构

Taro 的插件都具有固定的代码结构，通常由一个函数组成，示例如下：

```typescript
export default (ctx, options) => {
  // plugin 主体
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
  ctx.onBuildFinish(() => {
    console.log('Webpack 编译结束！')
  })
  ctx.onBuildComplete(() => {
    console.log('Taro 构建完成！')
  })
}
```

插件函数可以接受两个参数：

- ctx：插件当前的运行环境信息，包含插件相关的 API、当前运行参数、辅助方法等等
- options：为插件调用时传入的参数

在插件主体代码部分可以按照自己的需求编写相应代码。

### Typings

建议使用 typescript 来编写插件，这样你就会获得很棒的智能提示，使用方式如下：

```typescript
import { IPluginContext } from '@tarojs/service'
export default (ctx: IPluginContext, pluginOpts) => {
  // 接下来使用 ctx 的时候就能获得智能提示了
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
}
```

## 插件功能

### 命令行扩展

你可以通过编写插件来为 Taro 拓展命令行的命令，在之前版本的 Taro 中，命令行的命令是固定的，如果你要进行扩展，那你得直接修改 Taro 源码，而如今借助插件功能，你可以任意拓展 Taro 的命令行。

这个功能主要通过 `ctx.registerCommand` API 来进行实现，例如，增加一个上传的命令，将编译后的代码上传到服务器：

```typescript
export default (ctx) => {
  ctx.registerCommand({
    // 命令名
    name: 'upload',
    // 执行 taro upload --help 时输出的 options 信息
    optionsMap: {
      '--remote': '服务器地址',
    },
    // 执行 taro upload --help 时输出的使用例子的信息
    synopsisList: ['taro upload --remote xxx.xxx.xxx.xxx'],
    async fn() {
      const { remote } = ctx.runOpts
      await uploadDist()
    },
  })
}
```

将这个插件配置到中项目之后，就可以通过 `taro upload --remote xxx.xxx.xxx.xxx` 命令将编译后代码上传到目标服务器。

### 编译过程扩展

同时你也可以通过插件对代码编译过程进行拓展。

正如前面所述，针对编译过程，有 `onBuildStart`、`onBuildFinish`、`onBuildComplete` 三个钩子来分别表示编译开始，编译结束和构建完成，而除此之外也有更多 API 来对编译过程进行修改，如下：

- `ctx.onBuildStart(() => void)`，编译开始，接收一个回调函数
- `ctx.modifyWebpackChain(args: { chain: any }) => void)`，编译中修改 webpack 配置，在这个钩子中，你可以对 webpackChain 作出想要的调整，等同于配置 [`webpackChain`](./config-detail#miniwebpackchain)
- `ctx.modifyBuildAssets(args: { assets: any }) => void)`，修改编译后的结果
- `ctx.onBuildFinish(() => void)`，编译结束，接收一个回调函数。在每次 Webpack 编译后都会被触发。如果是在 watch 模式下，那么每当有文件改变触发 Webpack 编译时，都会触发 `onBuildFinish` 钩子。
- `ctx.onBuildComplete(() => void)`，构建完成，接收一个回调函数。在 Taro 构建命令结束后被触发，与 `onBuildFinish` 钩子的区别在于其只会被触发一次。

### 编译平台拓展

参考[扩展编译平台](./platform-plugin)

### 创建页面自定义模版扩展

通过 `ctx.modifyCreateTemplate(setCustomTemplateConfig:TSetCustomTemplateConfig)` 这个钩子，可以对 taro create 创建出来的页面模版进行修改。

`setCustomTemplateConfig` 是一个回调函数，其类行为：

```typescript
type TSetCustomTemplateConfig = (customTemplateConfig: TCustomTemplateInfo) => void
type TCustomTemplateInfo = {
  customTemplatePath?: string
  css: 'none' | 'sass' | 'stylus' | 'less'
  typescript?: boolean
  compiler?: 'webpack4' | 'webpack5' | 'vite'
  template?: string
}
```

只需要按照 taro 模版的格式，编写好需要的模版（模版编写参考[模版格式](./template)，静态模版与动态模版均支持），并且下载到电脑本地任意一个目录下，把该目录的绝对路径赋值给 `customTemplateConfig.customTemplatePath`，如果是动态模版，那么可以根据编写的模版的 template_creator.js，配置需要的其他参数，最后生成完整的 `customTemplateConfig` 对象，作为参数调用 `setCustomTemplateConfig` 即可。

通过运行 `taro create plugin-name --type=plugin-template` 会生成一个插件示例，可根据具体需求进行修改。

## API

通过以上内容，我们已经大致知道 Taro 插件可以实现哪些特性并且可以编写一个简单的 Taro 插件了，但是，为了能够编写更加复杂且标准的插件，我们需要了解 Taro 插件机制中的具体 API 用法。

### 插件环境变量

#### ctx.paths

包含当前执行命令的相关路径，所有的路径如下（并不是所有命令都会拥有以下所有路径）：

- `ctx.paths.appPath`，当前命令执行的目录，如果是 `build` 命令则为当前项目路径
- `ctx.paths.configPath`，当前项目配置目录，如果 `init` 命令，则没有此路径
- `ctx.paths.sourcePath`，当前项目源码路径
- `ctx.paths.outputPath`，当前项目输出代码路径
- `ctx.paths.nodeModulesPath`，当前项目所用的 node_modules 路径

#### ctx.runOpts

获取当前执行命令所带的参数，例如命令 `taro upload --remote xxx.xxx.xxx.xxx`，则 `ctx.runOpts` 值为：

```js
{
  _: ['upload'],
  options: {
    remote: 'xxx.xxx.xxx.xxx'
  },
  isHelp: false
}
```

#### ctx.helper

为包 `@tarojs/helper` 的快捷使用方式，包含其所有 API。

#### ctx.initialConfig

获取项目配置。

#### ctx.plugins

获取当前所有挂载的插件。

### 插件方法

Taro 的插件架构基于 [Tapable](https://github.com/webpack/tapable)。

#### ctx.register(hook: IHook)

注册一个可供其他插件调用的钩子，接收一个参数，即 Hook 对象。

一个 Hook 对象类型如下：

```typescript
interface IHook {
  // Hook 名字，也会作为 Hook 标识
  name: string
  // Hook 所处的 plugin id，不需要指定，Hook 挂载的时候会自动识别
  plugin: string
  // Hook 回调
  fn: Function
  before?: string
  stage?: number
}
```

通过 `ctx.register` 注册过的钩子需要通过方法 `ctx.applyPlugins` 进行触发。

我们约定，按照传入的 Hook 对象的 `name` 来区分 Hook 类型，主要为以下三类：

- 事件类型 Hook，Hook name 以 `on` 开头，如 `onStart`，这种类型的 Hook 只管触发而不关心 Hook 回调 fn 的值，Hook 的回调 fn 接收一个参数 `opts` ，为触发钩子时传入的参数
- 修改类型 Hook，Hook name 以 `modify` 开头，如 `modifyBuildAssets`，这种类型的 Hook 触发后会返回做出某项修改后的值，Hook 的回调 fn 接收两个参数 `opts` 和 `arg` ，分别为触发钩子时传入的参数和上一个回调执行的结果
- 添加类型 Hook，Hook name 以 `add` 开头，如 `addConfig`，这种类型 Hook 会将所有回调的结果组合成数组最终返回，Hook 的回调 fn 接收两个参数 `opts` 和 `arg` ，分别为触发钩子时传入的参数和上一个回调执行的结果

如果 Hook 对象的 `name` 不属于以上三类，则该 Hook 表现情况类似事件类型 Hook。

钩子回调可以是异步也可以是同步，同一个 Hook 标识下一系列回调会借助 Tapable 的 AsyncSeriesWaterfallHook 组织为异步串行任务依次执行。

#### ctx.registerMethod(arg: string | { name: string, fn?: Function }, fn?: Function)

向 `ctx` 上挂载一个方法可供其他插件直接调用。

主要调用方式：

```typescript
ctx.registerMethod('methodName')
ctx.registerMethod('methodName', () => {
  // callback
})
ctx.registerMethod({
  name: 'methodName',
})
ctx.registerMethod({
  name: 'methodName',
  fn: () => {
    // callback
  },
})
```

其中方法名必须指定，而对于回调函数则存在两种情况。

##### 指定回调函数

则直接往 `ctx` 上进行挂载方法，调用时 `ctx.methodName` 即执行 `registerMethod` 上指定的回调函数。

##### 不指定回调函数

则相当于注册了一个 `methodName` 钩子，与 `ctx.register` 注册钩子一样需要通过方法 `ctx.applyPlugins` 进行触发，而具体要执行的钩子回调则通过 `ctx.methodName` 进行指定，可以指定多个要执行的回调，最后会按照注册顺序依次执行。

内置的编译过程中的 API 如 `ctx.onBuildStart` 等均是通过这种方式注册。

#### ctx.registerCommand(hook: ICommand)

注册一个自定义命令。

```typescript
interface ICommand {
  // 命令别名
  alias?: string
  // 执行 taro <command> --help 时输出的 options 信息
  optionsMap?: {
    [key: string]: string
  }
  // 执行 taro <command> --help 时输出的使用例子的信息
  synopsisList?: string[]
}
```

使用方式：

```typescript
ctx.registerCommand({
  name: 'create',
  fn() {
    const { type, name, description } = ctx.runOpts
    const { chalk } = ctx.helper
    const { appPath } = ctx.paths
    if (typeof name !== 'string') {
      return console.log(chalk.red('请输入需要创建的页面名称'))
    }
    if (type === 'page') {
      const Page = require('../../create/page').default
      const page = new Page({
        pageName: name,
        projectDir: appPath,
        description,
      })
      page.create()
    }
  },
})
```

#### ctx.registerPlatform(hook: IPlatform)

注册一个编译平台。

```typescript
interface IFileType {
  templ: string
  style: string
  script: string
  config: string
}
interface IPlatform extends IHook {
  // 编译后文件类型
  fileType: IFileType
  // 编译时使用的配置参数名
  useConfigName: String
}
```

使用方式：

```typescript
ctx.registerPlatform({
  name: 'alipay',
  useConfigName: 'mini',
  async fn({ config }) {
    const { appPath, nodeModulesPath, outputPath } = ctx.paths
    const { npm, emptyDirectory } = ctx.helper
    emptyDirectory(outputPath)
    // 准备 miniRunner 参数
    const miniRunnerOpts = {
      ...config,
      nodeModulesPath,
      buildAdapter: config.platform,
      isBuildPlugin: false,
      globalObject: 'my',
      fileType: {
        templ: '.awml',
        style: '.acss',
        config: '.json',
        script: '.js',
      },
      isUseComponentBuildPage: false,
    }
    // build with webpack
    const miniRunner = await npm.getNpmPkg('@tarojs/mini-runner', appPath)
    await miniRunner(appPath, miniRunnerOpts)
  },
})
```

#### ctx.applyPlugins(args: string | { name: string, initialVal?: any, opts?: any })

触发注册的钩子。

传入的钩子名为 `ctx.register` 和 `ctx.registerMethod` 指定的名字。

这里值得注意的是如果是**修改类型**和**添加类型**的钩子，则拥有返回结果，否则不用关心其返回结果。

使用方式：

```typescript
ctx.applyPlugins('onStart')
const assets = await ctx.applyPlugins({
  name: 'modifyBuildAssets',
  initialVal: assets,
  opts: {
    assets,
  },
})
```

#### ctx.addPluginOptsSchema(schema: Function)

为插件入参添加校验，接受一个函数类型参数，函数入参为 joi 对象，返回值为 joi schema。

使用方式：

```typescript
ctx.addPluginOptsSchema((joi) => {
  return joi.object().keys({
    mocks: joi.object().pattern(joi.string(), joi.object()),
    port: joi.number(),
    host: joi.string(),
  })
})
```

#### ctx.writeFileToDist({ filePath: string, content: string })

向编译结果目录中写入文件，参数：

- filePath: 文件放入编译结果目录下的路径
- content: 文件内容

#### ctx.generateFrameworkInfo({ platform: string })

生成编译信息文件 .frameworkinfo，参数：

- platform: 平台名

#### ctx.generateProjectConfig({ srcConfigName: string, distConfigName: string })

根据当前项目配置，生成最终项目配置，参数：

- srcConfigName: 源码中配置名
- distConfigName: 最终生成的配置名

---

## docs/plugin-mini-ci.md

---
title: 小程序持续集成
---

Taro 小程序端构建后支持 CI（持续集成）的插件 `@tarojs/plugin-mini-ci`。
目前已支持（企业）微信、京东、字节、支付宝、钉钉、百度小程序

功能包括：

- 构建完毕后自动唤起小程序开发者工具并打开项目
- 上传代码作为开发版并生成预览二维码
- 上传代码作为体验版并生成体验二维码
- 支持 上传、预览 hooks 回调

## 使用

### 安装

```shell
npm i @tarojs/plugin-mini-ci -D
```

> 本插件 Taro 3.x 版本均可使用，无需和其他 taro 包版本号保持一致；[点击](https://www.npmjs.com/package/@tarojs/plugin-mini-ci?activeTab=versions)查看最新版本。

### 使用插件

`/config/index.js`

```js
// 示例, 如果你使用 `vs code` 作为开发工具， 你还可以使用注释的语法引入插件包含的声明文件，可获得类似于typescript的友好提示
/**
 * @typedef { import("@tarojs/plugin-mini-ci").CIOptions } CIOptions
 * @type {CIOptions}
 */
const CIPluginOpt = {
  weapp: {
    appid: '微信小程序appid',
    privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/private.appid.key',
  },
  tt: {
    email: '字节小程序邮箱',
    password: '字节小程序密码',
  },
  alipay: {
    appid: '支付宝小程序appid',
    toolId: '工具id',
    privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem',
  },
  dd: {
    appid: '钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项',
    token: '令牌，从钉钉后台获取',
  },
  swan: {
    token: '鉴权需要的token令牌',
  },
  // 版本号
  version: '1.0.0',
  // 版本发布描述
  desc: '版本描述',
}
const config = {
  plugins: [['@tarojs/plugin-mini-ci', CIPluginOpt]],
}
```

除了给插件传入对象， 你也可以传入一个异步函数，在编译时动态返回相关配置。

```js
const CIPluginFn = async () => {
  // 可以在这里做一些异步事情， 比如请求接口获取配置
  /**
   * @typedef { import("@tarojs/plugin-mini-ci").CIOptions } CIOptions
   * @type {CIOptions}
   */
  return {
    weapp: {
      appid: '微信小程序appid',
      privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/private.appid.key',
    },
    tt: {
      email: '字节小程序邮箱',
      password: '字节小程序密码',
    },
    alipay: {
      appid: '支付宝小程序appid',
      toolId: '工具id',
      privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem',
    },
    dd: {
      appid: '钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项',
      token: '令牌，从钉钉后台获取',
    },
    swan: {
      token: '鉴权需要的token令牌',
    },
    // 版本号
    version: '1.0.0',
    // 版本发布描述
    desc: '版本描述',
  }
}

const config = {
  plugins: [['@tarojs/plugin-mini-ci', CIPluginFn]],
}
```

### 作为选项配合 build 命令使用

`package.json` 的 `scripts` 字段使用命令参数

```json
{
  "scripts": {
    //  构建完后自动 “打开开发者工具”
    "build:weapp": "taro build --type weapp --open",
    //  构建完后自动 “上传代码作为开发版并生成预览二维码”
    "build:weapp:preview": "taro build --type weapp --preview",
    //  构建完后自动“上传代码作为体验版”
    "build:weapp:upload": "taro build --type weapp --upload",
    //  构建完后自动“上传 dist/xxx 目录的代码作为体验版”， `--projectPath` 参数 适用于 taro 和 原生混合的场景
    "build:weapp:upload": "taro build --type weapp --upload --projectPath dist/xxx"
  },
  "taroConfig": {
    "version": "1.0.0",
    "desc": "上传描述"
  }
}
```

由上面的示例可知，插件为 taro cli 命令扩展了 4 个选项：

- --open
  打开开发者工具，类似于网页开发中自动打开谷歌浏览器
- --preview
  上传代码作为开发版并生成预览二维码
- --upload
  上传代码作为体验版

此 3 个选项在一条命令里不能同时使用（互斥）

- --projectPath
  指定要操作（打开、预览、上传）的目录路径， 默认情况下是操作构建后目录路径，即 [outputRoot 选项](./config-detail#outputroot)；

此选项必须搭配上述三个选项之一一起使用；

此选项优先级为： 终端传入的`--projectPath` > CI 配置的`projectPath` 选项 > [outputRoot 选项](./config-detail#outputroot)。

### 作为命令单独使用（3.6.0 开始支持）

```json
{
  "scripts": {
    //  直接 “打开开发者工具并载入项目”
    "build:weapp": "taro open --type weapp  --projectPath dist/xxx",
    //  直接 “上传代码作为开发版并生成预览二维码”
    "build:weapp:preview": "taro preview --type weapp",
    //  直接“上传代码作为体验版”
    "build:weapp:upload": "taro upload --type weapp",
    //  上传指定目录代码作为体验版
    "build:weapp:upload2": "taro upload --type weapp --projectPath dist/xxx"
  },
  "taroConfig": {
    "version": "1.0.0",
    "desc": "上传描述"
  }
}
```

由上面的示例可知，插件额外新增了 3 个独立命令，让你可以直接操作指定目录。适用于把 `taro` 作为项目一部分的使用场景。

当直接作为命令使用时，有两个选项：

- --type
  传入平台名称
- --projectPath
  传入路径。 此选项优先级为： 终端传入的`--projectPath` > CI 配置的`projectPath` 选项 > [outputRoot 选项](./config-detail#outputroot)

### Hooks 使用（3.6.0 开始支持）

在插件执行完 `预览`、`上传` 操作后， 插件会触发 2 个钩子事件：

| 事件名            | 传递参数对象 | 说明              |
| :---------------- | :----------- | :---------------- |
| onPreviewComplete | 详细见下文   | CI 执行预览后触发 |
| onUploadComplete  | 详细见下文   | CI 执行上传后触发 |

两个钩子被触发时传入的数据对象描述如下

```ts
interface HooksData {
  /** 是否预览、构建成功 */
  success: boolean
  data: {
    /** 当前构建的小程序平台 */
    platform: string
    /** 预览码本地路径 */
    qrCodeLocalPath: string
    /** 预览码内容 */
    qrCodeContent: string
    /** 插件传递的预览版本号 */
    version: string
    /** 插件传递的描述文本 */
    desc: string
    /** 预览或上传的目录路径 */
    projectPath: string
  }
  /** 错误对象 */
  error?: Error
}
```

你可以写一个自定义插件，来接收上述 2 个事件传递的值：

```js
// config/test.js
module.exports = function (ctx) {
  ctx.register({
    name: 'onPreviewComplete',
    fn: ({ success, data, error }) => {
      console.log('接收预览后数据', success, data, error)
      // 你可以在这里发送钉钉或者飞书消息
    },
  })
  ctx.register({
    name: 'onUploadComplete',
    fn: ({ success, data, error }) => {
      console.log('接收上传后数据', success, data, error)
      // 你可以在这里发送钉钉或者飞书消息
    },
  })
}
```

然后把自己写的插件配置应用起来：

```js
// config/index.js
const config = {
  plugins: [
    ['@tarojs/plugin-mini-ci', CI插件参数],
    // 应用自己写的插件
    require('path').join(__dirname, './test'),
  ],
  // 其他配置省略
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
```

### 各平台 支持的功能情况对比

| 平台/功能 | 自动打开 IDE | 输出预览二维码 | 输出体验二维码 |
| :-------- | :----------- | :------------- | :------------- |
| weapp     | ✅           | ✅             | ✅             |
| qywx      | ✅           | ✅             | ✅             |
| tt        | ✅           | ✅             | ✅             |
| alipay    | ✅           | ✅             | ✅             |
| dd        | ✅           | ✅             | ❌             |
| swan      | ✅           | ✅             | ✅             |

> ps: 各平台上传都是支持的，只是不一定会输出二维码
> 企业微信和微信的各项参数是一样的，共用一个配置

## API

### 插件配置

| 参数        | 类型   | 说明                                                                                |
| :---------- | :----- | :---------------------------------------------------------------------------------- |
| weapp       | Object | （企业）微信小程序 CI 配置                                                          |
| tt          | Object | 抖音小程序配置                                                                      |
| alipay      | Object | 支付宝小程序配置                                                                    |
| dd          | Object | 钉钉小程序配置（3.6.0 版本开始支持）                                                |
| swan        | Object | 百度小程序配置                                                                      |
| version     | string | 上传版本号，不传时默认读取 package.json 下的 taroConfig 下的 version 字段           |
| desc        | string | 上传时的描述信息，不传时默认读取 package.json 下的 taroConfig 下的 desc 字段        |
| projectPath | string | 目标项目目录，对所有小程序生效（不传默认取 outputRoot 字段 ）（3.6.0 版本开始支持） |

### （企业）微信小程序 CI 配置

| 参数                | 类型     | 说明                                                                                     |
| :------------------ | :------- | :--------------------------------------------------------------------------------------- |
| appid               | string   | 小程序/小游戏项目的 appid                                                                |
| privateKeyPath      | string   | 私钥文件在项目中的相对路径，在获取项目属性和上传时用于鉴权使用                           |
| devToolsInstallPath | string   | 微信开发者工具安装路径，如果你安装微信开发者工具时选的默认路径，则不需要传入此参数(选填) |
| projectPath         | string   | 上传的小程序的路径（默认取的 outputRoot ）（3.6.0 版本已废弃）                           |
| ignores             | string[] | 上传需要排除的目录(选填)                                                                 |
| robot               | number   | 指定使用哪一个 ci 机器人，可选值：1 ~ 30(选填, 3.6.0 版本开始支持)                       |

官方 CI 文档[点这里](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)

### 抖音小程序 CI 配置

| 参数     | 类型   | 说明           |
| :------- | :----- | :------------- |
| email    | string | 字节小程序邮箱 |
| password | string | 字节小程序密码 |

官方 CI 文档[点这里](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/development-assistance/ide-order-instrument/)

### 支付宝小程序 CI 配置

| 参数                | 类型   | 说明                                                                                                                |
| :------------------ | :----- | :------------------------------------------------------------------------------------------------------------------ |
| appid               | string | 小程序 appid(`3.6.0` 之前参数名是 `appId` ， `3.6.0` 开始统一成`appid`)                                             |
| toolId              | string | 工具 id，[查看这里复制](https://open.alipay.com/dev/workspace/key-manage/tool)                                      |
| privateKeyPath      | string | 密钥文件相对项目根目录的相对路径, 私钥可通过[支付宝开放平台开发助手](https://opendocs.alipay.com/common/02kipl)生成 |
| privateKey          | string | 私钥文本内容, 生成方式同上(privateKeyPath 和 privateKey 之间必须要填写其中一个； 3.6.0 版本开始支持)                |
| devToolsInstallPath | string | 小程序开发者工具安装路径(选填, 3.6.0 版本开始支持)                                                                  |
| clientType          | string | 上传的终端,终端类型见下表（选填，默认值 alipay）                                                                    |

```md
终端类型值及其含义：

alipay: 支付宝

ampe：AMPE

amap：高德

genie：天猫精灵

alios：ALIOS

uc：UC

quark：夸克

koubei：口碑

alipayiot：IoT

cainiao：菜鸟

alihealth：阿里健康

health: 阿里医院
```

官方 CI 文档[点这里](https://opendocs.alipay.com/mini/02q29z)

### 钉钉小程序 CI 配置（3.6.0 版本开始支持）

| 参数                | 类型   | 说明                                                                 |
| :------------------ | :----- | :------------------------------------------------------------------- |
| appid               | string | 钉钉小程序 appid,即钉钉开放平台后台应用管理的 MiniAppId 选项（必填） |
| token               | string | 令牌，从钉钉后台获取 （必填）                                        |
| devToolsInstallPath | string | 小程序开发者工具安装路径（选填）                                     |

`taro` 集成的钉钉 CI 使用了[钉钉官方仓库](https://github.com/open-dingtalk/dingtalk-design-cli)中的 `dingtalk-miniapp-opensdk` 包，查阅源码封装而成

### 百度小程序 CI 配置

| 参数           | 类型   | 说明                               |
| :------------- | :----- | :--------------------------------- |
| token          | string | 有该小程序发布权限的登录密钥       |
| minSwanVersion | string | 最低基础库版本, 不传默认为 3.350.6 |

官方 CI 文档[点这里](https://smartprogram.baidu.com/docs/develop/devtools/commandtool/)

### 完整 ts 接口描述

```ts
export interface CIOptions {
  /** 发布版本号，默认取 package.json 文件的 taroConfig.version 字段 */
  version?: string
  /** 版本发布描述， 默认取 package.json 文件的 taroConfig.desc 字段 */
  desc?: string
  /** 目标项目目录，对所有小程序生效（不传默认取 outputRoot 字段 ） */
  projectPath?: string
  /** 微信小程序CI配置, 官方文档地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html */
  weapp?: WeappConfig
  /** 抖音小程序配置, 官方文档地址：https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/development-assistance/ide-order-instrument/ */
  tt?: TTConfig
  /** 支付宝系列小程序配置，官方文档地址： https://opendocs.alipay.com/mini/miniu/api */
  alipay?: AlipayConfig
  /** 钉钉小程序配置 */
  dd?: DingtalkConfig
  /** 百度小程序配置, 官方文档地址：https://smartprogram.baidu.com/docs/develop/devtools/commandtool/ */
  swan?: SwanConfig
}

export type ProjectType = 'miniProgram' | 'miniGame' | 'miniProgramPlugin' | 'miniGamePlugin'

/** 微信小程序配置 */
export interface WeappConfig {
  /** 小程序/小游戏项目的 appid */
  appid: string
  /** 私钥文件路径，在获取项目属性和上传时用于鉴权使用 */
  privateKeyPath: string
  /** 微信开发者工具安装路径 */
  devToolsInstallPath?: string
  /** 类型，默认miniProgram 小程序 */
  type?: ProjectType
  /** 上传需要排除的目录 */
  ignores?: Array<string>
  /** 指定使用哪一个 ci 机器人，可选值：1 ~ 30 */
  robot?: number
}

/** 抖音小程序配置 */
export interface TTConfig {
  /** 绑定的邮箱账号 */
  email: string
  /** 密码 */
  password: string
}

/** 终端类型 */
export type AlipayClientType =
  | 'alipay' /** 支付宝 */
  | 'ampe' /** AMPE */
  | 'amap' /** 高德 */
  | 'genie' /** 天猫精灵 */
  | 'alios' /** ALIOS */
  | 'uc' /** UC */
  | 'quark' /** 夸克 */
  | 'koubei' /** 口碑 */
  | 'alipayiot' /** loT */
  | 'cainiao' /** 菜鸟 */
  | 'alihealth' /** 阿里健康(医蝶谷) */
  | 'health' /** 阿里医院 */

/** 支付宝系列小程序配置 */
export interface AlipayConfig {
  /** 小程序appid */
  appid: string
  /** 工具id */
  toolId: string
  /** 私钥文件路径，在获取项目属性和上传时用于鉴权使用(privateKeyPath和privateKey之间必须要填写其中一个) */
  privateKeyPath: string
  /** 私钥文本内容，在获取项目属性和上传时用于鉴权使用(privateKeyPath和privateKey之间必须要填写其中一个) */
  privateKey: string
  /** 小程序开发者工具安装路径 */
  devToolsInstallPath?: string
  /** 上传的终端, 默认alipay */
  clientType?: AlipayClientType
}

export type DingtalkProjectType =
  /** 第三方个人应用 */
  | 'dingtalk-personal'
  /** 第三方企业应用 */
  | 'dingtalk-biz-isv'
  /** 企业内部应用 */
  | 'dingtalk-biz'
  /** 企业定制应用 */
  | 'dingtalk-biz-custom'
  /** 工作台组件 */
  | 'dingtalk-biz-worktab-plugin'
export interface DingtalkConfig {
  /** 钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项（必填） */
  appid: string
  /** 令牌，从钉钉后台获取 */
  token: string
  /** 小程序开发者工具安装路径 */
  devToolsInstallPath?: string
  /** 钉钉应用类型， 默认为:'dingtalk-biz' (企业内部应用) */
  projectType?: DingtalkProjectType
}

/** 百度小程序配置 */
export interface SwanConfig {
  /** 有该小程序发布权限的登录密钥 */
  token: string
  /** 最低基础库版本, 不传默认为 3.350.6 */
  minSwanVersion?: string
}
```

---

