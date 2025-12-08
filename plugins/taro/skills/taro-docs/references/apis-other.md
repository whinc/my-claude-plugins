# Taro API Documentation


---

## docs/apis/about/desc.md

---
title: API 说明
---

Taro 的 API 包括 Taro 内置提供的 API 以及对小程序的端能力 API 的封装。

其中对小程序的端能力 API 的封装，主要会基于微信小程序的 API 规范，对于其他小程序类似的 API，会在 Taro 中适配为小程序 API 的规范格式，并且都挂载在 `Taro` 命名空间下。

例如，支付宝小程序中，`my.alert` 用于弹出一个警告的模态框，而微信小程序中没有这一 API，与之类似的有 `wx.showModal`，所以在 Taro 中会将支付宝的 `my.alert` 统一为 `Taro.showModal`，从而减少一些跨平台兼容代码的书写。

而对于微信小程序中没有，而某些小程序平台特有的 API，可以先尝试用 `Taro.` + API 名称来进行调用，如果出现未定义，则使用对应小程序平台的命名空间（如 `my`、`swan`、`tt` 等）来进行调用，并反馈给我们。

当然，由于各个小程序平台的迭代非常快速，Taro 要不断跟进小程序的更新，有时候难免有些 API 没有加入 Taro 适配，你可以通过提 PR 或者 issue，来获得帮助。

同时，为了方便代码书写，Taro 默认对小程序的异步 API 进行了 `promisify` 化，你可以像使用 Promise 那样进行调用，例如

```js
import Taro from '@tarojs/taro'

Taro.request(url).then(function (res) {
  console.log(res)
})
```

---

## docs/apis/about/env.md

---
title: 环境判断
---

## Taro.ENV_TYPE

`ENV_TYPE.WEAPP` 微信小程序环境

`ENV_TYPE.SWAN` 百度小程序环境

`ENV_TYPE.ALIPAY` 支付宝小程序环境

`ENV_TYPE.TT` 抖音小程序环境

`ENV_TYPE.WEB` WEB(H5)环境

`ENV_TYPE.RN` ReactNative 环境

`ENV_TYPE.QUICKAPP` 快应用环境

`ENV_TYPE.QQ` QQ小程序 环境

`ENV_TYPE.JD` 京东小程序 环境

`ENV_TYPE.ASCF` ASCF元服务环境

## Taro.getEnv()

获取当前环境值，具体值如上 `Taro.ENV_TYPE`

---

## docs/apis/about/events.md

---
title: 消息机制
---

Taro 提供了 `Taro.Events` 来实现消息机制，使用时需要实例化它，如下

```jsx
import Taro, { Events } from '@tarojs/taro'

const events = new Events()

// 监听一个事件，接受参数
events.on('eventName', (arg) => {
  // doSth
})

// 监听同个事件，同时绑定多个 handler
events.on('eventName', handler1)
events.on('eventName', handler2)
events.on('eventName', handler3)

// 触发一个事件，传参
events.trigger('eventName', arg)

// 触发事件，传入多个参数
events.trigger('eventName', arg1, arg2, ...)

// 取消监听一个事件
events.off('eventName')

// 取消监听一个事件某个 handler
events.off('eventName', handler1)

// 取消监听所有事件
events.off()
```

同时 Taro 还提供了一个全局消息中心 `Taro.eventCenter` 以供使用，它是 `Taro.Events` 的实例

```jsx
import Taro from '@tarojs/taro'

Taro.eventCenter.on
Taro.eventCenter.trigger
Taro.eventCenter.off
```

---

## docs/apis/about/tarocomponent.md

---
title: Taro.Component
---

`Taro.Component` 是一个抽象基础类，因此直接引用 `Taro.Component` 几乎没意义。相反，你通常会继承自它，并至少定义一个 `render()` 方法。

通常你定义一个 `Taro` 组件相当于一个纯 `JavaScript` 类：

