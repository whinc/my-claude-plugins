## docs/apis/base/canIUseWebp.md

---
title: Taro.canIUseWebp()
sidebar_label: canIUseWebp
---

判断能否使用 WebP 格式

> 在小程序平台中仅在 android 和 devtools 设备时可用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
() => boolean
```

---

## docs/apis/base/env.md

---
title: env
sidebar_label: env
---

环境变量

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.env.html)

## 类型

```tsx
TaroGeneral.IAnyObject
```

---

## docs/apis/base/preload.md

---
title: Taro.preload(options)
sidebar_label: preload
---

跳转预加载 API

## 类型

```tsx
{ (options: Record<string, any>): any; (key: string, value: any): any; }
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| options | `Record<string, any>` | 预加载的数据<br />param: options 预加载的数据 |

## 示例代码

### 示例 1

```tsx
Taro.preload({ key: 'value' })
```

### 示例 2

```tsx
Taro.preload('key', 'value')
```

---

## docs/apis/data-analysis/getCommonConfig.md

---
title: Taro.getCommonConfig(option)
sidebar_label: getCommonConfig
---

给定实验参数数组，获取对应的实验参数值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getCommonConfig.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| keys | `string[]` | 否 | 需要获取的数据指标的对象数组，每个string的格式约定：配置类型_分表key |
| mode | 0 or 1 | 是 | 0：通用配置模式 1：实验模式, 参数与返回结果的使用等效于接口wx.getExptInfoSync |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errcode | `number` | 错误码 |
| errmsg | `string` | 错误信息 |
| conf_type | `number` | 配置类型, 1-表类型 2-kv类型 |
| conf | `string` | 根据conf_type来确定conf内容, conf_type为1时conf是一个json数组, 类似"[{xxx},{xxx}]", 每一项对应表类型每一行配置内容, 其中conf_type为2时conf是一个json对象，类似"{xxxx}" |
| expire_sec | `number` | 过期时间,单位秒. 0表示当次有效 |

## 示例代码

```tsx
Taro.getCommonConfig({
  keys:["key1", "key2"],
  mode: 0,
  success: (res) => {
    console.log("success")
    console.log(res)
  },
  fail: (res) => {
    console.log("fail")
    console.log(res)
  }
})
```

---

## docs/apis/data-analysis/getExptInfoSync.md

---
title: Taro.getExptInfoSync(keys)
sidebar_label: getExptInfoSync
---

给定实验参数数组，获取对应的实验参数值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getExptInfoSync.html)

## 类型

```tsx
(keys?: string[]) => TaroGeneral.IAnyObject
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| keys | `string[]` | 实验参数数组，不填则获取所有实验参数 |

## 示例代码

```tsx
Taro.getExptInfoSync(['color'])
```

---

## docs/apis/data-analysis/reportAnalytics.md

---
title: Taro.reportAnalytics(eventName, data)
sidebar_label: reportAnalytics
---

自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html)

## 类型

```tsx
(eventName: string, data: TaroGeneral.IAnyObject) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名 |
| data | `TaroGeneral.IAnyObject` | 上报的自定义数据，key 为配置中的字段名，value 为上报的数据。 |

## 示例代码

```tsx
Taro.reportAnalytics('purchase', {
  price: 120,
  color: 'red'
})
```

---

## docs/apis/data-analysis/reportEvent.md

---
title: Taro.reportEvent(eventId, data)
sidebar_label: reportEvent
---

事件上报

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportEvent.html)

## 类型

```tsx
(eventId: string, data: TaroGeneral.IAnyObject) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventId | `string` | 事件名 |
| data | `TaroGeneral.IAnyObject` | 上报的自定义数据，key 为配置中的字段名，value 为上报的数据。 |

## 示例代码

```tsx
Taro.reportEvent('purchase', {
  price: 120,
  color: 'red'
})
```

---

## docs/apis/data-analysis/reportMonitor.md

---
title: Taro.reportMonitor(name, value)
sidebar_label: reportMonitor
---

自定义业务数据监控上报接口。

**使用说明**
使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportMonitor.html)

## 类型

```tsx
(name: string, value: number) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 监控ID，在「小程序管理后台」新建数据指标后获得 |
| value | `number` | 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量 |

