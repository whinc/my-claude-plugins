## docs/apis/navigate/exitMiniProgram.md

---
title: Taro.exitMiniProgram(option)
sidebar_label: exitMiniProgram
---

退出当前小程序。必须有点击行为才能调用成功。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.exitMiniProgram.html)

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
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
Taro.exitMiniProgram()
···

---

## docs/apis/navigate/navigateBackMiniProgram.md

---
title: Taro.navigateBackMiniProgram(option)
sidebar_label: navigateBackMiniProgram
---

返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功

注意：**微信客户端 iOS 6.5.9，Android 6.5.10 及以上版本支持**

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html)

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
| extraData | `TaroGeneral.IAnyObject` | 否 | 需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 [详情](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)。 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
Taro.navigateBackMiniProgram({
  extraData: {
    foo: 'bar'
  },
  success: function (res) {
    // 返回成功
  }
})
```

---

## docs/apis/navigate/navigateToMiniProgram.md

---
title: Taro.navigateToMiniProgram(option)
sidebar_label: navigateToMiniProgram
---

打开另一个小程序

**使用限制**
##### 需要用户触发跳转
从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。
##### 需要用户确认跳转
从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。
##### 每个小程序可跳转的其他小程序数量限制为不超过 10 个
从 2.4.0 版本以及指定日期（具体待定）开始，开发者提交新版小程序代码时，如使用了跳转其他小程序功能，则需要在代码配置中声明将要跳转的小程序名单，限定不超过 10 个，否则将无法通过审核。该名单可在发布新版时更新，不支持动态修改。配置方法详见 [小程序全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。调用此接口时，所跳转的 appId 必须在配置列表中，否则回调 `fail appId "${appId}" is not in navigateToMiniProgramAppIdList`。

**关于调试**
- 在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)
- 开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)

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
| appId | `string` | 否 | 要打开的小程序 appId |
| path | `string` | 否 | 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [Taro.onShow](#) 回调函数、[Taro.getLaunchOptionsSync](/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 |
| extraData | `TaroGeneral.IAnyObject` | 否 | 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [Taro.onShow](#)、[Taro.getLaunchOptionsSync](/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync) 中可以获取到这份数据数据。 |
| envVersion | `keyof EnvVersion` | 否 | 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。 |
| shortLink | `string` | 否 | 小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### EnvVersion

| 参数 | 说明 |
| --- | --- |
| develop | 开发版 |
| trial | 体验版 |
| release | 正式版 |

## 示例代码

```tsx
Taro.navigateToMiniProgram({
  appId: '',
  path: 'page/index/index?id=123',
  extraData: {
    foo: 'bar'
  },
  envVersion: 'develop',
  success: function(res) {
    // 打开成功
  }
})
```

---

## docs/apis/navigate/openBusinessView.md

---
title: Taro.openBusinessView(option)
sidebar_label: openBusinessView
---

商户通过调用订单详情接口打开微信支付分小程序，引导用户查看订单详情（小程序端）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_25.shtml)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### ScoreEnableExtraData

wxpayScoreEnable 业务参数

> [参考文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_9.shtml)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| apply_permissions_token | `string` | 用于跳转到微信侧小程序授权数据,跳转到微信侧小程序传入，有效期为1小时；apply_permissions_token可以从[《商户预授权API》](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_2.shtml)接口的返回参数中获取。<br />示例值：1230000109 |

### ScoreUsedExtraData

wxpayScoreUse 业务参数

> [参考文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_13.shtml)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mch_id | `string` | 商户号：微信支付分配的商户号。<br />示例值：1230000109 |
| package | `string` | 可在【创建订单】接口的返回字段package中获取。<br />示例值：XXXXXXXX |
| timestamp | `string` | 时间戳：生成签名时间戳，单位秒。<br />示例值：1530097563 |
| nonce_str | `string` | 随机字符串：生成签名随机串。由数字、大小写字母组成，长度不超过32位。<br />示例值：zyx53Nkey8o4bHpxTQvd8m7e92nG5mG2 |
| sign_type | `string` | 签名方式：签名类型，仅支持HMAC-SHA256。<br />示例值：HMAC-SHA256 |
| sign | `string` | 签名：使用字段mch_id、service_id、out_order_no、timestamp、nonce_str、sign_type按照签名生成算法计算得出的签名值。<br />示例值：029B52F67573D7E3BE74904BF9AEA |

### ScoreDetailExtraData

wxpayScoreDetail 业务参数

> [参考文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_25.shtml)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mch_id | `string` | 商户号：微信支付分配的商户号。<br />示例值：1230000109 |
| service_id | `string` | 服务ID<br />示例值：88888888000011 |
| out_order_no | `string` | 商户服务订单号：商户系统内部服务订单号（不是交易单号）。<br />示例值：234323JKHDFE1243252 |
| timestamp | `string` | 时间戳：生成签名时间戳，单位秒。<br />示例值：1530097563 |
| nonce_str | `string` | 随机字符串：生成签名随机串。由数字、大小写字母组成，长度不超过32位。<br />示例值：zyx53Nkey8o4bHpxTQvd8m7e92nG5mG2 |
| sign_type | `string` | 签名方式：签名类型，仅支持HMAC-SHA256。<br />示例值：HMAC-SHA256 |
| sign | `string` | 签名：使用字段mch_id、service_id、out_order_no、timestamp、nonce_str、sign_type按照签名生成算法计算得出的签名值。<br />示例值：029B52F67573D7E3BE74904BF9AEA |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| businessType | `string` | 是 | 跳转类型：固定配置：wxpayScoreDetail<br />示例值：wxpayScoreDetail<br />memberof: Option |
| extraData | ScoreEnableExtraData or ScoreUsedExtraData or ScoreDetailExtraData | 是 | 业务参数：需要传递给支付分的业务数据 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
if (Taro.openBusinessView) {
  Taro.openBusinessView({
    businessType: 'wxpayScoreDetail',
    extraData: {
      mch_id: '1230000109',
      service_id: '88888888000011',
      out_order_no: '1234323JKHDFE1243252',
      timestamp: '1530097563',
      nonce_str: 'zyx53Nkey8o4bHpxTQvd8m7e92nG5mG2',
      sign_type: 'HMAC-SHA256',
      sign: '029B52F67573D7E3BE74904BF9AEA'
    },
    success() {
      //dosomething
    },
    fail() {
      //dosomething
    },
    complete() {
      //dosomething
    }
  });
} else {
  //引导用户升级微信版本
}
```

