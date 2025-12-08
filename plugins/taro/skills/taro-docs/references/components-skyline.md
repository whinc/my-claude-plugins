## docs/components/skyline/draggable-sheet.md

---
title: DraggableSheet
sidebar_label: DraggableSheet
---

半屏可拖拽组件
该组件需配合 DraggableSheetContext 接口使用。 目前仅在 Skyline 渲染引擎下支持。
页面内拖拽是一种常见的交互效果，开发者可通过手势系统灵活实现。draggable-sheet 组件封装了常见的交互逻辑，实现起来更加简单。
该组件需结合 scroll-view 使用。scroll-view 组件声明 associative-container 属性后，可与 draggable-sheet 关联起来。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html)

## 类型

```tsx
ComponentType<DraggableSheetProps>
```

## DraggableSheetProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| initialChildSize | `number` | `0.5` | 否 | 初始时占父容器的比例 |
| minChildSize | `number` | `0.25` | 否 | 最小时占父容器的比例 |
| maxChildSize | `number` | `1.0` | 否 | 最大时占父容器的比例 |
| snap | `boolean` | `false` | 否 | 拖拽后是否自动对齐关键点 |
| snapSizes | `any[]` | `[]` | 否 | 拖拽后对齐的关键点，无需包含最小和最大值 |
| onSizeUpdateWorklet | `string` |  | 否 | 尺寸发生变化时触发，仅支持 worklet 作为回调。event = {pixels, size} |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| DraggableSheetProps.initialChildSize | ✔️ |  |  |  |
| DraggableSheetProps.minChildSize | ✔️ |  |  |  |
| DraggableSheetProps.maxChildSize | ✔️ |  |  |  |
| DraggableSheetProps.snap | ✔️ |  |  |  |
| DraggableSheetProps.snapSizes | ✔️ |  |  |  |
| DraggableSheetProps.onSizeUpdateWorklet | ✔️ |  |  |  |

---

## docs/components/skyline/grid-builder.md

---
title: GridBuilder
sidebar_label: GridBuilder
---

网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点，仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html)

## 类型

```tsx
ComponentType<GridBuilderProps>
```

## GridBuilderProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | "aligned" or "masonry" | `"aligned"<br /><br />可选值:<br />- aligned: 每行高度由同一行中最大高度子节点决定<br />- masonry: 瀑布流，根据子元素高度自动布局` | 是 | 布局方式 |
| list | `any[]` | `[]` | 是 | 需要用于渲染的列表 |
| childCount | `number` |  | 否 | 完整列表的长度，如果不传则取 list 的长度作为其值 |
| crossAxisCount | `number` | `2` | 否 | 交叉轴元素数量 |
| maxCrossAxisExtent | `number` | `0` | 否 | 交叉轴元素最大范围 |
| mainAxisGap | `number` | `0` | 否 | 主轴方向间隔 |
| crossAxisGap | `number` | `0` | 否 | 交叉轴方向间隔 |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |
| onItemBuild | `CommonEventFunction` |  | 否 | 列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号 |
| onItemDispose | `CommonEventFunction` |  | 否 | 列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| GridBuilderProps.type | ✔️ |  |  |  |
| GridBuilderProps.list | ✔️ |  |  |  |
| GridBuilderProps.childCount | ✔️ |  |  |  |
| GridBuilderProps.crossAxisCount | ✔️ |  |  |  |
| GridBuilderProps.maxCrossAxisExtent | ✔️ |  |  |  |
| GridBuilderProps.mainAxisGap | ✔️ |  |  |  |
| GridBuilderProps.crossAxisGap | ✔️ |  |  |  |
| GridBuilderProps.padding | ✔️ |  |  |  |
| GridBuilderProps.onItemBuild | ✔️ |  |  |  |
| GridBuilderProps.onItemDispose | ✔️ |  |  |  |

---

## docs/components/skyline/grid-view.md

---
title: GridView
sidebar_label: GridView
---

