## docs/apis/wxml/NodesRef.md

---
title: NodesRef
sidebar_label: NodesRef
---

用于获取 `WXML` 节点信息的对象

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html)

## 方法

### boundingClientRect

添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.boundingClientRect.html)

```tsx
(callback?: BoundingClientRectCallback) => SelectorQuery
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `BoundingClientRectCallback` | 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 |

#### 示例代码

##### 示例 1

```tsx
Taro.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
  rect.id      // 节点的ID
  rect.dataset // 节点的dataset
  rect.left    // 节点的左边界坐标
  rect.right   // 节点的右边界坐标
  rect.top     // 节点的上边界坐标
  rect.bottom  // 节点的下边界坐标
  rect.width   // 节点的宽度
  rect.height  // 节点的高度
}).exec()

##### 示例 2

```
```tsx
Taro.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
  rects.forEach(function(rect){
    rect.id      // 节点的ID
    rect.dataset // 节点的dataset
    rect.left    // 节点的左边界坐标
    rect.right   // 节点的右边界坐标
    rect.top     // 节点的上边界坐标
    rect.bottom  // 节点的下边界坐标
    rect.width   // 节点的宽度
    rect.height  // 节点的高度
  })
}).exec()
```

### context

添加节点的 Context 对象查询请求。目前支持 [VideoContext](/docs/apis/media/video/VideoContext)、[CanvasContext](/docs/apis/canvas/CanvasContext)、[LivePlayerContext](/docs/apis/media/live/LivePlayerContext)、[EditorContext](/docs/apis/media/editor/EditorContext)和 [MapContext](/docs/apis/media/map/MapContext) 的获取。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.context.html)

```tsx
(callback?: ContextCallback) => SelectorQuery
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `ContextCallback` | 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 |

#### 示例代码

```tsx
Taro.createSelectorQuery().select('.the-video-class').context(function (res) {
  console.log(res.context) // 节点对应的 Context 对象。如：选中的节点是 <video> 组件，那么此处即返回 VideoContext 对象
}).exec()
```

### fields

获取节点的相关信息。需要获取的字段在fields中指定。返回值是 `nodesRef` 对应的 `selectorQuery`

**注意**
computedStyle 的优先级高于 size，当同时在 computedStyle 里指定了 width/height 和传入了 size: true，则优先返回 computedStyle 获取到的 width/height。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.fields.html)

```tsx
(fields: Fields, callback?: FieldsCallback) => SelectorQuery
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fields | `Fields` |  |
| callback | `FieldsCallback` | 回调函数 |

#### 示例代码

```tsx
Taro.createSelectorQuery().select('#the-id').fields({
  dataset: true,
  size: true,
  scrollOffset: true,
  properties: ['scrollX', 'scrollY'],
  computedStyle: ['margin', 'backgroundColor'],
  context: true,
}, function (res) {
  res.dataset    // 节点的dataset
  res.width      // 节点的宽度
  res.height     // 节点的高度
  res.scrollLeft // 节点的水平滚动位置
  res.scrollTop  // 节点的竖直滚动位置
  res.scrollX    // 节点 scroll-x 属性的当前值
  res.scrollY    // 节点 scroll-y 属性的当前值
  // 此处返回指定要返回的样式名
  res.margin
  res.backgroundColor
  res.context    // 节点对应的 Context 对象
}).exec()
```

### node

获取 Node 节点实例。目前支持 [Canvas](/docs/components/canvas) 的获取。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.node.html)

```tsx
(callback?: NodeCallback) => SelectorQuery
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `NodeCallback` | 回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。 |

#### 示例代码

```tsx
Taro.createSelectorQuery().select('.canvas').node(function(res){
  console.log(res.node) // 节点对应的 Canvas 实例。
}).exec()
```

### scrollOffset

添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `NodesRef` 对应的 `SelectorQuery`。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html)

