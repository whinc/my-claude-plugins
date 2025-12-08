## docs/apis/base/debug/LogManager.md

---
title: LogManager
sidebar_label: LogManager
---

日志管理器实例，可以通过 Taro.getLogManager 获取。

使用说明
最多保存5M的日志内容，超过5M后，旧的日志内容会被删除。
对于小程序，用户可以通过使用 button 组件的 open-type="feedback" 来上传打印的日志。
对于小游戏，用户可以通过使用 Taro.createFeedbackButton 来创建上传打印的日志的按钮。
开发者可以通过小程序管理后台左侧菜单“反馈管理”页面查看相关打印日志。

基础库默认会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.html)

## 方法

### debug

写 debug 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.debug.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

### info

写 info 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.info.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

### log

写 log 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.log.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

### warn

写 warn 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.warn.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过100Kb |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LogManager | ✔️ |  |  |  | ✔️ |
| LogManager.debug | ✔️ |  |  |  | ✔️ |
| LogManager.info | ✔️ |  |  |  | ✔️ |
| LogManager.log | ✔️ |  |  |  | ✔️ |
| LogManager.warn | ✔️ |  |  |  | ✔️ |

---

## docs/apis/base/debug/RealtimeLogManager.md

---
title: RealtimeLogManager
sidebar_label: RealtimeLogManager
---

实时日志管理器实例，可以通过 Taro.getRealtimeLogManager 获取。

使用说明
为帮助小程序开发者快捷地排查小程序漏洞、定位问题，我们推出了实时日志功能。从基础库2.7.1开始，开发者可通过提供的接口打印日志，日志汇聚并实时上报到小程序后台。
开发者可从小程序管理后台“开发->运维中心->实时日志”进入日志查询页面，查看开发者打印的日志信息。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.html)

## 方法

### addFilterMsg

添加过滤关键字

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.addFilterMsg.html)

```tsx
(msg: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| msg | `string` | 是 setFilterMsg 的添加接口。用于设置多个过滤关键字。 |

### error

写 error 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.error.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb |

### in

设置实时日志page参数所在的页面

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.in.html)

```tsx
(pageInstance: any) => void
```

| 参数 | 说明 |
| --- | --- |
| pageInstance | page 实例 |

### info

写 info 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.info.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb |

### setFilterMsg

设置过滤关键字

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.setFilterMsg.html)

```tsx
(msg: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| msg | `string` | 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。 |

### tag

获取给定标签的日志管理器实例，目前只支持在插件使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.tag.html)

```tsx
(tagName: string) => RealtimeTagLogManager
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tagName | `string` | 标签名 |

### warn

写 warn 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.warn.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。每次调用的参数的总大小不超过5Kb |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| RealtimeLogManager | ✔️ |  |  |  |
| RealtimeLogManager.addFilterMsg | ✔️ |  |  |  |
| RealtimeLogManager.error | ✔️ |  |  |  |
| RealtimeLogManager.in | ✔️ |  |  |  |
| RealtimeLogManager.info | ✔️ |  |  |  |
| RealtimeLogManager.setFilterMsg | ✔️ |  |  |  |
| RealtimeLogManager.tag | ✔️ |  |  |  |
| RealtimeLogManager.warn | ✔️ |  |  |  |

---

## docs/apis/base/debug/RealtimeTagLogManager.md

---
title: RealtimeTagLogManager
sidebar_label: RealtimeTagLogManager
---

给定标签的实时日志管理器实例，可以通过 给定标签的实时日志管理器实例，可以通过 [RealtimeLogManager.tag](./RealtimeLogManager#tag) 接口获取，目前只支持在插件使用。 接口获取，目前只支持在插件使用。

**使用说明**
RealtimeTagLogManager 功能和 [RealtimeLogManager](./RealtimeLogManager) 相似，但是为了让输出的实时日志更易于分析，其具有更严格的格式要求。
RealtimeTagLogManager 使用时需要传入标签，调用该实例所输出的日志均会被汇集到对应标签下，同时该实例的日志只支持 key-value 格式进行输出。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.html)

## 方法

### addFilterMsg

添加过滤关键字

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.addFilterMsg.html)

```tsx
(msg: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| msg | `string` | 是 setFilterMsg 的添加接口。用于设置多个过滤关键字。 |

### error

写 error 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.error.html)