网格布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点或 sticky-section 组件直接子节点。仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html)

## 类型

```tsx
ComponentType<GridViewProps>
```

## GridViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | "aligned" or "masonry" | `"aligned"<br /><br />可选值:<br />- aligned: 每行高度由同一行中最大高度子节点决定<br />- masonry: 瀑布流，根据子元素高度自动布局` | 是 | 布局方式 |
| crossAxisCount | `number` | `2` | 否 | 交叉轴元素数量 |
| mainAxisGap | `number` | `0` | 否 | 主轴方向间隔 |
| crossAxisGap | `number` | `0` | 否 | 交叉轴方向间隔 |
| maxCrossAxisExtent | `number` | `0` | 否 | 交叉轴元素最大范围 |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| GridViewProps.type | ✔️ |  |  |  |
| GridViewProps.crossAxisCount | ✔️ |  |  |  |
| GridViewProps.mainAxisGap | ✔️ |  |  |  |
| GridViewProps.crossAxisGap | ✔️ |  |  |  |
| GridViewProps.maxCrossAxisExtent | ✔️ |  |  |  |
| GridViewProps.padding | ✔️ |  |  |  |

---

## docs/components/skyline/list-builder.md

---
title: ListBuilder
sidebar_label: ListBuilder
---

列表构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点，仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html)

## 类型

```tsx
ComponentType<ListBuilderProps>
```

## ListBuilderProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | "static" or "dynamic" | `"aligned"<br /><br />可选值:<br />- static: 定高模式，所有列表项等高，需要传入 child-height<br />- dynamic: 不定高模式` | 是 | 布局方式 |
| list | `any[]` | `[]` | 是 | 需要用于渲染的列表 |
| childCount | `number` |  | 否 | 完整列表的长度，如果不传则取 list 的长度作为其值 |
| childHeight | `number` |  | 否 | 列表项的高度，当 type 为 static 时必须传入 |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |
| onItemBuild | `CommonEventFunction` |  | 否 | 列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号 |
| onItemDispose | `CommonEventFunction` |  | 否 | 列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ListBuilderProps.type | ✔️ |  |  |  |
| ListBuilderProps.list | ✔️ |  |  |  |
| ListBuilderProps.childCount | ✔️ |  |  |  |
| ListBuilderProps.childHeight | ✔️ |  |  |  |
| ListBuilderProps.padding | ✔️ |  |  |  |
| ListBuilderProps.onItemBuild | ✔️ |  |  |  |
| ListBuilderProps.onItemDispose | ✔️ |  |  |  |

---

## docs/components/skyline/list-view.md

---
title: ListView
sidebar_label: ListView
---

列表布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点或 sticky-section 组件直接子节点。仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html)

## 类型

```tsx
ComponentType<ListViewProps>
```

## ListViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ListViewProps.padding | ✔️ |  |  |  |

---

## docs/components/skyline/nested-scroll-body.md

---
title: NestedScrollBody
sidebar_label: NestedScrollBody
---

嵌套 scroll-view 场景中属于里层 scroll-view 的节点，
仅支持作为 `<scroll-view type="nested">` 模式的直接子节点。
不支持复数子节点，渲染时会取其第一个子节点来渲染。具体用法可参考 scroll-view

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html)

## 类型

```tsx
ComponentType<NestedScrollBodyProps>
```

## NestedScrollBodyProps

---

## docs/components/skyline/nested-scroll-header.md

---
title: NestedScrollHeader
sidebar_label: NestedScrollHeader
---

嵌套 scroll-view 场景中属于外层 scroll-view 的节点，
仅支持作为 `<scroll-view type="nested">` 模式的直接子节点。
不支持复数子节点，渲染时会取其第一个子节点来渲染。具体用法可参考 scroll-view

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-header.html)

## 类型

```tsx
ComponentType<NestedScrollHeaderProps>
```

## NestedScrollHeaderProps

---

## docs/components/skyline/open-container.md

