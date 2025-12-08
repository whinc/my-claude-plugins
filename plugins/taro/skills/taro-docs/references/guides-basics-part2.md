## docs/functional-component.md

---
title: 函数式组件
---

## 普通函数式组件

> 自 `v1.3.0-beta.0` 起支持

定义一个函数式组件非常简单：

```jsx
function Welcome(props) {
  return <View>Hello, {props.name}</View>
}
```

这个函数接受一个参数 `props`，并且返回的是一个 JSX 元素。这样的函数就是函数式组件。相对于的 ES6 Class 组件是：

```jsx
class Welcome extends React.Component {
  render() {
    return <View>Hello, {this.props.name}</View>
  }
}
```

在 Taro 中使用函数式组件有以下限制：

1. 函数的命名需要遵循[帕斯卡式命名法](https://baike.baidu.com/item/%E5%B8%95%E6%96%AF%E5%8D%A1%E5%91%BD%E5%90%8D%E6%B3%95/9464494?fr=aladdin)；
2. 一个文件中只能定义一个普通函数式组件或一个 Class 组件

## 类函数式组件

> 自 `v1.3.0-beta.0` 起支持

由于一个文件不能定义两个组件，但有时候我们需要组件内部的抽象组件，这时类函数式组件就是你想要答案。假设我们有一个 Class 组件，它包括了一个 `Header` 一个 `Footer`，我们可以这样定义：

```jsx
class SomePage extends Taro.Component {
  renderHeader () {
    const { header } = this.state
    return <View>{header}</View>
  }

  renderFooter (footer) {
    return <View>{footer}</View>
  }

  render () {
    return (
      <View>
        {this.renderHeader()}
        {...}
        {this.renderFooter('footer')}
      </View>
    )
  }
}
```

在 `renderHeader` 或 `renderFooter` 函数中，我们可以访问类的 `this`，也可以传入不限量的参数，这类型的函数也可以调用无限次数。但这样的写法也存在一些限制：

1. 函数的命名必须以 `render` 开头，`render` 后的第一个字母需要大写
2. 函数的参数不得传入 JSX 元素或 JSX 元素引用
3. 函数不能递归地调用自身

> 形如 `renderHeader` 这样的函数在小程序中会编译成 `template`，而小程序的 `template` 是无法做到递归调用自身的。当你有这样的需求时，可以新建两个一模一样的组件和文件：ComponentA 和 ComponentB，在 ComponentA 中调用 ComponentB，在 ComponentB 中调用 ComponnetA。

## 闭包函数式组件

> 自 `v1.3.0-beta.2` 起支持

在一个普通的函数式组件中，我们需要一个另外的抽象组件多次调用，同时我们还希望这个抽象组件能访问到我们当前作用域的值，这时候我们就需要闭包函数式组件：

```jsx
function Header({ user }) {
  const name = user.name
  const renderTitle = () => {
    // renderTitle 每次都能获取到当前作用域 `name` 的值
    return <View>Welcome, {name}</View>
  }
  return (
    <View>
      {/* 重要人士我们要欢迎他三次 */}
      {renderTitle()}
      {renderTitle()}
      {renderTitle()}
    </View>
  )
}
```

闭包函数式组件遵循所有类函数式的限制，包括命名，传参，调用，并且它只能在一个普通函数式组件或类函数式组件以及 `Taro.Component` 的 `render` 函数中定义及调用。

> 一般情况下只建议在普通函数式组件中使用闭包函数式组件，而在 `Taro.Component` 中可以显式地定义一个类函数式组件和它的参数和签名，这样函数的作用域更为清晰也更易维护。

---

## docs/hooks.md

---
title: Hooks
---

`Hooks` 是一套全新的 API，可以让你在不编写类，不编写 Class 的情况下使用 `state` 的状态管理，生命周期等功能。

关于 `Hooks` 的概述、动机和规则，我们强烈建议你阅读 React 的官方文档。和其它大部分 React 特性不同，Hooks 没有 RFC 介绍，相反，所有说明都在文档中：

- [Introducing Hooks(简介)](https://zh-hans.reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance(概览)](https://zh-hans.reactjs.org/docs/hooks-overview.html)
- [Rules of Hooks(规则)](https://zh-hans.reactjs.org/docs/hooks-rules.html)

本篇文档只会介绍在 Taro 中可用的 Hooks API 和部分与 React 不一致的行为，其它内容大体的内容和 [Hooks Reference](https://zh-hans.reactjs.org/docs/hooks-reference.html) 相同。

你还可以参考这两个使用 Hooks 的 Demo：

- [V2EX](https://github.com/NervJS/taro-v2ex-hooks)，主要展示与服务器通信

- [TodoMVC](https://github.com/NervJS/taro-todomvc-hooks)，主要展示组件间通信

## 用法

在 Taro 中使用 Hooks API 很简单，Taro 的专有 Hooks（例如 `usePageScroll`, `useReachBottom`）从 `@tarojs/taro` 中引入，框架自己的 Hooks （例如 `useEffect`, `useState`）从对应的框架引入。

```js
import { usePageScroll, useReachBottom } from '@tarojs/taro' // Taro 专有 Hooks
import { useState, useEffect } from 'react' // 框架 Hooks （基础 Hooks）
// 如果你使用 Nerv 的话
// import { useState, useEffect } from 'nervjs' // 框架 Hooks （基础 Hooks）
```

## Taro Hooks

### useLaunch

:::info
Taro v3.5.0+ 开始支持
:::

等同于 App 入口的 `onLaunch` 生命周期钩子。

```jsx title="示例代码"
useLaunch(() => {
  console.log('onLaunch')
})
```

### useError

:::info
Taro v3.5.0+ 开始支持
:::

等同于 App 入口的 `onError` 生命周期钩子。

```jsx title="示例代码"
useError((error) => {
  console.log(error)
})
```

### usePageNotFound

:::info
Taro v3.5.0+ 开始支持
:::

等同于 App 入口的 `onPageNotFound` 生命周期钩子。

```jsx title="示例代码"
usePageNotFound((res) => {
  Taro.redirectTo({
    url: 'pages/...',
  }) // 如果是 tabbar 页面，请使用 Taro.switchTab
})
```

### useUnhandledRejection

:::info
Taro v3.5.10+ 开始支持
:::

等同于 App 入口的 `onUnhandledRejection` 生命周期钩子。

```jsx title="示例代码"
useUnhandledRejection((res) => {
  console.log(res.reason, res.promise)
})
```

> 注意：**支付宝小程序**需要在源码根目录的 `project.alipay.json` 文件中添加配置 `enableAppxNg: true` 才能在真机环境进行监听。

### useRouter

等同于 Class Component 的 `getCurrentInstance().router`。

```jsx title="示例代码"
// { path: '', params: { ... } }
const router = useRouter()
```

### useLoad

:::info
Taro v3.5.0+ 开始支持
:::

等同于页面的 `onLoad` 生命周期钩子。

```jsx title="示例代码"
useLoad(() => {
  console.log('onLoad')
})
```

### useReady

等同于页面的 `onReady` 生命周期钩子。

从此生命周期开始可以使用 createCanvasContext 或 createSelectorQuery 等 API 访问小程序渲染层的 DOM 节点。

```js title="示例代码"
useReady(() => {
  const query = wx.createSelectorQuery()
})
```

### useDidShow

页面显示/切入前台时触发。等同于 `componentDidShow` 页面生命周期钩子。

```jsx title="示例代码"
useDidShow(() => {
  console.log('componentDidShow')
})
```

### useDidHide

页面隐藏/切入后台时触发。等同于 `componentDidHide` 页面生命周期钩子。

```jsx title="示例代码"
useDidHide(() => {
  console.log('componentDidHide')
})
```

### useUnload

:::info
Taro v3.5.0+ 开始支持
:::

等同于页面的 `onUnload` 生命周期钩子。

```jsx title="示例代码"
useUnload(() => {
  console.log('onUnload')
})
```

### usePullDownRefresh

监听用户下拉动作。等同于 `onPullDownRefresh` 页面生命周期钩子。

```jsx title="示例代码"
usePullDownRefresh(() => {
  console.log('onPullDownRefresh')
})
```

### useReachBottom

监听用户上拉触底事件。等同于 `onReachBottom` 页面生命周期钩子。

```jsx title="示例代码"
useReachBottom(() => {
  console.log('onReachBottom')
})
```

### usePageScroll

监听用户滑动页面事件。等同于 `onPageScroll` 页面生命周期钩子。

```jsx title="示例代码"
usePageScroll((res) => {
  console.log(res.scrollTop)
})
```

### useResize

小程序屏幕旋转时触发。等同于 `onResize` 页面生命周期钩子。

```jsx title="示例代码"
useResize((res) => {
  console.log(res.size.windowWidth)
  console.log(res.size.windowHeight)
})
```

### useShareAppMessage

监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。等同于 `onShareAppMessage` 页面生命周期钩子。

**【Breaking】Taro 3.0.3 开始，使用此 Hook 时必须为页面配置 `enableShareAppMessage: true`。（修改配置文件后请重新编译项目）**

```jsx title="示例代码"
// page.js
function Index() {
  useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
    }
  })
}
// page.config.js
export default {
  enableShareAppMessage: true,
}
```

### useTabItemTap

点击 tab 时触发。等同于 `onTabItemTap` 页面生命周期钩子。

```jsx title="示例代码"
useTabItemTap((item) => {
  console.log(item.index)
  console.log(item.pagePath)
  console.log(item.text)
})
```

### useAddToFavorites

监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。等同于 `onAddToFavorites` 页面生命周期钩子。

> Taro 3.0.3 开始支持
> 只有微信小程序支持，本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持

```jsx title="示例代码"
useAddToFavorites((res) => {
  // webview 页面返回 webviewUrl
  console.log('WebviewUrl: ', res.webviewUrl)
  return {
    title: '自定义标题',
    imageUrl: 'https://demo.png',
    query: 'name=xxx&age=xxx',
  }
})
```

### useShareTimeline

监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。等同于 `onShareTimeline` 页面生命周期钩子。

> Taro 3.0.3 开始支持
> 只有微信小程序支持，基础库 2.11.3 开始支持，本接口为 Beta 版本，暂只在 Android 平台支持

**使用时，必须为页面配置 `enableShareTimeline: true`。（修改配置文件后请重新编译项目）**

```jsx title="示例代码"
// page.js
function Index() {
  useShareTimeline(() => {
    console.log('onShareTimeline')
  })
}
// page.config.js
export default {
  enableShareTimeline: true,
}
```

### useSaveExitState

:::info
Taro v3.5.0+ 开始支持
:::

每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用，可以进行[退出状态](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81)的保存。

> 只有微信小程序支持，基础库 2.7.4 开始支持。

```jsx title="示例代码"
useSaveExitState(() => {
  const exitState = { myDataField: 'myData' } // 需要保存的数据
  return {
    data: exitState,
    expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000, // 超时时刻
  }
})
```

### useTitleClick

> 只有支付宝小程序支持。等同于 `onTitleClick` 页面生命周期钩子。

点击标题触发。

```jsx title="示例代码"
useTitleClick(() => console.log('onTitleClick'))
```

### useOptionMenuClick

> 只有支付宝小程序支持。等同于 `onOptionMenuClick` 页面生命周期钩子。

点击导航栏额外图标触发。

```jsx title="示例代码"
useOptionMenuClick(() => console.log('onOptionMenuClick'))
```

### usePullIntercept

> 只有支付宝小程序支持。等同于 `onPullIntercept` 页面生命周期钩子。

下拉截断时触发。

```jsx title="示例代码"
usePullIntercept(() => console.log('onPullIntercept'))
```

## React Hooks

### useState

```js
const [state, setState] = useState(initialState)
```

返回一个 state，以及更新 state 的函数。

在初始渲染期间，返回的状态 (`state`) 与传入的第一个参数 (`initialState`) 值相同。

`setState` 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

```js
setState(newState)
```

在后续的重新渲染中，`useState` 返回的第一个值将始终是更新后最新的 state。

> 注意
>
> Taro 会确保 `setState` 函数的标识是稳定的，并且不会在组件重新渲染时发生变化。这就是为什么可以安全地从 `useEffect` 或 `useCallback` 的依赖列表中省略 `setState`。

#### 函数式更新

如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 `setState`。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 `setState` 的两种用法：

```js
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  return (
    <View>
      Count: {count}
      <Button onClick={() => setCount(initialCount)}>Reset</Button>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>+</Button>
      <Button onClick={() => setCount((prevCount) => prevCount - 1)}>-</Button>
    </View>
  )
}
```

“+” 和 “-” 按钮采用函数式形式，因为被更新的 state 需要基于之前的 state。但是“重置”按钮则采用普通形式，因为它总是把 count 设置回初始值。

> 注意
>
> 与 class 组件中的 `setState` 方法不同，`useState` 不会自动合并更新对象。你可以用函数式的 `setState` 结合展开运算符来达到合并更新对象的效果。
>
> ```js
> setState((prevState) => {
>   // 也可以使用 Object.assign
>   return { ...prevState, ...updatedValues }
> })
> ```
>
> `useReducer` 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。

#### 惰性初始 state

`initialState` 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

### useEffect

```js
useEffect(didUpdate)
```

该 Hook 接收一个包含命令式、且可能有副作用代码的函数。

在函数组件主体内（这里指在 Taro 渲染或创建数据的阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。

使用 `useEffect` 完成副作用操作。赋值给 `useEffect` 的函数会在组件渲染到屏幕之后执行。

默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它在只有某些值改变的时候才执行。

#### 清除 effect

通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，`useEffect` 函数需返回一个清除函数。以下就是一个创建订阅的例子：

```js
useEffect(() => {
  const subscription = props.source.subscribe()
  return () => {
    // 清除订阅
    subscription.unsubscribe()
  }
})
```

为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则**在执行下一个 effect 之前，上一个 effect 就已被清除**。在上述示例中，意味着组件的每一次更新都会创建新的订阅。若想避免每次更新都触发 effect 的执行，请参阅下一小节。

#### effect 的执行时机

与 `componentDidMount`、`componentDidUpdate` 不同的是，Taro 会在 `setData` 完成之后的下一个 [macrotask](https://github.com/ccforward/cc/issues/47) 执行 effect 的回调函数，传给 `useEffect` 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如如设置订阅和事件处理等情况，因此不应在函数中执行渲染和更新。

然而，并非所有 effect 都可以被延迟执行。例如，在容器执行下一次绘制前，用户可见的 DOM 变更就必须同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）Taro 为此提供了一个额外的 [`useLayoutEffect`](#uselayouteffect) Hook 来处理这类 effect。它和 `useEffect` 的结构相同，区别只是调用时机不同。

#### effect 的条件执行

默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

然而，在某些场景下这么做可能会矫枉过正。比如，在上一章节的订阅示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 `source` props 改变时重新创建。

要实现这一点，可以给 `useEffect` 传递第二个参数，它是 effect 所依赖的值数组。更新后的示例如下：

```js
useEffect(() => {
  const subscription = props.source.subscribe()
  return () => {
    subscription.unsubscribe()
  }
}, [props.source])
```

此时，只有当 `props.source` 改变后才会重新创建订阅。

> 注意
>
> 如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会发生变化且在 effect 中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。
>
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 Taro 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循输入数组的工作方式。
>
> 如果你传入了一个空数组（`[]`），effect 内部的 props 和 state 就会一直拥有其初始值。尽管传入 `[]` 作为第二个参数有点类似于 `componentDidMount` 和 `componentWillUnmount` 的思维模式，但我们有 [更好的](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) [方式](https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often) 来避免过于频繁的重复调用 effect。除此之外，请记得 Taro 会等待渲染完毕之后才会延迟调用 `useEffect`，因此会使得额外操作很方便。
>
> Taro 会在自带的 ESLint 中配置 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

### useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, init)
```

[`useState`](#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 `dispatch` 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为[你可以向子组件传递 `dispatch` 而不是回调函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) 。

以下是用 reducer 重写 [`useState`](#usestate) 一节的计数器示例：

```js
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      Count: {state.count}
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
    </View>
  )
}
```

> 注意
>
> Taro 会确保 `dispatch` 函数的标识是稳定的，并且不会在组件重新渲染时改变。这就是为什么可以安全地从 `useEffect` 或 `useCallback` 的依赖列表中省略 `dispatch`。

#### 指定初始 state

有两种不同初始化 `useReducer` state 的方式，你可以根据使用场景选择其中的一种。将初始 state 作为第二个参数传入 `useReducer` 是最简单的方法：

```jsx
const [state, dispatch] = useReducer(reducer, { count: initialCount })
```

> 注意
>
> Taro 不使用 `state = initialState` 这一由 Redux 推广开来的参数约定。有时候初始值依赖于 props，因此需要在调用 Hook 时指定。如果你特别喜欢上述的参数约定，可以通过调用 `useReducer(reducer, undefined, reducer)` 来模拟 Redux 的行为，但我们不鼓励你这么做。

#### 惰性初始化

你可以选择惰性地创建初始 state。为此，需要将 `init` 函数作为 `useReducer` 的第三个参数传入，这样初始 state 将被设置为 `init(initialArg)`。

这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利：

```jsx {1-3,11-12,19,24}
function init(initialCount) {
  return { count: initialCount }
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <View>
      Count: {state.count}
      <Button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
    </View>
  )
}
```

### useCallback

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。

把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 `shouldComponentUpdate`）的子组件时，它将非常有用。

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

记住，传入 `useMemo` 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。

如果没有提供依赖项数组，`useMemo` 在每次渲染时都会计算新的值。

### useRef

```js
const refContainer = useRef(initialValue)
```

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内保持不变。

一个常见的用例便是命令式地访问子组件：

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus()
  }
  return (
    <View>
      <Input ref={inputEl} type="text" />
      <Button onClick={onButtonClick}>Focus the input</Button>
    </View>
  )
}
```

本质上，`useRef` 就像是可以在其 `.current` 属性中保存一个可变值的“盒子”。

你应该熟悉 ref 这一种[访问 DOM](ref.mdx) 的主要方式。如果你将 ref 对象以 `<View ref={myRef} />` Taro 都会将 ref 对象的 `.current` 属性设置为相应的 DOM 节点。

然而，`useRef()` 比 `ref` 属性更有用。它可以[很方便地保存任何可变值](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)，其类似于在 class 中使用实例字段的方式。

这是因为它创建的是一个普通 JavaScript 对象。而 `useRef()` 和自建一个 `{current: ...}` 对象的唯一区别是，`useRef` 会在每次渲染时返回同一个 ref 对象。

请记住，当 ref 对象内容发生变化时，`useRef` 并*不会*通知你。变更 `.current` 属性不会引发组件重新渲染。如果想要在 Taro 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现。

### useLayoutEffect

其函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。

> 提示
>
> 如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 `useLayoutEffect` 与 `componentDidMount`、`componentDidUpdate` 的调用阶段是一样的。但是，我们推荐你**一开始先用 `useEffect`**，只有当它出问题的时再尝试使用 `useLayoutEffect`。

### useContext

```jsx
const value = useContext(MyContext)
```

接收一个 context (`Taro.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中最先渲染的 `<MyContext.Provider value={value}>` 的 `value`决定。

当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context `value` 值。

别忘记 `useContext` 的参数必须是 context 对象本身：

正确： `useContext(MyContext)`
错误： `useContext(MyContext.Consumer)`
错误： `useContext(MyContext.Provider)`
调用了 `useContext` 的组件总会在 context 值变化时重新渲染。

> 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，`useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`。
> `useContext(MyContext)` 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件提供 context。

## 相关阅读

- [《使用 React Hooks 重构你的小程序》](/blog/2019-07-10-taro-hooks)

---

## docs/hybrid.mdx

---
title: Taro 使用原生模块
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Taro 支持使用小程序原生的**页面**、**组件**和**插件**。

#### 示例项目：

1. React：https://github.com/NervJS/taro-sample-weapp/tree/next
2. Vue：https://github.com/NervJS/taro-sample-weapp/tree/vue

> 注意：如果在 Taro 项目引用了小程序原生的页面、组件和插件，那么该项目将**不再具备多端转换的能力**。
> 例如，如果使用了微信小程序的原生组件，那么项目只能转换成微信小程序，转义成其他平台会失效，使用其他小程序原生组件同理。

## 使用原生组件

### 使用方法

#### 1. 在 app 或页面配置文件中配置 `usingComponents` 属性。

```js title="page.config.js"
export default {
  usingComponents: {
    // 定义需要引入的第三方组件
    // 1. key 值指定第三方组件名字，以小写开头
    // 2. value 值指定第三方组件 js 文件的相对路径
    'ec-canvas': '../../components/ec-canvas/ec-canvas',
  },
}
```

> 注意：Taro3 的组件是没有配置文件的，因此 usingComponents 必须配置在“页面”的配置文件中。

#### 2. 使用组件

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Index extends Component {
  this.state = {
    ec: {
      onInit: function () {}
    }
  }

  render () {
    return (
      <View>
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec} />
      </View>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view class="echarts">
    <ec-canvas id="mychart-dom-area" canvas-id="mychart-area" :ec="ec"></ec-canvas>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        ec: {
          onInit: function () {},
        },
      }
    },
  }
</script>
```

</TabItem>
</Tabs>

### 属性绑定

属性名和原生语法保持一致。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
<van-button type="primary" loading loading-text="ing">
  Button
</van-button>
```

</TabItem>

<TabItem value="Vue">

```html
<van-button type="primary" :loading="true" loading-text="ing">Button</van-button>
```

</TabItem>
</Tabs>

> 注意：在 Vue 中，如果组件的某些属性带有默认值 `true`，在 Taro 中使用时仍然需要**显式设置为 true**。

### 事件绑定

原生组件派发的事件名称有多种格式，首先开发者要明确原生组件派发的事件名具体是什么。不同的事件名对应不同的模板绑定语法，会影响对应的 React 和 Vue 语法。以下是一些例子：

> 可以看出，小程序原生组件派发的事件名区分大小写，并且支持 `-`。

| 模板绑定语法               | 事件名称 |
| :------------------------- | :------- |
| bindmyevent / bind:myevent | myevent  |
| bindmyEvent / bind:myEvent | myEvent  |
| bindMyEvent / bind:MyEvent | MyEvent  |
| bind:my-event              | my-event |
| bind:my-Event              | my-Event |
| bind:My-Event              | My-Event |

#### React

在 JSX 中事件绑定语法为 `onCamelCase`，它的单一性无法适配小程序原生组件事件名的多样性。

因此 Taro 只能根据开发者 JSX 的事件绑定语法，遵循以下规则生成对应的模板绑定语法（在区分原生组件派发的事件名大小写的情况下，需要使用一个 `bind` 属性进行 hack 处理）：

| JSX 事件绑定语法                    | 模板绑定语法  | 事件名称 |
| :---------------------------------- | :------------ | :------- |
| `<Comp onMyevent={} />`             | bindmyevent   | myevent  |
| `<Comp onMyEvent={} bindmyEvent />` | bindmyEvent   | myEvent  |
| `<Comp onMyEvent={} bindMyEvent />` | bindMyEvent   | MyEvent  |
| `<Comp onMyEvent={} />`             | bind:my-event | my-event |
| -                                   | -             | my-Event |
| -                                   | -             | My-Event |

#### Vue

**Vue** 绑定事件时虽然支持 `-`，但对大小写不敏感。因此针对不同的事件名需要编写不同的 Vue Template 语法，大小写敏感时同样也需要使用 `bind` 属性进行 hack 处理：

| Vue Template 语法                  | 模板绑定语法  | 事件名称 |
| :--------------------------------- | :------------ | :------- |
| `<comp @myevent='' />`             | bindmyevent   | myevent  |
| `<comp @myevent='' bindmyEvent />` | bindmyEvent   | myEvent  |
| `<comp @myevent='' bindMyEvent />` | bindMyEvent   | MyEvent  |
| `<comp @my-event='' />`            | bind:my-event | my-event |
| -                                  | -             | my-Event |
| -                                  | -             | My-Event |

#### 例子

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
// 对应 bind:click 事件
<van-button type='primary' onClick={this.handleClick} >Button</van-button>
// 对应 bind:after-read 事件
<van-uploader fileList={[]} onAfterRead={this.onAfterRead} />
```

</TabItem>

<TabItem value="Vue">

```html
<!-- 对应 bind:click 事件 -->
<van-button type="primary" @click="handleClick">Button</van-button>
<!-- 对应 bind:after-read 事件 -->
<van-uploader :fileList="[]" @after-read="onAfterRead" />
```

</TabItem>
</Tabs>

### 使用 Slot

**React** 中使用 `<Slot>` 组件实现。

**Vue** 中使用 `<slot-view>` 组件实现。

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
import React, { Component } from 'react'
import { View, Slot } from '@tarojs/components'

export default class Index extends Component {
  render() {
    return (
      <View>
        <van-calendar poppable show>
          <Slot name="title">
            <View>Hello world</View>
          </Slot>
        </van-calendar>
      </View>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view>
    <van-calendar :poppable="true" :show="true">
      <slot-view :name='"title"'>
        <view>Hello world</view>
      </slot-view>
    </van-calendar>
  </view>
</template>

<script>
  export default {
    name: 'index',
  }
</script>
```

</TabItem>
</Tabs>

### selectComponent

可以使用小程序页面实例的 `selectComponent` API 获取第三方原生组件的实例。

```js
import { getCurrentInstance } from '@tarojs/taro'

const { page } = getCurrentInstance()
page.selectComponent('#mychart-dom-area')
```

### 使用 vant-weapp

[详细文档](./vant)

### 常见问题

#### 1. Vue3 出现 warning: "[Vue warn]: Failed to resolve component"

![](http://storage.360buyimg.com/cjj-pub-images/vue3-warn-native.png)

原因是 Vue 把它当做 Vue 组件来解析，我们可以修改 VueLoader 的编译配置 `compilerOptions.isCustomElement`，把此组件声明为原生组件。

- **Taro v3.4 之前**的版本需要通过 WebpackChain 去修改（请参考 [#10838](https://github.com/NervJS/taro/issues/10838#issuecomment-988448778)）
- **Taro v3.4 之后**可以通过配置 [Taro Vue3 插件](./vue3#compileroptions) 的选项去修改。
- 传递函数类型的属性失败：[React 写法](https://github.com/NervJS/taro/issues/8495#issuecomment-1179526364)、[Vue3 写法](https://github.com/NervJS/taro/issues/10337#issuecomment-989834523)

## 使用原生页面

只需要在 app 配置中，设置好原生页面的路由即可。

```js title="app.config.js"
export default {
  pages: ['pages/native/native'],
}
```

## 使用小程序插件

### 引入插件

使用插件前，使用者要在 `app.confg.js` 的配置中声明需要使用的插件，例如

```js title="app.config.js"
export default {
  plugins: {
    myPlugin: {
      version: '1.0.0',
      provider: 'wxidxxxxxxxxxxxxxxxx',
    },
  },
}
```

如上例所示， `plugins` 定义段中可以包含多个插件声明，每个插件声明以一个使用者自定义的插件引用名作为标识，并指明插件的 `appid` 和需要使用的版本号。其中，引用名（如上例中的 myPlugin）由使用者自定义，无需和插件开发者保持一致或与开发者协调。在后续的插件使用中，该引用名将被用于表示该插件。

### 使用插件组件

#### 配置使用

在页面的配置文件中定义需要引入的插件组件，使用 `plugin://` 协议指明插件的引用名和自定义组件名，例如：

```js title="page.config.js"
export default {
  // 定义需要引入的插件
  usingComponents: {
    'hello-component': 'plugin://myPlugin/hello-component',
  },
}
```

#### 组件写法

和使用原生组件一致，请参考 [《使用原生组件》](./hybrid#使用原生组件)。

#### 限制

出于对插件的保护，插件提供的自定义组件在使用上有一定的限制：

- 默认情况下，页面中的 `this.$scope.selectComponent` 接口无法获得插件的自定义组件实例对象；
- `Taro.createSelectorQuery` 等接口的 `>>>` 选择器无法选入插件内部。

### 使用插件页面

插件的页面从小程序基础库版本 2.1.0 开始支持。

需要跳转到插件页面时，url 使用 `plugin://` 前缀，形如 `plugin://PLUGIN_NAME//PLUGIN_PAGE`， 如：

```jsx
<Navigator url="plugin://myPlugin/hello-page">Go to pages/hello-page!</Navigator>
```

### 使用 js 接口

使用插件的 `js` 接口时，可以使用 `Taro.requirePlugin` 方法。例如，插件提供一个名为 `hello` 的方法和一个名为 `world` 的变量，则可以像下面这样调用：

```js
import { requirePlugin } from '@tarojs/taro'

const myPluginInterface = requirePlugin('myPlugin')
const myWorld = myPluginInterface.world

myPluginInterface.hello()
```

---

## docs/implement-note.md

---
title: 实现细节
---

本文会介绍 Taro 的部分实现细节，带动开发者了解 Taro 相关依赖包的具体功能，让开发者对更好地了解 Taro 这个项目。

:::note
不定期更新。
:::

## CLI

`@tarojs/cli` 是 Taro CLI 工具，它基于 `@tarojs/service` 包的插件化内核实现。

CLI 里预先挂载了一系列的内置插件，每个命令、每个编译平台都是一个单独的 Taro 插件。

## 小程序

### 编译时

编译小程序时，CLI 会调用 `@tarojs/mini-runner` 包。`mini-runner` 主要做了这些事情：

1. 负责根据开发者的[编译配置](./config)调整 Webpack 配置。
2. 注入自定义的 PostCSS 插件。（如 `postcss-pxtransform`）
3. 注入自定义的 Webpack 插件。
4. 注入自定义的 Webpack Loaders。（Loaders 位于 `@tarojs/taro-loader` 包中）
5. 调用 Webpack 开启编译。
6. 修改 Webpack 的编译产物，调整最终的编译结果。

### 运行时

为了让 React、Vue 等框架直接运行在小程序端，我们需要在小程序的逻辑层**模拟浏览器环境**，包括实现 DOM、BOM API 等。

`@tarojs/runtime` 是 Taro 的运行时适配器核心，它实现了精简的 [DOM、BOM API](taro-dom)、事件系统、Web 框架和小程序框架的桥接层等。

> 因为 ReactDOM 体积较大，且包含很多兼容性代码。因此 Taro 借助 react-reconciler 实现了一个自定义渲染器用于代替 ReactDOM。渲染器位于 `@tarojs/react` 包中。

这时 Web 框架就可以使用 Taro 模拟的 API 渲染出一颗 Taro DOM 树，但是**这一切都运行在小程序的逻辑层**。而小程序的 xml 模板需要提前写死，Taro 如何使用一个静态的模板文件去渲染这颗动态的 Taro DOM 树呢？

Taro 选择了利用小程序 `<template>` 可以引用其它 `<template>` 的特性，把 Taro DOM 树的每个 DOM 节点对应地渲染为一个个 `<template>`。这时只需要把 Taro DOM 树的序列化数据进行 `setData`，就能触发 `<template>` 的相互引用，从而渲染出最终的 UI。

> 项目的 `dist/base.xml` 文件就是这些 `<template>` 的集合。

### 端平台插件

Taro 内部默认支持 6 大小程序平台，自 [Taro v3.1](/blog/2021-03-10-taro-3-1-lts#1-开放式架构) 版本之后，对各小程序平台的支持都以 Taro 插件的形式进行：

- `@tarojs/plugin-platform-weapp` 微信小程序插件
- `@tarojs/plugin-platform-alipay` 支付宝小程序插件
- `@tarojs/plugin-platform-swan` 百度小程序插件
- `@tarojs/plugin-platform-tt` 抖音小程序插件
- `@tarojs/plugin-platform-qq` qq 小程序插件
- `@tarojs/plugin-platform-jd` 京东小程序插件

端平台插件针对特定的平台，会分别为编译时和运行时注入逻辑，详情请见 [《端平台插件概述》](./platform-plugin/)。

## H5

### 编译时

编译 H5 时，CLI 会调用 `@tarojs/webpack-runner` 包。`webpack-runner` 主要做了这些事情：

1. 负责根据开发者的[编译配置](./config)调整 Webpack 配置。
2. 注入自定义的 PostCSS 插件。（如 `postcss-pxtransform`、`postcss-plugin-constparse`）
3. 注入自定义的 Webpack 插件。
4. 注入自定义的 Webpack Loaders。（Loaders 位于 `@tarojs/taro-loader` 包中）
5. 调用 Webpack 开启编译。
6. 修改 Webpack 的编译产物，调整最终的编译结果。

### 组件库

Taro 在 H5 端实现了遵循微信小程序规范的基础组件库。

默认会使用 `@tarojs/components` 提供的 Web Components 组件库。

开发者使用 React 开发时，也可以选用[兼容性组件库](./h5#react-兼容性组件库)，这时 `@tarojs/components-react` 将会代替 `@tarojs/components`。

### API

开发者从 `@tarojs/taro` 中引用 Taro 对象并使用它提供的 API。

在 H5 环境，`@tarojs/taro` 会从 `@tarojs/api` 取与平台无关的 API，从 `@tarojs/taro-h5` 中取遵循小程序规范实现的 API，最终集合成一个 Taro 对象暴露给开发者。

> 开发者一般会以 `Taro.xxx` 这种形式调用 API。`babel-plugin-transform-taroapi` 插件会把这种写法转换为 `import { xxx } from '@tarojs/taro';` 再进行调用，这样才能保证 Tree Shaking 生效。

### 路由

`@tarojs/router` 实现了遵循小程序规范的路由库。

### 端平台插件

自 `v3.6.0` 起，我们把对 Web 端平台的兼容逻辑抽取了出来，以 Taro 插件的形式支持，同时开发者也可以基于 `@tarojs/plugin-platform-h5` 自行拓展 Web 端编译平台支持。

端平台插件针对特定的平台，会分别为编译时和运行时注入逻辑，详情请见 [《端平台插件概述》](./platform-plugin/)。

## Typings

Taro 的 Typings 文件位于 `@tarojs/taro/types` 中。

因为各小程序的 API 更新较快，Typings 十分需要社区协助维护。

## 反向转换

反向转换，即原生微信小程序转换为 Taro 的功能，目前支持转换为 React。

反向转换分为编译时和运行时两大模块，分别位于 `@tarojs/taroize` 和 `@tarojs/with-weapp`。

## 相关阅读

- [如何参与大型开源项目-Taro 共建](/blog/2022-01-19-how-to-join-Taro)

---

## docs/jquery-like.md

---
title: jQuery-like API
---

Taro 目前官方支持使用 React 或 Vue 构建视图，它们都是数据驱动的声明式渲染方式。

但在少数情况下，我们需要显式地操纵 DOM，而小程序提供的 `createQuerySelector` API 的用法又较为复杂难懂。在这样的情况下，我们提供了类似 jQuery 的系列 API。使用这个系列 API 很简单，只需要通过 NPM 安装依赖：

```bash
npm i @tarojs/extend
```

然后再需要使用文件引入 `$` 即可：

```js
import { $ } from '@tarojs/extend'
```

:::info 了解更多
你还可以通过访问 [jQuery-like API RFC](https://github.com/NervJS/taro-rfcs/pull/1) 了解更多实现 jQuery-like API 背后的原因与设计。
:::

## 核心方法

### $()

- `$(selector, [context])   ⇒ collection`
- `$(<collection>)   ⇒ same collection`
- `$(<DOM nodes>)   ⇒ collection`
- `$(htmlString)   ⇒ collection`
- `$(htmlString, attributes)   ⇒ collection`

通过执行 CSS 选择器，包装 DOM 节点，或者通过一个 HTML 字符串创建多个元素 来创建一个集合对象。

`collection` 是一个类似数组的对象，它具有链式方法来操作它指向的 DOM 节点，除了 `$()` 对象上的直接方法外(如`$.extend`)，文档对象中的所有方法都是集合方法。

如果选择器中存在 content 参数(css 选择器，dom，或者集合对象)，那么只在所给的节点背景下进行 css 选择器；这个功能和使用 `$(context).find(selector)` 是一样的。

```js
$('view') //=> 所有页面中得p元素
$('#foo') //=> ID 为 "foo" 的元素

// 创建元素:
$('<text>Hello</text>') //=> 新的text元素
// 创建带有属性的元素:
$('<text />', { text: 'Hello', id: 'greeting', css: { color: 'darkblue' } })
//=> <text id=greeting style="color:darkblue">Hello</p>
```

:::caution 请注意
此不支持 [jQuery CSS 扩展](https://www.html.cn/jqapi-1.9/category/selectors/jquery-selector-extensions/)， 然而，可选的“selector”模块有限提供了支持几个最常用的伪选择器，而且可以被丢弃，与现有的代码或插件的兼容执行。
:::

:::caution 请注意
和 React 或 Vue 不一样的是，在 Taro 的 `jQuery-like API` 中可以使用像 `div` 这样的 HTML 元素，但使用小程序规范的组件（例如 `view`）在 Taro 应用中运行会更顺畅。但在接下来的的案例中可能会出现 HTML 元素，仅代表使用方法，不代表实际可用。
:::

### $.fn

$.fn 是一个对象，它拥有 jQuery 对象上所有可用的方法，如 `addClass()`， `attr()`，和其它方法。在这个对象添加一个方法，所有的 jQuery 对象上都能用到该方法。

这里有一个实现 jQuery 的 `empty()` 方法的例子：

```js
$.fn.empty = function () {
  return this.each(function () {
    this.innerHTML = ''
  })
}
```

### addClass

- `addClass(name)   ⇒ self`
- `addClass(function(index, oldClassName){ ... })   ⇒ self`

为每个匹配的元素添加指定的 class 类名。多个 class 类名使用空格分隔。

### after

- `after(content)   ⇒ self`

在每个匹配的元素后插入内容（注：外部插入）。内容可以为 html 字符串，dom 节点，或者节点组成的数组。

```js
$('form label').after('<p>A note below the label</p>')
```

### append

- `append(content)   ⇒ self`

在每个匹配的元素末尾插入内容（注：内部插入）。内容可以为 html 字符串，dom 节点，或者节点组成的数组。

```js
$('ul').append('<li>new list item</li>')
```

### attr

- `attr(name)   ⇒ string`
- `attr(name, value)   ⇒ self`
- `attr(name, function(index, oldValue){ ... })   ⇒ self`
- `attr({ name: value, name2: value2, ... })   ⇒ self`

读取或设置 dom 的属性。如果没有给定 value 参数，则读取对象集合中第一个元素的属性值。当给定了 value 参数。则设置对象集合中所有元素的该属性的值。当 value 参数为`null`，那么这个属性将被移除(类似`removeAttr`)，多个属性可以通过对象键值对的方式进行设置。

要读取 DOM 的属性如 `checked`和`selected`, 使用 `prop`。

```js
var form = $('form')
form.attr('action') //=> 读取值
form.attr('action', '/create') //=> 设置值
form.attr('action', null) //=> 移除属性

// 多个属性:
form.attr({
  action: '/create',
  method: 'post',
})
```

### before

- `before(content)   ⇒ self`

在匹配每个元素的前面插入内容（注：外部插入）。内容可以为 html 字符串，dom 节点，或者节点组成的数组。

```js
$('table').before('<p>See the following table:</p>')
```

### children

- `children([selector])   ⇒ collection`

获得每个匹配元素集合元素的直接子元素，如果给定 selector，那么返回的结果中只包含符合 css 选择器的元素。

```js
$('ol').children('*:nth-child(2n)')
//=> every other list item from every ordered list
```

### clone (`3.0.0-rc.6`)

- `clone()   ⇒ collection`

通过深度克隆来复制集合中的所有元素。

### closest

- `closest(selector, [context])   ⇒ collection`
- `closest(collection)   ⇒ collection`
- `closest(element)   ⇒ collection`

从元素本身开始，逐级向上级元素匹配，并返回最先匹配 selector 的元素。如果给定 context 节点参数，那么只匹配该节点的后代元素。这个方法与 `parents(selector)`有点相像，但它只返回最先匹配的祖先元素。

如果参数是一个 jQuery 对象集合或者一个元素，结果必须匹配给定的元素而不是选择器。

```js
var input = $('input[type=text]')
input.closest('form')
```

### contents

- `contents()   ⇒ collection`

获得每个匹配元素集合元素的子元素，包括文字和注释节点。（注：`.contents()`和`.children()`方法类似，只不过前者包括文本节点以及 jQuery 对象中产生的 HTML 元素。）

### css

- `css(property)   ⇒ value`
- `css([property1, property2, ...])   ⇒ object`
- `css(property, value)   ⇒ self`
- `css({ property: value, property2: value2, ... })   ⇒ self`

读取或设置 DOM 元素的 css 属性。当 value 参数不存在的时候，返回对象集合中第一个元素的 css 属性。当 value 参数存在时，设置对象集合中每一个元素的对应 css 属性。

多个属性可以通过传递一个属性名组成的数组一次性获取。多个属性可以利用对象键值对的方式进行设置。

当 value 为空(空字符串，null 或 undefined)，那个 css 属性将会被移出。当 value 参数为一个无单位的数字，如果该 css 属性需要单位，“px”将会自动添加到该属性上。

```js
var elem = $('h1')
elem.css('background-color') // read property
elem.css('background-color', '#369') // set property
elem.css('background-color', '') // remove property

// set multiple properties:
elem.css({ backgroundColor: '#8EE', fontSize: 28 })

// read multiple properties:
elem.css(['backgroundColor', 'fontSize'])['fontSize']
```

### data

- `data(name)   ⇒ value`
- `data(name, value)   ⇒ self`

读取或写入 dom 的 `data-*` 属性。行为有点像 attr ，但是属性名称前面加上 data-。

当读取属性值时，会有下列转换:

- “true”, “false”, and “null” 被转换为相应的类型；
- 数字值转换为实际的数字类型；
- JSON 值将会被解析，如果它是有效的 JSON；
- 其它的一切作为字符串返回。

### each

- `each(function(index, item){ ... })   ⇒ self`

遍历一个对象集合每个元素。在迭代函数中，`this`关键字指向当前项(作为函数的第二个参数传递)。如果迭代函数返回 `false`，遍历结束。

```js
$('form input').each(function (index) {
  console.log('input %d is: %o', index, this)
})
```

### empty

- `empty()   ⇒ self`

清空对象集合中每个元素的 DOM 内容。

### eq

- `eq(index)   ⇒ collection`

从当前对象集合中获取给定索引值（注：以 0 为基数）的元素。

```js
$('li').eq(0) //=> only the first list item
$('li').eq(-1) //=> only the last list item
```

### filter

- `filter(selector)   ⇒ collection`
- `filter(function(index){ ... })   ⇒ collection`

过滤对象集合，返回对象集合中满足 css 选择器的项。如果参数为一个函数，函数返回有实际值得时候，元素才会被返回。在函数中， this 关键字指向当前的元素。

### find

- `find(selector)   ⇒ collection`
- `find(collection)   ⇒ collection v1.0+`
- `find(element)   ⇒ collection v1.0+`

在当对象前集合内查找符合 CSS 选择器的每个元素的后代元素。

如果给定 Zepto 对象集合或者元素，过滤它们，只有当它们在当前 Zepto 集合对象中时，才回被返回。

```js
var form = $('#myform')
form.find('input, select')
```

### first

- `first()   ⇒ collection`

获取当前对象集合中的第一个元素。

```js
$('form').first()
```

### forEach

- `forEach(function(item, index, array){ ... }, [context])`

遍历对象集合中每个元素，有点类似 each，但是遍历函数的参数不一样，当函数返回 `false` 的时候，遍历不会停止。

### get

- `get()   ⇒ array`
- `get(index)   ⇒ DOM node`

从当前对象集合中获取所有元素或单个元素。当 index 参数不存在的时，以普通数组的方式返回所有的元素。当指定 index 时，只返回该置的元素。这点与`eq`不同，该方法返回的是 DOM 节点，不是 Zepto 对象集合。

```js
var elements = $('h2')
elements.get() //=> get all headings as an array
elements.get(0) //=> get first heading node
```

### has

- `has(selector)   ⇒ collection`
- `has(node)   ⇒ collection`

判断当前对象集合的子元素是否有符合选择器的元素，或者是否包含指定的 DOM 节点，如果有，则返回新的对象集合，该对象过滤掉不含有选择器匹配元素或者不含有指定 DOM 节点的对象。

```js
$('ol > li').has('a[href]')
//=> get only LI elements that contain links
```

### hasClass

- `hasClass(name)   ⇒ boolean`

检查对象集合中是否有元素含有指定的 class。

```js
$('li').hasClass('test')
```

### height

- `height()   ⇒ Promise<number>`
- `height(value)   ⇒ self`
- `height(function(index, oldHeight){ ... })   ⇒ self`

获取对象集合中第一个元素的高度；或者设置对象集合中所有元素的高度。

```js
const height = await $('#foo').height() // => 123
```

:::caution 请注意
`height()` 返回的 `Promise` 对象。
:::

### hide

- `hide()   ⇒ self`

通过设置 css 的属性 `display` 为 `none` 来将对象集合中的元素隐藏。

### html

- `html()   ⇒ string`
- `html(content)   ⇒ self`
- `html(function(index, oldHtml){ ... })   ⇒ self`

获取或设置对象集合中元素的 HTML 内容。当没有给定 content 参数时，返回对象集合中第一个元素的 innerHtml。当给定 content 参数时，用其替换对象集合中每个元素的内容。content 可以是 append 中描述的所有类型。

```js
// autolink everything that looks like a Twitter username
$('.comment p').html(function (idx, oldHtml) {
  return oldHtml.replace(/(^|\W)@(\w{1,15})/g, '$1@<a href="https://twitter.com/$2">$2</a>')
})
```

### index

- `index([element])   ⇒ number`

获取一个元素的索引值（注：从 0 开始计数）。当 elemen 参数没有给出时，返回当前元素在兄弟节点中的位置。当 element 参数给出时，返回它在当前对象集合中的位置。如果没有找到该元素，则返回-1。

```js
$('li:nth-child(2)').index() //=> 1
```

### insertAfter

- `insertAfter(target)   ⇒ self`

将集合中的元素插入到指定的目标元素后面（注：外部插入）。这个有点像 `after`，但是使用方式相反。

```js
$('<p>Emphasis mine.</p>').insertAfter('blockquote')
```

### insertBefore

- `insertBefore(target)   ⇒ self`

将集合中的元素插入到指定的目标元素前面（注：外部插入）。这个有点像 `before`，但是使用方式相反。

```js
$('<p>See the following table:</p>').insertBefore('table')
```

### last

- `last()   ⇒ collection`

获取对象集合中最后一个元素。

```js
$('li').last()
```

### map

- `map(function(index, item){ ... })   ⇒ collection`

遍历对象集合中的所有元素。通过遍历函数返回值形成一个新的集合对象。在遍历函数中 this 关键之指向当前循环的项（遍历函数中的第二个参数）。

遍历中返回 null 和 undefined，遍历将结束。

```js
elements
  .map(function () {
    return $(this).text()
  })
  .get()
  .join(', ')
```

### next

- `next()   ⇒ collection`
- `next(selector)   ⇒ collection`

获取对象集合中每一个元素的下一个兄弟节点(可以选择性的带上过滤选择器)。

### not

- `not(selector)   ⇒ collection`
- `not(collection)   ⇒ collection`
- `not(function(index){ ... })   ⇒ collection`

过滤当前对象集合，获取一个新的对象集合，它里面的元素不能匹配 css 选择器。如果另一个参数为 Zepto 对象集合，那么返回的新 Zepto 对象中的元素都不包含在该参数对象中。如果参数是一个函数。仅仅包含函数执行为`false`值得时候的元素，函数的 `this` 关键字指向当前循环元素。

与它相反的功能，查看 `filter`。

### offset

- `offset()   ⇒ Promise<object>`
- `offset(coordinates)   ⇒ self`
- `offset(function(index, oldOffset){ ... })   ⇒ self`

获得当前元素相对于 document 的位置。返回一个对象含有： `top`, `left`, `width`和`height`。

### offsetParent

- `offsetParent()   ⇒ collection`

找到第一个定位过的祖先元素，意味着它的 css 中的 `position` 属性值为“relative”, “absolute” or “fixed”

### parent

- `parent([selector])   ⇒ collection`

获取对象集合中每个元素的直接父元素。如果 css 选择器参数给出。过滤出符合条件的元素。

### parents

- `parents([selector])   ⇒ collection`

获取对象集合每个元素所有的祖先元素。如果 css 选择器参数给出，过滤出符合条件的元素。

如果想获取直接父级元素，使用 `parent`。如果只想获取到第一个符合 css 选择器的元素，使用`closest`。

```js
$('h1').parents() //=> [<div#container>, <body>, <html>]
```

### position

- `position()   ⇒ object`

获取对象集合中第一个元素的位置。相对于 `offsetParent`。当绝对定位的一个元素靠近另一个元素的时候，这个方法是有用的。

```js
var pos = element.position()

// position a tooltip relative to the element
$('#tooltip').css({
  position: 'absolute',
  top: pos.top - 30,
  left: pos.left,
})
```

### prepend

- `prepend(content)   ⇒ self`

将参数内容插入到每个匹配元素的前面（注：元素内部插入）。插入 d 的元素可以试 html 字符串片段，一个 dom 节点，或者一个节点的数组。

```js
$('ul').prepend('<li>first list item</li>')
```

### prependTo

- `prependTo(target)   ⇒ self`

将所有元素插入到目标前面（注：元素内部插入）。这有点像`prepend`，但是是相反的方式。

```js
$('<li>first list item</li>').prependTo('ul')
```

### prev

- `prev()   ⇒ collection`
- `prev(selector)   ⇒ collection`

获取对象集合中每一个元素的前一个兄弟节点，通过选择器来进行过滤。

### prop

- `prop(name)   ⇒ value`
- `prop(name, value)   ⇒ self`
- `prop(name, function(index, oldValue){ ... })   ⇒ self`

读取或设置 dom 元素的属性值。它在读取属性值的情况下优先于 `attr`，因为这些属性值会因为用户的交互发生改变，如`checked` 和 `selected`。

简写或小写名称，比如`for`, `class`, `readonly`及类似的属性，将被映射到实际的属性上，比如`htmlFor`, `className`, `readOnly`, 等等。

### remove

- `remove()   ⇒ self`

从其父节点中删除当前集合中的元素，有效的从 dom 中移除。

### removeAttr

- `removeAttr(name)   ⇒ self`

移除当前对象集合中所有元素的指定属性。

### removeClass

- `removeClass([name])   ⇒ self`
- `removeClass(function(index, oldClassName){ ... })   ⇒ self`

移除当前对象集合中所有元素的指定 class。如果没有指定 name 参数，将移出所有的 class。多个 class 参数名称可以利用空格分隔。下例移除了两个 class。

```js
$('#check1').removeClass('test')
```

### removeProp

- `removeProp(name)   ⇒ self`

从集合的每个 DOM 节点中删除一个属性。这是用 JavaScript 的`delete`操作符完成。值得注意的是如果尝试删除 DOM 的一些内置属性，如`className`或`maxLength`，将不会有任何效果，因为浏览器禁止删除这些属性。

### replaceWith

- `replaceWith(content)   ⇒ self`

用给定的内容替换所有匹配的元素。(包含元素本身)。content 参数可以为 `before`中描述的类型。

### scrollLeft

- `scrollLeft() => Promise<number>`
- `scrollLeft(value)   ⇒ self`

获取或设置页面上的滚动元素或者整个窗口向右滚动的像素值。

```js
const height = await $('#foo').scrollLeft() // => 123
```

### scrollTop

- `scrollTop() => Promise<number>`
- `scrollTop(value)   ⇒ self`

获取或设置页面上的滚动元素或者整个窗口向下滚动的像素值。

```js
const height = await $('#foo').scrollTop() // => 123
```

### show

- `show()   ⇒ self`

### siblings

- `siblings([selector])   ⇒ collection`

获取对象集合中所有元素的兄弟节点。如果给定 CSS 选择器参数，过滤出符合选择器的元素。

### size

- `size()   ⇒ number`

获取对象集合中元素的数量。

### slice

- `slice(start, [end])   ⇒ array`

提取这个数组 array 的子集，从`start`开始，如果给定`end`，提取从从`start`开始到`end`结束的元素，但是不包含`end`位置的元素。

### text

- `text()   ⇒ string`
- `text(content)   ⇒ self`
- `text(function(index, oldText){ ... })   ⇒ self`

获取或者设置所有对象集合中元素的文本内容。当没有给定 content 参数时，返回当前对象集合中第一个元素的文本内容（包含子节点中的文本内容）。当给定 content 参数时，使用它替换对象集合中所有元素的文本内容。它有待点似 html，与它不同的是它不能用来获取或设置 HTML。

### toggle

- `toggle([setting])   ⇒ self`

显示或隐藏匹配元素。如果 `setting` 为 `true`，相当于 `show()` 。如果`setting`为`false`。相当于 `hide()`。

### toggleClass

- `toggleClass(names, [setting])   ⇒ self`
- `toggleClass(function(index, oldClassNames){ ... }, [setting])   ⇒ self`

在匹配的元素集合中的每个元素上添加或删除一个或多个样式类。如果 class 的名称存在则删除它，如果不存在，就添加它。如果 setting 的值为真，这个功能类似于 addClass，如果为假，这个功能类似与 removeClass。

### unwrap

- `unwrap()   ⇒ self`

移除集合中每个元素的直接父节点，并把他们的子元素保留在原来的位置。 基本上，这种方法删除上一的祖先元素，同时保持 DOM 中的当前元素。

### val

- `val()   ⇒ string`
- `val(value)   ⇒ self`
- `val(function(index, oldValue){ ... })   ⇒ self`

获取或设置匹配元素的值。当没有给定 value 参数，返回第一个元素的值。当给定 value 参数，那么将设置所有元素的值。

### width

- `width()   ⇒ Promise<number>`
- `width(value)   ⇒ self`
- `width(function(index, oldWidth){ ... })   ⇒ self`

获取对象集合中第一个元素的宽；或者设置对象集合中所有元素的宽。

```js
await $('#foo').width() // => 123
```

## 事件

### off

- `off(type, [selector], function(e){ ... })   ⇒ self`
- `off({ type: handler, type2: handler2, ... }, [selector])   ⇒ self`
- `off(type, [selector])   ⇒ self`
- `off()   ⇒ self`

移除通过 on 添加的事件.移除一个特定的事件处理程序， 必须通过用`on()`添加的那个相同的函数。否则，只通过事件类型调用此方法将移除该类型的所有处理程序。如果没有参数，将移出当前元素上全部的注册事件。

### on

- `on(type, [selector], function(e){ ... })   ⇒ self`
- `on(type, [selector], [data], function(e){ ... })   ⇒ self`
- `on({ type: handler, type2: handler2, ... }, [selector])   ⇒ self`
- `on({ type: handler, type2: handler2, ... }, [selector], [data])   ⇒ self`

添加事件处理程序到对象集合中得元素上。多个事件可以通过空格的字符串方式添加，或者以事件类型为键、以函数为值的对象 方式。如果给定 css 选择器，当事件在匹配该选择器的元素上发起时，事件才会被触发（注：即事件委派，或者说事件代理）。

如果给定`data`参数，这个值将在事件处理程序执行期间被作为有用的 `event.data` 属性

事件处理程序在添加该处理程序的元素、或在给定选择器情况下匹配该选择器的元素的上下文中执行(注：this 指向触发事件的元素)。 当一个事件处理程序返回 false，preventDefault() 和 stopPropagation()被当前事件调用的情况下， 将防止默认浏览器操作，如链接。

```js
var elem = $('#content')
// observe all clicks inside #content:
elem.on('click', function(e){ ... })
// observe clicks inside navigation links in #content
elem.on('click', 'nav a', function(e){ ... })
// all clicks inside links in the document
$('#test').on('click', 'a', function(e){ ... })
// disable following any navigation link on the page
$('#test').on('click', 'nav a', false)
```

### one

- `one(type, [selector], function(e){ ... })   ⇒ self`
- `one(type, [selector], [data], function(e){ ... })   ⇒ self`
- `one({ type: handler, type2: handler2, ... }, [selector])   ⇒ self`
- `one({ type: handler, type2: handler2, ... }, [selector], [data])   ⇒ self`

和 `on()` 一样，添加一个处理事件到元素，当第一次执行事件以后，该事件将自动解除绑定，保证处理函数在每个元素上最多执行一次。

### trigger

- `trigger(event, [args])   ⇒ self`

在对象集合的元素上触发指定的事件。如果给定 args 参数，它会作为参数传递给事件函数。

```js
$('#test').trigger('tap', ['one', 'two'])
```

### triggerHandler

- triggerHandler(event, [args]) ⇒ self

和 `trigger` 一样，它只在当前元素上触发事件，但不冒泡。

---

## docs/jsx.md

---
title: JSX 简介
---

在 Taro 中，我们使用 JSX 作为一种 DSL 进而编译成各端通用的语法。 JSX 是一种看起来很像 XML 的 JavaScript 语法扩展，比起模板语言，它具有以下优点：

1. 各大编辑器和 IDE 都能提供非常良好的支持；
2. 可以做到类型安全，在编译期就能发现错误；
3. 提供语义化并且可以移动的标签；
4. 背后的社区支持非常强力；

如果你是一名新手的话，可能一开始学习一种新语法会产生一些抵触。但当你熟悉了之后，就能发现 JSX 更符合程序语言的书写逻辑，在处理一些精细复杂需求的时候也会比模板语言更为得心应手。

## 使用 JSX

请观察以下代码：

```jsx
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Home extends Component {
  render() {
    return <View>Hello World!</View>
  }
}
```

### 必须声明 `Taro` 和组件

在这段代码中，大写开头的 JSX 标签 `View` 表示它是一个 Taro 组件，尽管在整段代码中，变量 `View` 看起来并没有被调用，但也必须从 `@tarojs/components` 中引入声明。变量 `Taro` 也是一个必须引入声明的变量，因为我们在编译期和运行时会依赖这个变量做一些特殊处理。**当你引入了组件时，一定要使用，不要出现没有使用的变量。**

> 当你只用支持微信小程序时，可以不用引入组件例如 `View` 这样的声明。但我们仍然强烈推荐你在顶部引入你将要使用的组件，这样编辑器/IDE 能更好地提前发现可能出现的问题，也为将来可能需要的多端转换留有余地。

### 首字母大写与驼峰式命名

在 Taro 中，所有组件都应当首字母大写并且使用大驼峰式命名法（Camel-Case）。

例如，下面的代码将无法按预期运行：

```jsx
import Taro, { Component } from '@tarojs/taro'
// 引入一个自定义组件组件
import home_page from './page'

// 错误！组件名应该首字母大写:
class App extends Component {
  render() {
    return <home_page message="Hello World!" />
  }
}
```

为了解决这个问题，我们将 `home_page` 重命名为 `HomePage`，然后使用 `<HomePage />` 引用：

```jsx
import Taro, { Component } from '@tarojs/taro'
// 引入一个自定义组件组件
import HomePage from './page'

class App extends Component {
  render() {
    return <HomePage message="Hello World!" />
  }
}
```

> 和 React/Nerv 不一样的地方在于，Taro 不支持使用 `点表示法` 和[运行时指定类型](https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime)来引用组件，例如 `<MyComponents.DatePicker />` 这样的写法在 Taro 中是无法正确编译的。

## 属性

在 JSX 中有几种不同的方式来指定属性。

### 使用 JavaScript 表达式

你可以任意地在 JSX 当中使用 [JavaScript 表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%A1%A8%E8%BE%BE%E5%BC%8F)，在 JSX 当中的表达式要包含在大括号里。例如，在这个 JSX 中：

```jsx
<MyComponent foo={1 + 2 + 3 + 4} />
```

对于 MyComponent 来说， props.foo 的值为 10，这是 1 + 2 + 3 + 4 表达式计算得出的。

if 语句和 for 循环在 JavaScript 中不是表达式，因此它们不能直接在 JSX 中使用，所以你可以将它们放在周围的代码中。

```jsx
import Taro, { Component } from '@tarojs/taro'

class App extends Components {
  render() {
    let description

    if (this.props.number % 2 == 0) {
      description = <Text>even</Text>
    } else {
      description = <Text>odd</Text>
    }

    return (
      <View>
        {this.props.number} is an {description} number
      </View>
    )
  }
}
```

### 字符串常量

你可以将字符串常量作为属性值传递。下面这两个 JSX 表达式是等价的：

```jsx
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```

### 默认为 True

如果你没有给属性传值，它默认为 true。因此下面两个 JSX 是等价的：

```jsx
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

> 和 React/Nerv 的不同：
> React 可以使用 `...` 拓展操作符来传递属性，但在 Taro 中你不能这么做。例如：
>
> ```jsx
> const props = { firstName: 'Plus', lastName: 'Second' }
> return <Greeting {...props} />
> ```
>
> 这样的操作会报错。你只能手动地把所有需要引用的 props 写上去：
> `<Greeting firstName="Plus" lastName="Second" />`

### 嵌套

如果 JSX 标签是闭合式的，那么你需要在结尾处用 `/>`, 就好像 XML/HTML 一样：

```jsx
const element = <Image src={user.avatarUrl} />
```

JSX 标签同样可以相互嵌套：

```jsx
const element = (
  <View>
    <Text>Hello!</Text>
    <Text>Good to see you here.</Text>
  </View>
)
```

JavaScript 表达式也可以嵌套：

```jsx
render () {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((todo) => <Text>{todo}</Text>)}
    </ul>
  )
}
```

### 布尔值、Null 和 Undefined 被忽略

`false`、`null`、`undefined` 和 `true` 都是有效的 children，但它们不会直接被渲染。下面的表达式是等价的：

```jsx
<View />

<View></View>

<View>{false}</View>

<View>{null}</View>

<View>{undefined}</View>

<View>{true}</View>
```

这在根据条件来确定是否渲染 元素时非常有用。以下的 JSX 只会在 showHeader 为 true 时渲染 `<Header />` 组件。

```jsx
<View>
  {showHeader && <Header />}
  <Content />
</View>
```

---

## docs/list.md

---
title: 列表渲染
---

首先，让我们看下在 Javascript 中如何转化列表：

如下代码，我们使用 `map()` 函数让数组中的每一项翻倍,我们得到了一个新的数列 `doubled` 。

```jsx
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((number) => number * 2)
console.log(doubled)
```

代码打印出 `[2, 4, 6, 8, 10]`。

在 Taro 中，把数组转化为数列元素的过程是相似的。

## 渲染多个组件

下面，我们使用 JavaScript 中的 `map()` 方法遍历 `numbers` 数组。对数组中的每个元素返回 `<Text>` 标签，最后我们得到一个数组 `listItems`：

```jsx
const numbers = [...Array(100).keys()] // [0, 1, 2, ..., 98, 99]
const listItems = numbers.map((number) => {
  return <Text className="li"> 我是第 {number + 1} 个数字</Text>
})
```

这段代码生成了一个 1 到 100 的数字列表。

## Keys

但是在上面的代码，你会得到一个报错：提醒你当循环一个数组时应该提供 keys。Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 Nerv/小程序 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。

```jsx
const numbers = [...Array(100).keys()] // [0, 1, 2, ..., 98, 99]
const listItems = numbers.map((number) => {
  return (
    <Text key={String(number)} className="li">
      我是第 {number + 1} 个数字
    </Text>
  )
})
```

## taroKeys

`taroKey` 适用于循环渲染原生小程序组件，赋予每个元素唯一确定标识，转换为小程序的 `wx:key`。

```jsx
const numbers = [...Array(100).keys()] // [0, 1, 2, ..., 98, 99]
const listItems = numbers.map((number) => {
  return (
    // native component
    <g-list taroKey={String(number)} className="g-list">
      我是第 {number + 1} 个数字
    </g-list>
  )
})
```

### 元素的 key 在他的兄弟元素之间应该唯一

数组元素中使用的 key 在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key：

```jsx
class App extends Componenet {
  state = {
    posts: [
      { id: 1, title: 'Hello World', content: 'Welcome to learning Taro!' },
      { id: 2, title: 'Installation', content: 'You can install Taro from npm.' },
    ],
  }
  render() {
    const { posts } = this.state
    const sidebar = (
      <View>
        {posts.map((post) => (
          <Text key={post.id}>{post.title}</Text>
        ))}
      </View>
    )
    const content = posts.map((post) => {
      return (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
        </View>
      )
    })
    return (
      <View>
        {sidebar}
        <View className="divider" />
        {content}
      </View>
    )
  }
}
```

key 会作为给 Taro 的提示，但不会传递给你的组件。如果您的组件中需要使用和 key 相同的值，请将其作为属性传递：

```jsx
const content = posts.map((post) => {
  return (
    <View key={post.id} id={post.id}>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  )
})
```

### key 的取值

key 的取值必须同时满足三个条件：

1. 稳定
2. 可预测
3. 唯一（相对于其他兄弟元素）

最好的 key 就是数组里的 ID（通常由后端生成），他能同时满足以上三个条件，同时也不需要自己去生成。如果没有 ID，你能保证数组的元素某个键值字符串都是不同的（例如 `item.title`），那么使用那个字符串键值也可以。如果源数据没有提供很好的 key 值，或者需要遍历的数组生成的。那么你最好在数据创建或者修改之后给他添加一个好的 key 值：

```jsx
let todoCounter = 0
function createNewTodo(text) {
  return {
    completed: false,
    id: todoCounter++,
    text
  }
}

class App extends Components {
  state = {
    todos: [],
    inputText: ''
  }

  onNewTodo () {
    this.setState({
      todos: [...this.state.todos, createNewTodo(this.state.inputText)]
    })
  }

  render () {
    return ...
  }
}
```

每一个在渲染结果上一致组件的应该对应一个相同的 key。因此使用数组的 `index` 或在数组渲染时随机生成一个 key 值（但你在创建数组时可以这么做）都是反优化，极端情况下甚至可能导致渲染出错。

## 与 React 的不同

在 React 中，JSX 是会编译成普通的 JS 的执行，每一个 JSX 元素，其实会通过 `createElement` 函数创建成一个 JavaScript 对象（React Element），因此实际上你可以这样写代码 React 也是完全能渲染的：

```jsx
const list = this.state.list
  .map((l) => {
    if (l.selected) {
      return <li>{l.text}</li>
    }
  })
  .filter(React.isValidElement)
```

你甚至可以这样写：

```jsx
const list = this.state.list
  .map((l) => {
    if (l.selected) {
      return {
        $$typeof: Symbol(react.element),
        props: {
          children: l.text,
        },
        type: 'li',
      }
    }
  })
  .filter(React.isValidElement)
```

但是 Taro 中，JSX 会编译成微信小程序模板字符串，**因此你不能把 `map` 函数生成的模板当做一个数组来处理**。当你需要这么做时，应该先处理需要循环的数组，再用处理好的数组来调用 map 函数。例如上例应该写成：

```jsx
const list = this.state.list
  .filter((l) => l.selected)
  .map((l) => {
    return <li>{l.text}</li>
  })
```

---