```tsx
(key: string, value: string | number | Object | any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 日志的 key |
| value | string or number or Object or any[] | 日志的 key |

### info

写 info 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.info.html)

```tsx
(key: string, value: string | number | Object | any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 日志的 key |
| value | string or number or Object or any[] | 日志的 key |

### setFilterMsg

设置过滤关键字

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.setFilterMsg.html)

```tsx
(msg: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| msg | `string` | 过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。 |

### warn

写 warn 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.warn.html)

```tsx
(key: string, value: string | number | Object | any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 日志的 key |
| value | string or number or Object or any[] | 日志的 key |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| RealtimeTagLogManager | ✔️ |  |  |  |
| RealtimeTagLogManager.addFilterMsg | ✔️ |  |  |  |
| RealtimeTagLogManager.error | ✔️ |  |  |  |
| RealtimeTagLogManager.info | ✔️ |  |  |  |
| RealtimeTagLogManager.setFilterMsg | ✔️ |  |  |  |
| RealtimeTagLogManager.warn | ✔️ |  |  |  |

---

## docs/apis/base/debug/setEnableDebug.md

---
title: Taro.setEnableDebug(res)
sidebar_label: setEnableDebug
---

设置是否打开调试开关，此开关对正式版也能生效。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html)

## 类型

```tsx
(res: Option) => Promise<Promised>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| res | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| enableDebug | `boolean` | 是 | 是否打开调试 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Promised

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
// 打开调试
Taro.setEnableDebug({
    enableDebug: true
})
// 关闭调试
Taro.setEnableDebug({
    enableDebug: false
})
```

---

## docs/apis/base/env/env.md

---
title: env
sidebar_label: env
---

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/env/envObj.html)

## 类型

```tsx
{ [key: string]: string; FRAMEWORK: "react" | "preact" | "solid" | "vue3"; TARO_ENV: "weapp" | "h5" | "rn" | "swan" | "alipay" | "tt" | "qq" | "jd" | "quickapp"; USER_DATA_PATH?: string; }
```

---

## docs/apis/base/performance/EntryList.md

---
title: EntryList
sidebar_label: EntryList
---

EntryList 对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.html)

## 方法

### getEntries

该方法返回当前列表中的所有性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntries.html)

```tsx
() => PerformanceEntry[]
```

### getEntriesByName

获取当前列表中所有名称为 [name] 且类型为 [entryType] 的性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntriesByName.html)

```tsx
(name: string, entryType: string) => PerformanceEntry[]
```

| 参数 | 类型 |
| --- | --- |
| name | `string` |
| entryType | `string` |

### getEntriesByType

获取当前列表中所有类型为 [entryType] 的性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntriesByType.html)

```tsx
(entryType: string) => PerformanceEntry[]
```

| 参数 | 类型 |
| --- | --- |
| entryType | `string` |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| EntryList | ✔️ |  |  |  |  |
| EntryList.getEntries | ✔️ |  |  |  |  |
| EntryList.getEntriesByName | ✔️ |  |  |  |  |
| EntryList.getEntriesByType | ✔️ |  |  |  |  |

---

## docs/apis/base/performance/getPerformance.md

---
title: Taro.getPerformance()
sidebar_label: getPerformance
---

小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html)指南。

**注意**
- 目前，当开启代码 [按需注入](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html) `时，evaluateScript` 将仅包含公有部分代码，页面和组件的代码注入的时间会包含在 `firstRender` 中（因为页面和组件的代码注入过程成为了首次渲染过程的一部分）。因此开启按需注入后，脚本耗时降低，渲染时间提高属于正常现象，优化效果可以关注整体启动耗时（`appLaunch`）来评估。
- `firstPaint` 和 `firstContentfulPaint` 指标在开启 `vconsole` 的情况下，由于绘制 `vconsoel` 的面板，会导致数据提前。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html)

## 类型

```tsx
() => Performance
```

## 示例代码

```tsx
const performance = Taro.getPerformance()
const observer = performance.createObserver((entryList) => {
  console.log(entryList.getEntries())
})
observer.observe({ entryTypes: ['render', 'script', 'navigation'] })
```

---

## docs/apis/base/performance/Performance.md

---
title: Performance
sidebar_label: Performance
---

Performance 对象，用于获取性能数据及创建性能监听器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.html)

## 方法

### createObserver

创建全局性能事件监听器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.createObserver.html)

```tsx
(callback: TaroGeneral.TFunc) => PerformanceObserver
```

| 参数 | 类型 |
| --- | --- |
| callback | `TaroGeneral.TFunc` |

### getEntries

