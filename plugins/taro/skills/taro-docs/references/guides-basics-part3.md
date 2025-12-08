## docs/migration.md

---
title: 从旧版本迁移到 Taro Next
---

这是一篇针对旧版本用户升级到 Taro Next 的迁移指南。因为本章内容包含了许多详尽的阐述和迁移例子，所以看起来有一些长。但请不要担心，Taro Next 大部分用法还是和旧版本一样的。**本章没有提到的内容，你可以像旧版本的 Taro 一样操作或使用**。

事实上，你并不需要去更改任何业务的逻辑代码，许多更改使用编辑器的「查找/替换」就可以完成。你甚至不需要完整地阅读整章内容（重点在 1，2 小节， [API](#API) 和 [项目/页面配置](#项目/页面配置)），只有当出问题时定位到具体的小节即可。

更新到 Taro Next 首先需要更新项目依赖：

```bash
# 更新 CLI
$ npm i -g @tarojs/cli@next
# 在项目目录更新项目依赖
$ npm i @tarojs/runtime@next @tarojs/mini-runner@next @tarojs/components@next @tarojs/taro@next
$ npm i react @tarojs/react@next # 如果使用 React
$ npm i nervjs # 如果使用 Nerv
# CLI 命令和以前一模一样
$ taro build --type weapp --watch
```

## API

在旧版本 Taro 中，我们把所有面向应用开发者的 API 都放在 `@tarojs/taro` 里，一个典型的 Taro 组件/页面会像这样：

```jsx
// 类组件
import Taro, { Component } from '@tarojs/taro'

class Wallace extends Component {
	componentDidMount () {
	  Taro.request().then(/* do something */)
	}
  render () {
    return ...
	}
}

// 函数式组件
import Taro, { useEffect } from '@tarojs/taro'

function Tall () {
	useEffect(() => {
	  Taro.request().then(/* do something */)
	}, [])
	return ...
}
```

在 Taro Next 中，属于框架本身的 API 从框架自己的包中引入，其它的 API 仍然从 `@tarojs/taro` 引入。使用哪个框架来进行开发完全由开发者来决定。

```jsx
import Taro from '@tarojs/taro'
import React, { Component }  from 'react' // Component 是来自于 React 的 API
// 从 nervjs 中引入，那运行的就是 Nerv
// import { Component } from 'nervjs'

class Reporter extends Component {
  componentDidMount () {
    Taro.request().then(/* do something */)
  }
  render () {
    return ...
  }
}

// 函数式组件
import Taro from '@tarojs/taro'
// useEffect 是来自于 React 的 API
import React, { useEffect }  from 'react'
// 从 nervjs 中引入，那运行的就是 Nerv
// import { useEffect } from 'nervjs'

function Fast () {
  useEffect(() => {
    Taro.request().then(/* do something */)
  }, [])
  return ...
}
```

> Nerv 是凹凸实验室的一个开源类 React 框架，体积比 React 更小，多数情况性能表现也比 React 更好。但某些 React 生态的库兼容性可能会出现问题。

## 项目/页面配置

在旧版本 Taro 中，页面/项目的配置挂载在类组件的类属性或函数式的属性上，通过 AST 分析取出来，然后生成 JSON 文件。但这样做，项目页面的配置就无法动态地生成：

```jsx
// app.js 项目配置
class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
  render () {
    return ...
  }
}

// index.js 页面配置
function Index () {
  return ...
}

Index.config = {
  navigationBarTitleText: '首页'
}

```

在 Taro Next 中，会有一个新的文件：`*.config.js` ，`*` 代表你页面/项目文件的文件名，`config` 文件必须和页面/项目文件在同一文件夹。在这个文件里你可以使用任意合法的 JavaScript 语法，只要最终把配置作为对象通过 `export default` 出去即可：

```jsx
// app.js 项目文件
class App extends Component {
  render () {
    return ...
  }
}

// app.config.js
export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}

// index.js 页面文件
function Index () {
  return ...
}

// index.config.js 页面配置
const title = '首页'
export default {
  navigationBarTitleText: title
}
```

一个完整的项目文件结构示例会像这样：

```
.
├── app.config.js // 入口文件项目配置
├── app.js
├── app.scss
├── components
│   └── result.js // 组件若不使用第三方组件则无需配置
└── pages
    └── index
        ├── index.config.js // index 的页面配置
        └── index.js
```

## 使用第三方 React 库

如果你需要引入 React 相关生态的库，直接通过 `npm install` 安装然后引入使用即可，Taro 不会再维护类似于 `taro-redux` 、`taro-mobx` 之类的库。

```jsx
// 当使用了 JSX 时，babel 会隐式地调用 React.createElement
// 因此只要你使用了 JSX，就要把 React 或 Nerv 引入
import React from 'react'
import { useSelector }  from 'react-redux'
// 如果是使用的是 Nerv
// import { useSelector }  from 'nerv-redux'
function Excited () {
  const counter = useSelector(state => state.counter)
  return ...
}
```

## 路由

在旧版本中可以通过 `this.$router` 访问当前组件/页面路由的详情。在 Taro Next 对应的 API 是在 `@tarojs/taro` 中的 `getCurrentInstance().router`，两者的属性一模一样。

```jsx
import { getCurrentInstance } from '@tarojs/taro'
class C extends Component {
  current = getCurrentInstance()

  componentWillMount() {
    // getCurrentInstance().router 和 this.$router 和属性一样
    console.log(this.current.router)
  }
}

// 函数式组件
import { getCurrentInstance } from '@tarojs/taro'
function C() {
  const { router } = getCurrentInstance()
  // getCurrentInstance().router 和 useRouter 返回的内容也一样
  // const router = useRouter()
}
```

而对于项目入口组件而言，路由信息我们推荐在 `componentDidShow` 生命周期的参数中直接读取。

```jsx
// app.js 项目入口文件
class App extends Component {
  componentDidShow (options /* 这里有你想要的路由信息 */) {
  }

  render () {
    ...
  }
}
```

> 聪明的读者已经猜到了，`getCurrentInstance().router` 其实是访问小程序当前页面 `onLoad` 生命周期参数的快捷方式。

## 样式

在 Taro Next 中，没有 [组件的外部样式和全局样式](/docs/component-style) 的概念，组件的配置（`config.js`）是无效的，页面和入口文件引入的 CSS 都会变成全局 CSS ，没有了 `externalClasses` 和 `addGlobalClass` 这两个概念。

如果你需要带作用域的 CSS，可以考虑使用 [CSS Modules](https://github.com/css-modules/css-modules)。

## 编译配置

- 需要添加 [framework 配置](/docs/config)，取值为使用的框架（react, nerv, vue, vue3）
- [jsxAttributeNameReplace](/docs/1.x/config) 配置已被移除。因为我们不需要配置

## 编译依赖库

`Webpack` 升级到 `Webpack@4`，`Babel` 升级到 `babel@7`。Webpack 升级是在 `taro@2` 中完成的，如果你是从 `taro@1` 升级上来的话，或许需要去看看 [Taro 2 更改](https://github.com/NervJS/taro/blob/feat_mini_webpack/docs/config-detail) 查看使用 Webpack 编译后带来的变化。

升级到 `babel@7` 意味着你的项目文件全部都会通过根目录的 `babel.config.js` 的配置进行编译。

## ESLint 和最佳实践

`eslint-plugin-taro` 已被废弃，你不再需要遵循它所规定的种种限制。你可以发挥你的创造力使用任何合法的 JSX 语法：

```jsx
import React from 'react'
import { View, Text } from '@tarojs/components'
function C() {
  // 你可以选择不使用 JSX，但元素还是必须从 `@tarojs/components` 引入
  const title = React.createElement(View, null, 'Numbers:')

  const numbers = []
  for (let i = 0; i < 10; i++) {
    numbers.push(<Text key={i}>{i}</Text>)
  }

  return (
    <>
      {title}
      {numbers}
    </>
  )
}
```

旧版本文档所提到的[最佳实践](/docs/1.x/best-practice)也不必再遵循。也就是说，即便你不给组件设置 `defaultProps`，自定义事件名不以 `on` 开头（还有其它的旧版本代码风格最佳实践），你的代码也能运行。但值得注意的是，遵循这样的 **代码风格最佳实践** 可以让你的代码更健壮，你的应用也会因此而收益。而对于另外的一些由于旧版本 Taro 执行机制的 hack（例如 render 调用两次，state 和 props 无法重名，不要打印组件），这类最佳实践可以不必理会。

## Ref & DOM

Taro Next 在底层会维护一个精简的 DOM 系统，在框架中使用 `ref` 链接到的是一个 Taro Element 实例，因此你直接可以使用 [`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) 的部分方法直接操作它。如果你需要获取原生小程序 DOM 实例，那需要使用原生小程序的 [`SelectorQuery`](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) 来获取。

> 大部分和渲染相关的 DOM 属性你都可以通过像 Web 开发一样获取或设置（如果有必要的话你甚至可以通过 `parentNode` 和 `childNodes` 访问元素的父元素和子元素！），但元素的位置你还是必须通过原生小程序 DOM 实例的 `boundingClientRect()` 和 `scrollOffset()` 方法获取。

另外，如果你使用的是 React，就将无法使用字符串的形式来使用 `ref`。(Nerv 不受此影响)

```jsx
class C extends Component {
  input = React.createRef()

  componentDidMount() {
    const node = this.input.current // node 是一个 Taro Element 实例
    node.focus() // ok, 在 Web 开发中常见做法

    // 以下写法也能更新视图，但不推荐这么做，更推荐使用数据来驱动视图更新
    node.setAttribute('class', 'input-css-class')
    node.className = 'input-css-class'
    node.style.fontSize = '16px'
    node.value = 'excited!'

    // 如果你需要获取原生小程序 DOM 的话
    const miniNode = Taro.createSelectorQuery().select('#' + node.id)
  }

  render() {
    return <Input ref={this.input} id="input" />
  }
}
```

> 在未来，我们可能会在 Taro Element 上提供一个可以快速访问小程序 DOM 实例的属性。目前请按照上述例子使用。

## 生命周期

当你使用 React 时（使用 Nerv 不受此影响），以下生命周期被更名：

- `componentWillMount()` -> `UNSAFE_componentWillMount()`
- `componentWillReceiveProps` -> `UNSAFE_componentWillReceiveProps()`
- `componentWillUpdate` -> `UNSAFE_componentWillUpdate()`

新增一个生命周期: [`componentDidCatch(err, info)`](https://reactjs.org/docs/react-component.html#componentdidcatch) ，这是由框架本身（React 或 Nerv）提供的。`componentDidCatch(err, info)` 会在组件和它的子孙抛出错误时触发，第一个参数 `err` 指向抛出的错误，第二个参数 `info` 是组件的调用信息。

## Hooks

在 Taro Next，Taro 的[专有 Hooks](./hooks)（例如 `usePageScroll`, `useReachBottom`）从 `@tarojs/taro` 中引入，框架自己的 Hooks （例如 `useEffect`, `useState`）从对应的框架引入。

另外，旧版本的 Taro 可以在 Class Component 中使用 Hooks，但 React 是不允许这样的行为的。

```jsx
import { usePageScroll, useReachBottom } from '@tarojs/taro' // Taro 专有 Hooks
import { useState, useEffect } from 'react' // 框架 Hooks （基础 Hooks）
// 如果你使用 Nerv 的话
// import { useState, useEffect } from 'nervjs' // 框架 Hooks （基础 Hooks）
```

## $scope 和 $componentType

由于 Taro Next 没有自定义组件，所以也没有了 `this.$scope` 和 `this.$componentType` 的概念。`getCurrentInstance().page` 可以返回当前小程序页面的实例。

---

## docs/props.md

---
title: 组件化 & Props
---

组件可以将 UI 切分成一些的独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件。

组件从概念上看就像是函数，它可以接收任意的输入值（称之为 `props`），并返回一个需要在页面上展示的 Taro 元素。

你也可以使用 ES6 Class 来定义一个组件:

```jsx
class Welcome extends Component {
  render() {
    return <View>Hello, {this.props.name}</View>
  }
}
```

## 组件渲染

在前面，我们遇到的 Taro 元素都是内置组件：

```jsx
const element = <View />
```

然而，Taro 元素也可以是用户自定义的组件：

```jsx
const element = <Welcome name="Wallace" />
```

当 React 遇到的元素是用户自定义的组件，它会将 JSX 属性作为单个对象传递给该组件，这个对象称之为 `props`。

例如,这段代码会在页面上渲染出 `Hello, Wallace`:

```jsx
// welcome.js
class Welcome extends Component {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}</Text>
      </View>
    )
  }
}

// app.js
class App extends Component {
  render() {
    return <Welcome name="Wallace" />
  }
}
```

### Props 的只读性

一个声明的组件决不能修改它自己的 `props`。来看这个 `sum` 函数：

```jsx
function sum(a, b) {
  return a + b
}
```

类似于上面的这种函数称为「纯函数」，它没有改变它自己的输入值，当传入的值相同时，总是会返回相同的结果。

与之相对的是非纯函数，它会改变它自身的输入值：

```jsx
function withdraw(account, amount) {
  account.total -= amount
}
```

Taro 和 React 一样，也有一个严格的规则：

所有的 Taro 组件必须像纯函数那样使用它们的 props。

当然，应用的界面是随时间动态变化的，我们将在下一节介绍一种称为 `state` 的新概念，State 可以在不违反上述规则的情况下，根据用户操作、网络响应、或者其他状态变化，使组件动态的响应并改变组件的输出。

### 使用 PropTypes 检查类型

随着应用日渐庞大，你可以通过类型检查捕获大量错误。要检查组件的属性，你需要配置特殊的 `propTypes` 属性：

```jsx
import PropTypes from 'prop-types'

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
}
```

如上例，Taro 与 React 一样，也支持 `PropTypes` 检查类型，_目前在小程序端还有些问题_，但在 H5 端可以使用，用法和在 React 里一样。
更多可参照 [React 的相关文档](https://reactjs.org.cn/doc/typechecking-with-proptypes.html)。

---

## docs/quick-app.md

---
title: 快应用端开发流程
---

> 从 **1.3 beta** 版本开始支持快应用开发
>
> 本章节主要讲解快应用端 环境安装-开发-调试-打包-发布 原理及流程

## 简介

Taro 支持快应用端开发

## 安装

### 搭建快应用环境

#### 手机安装调试器

调试器是一个 Android 应用程序，下载调试器 APK 详见[资源下载](https://www.quickapp.cn/docCenter/post/69)

在手机上安装并打开调试器，按钮功能如下：

- **扫码安装**：配置 HTTP 服务器地址，下载 rpk 包，并唤起平台运行 rpk 包
- **本地安装**：选择手机文件系统中的 rpk 包，并唤起平台运行 rpk 包
- **在线更新**：重新发送 HTTP 请求，更新 rpk 包，并唤起平台运行 rpk 包
- **开始调试**：唤起平台运行 rpk 包，并启动远程调试
  **注意**：若打开调试器无法点击按钮，请升级手机系统到最新版本或安装平台预览版

安装成功后如下图所示：

![img](https://doc.quickapp.cn/tutorial/overview/images/img2.png)

#### 手机安装平台预览版

较新的系统版本中内置平台正式版，开发调试平台新功能可使用平台预览版

平台预览版存在以下优缺点：

- 优点：迭代速度快，可立即体验平台新功能
- 缺点：实现与真实的运行环境存在差异，对厂商服务和第三方服务的支持存在缺陷
  平台预览版是一个 Android 应用程序，下载平台预览版 APK 详见[资源下载](https://www.quickapp.cn/docCenter/post/69)

下载安装成功后，在手机调试器中点击切换运行平台至 org.hapjs.mockup，即可在平台预览版上安装运行 rpk 包

### 开发调试

在手机上安装完调试器后，就可以执行 Taro 的快应用编译命令开始编译了

```bash
$ taro build --type quickapp --watch
```

在编译完成后会遇到如下输出结果

![](https://img11.360buyimg.com/ling/jfs/t1/133888/5/12321/688893/5f89398bE0ac357d2/066a38b5f13dc2fd.jpg)

Taro 在将代码编译完后，会自动下载快应用的容器模板，同时安装好相关的依赖，随后就会自动启动快应用的服务，此时，只需要使用手机上安装的调试器扫码就能直接在手机上进行调试了。

### 使用 IDE

https://doc.quickapp.cn/tutorial/ide/overview.html

### 快应用配置

在 Taro 编译适配快应用需要进行一些配置，适配的具体原因可以参考[Taro 和快应用配置差异](./taro-quickapp-manifest.md#Taro和快应用配置差异)，通过在项目根目录下添加 `project.quickapp.json` 大体的配置项可以参考快应用官方文档的 [manifest 配置](https://doc.quickapp.cn/framework/manifest.html)，而 Taro 中支持以下配置：

| 属性                | 类型    | 默认值 | 必填 | 描述                                                                                               |
| :------------------ | :------ | :----- | :--- | :------------------------------------------------------------------------------------------------- |
| package             | String  | -      | 是   | 应用包名，确认与原生应用的包名不一致，推荐采用 com.company.module 的格式，如：com.example.demo     |
| name                | String  | -      | 是   | 应用名称，6 个汉字以内，与应用商店保存的名称一致，用于在桌面图标、弹窗等处显示应用名称             |
| icon                | String  | -      | 是   | 应用图标，提供 192x192 大小的即可                                                                  |
| versionName         | String  | -      | 否   | 应用版本名称，如："1.0"                                                                            |
| versionCode         | Integer | -      | 是   | 应用版本号，从 1 自增，推荐每次重新上传包时 versionCode+1                                          |
| minPlatformVersion  | Integer | -      | 否   | 支持的最小平台版本号，兼容性检查，避免上线后在低版本平台运行并导致不兼容；如果不填按照内测版本处理 |
| features            | Array   | -      | 否   | 接口列表，绝大部分接口都需要在这里声明，否则不能调用，详见每个接口的文档说明                       |
| config              | Object  | -      | 是   | 系统配置信息，详见[说明](https://doc.quickapp.cn/framework/manifest.html#config)                   |
| subpackages `1040+` | Object  | -      | 否   | 定义并启用分包加载，详见[说明](https://doc.quickapp.cn/framework/manifest.html#subpackages)        |

可以看出，相比于快应用官方的配置项，Taro 中支持的配置项缺少了 [router](https://doc.quickapp.cn/framework/manifest.html#router) 与 [display](https://doc.quickapp.cn/framework/manifest.html#display) 配置，这是因为这两项配置在 Taro 编译时会根据用户代码直接生成，不再需要额外配置。

而为了让用户更加方便进行快应用相关配置，Taro 增加了一些额外的配置项，例如：

`customPageConfig` 是为了让用户可以为每个页面配置快应用独有的 `filter` 与 `launchMode` 它直接配置在 `project.quickapp.json` 中，它是一个对象的类型，其 key 值即为页面路径，与 **入口文件** 中 `config` 下 `pages` 数组中配置的页面路径保持一致，常见例子如下

```json
{
  "customPageConfig": {
    "pages/index/index": {
      "filter": {
        "<action>": {
          "uri": "<pattern>"
        }
      },
      "launchMode": "standard"
    }
  }
}
```

一个典型的 `project.quickapp.json` 配置参考[例子](https://github.com/NervJS/taro/blob/master/packages/taro-cli/src/config/manifest.default.json)

### Taro 组件和快应用组件差异剖析

Taro 已经可以编译出可在微信/百度/支付宝/抖音小程序、H5、React-Native 运行的代码，近期也增加了快应用的支持，那必不可少的一步就是组件库的转换，众所周知小程序开发离不开三大要素——界面表现（结构、外观）层、逻辑处理层与系统接口层（网络、存储与媒体等），其中界面结构指的就是组件库，那立足于微信小程序的 Taro 组件和快应用组件有何异同？Taro 是如何处理这些差异的？

小程序官网放出来了一个[体验小程序](https://github.com/wechat-miniprogram/miniprogram-demo)用来展示它的组件、API、云开发能力，快应用官方也出了一个能力展示的开源项目[sample](https://github.com/quickappcn/sample),乍看好像差不多，其实两者之间的差异还是很多的，由于 Taro 组件基本上是微信小程序组件变为首字母大写之后形成的，下面以微信小程序组件为基准，看看快应用的组件能力如何。

## 视图容器

| 微信小程序组件                                                                               | 功能说明                                                                                                              | 对应快应用组件                                        | Taro 如何模拟                                                            |
| :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| [cover-image](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html)   | 覆盖在原生组件之上的图片视图                                                                                          | 无                                                    | 用 image 模拟，丢失 bindload 和 binderror 事件                           |
| [cover-view](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)     | 覆盖在原生组件之上的文本视图                                                                                          | 无                                                    | 用 div 模拟，丢失 scroll-top 属性                                        |
| [movable-area](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html) | [movable-view](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html)的可移动区域              | 无                                                    | 用 div 模拟，丢失 scale-area 属性                                        |
| [movable-view](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html) | 可移动的视图容器，在页面中可以拖拽滑动                                                                                | 无                                                    | 用 div 模拟，丢失所有属性                                                |
| [scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)   | 可滚动视图区域                                                                                                        | 无                                                    | 用 div 模拟，丢失所有属性                                                |
| [swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)             | 滑块视图容器                                                                                                          | [swiper](https://doc.quickapp.cn/widgets/swiper.html) | 指示点颜色可通过样式补齐、丢失 previous-margin、easing-function 等属性， |
| [swiper-item](https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html)   | 仅可放置在[swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)组件中，宽高自动设置为 100% | 无                                                    | 用 text 或 image 模拟，丢失 item-id 属性                                 |
| [view](https://developers.weixin.qq.com/miniprogram/dev/component/view.html)                 | 视图容器                                                                                                              | 无                                                    | 用 div 模拟，丢失所有属性                                                |

再来看基础组件和表单组件：

## 基础组件

| 微信小程序组件                                                                         | 功能说明 | 对应快应用组件                                            | Taro 如何模拟                                      |
| :------------------------------------------------------------------------------------- | :------- | --------------------------------------------------------- | -------------------------------------------------- |
| [icon](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)           | 图标     | 无                                                        | 用 div 模拟，丢失 type\size\color 属性             |
| [progress](https://developers.weixin.qq.com/miniprogram/dev/component/progress.html)   | 进度条   | [progress](https://doc.quickapp.cn/widgets/progress.html) | 只保留了 percent 属性                              |
| [rich-text](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html) | 富文本   | [richtext](https://doc.quickapp.cn/widgets/richtext.html) | nodes 属性做一次 AST 映射到变量中，丢失 space 属性 |
| [text](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)           | 文本     | [text](https://doc.quickapp.cn/widgets/text.html)         | 少有的比微信丰富的组件，模拟之后丢失所有属性       |

## 表单组件

| 名称                                                                                                     | 功能说明                                                                                                       | 对应快应用组件                                            | Taro 如何模拟                                      |
| :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------- |
| [button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)                         | 按钮                                                                                                           | 无                                                        | 用 div 模拟，丢失所有属性                          |
| [checkbox](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html)                     | 多选项目                                                                                                       | 无                                                        | 用 input 模拟，丢失 color 属性，仿真度高           |
| [checkbox-group](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html)         | 多项选择器，内部由多个[checkbox](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html)组成 | 无                                                        | 用 div 模拟，丢失所有属性                          |
| [editor](https://developers.weixin.qq.com/miniprogram/dev/component/editor.html)                         | 富文本编辑器，可以对图片、文字进行编辑                                                                         | 无                                                        | 用 richtext 模拟，丢失所有属性                     |
| [form](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)                             | 表单                                                                                                           | 无                                                        | 用 div 模拟，丢失所有属性                          |
| [input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)                           | 输入框                                                                                                         | [input](https://doc.quickapp.cn/widgets/input.html)       | 丢失 passwd、bindinput 等属性                      |
| [label](https://developers.weixin.qq.com/miniprogram/dev/component/label.html)                           | 用来改进表单组件的可用性                                                                                       | [label](https://doc.quickapp.cn/widgets/label.html)       | for 属性对应 target，但不支持子组件模拟            |
| [picker](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html)                         | 从底部弹起的滚动选择器                                                                                         | [picker](https://doc.quickapp.cn/widgets/picker.html)     | 丢失省市选择器类型，转换规则随 type 变化，模拟复杂 |
| [picker-view](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html)               | 嵌入页面的滚动选择器                                                                                           | 无                                                        | 用 div 模拟，丢失所有属性                          |
| [picker-view-column](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html) | 滚动选择器子项                                                                                                 | 无                                                        | 用 div 模拟，丢失所有属性                          |
| [radio](https://developers.weixin.qq.com/miniprogram/dev/component/radio.html)                           | 单选项目                                                                                                       | 无                                                        | 用 input 模拟，丢失 color 属性，仿真度高           |
| [radio-group](https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html)               | 单项选择器，内部由多个 [radio](https://developers.weixin.qq.com/miniprogram/dev/component/radio.html) 组成     | 无                                                        | 用 div 模拟，丢失所有属性                          |
| [slider](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html)                         | 滑动选择器                                                                                                     | [slider](https://doc.quickapp.cn/widgets/slider.html)     | 丢失 color、block-size 等属性                      |
| [switch](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html)                         | 开关选择器                                                                                                     | [switch](https://doc.quickapp.cn/widgets/switch.html)     | 丢失 color、disabled 等属性                        |
| [textarea](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html)                     | 多行输入框                                                                                                     | [textarea](https://doc.quickapp.cn/widgets/textarea.html) | 只保留了 placeholder、maxlength 属性               |

最后是不常用到的导航、媒体、地图和画布组件对比

## 导航

| 名称                                                                                                                   | 功能说明                             | 对应快应用组件 | Taro 如何模拟             |
| :--------------------------------------------------------------------------------------------------------------------- | :----------------------------------- | -------------- | ------------------------- |
| [functional-page-navigator](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html) | 仅在插件中有效，用于跳转到插件功能页 | 无             | 用 div 模拟，丢失所有属性 |
| [navigator](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)                                 | 页面链接                             | 无             | 用 div 模拟，丢失所有属性 |

## 媒体组件

| 名称                                                                                       | 功能说明       | 对应快应用组件                                        | Taro 如何模拟                                        |
| :----------------------------------------------------------------------------------------- | :------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| [audio](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html)             | 音频           | 无                                                    | div+slider+接口方式模拟，仅保留基本功能              |
| [camera](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)           | 系统相机       | [camera](https://doc.quickapp.cn/widgets/camera.html) | 仅保留 device-position、flash、binderror 属性        |
| [image](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)             | 图片           | [image](https://doc.quickapp.cn/widgets/image.html)   | 仅保留 src 属性                                      |
| [live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) | 实时音视频播放 | 无                                                    | 用 div 模拟，丢失所有属性                            |
| [live-pusher](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html) | 实时音视频录制 | 无                                                    | 用 div 模拟，丢失所有属性                            |
| [video](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)             | 视频           | [video](https://doc.quickapp.cn/widgets/video.html)   | 只保留 src、autoplay、poster、controls 和 muted 属性 |

## 地图

| 名称                                                                       | 功能说明 | 对应快应用组件                                  | Taro 如何模拟                    |
| :------------------------------------------------------------------------- | :------- | ----------------------------------------------- | -------------------------------- |
| [map](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) | 地图     | [map](https://doc.quickapp.cn/widgets/map.html) | 仿真度较高，属性可以做到一一映射 |

## 画布

| 名称                                                                             | 功能说明 | 对应快应用组件                                        | Taro 如何模拟                                            |
| :------------------------------------------------------------------------------- | :------- | ----------------------------------------------------- | -------------------------------------------------------- |
| [canvas](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html) | 画布     | [canvas](https://doc.quickapp.cn/widgets/canvas.html) | 同名但一个是组件，一个是通过 API 模拟的，只能用 div 模拟 |

## 开放能力

| 名称                                                                                                 | 功能说明               | 对应快应用组件 | Taro 如何模拟             |
| :--------------------------------------------------------------------------------------------------- | :--------------------- | -------------- | ------------------------- |
| [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)                 | 承载网页的容器         | 无             | 通过 web 组件仿真         |
| [ad](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html)                             | Banner 广告            | 无             | 用 div 模拟，丢失所有属性 |
| [official-account](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html) | 公众号关注组件         | 无             | 用 div 模拟，丢失所有属性 |
| [open-data](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)               | 用于展示微信开放的数据 | 无             | 用 div 模拟，丢失所有属性 |

从上面的数据来看，快应用支持的组件还很不完善，如果之前使用 Taro 开发微信小程序的话，想直接转到快应用是很难的（还有样式的严格限制），看到这里你可能会对快应用有点失望，但是快应用在手机端的原生渲染性能是微信小程序不能比的，下面的快应用特色组件会让你刮目相看：

1.使用 list+list-item 实现[流畅的滚动列表](https://doc.quickapp.cn/tutorial/widgets/list-tutorial.html)

2.新鲜的气泡组件[popup](https://doc.quickapp.cn/widgets/popup.html)

3.想实现盖楼功能? 看看这个堆叠组件[stack](https://doc.quickapp.cn/widgets/stack.html)

4.快应用也有 tabbar，[tabs](https://doc.quickapp.cn/widgets/tabs.html) / tab-bar/tab-content 三剑客

5.外卖应用必不可少的星级评分组件[rating](https://doc.quickapp.cn/widgets/rating.html)

---

以上就是 Taro 组件和快应用组件的一个概览对比，总结来说，如果想实现多端一致，请尽量在 Taro 里面使用仿真度高的组件，比如 Swiper、Image、Text、Input、Label、Picker、Video、Map、Camera、Canvas、Slider、Textarea 等，随着快应用不断完善，相信这些差异会逐渐补齐的。

---

## docs/ref.mdx

---
title: 节点获取
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

在 Web 开发中，常用的节点获取方法包括了 `document.getElementById` 等 DOM API，以及各开发框架的 `ref` 语法。而在 Taro 中，一般情况下建议使用 `ref` 语法来获取节点。但受限于[小程序平台的实现机制](implement-note#运行时)，如果需要获取节点的**尺寸、定位等与渲染有关的信息**，开发者需要使用 `Taro.createSelectorQuery` API 来获取节点。

## ref 语法

Taro 支持使用 React / Vue 等开发框架的 `ref` 语法来获取节点。开发者可以对这些节点进行一些操作，例如：调用节点的方法、设置属性等，但在小程序平台中不能获取到节点的尺寸信息。

:::info
不同平台 ref 获取到的节点类型不同，但 Taro 尽量保证了这些节点具有统一的属性与 API。
- H5 Ref 类型：Taro 组件实例，一般是 WebComponents。
- 小程序 Ref 类型：Taro 虚拟 DOM 节点，如 TaroElement。存在于逻辑层，因此不携带节点尺寸信息。
- RN Ref 类型：Taro 组件实例。
:::

<Tabs
  defaultValue="react"
  values={[
    {label: <ReactIcon />, value: 'react'},
    {label: <VueIcon version={2} />, value: 'vue2'},
    {label: <VueIcon version={3} />, value: 'vue3'}
  ]}
>

<TabItem value="react">

```tsx title="示例代码"
import { useRef } from 'react'
import { Input, Button } from '@tarojs/components'

