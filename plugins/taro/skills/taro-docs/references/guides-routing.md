## docs/react-18.md

---
title: React 18
---

:::note
Taro v3.5 开始支持。
:::

从 Taro v3.5 开始，Taro 将默认使用 React 18 版本。你可以在 Taro 使用 React18 中激动人心的新特性了。

### 相关资料

- [React v18.0](https://reactjs.org/blog/2022/03/29/react-v18.html)

## 使用方法

### 创建新项目

```bash
# @tarojs/cli 升级到 v3.5
$ taro init myProject
# 选择「react」框架
```

### 旧项目升级

```bash
$ taro update project 3.5
# 项目 package.json 中 react / react-dom 版本升级为 "^18"
```

:::note
如果升级了 Taro v3.5，但不想使用 React v18，可以将项目 `package.json` 中 `react / react-dom` 版本降级为 `^17` 并重新安装依赖。
:::

## 注意事项

- 开发支付宝小程序时，Webpack4 暂不支持使用 React18，[#12134](https://github.com/NervJS/taro/issues/12134#issuecomment-1197904281)。
- 如果你选择升级到 React 18，那么项目中使用的其他 React 生态库同步也需要支持 React 18 版本，以减少运行时问题，比如 [issue 117](https://github.com/NervJS/taro-docs/issues/117)。
- 受小程序环境限制，诸如新 SSR Suspense 等特性将不能在小程序中使用。
- RN 暂不支持 React v18，需要等待 RN 官方输出支持方案。

---

## docs/react-entry.mdx

---
title: 入口组件
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

每一个 Taro 应用都需要一个入口组件（React 组件）用来注册应用。入口文件默认是 `src` 目录下的 `app.js`。

在入口组件中我们可以设置全局状态或访问小程序入口实例的生命周期。

## 代码示例

<Tabs
  defaultValue="class"
  values={[
    {label: 'Class Component', value: 'class'},
    {label: 'Functional Component', value: 'functional'}
  ]}>
<TabItem value="class">

```jsx title="app.js"
import React, { Component } from 'react'

// 假设我们要使用 Redux
import { Provider } from 'react-redux'
import configStore from './store'

// 全局样式
import './app.css'

const store = configStore()

class App extends Component {
  // 可以使用所有的 React 生命周期方法
  componentDidMount() {}

  // 对应 onLaunch
  onLaunch() {}

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  render() {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return (
      <Provider store={store}>
        {/* this.props.children 是将要被渲染的页面 */}
        {this.props.children}
      </Provider>
    )
  }
}

export default App
```

</TabItem>

<TabItem value="functional">

```jsx title="app.js"
import React, { useEffect } from 'react'

// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入
import { useDidShow, useDidHide } from '@tarojs/taro'

// 假设我们要使用 Redux
import { Provider } from 'react-redux'
import configStore from './store'

// 全局样式
import './app.css'

const store = configStore()

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <Provider store={store}>
      {/* props.children 是将要被渲染的页面 */}
      {props.children}
    </Provider>
  )
}

export default App
```

</TabItem>
</Tabs>

## 入口组件配置

请参考 [全局配置](./app-config)

## 生命周期方法

入口组件除了支持 React 的生命周期方法外，还根据小程序的标准，额外支持以下生命周期：

### onLaunch (options)

> 在小程序环境中对应 app 的 `onLaunch`。

在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到程序初始化参数。

#### 参数

##### options

| 属性         | 类型   | 说明                                                                 |
| ------------ | ------ | -------------------------------------------------------------------- |
| path         | string | 启动小程序的路径                                                     |
| scene        | number | 启动小程序的场景值                                                   |
| query        | Object | 启动小程序的 query 参数                                              |
| shareTicket  | string | shareTicket，详见获取更多转发信息                                    |
| referrerInfo | Object | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {} |

##### options.referrerInfo

| 属性            | 类型   | 说明                                                                 |
| --------------- | ------ | -------------------------------------------------------------------- |
| appId           | string | 来源小程序，或者公众号（微信中）                                     |
| extraData       | Object | 来源小程序传过来的数据，微信和百度小程序在 scene=1037 或 1038 时支持 |
| sourceServiceId | string | 来源插件，当处于插件运行模式时可见                                   |

> options 参数的字段在不同小程序中可能存在差异，如：
>
> 场景值 scene，在微信小程序和百度小程序中存在区别，请分别参考 [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) 和 [百度小程序文档](https://smartprogram.baidu.com/docs/data/scene/)

### componentDidShow (options)

程序启动，或切前台时触发。

和 `onLaunch` 生命周期一样，在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到程序初始化参数。

参数与 `onLaunch` 中获取的基本一致，但**百度小程序**中补充两个参数如下：

| 属性      | 类型   | 说明                                                                                                                                                 |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| entryType | string | 展现的来源标识，取值为 user/ schema /sys :<br />user：表示通过 home 前后<br/>切换或解锁屏幕等方式调起；<br/>schema：表示通过协议调起;<br />sys：其它 |
| appURL    | string | 展现时的调起协议，仅当 entryType 值为 schema 时存在                                                                                                  |

### componentDidHide ()

程序切后台时触发。

### onError (error)

:::info
Taro v3.5.0+ 开始支持
:::

小程序发生脚本错误或 API 调用报错时触发。

### onPageNotFound (Object)

程序要打开的页面不存在时触发。

#### 参数

##### Object

| 属性        | 类型    | 说明                                                                           |
| ----------- | ------- | ------------------------------------------------------------------------------ |
| path        | string  | 不存在页面的路径                                                               |
| query       | Object  | 打开不存在页面的 query 参数                                                    |
| isEntryPage | boolean | 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） |

### onUnhandledRejection (Object)

:::info
Taro v3.5.10+ 开始支持
:::

小程序有未处理的 Promise 拒绝时触发。

#### 参数

##### Object

| 属性    | 类型    | 说明                            |
| ------- | ------- | ------------------------------- |
| reason  | string  | 拒绝原因，一般是一个 Error 对象 |
| promise | Promise | 被拒绝的 Promise 对象           |

> 注意：**支付宝小程序**需要在源码根目录的 `project.alipay.json` 文件中添加配置 `enableAppxNg: true` 才能在真机环境进行监听。

---

## docs/react-overall.md

---
title: 概述
---

Taro 3 支持将 Web 框架直接运行在各平台，开发者使用的是真实的 React 和 Vue 等框架。

但是 Taro 在组件、API、路由等规范上，遵循微信小程序规范，所以在 Taro 中使用 React 和开发者熟悉的 Web 端有一些差异，以下将详细列出。

:::info
[Breaking] 旧项目升级到 Taro v3.4+ 请安装依赖 `@tarojs/plugin-framework-react`
:::

## React API

:::info
[Breaking] 从 Taro 1/2 升级到 Taro 3 的同学需要额外关注
:::

因为在 Taro 3 中开发者使用的是真实的 React，React 的 API 如 `Component`、`useState`、`useEffect` 等都需要从 React 包中获取。

```js
// 从 'react' 包中获取 React API
import React, { Component, useState, useEffect } from 'react'
```

## 入口组件和页面组件

因为 Taro 遵循小程序的路由规范，所以引入了[入口组件](./react-entry)和[页面组件](./react-page)的概念，分别对应小程序规范的入口组件 `app` 和页面组件 `page`。

一个 Taro 应用由一个入口组件和至少一个页面组件所组成。

## 内置组件

:::note
自 Taro v3.3+，支持使用 H5 标签进行开发，详情请见 [使用 HTML 标签](use-h5)
:::

Taro 中可以使用小程序规范的内置组件进行开发，如 `<View>`、`<Text>`、`<Button>` 等。

### Taro 规范

1. 在 React 中使用这些内置组件前，必须从 `@tarojs/components` 进行引入。
2. 组件属性遵从**大驼峰式命名规范**。
3. 事件规范请看下一节：[组件事件](./react-overall#%E4%BA%8B%E4%BB%B6)。

### 示例代码

```jsx
import { Swiper, SwiperItem } from '@tarojs/components'

function Index() {
  return (
    <Swiper
      className="box"
      autoplay
      interval={1000}
      indicatorColor="#999"
      onClick={() => {}}
      onAnimationFinish={() => {}}
    >
      <SwiperItem>
        <View className="text">1</View>
      </SwiperItem>
      <SwiperItem>
        <View className="text">2</View>
      </SwiperItem>
      <SwiperItem>
        <View className="text">3</View>
      </SwiperItem>
    </Swiper>
  )
}
```

注意：如果某平台新增的组件或组件的属性还没被 Taro 支持，可以提交 [Issues](https://github.com/NervJS/taro/issues)，我们会尽快修复。

## 事件

事件和 Web 端一样。在事件回调函数中，第一个参数是事件对象，回调中调用 `stopPropagation` 可以阻止冒泡。

### Taro 规范

1. 内置事件名以 `on` 开头，遵从小驼峰式（camelCase）命名规范。
2. React 中点击事件使用 `onClick`。

### 示例代码

```jsx
function Comp() {
  function clickHandler(e) {
    e.stopPropagation() // 阻止冒泡
  }

  function scrollHandler() {}

  // 只有小程序的 bindtap 对应 Taro 的 onClick
  // 其余小程序事件名把 bind 换成 on 即是 Taro 事件名（支付宝小程序除外，它的事件就是以 on 开头）
  return <ScrollView onClick={clickHandler} onScroll={scrollHandler} />
}
```

### Taro 3 在小程序端的事件机制

在 Taro 1 & 2 中，Taro 会根据开发者是否使用了 `e.stopPropagation()`，来决定在小程序模板中绑定的事件是以 `bind` 还是以 `catch` 形式。因此事件冒泡是由小程序控制的。

但是在 Taro 3，我们在小程序逻辑层实现了一套事件系统，包括事件触发和事件冒泡。在小程序模板中绑定的事件都是以 `bind` 的形式。

一般情况下，这套在逻辑层实现的小程序事件系统是可以正常工作的，事件回调能正确触发、冒泡、停止冒泡。

但是，小程序模板中绑定的 `catchtouchmove` 事件除了可以阻止回调函数冒泡触发外，还能阻止视图的**滚动穿透**，这点 Taro 的事件系统是做不到的。

### 阻止滚动穿透

上一点中，我们介绍了 Taro 3 的事件机制。因为事件都以 `bind` 的形式进行绑定，因此不能使用 `e.stopPropagation()` 阻止滚动穿透。

针对滚动穿透，目前总结了两种解决办法：

#### 一、样式

使用样式解决：[禁止被穿透的组件滚动](https://github.com/NervJS/taro/issues/5984#issuecomment-614502302)。

这也是最推荐的做法。

#### 二、catchMove

> Taro 3.0.21 版本开始支持

但是地图组件本身就是可以滚动的，即使固定了它的宽高。所以第一种办法处理不了冒泡到地图组件上的滚动事件。

这时候可以为 `View` 组件增加 **catchMove** 属性：

```jsx
// 这个 View 组件会绑定 catchtouchmove 事件而不是 bindtouchmove
<View catchMove></View>
```

### dataset

#### 一般情况

我们建议按 React、 Vue 的 DSL 特性进行思考，因为 `dataset` 是小程序的特性。

#### dataset

`dataset` 是特别的模版属性，主要作用是可以在事件回调的 `event` 对象中获取到 `dataset` 相关数据。

**这点 Taro 是支持的**，在事件回调对象中可以通过 `event.target.dataset` 或 `event.currentTarget.dataset` 获取到。

#### 模板属性

上一点所说的，Taro 对于小程序 `dataset` 的模拟是在小程序的**逻辑层**实现的。**并没有真正在模板设置这个属性**。

但在小程序中有一些 API（如：`createIntersectionObserver`）获取到页面的节点的时候，由于节点上实际没有对应的属性而获取不到。

这时可以考虑使用 [taro-plugin-inject](https://github.com/NervJS/taro-plugin-inject) 插件注入一些通用属性，如：

```js title="config/index.js"
const config = {
  plugins: [
    [
      '@tarojs/plugin-inject',
      {
        components: {
          View: {
            'data-index': "'dataIndex'",
          },
          ScrollView: {
            'data-observe': "'dataObserve'",
          },
        },
      },
    ],
  ],
}
```

## 生命周期触发机制

Taro 3 在小程序逻辑层上实现了一份遵循 Web 标准 BOM 和 DOM API。因此 React 使用的 `document.appendChild`、`document.removeChild` 等 API 其实是 Taro 模拟实现的，最终的效果是把 React 的虚拟 DOM 树渲染为 Taro 模拟的 Web 标准 DOM 树。

因此在 Taro3 中，React 的生命周期触发时机和我们平常在 Web 开发中理解的概念有一些偏差。

### React 的生命周期

React 组件的生命周期方法在 Taro 中都支持使用。

触发时机：

##### 1. componentWillMount ()

[onLoad](react-page#onload-options) 之后，页面组件渲染到 Taro 的虚拟 DOM 之前触发。

##### 2. componentDidMount ()

页面组件渲染到 Taro 的虚拟 DOM 之后触发。

此时能访问到 Taro 的虚拟 DOM（使用 React ref、document.getElementById 等手段），并支持对其进行操作（设置 DOM 的 style 等）。

但此时不代表 Taro 的虚拟 DOM 数据已经完成从逻辑层 `setData` 到视图层。因此这时**无法通过 `createSelectorQuery` 等方法获取小程序渲染层 DOM 节点。** 只能在 [onReady](react-page#onready-) 生命周期中获取。

### 小程序页面的方法

小程序页面的方法，在 Taro 的页面中同样可以使用：在 Class Component 中书写同名方法、在 Functional Component 中使用对应的 Hooks。

**注意：**

- 小程序页面方法在各端的支持程度不一。
- 使用了 HOC 包裹的小程序页面组件，必须处理 forwardRef 或使用继承组件的方式而不是返回组件的方式，否则小程序页面方法可能不会被触发。

## Ref

[节点获取](./ref.mdx)

## Hooks

[Hooks 文档](./hooks.md)

## dangerouslySetInnerHTML

在小程序端，使用 `dangerouslySetInnerHTML` 时有一些额外的配置选项和需要注意的地方，详情请参考[《渲染 HTML》](html)。

## createPortal

React `createPortal` 支持将组件渲染至特定的 dom 节点中，由于不能在页面组件的 DOM 树之外插入元素，无法实现应用级别的 `<Portal>` 组件。但你仍可以在当前页面中使用 `createPortal`。

示例项目：[taro-react-portal](https://github.com/AdvancedCat/taro-react-portal)

## Minified React error

因为 development 版本的 React 体积较大，为了减少小程序体积，方便开发时真机预览。Taro 在构建小程序时默认使用 production 版本的 React 相关依赖。

但是 production 版本的 React 出错时不会展示报错堆栈的信息。因此当你遇到类似这种报错时：【Error: Minified React error #152】。可以修改编译配置中的 [mini.debugReact](./config-detail#minidebugreact) 选项，然后重新开启编译。这样 Taro 会使用 development 版本的 React，从而输出报错堆栈。

#### Error: Minified React error #152 报错

![](https://storage.jd.com/cjj-pub-images/minified-react-error.png)

## 其它限制

- 由于小程序不支持动态引入，因此小程序中无法使用 `React.lazy` API。

## 常见问题

- `useEffect`、`componentDidMount` 中获取不到渲染层元素信息，[7116](https://github.com/NervJS/taro/issues/7116)
- `useEffect` 或 `useLayoutEffect` 中获取不到组件最新的宽高，[#7491](https://github.com/NervJS/taro/issues/7491)
- 嵌套层级较深时，使用 `selectorQuery` 无法查询到子元素，[#7411](https://github.com/NervJS/taro/issues/7411)
- Taro React 支持使用 Recoil，如果使用中遇到 `ReferenceError: Window is not defined` 的报错，请参考 [#11429](https://github.com/NervJS/taro/issues/11429) 以绕过。

---

## docs/react-page.mdx

---
title: 页面组件
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

每一个 Taro 应用都至少包括一个页面组件，页面组件可以通过 Taro 路由进行跳转，也可以访问小程序页面的生命周期。

## 代码示例

<Tabs
  defaultValue="class"
  values={[
    {label: 'Class Component', value: 'class'},
    {label: 'Functional Component', value: 'functional'}
  ]}>
<TabItem value="class">

```jsx title="page.js"
import React, { Component } from 'react'
import { View } from '@tarojs/components'

class Index extends Component {
  // 可以使用所有的 React 生命周期方法
  componentDidMount() {}

  // onLoad
  onLoad() {}

  // onReady
  onReady() {}

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() {}

  render() {
    return <View className="index" />
  }
}

export default Index
```

</TabItem>

<TabItem value="functional">

```jsx title="page.js"
import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { useReady, useDidShow, useDidHide, usePullDownRefresh } from '@tarojs/taro'

function Index() {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => {})

  return <View className="index" />
}

export default Index
```

</TabItem>
</Tabs>

## 页面组件配置

请参考 [页面配置](./page-config)

## 生命周期方法

页面组件除了支持 React 的生命周期方法外，还根据小程序的标准，额外支持以下生命周期：

### onLoad (options)

> 在小程序环境中对应页面的 `onLoad`。

在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到页面路由参数。

### onUnload ()

:::info
Taro v3.4.7 开始支持。
:::

> 在小程序环境中对应页面的 `onUnload`。

一般情况下建议使用 React 的 `componentWillUnmount` 生命周期处理页面卸载时的逻辑。当某些特殊情况需要在页面的 `onUnload` 的同一个事件循环中实现逻辑时才使用它（如对小程序的生命周期执行顺序有强依赖关系时）。

### onReady ()

> 在小程序环境中对应页面的 `onReady`。

从此生命周期开始可以使用 `createCanvasContext` 或 `createSelectorQuery` 等 API 访问小程序渲染层的 DOM 节点。

#### 子组件的 onReady

只在页面组件才会触发 `onReady` 生命周期。子组件可以使用 Taro 内置的[消息机制](./apis/about/events)监听页面组件的 `onReady()` 生命周期：

```jsx title="页面中某个子组件"
import React from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
  $instance = getCurrentInstance()

  componentWillMount() {
    const onReadyEventId = this.$instance.router.onReady
    eventCenter.once(onReadyEventId, () => {
      console.log('onReady')

      // onReady 触发后才能获取小程序渲染层的节点
      Taro.createSelectorQuery()
        .select('#only')
        .boundingClientRect()
        .exec((res) => console.log(res, 'res'))
    })
  }

  render() {
    return <View id="only"></View>
  }
}
```

但是当子组件是**按需加载**的时候，页面 `onReady` 早已触发。如果此按需加载的子组件需要获取小程序渲染层的 DOM 节点，因为错过了页面 `onReady`，只能尝试使用 `Taro.nextTick` 模拟：

```jsx title="按需加载的子组件"
import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

class Test extends React.Component {
  componentDidMount() {
    Taro.nextTick(() => {
      // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
      Taro.createSelectorQuery()
        .select('#only')
        .boundingClientRect()
        .exec((res) => console.log(res, 'res'))
    })
  }

  render() {
    return <View id="only" />
  }
}
```

### componentDidShow ()

> 在小程序环境中对应页面的 `onShow`。

页面显示/切入前台时触发。

#### 子组件的 onShow

只在页面组件才会触发 `onShow` 生命周期。子组件可以使用 Taro 内置的[消息机制](./apis/about/events)监听页面组件的 `onShow()` 生命周期：

```jsx title="页面中某个子组件"
import React from 'react'
import { View } from '@tarojs/components'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
  $instance = getCurrentInstance()

  componentWillMount() {
    const onShowEventId = this.$instance.router.onShow
    // 监听
    eventCenter.on(onShowEventId, this.onShow)
  }

  componentWillUnmount() {
    const onShowEventId = this.$instance.router.onShow
    // 卸载
    eventCenter.off(onShowEventId, this.onShow)
  }

  onShow = () => {
    console.log('onShow')
  }

  render() {
    return <View id="only" />
  }
}
```

### componentDidHide ()

> 在小程序环境中对应页面的 `onHide`。

页面隐藏/切入后台时触发。

#### 子组件的 onHide

只在页面组件才会触发 `onHide` 生命周期。子组件可以使用 Taro 内置的[消息机制](./apis/about/events)监听页面组件的 `onHide()` 生命周期：

```jsx title="页面中某个子组件"
import React from 'react'
import { View } from '@tarojs/components'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
  $instance = getCurrentInstance()

  componentWillMount() {
    const onHideEventId = this.$instance.router.onHide
    // 监听
    eventCenter.on(onHideEventId, this.onHide)
  }

  componentWillUnmount() {
    const onHideEventId = this.$instance.router.onHide
    // 卸载
    eventCenter.off(onHideEventId, this.onHide)
  }

  onHide = () => {
    console.log('onHide')
  }

  render() {
    return <View id="only" />
  }
}
```

### onPullDownRefresh ()

监听用户下拉动作。

- 需要在全局配置的 window 选项中或页面配置中设置 `enablePullDownRefresh: true`。
- 可以通过 [Taro.startPullDownRefresh](./apis/ui/pull-down-refresh/startPullDownRefresh.md) 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
- 当处理完数据刷新后，[Taro.stopPullDownRefresh](./apis/ui/pull-down-refresh/stopPullDownRefresh.md) 可以停止当前页面的下拉刷新.

### onReachBottom ()

监听用户上拉触底事件。

- 可以在全局配置的 window 选项中或页面配置中设置触发距离 `onReachBottomDistance`。
- 在触发距离内滑动期间，本事件只会被触发一次

> 需要 `enablePullDownRefresh` 配置

### onPageScroll (Object)

监听用户滑动页面事件。

> 需要 `enablePullDownRefresh` 配置

#### 参数

##### Object

| 参数      | 类型   | 说明                                  |
| --------- | ------ | ------------------------------------- |
| scrollTop | Number | 页面在垂直方向已滚动的距离（单位 px） |

### onAddToFavorites (Object)

监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。

> Taro 3.0.3 版本开始支持。
> 只有微信小程序支持，本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持。

#### 参数

##### Object

| 参数       | 类型   | 说明                                                 |
| ---------- | ------ | ---------------------------------------------------- |
| webviewUrl | String | 页面中包含 web-view 组件时，返回当前 web-view 的 url |

此事件处理函数需要 return 一个 Object，用于自定义收藏内容：

| 字段     | 说明                              | 默认值             |
| -------- | --------------------------------- | ------------------ |
| title    | 自定义标题                        | 页面标题或账号名称 |
| imageUrl | 自定义图片，显示图片长宽比为 1：1 | 页面截图           |
| query    | 自定义 query 字段                 | 当前页面的 query   |

#### 示例代码

```js title="page.js"
onAddToFavorites (res) {
  // webview 页面返回 webviewUrl
  console.log('WebviewUrl: ', res?.webviewUrl)
  return {
    title: '自定义标题',
    imageUrl: 'https://demo.png',
    query: 'name=xxx&age=xxx',
  }
}
```

### onShareAppMessage (Object)

监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。

**注意：**

1. 当 `onShareAppMessage` 没有触发时，请在页面配置中设置 `enableShareAppMessage: true`
2. 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮

#### 参数

##### Object

| 参数       | 类型   | 说明                                                                                     |
| ---------- | ------ | ---------------------------------------------------------------------------------------- |
| from       | String | 转发事件来源。<br />button：页面内转发按钮；<br />menu：右上角转发菜单                   |
| target     | Object | 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined` |
| webViewUrl | String | 页面中包含 `WebView` 组件时，返回当前 `WebView` 的 url                                   |

此事件需要 return 一个 Object，用于自定义转发内容，返回内容如下：

自定义转发内容

| 字段     | 类型                                                                                                       | 说明                                      |
| -------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| title    | 转发标题                                                                                                   | 当前小程序名称                            |
| path     | 转发路径                                                                                                   | 当前页面 path ，必须是以 / 开头的完整路径 |
| imageUrl | 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4 | 使用默认截图                              |

#### 示例代码

```jsx title="page.js"
export default class Index extends Component {
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
    }
  }
}
```

```jsx title="page.config.js"
export default {
  // 当 `onShareAppMessage` 没有触发时，可以尝试配置此选项
  enableShareAppMessage: true,
}
```

### onShareTimeline ()

监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。

> Taro 3.0.3 版本开始支持
> 只有微信小程序支持，基础库 2.11.3 开始支持，本接口为 Beta 版本，暂只在 Android 平台支持

**注意：**

1. 当 `onShareTimeline` 没有触发时，请在页面配置中设置 `enableShareTimeline: true`
2. 只有定义了此事件处理函数，同时监听了 `onShareAppMessage`，右上角菜单才会显示“分享到朋友圈”按钮

#### 返回值

事件处理函数可以返回一个 Object，用于自定义分享内容，不支持自定义页面路径，返回内容如下：

| 字段     | 说明                                                                                | 默认值                 |
| -------- | ----------------------------------------------------------------------------------- | ---------------------- |
| title    | 自定义标题                                                                          | 当前小程序名称         |
| query    | 自定义页面路径中携带的参数                                                          | 当前页面路径携带的参数 |
| imageUrl | 自定义图片路径，可以是本地文件或者网络图片。支持 PNG 及 JPG，显示图片长宽比是 1:1。 | 默认使用小程序 Logo    |

#### 示例代码

```jsx title="page.js"
class Index extends Component {
  onShareAppMessage() {}
  onShareTimeline() {
    console.log('onShareTimeline')
    return {}
  }
}
```

```jsx title="page.config.js"
export default {
  // 当 `onShareAppMessage` 没有触发时，可以尝试配置此选项
  enableShareAppMessage: true,
  // 当 `onShareTimeline` 没有触发时，可以尝试配置此选项
  enableShareTimeline: true,
}
```

### onResize (Object)

小程序屏幕旋转时触发。详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81)。

### onTabItemTap (Object)

点击 tab 时触发。

#### 参数

##### Object

| 参数     | 类型   | 说明                             |
| -------- | ------ | -------------------------------- |
| index    | String | 被点击 tabItem 的序号，从 0 开始 |
| pagePath | String | 被点击 tabItem 的页面路径        |
| text     | String | 被点击 tabItem 的按钮文字        |

### onSaveExitState

:::info
Taro v3.5.0+ 开始支持
:::

每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用，可以进行[退出状态](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81)的保存。

> 只有微信小程序支持，基础库 2.7.4 开始支持。

### onTitleClick ()

> 只有支付宝小程序支持

点击标题触发

### onOptionMenuClick ()

> 只有支付宝小程序支持

点击导航栏额外图标触发

### onPopMenuClick ()

> 只有支付宝小程序支持

暂无说明

### onPullIntercept ()

> 只有支付宝小程序支持

下拉截断时触发

---

## docs/router-extend.mdx

---
title: 路由库
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

:::note
Taro v3.6 开始支持。
:::

本篇将介绍如何在 Taro 中使用前端路由库，包括 [react-router](https://reactrouter.com/en/main) 和 [vue-router](https://router.vuejs.org/zh/)。

## Taro 页面路由管理

前端路由库的基本原理是监听 `popstate` 或 `hashchange` 事件触发后，读取 `location` 对象对视图进行操控更新。 Taro 为了支持前端路由库的使用，在运行时中引入了 `histroy` `location` 对象的实现，且尽可能与 Web 端规范对齐，你可以在 `window` 对象上访问到 `history` 和 `location` 对象。

> 我们将 `history` 和 `location` 对象统称为页面路由状态。

小程序天然支持多页面(`pages`数组)，Taro 并非以整个应用为一个路由系统，而是顺应小程序规范以页面维度进行路由管理。每当切换页面时，会将当前页面的页面路由状态缓存。跳转至新页面后会重新创建页面路由状态，并挂载在 `window` 对象上。当返回上一级页面时，会重新将当前页面的页面路由状态挂载到 `window` 对象中。

> 你可以在 “示例 DEMO” 中观察页面切换过程中，`history` 与 `location` 对象的变化.

需要说明的是，`location` 对象仅描述当前页面的链接状态，页面的跳转仍需要调用 `Taro.navigateTo()` 方法。

```js title="页面跳转"
// ❌ 错误
window.location.assign('...')
window.location.href = '...' // 无法实现页面跳转，但可以重新赋值
// ✅ 正确
Taro.navigateTo({ url: '...' })
```

## 页面路由初始化

当通过指定 `url` 进行页面跳转，进入新页面后，页面路由状态会初始化，例如：

```jsx
// 传入参数 id=2&type=test#a=1&b=2
Taro.navigateTo({
  url: '/pages/page/path/name?id=2&type=test#a=1&b=2',
})
```

此时可以从 `location.href` 上读取到完整链接信息 `https://taro.com/pages/page/path/name?id=2&type=test#a=1&b=2`，此时 `history.state` 为：

```json
{
  "state": null,
  "title": "",
  "url": "https://taro.com/pages/page/path/name?id=2&type=test#a=1&b=2"
}
```

## 使用路由库

:::info
Taro 需要升级至 **v3.6**
:::

### 应用配置

在路由库中，诸如`<Link>` 组件内部会动态生成 `<a>` 标签，因此需要引入 [`@tarojs/plugin-html`](./use-h5) 插件以支持在 Taro 中使用 `html` 标签开发组件。

```json title="config/index.js"
{
  "plugins": ["@tarojs/plugin-html"]
}
```

当 Taro DOM 序列化数据的 nn 字段为 HTML 标签时，会映射为对应的小程序组件名称。由于无法提前预知动态标签，因此需要应用显式告知可能会使用到的动态标签。例如在应用中塞入一个无样式的标签名即可：

```html
<View>
  <a></a>
</View>
```

### 代码示例

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="/pages/index/index.js"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <View className="drawer-box">
          <View className="box-item">
            <Link to="/pages/router/index/view1?a=1&b=2">view1</Link>
          </View>
          <View className="box-item">
            <Link to="/pages/router/index/view2#a=3&b=4">view2</Link>
          </View>
          <View className="box-item">
            <Link to="/pages/router/index/2?a=1&b=2#a=3&b=4">view3</Link>
          </View>
        </View>

        <Routes>
          <Route path="/pages/browser-router/index" element={<Home />}></Route>
          <Route path="/pages/router/index/view1" element={<View1 />}></Route>
          <Route path="/pages/router/index/view2" element={<View2 />}></Route>
          <Route path="/pages/router/index/:id" element={<View3 />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```js title="app.js"
import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
// 自定义组件
import Home from './components/home.vue'
import Tab1 from './components/tab-1.vue'
import Tab2 from './components/tab-2.vue'
import Tab3 from './components/tab-3.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 },
  { path: '/tab3/:groupId/:id', component: Tab3 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const App = createApp({
  onShow(options) {},
})

App.use(router)

export default App
```

```html title="/pages/index/index.vue"
<template>
  <view>
    <view>
      <a></a>
      <view>
        <view class="tab-box">
          <router-link class="tab-item" to="/" replace>Home</router-link>
          <router-link class="tab-item" to="/tab1?name=advancedcat&from=china" replace>Tab 1</router-link>
          <router-link class="tab-item" to="/tab2">Tab 2</router-link>
          <router-link class="tab-item" to="/tab3/1234/8765">Tab 3</router-link>
          <router-link class="tab-item" :to="{ name: 'user', params: { id: '9876' }}">User</router-link>
        </view>
        <router-view></router-view>
      </view>
    </view>
  </view>
</template>

<script setup></script>
```

</TabItem>
</Tabs>

支付宝小程序的 `navigator` 组件不支持 `onTap` 事件，这导致 `<Link>` 组件或 `<a>` 标签无法捕获点击事件，从而无法拦截事件触发路由更新。
因此，如果你需要适配支付宝小程序，需要额外处理 `<Link>` 组件或 `<a>` 标签的动态转换，指定 `as` 属性，`@tarojs/plugin-html` 插件会将其转换为指定的标签名：

```jsx
<a as="view"></a>  // => 将其转换为 view 标签展示
<Link as="view" to="xxx" />
<NavLink as="view" to="xxx" />
```

## 示例 DEMO

在引入路由库前，可以从以下 demo 中看到更多路由特性用法。

- [React + react-router v6](https://github.com/AdvancedCat/taro-react-router)
- [Vue3 + vue-router v4](https://github.com/AdvancedCat/taro-vue-router)

## API

### window.location

> 在小程序环境中，跨域三要素锁定为 `https://taro.com`。

#### 属性

| 属性     | 类型           | 默认值     | 说明                           |
| -------- | -------------- | ---------- | ------------------------------ |
| protocol | `string`       | `https:`   | 协议头部                       |
| hostname | `string`       | `taro.com` | 域名主体                       |
| port     | `string`       | `""`       | 端口号                         |
| pathname | `string`       | `/`        | 路径部分                       |
| search   | `string`       | `""`       | 查询参数，非空则包含 `?` 字符  |
| hash     | `string`       | `""`       | hash 部分，非空则包含 `#` 字符 |
| toString | `() => string` |            | 返回完整 `href`                |

可以通过 `window.location.xxx = 'yyy'` 来重新赋值对应属性.特别的，`window.location.href = 'new url'` 会按照对应部分分别设置相应属性(除了跨域三要素不可修改)， 同时 `history` 历史栈增加一条记录。

#### 事件

##### hashchange

当 `hash` 部分发生变化时，同步触发 `hashchange` 事件：

```js
window.addEventListener('hashchange', () => {
  console.log('hash发生变化')
})
```

### window.history

#### 属性

| 属性         | 类型                                             | 说明                                                       |
| ------------ | ------------------------------------------------ | ---------------------------------------------------------- |
| state        | `{state: any; title: string; url: string}`       | 历史堆栈的顶部状态                                         |
| length       | `number`                                         | 历史堆栈长度                                               |
| go           | `(delta: number) => {}`                          | 切换至相对位置的历史状态，越界时取历史堆栈的边界值         |
| back         | `() => {}`                                       | 等价于 `go(-1)`                                            |
| forward      | `() => {}`                                       | 等价于 `go(1)`                                             |
| pushState    | `(state: any, title: string, url: string) => {}` | 按指定的名称和 URL（如果提供该参数）将数据 push 进历史堆栈 |
| replaceState | `(state: any, title: string, url: string) => {}` | 更新 state，但不修改历史堆栈                               |

#### 事件

##### popstate

当调用 `history.go()` 方法时，同步触发 `hashchange` 事件，`history.state` 会更新：

```js
window.addEventListener('popstate', () => {
  console.log('popstate触发')
})
```

## 注意事项

1. 在 Web 端可以通过赋值 location.href 实现页面加载，但在小程序中不适用，小程序端的页面跳转仍建议使用 `Taro.navigateTo` 等官方 api。在小程序侧，应该将 `location` 上的属性视为只读。
2. `location.origin` 将默认为 `https://taro.com`，`location.assign()` `location.replace()` 在小程序侧无效；
3. 需要为支付宝小程序做额外适配，见文档说明；

## 详细设计

详细设计请看 [RFC](https://github.com/NervJS/taro-rfcs/blob/feat/history/rfcs/0009-router-support.md)。

---

## docs/router.mdx

---
title: 概述
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

本篇将介绍如何在 Taro 中配置路由、实现路由跳转和传参等方法。

## 路由配置

Taro 遵循微信小程序的路由规范。只需要修改全局配置的 [pages](app-config#pages) 属性，配置为 Taro 应用中每个页面的路径即可。

> 使用 react-router、vue-router 等路由库，请参照[下一节](./router-extend)。

## 路由跳转

可以通过 Taro 提供的 API 来跳转到目的页面。路由 API 的详细用法请查看 API 文档的 [导航](./apis/route/navigateTo) 章节。

```jsx title="示例代码"
// 跳转到目的页面，打开新页面
Taro.navigateTo({
  url: '/pages/page/path/name',
})

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
  url: '/pages/page/path/name',
})
```

### 路由传参

可以通过在所有跳转的 `url` 后面添加查询字符串参数进行跳转传参，例如：

```jsx
// 传入参数 id=2&type=test
Taro.navigateTo({
  url: '/pages/page/path/name?id=2&type=test',
})
```

### 获取路由参数

跳转成功后，在目标页面的**生命周期**方法中，可以通过 `Taro.getCurrentInstance().router.params` 获取路由参数。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="示例代码"
import React, { Component } from 'react'
import { View } from '@tarojs/components'

class Index extends Component {
  // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
  // 而不是频繁地调用此 API
  $instance = getCurrentInstance()

  componentDidMount() {
    // 获取路由参数
    console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
  }

  render() {
    return <View className="index" />
  }
}

export default Index
```

</TabItem>

<TabItem value="Vue">

```html title="示例代码"
<template>
  <view className="index" />
</template>

<script>
  import Taro from '@tarojs/taro'

  export default {
    created() {
      // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
      // 而不是频繁地调用此 API
      this.$instance = Taro.getCurrentInstance()
    },
    mounted() {
      // 获取路由参数
      console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
    },
  }
</script>
```

</TabItem>
</Tabs>

## H5

H5 路由还支持设置路由模式、设置 basename、路由守卫等能力，详情请看 [Taro H5 文档](./h5#路由)。

---

## docs/vue-entry.mdx

---
title: 入口组件
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

每一个 Taro 应用都需要一个入口组件（Vue 组件）用来注册应用。入口文件默认是 `src` 目录下的 `app.js`。

在入口组件中我们可以设置全局状态或访问小程序入口实例的生命周期。

#### 注意：

1. 自 Taro v3.1 开始，Vue2 入口组件的写法有 **Breaking Changes**，详情请见 [3.1.0 发布信息](https://github.com/NervJS/taro/releases/tag/v3.1.0)。
2. 由于 Vue3 Global API 有变化（[0009-global-api-change](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md)），Vue3 的入口组件写法和 Vue2 不同。

## 代码示例

<Tabs
  defaultValue="vue"
  values={[
    {label: 'Vue2', value: 'vue'},
    {label: 'Vue3', value: 'vue3'}
  ]}>
<TabItem value="vue">

```js title="app.js"
import Vue from 'vue'
// 假设我们已经在 './store' 配置好了 vuex
import store from './store'

const App = {
  store,

  // 可以使用所有的 Vue 生命周期方法
  mounted() {},

  // 对应 onLaunch
  onLaunch() {},

  // 对应 onShow
  onShow(options) {},

  // 对应 onHide
  onHide() {},

  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
}

export default App
```

</TabItem>

<TabItem value="vue3">

```jsx title="app.js"
import { createApp } from 'vue'

const app = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  // 对应 onLaunch
  onLaunch () {},

  // 对应 onShow
  onShow (options) {},

  // 对应 onHide
  onHide () {},

  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export app
```

</TabItem>
</Tabs>

## 入口组件配置

请参考 [全局配置](./app-config)

## 生命周期方法

> 在 Vue2 和 Vue3 中，Taro 额外添加的生命周期方法的写法一致

入口组件除了支持 Vue 的生命周期方法外，还根据小程序的标准，额外支持以下生命周期：

### onLaunch (options)

> 在小程序环境中对应 app 的 `onLaunch`。

在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到程序初始化参数。

#### 参数

##### options

| 属性         | 类型   | 说明                                                                 |
| ------------ | ------ | -------------------------------------------------------------------- |
| path         | string | 启动小程序的路径                                                     |
| scene        | number | 启动小程序的场景值                                                   |
| query        | Object | 启动小程序的 query 参数                                              |
| shareTicket  | string | shareTicket，详见获取更多转发信息                                    |
| referrerInfo | Object | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {} |

##### options.referrerInfo

| 属性            | 类型   | 说明                                                                 |
| --------------- | ------ | -------------------------------------------------------------------- |
| appId           | string | 来源小程序，或者公众号（微信中）                                     |
| extraData       | Object | 来源小程序传过来的数据，微信和百度小程序在 scene=1037 或 1038 时支持 |
| sourceServiceId | string | 来源插件，当处于插件运行模式时可见                                   |

> options 参数的字段在不同小程序中可能存在差异，如：
>
> 场景值 scene，在微信小程序和百度小程序中存在区别，请分别参考 [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) 和 [百度小程序文档](https://smartprogram.baidu.com/docs/data/scene/)

### onShow (options)

程序启动，或切前台时触发。

和 `onLaunch` 生命周期一样，在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到程序初始化参数。

参数与 `onLaunch` 中获取的基本一致，但**百度小程序**中补充两个参数如下：

| 属性      | 类型   | 说明                                                                                                                                                 |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| entryType | string | 展现的来源标识，取值为 user/ schema /sys :<br />user：表示通过 home 前后<br/>切换或解锁屏幕等方式调起；<br/>schema：表示通过协议调起;<br />sys：其它 |
| appURL    | string | 展现时的调起协议，仅当 entryType 值为 schema 时存在                                                                                                  |

### onHide ()

程序切后台时触发。

### onError (error)

:::info
Taro v3.5.0+ 开始支持
:::

小程序发生脚本错误或 API 调用报错时触发。

### onPageNotFound (Object)

程序要打开的页面不存在时触发。

#### 参数

##### Object

| 属性        | 类型    | 说明                                                                           |
| ----------- | ------- | ------------------------------------------------------------------------------ |
| path        | string  | 不存在页面的路径                                                               |
| query       | Object  | 打开不存在页面的 query 参数                                                    |
| isEntryPage | boolean | 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） |

### onUnhandledRejection (Object)

:::info
Taro v3.5.10+ 开始支持
:::

小程序有未处理的 Promise 拒绝时触发。

#### 参数

##### Object

| 属性    | 类型    | 说明                            |
| ------- | ------- | ------------------------------- |
| reason  | string  | 拒绝原因，一般是一个 Error 对象 |
| promise | Promise | 被拒绝的 Promise 对象           |

> 注意：**支付宝小程序**需要在源码根目录的 `project.alipay.json` 文件中添加配置 `enableAppxNg: true` 才能在真机环境进行监听。

---

## docs/vue-overall.mdx

---
title: 概述
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Taro 3 支持将 Web 框架直接运行在各平台，开发者使用的是真实的 Vue/Vue3 和 React 等框架。

但是 Taro 在组件、API、路由等规范上，遵循微信小程序规范，所以在 Taro 中使用 Vue/Vue3 和开发者熟悉的 Web 端有一些差异，以下将详细列出。

:::info
[Breaking] 旧项目升级到 Taro v3.4+ 时，使用 Vue2 请安装依赖 `@tarojs/plugin-framework-vue2`、使用 Vue3 请安装依赖 `@tarojs/plugin-framework-vue3`、
:::

## 入口组件和页面组件

因为 Taro 遵循小程序的路由规范，所以引入了[入口组件](./vue-entry)和[页面组件](./vue-page)的概念，分别对应小程序规范的入口组件 `app` 和页面组件 `page`。

一个 Taro 应用由一个入口组件和至少一个页面组件所组成。

## 内置组件

:::note
自 Taro v3.3+，支持使用 H5 标签进行开发，详情请见 [使用 HTML 标签](./use-h5)
:::

Taro 中可以使用小程序规范的内置组件进行开发，如 `<view>`、`<text>`、`<button>` 等。

### Taro 规范

1. 组件名遵从**小程序规范**（全小写，kebab-case）。
2. 组件属性遵从**小程序规范**（全小写，kebab-case）。
3. `Boolean` 值的组件属性需要显式绑定为 `true`，不支持简写。
4. 事件规范请看下一节：[组件事件](./vue-overall#%E4%BA%8B%E4%BB%B6)。

### 示例代码

```html
<template>
  <swiper
    class="box"
    :autoplay="true"
    :interval="interval"
    indicator-color="#999"
    @tap="handleTap"
    @animationfinish="handleAnimationFinish"
  >
    <swiper-item>
      <view class="text">1</view>
    </swiper-item>
    <swiper-item>
      <view class="text">2</view>
    </swiper-item>
    <swiper-item>
      <view class="text">3</view>
    </swiper-item>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        interval: 1000,
      }
    },
    methods: {
      handleTap() {
        console.log('tap')
      },
      handleAnimationFinish() {
        console.log('finish')
      },
    },
  }
</script>
```

注意：如果某平台新增的组件或组件的属性还没被 Taro 支持，可以提交 [Issues](https://github.com/NervJS/taro/issues)，我们会尽快修复。

## 事件

事件和 Web 端一样。在事件回调函数中，第一个参数是事件对象，回调中调用 `stopPropagation` 可以阻止冒泡。

### Taro 规范

1. 使用 `@` 修饰符（或 `v-on:`，更多用法可以参考[Vue 文档](https://cn.vuejs.org/v2/guide/events.html)）替代小程序事件名中的 `bind`(替代支付宝小程序事件名中的 `on`)。
2. Vue 中点击事件使用 `@tap`。
3. 事件名称一般遵循组件属性规范（全部小写）。
4. 在 `vue@3.0.6` 或之后版本使用 JSX 时，事件名遵循 **onCamelcase** 规范，例如 `onGetphonenumber`。具体原因可参考 [#8796](https://github.com/NervJS/taro/issues/8796#issuecomment-802796286)。

### 示例代码

```html
<template>
  <!-- 注意，Vue 中点击事件需要绑定 @tap，-->
  <!-- 其余小程序事件名把 bind 换成 @ 即是 Taro 事件名（支付宝小程序除外，它的事件就是以 on 开头，需要把 on 换成 @）-->
  <scroll-view
    style="height: 300px"
    :scroll-y="true"
    @tap="handleClick"
    @scroll="handleScroll"
    @scrolltoupper="handleScrollToUpper"
  >
    <view style="height: 200px">1</view>
    <view style="height: 200px">2</view>
    <view style="height: 200px">3</view>
  </scroll-view>
</template>

<script>
  export default {
    methods: {
      handleClick(e) {
        console.log('handleClick')
        e.stopPropagation() // 阻止冒泡
      },
      handleScroll() {
        console.log('handleScroll')
      },
      handleScrollToUpper() {
        console.log('handleScrollToUpper')
      },
    },
  }
</script>
```

### Taro 3 在小程序端的事件机制

在 Taro 1 & 2 中，Taro 会根据开发者是否使用了 `e.stopPropagation()`，来决定在小程序模板中绑定的事件是以 `bind` 还是以 `catch` 形式。因此事件冒泡是由小程序控制的。

但是在 Taro 3，我们在小程序逻辑层实现了一套事件系统，包括事件触发和事件冒泡。在小程序模板中绑定的事件都是以 `bind` 的形式。

一般情况下，这套在逻辑层实现的小程序事件系统是可以正常工作的，事件回调能正确触发、冒泡、停止冒泡。

但是，小程序模板中绑定的 `catchtouchmove` 事件除了可以阻止回调函数冒泡触发外，还能阻止视图的**滚动穿透**，这点 Taro 的事件系统是做不到的。

### 阻止滚动穿透

上一点中，我们介绍了 Taro 3 的事件机制。因为事件都以 `bind` 的形式进行绑定，因此不能使用 `e.stopPropagation()` 阻止滚动穿透。

针对滚动穿透，目前总结了两种解决办法：

#### 一、样式

使用样式解决：[禁止被穿透的组件滚动](https://github.com/NervJS/taro/issues/5984#issuecomment-614502302)。

这也是最推荐的做法。

#### 二、catchMove

> Taro 3.0.21 版本开始支持

但是地图组件本身就是可以滚动的，即使固定了它的宽高。所以第一种办法处理不了冒泡到地图组件上的滚动事件。

这时候可以为 `view` 组件增加 **catch-move** 属性：

```jsx
// 这个 View 组件会绑定 catchtouchmove 事件而不是 bindtouchmove
<view :catch-move="true"></view>
```

### dataset

#### 一般情况

我们建议按 Vue、 React 的 DSL 特性进行思考，因为 `dataset` 是小程序的特性。

#### dataset

`dataset` 是特别的模版属性，主要作用是可以在事件回调的 `event` 对象中获取到 `dataset` 相关数据。

**这点 Taro 是支持的**，在事件回调对象中可以通过 `event.target.dataset` 或 `event.currentTarget.dataset` 获取到。

#### 模板属性

上一点所说的，Taro 对于小程序 `dataset` 的模拟是在小程序的**逻辑层**实现的。**并没有真正在模板设置这个属性**。

但在小程序中有一些 API（如：`createIntersectionObserver`）获取到页面的节点的时候，由于节点上实际没有对应的属性而获取不到。

这时可以考虑使用 [taro-plugin-inject](https://github.com/NervJS/taro-plugin-inject) 插件注入一些通用属性，如：

```js title="config/index.js"
const config = {
  plugins: [
    [
      '@tarojs/plugin-inject',
      {
        components: {
          View: {
            'data-index': "'dataIndex'",
          },
          ScrollView: {
            'data-observe': "'dataObserve'",
          },
        },
      },
    ],
  ],
}
```

## 生命周期触发机制

Taro 3 在小程序逻辑层上实现了一份遵循 Web 标准 BOM 和 DOM API。因此 Vue 使用的 `document.appendChild`、`document.removeChild` 等 API 其实是 Taro 模拟实现的，最终的效果是把 Vue 的虚拟 DOM 树渲染为 Taro 模拟的 Web 标准 DOM 树。

因此在 Taro3 Vue 的生命周期触发时机和我们平常在 Web 开发中理解的概念有一些偏差。

### Vue 的生命周期

Vue 组件的生命周期方法在 Taro 中都支持使用。

触发时机：

##### 1. beforeMount ()

[onLoad](vue-page#onload-options) 之后，页面组件渲染到 Taro 的虚拟 DOM 之前触发。

##### 2. mounted ()

页面组件渲染到 Taro 的虚拟 DOM 之后触发。

此时能访问到 Taro 的虚拟 DOM（使用 Vue ref、document.getElementById 等手段），并支持对其进行操作（设置 DOM 的 style 等）。

但此时不代表 Taro 的虚拟 DOM 数据已经完成从逻辑层 `setData` 到视图层。因此这时**无法通过 `createSelectorQuery` 等方法获取小程序渲染层 DOM 节点。** 只能在 [onReady](vue-page#onready-) 生命周期中获取。

### 小程序页面的方法

小程序页面的方法，在 Taro 的页面中同样可以使用：在 Vue 对象中书写同名方法。

**注意：**小程序页面方法在各端的支持程度不一，请查阅对应小程序的文档。

## Ref

[节点获取](./ref.mdx)

## v-html

在小程序端，使用 `v-html` 时有一些额外的配置选项和需要注意的地方，详情请参考[《渲染 HTML》](html)。

## 兼容 `<transition>`

`<transition>` 组件内部使用了 `getComputedStyle`，用于嗅探组件上的动画样式。但是在小程序中没有办法实现 `getComputedStyle`，可以通过以下方法进行 hack：

为元素的 `style` 设置 `transitionDuration` 或 `animationDuration` 指定过渡时间，即可兼容 `<transition>`。

```jsx
<transition>
  <view style="animationDuration: 0.5s" />
</transition>
```

## 其它限制

- 由于小程序访问元素位置为异步 API，因此小程序中无法使用内置的 `transition-group` 组件。
- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。[#6662](https://github.com/NervJS/taro/issues/6662)
- 所有组件的 `id` 必须在整个应用中保持唯一（即使他们在不同的页面），否则可能导致事件不触发的问题，[#7317](https://github.com/NervJS/taro/issues/7317)

---

## docs/vue-page.mdx

---
title: 页面组件
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

每一个 Taro 应用都至少包括一个页面组件，页面组件可以通过 Taro 路由进行跳转，也可以访问小程序页面的生命周期。

每一个页面组件必须是一个 `.vue` 文件。

## 代码示例

<Tabs
  defaultValue="vue"
  values={[
    {label: 'Vue2', value: 'vue'},
    {label: 'Vue3', value: 'vue3'}
  ]}>
<TabItem value="vue">

```jsx title="page.vue"
<template>
  <view class="index"></view>
</template>

<script>
export default {
  name: 'Index',

  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  // onLoad
  onLoad () {},

  // onReady
  onReady () {},

  // 对应 onShow
  onShow () {},

  // 对应 onHide
  onHide () {},

  // 对应 onPullDownRefresh
  onPullDownRefresh () {}
}
</script>

<style>
.index {}
</style>
```

</TabItem>

<TabItem value="vue3">

```jsx title="page.vue"
<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  // onLoad
  onLoad () {},

  // onReady
  onReady () {},

  // 对应 onShow
  onShow () {},

  // 对应 onHide
  onHide () {},

  // 对应 onPullDownRefresh
  onPullDownRefresh () {},

  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
```

</TabItem>
</Tabs>

## 页面组件配置

请参考 [页面配置](./page-config)

## 生命周期方法

> 在 Vue2 和 Vue3 中，Taro 额外添加的生命周期方法的写法一致

页面组件除了支持 Vue 的生命周期方法外，还根据小程序的标准，额外支持以下生命周期：

### onLoad (options)

> 在小程序环境中对应页面的 `onLoad`。

页面创建时执行。在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到页面路由参数。

### onUnload ()

:::info
Taro v3.4.7 开始支持。
:::

> 在小程序环境中对应页面的 `onUnload`。

一般情况下建议使用 Vue 的 `onUnmounted` 生命周期处理页面卸载时的逻辑。当某些特殊情况需要在页面的 `onUnload` 的同一个事件循环中实现逻辑时才使用它（如对小程序的生命周期执行顺序有强依赖关系时）。

### onReady ()

> 在小程序环境中对应页面的 `onReady`。

页面首次渲染完毕时执行。从此生命周期开始可以使用 `createCanvasContext` 或 `createSelectorQuery` 等 API 访问小程序渲染层的 DOM 节点。

#### 子组件的 onReady

只在页面组件才会触发 `onReady` 生命周期。子组件可以使用 Taro 内置的[消息机制](./apis/about/events)监听页面组件的 `onReady()` 生命周期：

```html title="页面中某个子组件"
<template>
  <view id="only" />
</template>

<script>
  import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'

  export default {
    mounted() {
      eventCenter.once(getCurrentInstance().router.onReady, () => {
        console.log('onReady')

        // onReady 触发后才能获取小程序渲染层的节点
        Taro.createSelectorQuery()
          .select('#only')
          .boundingClientRect()
          .exec((res) => console.log('res: ', res))
      })
    },
  }
</script>
```

但是当子组件是**按需加载**的时候，页面 `onReady` 早已触发。如果此按需加载的子组件需要获取小程序渲染层的 DOM 节点，因为错过了页面 `onReady`，只能尝试使用 `Taro.nextTick` 模拟：

```html title="按需加载的子组件"
<template>
  <view id="only" />
</template>

<script>
  import Taro from '@tarojs/taro'

  export default {
    mounted() {
      Taro.nextTick(() => {
        // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
        Taro.createSelectorQuery()
          .select('#only')
          .boundingClientRect()
          .exec((res) => console.log('res: ', res))
      })
    },
  }
</script>
```

### onShow ()

> 在小程序环境中对应页面的 `onShow`。

页面显示/切入前台时触发。

#### 子组件的 onShow

只在页面组件才会触发 `onShow` 生命周期。子组件可以使用 Taro 内置的[消息机制](./apis/about/events)监听页面组件的 `onShow()` 生命周期：

```jsx title="页面中某个子组件"
<script>
  import { eventCenter, getCurrentInstance } from '@tarojs/taro'

  export default {
    mounted () {
      eventCenter.on(getCurrentInstance().router.onShow, () => {
        console.log('onShow')
      })
    }
  }
</script>
```

### onHide ()

> 在小程序环境中对应页面的 `onHide`。

页面隐藏/切入后台时触发。

#### 子组件的 onHide

只在页面组件才会触发 `onHide` 生命周期。子组件可以使用 Taro 内置的[消息机制](./apis/about/events)监听页面组件的 `onHide()` 生命周期：

```jsx title="页面中某个子组件"
<script>
  import { eventCenter, getCurrentInstance } from '@tarojs/taro'

  export default {
    mounted () {
      eventCenter.on(getCurrentInstance().router.onHide, () => {
        console.log('onHide')
      })
    }
  }
</script>
```

### onPullDownRefresh ()

监听用户下拉动作。

- 需要在全局配置的 window 选项中或页面配置中设置 `enablePullDownRefresh: true`。
- 可以通过 [Taro.startPullDownRefresh](./apis/ui/pull-down-refresh/startPullDownRefresh.md) 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
- 当处理完数据刷新后，[Taro.stopPullDownRefresh](./apis/ui/pull-down-refresh/stopPullDownRefresh.md) 可以停止当前页面的下拉刷新。

### onReachBottom ()

监听用户上拉触底事件。

- 可以在全局配置的 window 选项中或页面配置中设置触发距离 `onReachBottomDistance`。
- 在触发距离内滑动期间，本事件只会被触发一次

> 需要 `enablePullDownRefresh` 配置

### onPageScroll (Object)

监听用户滑动页面事件。

> 需要 `enablePullDownRefresh` 配置

#### 参数

##### Object

| 参数      | 类型   | 说明                                  |
| --------- | ------ | ------------------------------------- |
| scrollTop | Number | 页面在垂直方向已滚动的距离（单位 px） |

### onAddToFavorites (Object)

监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。

> Taro 3.0.3 版本开始支持。
> 只有微信小程序支持，本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持。

#### 参数

##### Object

| 参数       | 类型   | 说明                                                 |
| ---------- | ------ | ---------------------------------------------------- |
| webviewUrl | String | 页面中包含 web-view 组件时，返回当前 web-view 的 url |

此事件处理函数需要 return 一个 Object，用于自定义收藏内容：

| 字段     | 说明                              | 默认值             |
| -------- | --------------------------------- | ------------------ |
| title    | 自定义标题                        | 页面标题或账号名称 |
| imageUrl | 自定义图片，显示图片长宽比为 1：1 | 页面截图           |
| query    | 自定义 query 字段                 | 当前页面的 query   |

#### 示例代码

```jsx title="page.vue"
<script>
  export default {
    onAddToFavorites (res) {
      // webview 页面返回 webviewUrl
      console.log('WebviewUrl: ', res?.webviewUrl)
      return {
        title: '自定义标题',
        imageUrl: 'https://demo.png',
        query: 'name=xxx&age=xxx',
      }
    }
  }
</script>
```

### onShareAppMessage (Object)

监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。

**注意：**只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮。对于某些特殊写法，如果定义了此事件处理函数后“转发”按钮还是不可点击，请在该页面配置中设置 `enableShareAppMessage: true`。

#### 参数

##### Object

| 参数       | 类型   | 说明                                                                                     |
| ---------- | ------ | ---------------------------------------------------------------------------------------- |
| from       | String | 转发事件来源。<br />button：页面内转发按钮；<br />menu：右上角转发菜单                   |
| target     | Object | 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined` |
| webViewUrl | String | 页面中包含 `WebView` 组件时，返回当前 `WebView` 的 url                                   |

此事件需要 return 一个 Object，用于自定义转发内容，返回内容如下：

自定义转发内容

| 字段     | 类型                                                                                                       | 说明                                      |
| -------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| title    | 转发标题                                                                                                   | 当前小程序名称                            |
| path     | 转发路径                                                                                                   | 当前页面 path ，必须是以 / 开头的完整路径 |
| imageUrl | 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4 | 使用默认截图                              |

#### 示例代码

```jsx title="page.vue"
<script>
  export default {
    onShareAppMessage (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123'
      }
    }
  }
</script>
```

### onShareTimeline ()

监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。

> Taro 3.0.3 版本开始支持
> 只有微信小程序支持，基础库 2.11.3 开始支持，本接口为 Beta 版本，暂只在 Android 平台支持

**注意：**只有定义了此事件处理函数，同时监听了 `onShareAppMessage`，右上角菜单才会显示“分享到朋友圈”按钮。对于某些特殊写法，如果定义了此事件处理函数后“分享到朋友圈”按钮还是不可点击，请在该页面配置中设置 `enableShareTimeline: true`。

#### 返回值

事件处理函数可以返回一个 Object，用于自定义分享内容，不支持自定义页面路径，返回内容如下：

| 字段     | 说明                                                                                | 默认值                 |
| -------- | ----------------------------------------------------------------------------------- | ---------------------- |
| title    | 自定义标题                                                                          | 当前小程序名称         |
| query    | 自定义页面路径中携带的参数                                                          | 当前页面路径携带的参数 |
| imageUrl | 自定义图片路径，可以是本地文件或者网络图片。支持 PNG 及 JPG，显示图片长宽比是 1:1。 | 默认使用小程序 Logo    |

#### 示例代码

```jsx title="page.vue"
<script>
  export default {
    onShareAppMessage () {},
    onShareTimeline () {
      console.log('onShareTimeline')
      return {}
    }
  }
</script>
```

### onResize (Object)

小程序屏幕旋转时触发。详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81)。

### onTabItemTap (Object)

点击 tab 时触发。

#### 参数

##### Object

| 参数     | 类型   | 说明                             |
| -------- | ------ | -------------------------------- |
| index    | String | 被点击 tabItem 的序号，从 0 开始 |
| pagePath | String | 被点击 tabItem 的页面路径        |
| text     | String | 被点击 tabItem 的按钮文字        |

### onSaveExitState

:::info
Taro v3.5.0+ 开始支持
:::

每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用，可以进行[退出状态](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81)的保存。

> 只有微信小程序支持，基础库 2.7.4 开始支持。

### onTitleClick ()

> 只有支付宝小程序支持

点击标题触发

### onOptionMenuClick ()

> 只有支付宝小程序支持

点击导航栏额外图标触发

### onPopMenuClick ()

> 只有支付宝小程序支持

暂无说明

### onPullIntercept ()

> 只有支付宝小程序支持

下拉截断时触发

---

## docs/vue3.md

---
title: Vue3
---

Taro 可以使用 Vue 3 进行开发，开发者可以使用 `taro init` 命令创建 Vue3 的模版，包括 **default**、 **vuex** 以及 [NutUI](https://nutui.jd.com/) 。我们推荐使用 NutUI4.0 模版进行开发。

具体用法可以参考 Taro Vue 系列文档。

开发者可以自行选择使用 options 式配置或 [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) 组织逻辑，浏览 [Vue 3 文档](https://v3.vuejs.org/) 以了解更多的 Vue3 改动。

## JSX

我们可以直接使用 JSX 编写 Vue3 组件，相关注意事项：

- 小程序的 `bindtap` 事件在 JSX 中需要绑定为 `onClick`。
- 事件名命名规范为 **onCamelcase**，如小程序的事件名为 `bindtouchstart`，JSX 中需要绑定为 `onTouchstart`。
- Taro `v3.4.5+` 开始支持在 H5 中使用 JSX。

例子：

```jsx
import { reactive } from 'vue'
import { View, Text, Button } from '@tarojs/components'

export default {
  name: 'Index',
  components: {
    View,
    Text,
    Button,
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI 开发小程序',
      msg2: '你成功了～',
    })

    const handleClick = (msg) => {
      state.msg = msg
    }

    return () => {
      return (
        <View>
          <View>
            <Text>{state.msg}</Text>
          </View>
          <Button onTouchstart={() => handleClick(state.msg2)}>Confirm</Button>
        </View>
      )
    }
  },
}
```

使用 `ts` 用户可以在 `tsconfig.json` 中引入组件的类型提示：

```json
{
  "compilerOptions": {
    "types": ["@tarojs/components/vue3"]
  }
}
```

## teleport

由于不能在页面组件的 DOM 树之外插入元素，因此不支持应用级别的 `<teleport>`。但你仍可以在当前页面内使用 `<teleport>`。

示例项目：[taro-vue-teleport](https://github.com/AdvancedCat/taro-vue-teleport)


## vueLoaderOption

:::info
Taro v3.4.8 开始支持
:::

传递给 VueLoader 的编译配置，编译配置细节请参阅 [vue-loader 文档](https://vue-loader.vuejs.org/options.html)。

Taro 中可以通过修改 `@tarojs/plugin-framework-vue3` 的配置项去设置 vueLoader 的配置项：

```js title="config/index.js"
const config = {
  plugins: [
    [
      '@tarojs/plugin-framework-vue3',
      {
        vueLoaderOption: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('ec-canvas'),
            whitespace: 'preserve',
            // ...
          },
          reactivityTransform: true, // 开启vue3响应性语法糖
        },
      },
    ],
  ],
  // ...
}
```

## 其它限制

- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。[#6662](https://github.com/NervJS/taro/issues/6662)
- Vue 3 内部实现使用了 Proxy ，在 iOS 9 及以下操作系统无法运行。但 Vue 官方团队在正式版发布后会推出兼容版本。
- 小程序端非类似 HTML 表单标签规范的表单组件，如 Picker，暂不兼容 v-model。Vue3 的 v-model 绑定属性改为了 modelValue，事件绑定改为了 update:modelValue。对于 HTML 表单标签会自动对接表单的值与事件，例如 input 会自动对应 modelValue 与 value、update:modelValue 与 @input。但对于 Picker 这种小程序特有表单则无法对应，建议这种情况不使用 v-model。
- VirtualList 组件需升级至 v3.6+ 版本
- 在 H5 端使用 ref 获取基础组件的 DOM 节点，现在只能得到适配层的 Vue 组件实例，而不是对应的 webComponent 根节点。在 Vue2 里可以通过修改父元素的 refs 属性实现，但 Vue3 中组件间初始化顺序有变化，因此暂时不能支持。（自 Taro v3.4.5 起，不再存在此限制，[#11537](https://github.com/NervJS/taro/pull/11537)）

## 相关阅读

Vue3 新特性可参阅 [Vue3 文档](https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features)。

Taro 是如何兼容 Vue3 的，可参阅 [Taro RFC](https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0001-vue-3-support.md)。

[《使用 Vue3 开发小程序》](https://taro-club.jd.com/topic/2267/%E4%BD%BF%E7%94%A8-vue3-%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F) by lillian。

[ NutUI 开发示例 ](https://github.com/jdf2e/nutui-demo/tree/master/taro) by jdf2e。

---