## 示例代码

```tsx
Taro.reportMonitor('1', 1)
```

---

## docs/apis/ext/getExtConfig.md

---
title: Taro.getExtConfig(option)
sidebar_label: getExtConfig
---

获取[第三方平台](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html)自定义的数据字段。

**Tips**
1. 本接口暂时无法通过 Taro.canIUse 判断是否兼容，开发者需要自行判断 Taro.getExtConfig 是否存在来兼容

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| extConfig | `TaroGeneral.IAnyObject` | 第三方平台自定义的数据 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
if(Taro.getExtConfig) {
  Taro.getExtConfig({
    success: function (res) {
      console.log(res.extConfig)
    }
  })
}
```

---

## docs/apis/ext/getExtConfigSync.md

---
title: Taro.getExtConfigSync()
sidebar_label: getExtConfigSync
---

Taro.getExtConfig 的同步版本。

**Tips**
1. 本接口暂时无法通过 Taro.canIUse 判断是否兼容，开发者需要自行判断 Taro.getExtConfigSync 是否存在来兼容

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html)

## 类型

```tsx
() => TaroGeneral.IAnyObject
```

## 参数

### ExtInfo

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| extConfig | `TaroGeneral.IAnyObject` | 第三方平台自定义的数据 |

## 示例代码

```tsx
let extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {}

console.log(extConfig)
```

---

## docs/apis/framework/App.md

---
title: App
sidebar_label: App
---

注册小程序。接受一个 `Object` 参数，其指定小程序的生命周期回调等。

## 方法

---

## docs/apis/framework/getApp.md

---
title: Taro.getApp(opts)
sidebar_label: getApp
---

获取到小程序全局唯一的 App 实例。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/api/getApp.html)

## 类型

```tsx
<T = TaroGeneral.IAnyObject>(opts?: Option) => Instance<T>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| opts | `T` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| allowDefault | `boolean` | 否 | 在 `App` 未定义时返回默认实现。当App被调用时，默认实现中定义的属性会被覆盖合并到App中。一般用于独立分包 |

### Instance

```tsx
Option | T
```

---

## docs/apis/framework/getCurrentPages.md

---
title: Taro.getCurrentPages()
sidebar_label: getCurrentPages
---

获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。
__注意：__
- __不要尝试修改页面栈，会导致路由以及页面状态错误。__
- 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html)

## 类型

```tsx
() => Page[]
```

## 示例代码

```tsx
Taro.getCurrentPages().length
```

---

## docs/apis/framework/Page.md

---
title: Page
sidebar_label: Page
---

注册小程序中的一个页面。接受一个 `Object` 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。

## 方法

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| route | `string` | 否 | 当前页面的路径<br />note: 推荐使用 Taro.getCurrentInstance().router?.path 方法 |
| __route__ | `string` | 否 |  |

---

## docs/apis/open-api/account/getAccountInfoSync.md

---
title: Taro.getAccountInfoSync()
sidebar_label: getAccountInfoSync
---

获取当前帐号信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html)

## 类型

```tsx
() => AccountInfo
```

## 参数

### AccountInfo

帐号信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| miniProgram | `MiniProgram` | 小程序帐号信息 |
| plugin | `Plugin` | 插件帐号信息（仅在插件中调用时包含这一项） |

### MiniProgram

小程序帐号信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appId | `string` | 小程序 appId |
| envVersion | "develop" or "trial" or "release" | 小程序版本<br />since: 2.10.0 |
| version | `string` | 线上小程序版本号<br />since: 2.10.2 |

### Plugin

插件帐号信息（仅在插件中调用时包含这一项）

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appId | `string` | 插件 appId |
| version | `string` | 插件版本号 |

## 示例代码

