## docs/components/base/icon.md

---
title: Icon
sidebar_label: Icon
---

图标。组件属性的长度单位默认为 px

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)

## 类型

```tsx
ComponentType<IconProps>
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

  render() {
    return (
      <View className='components-page'>
        <Icon size='60' type='success' />
        <Icon size='60' type='info' />
        <Icon size='60' type='warn' color='#ccc' />
        <Icon size='60' type='warn' />
        <Icon size='60' type='waiting' />
        <Icon size='20' type='success_no_circle' />
        <Icon size='20' type='warn' />
        <Icon size='20' type='success' />
        <Icon size='20' type='download' />
        <Icon size='20' type='clear' color='red' />
        <Icon size='20' type='search' />
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

<template>
  <view class="components-page">
    <icon size="60" type="success" />
    <icon size="60" type="info" />
    <icon size="60" type="warn" color="#ccc" />
    <icon size="60" type="warn" />
    <icon size="60" type="waiting" />
    <icon size="20" type="success_no_circle" />
    <icon size="20" type="warn" />
    <icon size="20" type="success" />
    <icon size="20" type="download" />
    <icon size="20" type="clear" color="red" />
    <icon size="20" type="search" />
  </view>
</template>
</TabItem>
</Tabs>

## IconProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | `keyof TIconType` |  | 是 | icon 的类型 |
| size | `number` | `23` | 否 | icon 的大小，单位px |
| color | `string` |  | 否 | icon 的颜色，同 css 的 color |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| IconProps.type | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| IconProps.size | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| IconProps.color | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| IconProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |

### TIconType

icon 的类型

| 参数 | 说明 |
| --- | --- |
| success | 成功图标 |
| success_no_circle | 成功图标（不带外圈） |
| info | 信息图标 |
| warn | 警告图标 |
| waiting | 等待图标 |
| cancel | 取消图标 |
| download | 下载图标 |
| search | 搜索图标 |
| clear | 清除图标 |
| circle | 圆环图标(多选控件图标未选择)「微信文档未标注属性」 |
| info_circle | 带圆环的信息图标「微信文档未标注属性」 |

---

## docs/components/base/progress.md

---
title: Progress
sidebar_label: Progress
---

进度条。组件属性的长度单位默认为 px

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/progress.html)

## 类型

```tsx
ComponentType<ProgressProps>
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

  render() {
    return (
      <View className='components-page'>
        <Progress percent={20} showInfo strokeWidth={2} />
        <Progress percent={40} strokeWidth={2} active />
        <Progress percent={60}  strokeWidth={2} active />
        <Progress percent={80}  strokeWidth={2} active activeColor='blue' />
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
    <progress percent="20" stroke-width="2" :show-info="true" />
    <progress percent="40" stroke-width="2" :active="true" />
    <progress percent="60" stroke-width="2" :active="true" />
    <progress percent="80" stroke-width="2" :active="true" active-color="blue" />
  </view>
</template>
```
</TabItem>
</Tabs>

## ProgressProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| percent | `number` |  | 否 | 百分比 0~100 |
| showInfo | `boolean` | `false` | 否 | 在进度条右侧显示百分比 |
| borderRadius | string or number | `0` | 否 | 圆角大小 |
| fontSize | string or number | `16` | 否 | 右侧百分比字体大小 |
| strokeWidth | string or number | `6` | 否 | 进度条线的宽度 |
| color | `string` | `"#09BB07"` | 否 | 进度条颜色 (请使用 activeColor) |
| activeColor | `string` | `"#09BB07"` | 否 | 已选择的进度条的颜色 |
| backgroundColor | `string` | `"#EBEBEB"` | 否 | 未选择的进度条的颜色 |
| active | `boolean` | `false` | 否 | 进度条从左往右的动画 |
| activeMode | "backwards" or "forwards" | `backwards` | 否 | backwards: 动画从头播<br /><br />forwards: 动画从上次结束点接着播 |
| duration | `number` | `30` | 否 | 进度增加 1% 所需毫秒数 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onActiveEnd | `CommonEventFunction` |  | 否 | 动画完成事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ProgressProps.percent | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.showInfo | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.borderRadius | ✔️ | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| ProgressProps.fontSize | ✔️ | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| ProgressProps.strokeWidth | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.color | ✔️ | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| ProgressProps.activeColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.backgroundColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.active | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.activeMode | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ProgressProps.duration | ✔️ | ✔️ |  | ✔️ |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| ProgressProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ProgressProps.onActiveEnd | ✔️ |  |  | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

---

## docs/components/base/rich-text.md

---
title: RichText
sidebar_label: RichText
---

富文本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)

## 类型

```tsx
ComponentType<RichTextProps>
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
  state = {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello World!'
      }]
    }]
  }
  render () {
    return (
      <RichText nodes={this.state.nodes} />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <rich-text :nodes="nodes"></rich-text>
  </view>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'Hello World!'
        }]
      }]
    }
  },
  onReady () {
    console.log('onReady')
  }
}
</script>
```
</TabItem>
</Tabs>

## RichTextProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| userSelect | `boolean` | `false` | 否 | 文本是否可选，该属性会使节点显示为 block |
| nodes | `Nodes` |  | 否 | 节点列表/ HTML String |
| space | `keyof TSpace` |  | 否 | 显示连续空格 |
| selectable | `string` | `false（基础库 3.150.1 以前版本）true（基础库 3.150.1 及以后版本）` | 否 | 富文本是否可以长按选中，可用于复制，粘贴，长按搜索等场景 |
| imageMenuPrevent | `string` | `false` | 否 | 阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性 |
| preview | `string` |  | 否 | 富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview |
| onTap | `CommonEventFunction` |  | 否 | 触摸。 |
| onTouchstart | `CommonEventFunction` |  | 否 | 触摸动作开始。 |
| onTouchmove | `CommonEventFunction` |  | 否 | 触摸移动事件。 |
| onTouchcancel | `CommonEventFunction` |  | 否 | 触摸动作被打断。 |
| onTouchend | `CommonEventFunction` |  | 否 | 触摸动作结束。 |
| onLongtap | `CommonEventFunction` |  | 否 | 触摸后，超过 500ms 再离开。 |
| mode | "default" or "compat" or "aggressive" or "inline-block" or "web" | `default` | 否 | 布局兼容模式 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RichTextProps.userSelect | ✔️ |  |  |  |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| RichTextProps.nodes | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| RichTextProps.space | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| RichTextProps.selectable |  | ✔️ |  |  |  |  | ✔️ |  |  | ✔️ |  |
| RichTextProps.imageMenuPrevent |  | ✔️ |  |  |  |  |  |  |  |  |  |
| RichTextProps.preview |  | ✔️ |  |  |  |  |  |  |  |  |  |
| RichTextProps.onTap |  |  | ✔️ |  |  |  |  |  |  |  |  |
| RichTextProps.onTouchstart |  |  | ✔️ |  |  |  |  |  |  |  |  |
| RichTextProps.onTouchmove |  |  | ✔️ |  |  |  |  |  |  |  |  |
| RichTextProps.onTouchcancel |  |  | ✔️ |  |  |  |  |  |  |  |  |
| RichTextProps.onTouchend |  |  | ✔️ |  |  |  |  |  |  |  |  |
| RichTextProps.onLongtap |  |  | ✔️ |  |  |  |  |  |  |  |  |
| RichTextProps.mode | ✔️ |  |  |  |  |  |  |  |  |  |  |

### TSpace

space 的合法值

| 参数 | 说明 |
| --- | --- |
| ensp | 中文字符空格一半大小 |
| emsp | 中文字符空格大小 |
| nbsp | 根据字体设置的空格大小 |

### Text

文本节点

| 参数 | 类型 | 默认值 | 说明 | 备注 |
| --- | --- | :---: | --- | --- |
| type | `"text"` |  | 文本类型 |  |
| text | `string` | `""` | 文本字符串 | `支持 entities` |

### HTMLElement

元素节点，默认为元素节点
全局支持class和style属性，不支持 id 属性。

| 参数 | 类型 | 必填 | 说明 | 备注 |
| --- | --- | :---: | --- | --- |
| type | `"node"` | 否 | HTML 类型 |  |
| name | `string` | 是 | 标签名 | `支持部分受信任的 HTML 节点` |
| attrs | `Object` | 否 | 属性 | `支持部分受信任的属性，遵循 Pascal 命名法` |
| children | `Nodes` | 否 | 子节点列表 | `结构和 nodes 一致` |

## Nodes

节点类型
> 现支持两种节点，通过type来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的HTML节点 元素节点：type = node*

### 类型

```tsx
(Text | HTMLElement)[] | string
```

---

## docs/components/base/text.md

---
title: Text
sidebar_label: Text
---

文本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)

## 类型

```tsx
ComponentType<TextProps>
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
  state = {
    contents: [],
    contentsLen: 0
  }

  add = () => {
    this.setState(prev => {
      const cot = prev.contents.slice()
      cot.push({ text: 'hello world' })
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }

  remove = () => {
    this.setState(prev => {
      const cot = prev.contents.slice()
      cot.pop()
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }

  render () {
    return (
      <View className='container'>
        {this.state.contents.map((item, index) => (
          <Text key={index}>{item.text}</Text>
        ))}
        <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>
        <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

``` html
<template>
  <view class="container">
    <view v-for="(item, index) in contents">
      <text>{{item.text}} line {{index + 1}}</text>
    </view>
    <button class="btn-max-w button_style" :plain="true" type="default" @tap="add">add line</button>
    <button class="btn-max-w button_style" :plain="true" type="default" :disabled="contentsLen ? false : true" @tap="remove">remove line</button>
</template>

<script>
export default {
  data() {
    return {
      contents: [],
      contentsLen: 0
    }
  },
  methods: {
    add () {
      const cot = this.contents.slice()
      cot.push({ text: 'hello world' })
      this.contents = cot
      this.contentsLen = cot.length
    },

    remove () {
      const cot = this.contents.slice()
      cot.pop()
      this.contents = cot
      this.contentsLen = cot.length
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## TextProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| selectable | `boolean` | `false` | 否 | 文本是否可选 |
| userSelect | `boolean` | `false` | 否 | 文本是否可选，该属性会使文本节点显示为 inline-block |
| space | `keyof TSpace` |  | 否 | 显示连续空格 |
| decode | `boolean` | `false` | 否 | 是否解码 |
| numberOfLines | `number` |  | 否 | 多行省略，值须大于等于 1，表现同 css 的 -webkit-line-clamp 属性一致。 |
| overflow | `keyof Overflow` | `'visible'` | 否 | 文本溢出处理 |
| maxLines | `number` |  | 否 | 限制文本最大行数 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| TextProps.selectable | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| TextProps.userSelect | ✔️ |  |  |  |  |  | ✔️ |  |  | ✔️ | ✔️ |
| TextProps.space | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| TextProps.decode | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | (默认解码，不支持设置) |  |  |  | ✔️ |
| TextProps.numberOfLines |  |  | ✔️ |  |  |  |  |  |  |  |  |
| TextProps.overflow | ✔️ |  |  |  |  |  |  |  |  |  |  |
| TextProps.maxLines | ✔️ |  |  |  |  |  |  |  | ✔️ |  |  |

### TSpace

space 的合法值

| 参数 | 说明 |
| --- | --- |
| ensp | 中文字符空格一半大小 |
| emsp | 中文字符空格大小 |
| nbsp | 根据字体设置的空格大小 |

### Overflow

| 参数 | 说明 |
| --- | --- |
| clip | 修剪文本 |
| fade | 淡出 |
| ellipsis | 显示省略号 |
| visible | 文本不截断 |

---