export default function Index () {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <>
      <Input ref={inputRef} />
      <Button onClick={handleClick}>Focus the input</Button>
    </>
  )
}
```

</TabItem>

<TabItem value="vue2">

```html title="示例代码"
<template>
  <view>
    <input ref="inputRef" />
    <button @tap="handleClick">Focus the input</button>
  </view>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        this.$refs.inputRef.focus()
      }
    }
  }
</script>
```

</TabItem>

<TabItem value="vue3">

```html title="示例代码"
<template>
  <input ref="inputRef" />
  <button @tap="handleClick">Focus the input</button>
</template>

<script setup>
  import { ref } from 'vue'

  const inputRef = ref(null)

  function handleClick () {
    inputRef.value.focus()
  }
</script>
```

</TabItem>
</Tabs>

## 获取节点尺寸信息

使用 `Taro.createSelectorQuery` API 可以获取到节点的尺寸、定位等与渲染有关的信息。考虑到小程序的实现机制，需要配合在 `onReady` 生命周期中获取节点信息。

:::tip
各个小程序的渲染机制不同，导致了小程序生命周期和 Taro React / Vue 生命周期的触发顺序也不尽相同。如果存在获取节点失败的情况，请尝试使用 `Taro.nextTick` 或 `setTimeout` 等方法增加延时。
:::

<Tabs
  defaultValue="react"
  values={[
    {label: <ReactIcon />, value: 'react'},
    {label: <VueIcon version={2} />, value: 'vue2'},
    {label: <VueIcon version={3} />, value: 'vue3'}
  ]}
>

<TabItem value="react">

```tsx title="示例代码"
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'

