## docs/mobx.md

---
title: 使用 MobX
---

> 自 `1.2.0-beta.1` 开始支持

[MobX](https://mobx.js.org/) 为复杂项目中状态管理提供了一种简单高效的机制；Taro 提供了 `@tarojs/mobx` 来让开发人员在使用 MobX 的过程中获得更加良好的开发体验。

## 安装

```bash
$ yarn add mobx@4.8.0 @tarojs/mobx @tarojs/mobx-h5 @tarojs/mobx-rn
# 或者使用 npm
$ npm install --save mobx@4.8.0 @tarojs/mobx @tarojs/mobx-h5 @tarojs/mobx-rn
```

## API

### onError

Mobx 异常监听。

```jsx
import { onError } from '@tarojs/mobx'

onError((error) => {
  console.log('mobx global error listener:', error)
})
```

### isUsingStaticRendering

> 自 `1.3.6` 开始支持

判断是否开启了服务端渲染（该状态为全局状态）。

```jsx
import { isUsingStaticRendering } from '@tarojs/mobx'

if (isUsingStaticRendering()) {
  //...
}
```

### useStaticRendering

> 自 `1.3.6` 开始支持

服务端渲染状态设置（该状态为全局状态）。

```jsx
import { useStaticRendering } from '@tarojs/mobx'

useStaticRendering(false)
```

### useLocalStore

> 自 `1.3.6` 开始支持

将对象转换为 `observable` 对象，其中 `getter` 会被转换为 `computed` 属性，方法会与 `store` 进行绑定并自动执行
[mobx transactions](https://mobx.js.org/refguide/action.html)，比如：

```jsx
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { useLocalStore, observer } from '@tarojs/mobx'

import './index.scss'

function Index() {
  const store = useLocalStore(() => ({
    counter: 0,
    increment() {
      store.counter++
    },
    decrement() {
      store.counter--
    },
    incrementAsync() {
      setTimeout(() => store.counter++, 1000)
    },
  }))

  const { counter, increment, decrement, incrementAsync } = store
  return (
    <View>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  )
}

export default observer(Index)
```

### useAsObservableSource

> 自 `1.3.6` 开始支持

与 `useLocalStore` 的区别是，它将纯（不包含 `getter` 或方法）对象转换为 `observable`，主要使用场景为：

- 如果对象某个属性的值需经过复杂运算才能获得，可通过该方法进行包装，这样在组件的生命周期中该运算只需要运算一次。
- 一般情况下 `useLocalStore` 仅用于组件内部，如果 `useLocalStore` 中的对象需要依赖外部传递的属性，那么可通过
  `useAsObservableSource` 将这些属性进行转换，而后在 `useLocalStore` 对象中进行引用，这样在外部属性改变时自动通知
  `useLocalStore` 对象对变化进行响应，比如：

  ```jsx
  import Taro from '@tarojs/taro'
  import { View, Button, Text } from '@tarojs/components'
  import { useAsObservableSource, useLocalStore, observer } from '@tarojs/mobx'

  function Multiplier(props) {
    const observableProps = useAsObservableSource(props)
    const store = useLocalStore(() => ({
      counter: 1,
      get multiplied() {
        return observableProps.multiplier * store.counter
      },
      increment() {
        store.counter += 1
      },
    }))
    const { multiplier } = observableProps
    const { multiplied, counter, increment } = store
    return (
      <View>
        <Text>
          multiplier({multiplier}) * counter({counter}) = {multiplied}
        </Text>
        <Button onClick={increment}>Increment Counter</Button>
      </View>
    )
  }

  export default observer(Multiplier)
  ```

  该场景也可直接使用 `useLocalStore` 中的第二种用法来实现：

  ```jsx
  import Taro from '@tarojs/taro'
  import { View, Button, Text } from '@tarojs/components'
  import { useLocalStore, observer } from '@tarojs/mobx'

  function Multiplier(props) {
    const store = useLocalStore(
      (source) => ({
        counter: 1,

        get multiplier() {
          return source.multiplier
        },

        get multiplied() {
          return source.multiplier * store.counter
        },
        increment() {
          store.counter += 1
        },
      }),
      props
    )
    const { multiplied, counter, increment, multiplier } = store
    return (
      <View>
        <Text>
          multiplier({multiplier}) * counter({counter}) = {multiplied}
        </Text>
        <Button onClick={increment}>Increment Counter</Button>
      </View>
    )
  }

  export default observer(Multiplier)
  ```

### observer

将组件设置为监听者，以便在可观察对象的值改变后触发页面的重新渲染。

注：

- 不要在 `JSX` 中对可观察对象进行引用，比如：

  ```jsx
  // 错误，在小程序中值改变后将无法触发重新渲染
  const { counterStore } = this.props
  return <Text>{counterStore.counter}</Text>

  // 正确
  const {
    counterStore: { counter },
  } = this.props
  return <Text>{counter}</Text>
  ```

  > 这是因为 `@tarojs/mobx` 通过监听组件的 `render`（小程序编译后为 `_createData`）方法来触发更新；在小程序中，`JSX`
  > 的代码会被编译到 `wxml` 文件中，此时对可观察对象的引用（比如：`counterStore.counter`）早已脱离了
  > `@tarojs/mobx` 的监控，故此对该属性的更改并不会触发更新操作。

- 如使用 `@observable` 装饰器来定义可观察对象时，请确保该属性已经初始化，比如：

  ```js
  @observable counter // 错误，值改变后将无法触发重新渲染
  @observable counter = 0 // 正确
  ```

- 如果 `isUsingStaticRendering` 为 `true`，该方法不做任何事情。

### Provider

全局 `store` 设置，比如：

```jsx
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import counterStore from './store/counter'

const store = {
  counterStore,
}

class App extends Component {
  config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
```

注：

- `Provider` 必须作用于入口文件（即：`src/app.js`），在其他地方使用无效。
- 不支持嵌套，即全局只能存在一个 `Provider`。
- 在 `mobx-react` 中，可通过以下方式设置 `store`：

  ```jsx
  <Provider store1={xxxx} store2={xxxx}>
    <XXX />
  </Provider>
  ```

  而在 `@tarojs/mobx` 中，我们需要使用以下方式设置：

  ```jsx
  const store = {
    store1: xxxx,
    store2: xxxx
  }
  <Provider store={store}>
    <XXX />
  </Provider>
  ```

### inject

将 `Provider` 中设置的 `store` 提取到组件的 `props` 中，该 `API` 只适用于`类组件`，比如：

```jsx
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

@inject('counterStore')
@observer
class Index extends Component {
  //...
}

export default Index
```

或

```jsx
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

@inject((stores, props) => ({
  counterStore: stores.counterStore,
}))
@observer
class Index extends Component {
  //...
}

export default Index
```

注：

- 无论以何种方式使用 `inject`，其后的 `observer` 均不能省略。
- 不要在 `inject` 中引用可观察对象，这将导致属性改变后页面不更新，比如：

  ```jsx
  // 错误
  @inject((stores, props) => ({
    counter: stores.counterStore.counter
  }))

  // 正确
  @inject((stores, props) => ({
    counterStore: stores.counterStore
  }))
  ```

### PropTypes

> 自 `1.3.6` 开始支持

`@tarojs/mobx` 提供了以下 `PropTypes` 来验证 Mobx 的结构：

- observableArray
- observableArrayOf
- observableMap
- observableObject
- arrayOrObservableArray
- arrayOrObservableArrayOf
- objectOrObservableObject

## 资源

示例：[taro-mobx-sample](https://github.com/nanjingboy/taro-mobx-sample)

---

## docs/pinia.md

---
title: Vue3 Pinia
---

Taro Vue3 支持使用 [Pinia](https://pinia.vuejs.org/) 进行状态管理。

## 安装

```bash
$ yarn add pinia
# 或者使用 npm
$ npm install pinia
```

> pinia@2.0.22 已经解决了这个问题（[#967](https://github.com/vuejs/pinia/pull/967)）, 所以你可能不再需要这个插件

## 例子

- 运行 `taro init` 命令时选择 Vue3 -> pinia 即可创建 vue3-pinia 模板项目
- [Todo App](https://github.com/NervJS/taro-todos-pinia)

## 使用

### 创建 Pinia 实例

```js title="src/app.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const App = createApp({})

App.use(createPinia())

export default App
```

### 创建 `store`

在项目中新建 `src/store/index.js` 文件用来配置 `store`：

```js title="src/store/index.js"
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

### 使用 store 定义的数据与方法

```html
<template>
  <view>
    <text>{{ counter.count }}</text>
    <view @tap="onAdd">ADD</view>
  </view>
</template>

<script>
  import { useCounterStore } from '../stores'

  export default {
    setup() {
      const counter = useCounterStore()

      const onAdd = () => {
        counter.count++
      }

      return {
        counter,
        onAdd,
      }
    },
  }
</script>
```

---

## docs/redux.md

---
title: React Redux
---

在 Taro 中可以自由地使用 React 生态中非常流行的数据流管理工具 [Redux](https://redux.js.org/) 来解决复杂项目的数据管理问题。

## 安装

首先请安装 `redux` 、 `react-redux` 和 `redux-thunk` 、 `redux-logger` 等一些需要用到的 redux 中间件：

```bash
$ yarn add redux react-redux redux-thunk redux-logger
# 或者使用 npm
$ npm install --save redux react-redux redux-thunk redux-logger
```

## 例子

- 运行 `taro init` 命令时选择 React -> redux 即可创建 react-redux 模板项目
- [Todo App](https://github.com/NervJS/TodoMVC)

## 使用

### 创建 `store` 与配置中间件

在项目中新建 `src/store/index.js` 文件用来配置 `store`，按自己喜好设置 redux 的中间件，例如下面例子中使用了 `redux-thunk` 和 `redux-logger` 这两个中间件：

```jsx title="src/store/index.js"
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
)

export default function configStore() {
  const store = createStore(rootReducer, enhancer)
  return store
}
```

接下来在项目入口文件 `app.js` 中使用 react-redux 中提供的 `Provider` 组件将上一步写好的 `store` 接入应用中：

```jsx title="src/app.js"
import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'

const store = configStore()

class App extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
```

随后就可以开始使用了。如 `redux` 推荐的那样，可以增加：

- `constants` 目录，用来放置所有的 `action type` 常量。
- `actions` 目录，用来放置所有的 `actions`。
- `reducers` 目录，用来放置所有的 `reducers`。

接下来将演示如何使用 redux 开发一个简单的加、减计数器功能。

### 新增 `action type`

```jsx title="src/constants/counter.js"
export const ADD = 'ADD'
export const MINUS = 'MINUS'
```

### 新增 `reducers`

```jsx title="src/reducers/counter.js"
import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1,
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1,
      }
    default:
      return state
  }
}
```

```jsx title="src/reducers/index.js"
import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
  counter,
})
```

### 新增 `actions`

```jsx title="src/actions/counter.js"
import { ADD, MINUS } from '../constants/counter'

