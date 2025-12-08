## docs/apis/alipay/getOpenUserInfo.md

---
title: Taro.getOpenUserInfo(Option)
sidebar_label: getOpenUserInfo
---

此接口可获取支付宝会员的基础信息（头像图片地址、昵称、性别、国家码、省份、所在市区），接入方法请参考 获取会员基础信息介绍。如需获取支付宝会员标识（user_id），请调用 my.getAuthCode 和 alipay.system.oauth.token 接口。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://docs.alipay.com/mini/api/ch8chh)

## 类型

```tsx
(Option: Option) => Promise<SuccessCallbackResult>
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| response | `string` | 返回一个 Object 类型的对象 res。使用 JSON.parse(res.response).response 解析 |

---

## docs/apis/alipay/tradePay.md

---
title: Taro.tradePay(Option)
sidebar_label: tradePay
---

此接口是用于发起支付的 API，此 API 暂仅支持企业支付宝小程序使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/api/openapi-pay)

## 类型

```tsx
(Option: Option) => Promise<SuccessCallbackResult>
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tradeNO | `string` | 否 | 接入小程序支付时传入此参数。此参数为支付宝交易号，注意参数有大小写区分（调用 小程序支付 时必填） |
| orderStr | `string` | 否 | 完整的支付参数拼接成的字符串，从服务端获取（调用 支付宝预授权 时必填） |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### ResultCode

| 参数 | 说明 |
| --- | --- |
| 4 | 无权限调用（N22104） |
| 9000 | 订单处理成功 |
| 8000 | 正在处理中。支付结果未知（有可能已经支付成功） |
| 4000 | 订单处理失败 |
| 6001 | 用户中途取消 |
| 6002 | 网络连接出错 |
| 6004 | 处理结果未知（有可能已经成功） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| response | `{ resultCode: ResultCode; }` | success 回调函数会携带一个 Object 类型的对象，其属性如下： |

---

## docs/apis/payment/faceVerifyForPay.md

---
title: Taro.faceVerifyForPay(option)
sidebar_label: faceVerifyForPay
---

支付各个安全场景验证人脸

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.faceVerifyForPay.html)

## 类型

```tsx
(option: any) => Promise<any>
```

## 示例代码

```tsx
Taro.faceVerifyForPay(params).then(...)
```

---

## docs/apis/payment/requestOrderPayment.md

---
title: Taro.requestOrderPayment(option)
sidebar_label: requestOrderPayment
---

创建自定义版交易组件订单，并发起支付。 仅接入了[自定义版交易组件](https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/Introduction2)的小程序需要使用，普通小程序可直接使用 `Taro.requestPayment`。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestOrderPayment.html)

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
| timeStamp | `string` | 是 | 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 |
| nonceStr | `string` | 是 | 随机字符串，长度为32个字符以下 |
| package | `string` | 是 | 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** |
| orderInfo | `any` | 否 | 订单信息，仅在需要校验的场景下需要传递，具体见[接口说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/requestOrderPayment) |
| extUserUin | `string` | 否 | 外部 APP 用户 ID |
| signType | `keyof SignType` | 否 | 签名算法 |
| paySign | `string` | 是 | 签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3) |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SignType

| 参数 | 说明 |
| --- | --- |
| MD5 | 仅在微信支付 v2 版本接口适用 |
| HMAC-SHA256 | 仅在微信支付 v2 版本接口适用 |
| RSA | 仅在微信支付 v3 版本接口适用 |

## 示例代码

除 orderInfo 以外，其余字段与 [Taro.requestPayment](./requestPayment) 一致

```tsx
Taro.requestOrderPayment({
  orderInfo: {},
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success (res) { },
  fail (res) { }
})
```

---

## docs/apis/payment/requestPayment.md

---
title: Taro.requestPayment(option)
sidebar_label: requestPayment
---

发起微信支付。了解更多信息，请查看[微信支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPayment.html)

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
| timeStamp | `string` | 是 | 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 |
| nonceStr | `string` | 是 | 随机字符串，长度为32个字符以下 |
| package | `string` | 是 | 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** |
| signType | `keyof SignType` | 否 | 签名算法 |
| paySign | `string` | 是 | 签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3) |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SignType

| 参数 | 说明 |
| --- | --- |
| MD5 | 仅在微信支付 v2 版本接口适用 |
| HMAC-SHA256 | 仅在微信支付 v2 版本接口适用 |
| RSA | 仅在微信支付 v3 版本接口适用 |

## 示例代码

```tsx
Taro.requestPayment({
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success: function (res) { },
  fail: function (res) { }
})
```

---