```jsx
class Welcome extends Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

> 这里 Taro 和 React 不一样的地方在于没有暴露出一个 `createClass` 的方法，你只能用 ES6 的 class 类来创建 Taro 组件。

## 组件生命周期

每一个组件都有几个你可以重写以让代码在处理环节的特定时期运行的“生命周期方法”。方法中带有前缀 `will` 的在特定环节之前被调用，而带有前缀 `did` 的方法则会在特定环节之后被调用。

#### 装载(Mounting)

这些方法会在组件实例被创建和插入 DOM 中时被调用：

* `constructor()`
* `componentWillMount()`
* `render()`
* `componentDidMount()`

#### 更新(Updating)

属性或状态的改变会触发一次更新。当一个组件在被重新渲染时，这些方法将会被调用：

* `componentWillReceiveProps()`
* `shouldComponentUpdate()`
* `componentWillUpdate()`
* `render()`
* `componentDidUpdate()`

#### 卸载(Unmounting)

当一个组件被从 DOM 中移除时，该方法被调用：

* `componentWillUnmount()`

#### 其他 API

每一个组件还提供了其他的 API：

* `setState()`
* `forceUpdate()`

#### 类属性

* `defaultProps`

#### 实例属性

* `props`
* `state`
* `config`（小程序专属）

## 参考

### render()

`render()` 方法是必须的。

当被调用时，`render` 方法必须返回一个 Taro 组件（可以是内置组件也可以是自定义组件）或一个 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的值。

`render()` 函数应该纯净，意味着其不应该改变组件的状态，其每次调用都应返回相同的结果，同时不直接和浏览器/小程序交互。若需要和浏览器/小程序交互，将任务放在`componentDidMount()` 阶段或其他的生命周期方法。保持 `render()` 方法纯净使得组件更容易思考。

> 在 React/Nerv 中，`render()` 可以返回多种数据结构，但 Taro 暂时只支持两种。因为 Taro 必须把 JSX  编译成微信小程序模板。当 return 的值为 `falsy` 时，实际上会编译成小程序的  `wx:if` 标签。

### constructor()

```jsx
constructor(props)
```

Taro 组件的构造函数将会在装配之前被调用。当为一个 `Taro.Component` 子类定义构造函数时，你应该在任何其他的表达式之前调用 `super(props)`。否则，this.props 在构造函数中将是未定义，并可能引发异常。

构造函数是初始化状态的合适位置。若你不初始化状态且不绑定方法，那你也不需要为你的 Taro 组件定义一个构造函数。

> 在 Taro 中，即便你不写 constructor()，编译到微信小程序时也会自动给你加上，因为 Taro 运行时框架需要在 constructor() 中多做一些事情。

可以基于属性来初始化状态。这样有效地“分离（forks）”属性并根据初始属性设置状态。

### `static getDerivedStateFromProps()`

> 自 v1.3.0 起可用

```jsx
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

此方法无权访问组件实例（this）。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在 `getDerivedStateFromProps()` 和其他 class 方法之间重用代码。

和 `componentWillReceiveProps` 不同，`getDerivedStateFromProps` 会在每次 `render` 前触发此方法，而 `componentWillReceiveProps` 会在父组件重新渲染时调用。

```jsx
export default class ButtonSelectable extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isSelected: props.selected
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selected !== state.isSelected) {
      return {
        isSelected: props.selected
      };
    }

    return null;
  }

  handleClick = event => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  render() {
    return (
      <Button
        className={`B-selectable ${
          this.state.isSelected ? "button-selectable-selected" : ""
        }`}
        onClick={this.handleClick}
      >
        {this.state.isSelected ? "Selected!" : "Not selected..."}
      </Button>
    );
  }
}

```

> 请注意：
> getDerivedStateFromProps() 如果存在，`componentWillReceiveProps`、`componentWillMount` 和 `componentWillUpdate` 将不会调用。
> 当你需要在以上老生命周期 setState 时，我们更推荐你使用 getDerivedStateFromProps 方法，因为它能减少一次更新开销。

### getSnapshotBeforeUpdate()

> 自 v1.3.0 起可用

