## docs/apis/skyline/worklet.md

---
title: worklet
sidebar_label: worklet
---

worklet 对象，可以通过 wx.worklet 获取

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/wx.worklet.html)

## 类型

```tsx
worklet
```

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scrollViewContext | `{ scrollTo(NodesRef: TaroGeneral.IAnyObject, object: Option): void; }` | ScrollView 实例，可在 worklet 函数内操作 scroll-view 组件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.scrollViewContext.html) |
| Easing | `Easing` |  |

### cancelAnimation

取消由 SharedValue 驱动的动画

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.cancelAnimation.html)

```tsx
(SharedValue: TaroGeneral.IAnyObject) => void
```

| 参数 | 类型 |
| --- | --- |
| SharedValue | `TaroGeneral.IAnyObject` |

### derived

衍生值 DerivedValue，可基于已有的 SharedValue 生成其它共享变量。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.derived.html)

```tsx
(updaterWorklet: TaroGeneral.TFunc) => TaroGeneral.IAnyObject
```

| 参数 | 类型 |
| --- | --- |
| updaterWorklet | `TaroGeneral.TFunc` |

### shared

创建共享变量 SharedValue，用于跨线程共享数据和驱动动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.shared.html)

```tsx
(initialValue: any) => TaroGeneral.IAnyObject
```

### decay

基于滚动衰减的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.decay.html)

```tsx
(options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| options | `Option` | 动画配置<br />param: options 动画配置 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### spring

基于物理的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.spring.html)

```tsx
(toValue: string | number, options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| toValue | string or number | 目标值<br />param: toValue 目标值 |
| options | `Option` | 动画配置<br />param: options 动画配置 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### timing

基于时间的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.timing.html)

```tsx
(toValue: string | number, options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| toValue | string or number | 目标值<br />param: toValue 目标值 |
| options | `Option` | 动画配置<br />param: options 动画配置 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### delay

延迟执行动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.delay.html)

```tsx
(delayMS: number, delayedAnimation: TaroGeneral.IAnyObject) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| delayMS | `number` | 动画开始前等待的时间，单位：毫秒<br />param: delayMS 动画开始前等待的时间，单位：毫秒 |
| delayedAnimation | `TaroGeneral.IAnyObject` | 动画对象<br />param: delayedAnimation 动画对象 |

### repeat

重复执行动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.repeat.html)

```tsx
(delayedAnimation: TaroGeneral.IAnyObject, numberOfReps: number, reverse?: boolean, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| delayedAnimation | `TaroGeneral.IAnyObject` |  |
| numberOfReps | `number` | 重复次数。为负值时一直循环，直到被取消动画。<br />param: numberOfReps 重复次数。为负值时一直循环，直到被取消动画。 |
| reverse | `boolean` | 反向运行动画，每周期结束动画由尾到头运行。该字段仅对 timing 和 spring 返回的动画对象生效。<br />param: reverse 反向运行动画，每周期结束动画由尾到头运行。该字段仅对 timing 和 spring 返回的动画对象生效。 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### sequence

组合动画序列，依次执行传入的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.sequence.html)

```tsx
(...delayedAnimation: TaroGeneral.IAnyObject) => TaroGeneral.IAnyObject
```

| 参数 | 类型 |
| --- | --- |
| delayedAnimation | `TaroGeneral.IAnyObject` |

### runOnJS

worklet 函数运行在 UI 线程时，捕获的外部函数可能为 worklet 类型或普通函数，为了更明显的对其区分，要求必须使用 runOnJS 调回 JS 线程的普通函数。 有这样的要求是因为，调用其它 worklet 函数时是同步调用，但在 UI 线程执行 JS 线程的函数只能是异步，开发者容易混淆，试图同步获取 JS 线程的返回值。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/tool-function/worklet.runOnJS.html)

```tsx
(fn: TaroGeneral.TFunc) => TaroGeneral.TFunc
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fn | `TaroGeneral.TFunc` | worklet 类型函数<br />param: fn worklet 类型函数 |

### runOnUI

在 UI 线程执行 worklet 函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/tool-function/worklet.runOnUI.html)