---

## docs/apis/navigate/openEmbeddedMiniProgram.md

---
title: Taro.openEmbeddedMiniProgram(option)
sidebar_label: openEmbeddedMiniProgram
---

打开半屏小程序。接入指引请参考 [半屏小程序能力](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/><img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html)

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
| appId | `string` | 否 | 要打开的小程序 appId |
| path | `string` | 否 | 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [Taro.onShow](#) 回调函数、[Taro.getLaunchOptionsSync](/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 |
| extraData | `TaroGeneral.IAnyObject` | 否 | 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [Taro.onShow](#)、[Taro.getLaunchOptionsSync](/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync) 中可以获取到这份数据数据。 |
| envVersion | `keyof EnvVersion` | 否 | 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。 |
| shortLink | `string` | 否 | 小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。 |
| verify | `keyof Verify` | 否 | 校验方式 。默认为binding |
| noRelaunchIfPathUnchanged | `boolean` | 否 | 不 reLaunch 目标小程序，直接打开目标跳转的小程序退后台时的页面，需满足以下条件：1. 目标跳转的小程序生命周期未被销毁；2. 且目标当次启动的path、query、apiCategory与上次启动相同。默认值为 false 。 |
| allowFullScreen | `boolean` | 否 | 打开的小程序是否支持全屏 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Verify

| 参数 | 说明 |
| --- | --- |
| binding | 校验小程序管理后台的绑定关系 |
| unionProduct | 校验目标打开链接是否为小程序联盟商品。 |

### EnvVersion

| 参数 | 说明 |
| --- | --- |
| develop | 开发版 |
| trial | 体验版 |
| release | 正式版 |

---

## docs/apis/route/EventChannel.md

---
title: EventChannel
sidebar_label: EventChannel
---

页面间事件通信通道

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.html)

## 方法

### emit

触发一个事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.emit.html)

```tsx
(eventName: string, ...args: any) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| args | `any` | 事件参数 |

### on

持续监听一个事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.on.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

### once

监听一个事件一次，触发后失效

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.once.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

### off

取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.off.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| EventChannel | ✔️ |  |  |  |  |
| EventChannel.emit | ✔️ |  |  |  |  |
| EventChannel.on | ✔️ |  |  |  |  |
| EventChannel.once | ✔️ |  |  |  |  |
| EventChannel.off | ✔️ |  |  |  |  |

---

## docs/apis/route/navigateBack.md

---
title: Taro.navigateBack(option)
sidebar_label: navigateBack
---

关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 若入参 delta 大于现有页面数时，返回应用打开的第一个页面（如果想要返回首页请使用 reLaunch 方法）。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| delta | `number` | 否 | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码
// 此处是A页面
Taro.navigateTo({
  url: 'B?id=1'
})
// 此处是B页面
Taro.navigateTo({
  url: 'C?id=1'
})
// 在C页面内 navigateBack，将返回A页面
Taro.navigateBack({
  delta: 2
})
```

---