---
title: OpenContainer
sidebar_label: OpenContainer
---

容器转场动画组件
点击 OpenContainer 组件，当使用 wx.navigateTo 跳转下一页面时，对其子节点和下一个页面进行过渡。
下个页面从 OpenContainer 所在位置大小渐显放大，同时 OpenContainer 内容渐隐，过渡效果包含背景色、圆角和阴影。
源页面 OpenContainer 为 closed 状态，转场动画后为 open 状态。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html)

## 类型

```tsx
ComponentType<OpenContainerProps>
```

## OpenContainerProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| transitionType | "fade" or "fadeThrough" | `"fade"<br /><br />可选值:<br />- fade: 将传入元素淡入传出元素之上<br />- fadeThrough: 首先淡出传出元素，并在传出元素完全淡出后开始淡入传入元素` | 动画类型 |
| transitionDuration | `number` | `300` | 动画时长 |
| closedColor | `string` | `"white"` | 初始容器背景色 |
| closedElevation | `number` | `0` | 初始容器影深大小 |
| closeBorderRadius | `number` | `0` | 初始容器圆角大小 |
| middleColor | `string` | `""` | fadeThrough 模式下的过渡背景色 |
| openColor | `string` | `"white"` | 打开状态下容器背景色 |
| openElevation | `number` | `0` | 打开状态下容器影深大小 |
| openBorderRadius | `number` | `0` | 打开状态下容器圆角大小 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| OpenContainerProps.transitionType | ✔️ |  |  |  |
| OpenContainerProps.transitionDuration | ✔️ |  |  |  |
| OpenContainerProps.closedColor | ✔️ |  |  |  |
| OpenContainerProps.closedElevation | ✔️ |  |  |  |
| OpenContainerProps.closeBorderRadius | ✔️ |  |  |  |
| OpenContainerProps.middleColor | ✔️ |  |  |  |
| OpenContainerProps.openColor | ✔️ |  |  |  |
| OpenContainerProps.openElevation | ✔️ |  |  |  |
| OpenContainerProps.openBorderRadius | ✔️ |  |  |  |

---

## docs/components/skyline/share-element.md

---
title: ShareElement
sidebar_label: ShareElement
---

共享元素

共享元素是一种动画形式，类似于 [`flutter Hero`](https://flutterchina.club/animations/hero-animations/) 动画，表现为元素像是在页面间穿越一样。该组件需与 [`PageContainer`](/docs/components/viewContainer/page-container) 组件结合使用。
使用时需在当前页放置 `ShareElement` 组件，同时在 `PageContainer` 容器中放置对应的 `ShareElement` 组件，对应关系通过属性值 key 映射。当设置 `PageContainer` `显示时，transform` 属性为 `true` 的共享元素会产生动画。当前页面容器退出时，会产生返回动画。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html)

## 类型