```tsx
(fn: TaroGeneral.TFunc) => TaroGeneral.TFunc
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fn | `TaroGeneral.TFunc` | worklet 类型函数<br />param: fn worklet 类型函数 |

## 参数

### SharedValue

### DerivedValue

### AnimationObject

### WorkletFunction

### scrollViewContext

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| top | `number` | 否 | 顶部距离 |
| left | `number` | 否 | 左边界距离 |
| duration | `number` | 否 | 滚动动画时长 |
| animated | `boolean` | 否 | 是否启用滚动动画 |
| easingFunction | `string` | 否 | 动画曲线 |

### decay

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| velocity | `number` | 否 | 初速度 |
| deceleration | `number` | 否 | 衰减速率 |
| clamp | `number[]` | 否 | 边界值，长度为 2 的数组 |

### Easing

#### bounce

简单的反弹效果

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### ease

简单的惯性动画

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### elastic

简单的弹性动画，类似弹簧来回摆动，高阶函数。默认弹性为 1，会稍微超出一次。弹性为 0 时 不会过冲

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(bounciness?: number) => any
```

| 参数 | 类型 |
| --- | --- |
| bounciness | `number` |

#### linear

线性函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### quad

二次方函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### cubic

立方函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### poly

高阶函数，返回幂函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(n: number) => any
```

| 参数 | 类型 |
| --- | --- |
| n | `number` |

#### bezier

三次贝塞尔曲线，效果同 css transition-timing-function

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(x1: number, y1: number, x2: number, y2: number) => any
```

| 参数 | 类型 |
| --- | --- |
| x1 | `number` |
| y1 | `number` |
| x2 | `number` |
| y2 | `number` |

#### circle

圆形曲线

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### sin

正弦函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### exp

指数函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### in

正向运行 easing function，高阶函数。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(easing: (t: number) => any) => any
```

| 参数 | 类型 |
| --- | --- |
| easing | `(t: number) => any` |

#### out

反向运行 easing function，高阶函数。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(easing: (t: number) => any) => any
```

| 参数 | 类型 |
| --- | --- |
| easing | `(t: number) => any` |

#### inOut