export default function Index () {
  useReady(() => {
    // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
    Taro.createSelectorQuery()
      .select('#target')
      .boundingClientRect()
      .exec(res => console.log(res))
  })

  return (
    <View id="target"></View>
  )
}
```

</TabItem>

<TabItem value="vue2">

```html title="示例代码"
<template>
  <view id="target" />
</template>

<script>
  import Taro from '@tarojs/taro'

  export default {
    onReady() {
      // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
      Taro.createSelectorQuery()
        .select('#target')
        .boundingClientRect()
        .exec(res => console.log(res))
    }
  }
</script>

```

</TabItem>

<TabItem value="vue3">

```html title="示例代码"
<template>
  <view id="target" />
</template>

<script setup>
  import Taro, { useReady } from '@tarojs/taro'

  useReady(() => {
    // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
    // Vue3 需要使用 Taro.nextTick 确保已经渲染完成
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select('#target')
        .boundingClientRect()
        .exec(res => console.log(res))
    })
  })
</script>
```

</TabItem>
</Tabs>

### 在子组件中获取

`onReady` 是页面级别的生命周期，如果需要在子组件中调用 `Taro.createSelectorQuery`，建议使用 `useReady` 钩子。

若开发者没有使用 React Hook 或 Vue3 Composition API，则需要基于 Taro 的事件通讯机制，监听页面 `onReady` 的调用，请参考：[React](./react-page#子组件的-onready)、[Vue](./vue-page#子组件的-onready)。

<Tabs
  defaultValue="react"
  values={[
    {label: <ReactIcon />, value: 'react'},
    {label: <VueIcon version={3} />, value: 'vue3'}
  ]}
>

<TabItem value="react">

```tsx title="示例代码"
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'

