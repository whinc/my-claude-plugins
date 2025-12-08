## docs/compile-optimized.mdx

---
title: 小程序编译优化指南
---

Taro 使用 Webpack 进行打包，当工程越来越庞大时，会出现打包时间过长等问题。另外，小程序严格的体积要求、不支持热更新等问题也对大型应用的工程化流程提出了非常大的优化挑战。

## 优化编译速度

**缓存**与**并行**是进行性能优化的两个重要切入角度。智行小程序团队借助 `cache-loader`、`thread-loader` 开发了 [taro-plugin-compiler-optimization](treasures#插件) 插件让 Taro 项目的编译时长减少为原来的三分之一。

> 详情请阅读文章[《编写插件，将 Taro 编译打包耗时缩短至三分之一》](https://mp.weixin.qq.com/s/Z79QhAlP8tBQn3mXQ11byQ)。

#### 用法

```shell title="安装依赖"
npm install --save-dev thread-loader cache-loader taro-plugin-compiler-optimization
```

```js title="使用插件"
// config/index.js
config = {
  // ...
  plugins: ['taro-plugin-compiler-optimization'],
}
```

#### 效果展示

优化前 **3m9s**，优化后 **56.8s**，将耗时缩短至三分之一。

优化前耗时：

![优化前](https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/before.PNG)

优化后耗时：

![优化后](https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/after.PNG)

## 解决包体积过大无法进行预览的问题

智行小程序团队通过在开发环境下配置压缩指定文件，解决了小程序端包体积过大无法进行预览的问题。详情请阅读文章[《编写插件，将 Taro 编译打包耗时缩短至三分之一》](https://mp.weixin.qq.com/s/Z79QhAlP8tBQn3mXQ11byQ)。

## 通过 webpackChain 配置解决开发环境下小程序包体积过大无法进行预览上传的问题(不影响 devtools 的使用)

```js
// config/dev.js
module.exports = {
  mini: {
    webpackChain: (chain, webpack) => {
      chain.merge({
        plugin: {
          install: {
            plugin: require('terser-webpack-plugin'),
            args: [
              {
                terserOptions: {
                  compress: true, // 默认使用terser压缩
                  // mangle: false,
                  keep_classnames: true, // 不改变class名称
                  keep_fnames: true, // 不改变函数名称
                },
              },
            ],
          },
        },
      })
    },
  },
}
```

---

## docs/difference-to-others.md

---
title: 与其它新型小程序框架的异同
---

> 请注意：各个框架迭代速度都非常快，可能框架的设计和实现会出现改变。

在本节我们将与三个新型小程序框架进行对比，它们分别是：[remax](https://github.com/remaxjs/remax), [alita](https://github.com/areslabs/alita), [kbone](https://github.com/wechat-miniprogram/kbone)。这三个框架和 Taro Next 总体的思路都一样：相对于编译型的小程序框架而言，新型小程序框架有一个(或多个)基础模板，基础模板接受不同的数据渲染与之对应的内容，小程序框架主要的工作是把开发者的业务逻辑转换成基础模板可接受的数据去驱动小程序渲染。

我们尽量尝试避免偏见。但显而易见，作为 Taro 团队，我们会不可避免地倾向于 Taro。在本次对比中，我们仅会从技术选型、总体设计、内部实现对比各个框架，不会涉及例如生态和项目/开源治理等因素。如果你倾向于全面的对比，可以参考 [小程序框架全面测评](https://aotu.io/notes/2019/03/12/mini-program-framework-full-review/)。

## Alita

Alita 严格来讲并不算小程序开发框架，它实际上是一个把 React Native 代码转换成微信小程序代码的转换引擎工具。

在内部的实现上，Alita 采用了静态编译 + 运行时处理 JSX 的实现。静态编译部分捕捉 JSX 和 React 组件声明，并生成对应的 wxml 模板，运行时把捕捉到的 React 组件转换为静态模板可接受的渲染数据实现渲染。由于静态编译部分的存在，Alita 不能完整地支持所有 JSX 特性，生成的模板也会更多，最终打包的 size 会比其它新型小程序框架更大一些。但与之对应的，这样的实现的会获得更好的性能。

另外 Alita 内部实现了一个 mini React，目前还没有例如 Hooks 这样的功能，也无法自由引入其它的 React 生态库。其它的新型小程序框架都可以引入不涉及浏览器 API 的 React 生态库。

## Remax

Remax 是一个可以让完整的 React 跑在小程序上的小程序开发框架。为了让 React 跑在小程序上，Remax 通过 [react-reconciler](https://www.npmjs.com/search?q=react-reconcile) 实现了一个小程序渲染器。这点和 Taro Next 一致。

在渲染方面，Remax 有一个静态模板列出了所有开发者声明过的组件，静态模板通过遍历渲染器返回的数据（类似于一颗 DOM 树）实现渲染。不过在微信小程序的模板不支持递归，当数据的层级超过了 Remax 设定的阈值（阈值可以自行设定）就会发生爆栈导致无法渲染。而 Kbone 和 Taro 都通过组件的方案来避免这个问题。

Remax 同 React 进行了强绑定，不支持除 React 之外的 Web 开发框架。Kbone 和 Taro 都支持 React 和类 React 以及 Vue。

## Kbone

Kbone 内部实现了轻量级的 DOM 和 BOM API，把 DOM 更改绑定到小程序的视图更改。也就是说，Kbone 并不太关心开发者使用什么框架，只要框架使用的 DOM API 被 Kbone 实现的 DOM API 覆盖到，框架就能通过 Kbone 在小程序运行。Taro Next 也有着同样的思路，但不同的是对 React 的处理。Kbone 通过引入 `react-dom` 实现渲染，但 `react-dom` 包含着合成事件实现和大量浏览器兼容代码。Taro 团队认为这部分代码对小程序平台意义不大，因此和 Remax 一样，通过 `react-reconciler` 实现了小程序渲染器。

在更新方面，Kbone 以组件为粒度进行更新，每次视图改变小程序 setData 的数据是组件的 DOM 树。而 Remax 和 Taro 更新 setData 的数据则是 DOM 树中已经改变了的的值和它的路径。对比起 Taro 和 Remax，Kbone 的运行时性能会差一些。

另外 Kbone 更为专注于微信小程序开发和 H5 开发，而本节对比的其它三个小程序框架均支持多种平台的小程序开发。

## 总结

通过我们的对比不难发现，虽然 4 个框架的核心原理大致相同，但技术选型，内部实现，优化思路都有很大的不同。究其原因是因为 4 个框架都是企业团队进行开发的，这就意味着框架必须优先满足企业和部门的需求和利益，框架的设计和实现的区别也不能代表开发团队技术水平的高下，而是框架开发者根据项目/业务类型和技术栈不同的取舍和妥协。开发者可以根据自己的团队技术栈和项目/业务特性决定使用框架。

---

## docs/dynamic-import.md

---
title: 动态 import
---

在 H5 开发时，我们能够使用动态 import 语法实现异步加载等功能。但在小程序环境是不支持动态 import 的，因此 Taro 默认会把动态 import 语法转换为普通 require 语法。

感谢 [@JiyuShao](https://github.com/JiyuShao) 同学贡献的插件 [taro-dynamic-import-weapp](https://github.com/JiyuShao/taro-dynamic-import-weapp)，让我们能够在微信小程序环境中使用上动态 import。

## 小程序

受小程序环境限制，默认不支持真正的动态 import。此时 `babel-preset-taro` 会启用 `babel-plugin-dynamic-import-node` 插件，**把动态 import 语法转换为 require 语法**。

### 微信小程序

`Webpack4`

借助 [@JiyuShao](https://github.com/JiyuShao) 同学贡献的插件 [taro-dynamic-import-weapp](https://github.com/JiyuShao/taro-dynamic-import-weapp) 可以在微信小程序中使用真正的动态 import 功能，实现动态加载 JS 代码。

:::caution 请注意
由于微信小程序官方社区[规范要求](https://developers.weixin.qq.com/community/minihome/doc/0000ae500e4fd0541f2ea33755b801)限制，该插件方案可能会导致代码审核环节驳回应用。
:::

例如动态加载 React 组件：

```jsx title="pages.jsx"
import { Suspense } from 'react'
import { View, Text } from '@tarojs/components'

export default const Index = () => {
  const DynamicComponent = React.lazy(
    () => import('../../dynamic-import/dynamic-component/index')
  )
  return (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <DynamicComponent />
      </Suspense>
    </View>
  )
}
```

动态加载示例：

![](https://storage.jd.com/cjj-pub-images/taro-demo-dynamic.jpg)

:::info
在 Taro `v3.4.4` 及之前的版本，需要使用 `babel-preset-taro-dynamic-import-weapp` 代替 `babel-preset-taro`，才能取消启用 `babel-plugin-dynamic-import-node` 插件。

Taro `v3.4.5` 开始，`babel-preset-taro` 新增了 `dynamic-import-node` 配置，可以直接配置取消启用 `babel-plugin-dynamic-import-node` 插件。
:::

```js title="babel.config.js" {5,17,20}
// Taro v3.4.4 及以下版本
module.exports = {
  presets: [
    [
      'babel-preset-taro-dynamic-import-weapp',
      {
        // ...
      },
    ],
  ],
}

// Taro v3.4.5+
module.exports = {
  presets: [
    [
      'taro',
      {
        // ...
        'dynamic-import-node': false,
      },
    ],
  ],
}
```

## H5

H5 支持使用动态 import。

如果有需要把动态 import 语法转换为 require 语法时，可以配置 `babel-preset-taro` 启用 `babel-plugin-dynamic-import-node` 插件（Taro v3.4.5+）。

:::caution 请注意
不可与 [prebundle](./prebundle) 搭配使用，这会对依赖的引入造成破坏。
:::

```js title="babel.config.js" {8}
// Taro v3.4.5+
module.exports = {
  presets: [
    [
      'taro',
      {
        // ...
        'dynamic-import-node': true, // 如果使用时遇到问题，可尝试将 devServer 配置项中的 hot 设置为 false
      },
    ],
  ],
}
```

---

## docs/external-libraries.md

---
title: 第三方工具
---

## 概述

如何利用好第三方工具提升使用 Taro 的开发体验是很多社区内开发者共有的问题，比方说如何利用 Jest 测试或者使用 StoryBook 编写组件库示例等等，都需要借助 Taro-H5 相关的能力。

## 基础配置

正常使用 Taro 时，cli 会帮助我们完成编译配置并对 ast 做出一定的修改，如果使用第三方工具，那么我们需要对 webpack 和 babel 相关的配置做出一定的修改。

### Webpack

Taro-H5 中使用到的 API 实际上并不在 `@tarojs/taro` 的入口文件之下，如果想要使用需要在 Webpack 中配置解析入口和别名如下:

```js title="webpack.config.js"
module.exports = {
  // ...
  resolve: {
    mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],
    alias: {
      '@tarojs/taro': '@tarojs/taro-h5',
    },
  },
  // ...
}
```

### Babel

Taro-H5 实际并没有在 Taro 对象上挂载所有的 API，这是为了避免不必要的 API 占用包体的大小，那么为了兼容小程序的 API 使用方法就需要对开发者的代码在编译前做出一些调整，在使用第三方工具时，也需要通过引入 `babel-plugin-transform-taroapi` 依赖完成这一操作。

## 示例

### StoryBook

以 `StoryBook: 6.4.13` 为例，在 Taro 中使用需要在 StoryBook 安装完成之后，更新以下配置：

```js title=".storybook/main.js"
const webpack = require('webpack')
const path = require('path')

module.exports = {
  // ...
  babel: (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        require('babel-plugin-transform-taroapi').default,
        {
          apis: require(require.resolve('@tarojs/taro-h5/dist/taroApis', { basedir: path.resolve(__dirname, '..') })),
          packageName: '@tarojs/taro',
        },
      ],
    ],
  }),
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],
      alias: {
        ...config.resolve.alias,
        '@tarojs/taro': '@tarojs/taro-h5',
        // Note: 3.6 之前，请使用 '@tarojs/components$': '@tarojs/components/dist-h5/react',
        ['@tarojs/components$']: '@tarojs/components/lib/react',
      },
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.TARO_ENV': JSON.stringify('h5'),
        ENABLE_INNER_HTML: JSON.stringify(false),
        ENABLE_ADJACENT_HTML: JSON.stringify(false),
        ENABLE_SIZE_APIS: JSON.stringify(false),
        ENABLE_TEMPLATE_CONTENT: JSON.stringify(false),
        ENABLE_CLONE_NODE: JSON.stringify(false),
        ENABLE_CONTAINS: JSON.stringify(false),
        ENABLE_MUTATION_OBSERVER: JSON.stringify(false),
      }),
    ],
  }),
  // ...
}
```

:::caution 请注意
该方法不适用 `pxTransform` 方法，如果需要使用请先调用自行调用 `initPxTransform` 初始化配置 (目前 Taro 使用 webpack4 构建项目，无法在 StoryBook 中直接引用 `@tarojs/webpack-runner` 提供的方法引入所有配置，等升级到 webpack5 之后会提供替代解决方案)。
目前解决办法是在.storybook/preview.js 中预先执行`initPxTransform`并载入相关样式。
:::

```js title=".storybook/preview.js"
import { DecoratorFn } from '@storybook/react'

import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader'
import Taro from '@tarojs/taro'

import '@tarojs/components/dist/taro-components/taro-components.css'

export const decorators = [
  (Story) => {
    applyPolyfills().then(function () {
      defineCustomElements(window)
    })

    Taro.initPxTransform({
      designWidth: 750,
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
      },
    })
    return <Story />
  },
]

//...
```

:::解决 storybook 中渲染结果与设计稿大小不一致的问题（以 designWidth: 750px 为例)
:::

```html title=".storybook/preview-body.html"
<style>
  html {
    font-size: 23.4375px;
  }
</style>
```

### Jest

使用 Jest 测试也是类似，需要添加配置如下

```js title="jest"
module.exports = {
  // ...
  globals: {
    // ...
    window: true,
    DEPRECATED_ADAPTER_COMPONENT: false,
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    ENABLE_MUTATION_OBSERVER: true,
  },
  moduleNameMapper: {
    // ...
    '@tarojs/taro': '@tarojs/taro-h5',
    // '@tarojs/components': '@tarojs/components/lib/react',
    // '@tarojs/plugin-framework-react/dist/runtime': '<rootDir>/__mocks__/taro-framework',
    // '@tarojs/plugin-framework-vue2/dist/runtime': '<rootDir>/__mocks__/taro-framework',
    // '@tarojs/plugin-framework-vue3/dist/runtime': '<rootDir>/__mocks__/taro-framework',
  },
}
```

:::caution 请注意
该方法不适用路由跳转和部分生命周期测试。
:::

#### TabBar

如果项目需要测试 TabBar 相关的逻辑，需要将应用完成初始化，参看方法如下：

```js title="__tests__/tab-bar.test.js"
import * as Taro from '@tarojs/taro-h5'
import { buildApp } from './utils'

describe('tabbar', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    buildApp()
  })

  it('should be able to set/removeTabBarBadge', (done) => {
    Taro.eventCenter.once('__taroSetTabBarBadge', (res) =>
      res.successHandler({
        errMsg: 'setTabBarBadge:ok',
      })
    )
    Taro.eventCenter.once('__taroRemoveTabBarBadge', (res) =>
      res.successHandler({
        errMsg: 'removeTabBarBadge:ok',
      })
    )
    Taro.setTabBarBadge({
      index: 0,
      text: 'text',
    }).then((res) => {
      expect(res.errMsg).toBe('setTabBarBadge:ok')

      Taro.removeTabBarBadge({
        index: 0,
      }).then((res) => {
        expect(res.errMsg).toBe('removeTabBarBadge:ok')
        done()
      })
    })
  })
})
```

```js title="__tests__/utils.js"
import { createReactApp } from '@tarojs/plugin-framework-react/dist/runtime'
import { createRouter } from '@tarojs/router'
import React, { Component } from 'react'
import ReactDOM from 'react-test-renderer'

const appConfig: any = {
  pages: ['pages/index/index', 'pages/about/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#333',
    selectedColor: '#409EFF',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
      },
      {
        pagePath: '/pages/about/about',
        text: '关于',
      },
    ],
    mode: 'hash',
    basename: '/test/app',
    customRoutes: {
      '/pages/about/index': '/about',
    },
  },
  router: { mode: 'hash' },
}

export function buildApp() {
  const config: any = { ...appConfig }
  class App extends Component {
    render() {
      return this.props.children
    }
  }
  config.routes = [config.pages?.map((path) => ({ path, load: () => null }))]
  const inst = createReactApp(App, React, ReactDOM, config)
  createRouter(inst, config, 'React')
}
```

```js title="__mocks__/taro-framework.js"
const App = {}
export function createReactApp() {
  return { ...App }
}
export function createVueApp() {
  return { ...App }
}
export function createVue3App() {
  return { ...App }
}
```

#### Hooks

一些诸如 `useDidShow`、`useDidHide` 等等依赖于生命周期的 Hooks 并不会通过 Taro-H5 提供，使用它们需要提供 Mock 方法并挂在到 taro 对象上（可以参考 `@tarojs/plugin-framework-react/dist/api-loader` 中的方法注入），测试时如果需要触发钩子，则可以通过 `Taro.eventCenter` 来模拟。

### svg-sprite-loader

部分项目希望在 H5 使用 SVG sprites，为此需要使用 [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader) 覆盖 taro 提供的 loader

> 具体用法在这里并不会详细展开，可以参考官方的文档，在这里只说明和 Taro 相关的问题

```js title="config/index.js"
// ...
webpackChain(chain) {
  chain.merge({
    module: {
      rule: {
        // 覆盖 Taro 默认的图片加载配置
        'image': {
          test: /\.(png|jpe?g|gif|bpm|webp)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: path.resolve(__dirname, 'images/[name].[ext]'),
              },
            },
          ],
        },
        // 使用 svg-sprite-loader 的配置
        'svg-loader': {
          test: /.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {},
            },
            {
              loader: 'svgo-loader',
              options: {},
            },
          ],
        },
      },
    },
  });
},
imageUrlLoaderOption: {
  limit: 5000,
  exclude: [path.resolve(__dirname, '../src/images/icons')],
  name: 'static/images/[name].[hash:8].[ext]',
}
// ...
```

:::caution 请注意
另外使用 svg-sprite-loader 依旧需要引入图片，避免被 tree shaking 抖动掉可以改用动态导入，参考 Issue [9569](https://github.com/NervJS/taro/issues/9569)。
:::

### NextJS

社区 [@SyMind](https://github.com/SyMind) 大佬提供了编译 NextJS 应用的插件 [tarojs-plugin-platform-nextjs](https://github.com/SyMind/tarojs-plugin-platform-nextjs)，用于支持 Web 端支持 SSR 能力，可以根据项目需要自行选择。

---

## docs/optimized.mdx

---
title: 小程序性能优化指南
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Taro 3 为了兼容 React、Vue 等 Web 开发框架，在运行时对浏览器环境进行模拟，实现了 BOM 和 DOM 等一系列 API。相比 Taro 1/2，Taro 3 是一款重运行时、轻编译时的框架，在性能方面会有一定损耗。因此 Taro 3 提供了一系列的性能优化手段，从而提升 Taro 3 应用的性能。

## 半编译模式 —— CompileMode

详情请看[半编译模式](./complier-mode)。

## 模版不使用 XS
:::info
`4.0.7` 开始支持
:::info

模版的拼接使用 xs，会有时间上的损耗，如果要追求极致的性能，可以禁用在模版中使用 xs，但这会导致包体积变大。
用法：

在 Taro 编译配置中禁用模版 xs：

```js title="config/index.js"
const config = {
  mini: {
    experimental: {
      useXsForTemplate: false
    }
  }
  // ...
}
```

## 使用 WXS

:::info
Taro v3.6.25 开始支持。目前只支持在 Taro React 小程序中使用，暂不支持 Taro Vue，暂不支持在其他端使用。
:::

借助 **CompileMode**，Taro 可以支持使用各类小程序的视图层脚步语言，如微信小程序的 `wxs`、支付宝小程序的 `sjs`、京东小程序的 `jds`、头条小程序的 `sjs` 等。

用法：

```jsx title="pages/index/index.jsx"
import { View, ScrollView, Script } from '@tarojs/components'

export default function Index() {
  return (
    {/* 首先需要开启编译模式 */}
    <View compileMode>

      {/* <Script> 组件等于小程序 <wxs> 组件，需要填写 src 和 module 属性，详情请参考小程序官方文档 */}
      <Script src='./animation.wxs' module='ani'></Script>

      {/* 访问 WXS 的导出值 */}
      <View>{ani.msg}</View>
      <View>{ani.getMsg()}</View>
      <View hoverClass={ani.hoverClass}></View>
      <View hoverClass={ani.getHoverClass()}></View>

      {/* WXS 响应事件 */}
      <ScrollView onScrollToUpper={ani.toupper}>
        <View onTouchStart={ani.touchstart} onTouchMove={ani.touchmove} onTouchEnd={ani.touchend}></View>
      </ScrollView>
    </View>
  )
}
```

## 优化初次渲染性能

:::tip
一般情况下不需要开启，请根据实际情况进行使用。
:::

当初次渲染的数据量非常大时，可能会导致页面白屏一段时间。因此 Taro 提供了[预渲染](prerender)功能来解决此问题。

## 优化更新性能

:::tip
经验证明，此项优化能大大减少 Taro3 的更新卡顿问题，尤其是在低端机上。
:::

Taro3 使用小程序的 `template` 进行渲染，一般情况下并不会使用原生自定义组件。这会导致一个问题，所有的 `setData` 更新都是由页面对象调用，如果我们的页面结构比较复杂，更新的性能就会下降。

层级过深时 `setData` 的数据结构：

```js
page.setData({
  'root.cn.[0].cn.[0].cn.[0].cn.[0].markers': [],
})
```

针对这个问题，主要的思路是**借用小程序的原生自定义组件，以达到局部更新的效果**，从而提升更新性能。

期望的 `setData` 数据结构：

```js
component.setData({
  'cn.[0].cn.[0].markers': [],
})
```

开发者有两种办法可以实现这个优化：

### 1. 全局配置项 baseLevel

对于不支持模板递归的小程序（微信、QQ、京东小程序），在 DOM 层级达到一定数量后，Taro 会使用原生自定义组件协助递归。

简单理解就是 DOM 结构超过 N 层后，会使用原生自定义组件进行渲染。N 默认是 16 层，可以通过修改配置项 [baseLevel](/docs/config-detail#minibaselevel) 修改 N。

把 `baseLevel` 设置为 `8` 甚至 `4` 层，能非常有效地提升更新时的性能。但是设置是全局性的，会带来若干问题：

1. `flex` 布局在跨原生自定义组件时会失效，这是影响最大的一个问题。
2. `SelectorQuery.select` 方法的[跨自定义组件的后代选择器](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html)写法需要增加 `>>>`：`.the-ancestor >>> .the-descendant`

### 2. CustomWrapper 组件

为了解决全局配置不灵活的问题，我们增加了一个基础组件 `CustomWrapper`。它的作用是创建一个原生自定义组件，对后代节点的 `setData` 将由此自定义组件进行调用，达到局部更新的效果。

开发者可以使用它去**包裹遇到更新性能问题的模块**，提升更新时的性能。因为 `CustomWrapper` 组件需要手动使用，开发者能够清楚“这层使用了自定义组件，需要避免自定义组件的两个问题”。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="示例代码"
import { View, Text } from '@tarojs/components'

export default function () {
  return (
    <View className="index">
      <Text>Demo</Text>
      <CustomWrapper>
        <GoodsList />
      </CustomWrapper>
    </View>
  )
}
```

</TabItem>

<TabItem value="Vue">

```html title="示例代码"
<template>
  <view class="index">
    <text>Demo</text>
    <custom-wrapper>
      <GoodsList />
    </custom-wrapper>
  </view>
</template>

<script>
  import GoodsList from '@/components/goods-list'

  export default {
    components: {
      GoodsList,
    },
  }
</script>
```

</TabItem>
</Tabs>

## 优化长列表性能

针对长列表的场景，Taro 提供了 [VirtualList](virtual-list) 组件辅助开发者进行优化。

它**只会渲染当前可视区域内的组件**，非可视区域的组件将会在用户滚动到可视区域内后再渲染，从而减少实际渲染的组件、优化渲染性能。

## 跳转预加载

:::info
Taro 1 / 2 中提供的 componentWillPreload 钩子在 Taro 3 中已废弃。
:::

在小程序中，从调用 `Taro.navigateTo` 等路由跳转 API 后，到小程序页面触发 `onLoad` 会有一定延时，因此一些网络请求可以提前到发起跳转的前一刻去请求。

Taro 3 提供了 `Taro.preload` API，可以把需要预加载的内容作为参数传入，然后在新页面加载后通过 `Taro.getCurrentInstance().preloadData` 获取到预加载的内容。

例子：

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="示例代码（用法一）"
// A 页面
// 调用跳转方法前使用 Taro.preload
Taro.preload(fetchSomething())
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
componentWillMount () {
  console.log(Taro.getCurrentInstance().preloadData)
}
```

</TabItem>

<TabItem value="Vue">

```js title="示例代码（用法一）"
// A 页面
// 调用跳转方法前使用 Taro.preload
Taro.preload(fetchSomething())
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
mounted () {
  console.log(Taro.getCurrentInstance().preloadData)
}
```

</TabItem>
</Tabs>

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="示例代码（用法二）"
// A 页面
Taro.preload('x', 1)
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
componentWillMount () {
  console.log(Taro.getCurrentInstance().preloadData)
}
```

</TabItem>

<TabItem value="Vue">

```js title="示例代码（用法二）"
// A 页面
Taro.preload('x', 1)
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
mounted () {
  console.log(Taro.getCurrentInstance().preloadData)
}
```

</TabItem>
</Tabs>

## 写法最佳实践

对小程序的性能影响较大的有两个因素，分别是 `setData` 的**数据量**和单位时间 `setData` 函数的**调用次数**。

当遇到性能问题时，在项目中打印 `setData` 的数据将非常有利于帮助定位问题。开发者可以通过进入 Taro 项目的 `dist/taro.js` 文件，搜索定位 `.setData` 的调用位置，然后对数据进行打印。

在 Taro 中，会对 `setData` 做 **batch** 捆绑更新操作，因此更多时候只需要考虑 **setData 的数据量大小**问题。

以下是我们梳理的开发者需要注意的写法问题：

### 1. 删除楼层节点要谨慎处理

假设有一种这样一种结构：

```jsx
<View>
  <!-- 轮播 -->
  <Slider />
  <!-- 商品组 -->
  <Goods />
  <!-- 模态弹窗 -->
  {isShowModal && <Modal />}
</View>
```

Taro3 目前对节点的删除处理是有缺陷的。当 `isShowModal` 由 `true` 变为 `false` 时，模态弹窗会从消失。此时 `Modal` 组件的兄弟节点都会被更新，`setData` 的数据是 `Slider` + `Goods` 组件的 DOM 节点信息。

一般情况下，影响不会太大，开发者无须由此产生心智负担。但倘若待删除节点的兄弟节点的 DOM 结构非常复杂，如一个个楼层组件，删除操作的副作用会导致 `setData` 数据量较大，从而影响性能。

##### 解决办法：

目前我们可以这样优化，隔离删除操作：

```jsx
<View>
  <!-- 轮播 -->
  <Slider />
  <!-- 商品组 -->
  <Goods />
  <!-- 模态弹窗 -->
  <View>
    {isShowModal && <Modal />}
  </View>
</View>
```

> 我们正在对删除节点的算法进行优化，完全规避这种不必要的 setData，于 v3.1 推出。

### 2. 基础组件的属性要保持引用

> React

假设基础组件（如 `View`、`Input` 等）的属性值为非基本类型时，尽量保持对象的引用。

假设有以下写法：

```jsx
<Map
  latitude={22.53332}
  longitude={113.93041}
  markers={[
    {
      latitude: 22.53332,
      longitude: 113.93041,
    },
  ]}
/>
```

每次渲染时，React 会对基础组件的属性做浅对比，这时发现 `markers` 的引用不同，就会去更新组件属性。最后导致 `setData` 次数增多、`setData` 数据量增大。

#### 解决办法：

可以通过 `state`、闭包等手段保持对象的引用：

```jsx
<Map latitude={22.53332} longitude={113.93041} markers={this.state.markers} />
```

### 3. 基础组件不要挂载额外属性

基础组件（如 `View`、`Input` 等）如若设置了非标准的属性，目前这些额外属性会被一并进行 `setData`，而实际上小程序并不会理会这些属性，所以 `setData` 的这部分数据是冗余的。

例如 `Text` 组件的标准属性有 `selectable`、`user-select`、`space `、`decode` 四个，如果我们为它设置一个额外属性 `something`，那么这个额外的属性也是会被 setData。

```jsx
<Text something="extra" />
```

## 实战文章

- [《Taro 助力京喜拼拼项目性能体验优化》](/blog/2021-02-08-taro-jxpp)

---

## docs/preact.md

---
title: Preact
---

:::info
Taro v3.4 开始支持
:::

[Preact](https://preactjs.com) 是一款体积超小的类 React 框架。与 React 接近 **100k** 的体积相比，它的体积只有 **5k** 左右。在小程序严格的体积要求下，使用 Preact 省下的大量空间则显得弥足珍贵。

### 相关资料

- [与 React 的区别](https://preactjs.com/guide/v10/differences-to-react)

## 使用方法

### 安装依赖

```bash
yarn add preact @tarojs/plugin-framework-react
```

### 配置

1. 修改 Taro 编译配置：

```js title="config/index.js" {3}
const config = {
  // ...
  framework: 'preact',
}
```

2. 修改 Babel 配置：

```js title="babel.config.js" {6}
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'preact',
      },
    ],
  ],
}
```

3. 如果项目使用了 TypeScript，请打开 `skipLibCheck` 配置，以避免和其它 React 生态库配合使用时报类型错误：

```js title="tsconfig.json" {3}
{
  ...
  "skipLibCheck": true,
}
```

## H5

### Fast-Refresh

开发环境下，React 支持使用 [fast refresh](https://github.com/facebook/react/issues/16604#issuecomment-528663101) 实现组件的 **Hot Reload**。而在 Preact 的生态中，可以借助 [Prefresh](https://github.com/preactjs/prefresh/blob/main/README.md) 实现此功能。

Taro 在开发环境下默认开启 Prefresh，如果需要关闭此功能，需要同时修改 Webpack 和 Babel 的配置：

```js title="config/index.js" {5}
const config = {
  // ...
  h5: {
    devServer: {
      hot: false,
    },
  },
}
```

```js title="babel.config.js" {7}
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'preact',
        hot: false,
      },
    ],
  ],
}
```

---

## docs/prebundle.md

---
title: 依赖预加载
---

> 版本要求 3.5+, 目前该特性仅支持 h5 和小程序编译

编译优化有很多可供选择的方案，通过 webpack5 我们可以实现很多有意思的特性，而依赖预加载就是其中之一。受 [UmiJS mfsu](https://umijs.org/zh-CN/docs/mfsu) 特性的启发，可以预先把项目的 node_modules 依赖打包为一个**模块联邦（Module Federation）** remote 应用，再次编译时 Webpack 则无需再对依赖进行编译，从而提升编译速度。

## 开启 PreBundle 配置

对于很多大型项目编译是非常耗时的事情，很多细小的变更都需要全量编译会带来很高的损耗。通过依赖预编译跳过部分编译，开发环境热更新占用内存可以大大降低，热更新所需时间也将大幅减少；生产模式也可以通过提前编译依赖，大幅提升部署效率。

> 通过 [compiler.prebundle](/docs/next/config-detail#compilerprebundle) 配置开启依赖预编译特性。

```jsx
/** config/index.js */
const config = {
  compiler: {
    type: 'webpack5',
    // 仅 webpack5 支持依赖预编译配置
    prebundle: {
      enable: true,
    },
  },
}
```

:::note
Web 端使用依赖预编译特性时，需要在最外层增加 bootstrap 动态引入入口文件，来确保所有依赖都能够被正确加载，如果使用 [dynamic-import-node](/docs/babel-config/#dynamic-import-node) 配置会导致依赖加载失败，请在使用该配置时禁用 prebundle 特性。同时使用依赖预编译时，chunkFilename 不支持 [hash]、[chunkhash] 这一类的占位符，如果使用 `optimization.chunkId` 参数，则仅支持传入 `deterministic | named`。
:::

## 特性实现

依赖预编译可以分为三步：

1. 收集依赖
2. 打包依赖
3. 打包 Module Federation Remote 应用

Taro 参考 [Vite](https://cn.vitejs.dev/) 使用了 esbuild 收集用户使用到的第三方依赖，并分别进行打包。打包后的模块会作为 Webpack 的 entry，最终打包为模块联邦 Remote 应用，供主应用（Host）消费。实现细节请参考 [RFC 文档](https://github.com/NervJS/taro/discussions/11533)。

Taro 会在小程序环境的 dev 模式下默认开启依赖预编译功能。首次编译时，因为使用了 esbuild 打包第三方依赖，所以会比普通编译稍快。二次编译时，Taro 能直接复用 Remote App，Webpack 只需编译业务代码，因此根据不同项目会有不同的编译提速效果。

依赖预编译的流程图：

![https://storage.360buyimg.com/cjj-pub-images/prebundle.png](https://storage.360buyimg.com/cjj-pub-images/prebundle.png)

## 提速效果

以 [NutUI 组件示例库](https://github.com/jdf2e/nutui/tree/next/src/sites/mobile-taro/vue)为例，分别测试 dev 与 prod 环境下编译微信小程序的编译提速效果：

![compile-speed_dev](https://storage.jd.com/cjj-pub-images/compile-speed_dev.png)

![compile-speed_prod](https://storage.jd.com/cjj-pub-images/compile-speed_prod.png)

可以看出：

1. 在 dev 环境下因为 Taro 默认开启了依赖预编译，因此 Webpack5 首次编译速度比 Webpack4 稍快。而 prod 环境没有默认开启依赖预编译，因此两者速度相当（而且 Webpack5 需要写入缓存，可能会比 Webpack4 稍慢）。
2. 无论是 dev 还是 prod 环境，在完全命中缓存的最优情况下，Webpack5 的编译速度都能得到极大提升。即使是修改源码导致了部分缓存失效时，编译速度仍然比首次编译快得多。

## 第三方接入

依赖预编译特性由 `@tarojs/webpack5-prebundle` 提供，通过简易调整就可以在任意 webpack5 项目内接入该特性。

```ts
import Prebundle from '@tarojs/webpack5-prebundle'
import webpack from 'webpack'
import Chain from 'webpack-chain'

const chain = new Chain()
chain.merge(config)

const prebundle = new Prebundle({ chain })
await prebundle.run({
  enable: true, // 启用依赖预编译
})
webpack(chain.toConfig())
```

通过 `webpack-chain` 传入 webpack 配置，就能自动扫描相关依赖并生成依赖预编译文件供团队协同开发使用，prebundle.run 参数与 Taro [compiler.prebundle](/docs/next/config-detail#compilerprebundle) 配置一致。

:::note
Web 端使用依赖预编译特性时，需要在最外层增加 bootstrap 动态引入入口文件，来确保所有依赖都能够被正确加载。在 Taro 中，在入口文件加载时调用虚拟模块插件，动态设置 `app.boot` 文件来加载入口，其他项目引用时也可以使用同样的方法设置入口：

```ts
import { VirtualModule } from '@tarojs/webpack5-prebundle/dist/h5'

VirtualModule.writeModule(bootPath, "import('./app')")
```

当然手动更改入口文件引用的方法，可以跳过该操作，这样操作在普通项目中更为适用。
:::

---

## docs/prerender.md

---
title: 预渲染（Prerender）
---

Prerender 是由 Taro CLI 提供的在小程序端提高页面初始化渲染速度的一种技术，它的实现原理和服务端渲染（Server-side Rendering）一样：将页面初始化的状态直接渲染为无状态(dataless)的 wxml，在框架和业务逻辑运行之前执行渲染流程。经过 Prerender 的页面初始渲染速度通常会和原生小程序一致甚至更快。

## 为什么需要 Prerender?

Taro Next 在一个页面加载时需要经历以下步骤：

1. 框架（React/Nerv/Vue）把页面渲染到虚拟 DOM 中
2. Taro 运行时把页面的虚拟 DOM 序列化为可渲染数据，并使用 `setData()` 驱动页面渲染
3. 小程序本身渲染序列化数据

和原生小程序或编译型小程序框架相比，步骤 1 和 步骤 2 是多余的。如果页面的业务逻辑代码没有性能问题的话，大多数性能瓶颈出在步骤 2 的 `setData()` 上：由于初始化渲染是页面的整棵虚拟 DOM 树，数据量比较大，因此 `setData()` 需要传递一个比较大的数据，导致初始化页面时会一段白屏的时间。这样的情况通常发生在页面初始化渲染的 wxml 节点数比较大或用户机器性能较低时发生。

## 使用 Prerender

使用 Prerender 非常简单，你可以找到项目根目录下的 `config` 文件夹，根据你的项目情况更改 `index.js`/`dev.js`/`prod.js` 三者中的任意一个[项目配置](./config.md)，在编译时 Taro CLI 会根据你的配置自动启动 prerender：

```js title="/config/index.js 或 /config/dev.js 或 /config/prod.js "
const config = {
  ...
  mini: {
    prerender: {
      match: 'pages/shop/**', // 所有以 `pages/shop/` 开头的页面都参与 prerender
      include: ['pages/any/way/index'], // `pages/any/way/index` 也会参与 prerender
      exclude: ['pages/shop/index/index'] // `pages/shop/index/index` 不用参与 prerender
    }
  }
};

module.exports = config
```

完整 Prerender 配置可参看下表：

| 参数          | 类型                                | 默认值  | 必填 | 说明                                                                   |
| ------------- | ----------------------------------- | ------- | ---- | ---------------------------------------------------------------------- |
| match         | `string` `string[]`                 |         | 否   | glob 字符串或 glob 字符串数组，能匹配到本参数的页面会加入 prerender    |
| include       | `Array<string>` `Array<PageConfig>` | `[]`    | 否   |  页面路径与数组中字符串完全一致的会加入 prerender                      |
| exclude       | `string[]`                          | `[]`    | 否   |  页面路径与数组中字符串完全一致的**不会**加入 prerender                |
| mock          | `Record<string, unknown>`           |         | 否   | 在 prerender 环境中运行的全局变量，键名为变量名，键值为变量值          |
| console       | `boolean`                           | `false` | 否   | 在 prerender 过程中 `console` 打印语句是否执行                         |
| transformData | `Function`                          |         | 否   | 自定义虚拟 DOM 树处理函数，函数返回值会作为 `transformXML` 的参数      |
| transformXML  | `Function`                          |         | 否   | 自定义 XML 处理函数，函数返回值是 Taro 运行时初始化结束前要渲染的 wxml |

在表中有用到的类型：

```typescript
// PageConfig 是开发者在 prerender.includes 配置的页面参数
interface PageConfig {
  path: string // 页面路径
  params: Record<string, unknown> // 页面的路由参数，对应 `getCurrentInstance().router.params`
}

// DOM 树数据，Taro 通过遍历它动态渲染数据
interface MiniData {
  ['cn' /* ChildNodes */]: MiniData[]
  ['nn' /* NodeName */]: string
  ['cl' /* Class */]: string
  ['st' /* Style */]: string
  ['v' /* NodeValue */]: string
  uid: string
  [prop: string]: unknown
}

type transformData = (data: MiniData, config: PageConfig) => MiniData

type transformXML = (
  data: MiniData,
  config: PageConfig,
  xml: string // 内置 xml 转换函数已经处理好了的 xml 字符串
) => string
```

Prerender 的所有配置选项都是选填的，就多数情况而言只需要关注 `match`、`include`、`exclude` 三个选项，`match` 和 `include` 至少填写一个才能匹配到预渲染页面，三者可以共存，当匹配冲突时优先级为 `match` < `include` < `exclude`。

和所有技术一样，Prerender 并不是银弹，使用 Prerender 之后将会有以下的 trade-offs 或限制：

- 页面打包的体积会增加。Prerender 本质是一种以空间换时间的技术，体积增加的多寡取决于预渲染 wxml 的数量。
- 在 Taro 运行时把真实 DOM 和事件挂载之前（这个过程在服务端渲染被称之为 `hydrate`），预渲染的页面不会相应任何操作。
- Prerender 不会执行例如 `componentDidMount()`(React)/`ready()`(Vue) 这样的生命周期，这点和服务端渲染一致。如果有处理数据的需求，可以把生命周期提前到 `static getDerivedStateFromProps()`(React) 或 `created()`(Vue)。

## 进阶说明和使用

### `PRERENDER` 全局变量

在预渲染容器有一个名为 `PRERENDER` 的全局变量，它的值为 `true`。你可以通过判断这个变量是否存在，给预渲染时期单独编写业务逻辑：

```javascript
if (typeof PRERENDER !== 'undefined') {
  // 以下代码只会在预渲染中执行
  // do something
}
```

### disablePrerender

对于任意一个原生组件，如果不需要它在 Prerender 时中显示，可以把组件的 `disablePrerender` 属性设置为 `true`，这个组件和它的子孙都不会被渲染为 wxml 字符串。

```jsx
/* id 为 test 的组件和它的子孙在预渲染时都不会显示 */
<View id="test" disablePrerender>
  ...children
</View>
```

### 自定义渲染

当默认预渲染的结果不满足你的预期时，Taro 提供了两个配置项自定义预渲染内容。

Prerender 配置中的 `transformData()` 对需要进行渲染的虚拟 DOM 进行操作：

```javascript
const config = {
  ...
  mini: {
    prerender: {
      match: 'pages/**',
      tranformData (data, { path }) {
        if (path === 'pages/video/index') {
          // 如果是页面是 'page/video/index' 页面只预渲染一个 video 组件
          // 关于 data 的数据结构可以参看上文的数据类型签名
          data.nn = 'video'
          data.cn = []
          data.src = 'https://v.qq.com/iframe/player.html?vid=y08180lrvth&tiny=0&auto=0'
          return data
        }

        return data
      }
    }
  }
}
```

Prerender 配置中的 `transformXML()` 可以自定义预渲染输出的 wxml：

```javascript
const config = {
  ...
  mini: {
    prerender: {
      match: 'pages/**',
      tranformXML (data, { path }, xml) {
        if (path === 'pages/video/index') {
          // 如果是页面是 'page/video/index' 页面只预渲染一个 video 组件
          return `<video src="https://v.qq.com/iframe/player.html?vid=y08180lrvth&tiny=0&auto=0" />`
        }

        return xml
      }
    }
  }
}
```

### 减少预渲染的 wxml 数量

一般而言，用户只需要看到首屏页面，但实际上页面初次渲染的我们构建的业务逻辑有可能会把页面的所有内容都渲染，而 Taro 初始渲染慢的原因在于首次传递的数据量过大，因此可以调整我们的业务逻辑达到只渲染首屏的目的：

```jsx
class SomePage extends Component {
  state = {
    mounted: false,
  }

  componentDidMount() {
    // 等待组件载入，先渲染了首屏我们再渲染其它内容，降低首次渲染的数据量
    // 当 mounted 为 true 时，CompA, B, C 的 DOM 树才会作为 data 参与小程序渲染
    // 注意我们需要在 `componentDidMount()` 这个周期做这件事（对应 Vue 的 `ready()`），更早的生命周期 `setState()` 会与首次渲染的数据一起合并更新
    // 使用 nextTick 确保本次 setState 不会和首次渲染合并更新
    Taro.nextTick(() => {
      this.setState({
        mounted: true,
      })
    })
  }

  render() {
    return (
      <View>
        <FirstScreen /> /* 假设我们知道这个组件会把用户的屏幕全部占据 */
        {this.state.mounted && (
          <React.Fragment>
            {' '}
            /* CompA, B, C 一开始并不会在首屏中显示 */
            <CompA />
            <CompB />
            <CompC />
          </React.Fragment>
        )}
      </View>
    )
  }
}
```

这样的优化除了加快首屏渲染以及 `hydrate` 的速度，还可以降低 Prerender 的所增加的 wxml 体积。当你的优化做得足够彻底时，你会发现多数情况下并不需要 Prerender。

## 常见问题

### 使用了部分 Taro API 后预渲染报错

> 相关 Issue：[#9311](https://github.com/NervJS/taro/issues/9311)

Taro 预渲染时会使用 [vm2](https://github.com/patriksimek/vm2) 创建一个沙箱环境，并在沙箱中注入一些全局变量。

这些注入的全局变量中，包括了小程序的全局对象（如 `wx`），它是使用 `miniprogram-simulate` 这个包模拟的。

这样做会导致两个问题：

1. `miniprogram-simulate` 中部分 API 使用了一些全局变量如 `wx`、`localStorage` 等，开发者使用这些 API 时会报错。
2. `miniprogram-simulate` 只支持微信小程序部分 API。

因此，开发者如果遇到了 `miniprogram-simulate` 包中全局变量报错的问题，可以舍弃 `miniprogram-simulate`，改为自行模拟，例如：

```js
// config/index.js
const config = {
  mini: {
    prerender: {
      // 使用 mock 参数自行模拟 wx.clearStorageSync
      mock: {
        wx: {
          clearStorageSync: () => 'cjj',
        },
      },
    },
  },
}
```

### H5 Prerender

Taro 目前并没有提供 H5 端的预渲染配置，可以考虑使用相关的开源方案，比如 `prerender-spa-plugin`:

```js title="/config/prod.js "
const config = {
  ...
  h5: {
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    webpackChain (chain) {
      /**
       * 如果 h5 端首屏加载时间过长，可以使用 prerender-spa-plugin 插件预加载首页。
       * @docs https://github.com/chrisvfritz/prerender-spa-plugin
       */
      if (process.env.TARO_ENV === 'h5') {
        const path = require('path')
        const Prerender = require('prerender-spa-plugin')
        const staticDir = path.join(__dirname, '..', 'dist')
        chain
          .plugin('prerender')
          .use(new Prerender({
            staticDir,
            routes: [ '/pages/index/index' ],
            postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
          }))
      }
    }
  }
};

module.exports = config
```

---

## docs/react-devtools.md

---
title: React DevTools
---

:::note
Taro v3.3.1 开始支持。
:::

在开发小程序时可以使用 [React DevTools](https://github.com/facebook/react/blob/main/packages/react-devtools/README.md)。

## 使用方法

### 1. 安装

在项目中安装 Taro 插件 `@tarojs/plugin-react-devtools`：

```sh
$ yarn add --dev @tarojs/plugin-react-devtools
```

### 2. 配置 Taro 插件

在 Taro 编译配置中配置使用 `@tarojs/plugin-react-devtools`：

```js title="config/dev.js"
config = {
  plugins: ['@tarojs/plugin-react-devtools'],
  // ...
}
```

### 3. 编译项目

```sh
$ taro build --type weapp --watch
```

## 插件参数

插件 `@tarojs/plugin-react-devtools` 具有以下参数：

### enabled

`boolean`

默认值：`true`

控制是否连接 `react-devtools`，开启后会注入 backend 的代码到开发者的应用中。

### hostname

`string`

默认值：`localhost`

当 localhost 不可用时，自定义 `taro` 连接 `react-devtools` 的主机名，多用于局域网或远程调试时使用。

### port

`number`

默认值：`8097`

React DevTools 使用的 Websocket 端口。

## 注意事项

- 强制锁定了 `react-devtools` 的版本，更新版本需要修改 `@tarojs/plugin-react-devtools` 插件的代码。
- [为了识别 custom hooks](https://github.com/facebook/react/blob/main/packages/react-devtools/OVERVIEW.md#inspecting-hooks)，backend 会对部分符合条件的函数式组件执行 `shallow rendering`，开发者需要注意代码是否存在副作用。

另外，目前对 devtools 功能的支持不够全面，有些功能需要针对小程序环境魔改 backend 才能实现，欢迎共建～

- 支持元素高亮。
- 在小程序的 `storage` 中记录 `filters` 变化。

## 详细设计

详细设计请看 [RFC](https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0005-react-devtools.md)。

---

## docs/request.md

---
title: 跨端请求库
---

本篇介绍如何在 Taro 中使用 web 生态下的网络请求库, 这里以 `axios` 为例。

## 原理

我们通过 [@tarojs/plugin-http](https://github.com/NervJS/taro/tree/next/packages/taro-plugin-http) 插件，在小程序环境下 runtime 注入模拟实现的 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) , 从而支持在小程序环境中使用 web 生态下的各种网络请求库。至此，你可以在 h5、小程序、react native 中畅快使用 [axios](https://axios-http.com/) 库作为请求库。

理论上， 任何底层基于 XMLHttpRequest 开发的 web 库你都可以自由使用。

## 插件使用

安装

```bash
npm i @tarojs/plugin-http axios
```

配置

```typescript
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-http'],
}
```

代码引入

```typescript
import axios from "axios";

const request = axios.create({
    baseURL: ""
});


export request;
```

## 插件完整配置参数

| 参数名           | 默认值 | 说明                                                                                          |
| :--------------- | :----- | :-------------------------------------------------------------------------------------------- |
| enableCookie     | false  | (是否)注入相关代码，支持 `document.cookie` 、 通过后端返回 `Set-Cookie` 响应头来设置 `cookie` |
| disabledFormData | true   | (是否)禁用掉 FormData 全局对象                                                                |
| disabledBlob     | true   | (是否)禁用掉 Blob 全局对象                                                                    |

## 限制

:::danger 限制

- 暂不支持上传，且插件默认会将全局 `FormData` 、 `Blob` 对象替换成 `undefined`（仅针对小程序环境）
- 本插件需搭配 taro 主包 3.6.0 及其以上版本使用
- webpack4 用户需升级插件版本为 `3.6.6` 及其以上

:::

## 插件发布记录

- `3.6.0` 插件首次发布
- `3.6.6` [fix: @tarojs/plugin-http 对 webpack4 的兼容](https://github.com/NervJS/taro/pull/13699)
- `3.6.7` 优化事件属性的实现， [#13824](https://github.com/NervJS/taro/issues/13824)
- `3.6.8` 修复发送请求时未正确携带包含 `httpOnly` 的 `cookie` 的问题，[#13941](https://github.com/NervJS/taro/issues/13941)

---

## docs/size.md

---
title: 设计稿及尺寸单位
---

在 Taro 中尺寸单位建议使用 `px`、 `百分比 %`，Taro 默认会对所有单位进行转换。在 Taro 中书写尺寸按照 1:1 的关系来进行书写，即从设计稿上量的长度 `100px`，那么尺寸书写就是 `100px`，当转成微信小程序的时候，尺寸将默认转换为 `100rpx`，当转成 H5 时将默认转换为以 `rem` 为单位的值。

如果你希望部分 `px` 单位不被转换成 `rpx` 或者 `rem` ，最简单的做法就是在 px 单位中增加一个大写字母，例如 `Px` 或者 `PX` 这样，则会被转换插件忽略。

结合过往的开发经验，Taro 默认以 `750px` 作为换算尺寸标准，如果设计稿不是以 `750px` 为标准，则需要在项目配置 `config/index.js` 中进行设置，例如设计稿尺寸是 `640px`，则需要修改项目配置 `config/index.js` 中的 `designWidth` 配置为 `640`：

```jsx title="/config/index.js"
const config = {
  projectName: 'myProject',
  date: '2018-4-18',
  designWidth: 640,
  ....
}
```

目前 Taro 支持 `750`、 `640` 、 `828` 三种尺寸设计稿，他们的换算规则如下：

```jsx
const DEVICE_RATIO = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2,
}
```

建议使用 Taro 时，设计稿以 iPhone 6 `750px` 作为设计尺寸标准。

如果你的设计稿是 `375` ，不在以上三种之中，那么你需要把 `designWidth` 配置为 `375`，同时在 `DEVICE_RATIO` 中添加换算规则如下：

```jsx {5}
const DEVICE_RATIO = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2,
  375: 2 / 1,
}
```

:::info
Taro v3.4.13 开始支持配置**函数形式**的 `designWidth`，借此开发者可以动态地设置 `designWidth`，详情请查看：[config.designWidth](./config-detail#designwidth)
:::

## API

在编译时，Taro 会帮你对样式做尺寸转换操作，但是如果是在 JS 中书写了行内样式，那么编译时就无法做替换了，针对这种情况，Taro 提供了 API `Taro.pxTransform` 来做运行时的尺寸转换。

```jsx
Taro.pxTransform(10) // 小程序：rpx，H5：rem
```

## 配置

### 默认配置

**默认配置会对所有的 `px` 单位进行转换，有大写字母的 `Px` 或 `PX` 则会被忽略。**

`postcss.pxtransform` 的参数默认值如下：

```js title="config/index.js"
config = {
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          onePxTransform: true,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        }
      }
    }
  }
  h5: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          onePxTransform: true,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          baseFontSize: 20,
          maxRootSize: 40,
          minRootSize: 20
        }
      }
    }
  }
}
```

### `onePxTransform` (Boolean)

设置 1px 是否需要被转换

### `unitPrecision` (Number)

REM 单位允许的小数位。

### `propList` (Array)

允许转换的属性。

- Values need to be exact matches.
- Use wildcard `*` to enable all properties. Example: `['*']`
- Use `*` at the start or end of a word. (`['*position*']` will match `background-position-y`)
- Use `!` to not match a property. Example: `['*', '!letter-spacing']`
- Combine the "not" prefix with the other prefixes. Example: `['*', '!font*']`

### `selectorBlackList`

黑名单里的选择器将会被忽略。

- If value is string, it checks to see if selector contains the string.
  - `['body']` will match `.body-class`
- If value is regexp, it checks to see if the selector matches the regexp.
  - `[/^body$/]` will match `body` but not `.body`

### `replace` (Boolean)

直接替换而不是追加一条进行覆盖。

### `mediaQuery` (Boolean)

允许媒体查询里的 px 单位转换

### `minPixelValue` (Number)

设置一个可被转换的最小 px 值

配置规则对应到 `config/index.js` ，例如：

```js {9-14,20-25} title="/config/index.js"
{
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true
      },
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['body']
        }
      }
    }
  },
  mini: {
    // ...
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['body']
        }
      }
    }
  }
}
```

### `targetUnit` (String)

转换后的单位，可选值为 `rpx`、`vw`、`rem`，当前仅支持小程序 (默认 `rpx`) 和 Web 端 (默认 `rem`)。

> Web 端使用 `rem` 单位时会注入脚本用于设置 body 上的 `font-size` 属性，其他单位无该操作。

### `baseFontSize` (Number, H5 Only, Default: 20)

H5 字体尺寸大小基准值，开发者可以自行调整单位换算的基准值。

### `maxRootSize` (Number, H5 Only, Default: 40)

H5 根节点 `font-size` 的最大值。

### `minRootSize` (Number, H5 Only, Default: 20)

H5 根节点 `font-size` 的最小值。

## CSS 编译时忽略（过滤）

### 忽略单个属性

当前忽略单个属性的最简单的方法，就是 px 单位使用大写字母。

```css
/* `px` is converted to `rem` */
.convert {
  font-size: 16px; // converted to 1rem
}

