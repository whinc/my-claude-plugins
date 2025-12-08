## docs/components/navig/functional-page-navigator.md

---
title: FunctionalPageNavigator
sidebar_label: FunctionalPageNavigator
---

仅在插件中有效，用于跳转到插件功能页

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html)

## 类型

```tsx
ComponentType<FunctionalPageNavigatorProps>
```

## FunctionalPageNavigatorProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| version | `keyof Version` | `"release"` | 否 | 跳转到的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版）；线上版本必须设置为 release |
| name | `keyof Name` |  | 否 | 要跳转到的功能页 |
| args | `object` |  | 否 | 功能页参数，参数格式与具体功能页相关 |
| onSuccess | `CommonEventFunction` |  | 否 | 功能页返回，且操作成功时触发， detail 格式与具体功能页相关 |
| onFail | `CommonEventFunction` |  | 否 | 功能页返回，且操作失败时触发， detail 格式与具体功能页相关 |
| onCancel | `CommonEventFunction` |  | 否 | 因用户操作从功能页返回时触发 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| FunctionalPageNavigatorProps.version | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.name | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.args | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.onSuccess | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.onFail | ✔️ |  |  |  |
| FunctionalPageNavigatorProps.onCancel | ✔️ |  |  |  |

### Version

version 的合法值

| 参数 | 说明 |
| --- | --- |
| develop | 开发版 |
| trial | 体验版 |
| release | 正式版 |

### Name

name 的合法值

| 参数 | 说明 |
| --- | --- |
| loginAndGetUserInfo | [用户信息功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/user-info.html) |
| requestPayment | [支付功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/request-payment.html) |
| chooseAddress | [收货地址功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/choose-address.html) |

---

## docs/components/navig/navigation-bar.md

---
title: NavigationBar
sidebar_label: NavigationBar
---

页面导航条配置节点，用于指定导航栏的一些属性。只能是 PageMeta 组件内的第一个节点，需要配合它一同使用。
通过这个节点可以获得类似于调用 Taro.setNavigationBarTitle Taro.setNavigationBarColor 等接口调用的效果。

:::info
Taro v3.6.19 开始支持
需要配合 PageMeta 组件使用
:::

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html)

## 类型

```tsx
ComponentType<NavigationBarProps>
```

## NavigationBarProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| title | `string` |  | 否 | 导航条标题 |
| loading | `boolean` |  | 否 | 是否在导航条显示 loading 加载提示 |
| frontColor | `string` |  | 否 | 导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 |
| backgroundColor | `string` |  | 否 | 导航条背景颜色值，有效值为十六进制颜色 |
| colorAnimationDuration | `string` | `0` | 否 | 改变导航栏颜色时的动画时长，默认为 0 （即没有动画效果） |
| colorAnimationTimingFunc | "linear" or "easeIn" or "easeOut" or "easeInOut" | `"linear"` | 否 | 改变导航栏颜色时的动画方式，支持 linear 、 easeIn 、 easeOut 和 easeInOut |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| NavigationBarProps.title | ✔️ |  |  | ✔️ |
| NavigationBarProps.loading | ✔️ |  |  | ✔️ |
| NavigationBarProps.frontColor | ✔️ |  |  | ✔️ |
| NavigationBarProps.backgroundColor | ✔️ |  |  | ✔️ |
| NavigationBarProps.colorAnimationDuration | ✔️ |  |  |  |
| NavigationBarProps.colorAnimationTimingFunc | ✔️ |  |  |  |

---

## docs/components/navig/navigator.md

---
title: Navigator
sidebar_label: Navigator
---

页面链接

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

## 类型

```tsx
ComponentType<NavigatorProps>
```

## NavigatorProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| target | `keyof Target` | `"self"` | 否 | 在哪个目标上发生跳转，默认当前小程序 |
| url | `string` |  | 否 | 当前小程序内的跳转链接 |
| openType | `keyof OpenType` | `"navigate"` | 否 | 跳转方式 |
| delta | `number` |  | 否 | 当 open-type 为 'navigateBack' 时有效，表示回退的层数 |
| appId | `string` |  | 否 | 当 `target="miniProgram"` 时有效，要打开的小程序 appId |
| path | `string` |  | 否 | 当 `target="miniProgram"` 时有效，打开的页面路径，如果为空则打开首页 |
| extraData | `object` |  | 否 | 当 `target="miniProgram"` 时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据. |
| version | `keyof Version` |  | 否 | 当 `target="miniProgram"` 时有效，要打开的小程序版本 |
| hoverClass | `string` | `"navigator-hover"` | 否 | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 |
| hoverStopPropagation | `boolean` | `false` | 否 | 指定是否阻止本节点的祖先节点出现点击态 |
| hoverStartTime | `number` | `50` | 否 | 按住后多久出现点击态，单位毫秒 |
| hoverStayTime | `number` | `600` | 否 | 手指松开后点击态保留时间，单位毫秒 |
| shortLink | `string` |  | 否 | 当target="miniProgram"时有效，当传递该参数后，可以不传 app-id 和 path。链接可以通过【小程序菜单】->【复制链接】获取。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onSuccess | `CommonEventFunction` |  | 否 | 当 `target="miniProgram"` 时有效，跳转小程序成功 |
| onFail | `CommonEventFunction` |  | 否 | 当 `target="miniProgram"` 时有效，跳转小程序失败 |
| onComplete | `CommonEventFunction` |  | 否 | 当 `target="miniProgram"` 时有效，跳转小程序完成 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| NavigatorProps.target | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  | ✔️ |
| NavigatorProps.url | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| NavigatorProps.openType | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| NavigatorProps.delta | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| NavigatorProps.appId | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| NavigatorProps.path | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| NavigatorProps.extraData | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| NavigatorProps.version | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| NavigatorProps.hoverClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| NavigatorProps.hoverStopPropagation | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| NavigatorProps.hoverStartTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| NavigatorProps.hoverStayTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| NavigatorProps.shortLink | ✔️ |  |  |  |  |  |  |  |  |  |  |
| NavigatorProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| NavigatorProps.onSuccess | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |  |
| NavigatorProps.onFail | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |  |
| NavigatorProps.onComplete | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |  |

