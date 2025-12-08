## docs/debug-config.md

---
title: 单步调测配置
---

> 通过本身 `VSCode` 提供的跨平台代码单步调测能力，能够极大提升基于 `Taro` 开发框架的应用开发速度，因其他平台已有比较成熟的工具可以使用，着重降低 Windows 平台配置复杂度。

## 一、开发环境搭建

首先准备 `Taro` 在 Windows 下的基础开发环境，详情如下(已有开发环境可略过）：

### 1. 安装 Node.js

建议安装 `16.20.0` 及以上版本，官方下载地址：[Node.js](https://nodejs.org/dist/v16.20.0/node-v16.20.0-x64.msi 'node.js')

### 2. 安装 VSCode

安装完最新 `VSCode` 后，建议安装如下插件:

- `ESlint` — 代码规范
- `TSlint` — 语法检查

### 3. Taro 源码下载

下载地址：[Taro](https://github.com/NervJS/taro.git 'Taro')，默认为 `next` 分支。

### 4. 源码依赖安装

1.使用 `VSCode` 打开 `Taro` 源码目录，在根目录下执行 `pnpm i` ，安装项目所需依赖库（首次安装所花时间较长，请耐心等待）

2.执行 `pnpm build` 编译所有模块

## 二、单步调试

### 1. 配置 VSCode 调试参数

:::note
launch.json 的详细配置请见 [VSCode 文档](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)
:::

在 VSCode 中打开 Taro 源码根目录的 **.vscode** 文件夹，编辑 **launch.json**。

修改步骤：

- 修改 `cwd` 选项为需要调试的目标工作目录
- 修改 `args` 为需要调试的命令参数

```json title="launch.json" {10-16}
{
  // ...
  "configurations": [
    //...
    {
      "type": "node",
      "request": "launch",
      "name": "CLI debug",
      "program": "${workspaceFolder}/packages/taro-cli/bin/taro",
      // "cwd": "${project absolute path}",
      // "args": [
      //   "build",
      //   "--type",
      //   "weapp",
      //   "--watch"
      // ],
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

#### 例子

##### 1) 调试 taro-build

假设需要调试 test 项目的 `taro build --weapp --watch` 命令。

可以这样配置 launch.json：

```json title="launch.json"
{
  // ...
  "configurations": [
    //...
    {
      // ...
      "cwd": "/Users/User/Desktop/test",
      "args": ["build", "--type", "weapp", "--watch"]
    }
  ]
}
```

##### 2) 调试 taro-init

假设需要调试 `taro init projectName` 命令。

可以这样配置 launch.json：

```json title="launch.json"
{
  // ...
  "configurations": [
    //...
    {
      // ...
      "cwd": "/Users/User/Desktop",
      "args": ["init", "projectName"]
    }
  ]
}
```

### 2. 编译子包

调试某一个子包时，如果希望能调试修改后的代码，请先进入对应子包的根目录开启 watch 模式编译。

例如调试 `@tarojs/mini-runner`，先进入 `packages/mini-runner/`，然后在此目录下对运行 `npm run dev`（各子包编译命令可能有所不同，详情请见各子包的 **package.json**）。这样我们就能对每次修改后的代码进行调试。

### 3.链接未发布的库

如果当前开发的子包依赖于其它子包，可以把其它子包 link 过来使用。

如果需要为当前子包增加其它子包作为依赖，可以在 Taro 源码根目录执行 `pnpm --filter=[target] add [package] [--save-dev]`，之后 pnpm 会自动创建好软链。

例如为 `@tarojs/cli` 增加 `@tarojs/webpack-runner` 作为 devDependencies：

`pnpm --filter=@tarojs/cli add "@tarojs/webpack-runner@workspace:*" --save-dev`

### 4.启动调试

按下图操作即可开始单步调试，详细调试操作可参考 VSCode 文档。

![debug](https://storage.jd.com/cjj-pub-images/WX20200602-221337.png)

:::note
目前 Taro 项目的子包一般编译都会产生 `source-map`，所以一般都能够直接在源码位置使用断点。如果某些包编译时没有开启 `source-map`，可手动开启然后提交 `Pull Requests`。
:::

---

## docs/debug.md

---
title: Debug 指南
---

和所有框架一样，Taro 也可能存在 bug。当你认为你的代码没有问题，问题出在 Taro 时，可以按照本章内容进行调试。

当你在 Taro 进行 debug 时，请先确认一下流程均已完成：

1. ESLint 已经开启并且没有报错；
2. 大致过了一遍包括[最佳实践](./best-practice.md)在内的文档，文档里没有对应问题的描述；
3. 搜索过相关的 issue，issue 没有提到相关解决方案；
4. 按项目使用的 Taro 版本往上查看 [changelog](https://github.com/NervJS/taro/blob/master/CHANGELOG.md)，changelog 中没有意见修复相关问题的提交；

很多时候只要你把以上四个流程都走一遍，遇到的问题就会迎刃而解。而作为一个多端框架，Taro 有非常多的模块，当出现问题时 Taro 也需要分模块进行调试，接下来我们会举一些已经解决了的 bug 样例，阐述我们调试 bug 的思路：

## 安装

### 使用 yarn 安装完 CLI 报错

由于 [commander.js](https://github.com/tj/commander.js) 的[缘故](https://github.com/tj/commander.js/issues/786)，在 Mac 下使用 yarn 安装 CLI，偶尔会出现执行命令报错的情况

```bash
taro-init(1) does not exist, try --help
```

这时候，你可以选择使用 npm 或者 cnpm 重新安装 CLI，或者将 CLI [添加到环境变量中来解决](https://github.com/NervJS/taro/issues/2034)。

### 项目依赖一直安装不下来

由于 Taro 的 `@tarojs/webpack-runner` 包默认依赖了 `node-sass`，倒是有些时候依赖一直安装不了，在此，建议直接使用淘宝的 [cnpm](https://npm.taobao.org/) 进行安装依赖，或者尝试一下[这个包](https://github.com/gucong3000/mirror-config-china)

## 小程序

### 没有任何报错，但显示的结果不如预期

#### 被 diff 逻辑过滤

此问题发生在页面或组件**更新**时。

在调用小程序的 setData 方法前，Taro 会把 state 与 data 做一次 [diff](/docs/2.x/optimized-practice#小程序数据-diff)。

如果 state 与 data 的某个属性值没有变化，很有可能就不会重新 setData 该属性，导致页面或组件没有正确更新。

这种问题多出现在小程序的表单组件中，例如以下两个 issue：[#1981](https://github.com/NervJS/taro/issues/1981)、[#2257](https://github.com/NervJS/taro/issues/2257)。因为小程序一些表单组件为非受控组件，表单更新时，对应 value 值的 data 并不会更新，导致 data 值还是初始值。如果再 setState 此属性为初始值，由于 diff 逻辑判断属性值没有变化，不会 setData 此属性，导致视图没有更新。正确做法是在表单组件的 update 事件中 setData value 为当前值，保证 data 与表单显示值保持一致。

##### debug diff

开发者可以在开发者工具中找到 taro 运行时库，在 diff 方法前后打断点或 log，观察 **state**、**小程序 data** 和 **diff 后将要被 setData 的数据**，这种排查有助定位很多**视图更新**问题。

![qq20190305-151951](https://user-images.githubusercontent.com/11807297/53787956-514bb280-3f5b-11e9-9faf-f73ccd005222.png)

##### 微信小程序，增加数组元素无法正确更新数组 length

增加数组元素时，经 diff 后会按路径更新。但由于微信小程序自身 bug，按路径更新数组时，数组 length 不会正确更新。详见 [#882](https://github.com/NervJS/taro/issues/882)

此问题只出现于微信小程序，[微信官方说法是暂不修复](https://developers.weixin.qq.com/community/develop/doc/000c8a7eeb45e8b018b72f01356800)。

推荐做法是新开一个 state 值来同步 length 变化。

#### 编译模板出错

这时候很可能是编译模板出现了错误。例如中 [#2285](https://github.com/NervJS/taro/issues/2258) 中，题主写了两个嵌套循环，在第二个循环中无法正确地访问到第一个循环声明的 `index` 变量：

```jsx
// 假设源码在 src/pages/index/index.js 中
rooms.map((room, index) => (
  <View key={room.id}>
    <View>房间</View>
    <View className="men">
      {room.checkInMen.map(man => (
        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>
          {man.name}
        </View>
      ))}
    </View>
  </View>
);
```

而编译出来的 `wxml` 将会是：

```html
<!-- 编译后代码代码至少会生成三个文件，分别是: -->
<!-- dist/pages/index/index.js，dist/pages/index/index.wxml，dist/pages/index/index.json -->
<view wx:for="{{loopArray0}}" wx:for-item="room" wx:for-index="index">
  <view>房间</view>
    <view class="men">
      <view  data-e-tap-a-b="{{index}}" bindtap="handleRemoveMan" wx:for="{{room.$anonymousCallee__0}}" wx:for-item="man" data-e-tap-so="this" data-e-tap-a-a="{{man.$original.id}}">{{man.$original.name}}
      </view>
    </view>
  </view>
</view>
```

观察编译前后文件，我们可以发现：由于第二个循环没有指定 `index` 变量名，Taro 编译的循环也没有指定 `index` 变量名。但问题在于微信小程序当不指定 `index` 时，会隐式地注入一个名为 `index` 的变量名作为 `index`。因此这段代码在第二个循环中访问 `index`，实际上是当前循环的 `index`，而不是上级循环的 `index`。

当我们了解到问题所在之后，解决问题也很容易，只要在第二个循环显式地暴露循环的第二个变量即可，源代码可以修改为：

```jsx
rooms.map((room, index) => (
  <View key={room.id}>
    <View>房间</View>
    <View className="men">
      {room.checkInMen.map((man, _) => (
        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>
          {man.name}
        </View>
      ))}
    </View>
  </View>
);
```

### 运行时在小程序开发者工具报错

有时候我们会在运行时遇到这样错误：

![debug.png](https://i.loli.net/2019/02/27/5c765b5bc1915.png)

调试这样的问题也很简单，只需要点击调用栈从调用栈最上层的链接，点进去我们可以发现是这样的代码：

![debug2.png](https://i.loli.net/2019/02/28/5c77517c622e3.png)

这时我们可以发现这个错误的原因在于变量 `url` 在调用 `Object.assign()` 函数时找不到变量，我们可以再看一下源码：

```jsx
// 如果运行时报错文件路径是：dist/pages/test/test.js
// 那么就可以推算出源码在：src/pages/test/test.js
// 编译后的 js 文件已经经过 Babel 编译过，但函数基本上还是能一一对应的
// 除了 `render()` 函数会对应到 `_createData()` 函数，形如 `renderTest` 函数会对应到 `createTestData` 函数
render () {
  let dom = null
  if (this.props.visable) {
      const url = 'https://...'
      dom = <Image src={url} />
  }

  return <Container>
    {dom}
  </Container>
}
```

通过观察编译前后代码，我们可以发现源码没有任何问题，但 Taro 在此问题出现的版本没有处理好 if 表达式作用域内的变量，调用 `Object.assign()` 函数时 `url` 变量并不存在于 `render` 函数的作用域中。为了解决这个问题，我们可以修改源码，手动把 `url` 变量也放在 `render` 函数作用域中：

```jsx
render () {
  let dom = null
  let url = ''
  if (this.props.visable) {
      url = 'https://...'
      dom = <Image src={url} />
  }

  return <Container>
    {dom}
  </Container>
}
```

大部分运行时错误都可以通过小程序内置的 Chrome DevTools 找到报错的缘由，如果当前调用栈没有找到问题所在，可以往上逐层地去调试各个调用栈。Chrome DevTools 相关文档请查看：[Chrome 开发者工具](https://developers.google.com/web/tools/chrome-devtools/)

### 生命周期/路由/setState 出错

在 [#1814](https://github.com/NervJS/taro/issues/1814) 中提到了 `this.$router.path` (当前页面路由的路径) 有时无法访问。经过调研发现原因在于 Taro 把获取路径的函数放在了小程序的 `onLoad` 函数上，而不是每个组件都能调用到这个函数。而解决这个问题的方法也很简单，如果当前页面是组件可以直接通过 `this.$scope.route` 访问，更普适的方法则是通过 `getCurrentPages` 函数访问到当前页面的示例，然后访问实例的 `route` 或 `__route__` 访问到当前页面路由的路径。

通过这个例子，我们不难发现 Taro 的生命周期/路由 和 `setState` 在小程序端其实是包装成 React API 的一层语法糖，我们把这层包装称之为 Taro 运行时框架。几乎所有 Taro 提供的 API 和语法糖最终都是通过小程序本身提供的 API 实现的，也就是说当 Taro 运行时框架出现问题时，你基本都能使用小程序本身提供的 API 达到同等的需求，其中就包括但不限于：

1. 使用 `this.$scope.triggerEvent` 调用通过 props 传递的函数;
2. 通过 `this.$scope.selectComponent` 和 `wx.createSelectorQuery` 实现 `ref`;
3. 通过 `getCurrentPages` 等相关方法访问路由；
4. 修改编译后文件 `createComponent` 函数创建的对象

虽然使用小程序原生方法也能做很多同样的事，但当 Taro 运行时框架出现问题时，我们还是强烈建议开发者向 Taro 官方 [提交 issue](https://github.com/NervJS/taro/issues/new/choose)，有能力的开发者朋友也可以 [提交 PR](https://github.com/NervJS/taro/pulls)。一方面使用 Taro API 实现可以帮助你抹平多端差异，另一方面寻找甚至是修复 bug 也有助于加强你对 Taro 和小程序底层的理解。

### 微信小程序表单组件问题

微信小程序表单组件不是受控组件，当用户操作表单时视图会**立即改变**，但表单的 value 值还是没有变化。

如果在表单 `onChange`、`onInput` 此类值改变回调中 setState value 为用户操作改变表单之前的值时，Taro 的 diff 逻辑会判断 setState 的 value 值和当前 data.value 一致，则**放弃 setData**，导致视图没有正确更新。

解决办法：

Input 组件可以通过在回调中 return 需要改变的值来更新视图。详见 [#2642](https://github.com/NervJS/taro/issues/2642)

小程序 Input 组件文档截图：

![inputdoc](https://user-images.githubusercontent.com/11807297/55405139-fcb44b00-558b-11e9-845f-afbc73863b48.png)

其它组件需要立即 `setState({ value: e.detail.value })` 以立即更新同步 data.value 值，然后再 setState 真正需要表单改变的值。详见 [#1981](https://github.com/NervJS/taro/issues/1981)、[#2257](https://github.com/NervJS/taro/issues/2257)

### API 问题

#### API 调用结果不符合预期

Taro 小程序端的 API 只是对小程序原生 API 简单地进行了 promise 化，并没有做什么额外操作。因此开发者在遇到这种情况时可以试试直接使用小程序 API，如微信小程序中直接使用 `wx.xxx`。如果有同样的报错，证明是小程序方面的问题。否则则可能是 Taro 的问题，可以给我们提相关 issue。

#### API 调用报错

假设开发者在调用某个 API `Taro.xxx`，出现类似以下报错：

![image](https://user-images.githubusercontent.com/11807297/59170450-45324b00-8b71-11e9-8e25-1169b425040c.png)

证明 Taro 还没兼容此 API，比如一些小程序平台最新更新的 API。这时可以给我们提 issue 要求添加，或者修改此文件 [native-apis.js](https://github.com/NervJS/taro/blob/master/packages/taro/src/native-apis.js) 后，给我们提 PR。

## H5

### 运行时报 DOM 相关错误

在 [#1804](https://github.com/NervJS/taro/issues/1804) 中提到，只要使用了 `Block` 组件并且有一个变量控制它的显式时，就必定会报错：

```jsx
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    num: 1,
  }

  componentDidMount() {
    console.log('did')
    setTimeout(() => {
      this.setState({
        num: 0,
      })
    }, 2000)
  }

  render() {
    const { num } = this.state
    return (
      <View className="container">
        {num === 0 && <View>已卖完</View>}
        {num > 0 && (
          <Block>
            <View>正在销售</View>
            <View>立即购买</View>
          </Block>
        )}
        {/* {num > 0 && <View>正在销售</View>} */}
      </View>
    )
  }
}
```

这个时候我们可以把问题定位到 `Block` 组件中，我们可以查看 `@tarojs/components` 的 `Block` 组件源码：

```jsx
const Block = (props) => props.children
export default Block
```

也就是说当变量 `num > 0` 时，`Block` 组件的 `children` 会显示，而当 `Block` 组件的 `children` 是一个数组时，`View.container` 的 `children` 就变成 `[一个 View 组件, [一个数组]]`，渲染这样的数据结构需要 `React.Fragment` 的包裹才能渲染。而 Taro 目前还没有支持 `React.Fragment` 语法，所以这样的写法就报错了。解决这个问题也很简单，只需要修改 `Block` 组件，用一个元素包裹住 `children` 即可:

```jsx
const Block = (props) => <div>{props.children}</div>
```

当你遇到了相关问题时，我们准备了一个快速起步的沙盒工具，你可以直接在这个工具里编辑、调试、复现问题：

[![Edit Taro sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/50nzv622z4?fontsize=14)

## 组件

### jsEnginScriptError

`Component is not found in path "xxx/xxx/xxx"` 解决办法：

1、检查有没有编译报错

2、检查编译后的文件是否正确

3、步骤 1 和 步骤 2 如果检查没有问题，重启开发者工具，否则跳到步骤 4

4、提供具体编译报错信息与编译后文件信息的截图

## 其它资源

本文列举了一些 Taro 的已解决 bug 例子，阐述了在 Taro 中 debug 的思路，但在实际操作中如果你能更深入地了解 Taro 的实现原理，那无论是对使用 Taro 或是 debug 都会有很大的帮助。以下资源从各个方面都介绍了 Taro 的实现原理：

- 博文：[Taro 诞生记](https://aotu.io/notes/2018/06/25/the-birth-of-taro/)
- 公开演讲: [使用 Taro 快速开发多端项目](https://share.weiyun.com/5nUKYfy)
- 公开演讲： [基于 Taro 的多端项⽬目实践](https://share.weiyun.com/5lZXV1G)
- 掘金小册：[Taro 多端开发实现原理与实战](https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d) (已下架，仅购买用户可阅)

---

## docs/mini-troubleshooting.md

---
title: 常见问题
---

各小程序常见问题汇总。

## 微信小程序

### 热重载

打开微信小程序开发者工具的“热重载”功能，可以在修改**页面 JS 文件**、**样式文件**后快速在开发者工具显示更新的内容，极大地提升了开发体验。

在 Taro 中，样式文件的热重载是直接支持的，而页面 JS 文件的热重载在 `Taro v3.3.17` 版本后支持，且需要额外配置：

- `Taro v3.3.17+`：手动为需要热重载的页面增加兼容代码，请参考：[#10722](https://github.com/NervJS/taro/issues/10722#issuecomment-992247021)
- `Taro v3.4.0+`：打开编译配置 [mini.hot](./config-detail#minihot) 即可。

> **注意：**目前微信小程序的 JS 文件热重载只支持页面文件，而不包括其依赖。

---

## docs/react-error-handling.mdx

---
title: 错误处理
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

React 和小程序都提供了各自的错误处理方法，本节将介绍如何在 Taro 中结合使用。

## 错误边界

React 16 引入了[错误边界](https://reactjs.org/docs/error-boundaries.html)的概念，相比于 `try catch` 和小程序的全局错误监听回调 `App onError`，它的优点在于能捕获 React 渲染过程中的错误和显示兜底界面。

:::note
错误边界不能捕获以下错误：

- 事件回调
- 异步代码，如 `setTimeout` 回调
- 错误边界组件自身的渲染错误

前两点建议直接使用 `try catch` 或 `App onError` 进行处理，第三点将在后文中介绍。
:::

### 页面组件自身作为错误边界

正如 React 文档所指出的，错误边界的颗粒度可以由开发者自行选择。如果要捕获**页面内子组件**的错误，可以把页面组件自身作为错误边界。

**示例代码：**

```jsx title="pages/index/index.jsx"
class BuggyCounter extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }))
  }

  render() {
    if (this.state.counter === 2) {
      // 模拟 JS 报错
      throw new Error('I crashed!')
    }
    return <Button onClick={this.handleClick}>{this.state.counter}</Button>
  }
}