```jsx
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。

应返回 snapshot 的值（或 null）。

> 请注意：
> getSnapshotBeforeUpdate() 如果存在，`componentWillReceiveProps`、`componentWillMount` 和 `componentWillUpdate` 将不会调用。
> 当你需要在以上老生命周期 setState 时，我们更推荐你使用 `getSnapshotBeforeUpdate` 方法，因为它能减少一次更新开销。


### componentWillMount()

```jsx
componentWillMount()
```

`componentWillMount()` 在组件在装载发生前被立刻调用。

避免在该方法中引入任何的副作用或订阅。对于这些使用场景，我们推荐使用 constructor() 来替代。

这是唯一的会在服务端渲染调起的生命周期钩子函数。

> componentWillMount() 在小程序里对应的生命周期是 `onLoad`

### componentDidMount()

```jsx
componentDidMount()
```

componentDidMount() 在组件被装载后立即调用。初始化使得 DOM 节点应该进行到这里。若你需要从远端加载数据，这是一个适合实现网络请求的地方。在该方法里 `setState()` 将会触发重新渲染。

### componentWillReceiveProps()

```jsx
componentWillReceiveProps(nextProps)
```

`componentWillReceiveProps()` 在已经装载的组件接收到新属性前调用。若你需要更新状态响应属性改变，你可能需对比 `this.props` 和 `nextProps` 并在该方法中使用 `this.setState()` 处理状态改变。

注意即使属性未有任何改变，Taro 可能也会调用该方法，因此若你想要处理改变，请确保比较当前和之后的值。

在装载期间，Taro 并不会调用带有初始属性的 `componentWillReceiveProps`方法。调用 `this.setState` 通常不会触发 `componentWillReceiveProps`。

### shouldComponentUpdate()

```jsx
shouldComponentUpdate(nextProps, nextState)
```

使用 `shouldComponentUpdate()` 让 Taro 知道组件的输出是否不受 state 或 props 当前变化的影响。 默认行为是在每次 state 更改时重新渲染，并且在绝大多数情况下，你应该依赖于默认行为。

当接收到新的 props 或 state 时，`shouldComponentUpdate()` 在渲染之前被调用。 默认返回 true ，对于初始(第一次)渲染 或 使用 `forceUpdate()` 时，不调用此方法。

返回 `false` 不会阻止子组件在 state 更改时重新渲染。

### componentWillUpdate()

```jsx
componentWillUpdate(nextProps, nextState)
```

当接收到新的 props 或 state 时，`componentWillUpdate()` 在渲染之前立即被调用。在更新发生之前，使用这个方法可以作为执行准备更新的一个好机会。这个方法在第一次渲染时不会被调用。

注意，这里不能调用 `this.setState()` 。 如果你需要更新 state 以响应 props 更改，请改用 `componentWillReceiveProps()`。

如果你需要更新 state 来响应 props 的改变，可以使用 `componentWillReceiveProps()` 代替。

### componentDidUpdate()

```jsx
componentDidUpdate(prevProps, prevState)
```

`componentDidUpdate()`  在更新发生后立即被调用。 这个方法在第一次渲染时不会被调用。

### componentWillUnmount()

```jsx
componentWillUnmount()
```

`componentWillUnmount()` 在一个组件被 卸载(unmounted) 和 销毁(destroyed) 之前立即被调用。 在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求，清除一些可能会造成内存泄露的事件等。

> 在小程序中，一个挂在到 `Page`  组件的组件并不会执行 `componentWillUnmount()` 方法，只有当他挂载的 Page 组件被销毁时，该组件才会执行 `componentWillUnmount()`  方法。

### setState()

## 类属性

### defaultProps

`defaultProps` 可以被定义为组件类的一个属性，用以为类设置默认的属性。这对于未定义（undefined）的属性来说有用，而对于设为空（null）的属性并没用。例如：

```jsx
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
}
```

若未设置 `props.color`，其将被设置默认为 'blue':

```jsx
render () {
  return <CustomButton /> // props.color will be set to blue
}
```

若 props.color 设为 null，则其值则为 null：

```jsx
render() {
  return <CustomButton color={null} />  // props.color will remain null
}
```

## 实例属性

### props

`this.props` 包含了组件该调用者定义的属性。查看 [组件 & Props](../../render-props.md) 关于属性的介绍。

### state

状态是该组件的特定数据，其可能改变多次。状态由用户定义，且其应为纯 JavaScript 对象。

若你不在 `render()` 方法中使用它，那它就不应该被放在 state 中。例如，你可直接将 timer IDs 放在实例上。

查看 [生命周期 & State](../../state.md) 了解更多关于状态的信息。

永远不要直接改变 `this.state`，因为调用 `setState()` 会替换你之前做的改变。将 `this.state` 当成不可变的。

---

## docs/apis/ad/createInterstitialAd.md

---
title: Taro.createInterstitialAd(option)
sidebar_label: createInterstitialAd
---

创建插屏广告组件。
请通过 getSystemInfoSync 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createInterstitialAd.html)

## 类型

```tsx
(option: Option) => InterstitialAd
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| adUnitId | `string` | 广告单元 id |