该方法返回当前缓冲区中的所有性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntries.html)

```tsx
() => PerformanceEntry[]
```

### getEntriesByName

获取当前缓冲区中所有名称为 [name] 且类型为 [entryType] 的性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByName.html)

```tsx
(name: string, entryType: string) => PerformanceEntry[]
```

| 参数 | 类型 |
| --- | --- |
| name | `string` |
| entryType | `string` |

### getEntriesByType

获取当前缓冲区中所有类型为 [entryType] 的性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByType.html)

```tsx
(entryType: string) => PerformanceEntry[]
```

| 参数 | 类型 |
| --- | --- |
| entryType | `string` |

### setBufferSize

设置缓冲区大小，默认缓冲 30 条性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.setBufferSize.html)

```tsx
(size: number) => void
```

| 参数 | 类型 |
| --- | --- |
| size | `number` |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Performance | ✔️ | ✔️ |  |  |  |  |
| Performance.createObserver | ✔️ |  |  |  |  |  |
| Performance.getEntries | ✔️ | ✔️ |  |  |  |  |
| Performance.getEntriesByName | ✔️ | ✔️ |  |  |  |  |
| Performance.getEntriesByType | ✔️ | ✔️ |  |  |  |  |
| Performance.setBufferSize | ✔️ |  |  |  |  |  |

---

## docs/apis/base/performance/PerformanceEntry.md

---
title: PerformanceEntry
sidebar_label: PerformanceEntry
---

单条性能数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceEntry.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| entryType | `keyof EntryType` | 指标类型 |
| name | `keyof EntryName` | 指标名称 |
| startTime | `number` | 开始时间，不同指标的具体含义会有差异 |
| duration | `number` | 耗时 ms。仅对于表示阶段的指标有效。 |
| path | `string` | 页面路径。仅 render 和 navigation 类型指标有效。 |
| navigationStart | `number` | 路由真正响应开始时间。仅 navigation 类型指标有效。 |
| navigationType | `string` | 路由详细类型，与小程序路由方法对应。仅 navigation 类型指标有效。 |
| moduleName | `string` | 分包名，主包表示为 APP。仅 evaluateScript 指标有效。 |
| fileList | `string[]` | 注入文件列表。仅 evaluateScript 指标有效。 |
| viewLayerReadyTime | `number` | 渲染层代码注入完成时间。仅 firstRender 指标有效。 |
| initDataSendTime | `number` | 首次渲染参数从逻辑层发出的时间。仅 firstRender 指标有效。 |
| initDataRecvTime | `number` | 首次渲染参数在渲染层收到的时间。仅 firstRender 指标有效。 |
| viewLayerRenderStartTime | `number` | 渲染层执行渲染开始时间。仅 firstRender 指标有效。 |
| viewLayerRenderEndTime | `number` | 渲染层执行渲染结束时间。仅 firstRender 指标有效。 |

## 参数

### EntryType

entryType 的合法值

| 参数 | 说明 |
| --- | --- |
| navigation | 路由 |
| render | 渲染 |
| script | 脚本 |

### EntryName

name 的合法值

| 参数 | 说明 |
| --- | --- |
| appLaunch | 小程序启动耗时。起点为用户点击小程序图标，或小程序被拉起的时间；终点为首页 onReady。(entryType: navigation) |
| route | 路由处理耗时。(entryType: navigation) |
| firstRender | 页面首次渲染耗时。起点为逻辑层收到路由事件，包括逻辑层页面与组件初始化、VD 同步、渲染层执行渲染的时间；终点为首页 onReady。(entryType: render) |
| firstPaint | [页面首次绘制](https://developer.mozilla.org/en-US/docs/Glossary/First_paint)。第一个像素渲染到屏幕上所用的时间。(entryType: render) |
| firstContentfulPaint | [页面首次内容绘制](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint)。第一块内容渲染到屏幕上所用的时间。(entryType: render) |
| evaluateScript | 逻辑层 JS 代码注入耗时。(entryType: script) |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| PerformanceEntry | ✔️ |  |  |  |  |

---

## docs/apis/base/performance/PerformanceObserver.md

---
title: PerformanceObserver
sidebar_label: PerformanceObserver
---

PerformanceObserver 对象，用于监听性能相关事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| supportedEntryTypes | `PerformanceEntry[]` | 获取当前支持的所有性能指标类型 |

### disconnect

停止监听

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.disconnect.html)

```tsx
() => void
```

### observe

开始监听

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.observe.html)