// 页面组件自身作为错误边界
export default class Index extends Component {
  state = {
    hasError: null,
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    return this.state.hasError ? (
      // 异常时显示兜底 UI
      <View>Something went wrong.</View>
    ) : (
      // 正常显示
      <BuggyCounter></BuggyCounter>
    )
  }
}
```

### 捕获页面组件自身的错误

> 相关讨论：[#8191](https://github.com/NervJS/taro/pull/8191)

还记得错误边界的第三个限制**“不能捕获错误边界组件自身的渲染错误”**吗？如果我们把页面组件自身作为错误边界，这时是不能捕获其自身的错误的，因此我们需要再创建一个错误边界组件以包裹我们的页面组件。

可以使用高阶组件为页面组件嵌套错误边界，如果页面组件为 Class Component，还需要对 Taro 的生命周期进行额外处理。因此建议这种情况下，页面组件使用 Functional Component 的写法。

**示例代码：**

<Tabs
  defaultValue="class"
  values={[
    {label: 'Class Component', value: 'class'},
    {label: 'Functional Component', value: 'functional'}
  ]}>
<TabItem value="class">

```jsx title="pages/index/index.jsx"
import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'

// 页面组件
class Index extends Component {
  state = {
    counter: 0,
  }

  componentDidShow() {
    console.log('show')
  }

