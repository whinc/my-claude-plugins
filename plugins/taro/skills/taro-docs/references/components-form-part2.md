## docs/components/forms/picker.md

---
title: Picker
sidebar_label: Picker
---

从底部弹起的滚动选择器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html)

## 类型

```tsx
ComponentType<PickerSelectorProps | PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps>
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
export default class PagePicker extends Component {
  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="page-body">
    <view class="page-section">
      <text>地区选择器</text>
      <view>
        <picker mode="selector" :range="selector" @change="onChange">
          <view class="picker">
            当前选择：{{selectorChecked}}
          </view>
        </picker>
      </view>
    </view>
    <view class="page-section">
      <text>时间选择器</text>
      <view>
        <picker mode="time" @change="onTimeChange">
          <view class="picker">
            当前选择：{{timeSel}}
          </view>
        </picker>
      </view>
    </view>
    <view class="page-section">
      <text>日期选择器</text>
      <view>
        <picker mode="date" @change="onDateChange">
          <view class="picker">
            当前选择：{{dateSel}}
          </view>
        </picker>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        selector: ['美国', '中国', '巴西', '日本'],
        selectorChecked: '美国',
        timeSel: '12:01',
        dateSel: '2018-04-22'
      }
    },
    methods: {
      onChange: function(e) {
        this.selectorChecked = this.selector[e.detail.value]
      },

      onTimeChange: function(e) {
        this.timeSel = e.detail.value
      },

      onDateChange: function(e) {
        this.dateSel = e.detail.value
      }
    }
  }
</script>
```
</TabItem>
</Tabs>

## PickerStandardProps

选择器通用参数

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| headerText | `string` |  | 否 | 选择器的标题，微信小程序中仅安卓可用 |
| mode | `keyof Mode` | `"selector"` | 否 | 选择器类型，默认是普通选择器 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| onCancel | `CommonEventFunction` |  | 否 | 取消选择或点遮罩层收起 picker 时触发 |
| textProps | `PickerText` |  | 否 | 用于替换组件内部文本 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerStandardProps.headerText | ✔️ |  |  |  |  |  |
| PickerStandardProps.mode | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerStandardProps.disabled | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| PickerStandardProps.onCancel | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerStandardProps.textProps |  | ✔️ |  | ✔️ | ✔️ |  |

### Mode

选择器类型

| 参数 | 说明 |
| --- | --- |
| selector | 普通选择器 |
| multiSelector | 多列选择器 |
| time | 时间选择器 |
| date | 日期选择器 |
| region | 省市区选择器 |

### PickerText

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| okText | `string` | 否 |
| cancelText | `string` | 否 |

## PickerSelectorProps

普通选择器：mode = selector

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| mode | `"selector"` |  | 否 | 选择器类型 |
| range | string[] or number[] or Record<string, any>[] | `[]` | 是 | mode为 selector 或 multiSelector 时，range 有效 |
| rangeKey | `string` |  | 否 | 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容 |
| value | `number` | `0` | 否 | 表示选择了 range 中的第几个（下标从 0 开始） |
| defaultValue | `number` |  | 否 | 设置 React 非受控状态下的初始取值 |
| itemStyle | `StyleProp<TextStyle>` | `{}` | 否 | mode为 selector 或 multiSelector 时 itemStyle 有效 |
| indicatorStyle | `StyleProp<ViewStyle>` | `{}` | 否 | mode为 selector 或 multiSelector 时 indicatorStyle 有效 |
| onChange | `CommonEventFunction<ChangeEventDetail>` |  | 否 | value 改变时触发 change 事件 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerSelectorProps.range | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerSelectorProps.rangeKey | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerSelectorProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerSelectorProps.defaultValue | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| PickerSelectorProps.itemStyle |  |  | ✔️ |  |  |  |
| PickerSelectorProps.indicatorStyle |  |  | ✔️ |  |  |  |
| PickerSelectorProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### ChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 表示变更值的下标 |

## PickerMultiSelectorProps