```tsx
(option: Option) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 参数

### observe

#### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `keyof EntryType` | 指标类型。不能和 entryTypes 同时使用 |
| entryTypes | `(keyof EntryType)[]` | 指标类型列表。不能和 type 同时使用。 |

#### EntryType

| 参数 | 说明 |
| --- | --- |
| navigation | 路由 |
| render | 渲染 |
| script | 脚本 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| PerformanceObserver | ✔️ |  |  |  |  |
| PerformanceObserver.disconnect | ✔️ |  |  |  |  |
| PerformanceObserver.observe | ✔️ |  |  |  |  |

---

## docs/apis/base/performance/preloadAssets.md

---
title: Taro.preloadAssets(option)
sidebar_label: preloadAssets
---

为视图层预加载媒体资源文件, 目前支持：font，image

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### AssetsObjectType

| 参数 | 说明 |
| --- | --- |
| font | 字体 |
| image | 图片 |

### AssetsObject

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `keyof AssetsObjectType` | 类型 |
| src | `string` | 资源地址 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `AssetsObject[]` | 是 |  |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/base/performance/preloadSkylineView.md

---
title: Taro.preloadSkylineView(option)
sidebar_label: preloadSkylineView
---

预加载下个页面所需要的 Skyline 运行环境

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadSkylineView.html)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/base/performance/preloadWebview.md

---
title: Taro.preloadWebview(option)
sidebar_label: preloadWebview
---

预加载下个页面的 WebView

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadWebview.html)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/base/performance/reportPerformance.md

---
title: Taro.reportPerformance(id, value, dimensions)
sidebar_label: reportPerformance
---

小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html)指南。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.reportPerformance.html)

## 类型

```tsx
(id: number, value: number, dimensions?: string | string[]) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 指标 id |
| value | `number` | 需要上报的数值 |
| dimensions | string or string[] | 自定义维度 |

## 示例代码

```tsx
Taro.reportPerformance(1101, 680)
Taro.reportPerformance(1101, 680, 'custom')
```

---

## docs/apis/base/system/getAppAuthorizeSetting.md

---
title: Taro.getAppAuthorizeSetting()
sidebar_label: getAppAuthorizeSetting
---

获取微信APP授权设置

- 'authorized' 表示已经获得授权，无需再次请求授权；
- 'denied' 表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户[打开系统设置](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html)，在设置页中打开权限）
- 'non determined' 表示尚未请求授权，会在微信下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 暂未支持设置权限

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppAuthorizeSetting.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| albumAuthorized | `keyof Authorized` | 允许微信使用相册的开关（仅 iOS 有效） |
| bluetoothAuthorized | `keyof Authorized` | 允许微信使用蓝牙的开关（仅 iOS 有效） |
| cameraAuthorized | `keyof Authorized` | 允许微信使用摄像头的开关 |
| locationAuthorized | `keyof Authorized` | 允许微信使用定位的开关 |
| locationReducedAccuracy | `boolean` | 定位准确度。true 表示模糊定位，false 表示精确定位（仅 iOS 有效） |
| microphoneAuthorized | `keyof Authorized` | 允许微信使用麦克风的开关 |
| notificationAuthorized | `keyof Authorized` | 允许微信通知的开关 |
| notificationAlertAuthorized | `keyof Authorized` | 允许微信通知带有提醒的开关（仅 iOS 有效） |
| notificationBadgeAuthorized | `keyof Authorized` | 允许微信通知带有标记的开关（仅 iOS 有效） |
| notificationSoundAuthorized | `keyof Authorized` | 允许微信通知带有声音的开关（仅 iOS 有效） |
| phoneCalendarAuthorized | `keyof Authorized` | 允许微信读写日历的开关 |

### Authorized

授权合法值

| 参数 | 说明 |
| --- | --- |
| authorized | 表示已经获得授权，无需再次请求授权 |
| denied | 表示请求授权被拒绝，无法再次请求授权 （此情况需要引导用户打开[打开系统设置](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html)，在设置页中打开权限） |
| not determined | 表示尚未请求授权，会在微信下一次调用系统相应权限时请求 （仅 iOS 会出现。此种情况下引导用户[打开系统设置](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html)，不展示开关） |

## 示例代码