  componentDidHide() {
    console.log('hide')
  }

  onShareAppMessage() {
    return {
      title: 'myShareTitle',
    }
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }))
  }

  render() {
    if (this.state.counter === 2) {
      // 模拟 JS 报错
      throw new Error('I crashed!')
    }
    return <Button onClick={this.handleClick}>{this.state.counter}</Button>
  }
}

// 使用 HOC 以方便为各个页面复用这段逻辑
function createErrorBoundary(Page) {
  return class ErrorBoundary extends Component {
    el = React.createRef()
    state = {
      hasError: null,
    }

    static getDerivedStateFromError() {
      return {
        hasError: true,
      }
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
    }

    /* Start 需要手动调用页面组件上的生命周期方法 **/
    componentDidShow() {
      return this.el.current?.componentDidShow?.()
    }

    componentDidHide() {
      return this.el.current?.componentDidHide?.()
    }

    onShareAppMessage() {
      return this.el.current?.onShareAppMessage?.()
    }

    //...

    /* End 需要手动调用页面组件上的生命周期方法 **/

    render() {
      return this.state.hasError ? <View>Something went wrong.</View> : <Page ref={this.el} />
    }
  }
}

export default createErrorBoundary(Index)
```

</TabItem>

<TabItem value="functional">

```jsx title="pages/index/index.jsx"
import { Component, useEffect, useState } from 'react'
import { View, Button } from '@tarojs/components'
import { useDidShow, useDidHide, useShareAppMessage } from '@tarojs/taro'