多列选择器：mode = multiSelector

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| mode | `"multiSelector"` |  | 是 | 选择器类型 |
| range | string[][] or number[][] or Record<string, any>[][] | `[]` | 是 | mode为 selector 或 multiSelector 时，range 有效 |
| rangeKey | `string` |  | 否 | 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容 |
| value | string[] or number[] or Record<string, any>[] | `[]` | 是 | 表示选择了 range 中的第几个（下标从 0 开始） |
| itemStyle | `StyleProp<TextStyle>` | `{}` | 否 | mode为 selector 或 multiSelector 时 itemStyle 有效 |
| indicatorStyle | `StyleProp<ViewStyle>` | `{}` | 否 | mode为 selector 或 multiSelector 时 indicatorStyle 有效 |
| onChange | `CommonEventFunction<ChangeEventDetail>` |  | 是 | 当 value 改变时触发 change 事件 |
| onColumnChange | `CommonEventFunction<ColumnChangeEventDetail>` |  | 否 | 列改变时触发 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerMultiSelectorProps.range | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerMultiSelectorProps.rangeKey | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerMultiSelectorProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerMultiSelectorProps.itemStyle |  |  | ✔️ |  |  |  |
| PickerMultiSelectorProps.indicatorStyle |  |  | ✔️ |  |  |  |
| PickerMultiSelectorProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerMultiSelectorProps.onColumnChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### ChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `number[]` | 表示变更值的下标 |

### ColumnChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| column | `number` | 表示改变了第几列（下标从0开始） |
| value | `number` | 表示变更值的下标 |

## PickerTimeProps

时间选择器：mode = time

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| mode | `"time"` | 是 | 选择器类型 |
| value | `string` | 否 | value 的值表示选择了 range 中的第几个（下标从 0 开始） |
| defaultValue | `string` | 否 | 设置 React 非受控状态下的初始取值 |
| start | `string` | 否 | 仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的开始，字符串格式为"hh:mm" |
| end | `string` | 否 | 仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的结束，字符串格式为"hh:mm" |
| onChange | `CommonEventFunction<ChangeEventDetail>` | 是 | value 改变时触发 change 事件 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerTimeProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerTimeProps.defaultValue | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| PickerTimeProps.start | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerTimeProps.end | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerTimeProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### ChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 表示选中的时间 |

## PickerDateProps

日期选择器：mode = date

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| mode | `"date"` |  | 是 | 选择器类型 |
| value | `string` | `0` | 是 | 表示选中的日期，格式为"YYYY-MM-DD" |
| defaultValue | `string` |  | 否 | 设置 React 非受控状态下的初始取值 |
| start | `string` |  | 否 | 仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的开始，字符串格式为"YYYY-MM-DD" |
| end | `string` |  | 否 | 仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的结束，字符串格式为"YYYY-MM-DD" |
| fields | `keyof Fields` | `"day"` | 否 | 有效值 year, month, day，表示选择器的粒度 |
| onChange | `CommonEventFunction<ChangeEventDetail>` |  | 是 | value 改变时触发 change 事件 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerDateProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerDateProps.defaultValue | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| PickerDateProps.start | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerDateProps.end | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| PickerDateProps.fields | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| PickerDateProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### Fields

| 参数 | 说明 |
| --- | --- |
| year | 选择器粒度为年 |
| month | 选择器粒度为月份 |
| day | 选择器粒度为天 |

### ChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 表示选中的日期 |

## PickerRegionProps

省市区选择器：mode = region

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| mode | `"region"` |  | 是 | 选择器类型 |
| value | `string[]` | `[]` | 否 | 表示选中的省市区，默认选中每一列的第一个值 |
| defaultValue | `string[]` |  | 否 | 设置 React 非受控状态下的初始取值 |
| customItem | `string` |  | 否 | 可为每一列的顶部添加一个自定义的项 |
| level | `keyof Level` | `"region"` | 否 | 选择器层级 |
| regionData | `RegionData[]` |  | 否 | 自定义省市区数据 |
| onChange | `CommonEventFunction<ChangeEventDetail>` |  | 是 | value 改变时触发 change 事件 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerRegionProps.value | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| PickerRegionProps.defaultValue | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| PickerRegionProps.customItem | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| PickerRegionProps.level | ✔️ |  |  |  |  |  |
| PickerRegionProps.regionData |  |  | ✔️ |  |  |  |
| PickerRegionProps.onChange | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |

### ChangeEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| value | `string[]` | 是 | 表示选中的省市区 |
| code | `string[]` | 是 | 统计用区划代码 |
| postcode | `string` | 否 | 邮政编码 |

### RegionData

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| value | `string` | 是 |
| code | `string` | 是 |
| postcode | `string` | 否 |
| children | `RegionData[]` | 否 |

### Level

| 参数 | 说明 |
| --- | --- |
| province | 省级选择器 |
| city | 市级选择器 |
| region | 区级选择器 |
| sub-district | 街道选择器 |

---

## docs/components/forms/radio-group.md

---
title: RadioGroup
sidebar_label: RadioGroup
---

单项选择器，内部由多个 Radio 组成。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html)

## 类型

```tsx
ComponentType<RadioGroupProps>
```

## RadioGroupProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| name | `string` | 否 | 组件名字，用于表单提交获取数据。 |
| onChange | `CommonEventFunction` | 否 | RadioGroup 中选中项发生改变时触发 change 事件，detail = {value:[选中的radio的value的数组]} |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RadioGroupProps.name |  |  | ✔️ | ✔️ |  |  |  |  | ✔️ |  |  |
| RadioGroupProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

### onChangeEventDetail

| 参数 | 类型 |
| --- | --- |
| value | `string[]` |

---

## docs/components/forms/radio.md

---
title: Radio
sidebar_label: Radio
---

单选项目

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/radio.html)

## 类型

```tsx
ComponentType<RadioProps>
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
export default class PageRadio extends Component {
  state = {
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }
  render () {
    return (
      <View className='container'>
        <Head title='Radio' />
        <View className='page-body'>
          <View className='page-section'>
            <Text>默认样式</Text>
            <Radio value='选中' checked>选中</Radio>
            <Radio style='margin-left: 20rpx' value='未选中'>未选中</Radio>
          </View>
          <View className='page-section'>
            <Text>推荐展示样式</Text>
            <View className='radio-list'>
              <RadioGroup>
                {this.state.list.map((item, i) => {
                  return (
                    <Label className='radio-list__label' for={i} key={i}>
                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                    </Label>
                  )
                })}
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <view class="page-section">
      <text>默认样式</text>
      <radio value="选中" :checked="true">选中</radio>
      <radio style="margin-left: 20rpx;" value="未选中">未选中</radio>
    </view>
    <view class="page-section">
      <text>推荐展示样式(Taro 团队成员):</text>
        <radio-group @change="onChange">
          <label v-for="item in list" class="checkbox-list__label">
            <radio class="checkbox-list__checkbox" :value="item.value" :checked="item.checked">{{ item.text }}</radio>
          </label>
        </radio-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          value: 'yuche',
          text: 'yuche',
          checked: false
        },
        {
          value: 'cjj',
          text: 'cjj',
          checked: false
        },
        {
          value: 'xiexiaoli',
          text: 'xiexiaoli',
          checked: false
        },
        {
          value: 'honly',
          text: 'honly',
          checked: false
        },
        {
          value: 'cs',
          text: 'cs',
          checked: false
        },
        {
          value: 'zhutianjian',
          text: 'zhutianjian',
          checked: false
        },
        {
          value: '隔壁老李',
          text: '隔壁老李',
          checked: true
        }
      ]
    }
  },
  methods: {
    onChange: function(e) {
      console.log(e.detail.value)
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## RadioProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `string` |  | 否 | `<Radio/>` 标识。当该`<Radio/>` 选中时，`<RadioGroup/>`的 change 事件会携带`<Radio/>`的 value |
| checked | `boolean` | `false` | 否 | 当前是否选中 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| color | `string` | `"#09BB07"` | 否 | Radio 的颜色，同 css 的 color |
| name | `string` |  | 否 | Radio 的名字 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<{ value?: string; }>` |  | 否 | <radio-group/> 中的选中项发生变化时触发 change 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RadioProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| RadioProps.checked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| RadioProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| RadioProps.color | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ |
| RadioProps.name |  |  |  |  |  |  | ✔️ |  | ✔️ | ✔️ |  |
| RadioProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| RadioProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| RadioProps.onChange |  |  |  |  |  |  | ✔️ | ✔️ | ✔️ | ✔️ |  |

