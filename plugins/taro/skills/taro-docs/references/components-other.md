# Taro Component Documentation


---

## docs/components/common.md

---
title: common
sidebar_label: common
---

## StandardProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| id | `string` | 否 | 组件的唯一标示, 保持整个页面唯一 |
| className | `string` | 否 | 同 `class`，在 React/Nerv 里一般使用 `className` 作为 `class` 的代称 |
| style | `any` | 否 | 组件的内联样式, 可以动态设置的内联样式 |
| key | string or number | 否 | 如果列表中项目的位置会动态改变或者有新的项目添加到列表中，<br />需要使用 `wx:key` 来指定列表中项目的唯一的标识符。 |
| hidden | `boolean` | 否 | 组件是否显示, 所有组件默认显示 |
| animation | `{ actions: TaroGeneral.IAnyObject[]; }` | 否 | 动画属性 |
| ref | `LegacyRef<T>` | 否 | 引用 |
| dangerouslySetInnerHTML | `{ __html: string; }` | 否 | 渲染 HTML<br />[参考地址](/docs/html) |

## FormItemProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| name | `string` | 否 | 表单数据标识 |

## EventProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| onTouchStart | `(event: TouchEvent) => void` | 否 | 手指触摸动作开始 |
| onTouchMove | `(event: TouchEvent) => void` | 否 | 手指触摸后移动 |
| onTouchCancel | `(event: TouchEvent) => void` | 否 | 手指触摸动作被打断，如来电提醒，弹窗 |
| onTouchEnd | `(event: TouchEvent) => void` | 否 | 手指触摸动作结束 |
| onClick | `(event: ITouchEvent) => void` | 否 | 手指触摸后马上离开 |
| onLongPress | `(event: CommonEvent<any>) => void` | 否 | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 |
| onLongClick | `(event: CommonEvent<any>) => void` | 否 | 手指触摸后，超过350ms再离开（推荐使用 longpress 事件代替） |
| onTransitionEnd | `(event: CommonEvent<any>) => void` | 否 | 会在 WXSS transition 或 Taro.createAnimation 动画结束后触发 |
| onAnimationStart | `(event: CommonEvent<any>) => void` | 否 | 会在一个 WXSS animation 动画开始时触发 |
| onAnimationIteration | `(event: CommonEvent<any>) => void` | 否 | 会在一个 WXSS animation 一次迭代结束时触发 |
| onAnimationEnd | `(event: CommonEvent<any>) => void` | 否 | 会在一个 WXSS animation 动画完成时触发 |
| onTouchForceChange | `(event: CommonEvent<any>) => void` | 否 | 在支持 3D Touch 的 iPhone 设备，重按时会触发 |

## CommonEvent

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `string` | 事件类型 |
| timeStamp | `number` | 事件生成时的时间戳 |
| target | `Target` | 触发事件的组件的一些属性值集合 |
| currentTarget | `Target` | 当前组件的一些属性值集合 |
| detail | `T` | 额外的信息 |
| preventDefault | `() => void` | 阻止元素发生默认的行为 |
| stopPropagation | `() => void` | 阻止事件冒泡到父元素,阻止任何父事件处理程序被执行 |

## BaseEventOrig

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `string` | 事件类型 |
| timeStamp | `number` | 事件生成时的时间戳 |
| target | `Target` | 触发事件的组件的一些属性值集合 |
| currentTarget | `Target` | 当前组件的一些属性值集合 |
| detail | `T` | 额外的信息 |
| preventDefault | `() => void` | 阻止元素发生默认的行为 |
| stopPropagation | `() => void` | 阻止事件冒泡到父元素,阻止任何父事件处理程序被执行 |

## BaseTouchEvent

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| touches | `TouchDetail[]` | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | `TouchDetail[]` | 触摸事件，当前变化的触摸点信息的数组 |

## CanvasTouchEvent

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| touches | `TouchDetail[]` | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | `TouchDetail[]` | 触摸事件，当前变化的触摸点信息的数组 |

## ITouchEvent

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| touches | `TouchDetail[]` | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | `TouchDetail[]` | 触摸事件，当前变化的触摸点信息的数组 |

## CanvasTouch

| 参数 | 类型 |
| --- | --- |
| identifier | `number` |
| x | `number` |
| y | `number` |

## ITouch

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| identifier | `number` | 触摸点的标识符 |
| pageX | `number` | 距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴 |
| pageY | `number` | 距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴 |
| clientX | `number` | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴 |
| clientY | `number` | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴 |

## Target

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 事件源组件的id |
| tagName | `string` | 当前组件的类型 |
| dataset | `{ [key: string]: any; }` | 事件源组件上由data-开头的自定义属性组成的集合 |

## currentTarget

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 事件源组件的id |
| tagName | `string` | 当前组件的类型 |
| dataset | `{ [key: string]: any; }` | 事件源组件上由data-开头的自定义属性组成的集合 |

## NetStatus