前半程正向，后半程反向，高阶函数。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(easing: (t: number) => any) => any
```

| 参数 | 类型 |
| --- | --- |
| easing | `(t: number) => any` |

### spring

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| damping | `number` | 否 | 阻尼系数 |
| mass | `number` | 否 | 重量系数，值越大移动越慢 |
| stiffness | `number` | 否 | 弹性系数 |
| overshootClamping | `boolean` | 否 | 动画是否可以在指定值上反弹 |
| restDisplacementThreshold | `number` | 否 | 弹簧静止时的位移 |
| restSpeedThreshold | `number` | 否 | 弹簧静止的速度 |
| velocity | `number` | 否 | 速度 |

### timing

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| duration | `number` | 否 | 动画时长 |
| easing | `(t: number) => number` | 否 | 动画曲线 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| worklet | ✔️ |  |  |  |

---

## docs/apis/swan/bookshelf/deleteBookshelf.md

---
title: Taro.deleteBookshelf(option)
sidebar_label: deleteBookshelf
---

删除书架中的内容（需宿主支持书架入口)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-deleteBookshelf/)

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
| category | `string` | 是 | 要删除的内容分类 |
| contentIds | `string[]` | 是 | 要删除书架内容的 id，支持传多个，最多 100 条；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符）。支持批量删除的同一个 category 下的多个 id，不同 category 下的 id 请分别调用该接口删除 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Category

| 参数 | 说明 |
| --- | --- |
| article | 专栏模板 |
| doc | 文档模板 |
| cartoon | 动漫模板 |
| av | 影音模板 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| list | `IListItem[]` | 添加到书架的结果列表 |

### IListItem

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| contentId | `string` | 内容的唯一标识 |
| status | `keyof Status` | 删除状态：值为 0 时是失败，为 1 时是成功 |
| msg | `string` | 删除信息 |

### Status

| 参数 | 说明 |
| --- | --- |
| 0 | 失败 |
| 1 | 成功 |

## 示例代码

```tsx
Taro.deleteBookshelf({
  category: 'doc',
  contentIds: ['test1', 'test2'],
  success(res) {
    Taro.showModal({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})
```

---

## docs/apis/swan/bookshelf/insertBookshelf.md

---
title: Taro.insertBookshelf(option)
sidebar_label: insertBookshelf
---

添加内容到宿主书架

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> 百度小程序: （需宿主支持书架入口）

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-insertBookshelf/)

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
| category | `string` | 是 | 添加的内容分类 |
| contentIds | `string[]` | 是 | 要添加到书架内容的 id，支持传多个，最多 100 条；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符） |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Category

| 参数 | 说明 |
| --- | --- |
| article | 专栏模板 |
| doc | 文档模板 |
| cartoon | 动漫模板 |
| av | 影音模板 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| list | `IListItem[]` | 添加到书架的结果列表 |

### IListItem

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| contentId | `string` | 内容的唯一标识 |
| status | `keyof Status` | 添加状态：值为 0 时是失败，为 1 时是成功 |
| msg | `string` | 添加信息 |

### Status

| 参数 | 说明 |
| --- | --- |
| 0 | 失败 |
| 1 | 成功 |

## 示例代码

```tsx
Taro.insertBookshelf({
  category: 'doc',
  contentIds: ['test1', 'test2'],
  success(res) {
    Taro.showModal({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})

---

## docs/apis/swan/bookshelf/navigateToBookshelf.md

---
title: Taro.navigateToBookshelf(option)
sidebar_label: navigateToBookshelf
---

跳转到宿主书架

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> 百度小程序: （需宿主支持书架入口）

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-navigateToBookshelf/)

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
| category | `string` | 是 | 跳转到指定的内容分类<br />API 支持度: swan |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Category

| 参数 | 说明 |
| --- | --- |
| article | 专栏模板 |
| doc | 文档模板 |
| cartoon | 动漫模板 |
| av | 影音模板 |

## 示例代码

```tsx
Taro.navigateToBookshelf({
  category: 'article',
  contentIds: 'test1',
  success(res) {
    Taro.showModal({
      title: 'navigateToBookshelf',
      content: 'success'
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})

---

## docs/apis/swan/bookshelf/queryBookshelf.md

---
title: Taro.queryBookshelf(option)
sidebar_label: queryBookshelf
---

查询宿主书架的相关内容

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> 百度小程序: （需宿主支持书架入口）

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-queryBookshelf/)

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
| contentIds | `string[]` | 是 | 要查询内容的 id，支持传多个，最多 100 条；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符） |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| list | `IListItem[]` | 查询的内容结果列表 |

### IListItem

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| contentId | `string` | 内容的唯一标识 |
| status | `keyof Status` | 状态 |

### Status

| 参数 | 说明 |
| --- | --- |
| 0 | 不存在 |
| 1 | 存在 |

## 示例代码

```tsx
Taro.queryBookshelf({
  contentIds: ['test1', 'test2'],
  success(res) {
    Taro.showModal({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})
```

---

## docs/apis/swan/bookshelf/updateBookshelfReadTime.md

---
title: Taro.updateBookshelfReadTime(option)
sidebar_label: updateBookshelfReadTime
---

更新已加入宿主书架的内容的阅读时间

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> 百度小程序: （需宿主支持书架入口）

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-queryBookshelf/)

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
| category | `string` | 是 | 添加的内容分类 |
| contentIds | `string[]` | 是 | 要更新内容的 id；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符） |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Category

| 参数 | 说明 |
| --- | --- |
| article | 专栏模板 |
| doc | 文档模板 |
| cartoon | 动漫模板 |
| av | 影音模板 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| status | `keyof Status` | 更新状态 |
| msg | `string` | 更新的结果信息 |

### Status

| 参数 | 说明 |
| --- | --- |
| 0 | 失败 |
| 1 | 成功 |

## 示例代码

```tsx
Taro.updateBookshelfReadTime({
  category: 'doc',
  contentIds: 'test1',
  success(res) {
    Taro.showModal({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})

---

## docs/apis/swan/download-package/downloadPackage.md

---
title: Taro.downloadPackage(option)
sidebar_label: downloadPackage
---

针对在小程序中调用其他小程序的场景，预下载其他小程序的包内容。
Web 态说明：Web 态不支持预下载的能力。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-downloadPackage/)

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
| appKey | `string` | 是 | 预下载的小程序的 appKey |
| pageUrl | `string` | 否 | 预下载的小程序的 pageUrl ，默认值为小程序的首页页面 |
| success | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: TaroGeneral.CallbackResult) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/swan/download-package/downloadPackages.md

---
title: Taro.downloadPackages(option)
sidebar_label: downloadPackages
---

针对在小程序中调用其他小程序的场景，预下载其他小程序的包内容。
Web 态说明：Web 态不支持预下载的能力。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-downloadPackages/)

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
| pageList | `IPageItem[]` | 是 | 预下载的小程序的列表。 |
| success | `(res: SuccessCallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: TaroGeneral.CallbackResult) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### IPageItem

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appKey | `string` | 预下载的小程序的 appKey |
| pages | `string[]` | 页面路径 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| __index | `__index` | 小程序包预下载结果回调 |

### IAppKeyResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| pageUrl | `string` | 页面路径 |
| status | `string` | 预下载能力调用结果。值为 "0" 时是成功，非 "0" 时是失败 |
| message | `string` | 预下载结果信息 |

---

## docs/apis/swan/download-package/loadSubPackage.md

---
title: Taro.loadSubPackage(option)
sidebar_label: loadSubPackage
---

提前下载好子包的资源，目录结构配置参考[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-loadSubPackage/)

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
| success | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: TaroGeneral.CallbackResult) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/swan/pay/getOptimalPriceInfo.md

---
title: Taro.getOptimalPriceInfo(option)
sidebar_label: getOptimalPriceInfo
---

获取商品使用百度平台券后的价格
通过百度收银台支付的商品，用户在支付时可以享受百度平台券提供的优惠。
使用 API swan.getOptimalPriceInfo 可以提前获知用户在支付时享受的优惠价格。（当用户有多张平台券时，按照平台最优优惠价格计算，与支付时默认选中的优惠券对应的优惠一致）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-getOptimalPriceInfo/)

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
| productsInfo | `ProductInfo[]` | 是 | 商品信息 |
| success | `(res: SuccessCallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: TaroGeneral.CallbackResult) => any` | 否 | 接口调用失败的回调函数 |

### ProductInfo

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appKey | `string` | 支付的 appKey |
| products | `Product[]` | 商品信息 |

### Product

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| amount | `number` | 是 | 商品单价(原价) |
| promotionTag | `string` | 否 | 商品标识 |
| productId | `string` | 是 | 开发者自定义商品 ID，在success回调中，会与减免信息一起返回。 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| productsInfo | `ProductInfoSuccess[]` | 商品信息 |

### ProductInfoSuccess

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appKey | `string` | 支付的 appKey |
| products | `ProductSuccess[]` | 减免后的商品信息 |

### ProductSuccess

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| amount | `number` | 商品单价(原价) |
| productId | `string` | 开发者自定义商品 ID |
| promotionTag | `string` | 商品标识 |
| reduceAmount | `number` | 百度平台券减免金额 |
| afterPayAmount | `number` | 百度平台券减免后金额 |

---

## docs/apis/swan/pay/requestPolymerPayment.md

---
title: Taro.requestPolymerPayment(option)
sidebar_label: requestPolymerPayment
---

1）百度收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付渠道，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。
2）上述支付渠道在 C 端收银台有两种展示方式，开发者可以选择其中一种实现。
方式一：将支付渠道内嵌在小程序提单页面中，实现方式参考文档[inline-payment-panel内嵌支付组件](https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel/)。
方式二：在用户确认订单后，调起收银台半屏面板承载支付渠道，实现方式参考文档调起[百度收银台](https://smartprogram.baidu.com/docs/develop/function/tune_up_2.0/#%E7%99%BE%E5%BA%A6%E6%94%B6%E9%93%B6%E5%8F%B0%E6%8E%A5%E5%8F%A32-0-%E8%AF%B4%E6%98%8E)。

Web 态说明：为了保证用户交易行为全流程闭环体验，在 Web 态下调用该方法会做打开百度 App 对应小程序页面的降级处理。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-requestPolymerPayment/)

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
| orderInfo | `OrderInfo` | 是 | 订单信息 |
| success | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: FailCallbackResult) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### OrderInfo

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| dealId | `string` | 是 | 跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，与账号绑定的结算协议一一对应，每笔交易将结算到 dealId 对应的协议主体。<br />详见[核心参数获取与组装](https://smartprogram.baidu.com/docs/develop/function/parameter/)。 |
| appKey | `string` | 是 | 支付能力开通后分配的支付 appKey，用以表示应用身份的唯一 ID ，在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用。<br />详见[核心参数获取与组装](https://smartprogram.baidu.com/docs/develop/function/parameter/)。 |
| totalAmount | `string` | 是 | 订单金额（单位：人民币分）。注：小程序测试包测试金额不可超过 1000 分 |
| tpOrderId | `string` | 是 | 小程序开发者系统创建的唯一订单 ID ，当支付状态发生变化时，会通过此订单 ID 通知开发者。 |
| notifyUrl | `string` | 否 | 通知开发者支付状态的回调地址，必须是合法的 URL ，与开发者平台填写的支付回调地址作用一致，未填写的以平台回调地址为准 |
| dealTitle | `string` | 是 | 订单的名称。 |
| signFieldsRange | `string` | 是 | 用于区分验签字段范围，signFieldsRange 的值：0：原验签字段 appKey+dealId+tpOrderId；1：包含 totalAmount 的验签，验签字段包括appKey+dealId+tpOrderId+totalAmount。固定值为 1 。 |
| rsaSign | `string` | 是 | 对appKey+dealId+totalAmount+tpOrderId进行 RSA 加密后的签名，防止订单被伪造。<br />签名过程见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。 |
| bizInfo | `string` | 否 | 订单详细信息，需要是一个可解析为 JSON Object 的字符串。<br />字段内容见： [bizInfo 组装](https://smartprogram.baidu.com/docs/develop/function/parameter/#%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0%E7%BB%84%E8%A3%85)。 |
| payResultUrl | `string` | 否 | 当前页面 path。Web 态小程序支付成功后跳回的页面路径，例如：'/pages/payResult/payResult' |
| inlinePaySign | `string` | 否 | 内嵌支付组件返回的支付信息加密 key，与[内嵌支付组件](https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel)配套使用，此值不传或者传空时默认调起支付面板。 |
| promotionTag | `string` | 否 | 平台营销信息，此处传可使用平台券的 spuid，支持通过英文逗号分割传入多个 spuid 值，仅与百度合作平台类目券的开发者需要填写 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | `number` | 错误码 |
| data | `DetailFailData` | 详细错误信息。<br />注: 目前仅在内嵌支付组件调起 swan.requestPolymerPayment 时，选择数字人民币 APP 渠道支付且用户未下载数字人民币 APP 时，返回具体错误信息 data。 |

### DetailFailData

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| subErrCode | `number` | 详细错误码。20014 表示【未下载数字人民币 APP】 |
| subErrMsg | `string` | 详细错误信息 |

---

## docs/apis/swan/getFavorStatus.md

---
title: Taro.getFavorStatus(option)
sidebar_label: getFavorStatus
---

获取小程序用户关注状态。
Web 态说明：Web 态小程序暂不支持关注小程序。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-getFavorStatus/)

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
| success | `(res: SuccessCallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| isFavor | `string` | 用户关注关注状态，1表示已关注，0表示未关注 |

---

## docs/apis/swan/getSystemRiskInfo.md

---
title: Taro.getSystemRiskInfo(option)
sidebar_label: getSystemRiskInfo
---

获取用于得到风控信息的加密信息对象。更多小程序风控能力参见[风控服务](https://smartprogram.baidu.com/docs/develop/serverapi/open_risk_power/)。
Web 态说明：Web 态小程序暂不支持获取用于得到风控信息的加密信息对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-getSystemRiskInfo/)

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
| success | `(res: SuccessCallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| content | `Object` | 用于获取风控信息的加密信息对象。<br />要获取风控信息，需要和[风控检测](https://smartprogram.baidu.com/docs/develop/serverapi/open_risk_power/#detectrisk/)接口联合使用，并作为风控检测接口的 xtoken 参数传入。 |

### IContent

| 参数 | 类型 |
| --- | --- |
| key | `string` |
| value | `string` |

---

## docs/apis/swan/getTopStatus.md

---
title: Taro.getTopStatus(option)
sidebar_label: getTopStatus
---

获取小程序用户置顶状态。
Web 态说明：Web 态小程序暂不支持获取置顶状态，降级调起百度 App。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-getTopStatus/)

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
| success | `(res: SuccessCallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| isTop | `boolean` | 置顶状态 |

---

## docs/apis/swan/openBdboxWebview.md

---
title: Taro.openBdboxWebview(option)
sidebar_label: openBdboxWebview
---

小程序跳转百度 App 内特定页面。接入本 API 的开发者，需要了解跳转页面的 scheme，并根据文档调用 API 完成跳转。可在百度 App 中，通过将跳转页面 scheme 生成对应二维码，并使用百度 APP 相机扫描二维码调起的方式，来确保 scheme 是否正确。
Web 态说明：
 1.由于浏览器的限制，Web 态暂时无法准确获取跳转百度 App 成功 / 失败状态，会执行失败回调；
 2.在用户未安装手百、部分第三方浏览器封禁百度 App 的情况下，Web 态会尝试降级调起应用商店。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-openBdboxWebview/)

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
| module | `string` | 否 | 跳转百度 App 特定页面的 scheme 的 module |
| action | `string` | 否 | 跳转百度 App 特定页面的 scheme 的 action |
| path | `string` | 否 | 跳转百度 App 特定页面的 scheme 的 path |
| authority | `string` | 否 | 跳转百度 App 特定页面的 scheme 的 authority |
| parameters | `Object` | 否 | 跳转百度 App 特定页面的 scheme 的参数 |
| success | `(res: any) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/swan/setDocumentTitle.md

---
title: Taro.setDocumentTitle(option)
sidebar_label: setDocumentTitle
---

动态设置当前页面的标题。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-setDocumentTitle/)

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
| title | `string` | 是 | 页面中 title 标签中的内容 |
| success | `(res: any) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/swan/setMetaDescription.md

---
title: Taro.setMetaDescription(option)
sidebar_label: setMetaDescription
---

设置 web 版小程序 description meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-setMetaDescription/)

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
| content | `string` | 是 | 需要设置的 description 内容 |
| success | `(res: any) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/swan/setMetaKeywords.md

---
title: Taro.setMetaKeywords(option)
sidebar_label: setMetaKeywords
---

设置 web 版小程序 keywords meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-setMetaKeywords/)

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
| content | `string` | 是 | 需要设置的 keywords 内容 |
| success | `(res: any) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/swan/setPageInfo.md

---
title: Taro.setPageInfo(option)
sidebar_label: setPageInfo
---

百度智能小程序可接入百度搜索和百度 App，setPageInfo 负责为小程序设置各类页面基础信息，包括标题、关键字、页面描述以及图片信息、视频信息等。开发者为智能小程序设置完备的页面基础信息，有助于智能小程序在搜索引擎和信息流中得到更加有效的展示和分发。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-setPageInfo/)

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
| title | `string` | 是 | 页面标题 |
| keywords | `string` | 是 | 页面关键字 |
| description | `string` | 是 | 页面描述信息 |
| releaseDate | `string` | 否 | 原始发布时间(年-月-日 时:分:秒 带有前导零） |
| articleTitle | `string` | 否 | 文章(内容)标题(适用于当前页面是图文、视频类的展示形式，文章标题需要准确标识当前文章的主要信息点；至少6个字，不可以全英文。) |
| image | string or string[] | 否 | 图片线上地址，用于信息流投放后的封面显示，最多3张，单图片最大2M；封面图建议尺寸：高>=210px & 宽>=375px；最小尺寸：高>=146px & 宽>=218px。多张图时，用数组表示 |
| video | `Video` | 否 | 视频信息，多个视频时，用数组表示 |
| visit | `Visit` | 否 | 浏览信息 |
| likes | `string` | 否 | 点赞量，若页面未统计可为空 |
| comments | `string` | 否 | 评论量，若页面未统计可为空 |
| collects | `string` | 否 | 收藏量，若页面未统计可为空 |
| shares | `string` | 否 | 分享量，若页面未统计可为空 |
| followers | `string` | 否 | 关注量，若页面未统计可为空 |
| success | `() => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: any) => any` | 否 | 接口调用失败的回调函数 |
| complete | `() => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Video

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| url | `string` | 视频地址 |
| duration | `string` | 视频时长(单位为秒) |
| image | `string` | 视频封面图 |

### Visit

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| pv | `string` | 否 | 页面的浏览量(不去重用户） |
| uv | `string` | 否 | 页面的点击量（去重用户） |
| sessionDuration | `string` | 否 | 页面的用户人均停留时长，以秒为单位。 |

## 示例代码

```tsx
Taro.setPageInfo({
  title: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！-百度贴吧',
  keywords: '百度,百度贴吧,好运中国年,60,晒元,宵节',
  description: '晒元宵节活动红包，爱..昨天的百度APP元宵节活动中，共发出2亿现金红包、含151万个手气现金大奖和240辆红旗轿车，谁是好运锦鲤，快来分享！马上惊喜升级~摇中红包的锦鲤们即刻晒出红包金额截图，我们将会抽取660位好运锦鲤',
  articleTitle: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！',
  releaseDate: '2019-01-02 12:01:30',
  image: [
      'https://c.hiphotos.baidu.com/forum/w%3D480/sign=73c62dda83b1cb133e693d1bed5456da/f33725109313b07e8dee163d02d7912396dd8cfe.jpg',
      'https://hiphotos.baidu.com/fex/%70%69%63/item/43a7d933c895d143e7b745607ef082025baf07ab.jpg'
  ],
  video: [{
      url: 'https://www.baidu.com/mx/v12.mp4',
      duration: '100',
      image: 'https://smartprogram.baidu.com/docs/img/image-scaleToFill.png'
  }],
  visit: {
      pv: '1000',
      uv: '100',
      sessionDuration: '130'
  },
  likes: '75',
  comments: '13',
  collects: '23',
  shares: '8',
  followers: '35',
  success: res => {
      console.log('setPageInfo success');
  },
  fail: err => {
      console.log('setPageInfo fail', err);
  }
})
```

---

## docs/apis/taro.extend/eventCenter.md

---
title: eventCenter
sidebar_label: eventCenter
---

事件中心

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
TaroGeneral.Events
```

---

## docs/apis/taro.extend/getAppInfo.md

---
title: Taro.getAppInfo()
sidebar_label: getAppInfo
---

小程序获取和 Taro 相关的 App 信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
() => AppInfo
```

## 参数

### AppInfo

应用信息

| 参数 | 类型 |
| --- | --- |
| platform | `string` |
| taroVersion | `string` |
| designWidth | number or ((size?: string or number) => number) |

---

## docs/apis/taro.extend/getCurrentInstance.md

---
title: Taro.getCurrentInstance()
sidebar_label: getCurrentInstance
---

获取当前页面实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
() => Current
```

## 参数

### Current

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| app | `any` | 是 |  |
| router | `any` | 是 |  |
| page | `any` | 是 |  |
| onReady | `string` | 是 |  |
| onHide | `string` | 是 |  |
| onShow | `string` | 是 |  |
| preloadData | `Record<any, any>` | 否 |  |
| rnNavigationRef | `React.RefObject<any>` | 否 | RN 私有对象navigationRef，用于使用底层接口控制路由 |

---

## docs/apis/taro.extend/getEnv.md

---
title: Taro.getEnv()
sidebar_label: getEnv
---

获取环境变量

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
() => TaroGeneral.ENV_TYPE
```

---

## docs/apis/taro.extend/getEnvInfoSync.md

---
title: Taro.getEnvInfoSync()
sidebar_label: getEnvInfoSync
---

## 类型

```tsx
() => { microapp: { mpVersion: string; envType: string; appId: string; }; plugin: Record<string, unknown>; common: { USER_DATA_PATH: string; location: string; launchFrom: string; schema: string; }; }
```

---

## docs/apis/taro.extend/getRenderer.md

---
title: Taro.getRenderer()
sidebar_label: getRenderer
---

获取当前页面渲染引擎类型

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
() => "webview" | "skyline"
```

---

## docs/apis/taro.extend/getTabBar.md

---
title: Taro.getTabBar(page)
sidebar_label: getTabBar
---

获取自定义 TabBar 对应的 React 或 Vue 组件实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
<T>(page: any) => T
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| page | `T` | 小程序页面对象，可以通过 Taro.getCurrentInstance().page 获取<br />param: page 小程序页面对象，可以通过 Taro.getCurrentInstance().page 获取 |

---

## docs/apis/taro.extend/initPxTransform.md

---
title: Taro.initPxTransform(config)
sidebar_label: initPxTransform
---

尺寸转换初始化

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(config: { baseFontSize?: number; deviceRatio?: TaroGeneral.TDeviceRatio; designWidth?: number | ((size?: string | number) => number); targetUnit?: string; unitPrecision?: number; }) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| config | { baseFontSize?: number; deviceRatio?: TaroGeneral.TDeviceRatio; designWidth?: number or ((size?: string or number) => number); targetUnit?: string; unitPrecision?: number; } |

---

