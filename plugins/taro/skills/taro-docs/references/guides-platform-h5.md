## docs/h5.md

---
title: H5
---

本篇将介绍 H5 开发的相关内容，包括兼容性、注意事项等。

## 兼容性

### ES5

#### JS 版本

为了更高的编译效率和更小的产物体积，V4 开始默认的 browserslist 配置调整为：

```json
{
  "browserslist": ["defaults and fully supports es6-module", "maintained node versions"]
}
```

> 如不存在 browserslist 相关配置，则会使用 `@babel/preset-env` 的 `target` 默认配置，如下：

```js
targets = {
  ios: '9',
  android: '5',
}
```

#### 将代码编译为 ES5

V4.0.8 开始使用脚手架创建项目时新增了`是否编译为ES5`的确认项，如选择`是`，生成的项目会在生产模式打包时将全量代码编译为 ES5。需要注意的是：编译为 ES5 会影响编译效率和产物体积。

也可以通过如下配置将代码编译为 ES5：

1. 修改 browserslist

```json title='package.json'
{
  "browserslist": {
    "development": ["defaults and fully supports es6-module", "maintained node versions"],
    "production": ["last 3 versions", "Android >= 4.1", "ios >= 8"]
  }
}
```

2. 设置 BROWSERSLIST_ENV 环境变量，以便在不同环境使用不同的 browserslist 配置

```js title='config/index.js'
process.env.BROWSERSLIST_ENV = process.env.NODE_ENV
```