function Comp () {
  useReady(() => {
    // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
    Taro.createSelectorQuery()
      .select('#target')
      .boundingClientRect()
      .exec((res) => console.log(res))
  })

  return (
    <View id="target"></View>
  )
}

export default function Index () {
  return (
    <Comp></Comp>
  )
}
```

</TabItem>

<TabItem value="vue3">

```html title="示例代码"
<!-- page -->
<template>
  <comp></comp>
</template>

<script setup>
  import Comp from './comp'
</script>

<!-- component -->
<template>
  <view id="target" />
</template>

<script setup>
  import Taro, { useReady } from '@tarojs/taro'

  useReady(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select('#target')
        .boundingClientRect()
        .exec(res => console.log(res))
    })
  })
</script>
```

</TabItem>
</Tabs>

### 在懒加载组件中获取

另一个常见的场景则是使用了懒加载的组件。当它们挂载时，页面的 `onReady` 早已触发，这时需要配合使用 `Taro.nextTick` API 才能成功获取到节点信息。

<Tabs
  defaultValue="react"
  values={[
    {label: <ReactIcon />, value: 'react'},
    {label: <VueIcon version={3} />, value: 'vue3'}
  ]}
>

<TabItem value="react">

```tsx title="示例代码"
import { View, Button, Canvas } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'