```tsx
const appAuthorizeSetting = Taro.getAppAuthorizeSetting()

console.log(appAuthorizeSetting.albumAuthorized)
console.log(appAuthorizeSetting.bluetoothAuthorized)
console.log(appAuthorizeSetting.cameraAuthorized)
console.log(appAuthorizeSetting.locationAuthorized)
console.log(appAuthorizeSetting.locationReducedAccuracy)
console.log(appAuthorizeSetting.microphoneAuthorized)
console.log(appAuthorizeSetting.notificationAlertAuthorized)
console.log(appAuthorizeSetting.notificationAuthorized)
console.log(appAuthorizeSetting.notificationBadgeAuthorized)
console.log(appAuthorizeSetting.notificationSoundAuthorized)
console.log(appAuthorizeSetting.phoneCalendarAuthorized)
```

---

## docs/apis/base/system/getAppBaseInfo.md

---
title: Taro.getAppBaseInfo()
sidebar_label: getAppBaseInfo
---

获取微信APP基础信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 不支持 SDKVersion、host、version

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| SDKVersion | `string` | 否 | 客户端基础库版本 |
| enableDebug | `boolean` | 否 | 是否已打开调试。可通过右上角菜单或 [Taro.setEnableDebug](/docs/apis/base/debug/setEnableDebug) 打开调试。 |
| host | `Host` | 否 | 当前小程序运行的宿主环境 |
| language | `string` | 是 | 微信设置的语言 |
| version | `string` | 否 | 微信版本号 |
| theme | `keyof Theme` | 否 | 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏） |

### Theme

系统主题合法值

| 参数 | 说明 |
| --- | --- |
| dark | 深色主题 |
| light | 浅色主题 |

### Host

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appId | `string` | 宿主 app 对应的 appId |

## 示例代码

```tsx
const appBaseInfo = Taro.getAppBaseInfo()

console.log(appBaseInfo.SDKVersion)
console.log(appBaseInfo.enableDebug)
console.log(appBaseInfo.host)
console.log(appBaseInfo.language)
console.log(appBaseInfo.version)
console.log(appBaseInfo.theme)
```

---

## docs/apis/base/system/getDeviceInfo.md

---
title: Taro.getDeviceInfo()
sidebar_label: getDeviceInfo
---

获取设备基础信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> H5: 不支持 abi、benchmarkLevel

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| abi | `string` | 否 | 应用二进制接口类型（仅 Android 支持） |
| deviceAbi | `string` | 是 | 设备二进制接口类型（仅 Android 支持） |
| benchmarkLevel | `number` | 是 | 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50） |
| brand | `string` | 是 | 设备品牌 |
| model | `string` | 是 | 设备型号 |
| system | `string` | 是 | 操作系统及版本 |
| platform | `string` | 是 | 客户端平台 |
| CPUType | `string` | 是 | 设备 CPU 型号（仅 Android 支持） |

## 示例代码

```tsx
const deviceInfo = Taro.getDeviceInfo()

console.log(deviceInfo.abi)
console.log(deviceInfo.benchmarkLevel)
console.log(deviceInfo.brand)
console.log(deviceInfo.model)
console.log(deviceInfo.platform)
console.log(deviceInfo.system)
```

---

## docs/apis/base/system/getRendererUserAgent.md

---
title: Taro.getRendererUserAgent(option)
sidebar_label: getRendererUserAgent
---

获取 Webview 小程序的 UserAgent
基础库 2.26.3 开始支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getRendererUserAgent.html)

## 类型

```tsx
(option?: Option) => Promise<Result>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| success | `(res: Result) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Result

| 参数 | 类型 |
| --- | --- |
| userAgent | `string` |

---

## docs/apis/base/system/getSkylineInfo.md

---
title: Taro.getSkylineInfo(option)
sidebar_label: getSkylineInfo
---

获取当前运行环境对于 Skyline 渲染引擎 的支持情况
基础库 2.26.2 开始支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfo.html)

## 类型

```tsx
(option?: Option) => Promise<Result>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| success | `(res: Result) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| isSupported | `boolean` | 是 | 当前运行环境是否支持 Skyline 渲染引擎 |
| version | `string` | 是 | 当前运行环境 Skyline 渲染引擎 的版本号，形如 0.9.7 |
| reason | `string` | 否 | 当前运行环境不支持 Skyline 渲染引擎 的原因，仅在 isSupported 为 false 时出现 |

---

## docs/apis/base/system/getSkylineInfoSync.md

---
title: Taro.getSkylineInfoSync()
sidebar_label: getSkylineInfoSync
---

