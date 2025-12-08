## docs/components/viewContainer/cover-image.md

---
title: CoverImage
sidebar_label: CoverImage
---

覆盖在原生组件之上的图片视图。可覆盖的原生组件同cover-view，支持嵌套在cover-view里。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html)

## 类型

```tsx
ComponentType<CoverImageProps>
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
// js
class App extends Components {
  render () {
    return (
      <View className='container'>
      <Video id='myVideo' src='src'>
        <CoverView className='controls'>
          <CoverView className='play' onClick='play'>
            <CoverImage className='img' src='src' />
          </CoverView>
        </CoverView>
      </Video>
    )
  }
}
// css
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>
    </video>
    <cover-view class='controls'>
      <cover-view class='play' @tap='play'>
        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />
      </cover-view>
    </cover-view>
  </view>
</template>

<style>
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
</style>
```
</TabItem>
</Tabs>

## CoverImageProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| src | `string` | 是 | 图标路径，支持临时路径、网络地址、云文件ID。暂不支持base64格式。 |
| referrerPolicy | "origin" or "no-referrer" | 否 | 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； |
| fixedTop | `string` | 否 | 设置与容器顶部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 top 值，该属性优先级高于 fixed-bottom，CSS 设置的 position、top、bottom 值 |
| fixedRight | `string` | 否 | 设置与容器右侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 right 值，该属性优先级高于 CSS 设置的 position、left、right 值 |
| fixedBottom | `string` | 否 | 设置与容器底部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 bottom 值，该属性优先级高于 CSS 设置的 position、top、bottom 值 |
| fixedLeft | `string` | 否 | 设置与容器左侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 left 值，该属性优先级高于 fixed-right，CSS 设置的 position、left、right 值 |
| ariaRole | `string` | 否 | 无障碍访问，（角色）标识元素的作用 |
| ariaLabel | `string` | 否 | 无障碍访问，（属性）元素的额外描述 |
| onLoad | `CommonEventFunction` | 否 | 图片加载成功时触发 |
| onError | `CommonEventFunction` | 否 | 图片加载失败时触发 |
| onTap | `CommonEventFunction` | 否 | 点击事件回调。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CoverImageProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| CoverImageProps.referrerPolicy | ✔️ |  |  |  |  |  |  |  |  |  |
| CoverImageProps.fixedTop |  | ✔️ |  |  |  |  |  |  |  |  |
| CoverImageProps.fixedRight |  | ✔️ |  |  |  |  |  |  |  |  |
| CoverImageProps.fixedBottom |  | ✔️ |  |  |  |  |  |  |  |  |
| CoverImageProps.fixedLeft |  | ✔️ |  |  |  |  |  |  |  |  |
| CoverImageProps.ariaRole |  |  |  | ✔️ |  |  |  |  |  |  |
| CoverImageProps.ariaLabel |  |  |  | ✔️ |  |  |  |  |  |  |
| CoverImageProps.onLoad | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| CoverImageProps.onError | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| CoverImageProps.onTap |  |  | ✔️ |  |  |  |  |  |  |  |

---

## docs/components/viewContainer/cover-view.md

---
title: CoverView
sidebar_label: CoverView
---

覆盖在原生组件之上的文本视图。可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher 只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)

## 类型

```tsx
ComponentType<CoverViewProps>
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
// js
class App extends Components {
  render () {
    return (
      <View className='container'>
        <Video id='myVideo' src='src'>
          <CoverView className='controls'>
            <CoverView className='play' onClick='play'>
              <CoverImage className='img' src='src' />
            </CoverView>
          </CoverView>
        </Video>
      </View>
    )
  }
}
// css
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>
    </video>
    <cover-view class='controls'>
      <cover-view class='play' @tap='play'>
        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />
      </cover-view>
    </cover-view>
  </view>
</template>

<style>
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
</style>
```
</TabItem>
</Tabs>

## CoverViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| scrollTop | `number` |  | 否 | 设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效 |
| fixedTop | `string` |  | 否 | 设置与容器顶部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 top 值，该属性优先级高于 fixed-bottom，CSS 设置的 position、top、bottom 值 |
| fixedRight | `string` |  | 否 | 设置与容器右侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 right 值，该属性优先级高于 CSS 设置的 position、left、right 值 |
| fixedBottom | `string` |  | 否 | 设置与容器底部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 bottom 值，该属性优先级高于 CSS 设置的 position、top、bottom 值 |
| fixedLeft | `string` |  | 否 | 设置与容器左侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 left 值，该属性优先级高于 fixed-right，CSS 设置的 position、left、right 值 |
| ariaRole | `string` |  | 否 | 无障碍访问，（角色）标识元素的作用 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| scrollX | `boolean` | `false` | 否 | 允许横向滚动。 |
| scrollY | `boolean` | `false` | 否 | 允许纵向滚动。 |
| upperThreshold | `number` | `50` | 否 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件。 |
| lowerThreshold | `number` | `50` | 否 | 距底部/右边多远时（单位px），触发 scrolltolower 事件。 |
| scrollLeft | `number` |  | 否 | 设置横向滚动条位置。 |
| scrollIntoView | `string` |  | 否 | 滚动到子元素，值应为某子元素的 id。当滚动到该元素时，元素顶部对齐滚动区域顶部。<br />说明：scroll-into-view 的优先级高于 scroll-top。 |
| scrollWithAnimation | `boolean` | `false` | 否 | 在设置滚动条位置时使用动画过渡。 |
| scrollAnimationDuration | `number` |  | 否 | 当 scroll-with-animation设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位 ms。 |
| enableBackToTop | `boolean` | `false` | 否 | 当点击 iOS 顶部状态栏或者双击 Android 标题栏时，滚动条返回顶部，只支持竖向。 |
| trapScroll | `boolean` | `false` | 否 | 纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动。 |
| disableLowerScroll | `string` |  | 否 | 发生滚动前，对滚动方向进行判断，当方向是顶部/左边时，如果值为 always 将始终禁止滚动，如果值为 out-of-bounds 且当前已经滚动到顶部/左边，禁止滚动。 |
| disableUpperScroll | `string` |  | 否 | 发生滚动前，对滚动方向进行判断，当方向是底部/右边时，如果值为 always 将始终禁止滚动，如果值为 out-of-bounds 且当前已经滚动到底部/右边，禁止滚动。 |
| onScrollToUpper | `CommonEventFunction` |  | 否 | 滚动到顶部/左边，会触发 scrolltoupper 事件。 |
| onScrollToLower | `CommonEventFunction` |  | 否 | 滚动到底部/右边，会触发 scrolltolower事件。 |
| onScroll | `CommonEventFunction` |  | 否 | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}。 |
| onTouchStart | `CommonEventFunction` |  | 否 | 触摸动作开始。 |
| onTouchMove | `CommonEventFunction` |  | 否 | 触摸后移动。 |
| onTouchEnd | `CommonEventFunction` |  | 否 | 触摸动作结束。 |
| onTouchCancel | `CommonEventFunction` |  | 否 | 触摸动作被打断，如来电提醒、弹窗。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CoverViewProps.scrollTop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| CoverViewProps.fixedTop |  | ✔️ |  |  |  |  |  |  |  |
| CoverViewProps.fixedRight |  | ✔️ |  |  |  |  |  |  |  |
| CoverViewProps.fixedBottom |  | ✔️ |  |  |  |  |  |  |  |
| CoverViewProps.fixedLeft |  | ✔️ |  |  |  |  |  |  |  |
| CoverViewProps.ariaRole |  |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.ariaLabel |  |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.scrollX |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.scrollY |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.upperThreshold |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.lowerThreshold |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.scrollLeft |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.scrollIntoView |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.scrollWithAnimation |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.scrollAnimationDuration |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.enableBackToTop |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.trapScroll |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.disableLowerScroll |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.disableUpperScroll |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onScrollToUpper |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onScrollToLower |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onScroll |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onTouchStart |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onTouchMove |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onTouchEnd |  |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.onTouchCancel |  |  | ✔️ |  |  |  |  |  |  |

---

## docs/components/viewContainer/custom-wrapper.md

---
title: CustomWrapper
sidebar_label: CustomWrapper
---

custom-wrapper 自定义组件包裹器
当数据更新层级较深时，可用此组件将需要更新的区域包裹起来，这样更新层级将大大减少

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
ComponentType<CustomWrapperProps>
```

## 示例代码

```tsx
import { Component } from 'react'
import { CustomWrapper, View, Text } from '@tarojs/components'