## docs/apis/route/navigateTo.md

---
title: Taro.navigateTo(option)
sidebar_label: navigateTo
---

保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 未针对 tabbar 页面做限制处理

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)

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
| url | `string` | 是 | 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' |
| events | `TaroGeneral.IAnyObject` | 否 | 页面间通信接口，用于监听被打开页面发送到当前页面的数据。 |
| routeType | `string` | 否 | 2.29.2 自定义路由类型 |
| routeConfig | `TaroGeneral.IAnyObject` | 否 | 3.4.0 自定义路由配置 |
| routeOptions | `TaroGeneral.IAnyObject` | 否 | 3.4.0 自定义路由参数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: any) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.navigateTo({
  url: 'test?id=1',
  events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    }
    ...
  },
  success: function (res) {
    // 通过eventChannel向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
  }
})
```

---

## docs/apis/route/redirectTo.md

---
title: Taro.redirectTo(option)
sidebar_label: redirectTo
---

关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 未针对 tabbar 页面做限制处理

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html)

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
| url | `string` | 是 | 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.redirectTo({
  url: 'test?id=1'
})
```

---

## docs/apis/route/reLaunch.md

---
title: Taro.reLaunch(option)
sidebar_label: reLaunch
---

关闭所有页面，打开到应用内的某个页面

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html)

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
| url | `string` | 是 | 需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.reLaunch({
  url: 'test?id=1'
})
```

---

## docs/apis/route/router.md

---
title: router
sidebar_label: router
---

## 类型

```tsx
router
```

## 参数

### CustomRouteBuilder

```tsx
(routeContext: CustomRouteContext,routeOptions: Record<string, any>) => CustomRouteConfig
```

| 参数 | 类型 |
| --- | --- |
| routeContext | `CustomRouteContext` |
| routeOptions | `Record<string, any>` |

### SharedValue

| 参数 | 类型 |
| --- | --- |
| value | `T` |

### CustomRouteContext

| 参数 | 类型 |
| --- | --- |
| primaryAnimation | `SharedValue<number>` |
| primaryAnimationStatus | `SharedValue<number>` |
| secondaryAnimation | `SharedValue<number>` |
| secondaryAnimationStatus | `SharedValue<number>` |
| userGestureInProgress | `SharedValue<number>` |
| startUserGesture | `() => void` |
| stopUserGesture | `() => void` |
| didPop | `() => void` |

### CustomRouteConfig

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| opaque | `boolean` | 否 |
| maintainState | `boolean` | 否 |
| transitionDuration | `number` | 否 |
| reverseTransitionDuration | `number` | 否 |
| barrierColor | `string` | 否 |
| barrierDismissible | `boolean` | 否 |
| barrierLabel | `string` | 否 |
| canTransitionTo | `boolean` | 否 |
| canTransitionFrom | `boolean` | 否 |
| handlePrimaryAnimation | `RouteAnimationHandler` | 否 |
| handleSecondaryAnimation | `RouteAnimationHandler` | 否 |
| handlePreviousPageAnimation | `RouteAnimationHandler` | 否 |
| allowEnterRouteSnapshotting | `boolean` | 否 |
| allowExitRouteSnapshotting | `boolean` | 否 |
| fullscreenDrag | `boolean` | 否 |
| popGestureDirection | "horizontal" or "vertical" or "multi" | 否 |

### RouteAnimationHandler

```tsx
() => { [key: string]: any; }
```

### router

自定义路由

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/wx.router.html)

#### addRouteBuilder

添加自定义路由配置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.addRouteBuilder.html)

```tsx
(routeType: string, routeBuilder: CustomRouteBuilder) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| routeType | `string` | 路由类型 |
| routeBuilder | `CustomRouteBuilder` | 路由动画定义函数 |

#### getRouteContext

获取页面对应的自定义路由上下文对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.getRouteContext.html)

```tsx
(instance: TaroGeneral.IAnyObject) => CustomRouteContext
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| instance | `TaroGeneral.IAnyObject` | 页面/自定义组件实例 |

#### removeRouteBuilder

移除自定义路由配置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.removeRouteBuilder.html)

```tsx
(routeType: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| routeType | `string` | 路由类型 |

---

## docs/apis/route/switchTab.md

---
title: Taro.switchTab(option)
sidebar_label: switchTab
---

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)

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
| url | `string` | 是 | 需要跳转的 tabBar 页面的路径（需在 app.json 的 [tabBar](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabbar) 字段定义的页面），路径后不能带参数。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```json
{
  "tabBar": {
    "list": [{
      "pagePath": "index",
      "text": "首页"
    },{
      "pagePath": "other",
      "text": "其他"
    }]
  }
}
```

```tsx
Taro.switchTab({
  url: '/index'
})
```

---