```tsx
(callback?: ScrollOffsetCallback) => SelectorQuery
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `ScrollOffsetCallback` | 回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。 |

#### 示例代码

```tsx
Taro.createSelectorQuery().selectViewport().scrollOffset(function(res){
  res.id      // 节点的ID
  res.dataset // 节点的dataset
  res.scrollLeft // 节点的水平滚动位置
  res.scrollTop  // 节点的竖直滚动位置
}).exec()
```

## 参数

### BoundingClientRectCallback

回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。

```tsx
(result: BoundingClientRectCallbackResult | BoundingClientRectCallbackResult[]) => void
```

| 参数 | 类型 |
| --- | --- |
| result | BoundingClientRectCallbackResult or BoundingClientRectCallbackResult[] |

### BoundingClientRectCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bottom | `number` | 节点的下边界坐标 |
| dataset | `TaroGeneral.IAnyObject` | 节点的 dataset |
| height | `number` | 节点的高度 |
| id | `string` | 节点的 ID |
| left | `number` | 节点的左边界坐标 |
| right | `number` | 节点的右边界坐标 |
| top | `number` | 节点的上边界坐标 |
| width | `number` | 节点的宽度 |

### ContextCallback

回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。

```tsx
(result: ContextCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `ContextCallbackResult` |

### ContextCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| context | `TaroGeneral.IAnyObject` | 节点对应的 Context 对象 |

### Fields

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| computedStyle | `string[]` | 否 | 指定样式名列表，返回节点对应样式名的当前值 |
| context | `boolean` | 否 | 是否返回节点对应的 Context 对象 |
| dataset | `boolean` | 否 | 是否返回节点 dataset |
| id | `boolean` | 否 | 是否返回节点 id |
| mark | `boolean` | 否 | 是否返回节点 mark |
| node | `boolean` | 否 | 是否返回节点对应的 Node 实例 |
| properties | `string[]` | 否 | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取） |
| rect | `boolean` | 否 | 是否返回节点布局位置（`left` `right` `top` `bottom`） |
| scrollOffset | `boolean` | 否 | 否 是否返回节点的 `scrollLeft` `scrollTop`，节点必须是 `scroll-view` 或者 `viewport` |
| size | `boolean` | 否 | 是否返回节点尺寸（`width` `height`） |

### FieldsCallback

回调函数

```tsx
(res: TaroGeneral.IAnyObject) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| res | `TaroGeneral.IAnyObject` | 节点的相关信息 |

### NodeCallback

回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。

```tsx
(result: NodeCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `NodeCallbackResult` |

### NodeCallbackResult

回调函数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| node | `TaroGeneral.IAnyObject` | 节点对应的 Node 实例 |

### ScrollOffsetCallback

回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。

```tsx
(result: ScrollOffsetCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `ScrollOffsetCallbackResult` |

### ScrollOffsetCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| dataset | `TaroGeneral.IAnyObject` | 节点的 dataset |
| id | `string` | 节点的 ID |
| scrollLeft | `number` | 节点的水平滚动位置 |
| scrollTop | `number` | 节点的竖直滚动位置 |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| NodesRef.boundingClientRect | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| NodesRef.context | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| NodesRef.fields | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| NodesRef.node | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| NodesRef.scrollOffset | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |

---

## docs/apis/wxml/SelectorQuery.md

---
title: SelectorQuery
sidebar_label: SelectorQuery
---

查询节点信息的对象

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html)

## 方法

### exec

执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.exec.html)

```tsx
(callback?: (...args: any[]) => any) => NodesRef
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(...args: any[]) => any` | 回调函数 |

### in

将选择器的选取范围更改为自定义组件 `component` 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.in.html)

```tsx
(component: TaroGeneral.IAnyObject) => SelectorQuery
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| component | `TaroGeneral.IAnyObject` | 自定义组件实例 |

#### 示例代码

```tsx
Component({
  queryMultipleNodes () {
    const query = Taro.createSelectorQuery().in(this)
    query.select('#the-id').boundingClientRect(function(res){
      res.top // 这个组件内 #the-id 节点的上边界坐标
    }).exec()
  }
})
```

### select

在当前页面下选择第一个匹配选择器 `selector` 的节点。返回一个 `NodesRef` 对象实例，可以用于获取节点信息。

**selector 语法**


selector类似于 CSS 的选择器，但仅支持下列语法。

- ID选择器：#the-id
- class选择器（可以连续指定多个）：.a-class.another-class
- 子元素选择器：.the-parent > .the-child
- 后代选择器：.the-ancestor .the-descendant
- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
- 多选择器的并集：#a-node, .some-other-nodes

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html)

```tsx
(selector: string) => NodesRef
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| selector | `string` | 选择器 |

#### 示例代码

```tsx
Taro.createSelectorQuery().select('#the-id').fields({
  dataset: true,
  size: true,
  scrollOffset: true,
  properties: ['scrollX', 'scrollY']
}, function (res){
  res.dataset    // 节点的dataset
  res.width      // 节点的宽度
  res.height     // 节点的高度
  res.scrollLeft // 节点的水平滚动位置
  res.scrollTop  // 节点的竖直滚动位置
  res.scrollX    // 节点 scroll-x 属性的当前值
  res.scrollY    // 节点 scroll-x 属性的当前值
}).exec()
```

### selectAll

在当前页面下选择匹配选择器 selector 的所有节点。

**selector 语法**

selector类似于 CSS 的选择器，但仅支持下列语法。

- ID选择器：#the-id
- class选择器（可以连续指定多个）：.a-class.another-class
- 子元素选择器：.the-parent > .the-child
- 后代选择器：.the-ancestor .the-descendant
- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
- 多选择器的并集：#a-node, .some-other-nodes

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectAll.html)

```tsx
(selector: string) => NodesRef
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| selector | `string` | 选择器 |

### selectViewport

选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html)