export default class C extends Component {
  render () {
    return (
      <View>
        <CustomWrapper>
           <Text>Hello, world!</Text>
        </CustomWrapper>
      </View>
    )
  }
}
```

## CustomWrapperProps

---

## docs/components/viewContainer/match-media.md

---
title: MatchMedia
sidebar_label: MatchMedia
---

media query 匹配检测节点。可以指定一组 media query 规则，满足时，这个节点才会被展示。
通过这个节点可以实现“页面宽高在某个范围时才展示某个区域”这样的效果。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html)

## 类型

```tsx
ComponentType<MatchMediaProps>
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
class App extends Components {
  render () {
    return (
      <View>
        <MatchMedia minWidth="300" maxWidth="600">
          <view>当页面宽度在 300 ~ 500 px 之间时展示这里</view>
        </MatchMedia>
        <MatchMedia minHeight="400" orientation="landscape">
          <view>当页面高度不小于 400 px 且屏幕方向为纵向时展示这里</view>
        </MatchMedia>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <match-media min-width="300" max-width="500">
      <view>当页面宽度在 300 ~ 500 px 之间时展示这里</view>
    </match-media>
    <match-media min-height="400" orientation="landscape">
      <view>当页面高度不小于 400 px 且屏幕方向为纵向时展示这里</view>
    </match-media>
  </view>
</template>
```
</TabItem>
</Tabs>

## MatchMediaProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| minWidth | `number` | 否 | 页面最小宽度（ px 为单位） |
| maxWidth | `number` | 否 | 页面最大宽度（ px 为单位） |
| width | `number` | 否 | 页面宽度（ px 为单位） |
| minHeight | `number` | 否 | 页面最小高度（ px 为单位） |
| maxHeight | `number` | 否 | 页面最大高度（ px 为单位） |
| height | `number` | 否 | 页面高度（ px 为单位） |
| orientation | `string` | 否 | 屏幕方向（ landscape 或 portrait ） |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| MatchMediaProps.minWidth | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MatchMediaProps.maxWidth | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MatchMediaProps.width | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MatchMediaProps.minHeight | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MatchMediaProps.maxHeight | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MatchMediaProps.height | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MatchMediaProps.orientation | ✔️ | ✔️ | ✔️ |  |  |  |  |

---

## docs/components/viewContainer/movable-area.md

---
title: MovableArea
sidebar_label: MovableArea
---

movable-view 的可移动区域

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html)

## 类型

```tsx
ComponentType<MovableAreaProps>
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
class App extends Components {
  render () {
    return (
      <MovableArea style='height: 200px; width: 200px; background: red;'>
        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>旅行的意义</MovableView>
      </MovableArea>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
  <movable-area style='height: 200px; width: 200px; background: red;'>
    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>在路上</movable-view>
  </movable-area>
```
</TabItem>
</Tabs>

## MovableAreaProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| scaleArea | `boolean` | `false` | 否 | 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| MovableAreaProps.scaleArea | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

---

## docs/components/viewContainer/movable-view.md

---
title: MovableView
sidebar_label: MovableView
---

可移动的视图容器，在页面中可以拖拽滑动。movable-view 必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html)

## 类型

```tsx
ComponentType<MovableViewProps>
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
class App extends Components {
  render () {
    return (
      <MovableArea style='height: 200px; width: 200px; background: red;'>
        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>
      </MovableArea>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
  <movable-area style='height: 200px; width: 200px; background: red;'>
    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>带我走</movable-view>
  </movable-area>
```
</TabItem>
</Tabs>

## MovableViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| direction | "all" or "vertical" or "horizontal" or "none" | `none` | 否 | movable-view 的移动方向，属性值有`all`、`vertical`、`horizontal`、`none` |
| inertia | `boolean` | `false` | 否 | movable-view 是否带有惯性 |
| outOfBounds | `boolean` | `false` | 否 | 超过可移动区域后，movable-view 是否还可以移动 |
| x | string or number |  | 否 | 定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画 |
| y | string or number |  | 否 | 定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画 |
| damping | `number` | `20` | 否 | 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快 |
| friction | `number` | `2` | 否 | 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认值 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| scale | `boolean` | `false` | 否 | 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内 |
| scaleMin | `number` | `0.5` | 否 | 定义缩放倍数最小值 |
| scaleMax | `number` | `10` | 否 | 定义缩放倍数最大值 |
| scaleValue | `number` | `1` | 否 | 定义缩放倍数，取值范围为 0.5 - 10 |
| animation | `boolean` | `true` | 否 | 是否使用动画 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 拖动过程中触发的事件 |
| onChangeEnd | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 拖动结束触发的事件 |
| onDragStart | `CommonEventFunction` |  | 否 | 开始拖动时触发 |
| onDragEnd | `CommonEventFunction` |  | 否 | 拖动结束时触发 |
| onScale | `CommonEventFunction<onScaleEventDetail>` |  | 否 | 缩放过程中触发的事件 |
| onTouchStart | `CommonEventFunction` |  | 否 | 触摸动作开始，事件会向父节点传递。 |
| onTouchMove | `CommonEventFunction` |  | 否 | 触摸动作开始，事件仅作用于组件，不向父节点传递。 |
| onTouchEnd | `TouchEventFunction` |  | 否 | 手指触摸动作结束 |
| onTouchCancel | `CommonEventFunction` |  | 否 | 触摸动作被打断，如来电提醒、弹窗。 |
| onHTouchMove | `TouchEventFunction` |  | 否 | 初次手指触摸后移动为横向的移动，如果 catch 此事件，则意味着 touchmove 事件也被 catch |
| onVTouchMove | `TouchEventFunction` |  | 否 | 初次手指触摸后移动为纵向的移动，如果 catch 此事件，则意味着 touchmove 事件也被 catch |
| catchTouchStart | `CommonEventFunction` |  | 否 | 触摸移动事件，事件仅作用于组件，不向父节点传递。 |
| catchTouchMove | `CommonEventFunction` |  | 否 | 触摸移动事件，事件仅作用于组件，不向父节点传递。 |
| catchTouchEnd | `CommonEventFunction` |  | 否 | 触摸动作结束，事件仅作用于组件，不向父节点传递。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| MovableViewProps.direction | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| MovableViewProps.inertia | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.outOfBounds | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.x | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| MovableViewProps.y | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| MovableViewProps.damping | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.friction | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| MovableViewProps.scale | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.scaleMin | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.scaleMax | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.scaleValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.animation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| MovableViewProps.onChangeEnd |  |  | ✔️ |  |  |  |  |  |  |  |
| MovableViewProps.onDragStart |  |  |  |  |  |  | ✔️ |  |  |  |
| MovableViewProps.onDragEnd |  |  |  |  |  |  | ✔️ |  |  |  |
| MovableViewProps.onScale | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.onTouchStart |  |  | ✔️ |  |  |  |  |  |  |  |
| MovableViewProps.onTouchMove |  |  | ✔️ |  |  |  |  |  |  |  |
| MovableViewProps.onTouchEnd |  |  | ✔️ |  |  | ✔️(此事件的触发顺序会因为当前事件机制引起组件内外注册的事件执行顺序不正常，外部注册的事件可能会优先于内部执行，如需保证执行顺序一致，需要在回调函数中包裹 setTimeout 临时处理) |  |  | ✔️ |  |
| MovableViewProps.onTouchCancel |  |  | ✔️ |  |  |  |  |  |  |  |
| MovableViewProps.onHTouchMove | ✔️ | ✔️ |  | ✔️ |  | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.onVTouchMove | ✔️ | ✔️ |  | ✔️ |  | ✔️ |  |  | ✔️ | ✔️ |
| MovableViewProps.catchTouchStart |  |  | ✔️ |  |  |  |  |  |  |  |
| MovableViewProps.catchTouchMove |  |  | ✔️ |  |  |  |  |  |  |  |
| MovableViewProps.catchTouchEnd |  |  | ✔️ |  |  |  |  |  |  |  |

### TChangeSource

拖动过程中触发的事件

| 参数 | 说明 |
| --- | --- |
| touch | 拖动 |
| touch-out-of-bounds | 超出移动范围 |
| out-of-bounds | 超出移动范围后的回弹 |
| friction | 惯性 |
|  | setData |

### onChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | X 坐标 |
| y | `number` | Y 坐标 |
| source | `keyof TChangeSource` | 触发事件 |

### onScaleEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | X 坐标 |
| y | `number` | Y 坐标 |
| scale | `number` | 缩放比例 |

---

## docs/components/viewContainer/native-slot.md

---
title: NativeSlot
sidebar_label: NativeSlot
---

编译的原生组件支持使用 slot 插槽

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://github.com/NervJS/taro/pull/12627)

## 类型

```tsx
ComponentType<NativeSlotProps>
```

## 示例代码

```tsx
import { NativeSlot, View } from '@tarojs/components'

export default function () {
  render () {
    return (
      <View>
        <NativeSlot />
      </View>
    )
  }
}
```

## NativeSlotProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| name | `string` | `none` | 否 | 指定插入的 slot 位置 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| NativeSlotProps.name | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |

---

## docs/components/viewContainer/page-container.md

---
title: PageContainer
sidebar_label: PageContainer
---

页面容器

小程序如果在页面内进行复杂的界面设计（如在页面内弹出半屏的弹窗、在页面内加载一个全屏的子页面等），用户进行返回操作会直接离开当前页面，不符合用户预期，预期应为关闭当前弹出的组件。
为此提供“假页”容器组件，效果类似于 `popup` 弹出层，页面内存在该容器时，当用户进行返回操作，关闭该容器不关闭页面。返回操作包括三种情形，右滑手势、安卓物理返回键和调用 `navigateBack` 接口。

Bug & Tip
 1. tip: 当前页面最多只有 1 个容器，若已存在容器的情况下，无法增加新的容器
 2. tip: wx.navigateBack 无法在页面栈顶调用，此时没有上一级页面

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html)

## 类型

```tsx
ComponentType<PageContainerProps>
```

## PageContainerProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| show | `boolean` | `false` | 否 | 是否显示容器组件 |
| duration | `number` | `300` | 否 | 动画时长，单位毫秒 |
| zIndex | `number` | `100` | 否 | z-index 层级 |
| overlay | `boolean` | `true` | 否 | 是否显示遮罩层 |
| position | `keyof Position` | `bottom` | 否 | 弹出位置，可选值为 top bottom right center |
| round | `boolean` | `false` | 否 | 是否显示圆角 |
| overlayStyle | `string` |  | 否 | 自定义遮罩层样式 |
| customStyle | `string` |  | 否 | 自定义弹出层样式 |
| closeOnSlideDown | `boolean` | `false` | 否 | 是否在下滑一段距离后关闭 |
| onBeforeEnter | `CommonEventFunction` |  | 否 | 进入前触发 |
| onEnter | `CommonEventFunction` |  | 否 | 进入中触发 |
| onAfterEnter | `CommonEventFunction` |  | 否 | 进入后触发 |
| onBeforeLeave | `CommonEventFunction` |  | 否 | 离开前触发 |
| onLeave | `CommonEventFunction` |  | 否 | 离开中触发 |
| onAfterLeave | `CommonEventFunction` |  | 否 | 离开后触发 |
| onClickOverlay | `CommonEventFunction` |  | 否 | 点击遮罩层时触发 |
| onEnterCancelled | `CommonEventFunction` |  | 否 | 进入被打断时触发（通过 a: if 打断时不会触发）。 |
| onLeaveCancelled | `CommonEventFunction` |  | 否 | 离开被打断时触发（通过 a: if 打断时不会触发）。 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PageContainerProps.show | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.duration | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.zIndex | ✔️ | ✔️ |  |  |  |  |  |
| PageContainerProps.overlay | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.position | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.round | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.overlayStyle | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.customStyle | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.closeOnSlideDown | ✔️ | ✔️ | ✔️ |  |  |  |  |
| PageContainerProps.onBeforeEnter | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.onEnter | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.onAfterEnter | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.onBeforeLeave | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.onLeave | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.onAfterLeave | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| PageContainerProps.onClickOverlay | ✔️ | ✔️ | ✔️ |  |  |  |  |
| PageContainerProps.onEnterCancelled |  | ✔️ |  |  |  |  |  |
| PageContainerProps.onLeaveCancelled |  | ✔️ |  |  |  |  |  |

### Position

弹出位置

| 参数 | 说明 |
| --- | --- |
| top | 上方弹出 |
| bottom | 下方弹出 |
| right | 右边弹出 |
| center | 中央弹出 |

---

## docs/components/viewContainer/root-portal.md

---
title: RootPortal
sidebar_label: RootPortal
---

root-portal
使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果。主要用于制作弹窗、弹出层等。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html)

## 类型

```tsx
ComponentType<RootPortalProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }]}>
<TabItem value="React">

```tsx
import { useState } from 'react'
import { RootPortal, View, Button } from '@tarojs/components'

export default function RootPortalExample {
  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(!show)
  }
  render () {
    return (
      <View>
        <Button onClick={toggle}>显示root-portal</Button>
        {
          show && (<RootPortal><View>content</View></RootPortal>)
        }
      </View>
    )
  }
}
```
</TabItem>
</Tabs>

## RootPortalProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| enable | `boolean` | `true` | 否 | 是否从页面中脱离出来 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RootPortalProps.enable | ✔️ | ✔️ |  |  |  |  |

---

## docs/components/viewContainer/script.md

---
title: Script
sidebar_label: Script
---

script 类似微信小程序的 wxs 标签，支持引用各种小程序的 xs 文件
只能在 CompileMode 中使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
ComponentType<ScriptProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }]}>
<TabItem value="React">

```tsx
import { Component } from 'react'
import { View, Script } from '@tarojs/components'

export function Index () {
  return (
    <View compileMode>
      <Script src="./logic.wxs" module="logic"></Script>
      <Text>Hello, {logic.name}!</Text>
    </View>
  )
}
```
</TabItem>
</Tabs>

## ScriptProps

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| src | `string` | xs 文件的相对路径 |
| module | `string` | xs 模块名 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ScriptProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  | ✔️ |
| ScriptProps.module | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  | ✔️ |

---

## docs/components/viewContainer/scroll-view.md

---
title: ScrollView
sidebar_label: ScrollView
---

可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为 px

Tips:
H5 中 ScrollView 组件是通过一个高度（或宽度）固定的容器内部滚动来实现的，因此务必正确的设置容器的高度。例如: 如果 ScrollView 的高度将 body 撑开，就会同时存在两个滚动条（body 下的滚动条，以及 ScrollView 的滚动条）。
微信小程序 中 ScrollView 组件如果设置 scrollX 横向滚动时，并且子元素为多个时（单个子元素时设置固定宽度则可以正常横向滚动），需要通过 WXSS 设置 `white-space: nowrap` 来保证元素不换行，并对 ScrollView 内部元素设置 `display: inline-block` 来使其能够横向滚动。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)

## 类型

```tsx
ComponentType<ScrollViewProps>
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
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  render() {
    const scrollStyle = {
      height: '150px'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      'backgroundColor': 'rgb(26, 173, 25)'
    }
    const vStyleB = {
       height: '150px',
      'backgroundColor': 'rgb(39,130,215)'
    }
    const vStyleC = {
      height: '150px',
      'backgroundColor': 'rgb(241,241,241)',
      color: '#333'
    }
    return (
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}
      >
        <View style={vStyleA}>A</View>
        <View style={vStyleB}>B</View>
        <View style={vStyleC}>C</View>
      </ScrollView>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>Vertical Scroll - 纵向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view :scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">
            <view id="demo1" class="scroll-view-item demo-text-1">1</view>
            <view id="demo2"  class="scroll-view-item demo-text-2">2</view>
            <view id="demo3" class="scroll-view-item demo-text-3">3</view>
          </scroll-view>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>Horizontal Scroll - 横向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view class="scroll-view_H" :scroll-x="true" @scroll="scroll" style="width: 100%">
            <view id="demo21" class="scroll-view-item_H demo-text-1">a</view>
            <view id="demo22"  class="scroll-view-item_H demo-text-2">b</view>
            <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const order = ['demo1', 'demo2', 'demo3']
export default {
  name: 'Index',
  data() {
    return {
      scrollTop: 0,
      toView: 'demo2'
    }
  },

  methods: {
    upper(e) {
      console.log('upper:', e)
    },

    lower(e) {
      console.log('lower:', e)
    },

    scroll(e) {
      console.log('scroll:', e)
    }
  }
}
</script>

<style>
.page-section-spacing{
  margin-top: 60rpx;
}
.scroll-view_H{
  white-space: nowrap;
}
.scroll-view-item{
  height: 300rpx;
}
.scroll-view-item_H{
  display: inline-block;
  width: 100%;
  height: 300rpx;
}

.demo-text-1 { background: #ccc; }
.demo-text-2 { background: #999; }
.demo-text-3 { background: #666; }
</style>
```
</TabItem>
</Tabs>

## ScrollViewProps

### 类型

```tsx
typeof ScrollViewProps
```

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| scrollX | `boolean` | `false` | 否 | 允许横向滚动 |
| scrollY | `boolean` | `false` | 否 | 允许纵向滚动 |
| upperThreshold | `number` | `50` | 否 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件 |
| lowerThreshold | `number` | `50` | 否 | 距底部/右边多远时（单位px），触发 scrolltolower 事件 |
| scrollTop | `number` |  | 否 | 设置竖向滚动条位置 |
| scrollLeft | `number` |  | 否 | 设置横向滚动条位置 |
| scrollIntoView | `string` |  | 否 | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |
| scrollWithAnimation | `boolean` | `false` | 否 | 在设置滚动条位置时使用动画过渡 |
| enableBackToTop | `boolean` | `false` | 否 | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 |
| enableFlex | `boolean` | `false` | 否 | 启用 flexbox 布局。开启后，当前节点声明了 `display: flex` 就会成为 flex container，并作用于其孩子节点。 |
| scrollAnchoring | `boolean` | `false` | 否 | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS `overflow-anchor` 属性。 |
| refresherEnabled | `boolean` | `false` | 否 | 开启自定义下拉刷新 |
| refresherThreshold | `number` | `45` | 否 | 设置自定义下拉刷新阈值 |
| refresherDefaultStyle | `string` | `'black'` | 否 | 设置自定义下拉刷新默认样式，支持设置 `black or white or none`， none 表示不使用默认样式 |
| refresherBackground | `string` | `'#FFF'` | 否 | 设置自定义下拉刷新区域背景颜色 |
| refresherTriggered | `boolean` | `false` | 否 | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 |
| enhanced | `boolean` | `false` | 否 | 启用 scroll-view 增强特性 |
| usingSticky | `boolean` | `false` | 否 | 使 scroll-view 下的 position sticky 特性生效，否则滚动一屏后 sticky 元素会被隐藏 |
| bounces | `boolean` | `true` | 否 | iOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效) |
| showScrollbar | `boolean` | `true` | 否 | 滚动条显隐控制 (同时开启 enhanced 属性后生效) |
| pagingEnabled | `boolean` | `false` | 否 | 分页滑动效果 (同时开启 enhanced 属性后生效) |
| fastDeceleration | `boolean` | `false` | 否 | boolean	false	滑动减速速率控制 (同时开启 enhanced 属性后生效) |
| scrollAnimationDuration | `string` |  | 否 | 当 scroll-with-animation设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位 ms。 |
| trapScroll | `string` | `false` | 否 | 纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动。 |
| disableLowerScroll | `string` |  | 否 | 发生滚动前，对滚动方向进行判断，当方向是顶部/左边时，如果值为 always 将始终禁止滚动，如果值为 out-of-bounds 且当前已经滚动到顶部/左边，禁止滚动。 |
| disableUpperScroll | `string` |  | 否 | 发生滚动前，对滚动方向进行判断，当方向是底部/右边时，如果值为 always 将始终禁止滚动，如果值为 out-of-bounds 且当前已经滚动到底部/右边，禁止滚动。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| enablePassive | `boolean` | `false` | 否 | 开启 passive 特性，能优化一定的滚动性能 |
| type | "list" or "custom" or "nested" | `'list'` | 否 | 渲染模式<br />list - 列表模式。只会渲染在屏节点，会根据直接子节点是否在屏来按需渲染，若只有一个直接子节点则性能会退化<br />custom - 自定义模式。只会渲染在屏节点，子节点可以是 sticky-section list-view grid-view 等组件<br />nested - 嵌套模式。用于处理父子 scroll-view 间的嵌套滚动，子节点可以是 nested-scroll-header nested-scroll-body 组件或自定义 refresher |
| associativeContainer | "draggable-sheet" or "nested-scroll-view" or "pop-gesture" | `''` | 否 | 关联的滚动容器<br />draggable-sheet	  - 关联 draggable-sheet 组件	3.2.0<br />nested-scroll-view	- 关联 type=nested 嵌套模式	3.2.0<br />pop-gesture	      - 关联 页面手势返回 3.4.0 |
| reverse | `boolean` | `false` | 否 | 是否反向滚动。一般初始滚动位置是在顶部，反向滚动则是在底部。 |
| clip | `boolean` | `true` | 否 | 是否对溢出进行裁剪，默认开启 |
| cacheExtent | `number` |  | 否 | 指定视口外渲染区域的距离，默认情况下视口外节点不渲染。指定 cache-extent 可优化滚动体验和加载速度，但会提高内存占用且影响首屏速度，可按需启用。 |
| minDragDistance | `number` | `18` | 否 | 指定 scroll-view 触发滚动的最小拖动距离。仅在 scroll-view 和其他组件存在手势冲突时使用，可通过调整该属性使得滚动更加灵敏。 |
| padding | `[number, number, number, number]` | `[0,0,0,0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |
| scrollIntoViewWithinExtent | `boolean` | `false` | 否 | 只 scroll-into-view 到 cacheExtent 以内的目标节点，性能更佳 |
| scrollIntoViewAlignment | "start" or "center" or "end" or "nearest" | `'start'` | 否 | 指定 scroll-into-view 目标节点在视口内的位置。<br />start - 目标节点显示在视口开始处<br />center - 目标节点显示在视口中间<br />end - 目标节点显示在视口结束处<br />nearest - 目标节点在就近的视口边缘显示，若节点已在视口内则不触发滚动 |
| refresherTwoLevelEnabled | `boolean` | `false` | 否 | 开启下拉二级能力 |
| refresherTwoLevelTriggered | `boolean` | `false` | 否 | 设置打开/关闭二级 |
| refresherTwoLevelThreshold | `number` | `150` | 否 | 下拉二级阈值 |
| refresherTwoLevelCloseThreshold | `number` | `80` | 否 | 滑动返回时关闭二级的阈值 |
| refresherTwoLevelScrollEnabled | `boolean` | `false` | 否 | 处于二级状态时是否可滑动 |
| refresherBallisticRefreshEnabled | `boolean` | `false` | 否 | 惯性滚动是否触发下拉刷新 |
| refresherTwoLevelPinned | `boolean` | `false` | 否 | 即将打开二级时否定住 |
| onScrollToUpper | `CommonEventFunction` |  | 否 | 滚动到顶部/左边，会触发 scrolltoupper 事件 |
| onScrollToLower | `CommonEventFunction` |  | 否 | 滚动到底部/右边，会触发 scrolltolower 事件 |
| onScroll | `BaseEventOrigFunction<onScrollDetail>` |  | 否 | 滚动时触发 |
| onScrollStart | `BaseEventOrigFunction<onScrollDetail>` |  | 否 | 滚动开始事件 |
| onScrollEnd | `BaseEventOrigFunction<onScrollDetail>` |  | 否 | 滚动结束事件 |
| onRefresherPulling | `CommonEventFunction` |  | 否 | 自定义下拉刷新控件被下拉 |
| onRefresherRefresh | `CommonEventFunction` |  | 否 | 自定义下拉刷新被触发 |
| onRefresherRestore | `CommonEventFunction` |  | 否 | 自定义下拉刷新被复位 |
| onRefresherAbort | `CommonEventFunction` |  | 否 | 自定义下拉刷新被中止 |
| onRefresherWillRefresh | `CommonEventFunction` |  | 否 | 自定义下拉刷新即将触发刷新（拖动超过 refresher-threshold 时）的事件 |
| onRefresherStatusChange | `CommonEventFunction<RefresherStatusChange>` |  | 否 | 下拉刷新状态回调 |
| onDragStart | `CommonEventFunction<onDragDetail>` |  | 否 | 滑动开始事件 (同时开启 enhanced 属性后生效) |
| onDragging | `CommonEventFunction<onDragDetail>` |  | 否 | 滑动事件 (同时开启 enhanced 属性后生效) |
| onDragEnd | `CommonEventFunction<onDragDetail>` |  | 否 | 滑动结束事件 (同时开启 enhanced 属性后生效) |
| onTouchStart | `CommonEventFunction` |  | 否 | 触摸动作开始。 |
| onTouchMove | `CommonEventFunction` |  | 否 | 触摸后移动。 |
| onTouchEnd | `CommonEventFunction` |  | 否 | 触摸动作结束。 |
| onTouchCancel | `CommonEventFunction` |  | 否 | 触摸动作被打断，如来电提醒、弹窗。 |
| onScrollStartWorklet | `string` |  | 否 | 同 bindscrollstart，但仅支持 worklet 作为回调 |
| onScrollUpdateWorklet | `string` |  | 否 | 同 bindscroll ，但仅支持 worklet 作为回调 |
| onScrollEndWorklet | `string` |  | 否 | 同 bindscrollend，但仅支持 worklet 作为回调 |
| adjustDecelerationVelocityWorklet | `string` |  | 否 | 指定手指抬起时做惯性滚动的初速度。(velocity: number) => number |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ScrollViewProps.scrollX | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(二选一) | ✔️ | ✔️ | ✔️ |
| ScrollViewProps.scrollY | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(二选一) | ✔️ | ✔️ | ✔️ |
| ScrollViewProps.upperThreshold | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.lowerThreshold | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.scrollTop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.scrollLeft | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.scrollIntoView | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| ScrollViewProps.scrollWithAnimation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.enableBackToTop | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ |  |  |  |
| ScrollViewProps.enableFlex | ✔️ |  |  |  |  | ✔️ |  |  |  |  |  |
| ScrollViewProps.scrollAnchoring | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherEnabled | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.refresherThreshold | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.refresherDefaultStyle | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.refresherBackground | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.refresherTriggered | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.enhanced | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.usingSticky | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.bounces | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.showScrollbar | ✔️ |  |  |  |  |  |  |  | ✔️ |  | ✔️ |
| ScrollViewProps.pagingEnabled | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.fastDeceleration | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.scrollAnimationDuration |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.trapScroll |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.disableLowerScroll |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.disableUpperScroll |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ScrollViewProps.enablePassive | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.type | ✔️ |  |  |  |  |  |  |  | ✔️ |  |  |
| ScrollViewProps.associativeContainer | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.reverse | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.clip | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.cacheExtent | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.minDragDistance | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.padding | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.scrollIntoViewWithinExtent | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.scrollIntoViewAlignment | ✔️ |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| ScrollViewProps.refresherTwoLevelEnabled | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherTwoLevelTriggered | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherTwoLevelThreshold | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherTwoLevelCloseThreshold | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherTwoLevelScrollEnabled | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherBallisticRefreshEnabled | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.refresherTwoLevelPinned | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onScrollToUpper | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.onScrollToLower | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ScrollViewProps.onScroll | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ScrollViewProps.onScrollStart | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onScrollEnd | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onRefresherPulling | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.onRefresherRefresh | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.onRefresherRestore | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.onRefresherAbort | ✔️ |  |  |  |  |  |  |  |  |  | ✔️ |
| ScrollViewProps.onRefresherWillRefresh | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onRefresherStatusChange | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onDragStart | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onDragging | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onDragEnd | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onTouchStart |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.onTouchMove |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.onTouchEnd |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.onTouchCancel |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ScrollViewProps.onScrollStartWorklet | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onScrollUpdateWorklet | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.onScrollEndWorklet | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ScrollViewProps.adjustDecelerationVelocityWorklet | ✔️ |  |  |  |  |  |  |  |  |  |  |

| 参数 | 类型 |
| --- | --- |
| RefreshStatus | `typeof RefreshStatus` |

### onScrollDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| scrollLeft | `number` | 是 | 横向滚动条位置 |
| scrollTop | `number` | 是 | 竖向滚动条位置 |
| scrollHeight | `number` | 是 | 滚动条高度 |
| scrollWidth | `number` | 是 | 滚动条宽度 |
| deltaX | `number` | 是 |  |
| deltaY | `number` | 是 |  |
| isDrag | `boolean` | 否 |  |

### onDragDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scrollLeft | `number` | 横向滚动条位置 |
| scrollTop | `number` | 竖向滚动条位置 |
| velocity | `number` | 滚动速度 |

### RefresherStatusChange

| 参数 | 类型 |
| --- | --- |
| status | `RefreshStatus` |
| dy | `number` |

---

## docs/components/viewContainer/slot.md

---
title: Slot
sidebar_label: Slot
---

slot 插槽

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
ComponentType<SlotProps>
```

## 示例代码

```tsx
import { Slot, View, Text } from '@tarojs/components'

export default class SlotView extends Component {
  render () {
    return (
      <View>
        <custom-component>
          <Slot name='title'>
           <Text>Hello, world!</Text>
          </Slot>
        </custom-component>
      </View>
    )
  }
}
```

## SlotProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| name | `string` | `none` | 否 | 指定插入的 slot 位置 |
| varName | `string` | `none` | 否 | scoped slot 传入数据源 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SlotProps.name | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  | ✔️ |
| SlotProps.varName |  | ✔️ |  |  |  |  |  |  |  |  |

---

## docs/components/viewContainer/swiper-item.md

---
title: SwiperItem
sidebar_label: SwiperItem
---

仅可放置在 swiper 组件中，宽高自动设置为100%
> 不要为 `SwiperItem` 设置 **style** 属性，可以通过 class 设置样式。[7147](https://github.com/NervJS/taro/issues/7147)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html)

## 类型

```tsx
ComponentType<SwiperItemProps>
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
class App extends Component {
  render () {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <swiper
    class='test-h'
    indicator-color='#999'
    indicator-active-color='#333'
    :vertical="true"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item>
      <view class='demo-text-1'>1</view>
    </swiper-item>
    <swiper-item>
      <view class='demo-text-2'>2</view>
    </swiper-item>
    <swiper-item>
      <view class='demo-text-3'>3</view>
    </swiper-item>
  </swiper>
</template>
```
</TabItem>
</Tabs>

## SwiperItemProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| itemId | `string` |  | 否 | 该 swiper-item 的标识符 |
| skipHiddenItemLayout | `boolean` | `false` | 否 | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 |
| deep | `boolean` | `false` | 否 | Swiper 循环状态下，前后垫片节点拷贝模式，用于修复 Vue 在 CustomElements 下的节点拷贝问题 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SwiperItemProps.itemId | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwiperItemProps.skipHiddenItemLayout | ✔️ |  |  |  |  |  |  |  |  |
| SwiperItemProps.deep |  |  |  |  | ✔️ |  |  |  |  |

---