export default function Index () {
  const [isShow, setIsShow] = useState(false)

  return (
    <View>
      <Button onClick={() => setIsShow(true)}>Load Component</Button>
      {isShow && <LazyFloor></LazyFloor>}
    </View>
  )
}

function LazyFloor () {
  useEffect(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select(`.ec-canvas`)
        .fields({ node: true, size: true })
        .exec(res => console.log('res: ', res))
    })
  }, [])
  return (
    <View>
      <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
    </View>
  )
}
```

</TabItem>

<TabItem value="vue3">

```html title="示例代码"
<!-- page -->
<template>
  <view>
    <button @tap="isShow = true">Load Component</button>
    <LazyFloor v-if="isShow"></LazyFloor>
  </view>
</template>

<script setup>
  import { ref } from 'vue'
  import LazyFloor from './lazyFloor'

  const isShow = ref(false)
</script>

<!-- component -->
<template>
  <view>
    <canvas canvas-id='canvas' class='ec-canvas'></canvas>
  </view>
</template>

<script setup>
  import Taro from '@tarojs/taro'
  import { onMounted } from 'vue'

  onMounted(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select(`.ec-canvas`)
        .fields({ node: true, size: true })
        .exec(res => console.log('res: ', res))
    })
  })
</script>
```

</TabItem>
</Tabs>

### 在更新渲染时获取

上述讨论的都是初次渲染的情况，如果需要在更新渲染时获取节点信息，可以在 `componentDidUpdate`、 `useEffect`（React）或 `onUpdated`（Vue3）等更新渲染完成钩子中配合 `nextTick` 获取。用法和[懒加载组件](./ref#在懒加载组件中获取)类似。

### 使用了 CustomWrapper 时

:::tip
如果你的项目只需要运行在小程序端，也可以使用 `>>>` 选择器来解决：[#7411](https://github.com/NervJS/taro/issues/7411)
:::

在小程序平台，每个 `CustomWrapper` 实例对应一个原生自定义组件。小程序规定，如果要获取自定义组件内的节点，必须调用 `.in` 方法，其中 `scope` 是对应的自定义组件实例：`Taro.createSelectorQuery().in(scope)`。

对应在 Taro 中，开发者可以先使用 ref 获取 `CustomWrapper` 实例，然后通过其 `ctx` 属性获取到 `scope`，例子：

<Tabs
  defaultValue="react"
  values={[
    {label: <ReactIcon />, value: 'react'},
    {label: <VueIcon version={3} />, value: 'vue3'}
  ]}
>

<TabItem value="react">

```tsx title="示例代码"
import { View, Canvas, CustomWrapper } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { createRef } from 'react'