### Target

target 的合法值

| 参数 | 说明 |
| --- | --- |
| self | 当前小程序 |
| miniProgram | 其它小程序 |

### OpenType

open-type 的合法值

| 参数 | 说明 |
| --- | --- |
| navigate | 对应 Taro.navigateTo 或 Taro.navigateToMiniProgram 的功能 |
| redirect | 对应 Taro.redirectTo 的功能 |
| switchTab | 对应 Taro.switchTab 的功能 |
| reLaunch | 对应 Taro.reLaunch 的功能 |
| navigateBack | 对应 Taro.navigateBack 的功能 |
| exit | 退出小程序，`target="miniProgram"` 时生效 |

### Version

version 的合法值

| 参数 | 说明 |
| --- | --- |
| develop | 开发版 |
| trial | 体验版 |
| release | 正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。 |

---

## docs/components/navig/tab-item.md

---
title: TabItem
sidebar_label: TabItem
---

标签栏子项

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/tab-item/)

## 类型

```tsx
ComponentType<TabItemProps>
```

## TabItemProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| label | `string` | `无` | 否 | tab-item 内显示的文字 |
| name | `string` | `无` | 否 | tab-item 对应的 name 值 |
| badgeType | `string` | `无` | 否 | 徽标类型 badge-type 分为圆点“dot”和文本“text”，不设置 badge-type 则不显示徽标 |
| badgeText | `string` | `无` | 否 | badge-type 为 text 的时候，徽标内的数字，为空时badge-type="text"不生效 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| TabItemProps.label |  | ✔️ |  |  |  |
| TabItemProps.name |  | ✔️ |  |  |  |
| TabItemProps.badgeType |  | ✔️ |  |  |  |
| TabItemProps.badgeText |  | ✔️ |  |  |  |

---

## docs/components/navig/tabs.md

---
title: Tabs
sidebar_label: Tabs
---

标签栏

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/tabs/)

## 类型

```tsx
ComponentType<TabsProps>
```

## TabsProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| tabsBackgroundColor | `string` | `"#fff"` | 否 | tabs 背景色,必须填写十六进制颜色 |
| tabsActiveTextColor | `string` | `"#000"` | 否 | tabs 激活 tab-item 文字颜色 |
| tabsInactiveTextColor | `string` | `"#666"` | 否 | tabs 非激活 tab-item 文字颜色 |
| tabsUnderlineColor | `string` | `"#333"` | 否 | tabs 激活 tab-item 下划线颜色 |
| activeName | `string` | `无` | 否 | 仅用于普通标签栏组件，当前激活 tab-item 的对应的 name 值，须搭配 bindtabchange 一起使用。 |
| urlQueryName | `string` | `无` | 否 | 仅用于可寻址标签栏组件，当前 tab 所改变的 url query 中参数 key，需要通过 tabs 修改页面 url 的时候设置。 |
| maxTabItemAmount | `number` | `5` | 否 | 当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者可根据业务需求调整 |
| onTabChange | `CommonEventFunction` |  | 否 | tab 被点击的回调，可以在 e.detail.name 中取到当前点击的 tab-item 对应的 name 值 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| TabsProps.tabsBackgroundColor |  | ✔️ |  |  |  |
| TabsProps.tabsActiveTextColor |  | ✔️ |  |  |  |
| TabsProps.tabsInactiveTextColor |  | ✔️ |  |  |  |
| TabsProps.tabsUnderlineColor |  | ✔️ |  |  |  |
| TabsProps.activeName |  | ✔️ |  |  |  |
| TabsProps.urlQueryName |  | ✔️ |  |  |  |
| TabsProps.maxTabItemAmount |  | ✔️ |  |  |  |
| TabsProps.onTabChange |  | ✔️ |  |  |  |

---