获取当前运行环境对于 Skyline 渲染引擎 的支持情况
基础库 2.26.2 开始支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfoSync.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| isSupported | `boolean` | 是 | 当前运行环境是否支持 Skyline 渲染引擎 |
| version | `string` | 是 | 当前运行环境 Skyline 渲染引擎 的版本号，形如 0.9.7 |
| reason | `string` | 否 | 当前运行环境不支持 Skyline 渲染引擎 的原因，仅在 isSupported 为 false 时出现 |

---

## docs/apis/base/system/getSystemInfo.md

---
title: Taro.getSystemInfo(res)
sidebar_label: getSystemInfo
---

获取系统信息，支持 `Promise` 化使用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> 微信小程序: 小程序可以在微信和企业微信中调用此接口，但是在企业微信中调用此接口时，会额外返回一个 environment 字段（微信中不返回），如此字段值为 wxwork，则表示当前小程序运行在企业微信环境中。
>
> H5: 不支持 version、statusBarHeight、fontSizeSetting、SDKVersion

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html)

## 类型

```tsx
(res?: Option) => Promise<Result>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| res | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| success | `(res: Result) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| brand | `string` | 是 | 设备品牌 |
| model | `string` | 是 | 设备型号 |
| pixelRatio | `number` | 是 | 设备像素比 |
| screenWidth | `number` | 是 | 屏幕宽度，单位px |
| screenHeight | `number` | 是 | 屏幕高度，单位px |
| windowWidth | `number` | 是 | 可使用窗口宽度，单位px |
| windowHeight | `number` | 是 | 可使用窗口高度，单位px |
| statusBarHeight | `number` | 否 | 状态栏的高度，单位px |
| language | `string` | 是 | 微信设置的语言 |
| version | `string` | 否 | 微信版本号 |
| system | `string` | 是 | 操作系统及版本 |
| platform | `string` | 是 | 客户端平台 |
| fontSizeSetting | `number` | 否 | 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 |
| SDKVersion | `string` | 否 | 客户端基础库版本 |
| benchmarkLevel | `number` | 是 | 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50） |
| albumAuthorized | `boolean` | 否 | 允许微信使用相册的开关（仅 iOS 有效） |
| cameraAuthorized | `boolean` | 否 | 允许微信使用摄像头的开关 |
| locationAuthorized | `boolean` | 否 | 允许微信使用定位的开关 |
| microphoneAuthorized | `boolean` | 否 | 允许微信使用麦克风的开关 |
| notificationAuthorized | `boolean` | 否 | 允许微信通知的开关 |
| notificationAlertAuthorized | `boolean` | 否 | 允许微信通知带有提醒的开关（仅 iOS 有效） |
| notificationBadgeAuthorized | `boolean` | 否 | 允许微信通知带有标记的开关（仅 iOS 有效） |
| notificationSoundAuthorized | `boolean` | 否 | 允许微信通知带有声音的开关（仅 iOS 有效） |
| phoneCalendarAuthorized | `boolean` | 否 | 允许微信使用日历的开关 |
| bluetoothEnabled | `boolean` | 否 | 蓝牙的系统开关 |
| locationEnabled | `boolean` | 否 | 地理位置的系统开关 |
| wifiEnabled | `boolean` | 否 | Wi-Fi 的系统开关 |
| safeArea | `TaroGeneral.SafeAreaResult` | 否 | 在竖屏正方向下的安全区域 |
| locationReducedAccuracy | `boolean` | 否 | `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 |
| theme | `keyof Theme` | 否 | 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏） |
| host | `Host` | 否 | 当前小程序运行的宿主环境 |
| enableDebug | `boolean` | 否 | 是否已打开调试。可通过右上角菜单或 [Taro.setEnableDebug](/docs/apis/base/debug/setEnableDebug) 打开调试。 |
| deviceOrientation | `keyof DeviceOrientation` | 否 | 设备方向 |
| environment | `string` | 否 | 小程序当前运行环境 |

### Theme

系统主题合法值

| 参数 | 说明 |
| --- | --- |
| dark | 深色主题 |
| light | 浅色主题 |

### Host

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| appId | `string` | 宿主 app 对应的 appId |

### DeviceOrientation

设备方向合法值

| 参数 | 说明 |
| --- | --- |
| portrait | 竖屏 |
| landscape | 横屏 |

## 示例代码

### 示例 1

```tsx
Taro.getSystemInfo({
  success: res => console.log(res)
})
.then(res => console.log(res))
```

### 示例 2

```tsx
Taro.getSystemInfo({
  success: function (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```

---