```tsx
() => NodesRef
```

#### 示例代码

```tsx
Taro.createSelectorQuery().selectViewport().scrollOffset(function (res) {
  res.id      // 节点的ID
  res.dataset // 节点的dataset
  res.scrollLeft // 节点的水平滚动位置
  res.scrollTop  // 节点的竖直滚动位置
}).exec()
```

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SelectorQuery.exec | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| SelectorQuery.in | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| SelectorQuery.select | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| SelectorQuery.selectAll | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| SelectorQuery.selectViewport | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

---

## docs/apis/General.md

---
title: General
sidebar_label: General
---

## 参数

### CallbackResult

通用错误

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### BluetoothError

蓝牙错误

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `0 | 10000 | 10001 | 10002 | 10003 | 10004 | 10005 | 10006 | 10007 | 10008 | 10009 | 10012 | 10013` | 错误码 |

### WifiError

WIFI 错误

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `0 | 12000 | 12001 | 12002 | 12003 | 12004 | 12005 | 12006 | 12007 | 12008 | 12009 | 12010 | 12011 | 12013` | 错误码 |

### NFCError

NFC 错误

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `0 | 13000 | 13001 | 13002 | 13003 | 13004 | 13005 | 13006` | 错误码 |

### IBeaconError

iBeacon 错误

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `0 | 11000 | 11001 | 11002 | 11003 | 11004 | 11005 | 11006` | 错误码 |

### SafeAreaResult

在竖屏正方向下的安全区域

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bottom | `number` | 安全区域右下角纵坐标 |
| height | `number` | 安全区域的高度，单位逻辑像素 |
| left | `number` | 安全区域左上角横坐标 |
| right | `number` | 安全区域右下角横坐标 |
| top | `number` | 安全区域左上角纵坐标 |
| width | `number` | 安全区域的宽度，单位逻辑像素 |

### AdErrCode

广告错误码

错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。

| 参数 | 异常情况 | 理由 | 解决方案 |
| --- | :---: | :---: | :---: |
| 1000 | `后端接口调用失败` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1001 | `参数错误` | `使用方法错误` | `可以前往 developers.weixin.qq.com 确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。` |
| 1002 | `广告单元无效` | `可能是拼写错误、或者误用了其他APP的广告ID` | `请重新前往 mp.weixin.qq.com 确认广告位ID。` |
| 1003 | `内部错误` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1004 | `无合适的广告` | `广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告` | `属于正常情况，且开发者需要针对这种情况做形态上的兼容。` |
| 1005 | `广告组件审核中` | `你的广告正在被审核，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1006 | `广告组件被驳回` | `你的广告审核失败，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1007 | `广告组件被封禁` | `你的广告能力已经被封禁，封禁期间无法展现广告` | `请前往 mp.weixin.qq.com 确认小程序广告封禁状态。` |
| 1008 | `广告单元已关闭` | `该广告位的广告能力已经被关闭` | `请前往 mp.weixin.qq.com 重新打开对应广告位的展现。` |

