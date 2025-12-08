## docs/harmony/lazy/index.md

---
title: Harmony 长列表使用教程
---

:::info
Taro v4.1.0+ 开始支持
:::

长列表场景是大部分业务中都会出现的高频场景，因此在 Taro For Harmony 中，我们针对长列表场景提供了针对性的组件，来解决长列表节点的渲染和性能问题。

## 瀑布流组件

针对瀑布流类型的组件，我们提供了 `WaterFlow`、 `FlowItem` 以及 `FlowSection` 三个组件供开发者组合使用。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250414165912.63171312108464795647082673503454:50001231000000:2800:841C788EAF028DF00289E424717ADD26AE6C1E63ABB113D71D98ADAD1B05169B.png)

### WaterFlow 组件

#### 功能描述

瀑布流布局容器，由"行"和"列"分割的单元格所组成，通过容器自身的排列规则，将不同大小的"项目"自上而下，如瀑布般紧密布局，仅支持 FlowSection 子组件，使用时需要给 WaterFlow 一个固定高度。

#### 参数说明

WaterFlow 的参数是 scroll-view 参数的子集，支持 scroll-view 除横向布局相关的参数和事件，WaterFlow 专有参数如下:

| 参数                | 类型   | 默认值 | 必填 | 说明                                                   |
| ------------------- | ------ | ------ | ---- | ------------------------------------------------------ |
| upperThresholdCount | number | 0      | 否   | 距顶部/左边多少个 FlowItem 时，触发 scrolltoupper 事件 |
| lowerThresholdCount | number | 0      | 否   | 距底部/右边多少个 FlowItem 时，触发 scrolltolower 事件 |
| cacheCount          | number | 1      | 否   | 设置预加载的 Item 条数                                 |

### FlowItem 组件

#### 功能描述

FlowSection 的子组件，用来展示瀑布流具体 item，支持单个子组件。

### FlowSection 组件

#### 功能描述

设置 FlowItem 分组配置信息，实现同一个瀑布流组件内部各分组使用不同列数混合布局，仅支持 FlowItem 子组件，且该组件的父组件只能是 WaterFlow。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250414170230.61245438925165538889632558324147:50001231000000:2800:4FDAFD38F8F20503C14BACB79EBC17D69DD408FD1441B66B0238E87862F12EAB.png)

#### 参数说明

| 参数      | 类型          | 默认值 | 必填 | 说明                                                                                                          |
| --------- | ------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| column    | number        | 1      | 否   | 纵向布局为列数，横向布局为行数。设置当前分组布局列/行数，该属性会将父组件 WaterFlow 的宽/高度均分成 column 份 |
| rawGap    | number/String | -      | 否   | 该分组的行间距，单位:vp                                                                                       |
| columnGap | number/String | -      | 否   | 该分组的列间距，单位:vp                                                                                       |

#### 使用示例

```jsx
import { View, WaterFlow, FlowItem, FlowSection } from '@tarojs/components'

export default function Index() {
  reutrn(
    <WaterFlow
      className="waterflow"
      lowerThresholdCount={20}
      scrollTop={scrollTop}
      showScrollbar={false}
      onScroll={scrollHandle}
      onScrollToLower={updateFeeds}
    >
      <FlowSection column={2} columnGap={Taro.pxTransform(20)} className="rcd-feeds">
        {FeedsRender}
      </FlowSection>
      <FlowSection column={1}>
        {isError && (
          <FlowItem>
            <View className="fcd-page-error">
              <View className="fcd-page-error__tip">网络不给力哦~请检查您的网络</View>
              <View className="fcd-page-error__refresh-btn" onClick={loadData}>
                刷新重试
              </View>
            </View>
          </FlowItem>
        )}
        {isLoading && !feedsData.isCache && (
          <FlowItem>
            <View className="feed-loading">
              <Image
                src="https://img13.360buyimg.com/img/jfs/t1/157587/2/39477/464436/65fcfe10F62450166/08cbf710d5be450d.gif"
                className="feed-loading-icon"
              ></Image>
            </View>
          </FlowItem>
        )}
        {isFeedsEnd && (
          <FlowItem>
            <View className="feeds-end">到底了</View>
          </FlowItem>
        )}
      </FlowSection>
    </WaterFlow>
  )
}
```

## 吸顶长列表组件

### List 组件

#### 功能描述