/* `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers */
.ignore {
  border: 1px solid; // ignored
  border-width: 2px; // ignored
}
```

### 忽略样式文件

对于头部包含注释 `/*postcss-pxtransform disable*/` 的文件，插件不予处理。

### 忽略样式举例

样式文件里多行文本省略时我们一般如下面的代码：

```css {3}
.textHide {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

但 Taro 编译后少了 `-webkit-box-orient: vertical;` 这条样式属性，此时我们需要忽略掉这条样式

#### 忽略样式方法 1 加入 CSS 注释强制声明忽略下一行

```css {1}
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
```

#### 忽略样式方法 2 加入 CSS 注释强制声明注释中间多行

```css {1,3}
/* autoprefixer: off */
-webkit-box-orient: vertical;
/* autoprefixer: on */
```

#### 忽略样式方法 3 写成行内样式

```jsx {2-9}
<View
  style={{
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    'text-overflow': 'ellipsis',
    overflow: 'hidden',
    'line-height': 2,
  }}
>
  这是要省略的内容这是要省略的内容这是要省略的内容
</View>
```

### 相关链接

- [Taro 多行文本省略不生效](https://taro-club.jd.com/topic/2270/taro%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E7%9C%81%E7%95%A5%E4%B8%8D%E7%94%9F%E6%95%88)

---

## docs/virtual-list.mdx

---
title: 长列表渲染（虚拟列表）
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

在典型的 Taro 应用中，正常的列表渲染遵循以下的逻辑：

1. 生成或从远程加载数据
2. 把数据加入框架的响应式数据中
3. 框架使用 diff 算法或其它机制根据数据的不同尝试全量更新视图
4. Taro 运行时捕获框架的更新请求更新视图

如果按照此逻辑，当第一步我们生成或加载的数据量非常大时就可能会产生严重的性能问题，导致视图无法响应操作一段时间。为了解决这个问题，我们可以采用另一种方式：比起全量渲染数据生成的视图，可以只渲染**当前可视区域(visible viewport)**的视图，非可视区域的视图在用户滚动到可视区域再渲染：

![virtual-list](https://img20.360buyimg.com/ling/jfs/t1/125645/6/13305/50138/5f6aaaa4E2f20eba7/d70a2d2da2d68de1.jpg)

> 虚拟列表仅支持单列渲染，多列渲染请使用[虚拟瀑布流](./virtual-waterfall)组件。

## 示例

### 基础示例

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

在 React Like 框架中我们可以直接从 `@tarojs/components-advanced/dist/components/virtual-list` 引入虚拟列表（VirtualList）组件：

```js
import VirtualList from '@tarojs/components-advanced/dist/components/virtual-list'
```

一个最简单的长列表组件会像这样，`VirtualList` 的 6 个属性都是必填项：

```jsx
function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset)
}

const Row = React.memo(({ id, index, data }) => {
  return (
    <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
      Row {index} : {data[index]}
    </View>
  )
})

export default class Index extends Component {
  state = {
    data: buildData(0),
  }

  render() {
    const { data } = this.state
    const dataLen = data.length
    return (
      <VirtualList
        height={800} /* 列表的高度 */
        width="100%" /* 列表的宽度 */
        item={Row} /* 列表单项组件，这里只能传入一个组件 */
        itemData={data} /* 渲染列表的数据 */
        itemCount={dataLen} /* 渲染列表的长度 */
        itemSize={100} /* 列表单项的高度  */
      />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

在 Vue 中使用虚拟列表，我们需要在入口文件声明使用：

```js
// app.js 入口文件
import Vue from 'vue'
import registerVirtualList from '@tarojs/components-advanced/dist/components/virtual-list'
// Note: 使用以下路径导出插件可以在 vue 中获得更好的类型支持
// import registerVirtualList from '@tarojs/components-advanced/dist/components/virtual-list/vue'

Vue.use(registerVirtualList)
```

一个最简单的长列表组件会像这样，`virtual-list` 的 6 个属性都是必填项：

```html
<! –– row.vue 单项组件 ––>
<template>
  <view :id="id" :class="index % 2 ? 'ListItemOdd' : 'ListItemEven'"> Row {{ index }} : {{ data[index] }} </view>
</template>

<script>
  export default {
    props: ['id', 'index', 'data'],
  }
</script>

<! –– page.vue 页面组件 ––>
<template>
  <virtual-list
    class="List"
    :height="500"
    :item-data="list"
    :item-count="list.length"
    :item-size="100"
    :item="Row"
    width="100%"
  />
</template>

<script>
  import { markRaw } from 'vue'
  import Row from './row.vue'

  function buildData(offset = 0) {
    return Array(100)
      .fill(0)
      .map((_, i) => i + offset)
  }

  export default {
    data() {
      return {
        Row: markRaw(Row),
        list: buildData(0),
      }
    },
  }
</script>
```
</TabItem>
</Tabs>

### 无限滚动

实现无限滚动也非常简单，我们只需要在列表滚动到底部时，往列表尾部追加数据即可：

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

```jsx
const Row = React.memo(({ id, index, data }) => {
  return (
    <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
      Row {index} : {data[index]}
    </View>
  )
})

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset)
}

export default class Index extends Component {
  state = {
    data: buildData(0),
  }

  loading = false

  listReachBottom() {
    Taro.showLoading()
    // 如果 loading 与视图相关，那它就应该放在 `this.state` 里
    // 我们这里使用的是一个同步的 API 调用 loading，所以不需要
    this.loading = true
    setTimeout(() => {
      const { data } = this.state
      this.setState(
        {
          data: data.concat(buildData(data.length)),
        },
        () => {
          this.loading = false
          Taro.hideLoading()
        }
      )
    }, 1000)
  }

  render() {
    const { data } = this.state
    const dataLen = data.length
    const itemSize = 100
    return (
      <VirtualList
        className="List"
        height={500}
        item={Row}
        itemData={data}
        itemCount={dataLen}
        itemSize={itemSize}
        width="100%"
        onScroll={({ scrollDirection, scrollOffset }) => {
          if (
            // 避免重复加载数据
            !this.loading &&
            // 只有往前滚动我们才触发
            scrollDirection === 'forward' &&
            // 5 = (列表高度 / 单项列表高度)
            // 100 = 滚动提前加载量，可根据样式情况调整
            scrollOffset > (dataLen - 5) * itemSize + 100
          ) {
            this.listReachBottom()
          }
        }}
      />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <virtual-list
    class="List"
    :height="500"
    :item-data="list"
    :item-count="dataLen"
    :item-size="itemHeight"
    :item="Row"
    width="100%"
    @scroll="onScroll"
  />
</template>

<script>
  import { markRaw } from 'vue'
  import Row from './row.vue'

  function buildData(offset = 0) {
    return Array(100)
      .fill(0)
      .map((_, i) => i + offset)
  }

  export default {
    data() {
      return {
        Row: markRaw(Row),
        list: buildData(0),
        loading: false,
        itemHeight: 100,
      }
    },
    computed: {
      dataLen() {
        return this.list.length
      },
    },
    methods: {
      listReachBottom() {
        Taro.showLoading()
        this.loading = true
        setTimeout(() => {
          const { data } = this.state
          this.setState(
            {
              data: data.concat(buildData(data.length)),
            },
            () => {
              this.loading = false
              Taro.hideLoading()
            }
          )
        }, 1000)
      },
      onScroll({ scrollDirection, scrollOffset }) {
        if (
          // 避免重复加载数据
          !this.loading &&
          // 只有往前滚动我们才触发
          scrollDirection === 'forward' &&
          // 5 = (列表高度 / 单项列表高度)
          // 100 = 滚动提前加载量，可根据样式情况调整
          scrollOffset > (this.dataLen - 5) * this.itemHeight + 100
        ) {
          this.listReachBottom()
        }
      },
    },
  }
</script>
```
</TabItem>
</Tabs>

## Props

### height

> **类型：** `number | string`

列表的高度。

> 3.6.10 及以下版本，当滚动方向为垂直时，`height` 必须为 `number` 类型。

### width

> **类型：** `number | string`

列表的宽度。

> 3.6.10 及以下版本，当滚动方向为水平时，`width` 必须为 `number` 类型。

### item (Required)

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> **类型：** `ReactComponent` （原 children 参数）

推荐使用 `React.memo` 或 `React.PureComponent` 或使用 `shouldComponentUpdate()` 来优化此组件，避免不必要的渲染。

</TabItem>

<TabItem value="Vue">

> **类型：** `VueComponent`

推荐使用 `markRaw` 或使用 `shallowReactive` 来优化此组件。

</TabItem>
</Tabs>

将要渲染的列表单项组件。组件的 `props` 有 4 个属性：

- `id`: 单项的 ID，必须传入组件的 `id` 中
- `index`: 组件渲染数据的索引
- `data`: 组件渲染的数据，同虚拟瀑布流 `itemData`
- `isScrolling`: 组件是否正在滚动，当 `useIsScrolling` 值为 `true` 时返回布尔值，否则返回 `undefined`

### itemCount (Required)

> **类型：** `number`

列表的长度。

### itemData (Required)

> **类型：** `Array<any>`

渲染数据。

### itemSize (Required)

> **类型：** `number ｜ (index?: number, itemData?: Array<any>) => number`

列表单项的大小，垂直滚动时为高度，水平滚动时为宽度。

### unlimitedSize

> **类型：** `boolean`

解开高度列表单项大小限制，默认值使用: itemSize (请注意，初始高度与实际高度差异过大会导致隐患)。

### position

> **类型：** `'absolute' | 'relative' | 'brick'`

布局方式，默认采用 "absolute"

> - `absolute`：绝对定位布局模式，列表单项的位置由 `top` 和 `left` 决定
> - `relative`：相对定位布局模式，插入前置节点替代未显示单项的高度
> - `brick`：相对定位布局模式，未显示单项不移除，保留单项高度 (v3.6.10 及以下不支持)
>   - 相比 `relative` 模式 `brick` 模式占用节点更多会导致一定性能问题，但保留未显示单项节点可提升部分场景显示速度

#### layout

> **类型：** `'vertical' | 'horizontal'`; **默认值：** `'vertical'`

滚动方向。`vertical` 为垂直滚动，`horizontal` 为平行滚动。默认为 `vertical`。

### initialScrollOffset (Default: 0)

> **类型：** `number`

初始滚动偏移值。

- 水平滚动时，影响 `scrollLeft` 的值；
- 垂直滚动时，影响 `scrollTop` 的值。

### overscanCount (Default: 1)

> **类型：** `number`

在可视区域之外渲染的列表单项数量，值设置得越高，快速滚动时出现白屏的概率就越小，相应地，每次滚动的性能会变得越差。

### placeholderCount (Default: overscanCount)

> **类型：** `number`

在可视区域之外占位的列表单项数量，值设置得越高，快速滚动时出现白屏的概率就越小，相应地，每次滚动的性能会变得越差。

### upperThreshold (Default: 50)

> **类型：** `number`, v3.6.10 及以下不支持

距离顶部多远时触发 `onScrollToUpper` 函数，单位为 `px`

### lowerThreshold (Default: 50)

> **类型：** `number`, v3.6.10 及以下不支持

距离底部多远时触发 `onScrollToLower` 函数，单位为 `px`

### useIsScrolling

> **类型：** `boolean`

是否注入 `isScrolling` 属性到 `item` 组件。这个参数一般用于实现滚动骨架屏（或其它 placeholder） 时比较有用。

### enhanced (Default: false)

> **类型：** `boolean`

通过 ScrollViewContext 优化组件滚动性能

> 部分平台不支持，使用时请注意甄别

## Events

### scroll 事件

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> `onScroll: Function`

</TabItem>

<TabItem value="Vue">

> `v-on:scroll: Function`

</TabItem>
</Tabs>

列表滚动时调用函数，函数的第一个参数为对象，由三个属性构成：

- `scrollDirection`，滚动方向，可能值为 `forward` 往前， `backward` 往后。
- `scrollOffset`，滚动距离
- `scrollUpdateWasRequested`, 当滚动是由 `scrollTo()` 或 `scrollToItem()` 调用时返回 `true`，否则返回 `false`

### onScrollNative

> **类型：** `Function` (原 scrollNative 参数)

调用平台原生的滚动监听函数。

> **Vue:**
>
> ```html
> <virtual-list
>   class="List"
>   :height="500"
>   :item-data="list"
>   :item-count="list.length"
>   :item-size="100"
>   :item="Row"
>   width="100%"
>   @scroll="onScroll"
>   @scroll-native="onScrollNative"
> />
> ```

### onScrollToUpper

> **类型：** `Function`, v3.6.10 及以下不支持

滚动到顶部时调用函数

### onScrollToLower

> **类型：** `Function`, v3.6.10 及以下不支持

滚动到底部时调用函数

## Slots & Components

### 列表插槽

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

#### renderTop

> **类型：** `ReactNode`

顶部区域

#### renderBottom

> **类型：** `ReactNode`

底部区域

</TabItem>
<TabItem value="Vue">

支持 `top`、`bottom` 两个插槽，分别对应顶部和底部区域

```html
<virtual-list class="List" :height="500" :item-data="list" :item-count="list.length" :item-size="100" :item="Row">
  <template #top>
    <view>top</view>
  </template>
  <template #bottom>
    <view>bottom</view>
  </template>
</virtual-list>
```

</TabItem>
</Tabs>

### outerElementType

列表外部容器组件类型。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> **类型：** `ReactElement`; **默认值：** `ScrollView`

</TabItem>
<TabItem value="Vue">

> **类型：** `string`; **默认值：** `'scroll-view'`

</TabItem>
</Tabs>

处于考虑适配小程序原因，不建议使用 `View` 替换 `ScrollView` 组件作为 `outerElementType`。

### innerElementType

列表内部容器组件类型`。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> **类型：** `ReactElement`; **默认值：** `View`

此容器的 `parentNode` 是 `ScrollView`，`childNodes` 是列表。

</TabItem>
<TabItem value="Vue">

> **类型：** `string`; **默认值：** `'view'`

此容器的 `parentNode` 是 `scroll-view`，`childNodes` 是列表。

</TabItem>
</Tabs>

### itemElementType

列表子节点容器组件类型。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> **类型：** `ReactElement`; **默认值：** `View`

</TabItem>
<TabItem value="Vue">

> **类型：** `string`; **默认值：** `'view'`

</TabItem>
</Tabs>

## Native Props

### 组件 ID

> `id: string`

根组件 ID，用于标识组件，不传入时会自动生成。

### 组件 CSS 类

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> `className: string`

</TabItem>

<TabItem value="Vue">

> `class: string` (原 wclass 参数)

</TabItem>
</Tabs>

根组件 CSS 类。

### 组件 CSS 样式

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
]}>
<TabItem value="React">

> `style: Style`

</TabItem>

<TabItem value="Vue">

> `style: Style` (原 wstyle 参数)

</TabItem>
</Tabs>

根组件的 CSS 样式。

### 其它 `ScrollView` 参数

除了以上参数，所有 `ScrollView` 组件的参数都可以传入 `VirtualList` 组件，冲突时优先使用以上文档描述的参数。

## Methods

通过 `React.createRef()` 创建 ref，挂载到 `VirtualList` 上可以访问到 `VirtualList` 的内部方法：

```jsx
export default class Index extends Component {
  state = {
    data: buildData(0),
  }

  list = React.createRef()

  componentDidMount() {
    const list = this.list.current
    list.scrollTo()
    list.scrollToItem()
  }

  render() {
    const { data } = this.state
    const dataLen = data.length
    return (
      <VirtualList
        height={500} /* 列表的高度 */
        width="100%" /* 列表的宽度 */
        item={Row} /* 列表单项组件，这里只能传入一个组件 */
        itemData={threads} /* 渲染列表的数据 */
        itemCount={threads.length} /*  渲染列表的长度 */
        itemSize={100} /* 列表单项的高度  */
      />
    )
  }
}
```

### scrollTo

`(scrollOffset: number, enhanced?: boolean): void`

滚动到指定的地点。

> enhanced 默认为 props 传入的 enhanced 值。

### scrollToItem

`(index: number, align: string = "auto", enhanced?: boolean): void`

滚动到指定的条目。

第二参数 `align` 的值可能为：

- `auto`: 尽可能滚动距离最小保证条目在可视区域中，如果已经在可视区域，就不滚动
- `smart`: 条目如果已经在可视区域，就不滚动；如果有部分在可视区域，尽可能滚动距离最小保证条目在可视区域中；如果条目完全不在可视区域，那就滚动到条目在可视区域居中显示
- `center`: 让条目在可视区域居中显示
- `end`: 让条目在可视区域末尾显示
- `start`: 让条目在可视区域末尾显示

> enhanced 默认为 props 传入的 enhanced 值。

## 相关问题

- 在 `Vue3` 中使用虚拟列表需升级至 v3.6+ 版本

---