### BluetoothErrCode

蓝牙错误码

| 参数 | 异常情况 | 说明 |
| --- | :---: | --- |
| 0 | `ok` | 正常 |
| 10000 | `not init` | 未初始化蓝牙适配器 |
| 10001 | `not available` | 当前蓝牙适配器不可用 |
| 10002 | `no device` | 没有找到指定设备 |
| 10003 | `connection fail` | 连接失败 |
| 10004 | `no service` | 没有找到指定服务 |
| 10005 | `no characteristic` | 没有找到指定特征值 |
| 10006 | `no connection` | 当前连接已断开 |
| 10007 | `property not support` | 当前特征值不支持此操作 |
| 10008 | `system error` | 其余所有系统上报的异常 |
| 10009 | `system not support` | Android 系统特有，系统版本低于 4.3 不支持 BLE |
| 10012 | `operate time out` | 连接超时 |
| 10013 | `invalid_data` | 连接 deviceId 为空或者是格式不正确 |

### IBeaconErrCode

iBeacon 错误码

| 参数 | 异常情况 | 说明 |
| --- | :---: | --- |
| 0 | `ok` | 正常 |
| 11000 | `unsupport` | 系统或设备不支持 |
| 11001 | `bluetooth service unavailable` | 蓝牙服务不可用 |
| 11002 | `location service unavailable` | 位置服务不可用 |
| 11003 | `already start` | 已经开始搜索 |
| 11004 | `not startBeaconDiscovery` | 还未开始搜索 |
| 11005 | `system error` | 系统错误 |
| 11006 | `invalid data` | 参数不正确 |

### WifiErrCode

WIFI 错误码

| 参数 | 异常情况 | 说明 |
| --- | :---: | --- |
| 0 | `ok` | 正常 |
| 12000 | `not init` | 未先调用 `startWifi` 接口 |
| 12001 | `system not support` | 当前系统不支持相关能力 |
| 12002 | `password error Wi-Fi` | 密码错误 |
| 12003 | `connection timeout` | 连接超时 |
| 12004 | `duplicate request` | 重复连接 Wi-Fi |
| 12005 | `wifi not turned on` | Android 特有，未打开 Wi-Fi 开关 |
| 12006 | `wifi not turned on` | Android 特有，未打开 GPS 定位开关 |
| 12007 | `user denied` | 用户拒绝授权链接 Wi-Fi |
| 12008 | `invalid SSID` | 无效 SSID |
| 12009 | `system config err` | 系统运营商配置拒绝连接 Wi-Fi |
| 12010 | `system internal error` | 系统其他错误，需要在 errmsg 打印具体的错误原因 |
| 12011 | `weapp in background` | 应用在后台无法配置 Wi-Fi |
| 12013 | `wifi config may be expired` | 系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试 |

### NFCErrCode

NFC 错误码

| 参数 | 异常情况 | 说明 |
| --- | :---: | --- |
| 0 | `ok` | 正常 |
| 13000 |  | 当前设备不支持NFC |
| 13001 |  | 当前设备支持NFC，但系统NFC开关未开启 |
| 13002 |  | 当前设备支持NFC，但不支持HCE |
| 13003 |  | AID列表参数格式错误 |
| 13004 |  | 未设置微信为默认NFC支付应用 |
| 13005 |  | 返回的指令不合法 |
| 13006 |  | 注册AID失败 |

### LaunchOptionsApp

启动参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 启动小程序的路径 |
| query | `Record<string, any>` | 启动小程序的 query 参数 |
| referrerInfo | `ReferrerInfo` | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |
| scene | `number` | 启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) |
| shareTicket | `string` | shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |

#### ReferrerInfo

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appId | `string` | 来源小程序、公众号或 App 的 appId |
| extraData | `Record<string, any>` | 来源小程序传过来的数据，scene=1037或1038时支持 |

---

