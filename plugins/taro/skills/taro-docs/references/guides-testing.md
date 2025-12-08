## docs/test-utils/fire-event.md

---
title: 事件相关 API
---

## fireEvent

`@tarojs/test-utils`目的是关注组件的**用户行为和外部表现，而不是内部实现细节**，所以无论是**vue**还是**react**，本质都是在渲染完成后，通过触发元素的事件，从而响应到内部实现的回调函数。
`fireEvent`内置了常用的事件触发器，通过获取元素 => 触发事件 => 事件响应 来对测试结果进行断言。

### 内置事件

```js
// 获取元素
const ele = testUtils.queries.querySelector('input')
// 触发keyPress事件
testUtils.fireEvent.keyPress(ele, {
  key: 'A',
  code: 'A',
})
```

```ts
export interface FireEvent {
  // Clipboard Events
  copy(ele: Element, params?: ClipboardEventInit): void
  cut(ele: Element, params?: ClipboardEventInit): void
  paste(ele: Element, params?: ClipboardEventInit): void
  // Composition Events
  compositionEnd(ele: Element, params?: CompositionEventInit): void
  compositionStart(ele: Element, params?: CompositionEventInit): void
  compositionUpdate(ele: Element, params?: CompositionEventInit): void
  // Keyboard Events
  keyDown(ele: Element, params?: KeyboardEventInit): void
  keyPress(ele: Element, params?: KeyboardEventInit): void
  keyUp(ele: Element, params?: KeyboardEventInit): void
  // Focus Events
  focus(ele: Element, params?: FocusEventInit): void
  blur(ele: Element, params?: FocusEventInit): void
  focusIn(ele: Element, params?: FocusEventInit): void
  focusOut(ele: Element, params?: FocusEventInit): void
  // Form Events
  change(ele: Element, params?: EventInit): void
  input(ele: Element, params?: InputEventInit): void
  invalid(ele: Element, params?: EventInit): void
  submit(ele: Element, params?: EventInit): void
  reset(ele: Element, params?: EventInit): void
  // Mouse Events
  click(ele: Element, params?: MouseEventInit): void
  contextMenu(ele: Element, params?: MouseEventInit): void
  dblClick(ele: Element, params?: MouseEventInit): void
  doubleClick(ele: Element, params?: MouseEventInit): void
  drag(ele: Element, params?: MouseEventInit): void
  dragEnd(ele: Element, params?: MouseEventInit): void
  dragEnter(ele: Element, params?: MouseEventInit): void
  dragExit(ele: Element, params?: MouseEventInit): void
  dragLeave(ele: Element, params?: MouseEventInit): void
  dragOver(ele: Element, params?: MouseEventInit): void
  drop(ele: Element, params?: MouseEventInit): void
  mouseDown(ele: Element, params?: MouseEventInit): void
  mouseEnter(ele: Element, params?: MouseEventInit): void
  mouseLeave(ele: Element, params?: MouseEventInit): void
  mouseMove(ele: Element, params?: MouseEventInit): void
  mouseOut(ele: Element, params?: MouseEventInit): void
  mouseOver(ele: Element, params?: MouseEventInit): void
  mouseUp(ele: Element, params?: MouseEventInit): void
  // Selection Events
  select(ele: Element, params?: EventInit): void
  // Touch Events
  touchCancel(ele: Element, params?: TouchEventInit): void
  touchEnd(ele: Element, params?: TouchEventInit): void
  touchMove(ele: Element, params?: TouchEventInit): void
  touchStart(ele: Element, params?: TouchEventInit): void
  // UI Events
  resize(ele: Element, params?: UIEventInit): void
  scroll(ele: Element, params?: UIEventInit): void
  // Wheel Events
  wheel(ele: Element, params?: WheelEventInit): void
  // Media Events
  abort(ele: Element, params?: EventInit): void
  canPlay(ele: Element, params?: EventInit): void
  canPlayThrough(ele: Element, params?: EventInit): void
  durationChange(ele: Element, params?: EventInit): void
  emptied(ele: Element, params?: EventInit): void
  encrypted(ele: Element, params?: EventInit): void
  ended(ele: Element, params?: EventInit): void
  loadedData(ele: Element, params?: EventInit): void
  loadedMetadata(ele: Element, params?: EventInit): void
  loadStart(ele: Element, params?: ProgressEventInit): void
  pause(ele: Element, params?: EventInit): void
  play(ele: Element, params?: EventInit): void
  playing(ele: Element, params?: EventInit): void
  progress(ele: Element, params?: ProgressEventInit): void
  rateChange(ele: Element, params?: EventInit): void
  seeked(ele: Element, params?: EventInit): void
  seeking(ele: Element, params?: EventInit): void
  stalled(ele: Element, params?: EventInit): void
  suspend(ele: Element, params?: EventInit): void
  timeUpdate(ele: Element, params?: EventInit): void
  volumeChange(ele: Element, params?: EventInit): void
  waiting(ele: Element, params?: EventInit): void
  // Events
  load(ele: Element, params?: EventInit): void
  error(ele: Element, params?: EventInit): void
  // Animation Events
  animationStart(ele: Element, params?: AnimationEventInit): void
  animationEnd(ele: Element, params?: AnimationEventInit): void
  animationIteration(ele: Element, params?: AnimationEventInit): void
  // Transition Events
  transitionCancel(ele: Element, params?: TransitionEventInit): void
  transitionEnd(ele: Element, params?: TransitionEventInit): void
  transitionRun(ele: Element, params?: TransitionEventInit): void
  transitionStart(ele: Element, params?: TransitionEventInit): void
  // pointer events
  pointerOver(ele: Element, params?: PointerEventInit): void
  pointerEnter(ele: Element, params?: PointerEventInit): void
  pointerDown(ele: Element, params?: PointerEventInit): void
  pointerMove(ele: Element, params?: PointerEventInit): void
  pointerUp(ele: Element, params?: PointerEventInit): void
  pointerCancel(ele: Element, params?: PointerEventInit): void
  pointerOut(ele: Element, params?: PointerEventInit): void
  pointerLeave(ele: Element, params?: PointerEventInit): void
  gotPointerCapture(ele: Element, params?: PointerEventInit): void
  lostPointerCapture(ele: Element, params?: PointerEventInit): void
  // history events
  popState(ele: Element, params?: PopStateEventInit): void
  // window events
  offline(ele: Element, params?: EventInit): void
  online(ele: Element, params?: EventInit): void
}
```