列表布局容器，仅支持 StickySection，ListItem 子组件，使用时需要给 List 一个固定高度。

#### 参数说明

List 的参数是 scroll-view 参数的子集，支持 scroll-view 的部分参数和事件，List 专有参数如下:

| 参数                | 类型          | 默认值 | 必填 | 说明                                                                                                                                                    |
| ------------------- | ------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| upperThresholdCount | number        | 0      | 否   | 距顶部/左边多少个 item 时，触发 scrolltoupper 事件                                                                                                      |
| lowerThresholdCount | number        | 0      | 否   | 距底部/右边多少个 item 时，触发 scrolltolower 事件                                                                                                      |
| cacheCount          | number        | 1      | 否   | item 预加载数                                                                                                                                           |
| stickyHeader        | boolean       | -      | 否   | List 包含子组件 StickySection，StickySection 有子组件 StickyHeader 时，该属性用于控制 StickyHeader 是否吸顶                                             |
| space               | number/String | 0      | 否   | 子组件主轴方向的间隔，单位:vp。说明：该字段只作用与 List 的直接子组件，对于 List 的子组件为 StickySection 的场景，该字段对 StickySection 子组件并不生效 |

:::tip
如果不需要吸顶能力，推荐直接使用 List 套 ListItem 的结构。
:::

### ListItem 组件

#### 功能描述

List，StickySection 的子组件，用来展示列表布局容器具体 item，支持单个子组件。

### StickyHeader 组件

#### 功能描述

StickySection 的子组件，设置 StickySection 的头部组件。当 List 组件 stickyHeader 属性为 true，且 StickySection 设置了 StickyHeader 时，该组件具有吸顶的能力。

### StickySection 组件

#### 功能描述

以分组的形式展示列表 item 分组，仅支持 ListItem，StickyHeader 子组件，且必须配合 List 组件使用。

#### 参数说明

| 参数  | 类型          | 默认值 | 必填 | 说明                                                                                                           |
| ----- | ------------- | ------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| space | number/String | 0      | 否   | 列表项间距。只作用于 ListItem 与 ListItem 之间，不作用于 header 与 ListItem、footer 与 ListItem 之间。单位：vp |

#### 使用示例

```jsx
import { View, List, StickySection, StickyHeader, ListItem } from '@tarojs/components'

export default function Index() {
  reutrn(
    <List
      stickyHeader
      showScrollbar={false}
      className={styles.scrollV}
      scrollY={canScroll}
      onScroll={onScroll}
      scrollTop={scrollTopValue}
      onScrollToLower={srollToLowerHandler}
      lowerThreshold={100}
    >
      <StickySection className={styles.section}>
        <ListItem className={styles.listItem}>{floorItemsSections.floorItemsBeforeSticky}</ListItem>
      </StickySection>
      <StickySection className={`${styles.section} ${styles.sectionMain}`}>
        <StickyHeader>{floorItemsSections.stickyFloorItems}</StickyHeader>
        {feedItems.map((item, index) => {
          return (
            <ListItem key={`feed${index}`} className={styles.listItem}>
              {item}
            </ListItem>
          )
        })}
        <ListItem className={styles.listItem}>
          {searchStateInfo.showLoading ? <Loading /> : null}
          {searchStateInfo.showNoMore ? <PageFooter /> : null}
          {searchStateInfo.showNetError ? <NetErrorTip onRetry={retry} /> : null}
          {searchStateInfo.showPagIndicator ? (
            <Pagination pageInfo={pagIndicatorInfo} onPageChange={onPageChange} />
          ) : null}
        </ListItem>
      </StickySection>
    </List>
  )
}
```

---

## docs/harmony/lazy/reuse.md

---
title: Harmony 长列表节点复用
---

:::info
Taro v4.1.0+ 开始支持
:::

## 节点复用原理

节点复用是一种优化长列表性能的技术，通过复用已经创建的组件节点来减少不必要的创建和销毁操作，从而提升列表的渲染性能。