export default function Index () {
  const wrapperRef = createRef()

  useReady(() => {
    Taro.createSelectorQuery()
      .in(wrapperRef.current.ctx)
      .select(`.ec-canvas`)
      .fields({ node: true, size: true })
      .exec(res => console.log('res: ', res))
  })

  return (
    <View>
      <CustomWrapper ref={wrapperRef}>
        <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
      </CustomWrapper>
    </View>
  )
}
```

</TabItem>

<TabItem value="vue3">

```html title="示例代码"
<template>
  <view>
    <custom-wrapper ref="wrapperRef">
      <canvas canvas-id='canvas' class='ec-canvas'></canvas>
    </custom-wrapper>
  </view>
</template>

<script setup>
  import Taro, { useReady } from '@tarojs/taro'
  import { ref } from 'vue'

  const wrapperRef = ref()

  useReady(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .in(wrapperRef.value.ctx)
        .select(`.ec-canvas`)
        .fields({ node: true, size: true })
        .exec(res => console.log('res: ', res))
    })
  })
</script>
```

</TabItem>
</Tabs>

### 嵌套层级超过 baseLevel 时

:::tip
如果你的项目只需要运行在小程序端，也可以使用 `>>>` 选择器来解决：[#7411](https://github.com/NervJS/taro/issues/7411)
:::

在微信以及京东小程序平台，当组件的嵌套层级超过 [baseLevel](config-detail#minibaselevel)（默认 16 层）时，Taro 内部会创建一个原生自定义组件协助开启更深层次的嵌套，因此获取超过 baseLevel 层级的节点时会失败。这时我们需要借助 `CustomWrapper` 来解决这个问题：

<Tabs
  defaultValue="react"
  values={[
    {label: <ReactIcon />, value: 'react'},
    {label: <VueIcon version={3} />, value: 'vue3'}
  ]}
>

<TabItem value="react">

```tsx title="示例代码"
import { View, Canvas, CustomWrapper } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { createRef } from 'react'

export default function Index () {
  const wrapperRef = createRef()

  useReady(() => {
    Taro.createSelectorQuery()
      .in(wrapperRef.current.ctx)
      .select(`.ec-canvas`)
      .fields({ node: true, size: true })
      .exec(res => console.log('res: ', res))
  })

  return (
    <View><View><View><View>
      <View><View><View><View>
        <View><View><View><View>
          <CustomWrapper ref={wrapperRef}>
          <View><View><View><View>
            <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
          </View></View></View></View>
          </CustomWrapper>
        </View></View></View></View>
      </View></View></View></View>
    </View></View></View></View>
  )
}
```

</TabItem>

<TabItem value="vue3">

```html title="示例代码"
<template>
  <view><view><view><view>
    <view><view><view><view>
      <view><view><view><view>
        <custom-wrapper ref="wrapperRef">
        <view><view><view><view>
          <canvas canvas-id='canvas' class='ec-canvas'></canvas>
        </view></view></view></view>
        </custom-wrapper>
      </view></view></view></view>
    </view></view></view></view>
  </view></view></view></view>
</template>

<script setup>
  import Taro, { useReady } from '@tarojs/taro'
  import { ref } from 'vue'

  const wrapperRef = ref()

  useReady(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .in(wrapperRef.value.ctx)
        .select(`.ec-canvas`)
        .fields({ node: true, size: true })
        .exec(res => console.log('res: ', res))
    })
  })
</script>
```

</TabItem>
</Tabs>

---

## docs/relations.md

---
title: 小程序原生作用域获取
---

在 Taro 的页面和组件类中，`this` 指向的是 Taro 页面或组件的实例，例如

```jsx
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Menu extends Component {
  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      checked: props.checked,
    }
  }

  componentWillMount() {
    console.log(this) // this -> 组件 Menu 的实例
  }

  render() {
    return <View />
  }
}
```

但是一般我们需要获取 Taro 的页面和组件所对应的小程序原生页面和组件的实例，这个时候我们可以通过 `this.$scope` 就能访问到它们。

所以当调用一些 API 需要传入小程序的页面或者组件实例时，可以直接传入 `this.$scope`，例如 `Taro.createCanvasContext(canvasId, this)` 这个 API，第二个参数就是自定义组件实例 `this`，在 Taro 中就可以如下使用

```jsx
Taro.createCanvasContext(canvasId, this.$scope)
```

---

## docs/seowhy.md

---
title: 搜外七巧板在线制作小程序
---

## 搜外七巧板简介

[搜外七巧板](https://diy.seowhy.com/)是十多年技术沉淀、站长圈中流砥柱的[搜外网](https://www.seowhy.com/)开发的网站转小程序制作平台，小程序底层使用了 Taro，支持多种主流小程序平台，如 QQ、微信、字节跳动、360、支付宝、百度 。

只要你的网站是[搜外 6 系统](https://6.seowhy.com/)、Wordpress、DedeCMS、帝国 CMS、Zblog、PHPCMS 等其中的任意一种，那么，你只需要来搜外七巧板，进行一些简单的配置与美化就可以将自己网站的内容一键连接到小程序里 ，实现一个网站、一个小程序、多渠道展现。

**官网地址：https://diy.seowhy.com/**

**Taro 案例：https://diy.seowhy.com/case**

---

## 使用搜外七巧板

1. 登录注册即可免费拥有一个小程序
2. 设计配置打包下载小程序打包上传

---

## 加入搜外七巧板开发者

搜外七巧板小程序使自己开发的系统也支持小程序

更多详细见：[《搜外七巧板小程序开发者入驻文档》](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030231)

### 第一步：定义常量

```text
1. DB_PATH                    数据库目录
2. PROVIDER                   程序名称
```

### 第二步：实现方法

#### 1、main.php

1. appClient 类
2. connectProvider 方法 （读取数据库字段）

##### 范例：

1. [dedecms 范例](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030187)
2. [wordpress 范例](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030188)

---

#### 2、 provider.php

##### 必须实现方法：

| 字段名          | 说明                                                                         |
| --------------- | ---------------------------------------------------------------------------- |
| getPosts        | [获得数据列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030192)      |
| getCategories   | [获得分类列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030191)      |
| getCategory     | [获得分类详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030191)      |
| getArticles     | [获得文章列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030194)      |
| getArticle      | [获得文章详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030191)      |
| getProducts     | [获得产品列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030193)      |
| getProduct      | [获得产品详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030196)      |
| getPages        | [获得单页列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030197)      |
| getPage         | [获得单页详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030198)      |
| getComments     | [获得评论列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030199)      |
| saveComment     | [新增/修改评论](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030200)     |
| commentAttitude | [点赞或反对评论](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030201)    |
| getMapping      | [获得 sitemap](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030203)      |
| getSiteMapIndex | [获得 sitemapIndex](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030204) |
| \_getRelations  | 获得相关产品                                                                 |
| \_getSubCatIds  | 获得所有分类下级                                                             |
| getThumb        | 格式化缩略图                                                                 |
| convertArticle  | 格式化文章返回参数                                                           |
| convertProduct  | 格式化产品返回参数                                                           |
| convertCategory | 格式化分类                                                                   |
| convertPage     | 格式化单页                                                                   |
| convertComment  | 格式化留言                                                                   |
| parseContent    | 格式化内容                                                                   |
| getParams       | 获得扩展字段                                                                 |

---

## docs/skyline.mdx

---
title: Skyline
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Skyline 的具体内容详见：[Skyline 介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/introduction.html)

:::info
仅支持在微信小程序使用，worklet 部分从 `4.0.8` 开始支持
:::info

## 开启 Skyline

配置方法和微信小程序相同，开发前请仔细阅读 [《微信小程序 Skyline - 起步》](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/migration/)。


**示例：**

```js title="app.config.js"
export default defineAppConfig({
  pages: [
    'pages/index/index',
  ]
  lazyCodeLoading: "requiredComponents",
  rendererOptions: {
    skyline: {
      defaultDisplayBlock: true,
      defaultContentBox: true
    }
  }
})
```

```js title="page/index/index.config.js"
export default definePageConfig({
  navigationBarTitleText: '首页',
  renderer: 'skyline',
  componentFramework: 'glass-easel',
  navigationStyle: 'custom',
})
```

### 使用 worklet

在 Taro 中使用 worklet 需要首先开启半编译，开启方法见：[半编译模式使用方法](./complier-mode#使用方法)。

使用 worklet 动画能力时确保以下两项：详见 [worklet 动画](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/worklet.html)

* 确保开发者工具右上角 > 详情 > 本地设置里的 将 JS 编译成 ES5 选项被勾选上 (代码包体积会少量增加)
* worklet 动画相关接口仅在 Skyline 渲染模式下才能使用


**示例：**

```js title="config/index.js"
{
  mini: {
    experimental: {
      compileMode: true
    }
  }
}
```

```js title="pages/index/behavior.js"
const behavior = Behavior({
  methods: {
    onScrollUpdate(){
      "worklet";
      console.log('onScrollUpdateWorklet')
    },
    onGesture(evt) {
      'worklet';
      if (evt.state === 2) {
        this._offset.value += evt.deltaX;
      }
    }
  }
})