网络状态数据

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| videoBitrate | `number` | 否 |
| audioBitrate | `number` | 否 |
| videoFPS | string or number | 否 |
| videoGOP | `number` | 否 |
| netSpeed | `number` | 否 |
| netJitter | `number` | 否 |
| videoWidth | string or number | 否 |
| videoHeight | string or number | 否 |

---

## docs/components/event.md

---
title: event
sidebar_label: event
---

## TaroEvent

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| srcElement | `T` |  |
| target | `T` | Returns the object to which event is dispatched (its target). |
| detail | `D` |  |

---

## docs/components/page-meta.md

---
title: PageMeta
sidebar_label: PageMeta
---

页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 navigation-bar 组件一同使用。
通过这个节点可以获得类似于调用 Taro.setBackgroundTextStyle Taro.setBackgroundColor 等接口调用的效果。

:::info
Taro v3.6.19 开始支持
开发者需要在页面配置里添加：`enablePageMeta: true`
:::

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/>  <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html)

## 类型

```tsx
ComponentType<PageMetaProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
// page.config.ts
export default definePageConfig({ enablePageMeta: true, ... })

// page.tsx
function Index () {
  return (
    <View>
     <PageMeta
       pageStyle={myPageStyle}
       onScroll={handleScroll}
     >
       <NavigationBar title={title} />
     </PageMeta>
   </View>
  )
}
```
</TabItem>
<TabItem value="Vue">

```html
<!-- page.config.ts -->
<!-- export default definePageConfig({ enablePageMeta: true, ... }) -->

<!-- page.vue -->
<template>
  <page-meta
    :page-style="myPageStyle"
    @scroll="handleScroll"
  >
    <navigation-bar :title="title" />
  </page-meta>
</template>
```
</TabItem>
</Tabs>

## PageMetaProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| backgroundTextStyle | `string` |  | 否 | 下拉背景字体、loading 图的样式，仅支持 dark 和 light |
| backgroundColor | `string` |  | 否 | 窗口的背景色，必须为十六进制颜色值 |
| backgroundColorTop | `string` |  | 否 | 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 |
| backgroundColorBottom | `string` |  | 否 | 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 |
| scrollTop | `string` | `""` | 否 | 滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置 |
| scrollDuration | `number` | `300` | 否 | 滚动动画时长 |
| pageStyle | `string` | `""` | 否 | 页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点 |
| rootFontSize | `string` | `""` | 否 | 页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小 |
| rootBackgroundColor | `string` |  | 否 | 页面内容的背景色，用于页面中的空白部分和页面大小变化 resize 动画期间的临时空闲区域 |
| pageFontSize | `string` |  | 否 | 页面 page 的字体大小，可以设置为 system ，表示使用当前用户设置的微信字体大小 |
| pageOrientation | `string` |  | 否 | 页面的方向，可为 auto portrait 或 landscape |
| onResize | `CommonEventFunction<onResizeEventDetail>` |  | 否 | 页面尺寸变化时会触发 resize 事件 |
| onScroll | `CommonEventFunction<onScrollEventDetail>` |  | 否 | 页面滚动时会触发 scroll 事件 |
| onScrollDone | `CommonEventFunction` |  | 否 | 如果通过改变 scroll-top 属性来使页面滚动，页面滚动结束后会触发 scrolldone 事件 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PageMetaProps.backgroundTextStyle | ✔️ |  |  |  |  |  |
| PageMetaProps.backgroundColor | ✔️ | ✔️ |  |  | ✔️ |  |
| PageMetaProps.backgroundColorTop | ✔️ | ✔️ |  |  | ✔️ |  |
| PageMetaProps.backgroundColorBottom | ✔️ | ✔️ |  |  | ✔️ |  |
| PageMetaProps.scrollTop | ✔️ | ✔️ |  |  | ✔️ |  |
| PageMetaProps.scrollDuration | ✔️ | ✔️ |  |  | ✔️ |  |
| PageMetaProps.pageStyle | ✔️ | ✔️ |  |  |  |  |
| PageMetaProps.rootFontSize | ✔️ | ✔️ |  |  |  |  |
| PageMetaProps.rootBackgroundColor | ✔️ | ✔️ |  |  | ✔️ |  |
| PageMetaProps.pageFontSize | ✔️ | ✔️ |  |  |  |  |
| PageMetaProps.pageOrientation | ✔️ |  |  |  |  |  |
| PageMetaProps.onResize | ✔️ |  |  |  |  |  |
| PageMetaProps.onScroll | ✔️ | ✔️ |  |  |  |  |
| PageMetaProps.onScrollDone | ✔️ |  |  |  |  |  |

### onResizeEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| deviceOrientation | "portrait" or "landscape" | 否 | 设备方向 |
| size | `resizeType` | 是 | 窗口尺寸 |

### resizeType

窗口尺寸类型

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| windowWidth | `number` | 是 | 窗口宽度 |
| windowHeight | `number` | 是 | 窗口高度 |
| screenWidth | `number` | 否 | 屏幕宽度 |
| screenHeight | `number` | 否 | 屏幕高度 |

### onScrollEventDetail

| 参数 | 类型 |
| --- | --- |
| scrollTop | `number` |