function Index() {
  const [counter, setCounter] = useState(0)

  useDidShow(() => console.log('show'))

  useDidHide(() => console.log('hide'))

  useShareAppMessage(() => ({ title: 'myShareTitle' }))

  function handleClick() {
    setCounter(counter + 1)
  }

  useEffect(() => {
    if (counter === 2) {
      // 模拟 JS 报错
      throw new Error('I crashed!')
    }
  })

  return <Button onClick={handleClick}>{counter}</Button>
}

// 使用 HOC 以方便为各个页面复用这段逻辑
function createErrorBoundary(Page) {
  return class ErrorBoundary extends Component {
    state = {
      hasError: null,
    }

    static getDerivedStateFromError() {
      return {
        hasError: true,
      }
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
    }

    render() {
      return this.state.hasError ? <View>Something went wrong.</View> : <Page />
    }
  }
}

export default createErrorBoundary(Index)
```

</TabItem>
</Tabs>

## App onError

:::info
Taro v3.5+ 开始支持
:::

- React 渲染流程之外的 JS 错误都能被其监听到。
- 当渲染错误没有被开发者设置的错误边界捕获时，渲染报错都可以被监听到。

**示例代码：**

<Tabs
  defaultValue="class"
  values={[
    {label: 'Class Component', value: 'class'},
    {label: 'Functional Component', value: 'functional'}
  ]}>
<TabItem value="class">

```jsx title="app.js"
import { Component } from 'react'