---

## docs/components/forms/slider.md

---
title: Slider
sidebar_label: Slider
---

滑动选择器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html)

## 类型

```tsx
ComponentType<SliderProps>
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
        <Text>设置 step</Text>
        <Slider step={1} value={50}/>
        <Text>显示当前 value</Text>
        <Slider step={1} value={50} showValue/>
        <Text>设置最小/最大值</Text>
        <Slider step={1} value={100} showValue min={50} max={200}/>
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
    <text>设置 step</text>
    <slider step="1" value="50"/>
    <text>显示当前 value</text>
    <slider step="1" value="50" :show-value="true" />
    <text>设置最小/最大值</text>
    <slider step="1" value="100" :show-value="true" min="50" max="200"/>
  </view>
</template>
```
</TabItem>
</Tabs>

## SliderProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| min | `number` | `0` | 否 | 最小值 |
| max | `number` | `100` | 否 | 最大值 |
| step | `number` | `1` | 否 | 步长，取值必须大于 0，并且可被(max - min)整除 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| value | `number` | `0` | 否 | 当前取值 |
| defaultValue | `string` |  | 否 | 设置 React 非受控状态下的初始取值 |
| color | `string` | `"#e9e9e9"` | 否 | 背景条的颜色（请使用 backgroundColor） |
| selectedColor | `string` | `"#1aad19"` | 否 | 已选择的颜色（请使用 activeColor） |
| activeColor | `string` | `"#1aad19"` | 否 | 已选择的颜色 |
| backgroundColor | `string` | `"#e9e9e9"` | 否 | 背景条的颜色 |
| blockSize | `number` | `28` | 否 | 滑块的大小，取值范围为 12 - 28 |
| blockColor | `string` | `"#ffffff"` | 否 | 滑块的颜色 |
| showValue | `boolean` | `false` | 否 | 是否显示当前 value |
| name | `string` |  | 否 | 组件名字，用于表单提交获取数据。 |
| trackSize | `string` | `4` | 否 | 轨道线条高度。 |
| handleSize | `string` | `22` | 否 | 滑块大小。 |
| handleColor | `string` |  | 否 | 滑块填充色，同 CSS 色值。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 完成一次拖动后触发的事件 |
| onChanging | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 拖动过程中触发的事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SliderProps.min | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.max | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.step | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.defaultValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| SliderProps.color | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |  |
| SliderProps.selectedColor | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |  |
| SliderProps.activeColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.backgroundColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.blockSize | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |
| SliderProps.blockColor | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.showValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.name |  |  | ✔️ |  |  |  |  |  |  |  |  |
| SliderProps.trackSize |  |  | ✔️ |  |  |  |  |  |  |  |  |
| SliderProps.handleSize |  |  | ✔️ |  |  |  |  |  |  |  |  |
| SliderProps.handleColor |  |  | ✔️ |  |  |  |  |  |  |  |  |
| SliderProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| SliderProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SliderProps.onChanging | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### onChangeEventDetail

---

## docs/components/forms/switch.md

---
title: Switch
sidebar_label: Switch
---

开关选择器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html)

## 类型

```tsx
ComponentType<SwitchProps>
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
        <Text>默认样式</Text>
        <Switch checked/>
        <Switch/>
        <Text>推荐展示样式</Text>
        <Switch checked/>
        <Switch/>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class='components-page'>
    <text>默认样式</text>
    <switch :checked="true" />
    <switch />
    <text>推荐展示样式</text>
    <switch :checked="true" />
    <switch />
  </view>
</template>
```
</TabItem>
</Tabs>

## SwitchProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| checked | `boolean` | `false` | 否 | 是否选中 |
| defaultChecked | `boolean` |  | 否 | 设置在 React 非受控状态下，当前是否选中 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| type | "switch" or "checkbox" | `"switch"` | 否 | 样式，有效值：switch, checkbox |
| color | `string` | `"#04BE02"` | 否 | switch 的颜色，同 css 的 color |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| name | `string` |  | 否 | 组件名字，用于表单提交获取数据。 |
| controlled | `string` | `false` | 否 | 是否为受控组件，为 true 时，checked 会完全受 setData 控制。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | checked 改变时触发 change 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SwitchProps.checked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.defaultChecked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| SwitchProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.type | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.color | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| SwitchProps.name |  |  | ✔️ |  |  |  |  |  |  |  |  |
| SwitchProps.controlled |  |  | ✔️ |  |  |  |  |  |  |  |  |
| SwitchProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| SwitchProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### onChangeEventDetail

| 参数 | 类型 |
| --- | --- |
| value | `boolean` |

---

## docs/components/forms/textarea.md

---
title: Textarea
sidebar_label: Textarea
---

多行输入框。该组件是原生组件，使用时请注意相关限制

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html)

## 类型

```tsx
ComponentType<TextareaProps>
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
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>
        <Text>这是一个可以自动聚焦的 textarea</Text>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>
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
    <text>输入区域高度自适应，不会出现滚动条</text>
    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />
    <text>这是一个可以自动聚焦的 textarea</text>
    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />
  </view>
</template>
```
</TabItem>
</Tabs>

## TextareaProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `string` |  | 否 | 输入框的内容 |
| defaultValue | `string` |  | 否 | 设置 React 非受控输入框的初始内容 |
| placeholder | `string` |  | 否 | 输入框为空时占位符 |
| placeholderStyle | `string` |  | 否 | 指定 placeholder 的样式<br />需传入对象，格式为 { fontSize: number, fontWeight: string, color: string } |
| placeholderClass | `string` | `"textarea-placeholder"` | 否 | 指定 placeholder 的样式类 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| maxlength | `number` | `140` | 否 | 最大输入长度，设置为 -1 的时候不限制最大长度 |
| autoFocus | `boolean` | `false` | 否 | 自动聚焦，拉起键盘 |
| focus | `boolean` | `false` | 否 | 获取焦点 |
| autoHeight | `boolean` | `false` | 否 | 是否自动增高，设置 autoHeight 时，style.height不生效 |
| fixed | `boolean` | `false` | 否 | 如果 Textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true |
| cursorSpacing | `number` | `0` | 否 | 指定光标与键盘的距离，单位 px 。取 Textarea 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离 |
| cursor | `number` | `-1` | 否 | 指定 focus 时的光标位置 |
| showConfirmBar | `boolean` | `true` | 否 | 是否显示键盘上方带有”完成“按钮那一栏 |
| selectionStart | `number` | `-1` | 否 | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用 |
| selectionEnd | `number` | `-1` | 否 | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用 |
| adjustPosition | `boolean` | `true` | 否 | 键盘弹起时，是否自动上推页面 |
| holdKeyboard | `boolean` | `false` | 否 | focus 时，点击页面的时候不收起键盘 |
| disableDefaultPadding | `boolean` | `false` | 否 | 是否去掉 iOS 下的默认内边距 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| confirmType | "send" or "search" or "next" or "go" or "done" or "return" |  | 否 | 设置键盘右下角按钮的文字 |
| confirmHold | `boolean` |  | 否 | 点击键盘右下角按钮时是否保持键盘不收起 |
| name | `string` |  | 否 | 组件名字，用于表单提交获取数据。 |
| showCount | `boolean` | `true` | 否 | 是否渲染字数统计功能（是否删除默认计数器/是否显示字数统计）。 |
| controlled | `boolean` | `false` | 否 | 是否为受控组件。为 true 时，value 内容会完全受 setData 控制。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| adjustKeyboardTo | `boolean` | `false` | 否 | 键盘对齐位置 |
| onFocus | `CommonEventFunction<onFocusEventDetail>` |  | 否 | 输入框聚焦时触发 |
| onBlur | `CommonEventFunction<onBlurEventDetail>` |  | 否 | 输入框失去焦点时触发 |
| onLineChange | `CommonEventFunction<onLineChangeEventDetail>` |  | 否 | 输入框行数变化时调用 |
| onInput | `CommonEventFunction<onInputEventDetail>` |  | 否 | 当键盘输入时，触发 input 事件<br /><br />**onInput 处理函数的返回值并不会反映到 textarea 上** |
| onConfirm | `CommonEventFunction<onConfirmEventDetail>` |  | 否 | 点击完成时， 触发 confirm 事件 |
| onKeyboardHeightChange | `CommonEventFunction<onKeyboardHeightChangeEventDetail>` |  | 否 | 键盘高度发生变化的时候触发此事件 |
| onSelectionChange | `CommonEventFunction` |  | 否 | 选区改变事件, {selectionStart, selectionEnd} |
| onKeyboardCompositionStart | `CommonEventFunction` |  | 否 | 输入法开始新的输入时触发 （仅当输入法支持时触发） |
| onKeyboardCompositionUpdate | `CommonEventFunction` |  | 否 | 输入法输入字符时触发（仅当输入法支持时触发） |
| onKeyboardCompositionEnd | `CommonEventFunction` |  | 否 | 输入法输入结束时触发（仅当输入法支持时触发） |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| TextareaProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| TextareaProps.defaultValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| TextareaProps.placeholder | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| TextareaProps.placeholderStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |
| TextareaProps.placeholderClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| TextareaProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| TextareaProps.maxlength | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| TextareaProps.autoFocus | ✔️ | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| TextareaProps.focus | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| TextareaProps.autoHeight | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| TextareaProps.fixed | ✔️ | ✔️ |  |  | ✔️ | ✔️ |  |  |  |  |  |
| TextareaProps.cursorSpacing | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| TextareaProps.cursor | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| TextareaProps.showConfirmBar | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| TextareaProps.selectionStart | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |
| TextareaProps.selectionEnd | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |
| TextareaProps.adjustPosition | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| TextareaProps.holdKeyboard | ✔️ |  |  | ✔️ |  |  |  |  |  |  |  |
| TextareaProps.disableDefaultPadding | ✔️ |  |  | ✔️ |  |  |  |  |  |  |  |
| TextareaProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| TextareaProps.confirmType | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |  |  | ✔️ |
| TextareaProps.confirmHold | ✔️ | ✔️ |  | ✔️ |  |  |  |  |  |  |  |
| TextareaProps.name |  |  | ✔️ |  |  |  |  |  |  |  |  |
| TextareaProps.showCount |  |  | ✔️ |  |  |  |  |  |  |  |  |
| TextareaProps.controlled |  |  | ✔️ |  |  |  |  |  |  |  |  |
| TextareaProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| TextareaProps.adjustKeyboardTo | ✔️ |  |  |  |  |  |  |  |  |  |  |
| TextareaProps.onFocus | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| TextareaProps.onBlur | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| TextareaProps.onLineChange | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |
| TextareaProps.onInput | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| TextareaProps.onConfirm | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| TextareaProps.onKeyboardHeightChange | ✔️ |  |  | ✔️ |  |  |  |  | ✔️ |  |  |
| TextareaProps.onSelectionChange | ✔️ |  |  |  |  |  |  |  |  |  |  |
| TextareaProps.onKeyboardCompositionStart | ✔️ |  |  |  |  |  |  |  |  |  |  |
| TextareaProps.onKeyboardCompositionUpdate | ✔️ |  |  |  |  |  |  |  |  |  |  |
| TextareaProps.onKeyboardCompositionEnd | ✔️ |  |  |  |  |  |  |  |  |  |  |

### onFocusEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |
| height | `number` | 键盘高度 |

### onBlurEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |
| cursor | `number` | 光标位置 |

### onLineChangeEventDetail

| 参数 | 类型 |
| --- | --- |
| height | `number` |
| heightRpx | `number` |
| lineCount | `number` |

### onInputEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |
| cursor | `number` | 光标位置 |
| keyCode | `number` | 键值 |

### onConfirmEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |

### onKeyboardHeightChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| height | `number` | 键盘高度 |
| duration | `number` | 持续时间 |

---