export default behavior
```

```jsx title="pages/index/index.jsx"
import { View, ScrollView, PanGestureHandler } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import behavior from "./behavior";

Index.behaviors = [behavior];

export default function Index() {
  useLoad(() => {
    const { page } = Taro.getCurrentInstance();
    if (page) {
      const offset = Taro.worklet.shared(0);
      page._offset = offset;
      Taro.nextTick(() => {
        page.applyAnimatedStyle(".circle", () => {
          "worklet";
          return {
            transform: `translateX(${offset.value}px)`,
          };
        });
      });
    }
  });

  return (
    <View className='index' compileMode>
      {/* 手势 */}
      <PanGestureHandler onGestureWorklet='onGesture'>
        <View className='circle'>拖动我</View>
      </PanGestureHandler>

      {/* 非手势组件的 worklet 回调 */}
      <ScrollView
        style={{ height: "300px", border: '1px solid #ccc' }}
        type='custom'
        scroll-y
        onScrollUpdateWorklet='onScrollUpdate'
      >
        {Array(100)
          .fill(1)
          .map((item, index) => (
            <View key={index}>{item}</View>
          ))}
      </ScrollView>
    </View>
  );
}
```

---

## docs/spec-for-taro.md

---
title: 项目组织
---

### 文件组织形式

> 以下文件组织规范为最佳实践的建议

所有项目源代码请放在项目根目录 `src` 目录下，项目所需最基本的文件包括 **入口文件** 以及 **页面文件**

- 入口文件为 `app.js`
- 页面文件建议放置在 `src/pages` 目录下

一个可靠的 Taro 项目可以按照如下方式进行组织

    ├── config                 配置目录
    |   ├── dev.js             开发时配置
    |   ├── index.js           默认配置
    |   └── prod.js            打包时配置
    ├── src                    源码目录
    |   ├── components         公共组件目录
    |   ├── pages              页面文件目录
    |   |   ├── index          index 页面目录
    |   |   |   ├── banner     页面 index 私有组件
    |   |   |   ├── index.js   index 页面逻辑
    |   |   |   └── index.css  index 页面样式
    |   ├── utils              公共方法库
    |   ├── app.css            项目总通用样式
    |   └── app.js             项目入口文件
    └── package.json

### 文件命名

Taro 中普通 JS/TS 文件以小写字母命名，多个单词以下划线连接，例如 `util.js`、`util_helper.js`

Taro 组件文件命名遵循 Pascal 命名法，例如 `ReservationCard.jsx`

### 文件后缀

Taro 中普通 JS/TS 文件以 `.js` 或者 `.ts` 作为文件后缀

Taro 组件则以 `.jsx` 或者 `.tsx` 作为文件后缀，当然这不是强制约束，只是作为一个实践的建议，组件文件依然可以以 `.js` 或者 `.ts` 作为文件后缀

---

## docs/static-reference.md

---
title: 静态资源引用
---

在 Taro 中可以像使用 [Webpack](https://webpack.js.org/) 那样自由地引用静态资源，而且不需要安装任何 Loaders。

## 引用样式文件

可以直接通过 ES6 的 `import` 语法来引用样式文件

例如引用 CSS 文件

```jsx
import './css/path/name.css'
```

引用 SCSS 文件

```jsx
import './css/path/name.scss'
```

## 引用 JS 文件

可以直接通过 ES6 的 `import` 语法来引用 JS 文件

```jsx
import { functionName } from './css/path/name.js'

import defaultExportName from './css/path/name.js'
```

## 引用图片、音频、字体等文件

可以直接通过 ES6 的 `import` 语法来引用此类文件，拿到文件引用后直接在 JSX 中进行使用

```jsx
// 引用文件
import namedPng from '../../images/path/named.png'

// 使用
export default () => (
  <View>
    <Image src={namedPng} />
  </View>
)
```

## 引用 JSON 文件

可以直接通过 ES6 的 `import` 语法来引用此类文件，拿到 JSON 文件输出的 JSON 数据

```jsx
// 引用 json 文件
/**
 * named.json
 * {
 *   x: 1
 * }
 **/
import namedJson from '../../json/path/named.json'