export default class App extends Component {
  onError(error) {
    console.log(error)
  }

  render() {
    return this.props.children
  }
}
```

</TabItem>

<TabItem value="functional">

```jsx title="app.js"
import { useError } from '@tarojs/taro'

export default function App(props) {
  useError((error) => console.log(error))

  return props.children
}
```

</TabItem>
</Tabs>

---

## docs/taroize-troubleshooting.md

---
title: Troubleshooting
---

## 不支持的小程序特性

### 入口 App 对象

| 属性                 | 说明 |
| :------------------- | :--- |
| onError              |      |
| onPageNotFound       |      |
| onUnhandledRejection |      |
| onThemeChange        |      |

### 页面 Page 对象

| 属性                 | 说明                    |
| :------------------- | :---------------------- |
| selectComponent      | 建议使用 React ref 重构 |
| selectAllComponents  | 建议使用 React ref 重构 |
| selectOwnerComponent | 建议使用 React ref 重构 |
| groupSetData         |                         |

### 自定义组件

| 属性             | 说明                                                        |
| :--------------- | :---------------------------------------------------------- |
| moved            |                                                             |
| externalClasses  | Taro 3 不存在自定义组件，建议规范类名或使用 CSS Module 代替 |
| relations        |                                                             |
| options          |                                                             |
| definitionFilter |                                                             |

### wxml 语法

| 属性 | 说明                                                                          |
| :--- | :---------------------------------------------------------------------------- |
| 循环 | [部分语法有限制]                                                              |
| 事件 | [部分语法有限制](./taroize-troubleshooting#2-事件)                            |
| 引用 | [部分语法有限制](./taroize-troubleshooting#16-include-里不支持使用-template)  |
| wxs  | [部分语法有限制](./taroize-troubleshooting#15-不支持-wxs-里的-getregexp-方法) |

## 关键问题

### 1. 没有处理基类

原生开发中，常常会把 App、Page、Component 构造对象的公共逻辑整合到基类中。

如 **Vant-weapp** 中：

```js
// 组件
VantComponent({
  data: {},
})
// 基类
function VantComponent(vantOptions = {}) {
  // 整合组件独有配置 vantOptions 和公共配置到最终的配置对象 options 中
  // ...

  // 调用小程序的 Component 方法构造自定义组件
  Component(options)
}
```

Taro 在编译时只能识别出入口、页面、组件文件中存在的 `App()`、`Page()`、`Component()` 调用，使用基类对配置封装后就不存在这些调用。因此编译后的 `withWeapp` 获得的参数是 `{}`。

```js
VantComponent({
  data: {},
})
// withWeapp 中应该传入小程序配置对象
@withWeapp({})
class _C extends React.Component {}
```

因此我们需要手动修改：

```js
// 基类
function VantComponent(vantOptions = {}) {
  // 整合组件独有配置 vantOptions 和公共配置到最终的配置对象 options 中
  // ...

  // 调用小程序的 Component 方法构造自定义组件
  // Component(options);

  // 1. 基类直接返回整合后的 options
  return options
}
```

```js
// 2. 把基类创建的配置传入 withWeapp：
const options = VantComponent({
  data: {},
})
@withWeapp(options)
class _C extends React.Component {}
```

### 2. 样式作用域

微信小程序中的自定义组件，转换后会生成一个 Taro 中的 React/Vue 组件。

但是 Taro 中使用 React/Vue 开发的组件，编译到小程序平台时，并不会生成对应的小程序自定义组件。

**因此微信小程序自定义组件的样式隔离特性，在转换为 Taro 后就会丢失。**

#### 解决办法：

1. 修改冲突的选择器。
2. 使用 CSS Modules 进行改写。

## 常见问题

### 1. wxml 语法转换问题

把 `wxml` 转换为 `JSX` 是通过操作 `AST` 实现的，有一些写法可能没有考虑到，或难以适配，从而导致报错。

以下是一些已知问题，需要手动修复：

#### 1.1 组件同时使用 `wx:for` 和 `wx:if` 语句时转换错误

当组件上同时使用了 `wx:for` 和 `wx:if` 语句，并且使用了当前**循环元素 item** 或**循环下标 index** 做判断条件时，转换后会报错。

例如：

```jsx
// 转换前（注意判断条件使用了循环下标 index）：
<block wx:for="{{objectArray}}" wx:if="{{index % 2 !== 0}}">
  <view>objectArray item: {{item.id}}</view>