3. 修改 `babel-preset-taro` 的配置。[文档](babel-config#usebuiltins)

```js title='babel.config.js'
useBuiltIns: process.env.TARO_ENV === 'h5' ? 'usage' : false
```

4. 修改编译范围

```js title='config/prod.js'
// 编译器为 webpack 时
h5: {
    compile: {
      include: [
        // 确保产物为 ES5，如可以确认包含 ES6 代码的 node_modules，则可修改正则采用白名单方式缩小编译范围，以提升编译速度
        filename => /node_modules\/(?!(@babel|core-js|style-loader|css-loader|react|react-dom))/.test(filename)
      ]
    }
}

// 编译器为 vite 时
h5: {
  legacy: true,
}
```

> 小程序可根据自己需求决定是否需要配置和 H5 一样的 include。

> V4.0.8 之前的版本由于默认 exclude 了 `@tarojs/components`，而 exclude 优先级高于 include，所以需要按下述方法配置：

```js title='config/prod.js'
h5: {
  webpackChain (chain) {
    chain.merge({
      module: {
        rule: {
          myloader: {
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                options: {},
              },
            ],
          },
        },
      },
    });
  }
}
```

#### 其他注意事项

- Taro 内置的 `babel-loader` 配置请查看 [H5WebpackModule](https://github.com/NervJS/taro/blob/8317e63d0345e18dedcccc34c3ae672ef829f304/packages/taro-webpack5-runner/src/webpack/H5WebpackModule.ts#L258)。
- V4.0.8 开始 `@tarojs/components` 也会经过 Babel 编译。
- 除了通过 `h5.compile` 来新增 include 和 exclude，您也可使用 [WebpackChain](config-detail#h5webpackchain) 来修改 Taro 内置的 `babel-loader` 配置。
- 如果还会遇到兼容性问题（如 Android 4.4），可考虑以下几点：
  - 使用兼容性组件库（暂时只支持 React），见：[兼容性组件库](h5#react-兼容性组件库)。
  - 如遇到 `Promise undefined` 等问题，可在 `index.html` 中手动引入一个 Promise 的 polyfill。

### 组件库

#### Input 组件不受控制

在 React 框架中使用 Input 组件时，如果传入 Input 组件值并未更新，开发者对输入值的约束会失效。这是由于虽然用户输入触发了相关事件，但由于开发者约束值导致组件 props 并未实际触发组件更新导致，此时需要手动刷新组件内容。

> [相关 Issue](https://github.com/NervJS/taro/issues/12111)

#### React 兼容性组件库

:::note
Taro 3.2.4 开始支持
:::

Taro3 的 H5 端组件库基于 `Web Components`，使用了 [Stencil](https://stenciljs.com/) 框架进行开发。

> Stencil [兼容性情况](https://stenciljs.com/docs/browser-support)

但移动端对 `Web Components` 的支持还有一些问题，主要问题如下：

- 安卓 4.4 白屏
- 多行文字截断失效
- 部分安卓机（OPPO、VIVO 居多），样式 `visibility` 切换失败导致页面白屏

因此，对兼容性要求强烈对开发者，可以使用 **React 兼容性组件库**代替默认的 `Web Components` 组件库。它完全基于 React 开发，兼容性良好，但是目前**只适配了若干常用的组件**，开发者请**谨慎选择使用**。

#### 使用方法

1. 安装兼容性组件库

```bash
$ yarn add @tarojs/components-react
```

2. 设置编译配置 `h5.useHtmlComponents`

```js title="config/index.js"
module.exports = {
  h5: {
    useHtmlComponents: true,
  },
}
```

3. 启动编译

```bash
$ taro build --type h5 --watch
```

#### 贡献流程

由于人力问题，Taro 团队的迭代重心仍在 `Web Components` 组件库上。也欢迎各位开发者为 React 兼容性组件库添砖加瓦，具体工作是把以 `Stencil` 语法开发的组件改为 React 语法（Stencil 支持 JSX，因此改造工作量不大）。具体开发流程请看：[@tarojs/component-react](https://github.com/NervJS/taro/blob/next/packages/taro-components-react/README.md#%E6%94%B9%E9%80%A0%E6%96%B9%E6%B3%95)

### lazy-load

Taro-H5 打包时会将页面和组件拆分成独立的文件按需加载，但这么做会导致没有用到的页面和组件依旧会被打包，有一些场景（比如 PWA 等需要严格限制包体大小时）会因此受到一些困扰。

所以我们通过 babel 插件提供了移除懒加载的方法：

```js title="babel.config.js" {6}
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        hot: false,
        'dynamic-import-node': true, // 如果使用时遇到问题，可尝试将 devServer 配置项中的 hot 设置为 false
      },
    ],
  ],
}
```

### dataset

Taro-H5 在 3.3.1+ 版本才支持 `data-*` 设置参数到节点上，如需使用请升级到对应版本。

### 浏览器 IntersectionObserver 兼容

在 Taro H5 中，我们使用了 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver) 来实现了 `Image` 组件和 `createIntersectionObserver` 方法，考虑到该对象在各端特别是移动端适配度已经很高，在 v3.6.23 版本开始考量移除了它的 polyfill 依赖，如若项目有 IE11 及以下浏览器需求可以通过以下配置启用该兼容模式。

```js
// config/prod.js
module.exports = {
  env: {
    NODE_ENV: '"production"',
    SUPPORT_TARO_POLYFILL: '"enabled"', // 默认值为 disabled
  },
  // ...
}
```

### 钉钉内核浏览器兼容

钉钉内核的浏览器部分特性和其他浏览器有所不同，需要专门适配(譬如标题不能切换等等)。由于需要引入 `dingtalk-jsapi` 将导致包体变大，故而默认关闭，如果需要可通过如下配置启用适配模块。

```js
// config/prod.js
module.exports = {
  env: {
    NODE_ENV: '"production"',
    SUPPORT_TARO_POLYFILL: '"enabled"', // 3.+ 默认值为 enabled; 4.+ 默认值为 disabled
  },
  // ...
}
```

| 值                    | 说明                           |
| --------------------- | ------------------------------ |
| enabled               | 启用全部 Polyfill              |
| Object                | Object Scope Polyfill          |
| Object.assign         | Object.assign Polyfill         |
| Object.defineProperty | Object.defineProperty Polyfill |
| IntersectionObserver  | IntersectionObserver Polyfill  |
| disabled              | 禁用全部 Polyfill              |

## 路由

### 路由模式

H5 支持使用 `hash` 路由模式和浏览器 `history` 路由模式，默认使用 `hash` 模式。可以修改 [h5.router.mode](./config-detail#h5routermode) 进行配置。

### 路由基准路径 basename

H5 支持设置路由 basename，可以修改 [h5.router.basename](config-detail#h5routerbasename) 进行配置。

### 自定义路由

H5 支持设置自定义的路由影射规则，可以修改 [h5.router.customRoutes](config-detail#h5routercustomroutes) 进行配置。

### 路由守卫

Taro H5 的路由实现基于 [history](https://github.com/remix-run/history) 库，因此支持使用 history 库提供的一系列能力，路由守卫就是其中之一。

当用户返回上一页时，我们可以借助 `history` 的 [Blocking Transitions](https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md) 能力监听返回事件，根据一些判断逻辑（例如弹窗挽留用户）决定是否执行路由返回操作。

```jsx title="history 文档上的例子（例子中的 window.confirm 可以替换为自定义弹窗）"
import { history } from '@tarojs/router'

function Index() {
  useEffect(() => {
    // Block navigation and register a callback that
    // fires when a navigation attempt is blocked.
    let unblock = history.block((tx) => {
      // Navigation was blocked! Let's show a confirmation dialog
      // so the user can decide if they actually want to navigate
      // away and discard changes they've made in the current page.
      let url = tx.location.pathname
      if (window.confirm(`Are you sure you want to go to ${url}?`)) {
        // Unblock the navigation.
        unblock()

        // Retry the transition.
        tx.retry()
      }
    })
    return () => unblock()
  }, [])

  return <View />
}
```

## React

使用 React 开发 H5 时需要注意的一些问题。

### fast refresh

React 在 H5 Dev 编译模式时默认开启了 [fast refresh](https://github.com/facebook/react/issues/16604#issuecomment-528663101) 功能。

但是当[使用了自定义环境变量](https://github.com/NervJS/taro/issues/9576)时会出现以下报错：

![](https://storage.360buyimg.com/cjj-pub-images/fast-refresh-error.png)

或配置了 `Webpack devServer` 关闭热更新：`hot: false` 时，会出现以下报错：

:::danger
Uncaught ReferenceError: $RefreshSig$ is not defined
:::

这都是因为在 dev 环境，Taro 默认做了两件事情：

- 使用 `fast-refresh` 的 Babel plugin
- 把 Webpack 配置的 `devServer.hot` 设置为 true，会加入 `fast refresh` 的 loader。

而且 `fast refresh` 的 Babel plugin 和 loader 必须同时启用或关闭。

因此当出现上述报错时，或不希望开启 `fast refresh` 时，可以通过同时配置 Babel 和 Webpack 进行关闭：

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

```js title="babel.config.js" {5}
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        hot: false,
      },
    ],
  ],
}
```

## 服务端渲染（SSR）

社区 [@SyMind](https://github.com/SyMind) 大佬提供了编译 NextJS 应用的插件 [tarojs-plugin-platform-nextjs](https://github.com/SyMind/tarojs-plugin-platform-nextjs)，用于支持 Web 端支持 SSR 能力，可以根据项目需要自行选择。

## 事件

### \_\_taroNotSupport

> 版本 3.5.6 开始支持该事件

Web 版本中调用不支持的组件或 API 时会触发该事件，可供开发者作统一配置处理。

```ts
interface IEventResult {
  // 组件或 API 名称
  name: string
  // 类型
  type: 'component' | 'method'
  // 状态分类
  category: 'temporarily' | 'weixin_corp' | 'permanently'
  // 组件实例
  instance?
  // API 调用参数
  args?: unknown?[]
}
```

## 组件编译模式

与小程序和 RN 一样，H5 也可以将编译为原生组件

### 使用方法

#### 1. 配置组件路径

修改 `app.config.js`，增加 `components` 配置，指向组件入口文件的路径：

```js title="app.config.js"
export default {
  // ...
  components: ['pages/index/index', 'components/picker/index'],
}
```

#### 2. 开始编译

使用 `taro build native-components` 命令，配合参数 `type`，即可编译出对应平台的自定义组件。

```bash
taro build native-components --type h5 [--watch]
```

### 尺寸转换

组件编译模式同样支持与 Taro 一致的尺寸转换，需要注意的是虽然 css 样式完成了转化，但是部分在代码中的单位转换需要依赖 `pxTransform` 完成。

```diff
- Taro.pxTransform(10)
+ Taro.pxTransform.bind(this)(10)
```

组件模式下，Taro 将尺寸配置关联到组件实例上，在调用相关代码时需要关联相关配置，这一点与正常模式相区别。

---

## docs/html.mdx

---
title: 渲染 HTML
---

> 请注意：本章节所有内容只在小程序端起效果。

Taro 可以直接通过 `Element#innerHTML` 或 Vue 的 `v-html` 或 React/Nerv 的 `dangerouslySetInnerHTML` 直接渲染 HTML:

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

<Tabs
  defaultValue="React"
  values={[
    {label: 'React', value: 'React'},
    {label: 'Vue', value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
function helloWorld() {
  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

  return <View dangerouslySetInnerHTML={{ __html: html }}></View>
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view v-html="html"></view>
</template>

<script>
  export default {
    data() {
      return {
        html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`,
      }
    },
  }
</script>
```

</TabItem>

</Tabs>

## 自定义 HTML 样式

直接设置 HTML 不会让 HTML 标签带上浏览器的默认样式，Taro 提供两种内置样式我们可以直接引入生效：

- `@tarojs/taro/html.css`: [W3C HTML4 的内置样式](https://www.w3.org/TR/CSS2/sample.html)，只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
- `@tarojs/taro/html5.css`: [Chrome(Blink) HTML5 的内置样式](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)，内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。

为了让内置的标签样式起作用，我们还需要将 HTML 容器的 CSS 类设置为 `.taro_html`:

<Tabs
  defaultValue="React"
  values={[
    {label: 'React', value: 'React'},
    {label: 'Vue', value: 'Vue'},
  ]}>
  <TabItem value="React">

```jsx
if (process.env.TARO_ENV !== 'h5') {
  require('@tarojs/taro/html.css')
}

function helloWorld() {
  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>
}
```

  </TabItem>

  <TabItem value="Vue">

```html
<template>
  <view v-html="html" class="taro_html"></view>
</template>

<script>
  if (process.env.TARO_ENV !== 'h5') {
    require('@tarojs/taro/html.css')
  }

  export default {
    data() {
      return {
        html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`,
      }
    },
  }
</script>
```

  </TabItem>

</Tabs>

同样地，我们也可以自己编写 CSS 样式，Taro 最终渲染的 HTML 标签的类名都和 HTML 标签名保持一致，例如我们的容器 CSS 类名为 `my_css`，想要设置 `h1` 标签的样式，那就这样这样做：

```css
.my_css .h1 {
  font-size: 30px;
}
```

你可能会倾向于其他浏览器的默认样式：

- [Firefox](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css)
- [Internet Explorer](https://web.archive.org/web/20170122223926/https://www.iecss.com/)
- [Safari/Chrome(Webkit)](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
- [Opera](https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css)
- [W3C HTML5 Spec](https://www.w3.org/TR/html5/rendering.html)
- [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)

## HTML 转义

由于进行 HTML 转义需要消耗较多的性能和较大的体积，默认而言 Taro 的 HTML 接口只接受转义后的 HTML 字符串，我们推荐直接在服务端返回转义后的 HTML。如果确实需要在客户端转义，开源社区有两个较好的选择：

- [he](https://www.npmjs.com/package/he): 体积较大，但开源协议更为宽松
- [entities](https://www.npmjs.com/package/entities): 体积较小，但开源协议更为严格

你可能会需要[高级选项](#高级选项)的 `transformText` 配合 HTML 转义进行字符串渲染。

## 绑定事件

出于作用域和安全因素考虑，Taro 会把 HTML 字符串中的事件和 JavaScript 全部清除。但我们仍然有办法给 HTML 绑定事件：

<Tabs
  defaultValue="React"
  values={[
    {label: 'React', value: 'React'},
    {label: 'Vue', value: 'Vue'},
  ]}>
  <TabItem value="React">

```jsx
import '@tarojs/taro/html.css'

function helloWorld() {
  const html = `<h1 id="test">Wallace is way taller than other reporters.</h1>`

  useEffect(() => {
    const el = document.getElementById('test')
    function testOnTap (event) {
      // do something
      ...
    }
    el.addEventListener('tap', testOnTap)

    return () => {
      el.removeEventListener('tap', testOnTap)
    }
  }, [])

  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>
}
```

  </TabItem>

  <TabItem value="Vue">

```html
<template>
  <view v-html="html" class="taro_html"></view>
</template>

<script>
  import '@tarojs/taro/html.css'

  export default {
    data () {
      return {
        html: `<h1 id="test">Wallace is way taller than other reporters.</h1>`
      }
    },
    mounted () {
      const el = document.getElementById('test')
      el.addEventListener('tap', this.testOnTap)
    },
    testOnTap (event) {
      // do something
      ...
    },
    beforeDestroy () {
      const el = document.getElementById('test')
      el.removeEventListener('tap', this.testOnTap)
    }
  }
</script>
```

  </TabItem>

</Tabs>

如果需要动态绑定事件的元素没有 ID 的话，你可能需要使用[高级选项](#高级选项)的 `transformElement`。

## 高级选项

如果内置的功能无法满足需求或渲染结果不如预期，Taro 还提供了 HTML 渲染的高级选项，高级选项可以通过 `Taro.options.html` 访问：

```js
import Taro from '@tarojs/taro'

// 不解析 souce 标签中的内容
Taro.options.html.skipElements.add('source')
```

### skipElements

类型：`Set<string>`

默认值：`new Set(['style', 'script'])`

HashSet 中包含的 HTML 标签将不会被解析。

### voidElements

类型：`Set<string>`

默认值：`new Set([
  '!doctype', 'area', 'base', 'br', 'col', 'command',
  'embed', 'hr', 'img', 'input', 'keygen', 'link',
  'meta', 'param', 'source', 'track', 'wbr'
])`

HashSet 中包含的 HTML 标签不需要闭合标签，例如 `<img />`。

### closingElements

类型：`Set<string>`

默认值：`new Set([
  'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
  'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
])`

HashSet 中包含的 HTML 标签可以自动闭合，且不能被嵌套。

### transformText

类型：`(taroText: TaroText, text: Text) => TaroText`

默认值：`void`

该函数第一个参数的值为 Taro 默认处理好的 [TaroText](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5)，第二个参数是 HTML 解析器解析好的 [Text](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36)，最后返回的 `TaroText` 对象参与 HTML 中的字符串渲染。

### transformElement

类型：`(taroElement: TaroElement, element: Element) => TaroElement`

默认值：`void`

该函数第一个参数的值为 Taro 默认处理好的 [TaroElement](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15)，第二个参数是 HTML 解析器解析好的 [Element](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43)，最后返回的 `TaroElement` 对象参与 HTML 元素渲染。

```js title="代码示例"
// 给所有 img 标签添加 aotu 类
Taro.options.html.transformElement = (el) => {
  if (el.nodeName === 'image') {
    el.setAttribute('class', 'aotu')
  }
  return el
}
```

---

## docs/use-h5.mdx

---
title: 使用 HTML 标签
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

> Taro v3.3+ 开始支持

多年以来 Web 端沉淀了大量优秀的库和组件，我们希望能直接在小程序端进行复用。此外，我们希望能减少 H5 应用迁移到小程序端的成本，甚至能够直接运行在小程序端。因此，自 v3.3 起支持使用 HTML 标签编写 Taro 应用。

## 使用方法

### 配置插件

1. 首先下载安装插件 `@tarojs/plugin-html`

```bash
yarn add @tarojs/plugin-html
```

2. 然后在项目配置中添加使用插件

```js
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html'],
}
```

### 示例代码

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="示例代码"
function Index() {
  return <div>Hello World!</div>
}
```

</TabItem>

<TabItem value="Vue">

```html title="示例代码"
<template>
  <div>Hello World!</div>
</template>
```

</TabItem>
</Tabs>

## 示例项目

- [taro-weui](https://github.com/NervJS/taro-weui)
- [taro-antd-mobile](https://github.com/NervJS/taro-antd-mobile)
- [taro-vant](https://github.com/NervJS/taro-vant)

## 样式相关问题

### 浏览器默认样式

Taro 提供了两种内置的浏览器默认样式，可以根据项目需要进行引入。

根据经验，在 Web 端的项目中常常会写一些样式去重置部分浏览器的默认样式，因此一般情况下开发者并不需要所有的这些默认样式。我们建议手动挑选项目需要的默认样式添加到全局样式中。

#### 1. HTML4

W3C HTML4 的内置样式。只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。

用法：

```js title="app.js"
import '@tarojs/taro/html.css'
```

#### 2. HTML5

Chrome(Blink) HTML5 的内置样式。内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。

用法：

```js title="app.js"
import '@tarojs/taro/html5.css'
```

### 第三方组件库的尺寸变小了一倍

Taro 默认会使用 `postcss` **把 px 按比例解析为 rpx**，详情请见 [《设计稿及尺寸单位》](/docs/size)。

但很多第三方 H5 组件库不需要解析 `px` 单位，用户可以配置 `@tarojs/plugin-html` 插件的 [pxtransformBlackList](use-h5#pxtransformblacklist) 选项进行过滤。

### `<span>` 默认表现为块级样式

`<span>` 是行内元素，本来需要映射为同样是行内元素的 `<Text>` 组件。

但小程序的 `<Text>` 组件有一个限制，它只能嵌套 `<Text>` 自身，嵌套 `<View>`、`<Image>` 等组件都会不显示。也就是说，如果 `<span>` 映射为 `<Text>`，`<span>` 只能嵌套同样映射为 `<Text>` 的 `<i>`、`<b>` 等行内元素。

但是我们在适配一些 H5 组件库的时候发现，`<span>` 里很可能会嵌套 `<div>`、`<img>` 等标签，用法十分多样。因此我们决定把 `<span>` 映射为 `<View>`，以兼容 H5 标签写法的多样性。

这样做的缺点是，开发者需要自行使用样式令 `<span>` 默认表现为行内样式：

```scss title="app.css"
// 方法一：只使用部分需要的浏览器默认样式
.h5-span {
  display: inline;
}

// 方法二：直接引入全套浏览器默认样式
import '@tarojs/taro/html.css';
```

至于 `<i>` 等行内标签还是默认映射为 `<Text>`。如果需要修改映射规则，可以配置 `@tarojs/plugin-html` 插件的 [modifyElements](use-h5#modifyelements) 选项。

### 不支持部分 CSS 选择器

在小程序中部分 CSS 选择器不会生效，如：

- 通配符 `*`
- 媒体查询
- 属性选择器，当属性不是对应小程序组件的内置属性时

### 不支持使用 rem

暂不支持 rem。

## 其它限制

HTML 标准和小程序标准存在着很大的差异，有一些 Taro 能够抹平，但仍有部分差异无法处理。

### 表单组件

HTML 标签和小程序组件两种规范之间，存在较大差异的部分主要是表单组件。

1. 在使用 `<input type='checkbox'>` 或 `<input type='radio'>` 时，需要手动补充 `<CheckboxGroup>`、`<RadioGroup>` 组件。
2. HTML 使用 `<select>` + `<option>` 实现选择器，而小程序使用 `<Picker>`。两者差异巨大，因此不作映射。当用户使用了 `<select>` 时，会提示用户直接使用 `<Picker>` 组件。

### 不能同步获取元素尺寸

在 H5 中我们可以调用 DOM API **同步**获取元素的尺寸：

```js title="h5"
const el = document.getElementById('#inner')
const res = el.getBoundingClientRect()
console.log(res)
```

但是在小程序中，获取元素尺寸的 API 是**异步**的：

```js title="小程序"
const query = Taro.createSelectorQuery()
query
  .select('#inner')
  .boundingClientRect()
  .exec((res) => {
    console.log(res)
  })
```

因此 Taro 提供了这些 API 的异步版本，如 `getBoundingClientRect`。（如有遗漏，可以提交 [Issues](https://issue.taro.zone/) 让官方进行补充）

```js title="Taro"
const el = document.getElementById('#inner')
const res = await el.getBoundingClientRect()
console.log(res)
```

### DOM API 差异

`canvas`、`video`、`audio` 等元素在 H5 端可以直接调用 `HTMLElement` 上的方法。

```js title="h5"
const el = document.getElementById('myVideo')
el.play()
```

但是在 Taro 中，要调用组件上的原生方法，必须先创建对应的 `Context`：

```js title="小程序"
const ctx = Taro.createVideoContext('myVideo')
ctx.play()
```

### `<img>` 图片尺寸问题

在 H5 中，不设置 `<img>` 的宽高时，浏览器会使用原图的宽高作为标签的宽高。

而在小程序中，不设置 `<Image>` 的宽高时，会使用默认样式中规定的宽高。

解决办法：用户在使用 `<img>` 时必须显式设置它的宽高。

### 不支持 ReactDOM 部分 API

Taro 使用 **React Reconciler** 实现了自定义的渲染器，相对于 ReactDOM 来说功能十分精简。

因此部分基于 ReactDOM 实现的 H5 组件会无法使用，如使用了：`unstable_renderSubtreeIntoContainer`。

### 不支持 React `Portal`

### 不支持 Vue3 `Teleport`

### 不支持使用 SVG

暂不支持使用 SVG。

## 插件配置项

### pxtransformBlackList

`regexp array`

命中数组中任意正则表达式的类名选择器，其样式声明块中的 `px` 单位不会被 Taro 解析。

用法：

```js title="config/index.js"
config = {
  plugins: [
    [
      '@tarojs/plugin-html',
      {
        // 包含 `demo-`、`van-` 的类名选择器中的 px 单位不会被解析
        pxtransformBlackList: [/demo-/, /van-/],
      },
    ],
  ],
}
```

### modifyElements

`function`

修改普通块级元素和行内元素的映射规则。

用法：

```ts title="config/index.js"
config = {
  plugins: [
    [
      '@tarojs/plugin-html',
      {
        modifyElements(inline: string[], block: string[]) {
          // 行内元素增加 <xxx>
          inline.push('xxx')
          // 行内元素添加 <span>，块级元素删除 <span>
          inline.push('span')
          block.splice(block.indexOf('span'), 1)
        },
      },
    ],
  ],
}
```

### enableSizeAPIs

`boolean`

默认值：`true`

设置是否能够使用 H5 同步获取元素尺寸的 API 的 异步版本，如 `getBoundingClientRect`。

用法：

```js title="config/index.js"
config = {
  plugins: [
    [
      '@tarojs/plugin-html',
      {
        // 这些异步 API 的代码将会从运行时代码中删除
        enableSizeAPIs: false,
      },
    ],
  ],
}
```

## 插件 postcss 配置项

`@tarojs/plugin-html` 会启用 postcss 插件：`postcss-html-transform` 对样式进行一些处理，例如去除 `*` 选择符等。以下是 `postcss-html-transform` 的一些配置项：

### removeCursorStyle

:::info
Taro v3.4.3 开始支持。
:::

`boolean`

默认值：`true`

设置是否去除 `cursor` 相关样式。

用法：

```js title="config/index.js" {6-9}
config = {
  // ...
  mini: {
    // ...
    postcss: {
      htmltransform: {
        enable: true,
        config: {
          removeCursorStyle: false,
        },
      },
    },
  },
}
```

## 详细设计

RFC 文档：[《0004-rendering-html》](https://github.com/NervJS/taro-rfcs/blob/html-support/rfcs/0004-rendering-html.md)

## 附录

### 一、标签名映射规则

| HTML 标签              | 小程序组件 |
| :--------------------- | :--------- |
| 块级标签               | view       |
| 内联标签               | text       |
| span                   | view       |
| img                    | image      |
| a                      | navigator  |
| a["href=javascript;"]  | view       |
| input                  | input      |
| input["type=checkbox"] | checkbox   |
| input["type=radio"]    | radio      |
| button                 | button     |
| textarea               | textarea   |
| progress               | progress   |
| label                  | label      |
| form                   | form       |
| audio                  | audio      |
| canvas                 | canvas     |
| video                  | video      |
| iframe                 | web-view   |
| slot                   | slot       |

### 二、属性名映射规则

#### 1. HTML `<a>` 标签

| `<a>` 属性 | `<Navigator>` 属性 |
| :--------- | :----------------- |
| href       | url                |
| target     | openType           |

1.1 `<a>` 标签的 `target` 属性值对应关系：

| `a[target]` 属性值 | `Navigator[open-type]` 属性值 |
| :----------------- | :---------------------------- |
| \_blank            | navigate                      |
| \_self             | redirect                      |

#### 2. HTML `<input>` 标签

| `<input>` 属性 | `<Input>` 属性 |
| :------------- | :------------- |
| autofocus      | focus          |
| readonly       | disabled       |

2.1 `<input>` 标签的 `type` 属性值对应关系：

| `input[type]` 属性值   | `Input[type]` 属性值   |
| :--------------------- | :--------------------- |
| tel                    | number                 |
| `input[type=password]` | `input[password=true]` |

#### 3. HTML `<textarea>` 标签

| `<textarea>` 属性 | `<Textarea>` 属性 |
| :---------------- | :---------------- |
| autofocus         | focus             |
| readonly          | disabled          |

#### 4. HTML `<progress>` 标签

| `<progress>` 属性  | `<Progress>` 属性 |
| :----------------- | :---------------- |
| value / max \* 100 | precent           |

#### 5. HTML `<button>` 标签的 `type` 属性值对应关系

| `button[type]`        | `Button[form-type]`        |
| :-------------------- | :------------------------- |
| `button[type=submit]` | `Button[form-type=submit]` |
| `button[type=reset]`  | `Button[form-type=reset]`  |

### 三、事件映射规则

#### 1. 通用规则

| HTML 事件 | 小程序组件事件 |
| :-------- | :------------- |
| click     | tap            |

#### 2. HTML `<input>` 标签

| `<input>` 事件 | `<Input>` 事件 |
| :------------- | :------------- |
| onChange       | onInput        |
| keypress       | onConfirm      |

#### 2. HTML checkbox 控件

| `input[type=checkbox]` 事件 | `<Checkbox>` 事件 |
| :-------------------------- | :---------------- |
| onChange                    | bindtap           |

#### 3. HTML radio 控件

| `input[type=radio]` 事件 | `<Radio>` 事件 |
| :----------------------- | :------------- |
| onChange                 | bindtap        |

---