![复用使用方法和支持节点范围](https://img13.360buyimg.com/img/jfs/t1/277802/9/22633/55038/6800770dF346fb5f4/648bbe871c65ecfd.png)

## 使用方法

为支持节点复用，Taro 框架引入了一个新的属性 `reuseId`，表示以当前节点为根节点的子组件树可以被复用。开发者可以根据业务场景和 Item 结构特点，灵活地标记出具有相似性的子组件树。

### 支持复用的组件范围

当前支持复用的子组件如下表，上层业务在使用该特性的时候要保证可复用子组件树的所有子组件都在下表范围内，如果有要支持复用其他组件的需求，待 Taro 评估后决定是否提供。

| 组件名称    | 说明                                      |
| ----------- | ----------------------------------------- |
| View        | 基础视图组件                              |
| Text        | 文本组件                                  |
| Image       | 图片组件                                  |
| FlowItem    | 瀑布流 Item 组件                          |
| listItem    | 吸顶列表 Item 组件                        |
| MovableArea | 可移动区域组件，用于包裹 MovableView 组件 |
| MovableView | 可移动视图组件，可以在 MovableArea 中移动 |
| Input       | 输入框组件                                |

### reuseId 参数说明

| 参数    | 类型   | 默认值 | 必填 | 说明                                       |
| ------- | ------ | ------ | ---- | ------------------------------------------ |
| reuseId | string | 无     | 否   | 标识以当前节点为根节点的子组件树可以被复用 |

需要注意：

1. 如果该子组件树内部也包含 reuseId，则内部的 reuseId 会被忽略
2. 为最大程度发挥复用性能，上层业务要保证同一 reuseId 的子组件树尽量保持结构一致
3. 没有设置 reuseId 默认不复用

### 使用示例

```jsx
import React, { Fragment } from 'react'
import { FlowItem } from '@tarojs/components'

function Index(props) {
  const { allFeedsData } = props

  return (
    <>
      {allFeedsData
        .map((itemI, itemX) => {
          if (['Goods', 'Shop', 'Market', 'Video'].indexOf(itemI.tpl) === -1) return null

          const IS_VIDEO = itemI.tpl === 'Video'

          return (
            <FlowItem key={itemI.ikey} reuseId={IS_VIDEO ? '' : itemI.tpl}>
              <Fragment>
                {itemI.tpl === 'Goods' && <Goods item={itemI} index={itemI._index} />}
                {itemI.tpl === 'Shop' && <Shop item={itemI} index={itemI._index} />}
                {itemI.tpl === 'Market' && <Market item={itemI} index={itemI._index} />}
                {itemI.tpl === 'Video' && (
                  <TaroVideo
                    item={itemI}
                    index={itemI._index}
                    loca="right"
                    playVideoId={playVideoId}
                    playOrStopNextVideo={playOrStopNextVideo}
                  />
                )}
              </Fragment>
            </FlowItem>
          )
        })
        .filter((item) => !!item)}
    </>
  )
}
```

---

## docs/harmony/c-api-css.md

---
title: Harmony-CPP CSS 属性支持
---

:::info
本文档列出了 Harmony 平台支持的 CSS 属性及其可选值
:::

## 选择器

### 基本选择器

| 选择器         | 示例               | 说明                          |
| -------------- | ------------------ | ----------------------------- |
| 类选择器       | `.class`           | 选择所有具有指定 class 的元素 |
| 后代选择器     | `.parent .child`   | 选择指定元素内的所有后代元素  |
| 直接后代选择器 | `.parent > .child` | 选择指定元素的直接子元素      |
| 多类选择器     | `.class1.class2`   | 选择同时具有多个 class 的元素 |

### 伪元素

| 选择器  | 示例              | 说明                 |
| ------- | ----------------- | -------------------- |
| :before | `.element:before` | 在元素内容前插入内容 |
| :after  | `.element:after`  | 在元素内容后插入内容 |

### 伪类

| 选择器       | 示例                    | 说明                       |
| ------------ | ----------------------- | -------------------------- |
| :nth-child   | `.parent :nth-child(2)` | 选择父元素的第 n 个子元素  |
| :first-child | `.parent :first-child`  | 选择父元素的第一个子元素   |
| :last-child  | `.parent :last-child`   | 选择父元素的最后一个子元素 |
| :empty       | `.element:empty`        | 选择没有子元素的元素       |

### 使用示例

```css
/* 类选择器 */
.class {
  color: red;
}

/* 后代选择器 */
.parent .child {
  margin: 10px;
}

/* 直接后代选择器 */
.parent > .child {
  padding: 5px;
}

/* 多类选择器 */
.class1.class2 {
  background-color: blue;
}

/* 伪元素 */
.element:before {
  content: '前缀';
}

.element:after {
  content: '后缀';
}

/* 伪类 */
.parent :nth-child(2) {
  font-weight: bold;
}

.parent :first-child {
  color: green;
}

.parent :last-child {
  color: blue;
}

.element:empty {
  display: none;
}
```

:::warning
暂不支持 CSS 属性继承，所有属性都需要显式设置
:::

## 布局属性

### Flex 布局

| 属性            | 默认值       | 可选值                                                                              | 说明                                    |
| --------------- | ------------ | ----------------------------------------------------------------------------------- | --------------------------------------- |
| display         | 'flex'       | 'flex', 'none', 'block', 'box'                                                      | 设置元素的显示类型，不支持 inline-block |
| flex-wrap       | 'nowrap'     | 'nowrap', 'wrap', 'wrap-reverse'                                                    | 设置 flex 元素是否换行                  |
| flex-direction  | 'row'        | 'row', 'row-reverse', 'column', 'column-reverse'                                    | 设置 flex 元素的主轴方向                |
| align-items     | 'flex-start' | 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'                           | 设置 flex 元素在交叉轴上的对齐方式      |
| align-content   | 'flex-start' | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly' | 设置多行 flex 元素在交叉轴上的对齐方式  |
| justify-content | 'flex-start' | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly' | 设置 flex 元素在主轴上的对齐方式        |
| flex            | '0 1 auto'   | flexGrow, flexShrink, flexBasis                                                     | 设置 flex 元素的伸缩性                  |
| flex-grow       | 0            | Number                                                                              | 设置 flex 元素的放大比例                |
| flex-shrink     | 1            | Number                                                                              | 设置 flex 元素的缩小比例                |
| flex-basis      | 'auto'       | Length                                                                              | 设置 flex 元素在主轴上的初始大小        |
| align-self      | 'auto'       | 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto'                   | 设置单个 flex 元素在交叉轴上的对齐方式  |

### 定位

| 属性     | 默认值     | 可选值                          | 说明                                                                                         |
| -------- | ---------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| position | 'relative' | 'relative', 'absolute', 'fixed' | 设置元素的定位方式                                                                           |
| top      | 'auto'     | Length                          | 设置元素的上边距                                                                             |
| bottom   | 'auto'     | Length                          | 设置元素的下边距                                                                             |
| left     | 'auto'     | Length                          | 设置元素的左边距                                                                             |
| right    | 'auto'     | Length                          | 设置元素的右边距                                                                             |
| z-index  | 'auto'     | Number                          | 设置元素的堆叠顺序，注意：z-index 仅在相同层级元素之间生效，跨层级元素之间的堆叠顺序不受影响 |

### 盒模型

:::info
盒模型默认使用 `box-sizing: border-box`，即元素的宽度和高度包含内边距和边框
:::

| 属性           | 默认值 | 可选值                    | 说明               |
| -------------- | ------ | ------------------------- | ------------------ |
| margin         | 0      | Length（可设置 1~4 个值） | 设置元素的外边距   |
| margin-left    | 0      | Length                    | 设置元素的左外边距 |
| margin-right   | 0      | Length                    | 设置元素的右外边距 |
| margin-top     | 0      | Length                    | 设置元素的上外边距 |
| margin-bottom  | 0      | Length                    | 设置元素的下外边距 |
| padding        | 0      | Length（可设置 1~4 个值） | 设置元素的内边距   |
| padding-left   | 0      | Length                    | 设置元素的左内边距 |
| padding-right  | 0      | Length                    | 设置元素的右内边距 |
| padding-top    | 0      | Length                    | 设置元素的上内边距 |
| padding-bottom | 0      | Length                    | 设置元素的下内边距 |
| width          | 'auto' | Length                    | 设置元素的宽度     |
| min-width      | 'auto' | Length                    | 设置元素的最小宽度 |
| max-width      | 'none' | Length                    | 设置元素的最大宽度 |
| height         | 'auto' | Length                    | 设置元素的高度     |
| min-height     | 'auto' | Length                    | 设置元素的最小高度 |
| max-height     | 'none' | Length                    | 设置元素的最大高度 |

### 边框

| 属性                       | 默认值  | 可选值                                         | 说明                 |
| -------------------------- | ------- | ---------------------------------------------- | -------------------- |
| border                     | '0'     | Length（可设置 1~4 个值）                      | 设置元素的边框       |
| border-width               | '0'     | Length                                         | 设置元素的边框宽度   |
| border-left-width          | '0'     | Length                                         | 设置元素的左边框宽度 |
| border-right-width         | '0'     | Length                                         | 设置元素的右边框宽度 |
| border-top-width           | '0'     | Length                                         | 设置元素的上边框宽度 |
| border-bottom-width        | '0'     | Length                                         | 设置元素的下边框宽度 |
| border-color               | 'black' | Color（可设置 1~4 个值）                       | 设置元素的边框颜色   |
| border-left-color          | 'black' | Color                                          | 设置元素的左边框颜色 |
| border-right-color         | 'black' | Color                                          | 设置元素的右边框颜色 |
| border-top-color           | 'black' | Color                                          | 设置元素的上边框颜色 |
| border-bottom-color        | 'black' | Color                                          | 设置元素的下边框颜色 |
| border-style               | 'solid' | 'dotted', 'dashed', 'solid'（可设置 1~4 个值） | 设置元素的边框样式   |
| border-left-style          | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的左边框样式 |
| border-right-style         | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的右边框样式 |
| border-top-style           | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的上边框样式 |
| border-bottom-style        | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的下边框样式 |
| border-radius              | '0'     | Length（可设置 1~4 个值）                      | 设置元素的边框圆角   |
| border-top-left-radius     | '0'     | Length                                         | 设置元素的左上角圆角 |
| border-top-right-radius    | '0'     | Length                                         | 设置元素的右上角圆角 |
| border-bottom-left-radius  | '0'     | Length                                         | 设置元素的左下角圆角 |
| border-bottom-right-radius | '0'     | Length                                         | 设置元素的右下角圆角 |

## 文本属性

| 属性                  | 默认值         | 可选值                                          | 说明                               |
| --------------------- | -------------- | ----------------------------------------------- | ---------------------------------- |
| color                 | 'black'        | Color                                           | 设置文本颜色，不会继承             |
| font-size             | '14vp'         | Length                                          | 设置字体大小，不会继承             |
| text-align            | 'left'         | 'center', 'left', 'right'                       | 设置文本对齐方式，不会继承         |
| font-weight           | 'normal'       | 100~900, 'bold', 'bolder', 'lighter', 'normal'  | 设置字体粗细，不会继承             |
| vertical-align        | 'baseline'     | 'middle', 'top', 'bottom'                       | 设置垂直对齐方式，不会继承         |
| letter-spacing        | 'normal'       | Length                                          | 设置字符间距，不会继承             |
| text-overflow         | 'clip'         | 'ellipsis', 'clip'                              | 设置文本溢出时的处理方式，不会继承 |
| -webkit-line-clamp    | 'none'         | Number                                          | 设置文本显示的行数，不会继承       |
| word-break            | 'normal'       | 'break-all', 'keep-all', 'normal'               | 设置文本换行方式，不会继承         |
| text-decoration       | 'none'         | -                                               | 设置文本装饰，不会继承             |
| text-decoration-color | 'currentColor' | Color                                           | 设置文本装饰颜色，不会继承         |
| text-decoration-style | 'solid'        | 'dotted', 'dashed', 'solid'                     | 设置文本装饰样式，不会继承         |
| text-decoration-line  | 'none'         | 'line-through', 'underline', 'overline', 'none' | 设置文本装饰线，不会继承           |
| white-space           | 'normal'       | 'nowrap', 'normal'                              | 设置空白处理方式，不会继承         |

## 背景属性

| 属性                  | 默认值        | 可选值                                                                       | 说明                                                  |
| --------------------- | ------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| background            |               |                                                                              | 设置背景，内联样式暂不支持颜色名称（如 red、blue 等） |
| background-color      | 'transparent' | Color                                                                        | 设置背景颜色                                          |
| background-image      | 'none'        | 'src(xxx)', 'linear-gradient(xxx)', 'radial-gradient(xxx)'                   | 设置背景图片或渐变                                    |
| background-size       | 'auto'        | 'cover', 'contain', Length(x y), Length(x) Length(y)                         | 设置背景图片大小                                      |
| background-repeat     | 'repeat'      | 'repeat', 'no-repeat', 'repeat-x', 'repeat-y'                                | 设置背景图片重复方式                                  |
| background-position   | '0% 0%'       | 'center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y) | 设置背景图片位置                                      |
| background-position-x | '0%'          | 'center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y) | 设置背景图片水平位置                                  |
| background-position-y | '0%'          | 'center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y) | 设置背景图片垂直位置                                  |

## 变换和动画

### 变换

| 属性      | 默认值 | 可选值                                                                                                                                                                  | 说明               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| transform | 'none' | 'translate', 'translateX', 'translateY', 'translateZ', 'translate2d', 'translate3d', 'scale', 'scaleX', 'scaleY', 'scale3d', 'rotate', 'rotateX', 'rotateY', 'rotate3d' | 设置元素的变换效果 |

### 动画

| 属性                      | 默认值   | 可选值                                                                                                        | 说明                               |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| animation                 |          |                                                                                                               | 设置动画，暂不支持内联样式         |
| animation-name            | 'none'   | String                                                                                                        | 设置动画名称，暂不支持内联样式     |
| animation-duration        | '0s'     | Number                                                                                                        | 设置动画持续时间，暂不支持内联样式 |
| animation-delay           | '0s'     | Number                                                                                                        | 设置动画延迟时间，暂不支持内联样式 |
| animation-fill-mode       | 'none'   | 'none', 'forwards', 'backwards', 'both'                                                                       | 设置动画填充模式，暂不支持内联样式 |
| animation-iteration-count | '1'      | Number                                                                                                        | 设置动画重复次数，暂不支持内联样式 |
| animation-timing-function | 'ease'   | 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier()', 'steps()' | 设置动画时间函数，暂不支持内联样式 |
| animation-direction       | 'normal' | 'normal', 'reverse', 'alternate', 'alternate-reverse'                                                         | 设置动画方向，暂不支持内联样式     |

### 过渡

| 属性                       | 默认值 | 可选值                                                                                                        | 说明                               |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| transition                 |        |                                                                                                               | 设置过渡，暂不支持内联样式         |
| transition-property        | 'all'  | all，支持属性：height, width, margin, padding, border, color, background-color, transform, opacity            | 设置过渡属性，暂不支持内联样式     |
| transition-duration        | '0s'   | Number                                                                                                        | 设置过渡持续时间，暂不支持内联样式 |
| transition-delay           | '0s'   | Number                                                                                                        | 设置过渡延迟时间，暂不支持内联样式 |
| transition-timing-function | 'ease' | 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier()', 'steps()' | 设置过渡时间函数，暂不支持内联样式 |

## 其他属性

| 属性              | 默认值    | 可选值                                | 说明                     |
| ----------------- | --------- | ------------------------------------- | ------------------------ |
| box-shadow        | 'none'    | -                                     | 设置元素阴影             |
| box-shadow-color  | 'black'   | Color                                 | 设置阴影颜色             |
| box-shadow-offset | '0 0'     | Length(x y), Length(x) Length(y)      | 设置阴影偏移             |
| box-shadow-blur   | '0'       | Length                                | 设置阴影模糊半径         |
| overflow          | 'visible' | 'hidden', 'visible', 'scroll', 'auto' | 设置内容溢出时的处理方式 |
| visibility        | 'visible' | 'hidden', 'visible'                   | 设置元素可见性           |
| opacity           | '1'       | Number                                | 设置元素透明度           |

## 媒体查询

### 支持的媒体特性

| 特性                | 说明       |
| ------------------- | ---------- |
| width               | 视口宽度   |
| height              | 视口高度   |
| aspect-ratio        | 视口宽高比 |
| orientation         | 视口方向   |
| device-width        | 设备宽度   |
| device-height       | 设备高度   |
| device-aspect-ratio | 设备宽高比 |
| resolution          | 设备分辨率 |

### 支持的复合查询

| 操作符 | 说明     |
| ------ | -------- |
| not    | 否定查询 |
| and    | 逻辑与   |
| or     | 逻辑或   |

### 使用示例

```css
/* 设备宽度大于等于 768px */
@media (min-width: 768px) {
  /* 样式 */
}

/* 设备方向为横屏 */
@media (orientation: landscape) {
  /* 样式 */
}

/* 设备宽度在 768px 到 1024px 之间 */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 样式 */
}

/* 设备宽度小于 768px 或大于 1024px */
@media (max-width: 768px), (min-width: 1024px) {
  /* 样式 */
}
```

## 说明

### 长度单位

| 单位   | 说明             | 示例                       |
| ------ | ---------------- | -------------------------- |
| px     | 像素             | `10px`                     |
| vp     | 虚拟像素         | `10vp`                     |
| %      | 百分比           | `50%`                      |
| vw     | 视口宽度的百分比 | `50vw`                     |
| vh     | 视口高度的百分比 | `50vh`                     |
| calc() | 计算表达式       | `calc(100% - 20px)`        |
| env()  | 环境变量         | `env(safe-area-inset-top)` |

### 颜色值

| 格式     | 说明                  | 示例                   |
| -------- | --------------------- | ---------------------- |
| 十六进制 | 6 位或 8 位十六进制数 | `#FF0000`, `#FF0000FF` |
| RGB      | RGB 颜色值            | `rgb(255, 0, 0)`       |
| RGBA     | 带透明度的 RGB 颜色值 | `rgba(255, 0, 0, 0.5)` |
| 颜色名称 | 预定义的颜色名称      | `red`, `blue`, `green` |

### 支持的动画和过渡属性

| 属性             | 说明     |
| ---------------- | -------- |
| height           | 高度     |
| width            | 宽度     |
| margin           | 外边距   |
| padding          | 内边距   |
| border           | 边框     |
| color            | 颜色     |
| background-color | 背景颜色 |
| transform        | 变换     |
| opacity          | 透明度   |

---

## docs/harmony/c-api.md

---
title: Harmony-CPP 插件安装和使用
---

:::info
Taro v4.1.0+ 开始支持
:::

本章节会介绍如何使用 Taro For Harmony 插件，实现 Taro 项目打包纯血鸿蒙应用的能力。

## 快速开始

### 安装和使用

- 安装 harmony 插件

  ```shell
  # 使用 npm 安装
  $ npm i @tarojs/plugin-platform-harmony-cpp
  # 使用 pnpm 安装
  $ pnpm i @tarojs/plugin-platform-harmony-cpp
  ```

- 添加插件配置

  ```ts
  import os from 'os'
  import path from 'path'

  const config = {
    // ...
    plugin: ['@tarojs/plugin-platform-harmony-cpp'],
    harmony: {
      // 当前仅支持使用 Vite 编译鸿蒙应用
      compiler: 'vite',
      // Note: 鸿蒙工程路径，可以参考 [鸿蒙应用创建导读](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-with-ets-stage-0000001477980905-V2) 创建
      projectPath: path.join(os.homedir(), 'projects/my-business-project'),
      // Taro 项目编译到对应鸿蒙模块名，默认为 entry
      hapName: 'entry',
    },
    // ...
  }
  ```

### 编译项目

```sh
# 编译鸿蒙应用
$ taro build --type harmony_cpp
# 编译鸿蒙原生组件
$ taro build native-components --type harmony_cpp
```

如果需要编译鸿蒙应用，同时使用编译鸿蒙原生组件，可以在页面配置中添加 `entryOption: false` 表示该页面是组件，同时可以用过 `componentName` 指定组件导出名。

```diff
export default {
  navigationBarTitleText: 'Hello World',
+  componentName: 'MyComponent',
+  entryOption: false,
}
```

## 功能

### 使用公共依赖库

插件默认使用内置版本的公共依赖库，可以通过 useChoreLibrary 配置禁用或者配置指定版本依赖。

```ts
const config = {
  // ...
  plugin: [
    '@tarojs/plugin-platform-harmony-cpp', // useChoreLibrary: 'local'
    // ['@tarojs/plugin-platform-harmony-cpp', { useChoreLibrary: false }],
    // ['@tarojs/plugin-platform-harmony-cpp', { useChoreLibrary: '4.1.0-alpha.0' }],
  ],
  harmony: {
    ohPackage: {
      dependencies: {
        library: 'file:../library',
      },
    },
  },
  // ...
}
```

插件版本可以通过 `ohPackage.dependencies` 配置或者鸿蒙工程内 `oh-package.json5` 配置覆盖。

### 类型定义

需要在 Taro 项目的 types/global.d.ts 文件夹里添加对插件类型的引用

```ts
/// <reference types="@tarojs/taro" />
/// <reference path="../node_modules/@tarojs/plugin-platform-harmony-cpp/types/define.d.ts" />
```

## 项目集成

Taro 默认支持构建鸿蒙应用，同时也允许开发者灵活扩展功能。你可以在 Taro 项目中使用鸿蒙原生模块，也可以在鸿蒙项目中集成 Taro 模块。

### 在 Taro 中使用鸿蒙原生模块

与 Taro 在其他端类似，可以通过配置 `usingComponents` 来引入鸿蒙原生组件。

```ts
/** index.config.ts */
export default {
  usingComponents: {
    title: './path/to/title-component',
  },
}

/** index.ts */
import { View } from '@tarojs/components'

export default function Index() {
  return (
    <View>
      <title title="Hello World!" />
    </View>
  )
}
```

如果希望使用 Taro 构建的鸿蒙原生组件或者为原生组件提供类型提示，也可以通过 `importNativeComponent` 方法来引入。

```ts
/** title.ts */
import { View } from '@tarojs/components'

definePageConfig({
  entryOption: false,
  componentName: 'Title',
})

export default function Title({ title = 'Hello World' }) {
  return <View>{title}</View>
}

// importNativeComponent(path, moduleName, componentName)
export const Title = importNativeComponent<typeof import('./title').default>('./title', 'title', 'Title')

/** index.ts */
import { View } from '@tarojs/components'
import { Title } from './title'

export default function Index() {
  return (
    <View>
      <Title title="Hello World!" />
    </View>
  )
}
```

### 在鸿蒙项目中集成 Taro 模块

在鸿蒙项目中可以通过页面或者组件的形式来接入 Taro 模块，但如果不是 Taro 创建的鸿蒙项目需要在入口处添加 Taro 相关的初始化方法：

```ts
import { context, Current } from "@taro-oh/library/src/main/ets/npm/@tarojs/runtime"
import { TaroWindowUtil } from "@taro-oh/library/src/main/ets/npm/@tarojs/runtime"

export default class EntryAbility extends UIAbility {
  ...
  onWindowStageCreate(stage: ohWindow.WindowStage) {
    context.resolver(this.context)
    TaroWindowUtil.setWindowStage(stage)

    stage.loadContent('home_page', (err, data) => {
      const windowClass = stage.getMainWindowSync()
      Current.uiContext = windowClass.getUIContext()
      windowClass.setWindowLayoutFullScreen(true)
    })
  }
}
```

更多配置可以参考项目生成的 `app.ts` 文件改造。

通过页面接入需要在模块配置文件 `module.json5` 中配置 pages 参数，如果是组件模式，可以参考原生 ets 组件方法引入。

```plain
import { Title } from './components/title'

@Builder
function render () {
  Title({
    props: {
      title: 'Hello World!'
    }
  })
}
```

### 定制 Taro 运行时

与其他端类似，开发者同样可以通过继承 HarmonyCPP 实例来修改 Taro 的默认行为，包括新增运行时代码等。

```ts
import { HarmonyCPP } from '@tarojs/plugin-platform-harmony-cpp'

export default class MyTaro extends HarmonyCPP {
  // ...
  constructor() {
    super()
    // ...
    if (typeof this.runtimePath === 'string') {
      this.runtimePath = [this.runtimePath, path.resolve(__dirname, 'my-runtime')] // Note: 如果有需要可以覆盖 runtime 禁用 taro 默认 API 行为
    }
  }
}
```

> 如果不想构建端应用插件，也可以通过配置 copy 将自定义 ets 代码注入到项目中。

通过注入运行时，开发者可以监听 Taro 抛出的 `__taroPluginEtsMethodsTrigger` 事件，可以通过监听事件实现获取开发用户调用 Taro 方法的参数，或者修改 Taro 的默认行为。

```ts
import { eventCenter } from '@tarojs/runtime'
import { IEtsMethodsOptions } from '@tarojs/plugin-platform-harmony-cpp/dist/runtime/runtime-harmony'

/**
 * interface IEtsMethodsOptions {
 *   methodName?: string
 *   name?: string
 *   scope?: string
 *   type?: string
 *   args?: TaroAny[]
 *   successHandler?: (...args: TaroAny[]) => void
 *   errorHandler?: (...args: TaroAny[]) => void
 *   onInit?: (obj: TaroAny) => void
 * }
 */

eventCenter?.on('__taroPluginEtsMethodsTrigger', (option: IEtsMethodsOptions) => {
  switch (option.scope) {
    case 'route':
      // ...
      break
    default:
      break
  }
})
```

> 未实现的 API 可以通过监听 `__taroNotSupport` 事件自定义实现。

---