</block>
```

```jsx
// 转换后：
{
  index % 2 !== 0 && (
    <Block>
      {objectArray.map((item, index) => {
        return (
          <Block>
            <View>{'objectArray item: ' + item.id}</View>
          </Block>
        )
      })}
    </Block>
  )
}
```

上例可见，对于条件语句的转换，目前的处理会把条件提取到组件外部。但是如果条件使用了 `item` 或 `index` 时，这样的提取逻辑会导致**变量未定义**的报错。

暂时可以通过手动修复解决：

方法一，修改**编译前**的代码，把循环和条件语句拆开到两个组件中：

```jsx
<block wx:for="{{objectArray}}">
  <block wx:if="{{index % 2 !== 0}}">
    <view>objectArray item: {{item.id}}</view>
  </block>
</block>
```

方法二，修改**编译后**的代码,把条件判断放进循环体中：

```jsx
<Block>
  {objectArray.map((item, index) => {
    return <Block>{index % 2 !== 0 && <View>{'objectArray item: ' + item.id}</View>}</Block>
  })}
</Block>
```

#### 1.2 根元素不能含有 `hidden` 属性。

#### 1.3 编译时报错：SyntaxError: Unexpected token

尖括号 “<” 右侧需要留一个空格，[#4243](https://github.com/NervJS/taro/issues/4243)

##### 解决办法：

检查是否存在以下写法：

```jsx
<view>{{a <4? "1": "2"}}</view>
```

改为：

```jsx
<view>{{a < 4? "1": "2"}}</view>
```

#### 1.4 运行时报错：ReferenceError: item is not defined

查看编译后的 JSX，是否因为漏了从 `this.data` 中取出变量，如：

```
// 下面的代码没有引用 item
const { a, b, c } = this.data
```

##### 解决办法：

`this.data` 中的变量名，不要和用于指定数组当前下标的变量名，默认值为 `item`，或由 `wx:for-index` 具体指定的变量名相同。

#### 1.5 不支持 WXS 里的 GetRegExp 方法

使用 `RegExp` 构造正则表达式。

#### 1.6 `<include>` 里不支持使用 `<template>`

#### 1.7 template 里暂不支持使用 catch 事件

### 2. 事件

- 事件不支持绑定字符串。
- `catchtouchmove` 转换后只能停止回调函数的冒泡，不能阻止滚动穿透。如要阻止滚动穿透，可以手动给编译后的 `View` 组件加上 `catchMove` 属性。
- 不支持事件捕获阶段。
- 不支持使用 WXS 函数响应事件。
- 不支持互斥事件绑定 `mut-bind`。
- 不支持 `mark` 来识别具体触发事件的 target 节点。

### 3. CommonJS 和 ES 模块化语法不能混用

可能遇到的报错信息：

- Cannot assign to read only property 'exports' of object
- export '[something]' (imported as '[name]') was not found in '[somePath]'

在使用到小程序 API 的地方，Taro 会把 `wx.api()` 转换为 `Taro.api()`，同时在文件的头部加上 `import Taro from '@tarjs/taro`。