export const add = () => {
  return {
    type: ADD,
  }
}
export const minus = () => {
  return {
    type: MINUS,
  }
}

// 异步的 action
export function asyncAdd() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
```

### 在页面、组件中使用 `store`

最后，我们可以在页面（或者组件）中进行使用，我们将通过 react-redux 提供的 `connect` 方法将 `store` 与我们的页面进行连接：

```jsx title="src/pages/index/index.js"
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    },
  })
)
class Index extends Component {
  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
      </View>
    )
  }
}

export default Index
```

`connect` 方法接受两个参数 `mapStateToProps` 与 `mapDispatchToProps`

- `mapStateToProps`，函数类型，接受最新的 `state` 作为参数，用于将 `state` 映射到组件的 `props`
- `mapDispatchToProps`，函数类型，接收 `dispatch()` 方法并返回期望注入到展示组件的 `props` 中的回调方法

## React Redux Hooks

在**函数式组件**中可以使用 react-redux 提供的 Hooks API 连接、操作 `store`。

### `useSelector`

[useSelector](https://react-redux.js.org/api/hooks#useselector) 允许你使用 selector 函数从 store 中获取数据。

```ts title="使用"
const result: any = useSelector(selector: Function, equalityFn?: Function)
```

selector 函数大致相当于 `connect` 函数的 `mapStateToProps` 参数。selector 会在组件每次渲染时调用。`useSelector` 同样会订阅 redux store，在 redux action 被 dispatch 时调用。

但 `useSelector` 还是和 `mapStateToProps` 有一些不同：

- 不像 `mapStateToProps` 只返回对象一样，selector 可能会返回任何值。
- 当一个 action dispatch 时，`useSelector` 会把 selector 的前后返回值做一次浅对比，如果不同，组件会强制更新。
- selector 函数不接受 `ownProps` 参数。但 selector 可以通过闭包访问函数式组件传递下来的 props。

#### 使用案例

基本使用：

```jsx
import { Component } from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <View>{counter}</View>
}
```

使用闭包决定如何 select 数据：

```jsx
export const TodoListItem = (props) => {
  const todo = useSelector((state) => state.todos[props.id])
  return <View>{todo.text}</View>
}
```

进阶使用：

你还可以访问 [react-redux 文档](https://react-redux.js.org/api/hooks#using-memoizing-selectors) 了解如何使用 `reselect` 缓存 selector。

### `useDispatch`

[useDispatch](https://react-redux.js.org/api/hooks#usedispatch) 返回 redux store 的 `dispatch` 引用。你可以使用它来 dispatch actions。

```js title="使用"
const dispatch = useDispatch()
```

#### 使用案例

```jsx
import { Component } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <View>
      <Text>{value}</Text>
      <Button onClick={() => dispatch({ type: 'increment-counter' })}>Increment counter</Button>
    </View>
  )
}
```

当我们使用 `dispatch` 传递回调到一个子组件时，推荐使用 `useCallback` 把回调缓存起来，因为组件可能因为引用改变而重新渲染。

```jsx
// CounterComponent.js
export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(() => dispatch({ type: 'increment-counter' }), [dispatch])

  return (
    <View>
      <Text>{value}</Text>
      <MyIncrementButton onIncrement={incrementCounter} />
    </View>
  )
}