console.log(namedJson.x)
```

## 小程序样式中引用本地资源

在小程序的样式中，默认不能直接引用本地资源，只能通过网络地址、Base64 的方式来进行资源引用，为了方便开发，Taro 提供了直接在样式文件中引用本地资源的方式，其原理是通过 `PostCSS` 的 [`postcss-url`](https://github.com/postcss/postcss-url) 插件将样式中本地资源引用转换成 Base64 格式，从而能正常加载。

Taro 默认会对 `1kb` 大小以下的资源进行转换，如果需要修改配置，可以在 `config/index.js` 中进行修改，配置位于 [`weapp.module.postcss`](./config-detail#weappmodulepostcss)。

具体配置如下

```js title="/config/index.js"
// 小程序端样式引用本地资源内联
url: {
  enable: true,
  config: {
    limit: 10240 // 设定转换尺寸上限
  }
}
```

---

## docs/taro-quickapp-manifest.md

### Taro 和快应用配置差异

如果希望自己现在写的 Taro 程序日后能更平滑的转换到快应用，在十大厂商的多个入口(搜索、语音、浏览器、负一屏)快速上线，就需要了解 Taro 和快应用的配置差异，由于 Taro 是立足于微信小程序的开发框架，因此只需要比较微信小程序和快应用的官方文档即可了解差异，以生态更完善的微信小程序为基础整理出如下表格：

| 微信小程序属性                                                                                                                                     | 类型     | 必填 | 描述                                                                                                                                                                    | 对应快应用属性 |
| :------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| [pages](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages)                                                   | string[] | 是   | 页面路径列表                                                                                                                                                            | router.pages   |
| [window](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window)                                                 | Object   | 否   | 全局的默认窗口表现                                                                                                                                                      | display        |
| [tabBar](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar)                                                 | Object   | 否   | 底部 `tab` 栏的表现                                                                                                                                                     | 无             |
| [networkTimeout](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#networkTimeout)                                 | Object   | 否   | 网络超时时间                                                                                                                                                            | 无             |
| [functionalPages](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#functionalPages)                               | boolean  | 否   | 是否启用插件功能页，默认关闭                                                                                                                                            | 无             |
| [subpackages](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#subpackages)                                       | Object[] | 否   | 分包结构配置                                                                                                                                                            | subpackages    |
| [workers](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#workers)                                               | string   | 否   | `Worker` 代码放置的目录                                                                                                                                                 | 无             |
| [requiredBackgroundModes](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#requiredBackgroundModes)               | string[] | 否   | 需要在后台使用的能力，如「音乐播放」                                                                                                                                    | features       |
| [plugins](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#plugins)                                               | Object   | 否   | 使用到的插件                                                                                                                                                            | 无             |
| [preloadRule](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#preloadRule)                                       | Object   | 否   | 分包预下载规则                                                                                                                                                          | 无             |
| [resizable](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#resizable)                                           | boolean  | 否   | iPad 小程序是否支持屏幕旋转，默认关闭                                                                                                                                   | 无             |
| [navigateToMiniProgramAppIdList](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#navigateToMiniProgramAppIdList) | string[] | 否   | 需要跳转的小程序列表，详见 [wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html) | 无             |
| [usingComponents](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#usingComponents)                               | Object   | 否   | 全局[自定义组件](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/(custom-component/README)>)配置                                              | 无             |
| [permission](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)                                         | Object   | 否   | 小程序接口权限相关设置                                                                                                                                                  | 无             |
| [sitemapLocation](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#sitemapLocation)                               | String   | 是   | 指明 sitemap.json 的位置                                                                                                                                                | 无             |
| [style](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)                                                   | String   | 否   | 指定使用升级后的 weui 样式                                                                                                                                              | 无             |

以上是全局配置的差异，从表中可以看到微信小程序有非常多的定制属性，比如 tabBar\plugins\sitemapLocation 等，当然快应用也有很多定制属性，如下表加粗所示：

| 属性                   | 类型        | 默认值 | 必填   | 描述                                                                                                   |
| :--------------------- | :---------- | :----- | :----- | :----------------------------------------------------------------------------------------------------- |
| **package**            | **String**  | **-**  | **是** | **应用包名，确认与原生应用的包名不一致，推荐采用 com.company.module 的格式，如：com.example.demo**     |
| **name**               | **String**  | **-**  | **是** | **应用名称，6 个汉字以内，与应用商店保存的名称一致，用于在桌面图标、弹窗等处显示应用名称**             |
| **icon**               | **String**  | **-**  | **是** | **应用图标，提供 192x192 大小的即可**                                                                  |
| **versionName**        | **String**  | **-**  | **否** | **应用版本名称，如：`"1.0"**`                                                                          |
| **versionCode**        | **Integer** | **-**  | **是** | **应用版本号，从`1`自增，推荐每次重新上传包时 versionCode+1\*\***                                      |
| **minPlatformVersion** | **Integer** | **-**  | **否** | **支持的最小平台版本号，兼容性检查，避免上线后在低版本平台运行并导致不兼容；如果不填按照内测版本处理** |
| features               | Array       | -      | 否     | 接口列表，绝大部分接口都需要在这里声明，否则不能调用，详见每个接口的文档说明                           |
| config                 | Object      | -      | 是     | 系统配置信息                                                                                           |
| router                 | Object      | -      | 是     | 路由信息                                                                                               |
| display                | Object      | -      | 否     | UI 显示相关配置                                                                                        |
| subpackages `1040+`    | Object      | -      | 否     | 定义并启用分包加载                                                                                     |

微信小程序还支持每个页面定制自己的页面配置 json(大部分属性继承自[window](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window))，而快应用的页面配置则统一由 display.pages 管理，从宏观上可以看到两类轻应用的配置差别，微观上我们也来分析一下：

- pages **VS** router.pages

微信的 pages 只是一个路径字符串数组，没有额外的信息，而快应用的 pages 有很多细腻的属性，比如 filter 属性，声明该属性之后，页面中可以使用$page 获取打开页面的参数，还有 launchMode 可以指定启动模式，Taro 为了兼容这一差异，使用 customPageConfig 属性进行适配，参考[文档](/docs/quick-app) 。

- window **VS** display

| 微信小程序属性               | 描述                                                                                                                                                                | 快应用属性              |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------- |
| navigationBarBackgroundColor | 导航栏背景颜色，如 `#000000`                                                                                                                                        | titleBarBackgroundColor |
| navigationBarTextStyle       | 导航栏标题颜色，仅支持 `black` / `white`                                                                                                                            | titleBarTextColor       |
| navigationBarTitleText       | 导航栏标题文字内容                                                                                                                                                  | titleBarText            |
| navigationStyle              | 导航栏样式，仅支持以下值： `default` 默认样式 `custom` 自定义导航栏，只保留右上角胶囊按钮。参见注 2。                                                               | 无                      |
| backgroundColor              | 窗口的背景色                                                                                                                                                        | backgroundColor         |
| backgroundTextStyle          | 下拉 loading 的样式，仅支持 `dark` / `light`                                                                                                                        | 无                      |
| backgroundColorTop           | 顶部窗口的背景色，仅 iOS 支持                                                                                                                                       | 无                      |
| backgroundColorBottom        | 底部窗口的背景色，仅 iOS 支持                                                                                                                                       | 无                      |
| enablePullDownRefresh        | 是否开启全局的下拉刷新。 详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh)                  | 无                      |
| onReachBottomDistance        | 页面上拉触底事件触发时距页面底部距离，单位为 px。 详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom) | 无                      |
| pageOrientation              | 屏幕旋转设置，支持 `auto` / `portrait` / `landscape` 详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)        | orientation             |

微信小程序对背景和导航栏的样式配置更加细腻，快应用则新增了对沉浸式状态栏的管理。

| 属性                               | 类型                  | 默认值 | 描述                                                           |
| :--------------------------------- | :-------------------- | :----- | :------------------------------------------------------------- |
| statusBarImmersive `1050+`         | Boolean               | false  | 是否显示沉浸式状态栏                                           |
| statusBarTextStyle `1050+`         | light \| dark \| auto | auto   | 状态栏文字样式，有亮,暗和自动 当为自动时会根据状态栏背景色调整 |
| statusBarBackgroundColor `1050+`   | String                | -      | 状态栏背景色，默认值同标题栏背景色                             |
| statusBarBackgroundOpacity `1050+` | float(0-1.0)          | false  | 状态栏背景色不透明度，默认值同标题栏背景色不透明度             |

至于啥是沉浸式状态栏，[参考经验](https://jingyan.baidu.com/article/3d69c55122cd57f0cf02d728.html)

- subPackages **VS** subPackages

  既然是轻应用自然少不了分包机制，微信的 subPackages 支持 root\name\pages\independent 字段，当 independent 字段为 true 时为独立分包，此时可以不需下载主包即可运行，否则为普通分包，当用户进入普通分包或主包内页面时，主包会被下载，快应用则支持 name\resource 字段，resource 就是包名，运行时，快应用将优先加载基础包和页面所在分包，其余分包会自动在后台进行预加载。

  ***

以上就是 Taro 和快应用的配置对比啦。

参考链接：

[https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#全局配置)

[https://doc.quickapp.cn/framework/manifest.html](https://doc.quickapp.cn/framework/manifest.html)

---