```tsx
const accountInfo = Taro.getAccountInfoSync();

console.log(accountInfo.miniProgram.appId) // 小程序 appId
console.log(accountInfo.plugin.appId) // 插件 appId
console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
```

---

## docs/apis/open-api/address/chooseAddress.md

---
title: Taro.chooseAddress(option)
sidebar_label: chooseAddress
---

获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: SuccessCallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| userName | `string` | 收货人姓名 |
| postalCode | `string` | 邮编<br />API 支持度: weapp, qq |
| provinceName | `string` | 国标收货地址第一级地址 |
| cityName | `string` | 国标收货地址第二级地址 |
| countyName | `string` | 国标收货地址第三级地址 |
| streetName | `string` | 国标收货地址第四级地址<br />API 支持度: weapp, qq |
| detailInfo | `string` | 详细收货地址信息 |
| detailInfoNew | `string` | 新选择器详细收货地址信息<br />API 支持度: weapp, qq |
| nationalCode | `string` | 收货地址国家码<br />API 支持度: weapp, qq |
| telNumber | `string` | 收货人手机号码 |

## 示例代码

```tsx
Taro.chooseAddress({
  success: function (res) {
    console.log(res.userName)
    console.log(res.postalCode)
    console.log(res.provinceName)
    console.log(res.cityName)
    console.log(res.countyName)
    console.log(res.detailInfo)
    console.log(res.nationalCode)
    console.log(res.telNumber)
  }
})
```

---

## docs/apis/open-api/authorize/authorize.md

---
title: Taro.authorize(option)
sidebar_label: authorize
---

提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| scope | `string` | 是 | 需要获取权限的 scope，详见 [scope 列表](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8) |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
// 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
Taro.getSetting({
  success: function (res) {
    if (!res.authSetting['scope.record']) {
      Taro.authorize({
        scope: 'scope.record',
        success: function () {
          // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
          Taro.startRecord()
        }
      })
    }
  }
})
```

---

## docs/apis/open-api/authorize/authorizeForMiniProgram.md

---
title: Taro.authorizeForMiniProgram(option)
sidebar_label: authorizeForMiniProgram
---

**仅小程序插件中能调用该接口**，用法同 [Taro.authorize](../authorize)。目前仅支持三种 scope

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorizeForMiniProgram.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| scope | `string` | 是 | 需要获取权限的 scope，详见 [scope 列表](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8) |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Scope

scope 合法值

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8)

## 示例代码

```tsx
// 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
Taro.authorizeForMiniProgram({
  scope: 'scope.record',
  success () {
    // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
    Taro.startRecord()
  }
})
```

---

## docs/apis/open-api/card/addCard.md

---
title: Taro.addCard(option)
sidebar_label: addCard
---

批量添加卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。

**cardExt 说明**
cardExt 是卡券的扩展参数，其值是一个 JSON 字符串。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cardList | `RequestInfo[]` | 是 | 需要添加的卡券列表 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### RequestInfo

需要添加的卡券列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cardExt | `string` | 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为**字符串**传入 |
| cardId | `string` | 卡券 ID |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cardList | `AddCardResponseInfo[]` | 卡券添加结果列表 |
| errMsg | `string` | 调用结果 |

### AddCardResponseInfo

卡券添加结果列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cardExt | `string` | 卡券的扩展参数，结构请参考下文 |
| cardId | `string` | 用户领取到卡券的 ID |
| code | `string` | 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) |
| isSuccess | `boolean` | 是否成功 |

## 示例代码

```tsx
Taro.addCard({
  cardList: [
    {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }, {
      cardId: '',
      cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
    }
  ],
  success: function (res) {
    console.log(res.cardList) // 卡券添加结果
  }
})
```

---

## docs/apis/open-api/card/card.md

---
title: 卡券
sidebar_label: 卡券
---

## Taro.addCard(OBJECT)

使用方式同 [`wx.addCard`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.addCard.html)，支持 `Promise` 化使用。

**示例代码：**

```jsx
import Taro from '@tarojs/taro'