// IncrementButton.js
const MyIncrementButton = ({ onIncrement }) => <Button onClick={onIncrement}>Increment counter</Button>

export default Taro.memo(MyIncrementButton)
```

### `useStore`

[useStore](https://react-redux.js.org/api/hooks#usestore) 返回一个 store 引用，和 `Provider` 组件引用完全一致。

```js title="使用"
const store = useStore()
```

> 这个 hook 可能并不经常使用。`useSelector` 大部分情况是你的第一选择，如果需要替换 reducers 的情况下可能会使用到这个 API。

#### 使用案例

```jsx
import { Component } from 'react'
import { useStore } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const store = useStore()

  // EXAMPLE ONLY! Do not do this in a real app.
  // The component will not automatically update if the store state changes
  return <div>{store.getState()}</div>
}
```

## 持久化

开发者可以使用 [redux-presist](https://github.com/rt2zz/redux-persist) 对 store 的数据进行持久化。

用法及相关讨论请参考 [#6548](https://github.com/NervJS/taro/issues/6548)，其中有两个需要注意的点：

- 配置 `persistConfig` 把 storage API 替换为 Taro Storage API，请参考 [redux-persist-taro-storage](https://github.com/imtcn/redux-persist-taro-storage)。
- `<PersistGate>` 的使用，请参考 [@ryougifujino 的回答](https://github.com/NervJS/taro/issues/6548#issuecomment-816529998)。

---

## docs/render-props.md

---
title: Render Props
---

> 自 1.3.5 起支持

`render props` 是指一种在 Taro 组件之间使用一个值为函数的 prop 共享代码的简单技术。

具有 render prop 的组件接受一个函数，该函数返回一个 Taro 元素并调用它而不是实现自己的渲染逻辑。

举个例子，假设我们有一个组件，它可以呈现一张在屏幕上追逐鼠标的猫的图片。我们或许会使用 `<Cat mouse={{ x, y }} prop />` 来告诉组件鼠标的坐标以让它知道图片应该在屏幕哪个位置。

我们可以提供一个带有函数 prop 的 `<Mouse>` 组件，它能够动态决定什么需要渲染的，而不是将 `<Cat>` 硬编码到 `<Mouse>` 组件里，并有效地改变它的渲染结果。

```jsx
// cat.js
import catImage from './cat.jpg'
class Cat extends Taro.Component {
  static defaultProps = {
    mouse: {
      x: 0,
      y: 0,
    },
  }