---

## docs/apis/ad/createRewardedVideoAd.md

---
title: Taro.createRewardedVideoAd(option)
sidebar_label: createRewardedVideoAd
---

创建激励视频广告组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createRewardedVideoAd.html)

## 类型

```tsx
(option: Option) => RewardedVideoAd
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| adUnitId | `string` |  | 是 | 小程序广告位 ID<br />API 支持度: weapp, tt, swan |
| multiton | `boolean` | `false` | 否 | 是否启用多例模式<br />API 支持度: weapp |
| appSid | `string` |  | 否 | 小程序应用 ID<br />API 支持度: swan<br />swan: 必填 |

---

## docs/apis/ad/InterstitialAd.md

---
title: InterstitialAd
sidebar_label: InterstitialAd
---

插屏广告组件。插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用），默认是隐藏的，需要调用 InterstitialAd.show() 将其显示。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html)

## 方法

### destroy

销毁插屏广告实例。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html)

```tsx
() => void
```

### offClose

取消监听插屏广告关闭事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html)

```tsx
(callback: OnCloseCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnCloseCallback` |

### offError

取消监听插屏错误事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### offLoad

取消监听插屏广告加载事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html)

```tsx
(callback: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### onClose

监听插屏广告关闭事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html)

```tsx
(callback: OnCloseCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnCloseCallback` |

### onError

监听插屏错误事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### onLoad

监听插屏广告加载事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html)