Taro.addCard(params).then(...)
```

## Taro.openCard(OBJECT)

使用方式同 [`wx.openCard`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.openCard.html)，支持 `Promise` 化使用。

**示例代码：**

```jsx
import Taro from '@tarojs/taro'

Taro.openCard(params).then(...)
```

> API 支持度

| API | 微信小程序 | H5 | React Native |
| :-: | :-: | :-: | :-: |
| Taro.addCard | ✔️ |  |  |
| Taro.openCard | ✔️ |  |  |

---

## docs/apis/open-api/card/openCard.md

---
title: Taro.openCard(option)
sidebar_label: openCard
---

查看微信卡包中的卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cardList | `RequestInfo[]` | 是 | 需要打开的卡券列表 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### RequestInfo

需要打开的卡券列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cardId | `string` | 卡券 ID |
| code | `string` | 由 Taro.addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V) |

## 示例代码

```tsx
Taro.openCard({
  cardList: [{
    cardId: '',
    code: ''
  }, {
    cardId: '',
    code: ''
  }],
  success: function (res) { }
})
```

---

## docs/apis/open-api/channels/getChannelsLiveInfo.md

---
title: Taro.getChannelsLiveInfo(option)
sidebar_label: getChannelsLiveInfo
---

获取视频号直播信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveInfo.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| feedId | `string` | 是 | 直播 feedId |
| nonceId | `string` | 是 | 直播 nonceId |
| description | `string` | 是 | 直播主题 |
| status | `number` | 是 | 直播状态，2直播中，3直播结束 |
| headUrl | `string` | 是 | 视频号头像 |
| nickname | `string` | 是 | 视频号昵称 |
| replayStatus | `number` | 是 | 直播回放状态 |
| otherInfos | `string[]` | 否 | 除最近的一条直播外，其他的直播列表（注意：每次最多返回按时间戳增序排列的15个直播信息，其中时间最近的那个直播会在接口其他的返回参数中展示，其余的直播会在该字段中展示）。 |

### Status

| 参数 | 说明 |
| --- | --- |
| 2 | 直播中 |
| 3 | 直播结束 |

### ReplayStatus

| 参数 | 说明 |
| --- | --- |
| 0 | 未生成 |
| 1 | 已生成 |
| 3 | 生成中 |
| 6 | 已过期 |

---

## docs/apis/open-api/channels/getChannelsLiveNoticeInfo.md

---
title: Taro.getChannelsLiveNoticeInfo(option)
sidebar_label: getChannelsLiveNoticeInfo
---

获取视频号直播预告信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveNoticeInfo.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| nonceId | `string` | 是 | 预告 nonceId |
| status | `number` | 是 | 预告状态：0可用 1取消 2已用 |
| startTime | `string` | 是 | 开始时间 |
| headUrl | `string` | 是 | 直播封面 |
| nickname | `string` | 是 | 视频号昵称 |
| reservable | `boolean` | 是 | 是否可预约 |
| otherInfos | `string[]` | 否 | 除最近的一条预告信息外，其他的预告信息列表（注意：每次最多返回按时间戳增序排列的15个预告信息，其中时间最近的那个预告信息会在接口其他的返回参数中展示，其余的预告信息会在该字段中展示）。 |

### Status

| 参数 | 说明 |
| --- | --- |
| 0 | 可用 |
| 1 | 取消 |
| 2 | 已用 |

---

## docs/apis/open-api/channels/getChannelsShareKey.md

---
title: Taro.getChannelsShareKey(option)
sidebar_label: getChannelsShareKey
---

获取视频号直播卡片/视频卡片的分享来源，
仅当卡片携带了分享信息、同时用户已授权该小程序获取视频号分享信息且启动场景值为 1177、1184、1195、1208 时可用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsShareKey.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sharerOpenId | `string` | 分享者 openid |
| promoter | `Promoter` | 推广员 |

### Promoter

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| finderNickname | `string` | 推广员昵称 |
| promoterId | `string` | 推广员id |
| promoterOpenId | `string` | 推广员openid |

---

## docs/apis/open-api/channels/openChannelsActivity.md

---
title: Taro.openChannelsActivity(option)
sidebar_label: openChannelsActivity
---

打开视频号视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsActivity.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取 |
| feedId | `string` | 是 | 视频 feedId |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/open-api/channels/openChannelsEvent.md

---
title: Taro.openChannelsEvent(option)
sidebar_label: openChannelsEvent
---

打开视频号活动页

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsEvent.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取 |
| eventId | `string` | 是 | 活动 id |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/open-api/channels/openChannelsLive.md

---
title: Taro.openChannelsLive(option)
sidebar_label: openChannelsLive
---

打开视频号直播

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsLive.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取 |
| feedId | `string` | 否 | 直播 feedId，通过 getChannelsLiveInfo 接口获取 |
| nonceId | `string` | 否 | 直播 nonceId，通过 getChannelsLiveInfo 接口获取 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/open-api/channels/openChannelsUserProfile.md

---
title: Taro.openChannelsUserProfile(option)
sidebar_label: openChannelsUserProfile
---

打开视频号主页

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsUserProfile.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/open-api/channels/reserveChannelsLive.md

---
title: Taro.reserveChannelsLive(option)
sidebar_label: reserveChannelsLive
---

预约视频号直播

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.reserveChannelsLive.html)

## 类型

```tsx
(option?: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| noticeId | `string` | 预告 id，通过 [getChannelsLiveNoticeInfo](./getChannelsLiveNoticeInfo) 接口获取 |

---

## docs/apis/open-api/customer-service/openCustomerServiceChat.md

---
title: Taro.openCustomerServiceChat(option)
sidebar_label: openCustomerServiceChat
---

打开微信客服。了解更多信息，可以参考微信客服介绍：https://work.weixin.qq.com/kf/。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### ExtInfo

| 参数 | 类型 |
| --- | --- |
| url | `string` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| extInfo | `ExtInfo` | 是 | 客服信息 |
| corpId | `string` | 是 | 企业ID |
| showMessageCard | `boolean` | 否 | 是否发送小程序气泡消息，默认值：false |
| sendMessageTitle | `string` | 否 | 气泡消息标题 |
| sendMessagePath | `string` | 否 | 气泡消息小程序路径 |
| sendMessageImg | `string` | 否 | 气泡消息图片 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.openCustomerServiceChat({
  extInfo: {url: ''},
  corpId: '',
  success: function (res) { }
})
```

---

## docs/apis/open-api/device-voip/getDeviceVoIPList.md

---
title: Taro.getDeviceVoIPList(option)
sidebar_label: getDeviceVoIPList
---

查询当前用户授权的音视频通话设备（组）信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/device-voip/wx.getDeviceVoIPList.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 |
| --- | --- |
| list | `DeviceVoIP[]` |

### DeviceVoIP

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sn | `string` | 设备唯一序列号。（仅单台设备时） |
| model_id | `string` | 设备型号 id。通过微信公众平台注册设备获得。（仅单台设备时） |
| group_id | `string` | 设备组的唯一标识 id（仅设备组时） |
| status | `number` | 设备（组）授权状态。0：未授权；1：已授权 |

## 示例代码

```tsx
Taro.getDeviceVoIPList({
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})
```

---

## docs/apis/open-api/device-voip/requestDeviceVoIP.md

---
title: Taro.requestDeviceVoIP(option)
sidebar_label: requestDeviceVoIP
---

请求用户授权与设备（组）间进行音视频通话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/device-voip/wx.requestDeviceVoIP.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| sn | `string` | 是 | 设备唯一序列号。由厂商分配，长度不能超过128字节。字符只接受数字，大小写字母，下划线（_）和连字符（-） |
| snTicket | `string` | 是 | 设备票据，5分钟内有效 |
| modelId | `string` | 是 | 设备型号 id。通过微信公众平台注册设备获得。 |
| deviceName | `string` | 是 | 设备名称，将显示在授权弹窗内（长度不超过13）。授权框中「设备名字」= 「deviceName」 + 「modelId 对应设备型号」 |
| isGroup | `boolean` | 否 | 是否为授权设备组，默认 false |
| groupId | `string` | 是 | 设备组的唯一标识 id 。isGroup 为 true 时只需要传该参数，isGroup 为 false 时不需要传该参数，但需要传 sn、snTicket、modelId、deviceName 。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
// 授权单台设备
Taro.requestDeviceVoIP({
  sn: 'xxxx',
  snTicket: 'xxxxx',
  modelId: 'xxx',
  deviceName: 'xxx',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})

// 批量授权（授权设备组）
Taro.requestDeviceVoIP({
  isGroup: true,
  groupId: '设备组 ID',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})
```

---

## docs/apis/open-api/facial/checkIsSupportFacialRecognition.md

---
title: Taro.checkIsSupportFacialRecognition(option)
sidebar_label: checkIsSupportFacialRecognition
---

检查是否支持面部识别

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(option?: Option) => Promise<CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| checkAliveType | `number` | 否 | 交互方式 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `number` | 错误码 |

---

## docs/apis/open-api/facial/startFacialRecognitionVerify.md

---
title: Taro.startFacialRecognitionVerify(option)
sidebar_label: startFacialRecognitionVerify
---

开始人脸识别认证

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(option?: Option) => Promise<CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| name | `string` | 是 | 身份证名称 |
| idCardNumber | `string` | 是 | 身份证名称 |
| checkAliveType | `number` | 否 | 交互方式 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `number` | 错误码 |
| verifyResult | `string` | 认证结果 |

---

## docs/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo.md

---
title: Taro.startFacialRecognitionVerifyAndUploadVideo(option)
sidebar_label: startFacialRecognitionVerifyAndUploadVideo
---

开始人脸识别认证并上传认证视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(option?: Option) => Promise<CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| name | `string` | 是 | 身份证名称 |
| idCardNumber | `string` | 是 | 身份证名称 |
| checkAliveType | `number` | 否 | 交互方式 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `number` | 错误码 |
| verifyResult | `string` | 认证结果 |

---

## docs/apis/open-api/favorites/addFileToFavorites.md

---
title: Taro.addFileToFavorites(option)
sidebar_label: addFileToFavorites
---

收藏文件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/favorites/wx.addFileToFavorites.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| filePath | `string` | 是 | 要收藏的文件地址，必须为本地路径或临时路径 |
| fileName | `string` | 否 | 自定义文件名，若留空则使用filePath中的文件名 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

### 示例 1

```tsx
// callback 写法
Taro.downloadFile({
  url: URL, // 下载url
  success (res) {
    // 下载完成后收藏
    Taro.addFileToFavorites({
      filePath: res.tempFilePath,
      success() {},
      fail: console.error,
    })
  },
  fail: console.error,
})
```

### 示例 2

```tsx
// async await 写法
const { tempFilePath } = await Taro.downloadFile({
  url: URL, // 下载url
})
// 下载完成后收藏
await Taro.addFileToFavorites({
  filePath: res.tempFilePath,
})
```

---

## docs/apis/open-api/favorites/addVideoToFavorites.md

---
title: Taro.addVideoToFavorites(option)
sidebar_label: addVideoToFavorites
---

收藏视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/favorites/wx.addVideoToFavorites.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| videoPath | `string` | 是 | 要收藏的视频地址，必须为本地路径或临时路径 |
| thumbPath | `string` | 否 | 缩略图路径，若留空则使用视频首帧 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

### 示例 1

```tsx
// callback 写法
Taro.downloadFile({
  url: URL, // 下载url
  success (res) {
    // 下载完成后收藏
    Taro.addVideoToFavorites({
      videoPath: res.tempFilePath,
      success() {},
      fail: console.error,
    })
  },
  fail: console.error,
})
```

### 示例 2

```tsx
// async await 写法
const { tempFilePath } = await Taro.downloadFile({
  url: URL, // 下载url
})
// 下载完成后收藏
await Taro.addVideoToFavorites({
  videoPath: res.tempFilePath,
})
```

---