如果此文件原本是使用 **CommonJS** 组织模块，可能会出现问题，需要手动修复。

### 4. selectorQuery API 获取不到 DOM

1. 一定要在 `onReady`、`ready` 生命周期中才能调用小程序 API 获取 DOM。
2. 不需要调用 `.in(this)` 方法。

### 5. Image 没有处理动态拼接的 src

Taro 会对 `Image` 组件的 src 进行处理：

```jsx
// 转换前：
<Image src='../../img/icons/0.png' />
// 转换后：
<Image src={require('../../img/icons/0.png')} />
```

但如果 `src` 是动态拼接的字符串，则需要手动修改：

```jsx
// 转换前：
<Image src='../../img/icons/' + chart.id + '.png' />
// 转换后：
<Image src='../../img/icons/' + chart.id + '.png' />
// 手动修改，图片也需要手动拷贝到 taroConert/src 对应目录下：
<Image src={require('../../img/icons/' + chart.id + '.png')} />
```

### 6. require 的参数不能是变量

可能遇到的报错信息：

- The "path" argument must be of type string. Received type undefined

不支持转换以下写法，[#4749](https://github.com/NervJS/taro/issues/4749)：

```js
var pathTest = './test.js'
var test = require(pathTest)
```

Taro 目前只能转换 `require` 字符串的写法。

### 7. 没有处理 export from 语法

暂时手动处理，[#5131](https://github.com/NervJS/taro/issues/5131)。

### 8. Issues

反向转换的更多问题，请查阅 Taroize 相关 [Issues](https://github.com/NervJS/taro/issues?q=is%3Aopen+is%3Aissue+label%3AA-taroize)。

---

## docs/taroize.md

---
title: 微信小程序转 Taro
---

Taro 可以把**原生微信小程序应用转换为 Taro 项目**，从而使项目成为多端应用。

转换后的代码可读性高，能够继续使用 **React**（将来支持转换为 **Vue**）进行二次开发。

### 反向转换步骤

1. 在微信小程序项目的根目录中运行 `npx @tarojs/cli-convertor` 命令进行转换：

```bash
# 转换后的代码保存在根目录下的 `taroConvert` 文件夹下
$ npx @tarojs/cli-convertor
```

3. 进入 `taroConvert` 目录，安装依赖：

```bash
$ cd taroConvert
$ npm install
```

4. 运行 `build` 命令，把项目编译到任意平台：

```bash
$ taro build --type [platform]
```

---