### 构造事件

除了上述的内置事件外，我们也可以通过`new Event()`来构造一个新的事件类型

```ts
function fireEvent(ele: Element, event: Event)
```

使用案例：

```js
// 获取元素
const ele = testUtils.queries.querySelector('.text')
// 触发一个心的事件
testUtils.fireEvent(ele, new Event())
testUtils.fireEvent(ele, new PointerEvent())
```

---

## docs/test-utils/index.md

---
title: 概述
---

> 对 Taro 进行组件/应用级别的单元测试

该测试工具**更加关注组件的用户行为和外部表现，而不是内部实现细节**

Github 地址：[传送门](https://github.com/NervJS/taro-test-utils)

## 安装

在 Taro 项目根目录下安装

```bash
# React:
npm i @tarojs/test-utils-react --save
# Vue3:
npm i @tarojs/test-utils-vue3 --save
# Vue2:
npm i @tarojs/test-utils-vue --save
```

:::warning 注意
`@tarojs/plugin-platform-h5`为前置 peerDependencies，请勿删除该依赖申明
:::

## 使用

### 安装 Jest

```bash
npm i jest --save
```

### 配置 Jest

在 Taro 项目根目录添加文件`jest.config.js`。配置文件如下：

```js
// react
const defineJestConfig = require('@tarojs/test-utils-react/dist/jest.js').default
// vue3
// const defineJestConfig = require("@tarojs/test-utils-vue3/dist/jest.js").default;
// vue2
// const defineJestConfig = require("@tarojs/test-utils-vue/dist/jest.js").default;

module.exports = defineJestConfig({
  // testEnvironment: 'jsdom',  // 测试使用的环境
  // testMatch: ['<rootDir>/__test__/**/*.test.{js,ts}'],  // 测试文件匹配
})
```

`defineJestConfig` 已内置了部分初始化配置，需要修改可自行配置覆盖
配置文件参考 Jest 官网：[Configuring Jest](https://jestjs.io/docs/configuration)

### 编写测试用例

#### 组件级别

```javascript
// __test__/main/index.test.js
import TestUtils from '@tarojs/test-utils-react'
import Hello from '../../src/components/Hello.tsx'
const testUtils = new TestUtils()
describe('App', () => {
  it('RenderComponent', async () => {
    // React跟Vue相同用法
    await testUtils.mount(Hello, {
      props: {
        // 配置项
        a: 1,
      },
    })
    // 等待页面出现.btn这个节点
    const btn = await testUtils.queries.waitForQuerySelector('.btn')
    // 等待react的渲染更新完成
    await testUtils.act(() => {
      // 触发点击事件
      testUtils.fireEvent.click(btn)
    })
    // 打印渲染结果
    expect(testUtils.html()).toMatchSnapshot()
    // <div class="hello">...
  })
})
```

#### 运行测试

```bash
# package.json
# scripts: {
#   "test": "jest",
# }
npm run test
```

#### 应用级别

```javascript
// __test__/main/index.test.js
import TestUtils from '@tarojs/test-utils-react'
import Taro from '@tarojs/taro'
import App from '../../src/app.ts'
const testUtils = new TestUtils()
describe('App', () => {
  it('RenderApp', async () => {
    await testUtils.createApp()
    // 监听/pages/index/index这个页面路由的onShow生命周期触发
    await testUtils.PageLifecycle.onShow('/pages/index/index')
    // 跳转到第二个页面
    Taro.navigateTo({ url: '/pages/second/index' })
    // 监听/pages/second/index这个页面路由的onShow生命周期触发
    await testUtils.PageLifecycle.onShow('/pages/second/index')
    // 当/pages/second/index触发onShow后，打印页面内容
    expect(testUtils.html()).toMatchSnapshot()
    // <body><div class="taro_router" id="app">...
  })
})
```

## 多端

对于小程序的测试，我们提供了环境变量对 Jest 环境进行区分：`TARO_ENV_JEST`，我们可以在调用 jest 测试时设置对应的环境变量

```js
// package.json
scripts: {
  "test": "jest",
   "test:weapp": "export TARO_ENV_JEST=weapp && jest"
}
```

这里会有几点差异：

- **环境差异**

这里会将运行代码中的`process.env.TARO_ENV`切换为`TARO_ENV_JEST`的值，主要用于一些"环境判断"比如下面的代码将会在`test:weapp`执行:

```js
if (process.env.TARO_ENV === 'weapp') {
  // ....setState(....)
  console.log('this is weapp')
}
```

- **标签差异**

除此之外`html()`输出的节点内容也会改变，将以小程序标签的形式输出，例如:

```html
<!-- h5 -->
<taro-core-view className="cls">
  <taro-image-view src="xxx">
    <img src="xxx" />
  </taro-image-view>
</taro-core-view>

<!-- weapp -->
<view className="cls">
  <image src="xxx" />
</view>
```

---

因为这是一个在线运行的测试工具，主要目的也是对用户行为和外部表现进行测试断言，**在测试环境使用的还是以 h5 的形式来模拟整个程序的运行**，对于其他小程序特有的生命周期和 API，我们推荐以下做法：

- **生命周期**： 使用`PageLifecycle`的`triggerXxxxx`进行生命周期的触发
- **API**： 使用`jest`提供的`mock`方法来模拟`@tarojs/taro`的 api，模拟小程序的返回值

---

## docs/test-utils/life-cycle.md

---
title: 生命周期 API
---

生命周期监听，这里会在对应**生命周期事件执行完成后，下次渲染前执行**，说白了就是一个"after lifecycle"的钩子

## AppLifecycle

> APP 生命周期

对应生命周期的说明可以参考官网：[传送门](/docs/react-entry)

### onLaunch

监听 onLaunch 生命周期执行回调

```ts
function onLaunch(): Promise<void>
```

用法：

```ts
// 等待onLaunch响应完成
await testUtils.AppLifecycle.onLaunch()
```

### onShow

程序启动，或切前台时触发

监听 onShow / componentDidShow 生命周期执行回调

```ts
function onShow(): Promise<void>
```

用法：

```ts
// 等待onShow响应完成
await testUtils.AppLifecycle.onShow()
```

### onHide

程序切后台时触发

监听 onHide / componentDidHide 生命周期执行回调

```ts
function onHide(): Promise<void>
```

用法：

```ts
// 等待onHide响应完成
await testUtils.AppLifecycle.onHide()
```

### onError

小程序发生脚本错误或 API 调用报错时触发。

```ts
function onError(): Promise<Error>
```

用法：

```ts
// 等待onError响应完成
await testUtils.AppLifecycle.onError()
```

### onPageNotFound

程序要打开的页面不存在时触发。

```ts
function onPageNotFound(): Promise<{ path: string; query: object; isEntryPage: boolean }>
```

回调参数：

| 属性        | 类型    | 说明                                                                           |
| ----------- | ------- | ------------------------------------------------------------------------------ |
| path        | string  | 不存在页面的路径                                                               |
| query       | Object  | 打开不存在页面的 query 参数                                                    |
| isEntryPage | boolean | 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） |

用法：

```ts
// 等待onPageNotFound响应完成
await testUtils.AppLifecycle.onPageNotFound()
```

### onUnhandledRejection

小程序有未处理的 Promise 拒绝时触发。

```ts
function onUnhandledRejection(): Promise<{ reason: string; promise: Promise<unknown> }>
```

回调参数：
<<<<<<< HEAD

| 属性    | 类型    | 说明                            |
| ------- | ------- | ------------------------------- |
| reason  | string  | 拒绝原因，一般是一个 Error 对象 |
| promise | Promise | 被拒绝的 Promise 对象           |

=======
| 属性 | 类型 | 说明 |
| ------- | ------- | ------------------------------- |
| reason | string | 拒绝原因，一般是一个 Error 对象 |
| promise | Promise | 被拒绝的 Promise 对象 |

> > > > > > > master

用法：

```ts
// 等待onUnhandledRejection响应完成
await testUtils.AppLifecycle.onUnhandledRejection()
```

## PageLifecycle

> Page 生命周期

页面级别的生命周期使用方式与`AppLifecycle`类似，除了用于监听的`onXXX`外，页面级别的生命周期 api 还提供了`triggerXXX`用于模拟触发一些特定的生命周期。
比如`onReachBottom`，需要触发它的条件需要监听用户上拉触底的事件，我们写事件去模拟比较麻烦，所以我们干脆提供了`triggerReachBottom`给用户在测试时可直接触发到`onReachBottom`这个生命周期。

对应生命周期的说明可以参考官网：[传送门](https://docs.taro.zone/docs/react-page)

用法：

```js
// 等待pages/index/index这个路由页面展示
await testUtils.PageLifecycle.onShow('pages/index/index')
// 手动触发onReachBottom事件
testUtils.PageLifecycle.triggerReachBottom()
// 等待onReachBottom响应完成
await testUtils.PageLifecycle.onReachBottom()
```

| 方法                                                             | 说明                                                                                                     |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| onLoad(path: string)                                             | 在此生命周期中通过访问 options 参数或调用 getCurrentInstance().router，可以访问到页面路由参数。          |
| onUnload(path: string)                                           | 在小程序环境中对应页面的 onUnload。                                                                      |
| onShow(path: string)                                             | 页面显示/切入前台时触发。                                                                                |
| onHide(path: string)                                             | 页面隐藏/切入后台时触发。                                                                                |
| onReady(path: string)                                            | 从此生命周期开始可以使用 createCanvasContext 或 createSelectorQuery 等 API 访问小程序渲染层的 DOM 节点。 |
| onPullDownRefresh(path: string)                                  | 监听用户下拉动作                                                                                         |
| triggerPullDownRefresh(path: string)                             | 触发`onPullDownRefresh`生命周期                                                                          |
| onReachBottom(path: string)                                      | 监听用户上拉触底事件                                                                                     |
| triggerReachBottom(path: string)                                 | 触发`onReachBottom`生命周期                                                                              |
| onPageScroll(path: string)                                       | 监听用户滑动页面事件                                                                                     |
| triggerPageScroll(path: string, opt: PageScrollObject)           | 触发`onPageScroll`生命周期                                                                               |
| onAddToFavorites(path: string)                                   | 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容                                                 |
| triggerAddToFavorites(path: string)                              | 触发`onAddToFavorites`生命周期                                                                           |
| onShareAppMessage(path: string)                                  | 监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容 |
| triggerShareAppMessage(path: string, opt: ShareAppMessageObject) | 触发`onShareAppMessage`生命周期                                                                          |
| onShareTimeline(path: string)                                    | 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容                                                 |
| triggerShareTimeline(path: string)                               | 触发`onShareTimeline`生命周期                                                                            |
| onResize(path: string)                                           | 监听屏幕旋转时                                                                                           |
| triggerResize(path: string, opt: PageResizeObject)               | 触发`onResize`生命周期                                                                                   |
| onTabItemTap(path: string)                                       | 点击 tab 时触发                                                                                          |
| triggerTabItemTap(path: string, opt: TabItemTapObject)           | 触发`onTabItemTap`生命周期                                                                               |
| onSaveExitState(path: string)                                    | 每当小程序可能被销毁之前，页面回调函数 onSaveExitState 会被调用，可以进行退出状态的保存                  |
| triggerSaveExitState(path: string)                               | 触发`onSaveExitState`生命周期                                                                            |
| onTitleClick(path: string)                                       | 点击标题触发                                                                                             |
| triggerTitleClick(path: string)                                  | 触发`onTitleClick`生命周期                                                                               |
| onOptionMenuClick(path: string)                                  | 点击导航栏额外图标触发                                                                                   |
| triggerOptionMenuClick(path: string)                             | 触发`onOptionMenuClick`生命周期                                                                          |
| onPopMenuClick(path: string)                                     |                                                                                                          |
| triggerPopMenuClick(path: string)                                | 触发`onPopMenuClick`生命周期                                                                             |
| onPullIntercept(path: string)                                    | 下拉截断时 onPullIntercept 触发                                                                          |
| triggerPullIntercept(path: string)                               | 触发`onPageScroll`生命周期                                                                               |

---

## docs/test-utils/other.md

---
title: 辅助类 API
---

## html

```ts
function html(): string
```

将页面表现的文档内容进行格式化输出，通常用作快照对比、调试

用法：

```js
import testUtils from '@tarojs/test-utils-react' // react
// import testUtils from '@tarojs/test-utils-vue3' // vue3
describe('测试mount', () => {
  test('View', async () => {
    const testUtils = new TestUtils()
    await testUtils.mount(View)
    const htmlString = testUtils.html() // 输出文档字符串内容
    expect(htmlString).toMatchSnapshot() // 可以用于快照对比
  })
})
```

## act

```ts
async function act(): Promise
```

**React**同`react-dom/test-utils`提供的`act`，**Vue**则使用的是`await nextTick`回调进行封装

用法：

```js
import testUtils from '@tarojs/test-utils-react' // react
// import testUtils from '@tarojs/test-utils-vue3' // vue3
describe('Testing', () => {
  test('test', async () => {
    const testUtils = new TestUtils()
    await testUtils.mount(View)
    // 等待回调执行完成，并且更新结束
    await testUtils.act(() => {
      testUtils.fireEvent.click(testUtils.queries.querySelector('.btn'))
    })
  })
})
```

---

## docs/test-utils/queries.md

---
title: 查询相关 API
---

## 类型说明

TWaitforParams：

| 属性                    | 类型                 | 必须 | 默认值                                                                   | 说明            |
| ----------------------- | -------------------- | ---- | ------------------------------------------------------------------------ | --------------- | ---------------- |
| container               | HTMLElement          |      |                                                                          | window.document | 查询的 root 节点 |
| timeout                 | number               |      | 1000                                                                     | 失效时间        |
| interval                | number               |      | 50                                                                       | 查询间隔        |
| mutationObserverOptions | MutationObserverInit |      | {subtree: true, childList: true, attributes: true, characterData: true } | 监听器参数      |

## 按照选择器查询

### querySelector

```typescript
function querySelector(selectors: string): HTMLElement
```

参数：

| 参数      | 类型   | 必须 | 说明                                  |
| --------- | ------ | ---- | ------------------------------------- |
| selectors | string | 是   | 选择器，同 docuemt.querySelector 一致 |

用法：

```js
const btns = testUtils.queries.querySelectorAll('.btns')
```

### querySelectorAll

```typescript
function querySelectorAll(selectors: string): HTMLElement[]
```

参数：

| 参数      | 类型   | 必须 | 说明                                     |
| --------- | ------ | ---- | ---------------------------------------- |
| selectors | string | 是   | 选择器，同 docuemt.querySelectorAll 一致 |

用法：

```js
const btns = testUtils.queries.querySelectorAll('.btns')
```

### waitForQuerySelector

```typescript
async function waitForQuerySelector(selectors: string, params?: TParams): Promise<HTMLElement>
```

参数：

| 参数      | 类型           | 必须 | 说明                                  |
| --------- | -------------- | ---- | ------------------------------------- |
| selectors | string         | 是   | 选择器，同 docuemt.querySelector 一致 |
| params    | TWaitforParams |      | 参数：见 TWaitforParams 说明          |

用法：

```js
const btn = await testUtils.queries.waitForQuerySelector('.async-btn')
```

### waitForQuerySelectorAll

```typescript
async function waitForQuerySelectorAll(selectors: string, params?: TParams): Promise<HTMLElement[]>
```

参数：

| 参数      | 类型           | 必须 | 说明                                     |
| --------- | -------------- | ---- | ---------------------------------------- |
| selectors | string         | 是   | 选择器，同 docuemt.querySelectorAll 一致 |
| params    | TWaitforParams |      | 参数：见 TWaitforParams 说明             |

用法：

```js
const btns = await testUtils.queries.waitForQuerySelectorAll('.async-btns')
```

## 按照文本查询

### queryByText

```typescript
function queryByText(text: string, selector?: string): HTMLElement
```

参数：

| 参数     | 类型   | 必须 | 说明                                  |
| -------- | ------ | ---- | ------------------------------------- |
| text     | string | 是   | 文本内容，部分匹配即可                |
| selector | string |      | 选择器，同 docuemt.querySelector 一致 |

用法：

```js
// <Text>Hello World!!!</Text>
const textView = testUtils.queries.queryByText('Hello World')
```

### queryByTextAll

```typescript
function queryAllByText(text: string, selector?: string): HTMLElement[]
```

参数：

| 参数     | 类型   | 必须 | 说明                                  |
| -------- | ------ | ---- | ------------------------------------- |
| text     | string | 是   | 文本内容，部分匹配即可                |
| selector | string |      | 选择器，同 docuemt.querySelector 一致 |

用法：

```js
// <Text>Hello World!!</Text>
// <View>Hello World!!!</View>
const textViews = testUtils.queries.queryAllByText('Hello World')
```

### waitForQueryByText

```typescript
async function waitForQueryByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement
```

参数：

| 参数     | 类型           | 必须 | 说明                                  |
| -------- | -------------- | ---- | ------------------------------------- |
| text     | string         | 是   | 文本内容，部分匹配即可                |
| selector | string         |      | 选择器，同 docuemt.querySelector 一致 |
| params   | TWaitforParams |      | 参数：见 TWaitforParams 说明          |

用法：

```js
// <Text>Hello World!!!</Text>
const textView = async testUtils.queries.waitForQueryByText("Hello World");
```

### waitForQueryAllByText

```typescript
async function waitForQueryAllByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement[]
```

参数：

| 参数     | 类型           | 必须 | 说明                                  |
| -------- | -------------- | ---- | ------------------------------------- |
| text     | string         | 是   | 文本内容，部分匹配即可                |
| selector | string         |      | 选择器，同 docuemt.querySelector 一致 |
| params   | TWaitforParams |      | 参数：见 TWaitforParams 说明          |

用法：

```js
// <Text>Hello World!!</Text>
// <View>Hello World!!!</View>
const textViews = async testUtils.queries.waitForQueryAllByText("Hello World");
```

## 按照 Placeholder 查询

### queryByPlaceholder

```typescript
function queryByPlaceholder(text: string): HTMLElement
```

参数：

| 参数 | 类型   | 必须 | 说明             |
| ---- | ------ | ---- | ---------------- |
| text | string | 是   | placeholder 内容 |

用法：

```js
// <input placeholder="hello" />
const input = testUtils.queries.queryByPlaceholder('hello')
```

### queryAllByPlaceholder

```typescript
function queryAllByPlaceholder(text: string): HTMLElement[]
```

参数：

| 参数 | 类型   | 必须 | 说明             |
| ---- | ------ | ---- | ---------------- |
| text | string | 是   | placeholder 内容 |

用法：

```js
// <input placeholder="hello" />
// <input placeholder="hello" />
const inputs = testUtils.queries.queryAllByPlaceholder('hello')
```

### waitForQueryByPlaceholder

```typescript
async function waitForQueryByPlaceholder(text: string, params?: TParams): Promise<HTMLElement>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| text   | string         | 是   | placeholder 内容             |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <input placeholder="async-placeholde" />
const input = await testUtils.queries.waitForQueryByPlaceholder('async-placeholder')
```

### waitForQueryAllByPlaceholder

```typescript
async function waitForQueryAllByPlaceholder(text: string, params?: TParams): Promise<HTMLElement[]>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| text   | string         | 是   | placeholder 内容             |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <input placeholder="async-placeholde" />
// <input placeholder="async-placeholde" />
const inputs = await testUtils.queries.waitForQueryAllByPlaceholder('async-placeholder')
```

## 按照属性查询

### queryByAttribute

```typescript
function queryByAttribute(attr: string, value: any): HTMLElement
```

参数：

| 参数  | 类型   | 必须 | 说明       |
| ----- | ------ | ---- | ---------- |
| attr  | string | 是   | 属性 key   |
| value | any    | 是   | 属性 value |

用法：

```js
// <div key="value" />
const view = testUtils.queries.queryByAttribute('key', 'value')
```

### queryAllByAttribute

```typescript
function queryAllByAttribute(attr: string, value: any): HTMLElement[]
```

参数：

| 参数  | 类型   | 必须 | 说明       |
| ----- | ------ | ---- | ---------- |
| attr  | string | 是   | 属性 key   |
| value | any    | 是   | 属性 value |

用法：

```js
// <div key="value" />
// <div key="value" />
const view = testUtils.queries.queryAllByAttribute('key', 'value')
```

### waitForQueryByAttribute

```typescript
async function waitForQueryByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| attr   | string         | 是   | 属性 key                     |
| value  | any            | 是   | 属性 value                   |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <div key="value" />
const view = await testUtils.queries.waitForQueryByAttribute('key', 'value')
```

### waitForQueryAllByAttribute

```typescript
async function waitForQueryAllByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement[]>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| attr   | string         | 是   | 属性 key                     |
| value  | any            | 是   | 属性 value                   |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <div key="value" />
// <div key="value" />
const inputs = await testUtils.queries.waitForQueryAllByAttribute('key', 'value')
```

---

## docs/test-utils/render.md

---
title: 渲染相关 API
---

## mount

> 组件挂载

```js
async mount(component, params);
```

| 参数      | 类型                                | 必须 | 说明           |
| --------- | ----------------------------------- | ---- | -------------- |
| component | FunctionComponent \| ClassComponent | 是   | 需要挂载的组件 |
| params    | TParams                             |      | 参数           |

params 类型 `TParams`

| 参数        | 类型        | 必须 | 默认值        | 说明           | 备注     |
| ----------- | ----------- | ---- | ------------- | -------------- | -------- |
| props       | Object      |      | {}            | props 入参     |
| slots       | Object      |      | {}            | slots 入参     | vue 特有 |
| container   | HTMLElement |      | div           | 挂载容器节点   |
| baseElement | HTMLElement |      | document.body | 打印出来的节点 |
| baseElement | HTMLElement |      | document.body | 打印出来的节点 |

用法：

```js
import testUtils from '@tarojs/test-utils-react' // react
// import testUtils from '@tarojs/test-utils-vue3' // vue3
describe('测试mount', () => {
  test('View', async () => {
    const testUtils = new TestUtils()
    await testUtils.mount(View, {
      props: {
        className: 'className',
        children: 'Child Text!',
      },
      // Vue插入插槽
      // slots: {
      //   default: 'Child Text!'
      // }
    })
  })
})
```

## unmount

> 组件卸载

```js
unmount()
```

将组件进行卸载，会触发组件的卸载生命周期

用法：

```js
await testUtils.mount(View)
// 挂载完成 => 卸载组件
testUtils.unmount()
```

## createApp

> 构建应用

```js
await createApp()
```

该 api 主要用于测试**完整应用的表现功能**，从入口开始进行渲染。
将会根据 Taro 项目入口进行应用渲染，读取`app.config.(ts|js)`配置内容，包括如 router 相关信息。

⚠️ **注意：这与真实表现可能存在差异，因为 createApp 为运行时渲染，而非渲染编译产物，所以一些编译插件对运行时的影响降无效**

```js
test('createApp', async () => {
  await testUtils.createApp()
  // 监听/pages/index/index这个页面路由的onShow生命周期触发
  await testUtils.PageLifecycle.onShow('/pages/index/index')
  // 跳转到第二个页面
  Taro.navigateTo({ url: '/pages/second/index' })
  // 监听/pages/second/index这个页面路由的onShow生命周期触发
  await testUtils.PageLifecycle.onShow('/pages/second/index')
  // 当/pages/second/index触发onShow后，打印页面内容
  expect(testUtils.html()).toMatchSnapshot()
  // <body><div class="taro_router" id="app">...
})
```

---