```tsx
(callback: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### load

加载插屏广告。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html)

```tsx
() => Promise<any>
```

### show

显示插屏广告。

**错误码信息表**

如果插屏广告显示失败，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可以获取到错误码及对应的错误信息。

| 代码 | 异常情况 | 理由 |
| ------ | -------------- | -------------------------- |
| 2001  | 触发频率限制  | 小程序启动一定时间内不允许展示插屏广告 |
| 2002  | 触发频率限制  | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告 |
| 2003  | 触发频率限制  | 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告 |
| 2004  | 广告渲染失败  | 该项错误不是开发者的异常情况，或因小程序页面切换导致广告渲染失败 |
| 2005  | 广告调用异常  | 插屏广告实例不允许跨页面调用 |

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html)

```tsx
() => Promise<any>
```

## 参数

### OnCloseCallback

插屏广告关闭事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnErrorCallback

插屏错误事件的回调函数

```tsx
(result: OnErrorCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnErrorCallbackResult` |

### OnLoadCallback

插屏广告加载事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnErrorCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | string or number or symbol | 错误码<br />[参考地址]( /docs/apis/General#aderrcode) |
| errMsg | `string` | 错误信息 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| InterstitialAd.destroy | ✔️ |  |  |  |  |
| InterstitialAd.offClose | ✔️ |  |  |  |  |
| InterstitialAd.offError | ✔️ |  |  |  |  |
| InterstitialAd.offLoad | ✔️ |  |  |  |  |
| InterstitialAd.onClose | ✔️ |  |  |  |  |
| InterstitialAd.onError | ✔️ |  |  |  |  |
| InterstitialAd.onLoad | ✔️ |  |  |  |  |
| InterstitialAd.load | ✔️ |  |  |  |  |
| InterstitialAd.show | ✔️ |  |  |  |  |

---

## docs/apis/ad/RewardedVideoAd.md

---
title: RewardedVideoAd
sidebar_label: RewardedVideoAd
---

激励视频广告组件。激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.html)

## 方法

### load

加载激励视频广告。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.load.html)

```tsx
() => Promise<any>
```

### show

显示激励视频广告。激励视频广告将从屏幕下方推入。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.show.html)

```tsx
() => Promise<any>
```

### destroy

销毁激励视频广告实例。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.destroy.html)

```tsx
() => void
```

### offClose

取消监听用户点击 `关闭广告` 按钮的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offClose.html)

```tsx
(callback: OnCloseCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnCloseCallback` |

### offError

取消监听激励视频错误事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### offLoad

取消监听激励视频广告加载事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offLoad.html)

```tsx
(callback: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### onClose

监听用户点击 `关闭广告` 按钮的事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onClose.html)

```tsx
(callback: OnCloseCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnCloseCallback` |

### onError

监听激励视频错误事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### onLoad

监听激励视频广告加载事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onLoad.html)

```tsx
(callback: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

## 参数

### OnErrorCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | string or number or symbol | 错误码<br />[参考地址]( /docs/apis/General#aderrcode) |
| errMsg | `string` | 错误信息 |

### OnCloseCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| isEnded | `boolean` | 视频是否是在用户完整观看的情况下被关闭的 |

### OnCloseCallback

用户点击 `关闭广告` 按钮的事件的回调函数

```tsx
(result: OnCloseCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnCloseCallbackResult` |

### OnErrorCallback

激励视频错误事件的回调函数

```tsx
(result: OnErrorCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnErrorCallbackResult` |

### OnLoadCallback

激励视频广告加载事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| RewardedVideoAd.load | ✔️ |  |  |  |  |
| RewardedVideoAd.show | ✔️ |  |  |  |  |
| RewardedVideoAd.destroy | ✔️ |  |  |  |  |
| RewardedVideoAd.offClose | ✔️ |  |  |  |  |
| RewardedVideoAd.offError | ✔️ |  |  |  |  |
| RewardedVideoAd.offLoad | ✔️ |  |  |  |  |
| RewardedVideoAd.onClose | ✔️ |  |  |  |  |
| RewardedVideoAd.onError | ✔️ |  |  |  |  |
| RewardedVideoAd.onLoad | ✔️ |  |  |  |  |

---

## docs/apis/ai/face/faceDetect.md

---
title: Taro.faceDetect(option)
sidebar_label: faceDetect
---

人脸识别，使用前需要通过 Taro.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.faceDetect.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| frameBuffer | `ArrayBuffer` |  | 是 | 图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` |  | 是 | 图像宽度 |
| height | `number` |  | 是 | 图像高度 |
| enablePoint | `boolean` | `false` | 否 | 是否返回当前图像的人脸（106 个点） |
| enableConf | `boolean` | `false` | 否 | 是否返回当前图像的人脸的置信度（可表示器官遮挡情况） |
| enableAngle | `boolean` | `false` | 否 | 是否返回当前图像的人脸角度信息 |
| enableMultiFace | `boolean` | `false` | 否 | 是否返回多张人脸的信息 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackOption) => void` |  | 否 | 接口调用成功的回调函数 |

### SuccessCallbackOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| faceInfo | `face` | 否 | 多人模式（enableMultiFace）下的人脸信息，每个对象包含上述其它属性 |

### face

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| detectRect | `detectRect` | 脸部正方框数值，对象包含 height, weight, originX, originY 四个属性 |
| x | `number` | 脸部中心点横坐标，检测不到人脸则为 -1 |
| y | `number` | 脸部中心点纵坐标，检测不到人脸则为 -1 |
| pointArray | `point[]` | 人脸 106 个点位置数组，数组每个对象包含 x 和 y |
| confArray | `conf[]` | 人脸置信度，取值范围 [0, 1]，数值越大置信度越高（遮挡越少） |
| angleArray | `angle[]` | 人脸角度信息，取值范围 [-1, 1]，数值越接近 0 表示越正对摄像头 |

### detectRect

脸部正方框数值

| 参数 | 类型 |
| --- | --- |
| height | `number` |
| weight | `number` |
| originX | `number` |
| originY | `number` |

### point

| 参数 | 类型 |
| --- | --- |
| x | `number` |
| y | `number` |

### conf

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| global | `number` | 整体可信度 |
| leftEye | `number` | 左眼可信度 |
| rightEye | `number` | 右眼可信度 |
| mouth | `number` | 嘴巴可信度 |
| nose | `number` | 鼻子可信度 |

### angle

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| pitch | `number` | 仰俯角（点头） |
| yaw | `number` | 偏航角（摇头） |
| roll | `number` | 翻滚角（左右倾） |

---

## docs/apis/ai/face/initFaceDetect.md

---
title: Taro.initFaceDetect(option)
sidebar_label: initFaceDetect
---

初始化人脸识别

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.initFaceDetect.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/ai/face/stopFaceDetect.md

---
title: Taro.stopFaceDetect(option)
sidebar_label: stopFaceDetect
---

停止人脸识别

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.stopFaceDetect.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/ai/inference/createInferenceSession.md

---
title: Taro.createInferenceSession(option)
sidebar_label: createInferenceSession
---

创建 AI 推理 Session

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.createInferenceSession.html)

## 类型

```tsx
(option: Option) => InferenceSession
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| model | `string` | 是 | 模型文件路径，目前只执行后缀为.onnx格式(支持代码包路径，和本地文件系统路径） |
| precesionLevel | `PrecesionLevel` | 否 | 推理精度，有效值为 0 - 4。<br />一般来说，使用的precesionLevel等级越低，推理速度越快，但可能会损失精度。<br />推荐开发者在开发时，在效果满足需求时优先使用更低精度以提高推理速度，节约能耗。 |
| allowQuantize | `boolean` | 否 | 是否生成量化模型推理 |
| allowNPU | `boolean` | 否 | 是否使用NPU推理，仅对IOS有效 |
| typicalShape | `boolean` | 否 | 输入典型分辨率 |

### PrecesionLevel

| 参数 | 说明 |
| --- | --- |
| 0 | 使用fp16 存储浮点，fp16计算，Winograd 算法也采取fp16 计算，开启近似math计算 |
| 1 | 使用fp16 存储浮点，fp16计算，禁用 Winograd 算法，开启近似math计算 |
| 2 | 使用fp16 存储浮点，fp32计算，开启 Winograd，开启近似math计算 |
| 3 | 使用fp32 存储浮点，fp32计算，开启 Winograd，开启近似math计算 |
| 4 | 使用fp32 存储浮点，fp32计算，开启 Winograd，关闭近似math计算 |

---

## docs/apis/ai/inference/getInferenceEnvInfo.md

---
title: Taro.getInferenceEnvInfo(option)
sidebar_label: getInferenceEnvInfo
---

获取通用AI推理引擎版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.getInferenceEnvInfo.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ver | `string` | AI推理引擎版本 |

---

## docs/apis/ai/inference/InferenceSession.md

---
title: InferenceSession
sidebar_label: InferenceSession
---

## 方法

### destroy

销毁 InferenceSession 实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.destroy.html)

```tsx
() => void
```

### offError

取消监听模型加载失败事件. 传入指定回调函数则只取消指定回调，不传则取消所有回调

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.offError.html)

```tsx
(callback?: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### offLoad

取消监听模型加载完成事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.offLoad.html)

```tsx
(callback?: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### onError

监听模型加载失败事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.onError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### onLoad

监听模型加载完成事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.onLoad.html)

```tsx
(callback: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### run

运行推断
需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。
一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.destroy.html)

```tsx
(option: Tensors) => Promise<Tensors>
```

| 参数 | 类型 |
| --- | --- |
| option | `Tensors` |

## 参数

### Type

### Tensor

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| shape | `number[]` | Tensor shape （Tensor 形状，例如 [1, 3, 224, 224] 即表示一个4唯Tensor，每个维度的长度分别为1, 3, 224, 224） |
| data | `ArrayBuffer` | Tensor 值，一段 ArrayBuffer |
| type | `keyof Type` | ArrayBuffer 值的类型，合法值有 uint8, int8, uint32, int32, float32 |

### Tensors

| 参数 | 类型 |
| --- | --- |
| __index | `__index` |

### OnErrorCallback

模型加载失败回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnLoadCallback

模型加载完成回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| InferenceSession.destroy | ✔️ |  |  |  |  |
| InferenceSession.offError | ✔️ |  |  |  |  |
| InferenceSession.offLoad | ✔️ |  |  |  |  |
| InferenceSession.onError | ✔️ |  |  |  |  |
| InferenceSession.onLoad | ✔️ |  |  |  |  |
| InferenceSession.run | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/createVKSession.md

---
title: Taro.createVKSession(version)
sidebar_label: createVKSession
---

创建 vision kit 会话对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.createVKSession.html)

## 类型

```tsx
(version: keyof IVersion) => VKSession
```

## 参数

| 参数 | 类型 |
| --- | --- |
| version | `keyof IVersion` |

### IVersion

vision kit 版本

| 参数 | 说明 |
| --- | --- |
| v1 | 旧版本 |
| v2 | v2 版本，目前只有 iOS 基础库 2.22.0 以上支持 |

### ITrack

跟踪配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| plane | `IPlane` | 平面跟踪配置 |

### IPlane

平面跟踪配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mode | `keyof IPlaneMode` | 平面跟踪配置模式 |

### IPlaneMode

平面跟踪配置模式合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 检测横向平面 |
| 2 | 检测纵向平面，只有 v2 版本支持 |
| 3 | 检测横向和纵向平面，只有 v2 版本支持 |

---

## docs/apis/ai/visionkit/isVKSupport.md

---
title: Taro.isVKSupport(version)
sidebar_label: isVKSupport
---

判断支持版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.isVKSupport.html)

## 类型

```tsx
(version: keyof IVersion) => boolean
```

## 参数

| 参数 | 类型 |
| --- | --- |
| version | `keyof IVersion` |

### IVersion

vision kit 版本

| 参数 | 说明 |
| --- | --- |
| v1 | 旧版本 |
| v2 | v2 版本，目前只有 iOS 基础库 2.22.0 以上支持 |

---

## docs/apis/ai/visionkit/VKBodyAnchor.md

---
title: VKBodyAnchor
sidebar_label: VKBodyAnchor
---

人体 anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKBodyAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `5` | 类型 |
| detectId | `number` | 识别序号 |
| size | `ISize` | 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| origin | `IOrigin` | 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| confidence | `number[]` | 关键点的置信度 |
| points | `IPoint[]` | 关键点 |
| score | `number` | 总体置信值 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 5 | 人体 |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IOrigin

相对视窗的位置信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### IPoint

关键点

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKBodyAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKCamera.md

---
title: VKCamera
sidebar_label: VKCamera
---

相机对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKCamera.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| viewMatrix | `Float32Array` | 视图矩阵 |
| intrinsics | `Float32Array` | 相机内参，只有 v2 版本支持 |

### getProjectionMatrix

获取投影矩阵

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKCamera.getProjectionMatrix.html)

```tsx
(near: number, far: number) => Float32Array
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| near | `number` | 近视点 |
| far | `number` | 远视点 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKCamera | ✔️ |  |  |  |  |
| VKCamera.getProjectionMatrix | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKDepthAnchor.md

---
title: VKDepthAnchor
sidebar_label: VKDepthAnchor
---

depth anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKDepthAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `8` | 类型 |
| size | `ISize` | 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| depthArray | `number[]` | 包含深度信息的数组 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 8 | DEPTH |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKDepthAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKFaceAnchor.md

---
title: VKFaceAnchor
sidebar_label: VKFaceAnchor
---

人脸 anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFaceAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `3` | 类型 |
| detectId | `number` | 识别序号 |
| origin | `IOrigin` | 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| size | `ISize` | 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| points | `IPoint[]` | 人脸 106 个关键点的坐标 |
| angle | `number[]` | 人脸角度信息 |
| confidence | `number` | 关键点的置信度 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 3 | 人脸 |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IOrigin

相对视窗的位置信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### IPoint

关键点

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKFaceAnchor | ✔️ |  |  |  |  |

---