```tsx
ComponentType<ShareElementProps>
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
// index.js
import { useState, useCallback } from 'react'
import { View, Button, PageContainer, ShareElement } from '@tarojs/components'

import './index.scss'

const contacts = [
  { id: 1, name: 'Frank', img: 'frank.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 2, name: 'Susan', img: 'susan.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 3, name: 'Emma', img: 'emma.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 4, name: 'Scott', img: 'scott.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 5, name: 'Bob', img: 'bob.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 6, name: 'Olivia', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 7, name: 'Anne', img: 'anne.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 8, name: 'sunny', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' }
]

export default function () {
  const [show, setShow] = useState(false)
  const [contact, setContact] = useState(contacts[0])
  const [transformIdx, setTransformIdx] = useState(0)

  const onBeforeEnter = useCallback((res) => {
    console.log('onBeforeEnter: ', res)
  }, [])
  const onEnter = useCallback((res) => {
    console.log('onEnter: ', res)
  }, [])
  const onAfterEnter = useCallback((res) => {
    console.log('onAfterEnter: ', res)
  }, [])
  const onBeforeLeave = useCallback((res) => {
    console.log('onBeforeLeave: ', res)
  }, [])
  const onLeave = useCallback((res) => {
    console.log('onLeave: ', res)
  }, [])
  const onAfterLeave = useCallback((res) => {
    console.log('onAfterLeave: ', res)
  }, [])

  const showNext = (e, index) => {
    setShow(true)
    setContact(contacts[index])
    setTransformIdx(index)
  }

  const showPrev = useCallback(() => {
    setShow(false)
  }, [])

  return (
    <View>
      <View className="screen screen1">
        {
          contacts.map((item, index) => (
            <View key={item.id} className="contact" onClick={e => showNext(e, index)}>
              <ShareElement duration={300} className="name" key="name" transform={transformIdx === index}>
                {item.name}
              </ShareElement>
              <View className="list">
                <View>Phone: {item.phone}</View>
                <View>Mobile: {item.mobile}</View>
                <View>Email: {item.email}</View>
              </View>
            </View>
          ))
        }
      </View>
      <PageContainer
        show={show}
        overlay={false}
        closeOnSlideDown
        duration={300}
        position='center'
        onBeforeEnter={onBeforeEnter}
        onEnter={onEnter}
        onAfterEnter={onAfterEnter}
        onBeforeLeave={onBeforeLeave}
        onLeave={onLeave}
        onAfterLeave={onAfterLeave}
      >
        <View className="screen screen2">
          <View className="contact">
            <ShareElement className="name" key="name" duration={300} transform>
              {contact.name}
            </ShareElement>
            <View className={`paragraph ${show ? 'enter' : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl enim, sodales non augue efficitur, sagittis
              varius neque. Fusce dolor turpis, maximus eu volutpat quis, pellentesque et ligula. Ut vehicula metus in nibh
              mollis ornare. Etiam aliquam lacinia malesuada. Vestibulum dignissim mollis quam a tristique. Maecenas neque
              mauris, malesuada vitae magna eu, congue consectetur risus. Etiam vitae pulvinar ex. Maecenas suscipit mi ac
              imperdiet pretium. Aliquam velit mauris, euismod quis elementum sed, malesuada non dui. Nunc rutrum sagittis
              ligula in dapibus. Cras suscipit ut augue eget mollis. Donec auctor feugiat ipsum id viverra. Vestibulum eu nisi
              risus. Vestibulum eleifend dignissim.

            </View>
            <Button className="screen2-button" onClick={showPrev} hidden={!show} hoverClass="none">Click Me</Button>
          </View>
        </View>
      </PageContainer>
    </View>
  )
}
```
```scss
\/** index.scss *\/
page {
  color: #333;
  background-color: #ddd;
  overflow: hidden;
}

button {
  border: 0 solid #0010ae;
  background-color: #1f2afe;
  color: #fff;
  font-size: 120%;
  padding: 8px 16px;
  outline-width: 0;
  -webkit-appearance: none;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);
}

.screen {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  -webkit-overflow-scrolling: touch;
}

.contact {
  position: relative;
  padding: 16px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.avatar {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 0;
}

.name {
  height: 65px;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}

.list {
  padding-top: 8px;
  padding-left: 32px;
}

.screen1 {
  overflow-y: scroll;
  padding: 0;
}

.screen1 .contact {
  margin: 16px;
  height: auto;
  width: auto;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.screen2-button {
  display: block;
  margin: 24px auto;
}

.paragraph {
  -webkit-transition: transform ease-in-out 300ms;
  transition: transform ease-in-out 300ms;
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
}

.enter.paragraph {
  transform: none;
}
```
</TabItem>
</Tabs>

## ShareElementProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| key | `string` |  | 否 | 映射标记<br />不推荐: 使用mapkey替换key |
| mapkey | `string` |  | 否 | 映射标记 |
| name | `string` |  | 否 | 映射标记 |
| transform | `boolean` | `false` | 否 | 是否进行动画 |
| duration | `number` | `300` | 否 | 动画时长，单位毫秒 |
| easingFunction | `string` | `ease-out` | 否 | css缓动函数 |
| transitionOnGesture | `boolean` | `false` | 否 | 手势返回时是否进行动画 |
| shuttleOnPush | "from" or "to" | `"to"` | 否 | 指定 push 阶段的飞跃物 |
| shuttleOnPop | `string` | `"to"` | 否 | 指定 pop 阶段的飞跃物 |
| rectTweenType | "materialRectArc" or "materialRectCenterArc" or "linear" or "elasticIn" or "elasticOut" or "elasticInOut" or "bounceIn" or "bounceOut" or "bounceInOut" or "cubic-bezier(x1, y1, x2, y2)" | `"materialRectArc"` | 否 | 动画插值曲线 |
| onFrameWorklet | `string` |  | 否 | 动画帧回调 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ShareElementProps.key | ✔️ |  |  |  |  |
| ShareElementProps.mapkey | ✔️ |  |  |  |  |
| ShareElementProps.name |  | ✔️ |  |  |  |
| ShareElementProps.transform | ✔️ | ✔️ |  |  |  |
| ShareElementProps.duration | ✔️ | ✔️ |  |  |  |
| ShareElementProps.easingFunction | ✔️ | ✔️ |  |  |  |
| ShareElementProps.transitionOnGesture | ✔️ |  |  |  |  |
| ShareElementProps.shuttleOnPush | ✔️ |  |  |  |  |
| ShareElementProps.shuttleOnPop | ✔️ |  |  |  |  |
| ShareElementProps.rectTweenType | ✔️ |  |  |  |  |
| ShareElementProps.onFrameWorklet | ✔️ |  |  |  |  |

---

## docs/components/skyline/snapshot.md

---
title: Snapshot
sidebar_label: Snapshot
---

截图组件
支持将其子节点的渲染结果导出成图片，该组件需配合 snapshot 接口使用。 目前仅在 Skyline 渲染引擎 下支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html)

## 类型

```tsx
ComponentType<SnapshotProps>
```

## SnapshotProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| mode | "view" or "picture" | `'view'<br /><br />可选值:<br />- view: 以真实节点渲染<br />- picture: 对子节点生成的内容截图渲染` | 渲染模式 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| SnapshotProps.mode | ✔️ |  |  |  |

---

## docs/components/skyline/span.md

---
title: Span
sidebar_label: Span
---

用于支持内联文本和 image / navigator 的混排

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/span.html)

## 类型

```tsx
ComponentType<SpanProps>
```

## SpanProps

---

## docs/components/skyline/sticky-header.md

---
title: StickyHeader
sidebar_label: StickyHeader
---

吸顶布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点或 sticky-section 组件直接子节点。仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html)

## 类型

```tsx
ComponentType<StickyHeaderProps>
```

## StickyHeaderProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| offsetTop | `number` | `0` | 否 | 吸顶时与顶部的距(px) |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |
| onStickOnTopChange | `CommonEventFunction` |  | 否 | 吸顶状态变化事件，仅支持非 worklet 的组件方法作为回调。event.detail = { isStickOnTop }，当 sticky-header 吸顶时为 true，否则为 false。<br />version: >=3.6.2 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| StickyHeaderProps.offsetTop | ✔️ |  |  |  |
| StickyHeaderProps.padding | ✔️ |  |  |  |
| StickyHeaderProps.onStickOnTopChange | ✔️ |  |  |  |

---

## docs/components/skyline/sticky-section.md

---
title: StickySection
sidebar_label: StickySection
---

吸顶布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点。仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html)

## 类型

```tsx
ComponentType<StickySectionProps>
```

## StickySectionProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| pushPinnedHeader | `boolean` | `true` | 否 | 吸顶元素重叠时是否继续上推 |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| StickySectionProps.pushPinnedHeader | ✔️ |  |  |  |
| StickySectionProps.padding | ✔️ |  |  |  |

---