  render() {
    const { mouse } = this.props
    return <Image src={catImage} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  }
}

// mouse.js
class Mouse extends Taro.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleClick.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleClick(event) {
    const { x, y } = event.detail
    this.setState({
      x,
      y,
    })
  }

  render() {
    return (
      <View style={{ height: '100%' }} onClick={this.handleClick}>
        {/*
          我们可以把 prop 当成一个函数，动态地调整渲染内容。
        */}
        {this.props.renderCat(this.state)}
      </View>
    )
  }
}

// MouseTracker.js
class MouseTracker extends Taro.Component {
  render() {
    return (
      <View>
        <View>点击鼠标!</View>
        {/*
          Mouse 如何渲染由 MouseTracker 的状态控制
        */}
        <Mouse renderCat={(mouse) => <Cat mouse={mouse} />} />
      </View>
    )
  }
}
```

现在，我们提供了一个 render 方法 让 `<Mouse>` 能够动态决定什么需要渲染，而不是克隆 `<Mouse>` 组件然后硬编码来解决特定的用例。

更具体地说，**render prop 是一个用于告知组件需要渲染什么内容的函数 prop**。

这项技术使我们共享行为非常容易。要获得这个行为，只要渲染一个带有 render prop 的 `<Mouse>` 组件就能够告诉它当前鼠标坐标 (x, y) 要渲染什么。

### 注意事项

**`render props` 是基于小程序 `slot` 机制实现的。** 因此它受到的限制和 `children 与组合`的限制一样多，更多详情请查看文档[Children 与组合](./children.md#注意事项)。

---

## docs/state.md

---
title: 生命周期 & State
---

在本节中，我们将学习如何重用和封装一个 Clock 组件。它将设置自己的计时器，并每秒钟更新一次。

我们可以从封装时钟开始：

```jsx
class Clock extends Component {
  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    )
  }
}
```

Clock 现在被定义为一个类，使用类就允许我们使用其它特性，例如局部状态、生命周期钩子。

## 为一个类添加局部状态

首先，我们需要添加一个类构造函数来初始化状态 `this.state`：

```jsx
class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    )
  }
}
```

注意我们如何传递 props 到基础构造函数的：

```jsx
constructor (props) {
  super(props)
  this.state = { date: new Date() }
}
```

类组件应始终使用 props 调用基础构造函数。
接下来，我们将使 Clock 设置自己的计时器并每秒更新一次。

## 将生命周期方法添加到类中

在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要。

每当 `Clock` 组件第一次加载到 DOM 中的时候，我们都想生成定时器，这在 Taro/React 中被称为挂载。

同样，每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 Taro/React 中被称为卸载。

我们可以在组件类上声明特殊的方法，当组件挂载或卸载时，来运行一些代码：

```jsx
class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    )
  }
}
```

这些方法被称作生命周期钩子。

当组件输出到 DOM 后会执行 `componentDidMount()` 钩子，这是一个建立定时器的好地方：

```jsx
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  )
}
```

注意我们如何在 this 中保存定时器 ID。

虽然 `this.props` 由 Taro 本身设置以及 `this.state` 具有特殊的含义，但如果需要存储不用于视觉输出的东西，则可以手动向类中添加其他字段。

如果你不在 `render()` 中使用某些东西，它就不应该在状态中。

我们将在 `componentWillUnmount()` 生命周期钩子中卸载计时器：

```jsx
componentWillUnmount () {
  clearInterval(this.timerID)
}
```

最后，我们实现了每秒钟执行的 `tick()` 方法。

它将使用 `this.setState()` 来更新组件局部状态：

```jsx
import Taro, { Component } from '@tarojs/taro'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    )
  }
}
```

## 正确地使用 State

关于 setState() 这里有三件事情需要知道：

### 不要直接更新状态

例如，此代码不会重新渲染组件：

```jsx
// Wrong
this.state.comment = 'Hello'
```

应当使用 `setState()`:

```jsx
// Correct
this.setState({ comment: 'Hello' })
```

`setState()` 函数是唯一能够更新 `this.state` 的地方。

### 状态更新一定是异步的

Taro 可以将多个 `setState()` 调用合并成一个调用来提高性能。

因为 `this.state` 和 `props` 一定是异步更新的，所以你不能在 `setState` 马上拿到 `state` 的值，例如：

```jsx
// 假设我们之前设置了 this.state.counter = 0
updateCounter () {
  this.setState({
    counter: 1
  })
  console.log(this.state.counter) // 这里 counter 还是 0
}
```

正确的做法是这样，在 `setState` 的第二个参数传入一个 callback：

```jsx
// 假设我们之前设置了 this.state.counter = 0
updateCounter () {
  this.setState({
    counter: 1
  }, () => {
    // 在这个函数内你可以拿到 setState 之后的值
  })
}
```

> 这是 Taro 和 React 另一个不同的地方：React 的 `setState` 不一定总是异步的，他内部有一套事务机制控制，且 React 15/16 的实现也各不相同。而对于 Taro 而言，`setState` 之后，你提供的对象会被加入一个数组，然后在执行下一个 [eventloop](https://github.com/aooy/blog/issues/5) 的时候合并它们。

### state 更新会被合并

当你调用 `setState()`，Taro 将合并你提供的对象到当前的状态中。

例如，你的状态可能包含几个独立的变量：

```jsx
constructor(props) {
  super(props)
  this.state = {
    posts: [],
    comments: []
  }
}
```

然后通过调用独立的 `setState()` 调用分别更新它们:

```jsx
componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    })
  })
}
```

合并是浅合并，所以 `this.setState({comments})` 不会改变 `this.state.posts` 的值，但会完全替换 `this.state.comments` 的值。

---

## docs/vuex.md

---
title: Vue2 Vuex
---

Taro Vue2 支持使用 [Vuex](https://vuex.vuejs.org/) 进行状态管理。

## 安装

首先请安装 `vuex` 的 3.x 版本：

```bash
$ yarn add vuex@^3
# 或者使用 npm
$ npm install vuex@^3
```

## 例子

- 运行 `taro init` 命令时选择 Vue -> vuex 即可创建 vue2-redux 模板项目。

## 使用

在项目中新建 `src/store/index.js` 文件用来配置 `store`，根据需求设置 `state`、`mutations`、`actions`、`getters`：

```js title="src/store/index.js"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
```

为了在组件中可以通过 `this.$store` 获取到 store，我们需要把 store 注入到 Vue 实例中：

```js title="src/app.js"
import Vue from 'vue'
import store from './store'

const App = {
  store,
  render(h) {
    return h('block', this.$slots.default)
  },
}

export default App
```

接下来即可以在 Vue 组件中使用 store 了，如：

```js
this.$store.dispatch('addNumber', 1)
```

---

