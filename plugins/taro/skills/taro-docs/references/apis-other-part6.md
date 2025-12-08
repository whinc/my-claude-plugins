## docs/apis/open-api/group/getGroupEnterInfo.md

---
title: Taro.getGroupEnterInfo(option)
sidebar_label: getGroupEnterInfo
---

获取微信群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。

**Tips**
- 如需要展示群名称，小程序可以使用[开放数据组件](/docs/components/open/open-data)
- 小游戏可以通过 `Taro.getGroupInfo` 接口获取群名称

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/group/wx.getGroupEnterInfo.html)

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
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| errMsg | `string` | 是 | 错误信息 |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| iv | `string` | 是 | 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |

## 示例代码

```tsx
Taro.getGroupEnterInfo({
  success(res) {
    // res
    {
      errMsg: 'getGroupEnterInfo:ok',
      encryptedData: '',
      iv: ''
    }
  },
  fail() { }
})
```

敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：

```json
{
  "opengid": "OPENGID"
}
```

---

## docs/apis/open-api/invoice/chooseInvoice.md

---
title: Taro.chooseInvoice(option)
sidebar_label: chooseInvoice
---

选择用户已有的发票。

**通过 cardId 和 encryptCode 获得报销发票的信息**
请参考[微信电子发票文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918939oae3U)中，「查询报销发票信息」部分。
其中 `access_token` 的获取请参考[auth.getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)文档

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html)

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
| invoiceInfo | `string` | 用户选中的发票信息，格式为一个 JSON 字符串，包含三个字段： card_id：所选发票卡券的 cardId，encrypt_code：所选发票卡券的加密 code，报销方可以通过 cardId 和 encryptCode 获得报销发票的信息，app_id： 发票方的 appId。 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.chooseInvoice({
  success: function (res) {}
})
```

---

## docs/apis/open-api/invoice/chooseInvoiceTitle.md

---
title: Taro.chooseInvoiceTitle(option)
sidebar_label: chooseInvoiceTitle
---

选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了[微信认证](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1496554031_RD4xe)的，才能调用 chooseInvoiceTitle。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html)

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
| bankAccount | `string` | 银行账号 |
| bankName | `string` | 银行名称 |
| companyAddress | `string` | 单位地址 |
| errMsg | `string` | 错误信息 |
| taxNumber | `string` | 抬头税号 |
| telephone | `string` | 手机号码 |
| title | `string` | 抬头名称 |
| type | `keyof InvoiceType` | 抬头类型 |

### InvoiceType

抬头类型

| 参数 | 类型 |
| --- | --- |
| 0 | `"单位"` |
| 1 | `"个人"` |

## 示例代码

```tsx
Taro.chooseInvoiceTitle({
  success: function(res) {}
})
```

---

## docs/apis/open-api/license-plate/chooseLicensePlate.md

---
title: Taro.chooseLicensePlate(option)
sidebar_label: chooseLicensePlate
---

选择车牌号

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/license-plate/wx.chooseLicensePlate.html)

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
| plateNumber | `string` | 用户选择的车牌号 |

---

## docs/apis/open-api/login/checkSession.md

---
title: Taro.checkSession(option)
sidebar_label: checkSession
---

检查登录态是否过期。

通过 Taro.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 Taro.checkSession 接口检测当前用户登录态是否有效。

登录态过期后开发者可以再调用 Taro.login 获取新的用户登录态。调用 Taro.checkSession 成功说明当前 session_key 未过期，调用失败说明 session_key 已过期。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html)

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
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.checkSession({
  success: function () {
    //session_key 未过期，并且在本生命周期一直有效
  },
  fail: function () {
    // session_key 已经失效，需要重新执行登录流程
    Taro.login() //重新登录
  }
})
```

---

## docs/apis/open-api/login/login.md

---
title: Taro.login(option)
sidebar_label: login
---

调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| timeout | `number` |  | 否 | 超时时间，单位ms |
| force | `boolean` | `true` | 否 | 未登录时, 是否强制调起登录框<br />API 支持度: tt |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| code | `string` | 是 | 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)，使用 code 换取 openid 和 session_key 等信息 |
| errMsg | `string` | 是 | 调用结果 |
| anonymousCode | `string` | 否 | 用于标识当前设备, 无论登录与否都会返回, 有效期 5 分钟。<br />API 支持度: tt |
| isLogin | `boolean` | 否 | 判断在当前 APP（头条、抖音等）是否处于登录状态。<br />API 支持度: tt |

## 示例代码

```tsx
Taro.login({
  success: function (res) {
    if (res.code) {
      //发起网络请求
      Taro.request({
        url: 'https://test.com/onLogin',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
```

---

## docs/apis/open-api/login/pluginLogin.md

---
title: Taro.pluginLogin(option)
sidebar_label: pluginLogin
---

**该接口仅在小程序插件中可调用**，调用接口获得插件用户标志凭证（code）。插件可以此凭证换取用于识别用户的标识 openpid。用户不同、宿主小程序不同或插件不同的情况下，该标识均不相同，即当且仅当同一个用户在同一个宿主小程序中使用同一个插件时，openpid 才会相同

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.pluginLogin.html)

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
| code | `string` | 用于换取 openpid 的凭证（有效期五分钟）。插件开发者可以用此 code 在开发者服务器后台调用 [auth.getPluginOpenPId](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/user-info/auth.getPluginOpenPId.html) 换取 openpid。 |

---

## docs/apis/open-api/my-miniprogram/checkIsAddedToMyMiniProgram.md

---
title: Taro.checkIsAddedToMyMiniProgram(option)
sidebar_label: checkIsAddedToMyMiniProgram
---

检查小程序是否被添加至 「我的小程序」

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/my-miniprogram/wx.checkIsAddedToMyMiniProgram.html)

## 类型

```tsx
(option?: Option) => void
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
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| added | `boolean` | 是否被添加至 「我的小程序」 |

---

## docs/apis/open-api/privacy/getPrivacySetting.md

---
title: Taro.getPrivacySetting(option)
sidebar_label: getPrivacySetting
---

查询隐私授权情况。隐私合规开发指南详情可见《小程序隐私协议开发指南》

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.getPrivacySetting.html)

## 类型

```tsx
(option?: Option) => void
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
| needAuthorization | `boolean` | 是否需要用户授权隐私协议（如果开发者没有在[mp后台-设置-服务内容声明-用户隐私保护指引]中声明隐私收集类型则会返回false；如果开发者声明了隐私收集，且用户之前同意过隐私协议则会返回false；如果开发者声明了隐私收集，且用户还没同意过则返回true；如果用户之前同意过、但后来小程序又新增了隐私收集类型也会返回true） |
| privacyContractName | `string` | 隐私授权协议的名称 |

---

## docs/apis/open-api/privacy/onNeedPrivacyAuthorization.md

---
title: Taro.onNeedPrivacyAuthorization(listener)
sidebar_label: onNeedPrivacyAuthorization
---

监听隐私接口需要用户授权事件。当需要用户进行隐私授权时会触发。触发该事件时，开发者需要弹出隐私协议说明，并在用户同意或拒绝授权后调用回调接口 resolve 触发原隐私接口或组件继续执行。隐私合规开发指南详情可见《小程序隐私协议开发指南》

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html)

## 类型

```tsx
(listener: Listener) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| listener | `Listener` |

### ResolveOption

resolve 是 onNeedPrivacyAuthorization 的回调参数，是一个接口函数。
当触发 needPrivacyAuthorization 事件时，触发该事件的隐私接口或组件会处于 pending 状态。
如果调用 resolve({ buttonId: 'disagree-btn'， event:'agree' })，则触发当前 needPrivacyAuthorization 事件的原隐私接口或组件会继续执行。其中 buttonId 为隐私同意授权按钮的id，为确保用户有同意的操作，基础库会检查对应的同意按钮是否被点击过。
如果调用 resolve({ event: 'disagree' })，则触发当前 needPrivacyAuthorization 事件的原隐私接口或组件会失败并返回 API:fail privacy permission is not authorized 的错误信息。
在调用 resolve({ event: 'agree'/'disagree' }) 之前，开发者可以调用 resolve({ event: 'exposureAuthorization' }) 把隐私弹窗曝光告知平台。

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| event | "exposureAuthorization" or "agree" or "disagree" | 是 | 用户操作类型 |
| buttonId | `string` | 否 | 同意授权按钮的id （仅event=agree时必填） |

### EventInfo

触发本次 onNeedPrivacyAuthorization 事件的关联信息

| 参数 | 类型 |
| --- | --- |
| referrer | `string` |

### Listener

隐私授权监听函数

```tsx
(resolve: (option: ResolveOption) => void,eventInfo: EventInfo) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| resolve | `(option: ResolveOption) => void` | 事件回调函数 |
| eventInfo | `EventInfo` | 关联事件信息 |

---

## docs/apis/open-api/privacy/openPrivacyContract.md

---
title: Taro.openPrivacyContract(option)
sidebar_label: openPrivacyContract
---

跳转至隐私协议页面。隐私合规开发指南详情可见《小程序隐私协议开发指南》

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.openPrivacyContract.html)

## 类型

```tsx
(option?: Option) => void
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
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.openPrivacyContract({
  success: () => {}, // 打开成功
  fail: () => {}, // 打开失败
  complete: () => {}
})
```

---

## docs/apis/open-api/privacy/requirePrivacyAuthorize.md

---
title: Taro.requirePrivacyAuthorize(option)
sidebar_label: requirePrivacyAuthorize
---

模拟隐私接口调用，并触发隐私弹窗逻辑。隐私合规开发指南详情可见《小程序隐私协议开发指南》

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.requirePrivacyAuthorize.html)

## 类型

```tsx
(option?: Option) => void
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
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/open-api/redpackage/showRedPackage.md

---
title: Taro.showRedPackage(option)
sidebar_label: showRedPackage
---

拉取h5领取红包封面页。获取参考红包封面地址参考 [微信红包封面开发平台](https://cover.weixin.qq.com/cgi-bin/mmcover-bin/readtemplate?t=page/index#/doc?page=introduce)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/redpackage/wx.showRedPackage.html)

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
| url | `string` | 是 | 封面地址 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/open-api/settings/AuthSetting.md

---
title: AuthSetting
sidebar_label: AuthSetting
---

用户授权设置信息，详情参考[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)

## 方法

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| scope.userInfo | `boolean` | 否 | 是否授权用户信息，对应接口 [Taro.getUserInfo](/docs/apis/open-api/user-info/getUserInfo) |
| scope.userLocation | `boolean` | 否 | 是否授权地理位置，对应接口 [Taro.getLocation](/docs/apis/location/getLocation), [Taro.chooseLocation](/docs/apis/location/chooseLocation) |
| scope.address | `boolean` | 否 | 是否授权通讯地址，对应接口 [Taro.chooseAddress](/docs/apis/open-api/address/chooseAddress) |
| scope.invoiceTitle | `boolean` | 否 | 是否授权发票抬头，对应接口 [Taro.chooseInvoiceTitle](/docs/apis/open-api/invoice/chooseInvoiceTitle) |
| scope.invoice | `boolean` | 否 | 是否授权获取发票，对应接口 [Taro.chooseInvoice](/docs/apis/open-api/invoice/chooseInvoice) |
| scope.werun | `boolean` | 否 | 是否授权微信运动步数，对应接口 [Taro.getWeRunData](/docs/apis/open-api/werun/getWeRunData) |
| scope.record | `boolean` | 否 | 是否授权录音功能，对应接口 [Taro.startRecord](/docs/apis/media/recorder/startRecord) |
| scope.writePhotosAlbum | `boolean` | 否 | 是否授权保存到相册 [Taro.saveImageToPhotosAlbum](/docs/apis/media/image/saveImageToPhotosAlbum), [Taro.saveVideoToPhotosAlbum](/docs/apis/media/video/saveVideoToPhotosAlbum) |
| scope.camera | `boolean` | 否 | 是否授权摄像头，对应 [camera](/docs/components/media/camera) 组件 |
| scope.bluetoothBackground | `boolean` | 否 | 是否授权小程序在后台运行蓝牙，对应接口 [Taro.openBluetoothAdapterBackground](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/(wx.openBluetoothAdapterBackground).html) |

---

## docs/apis/open-api/settings/getSetting.md

---
title: Taro.getSetting(option)
sidebar_label: getSetting
---

获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)

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
| withSubscriptions | `boolean` | 否 | 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| authSetting | `AuthSetting` | 用户授权结果 |
| subscriptionsSetting | `SubscriptionsSetting` | 用户订阅消息设置，接口参数 withSubscriptions 值为 true 时才会返回。 |
| miniprogramAuthSetting | `AuthSetting` | 在插件中调用时，当前宿主小程序的用户授权结果 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.getSetting({
  success: function (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```

---

## docs/apis/open-api/settings/openSetting.md

---
title: Taro.openSetting(option)
sidebar_label: openSetting
---

调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。

注意：[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| withSubscriptions | `boolean` | `false` | 否 | 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| authSetting | `AuthSetting` | 用户授权结果 |
| subscriptionsSetting | `SubscriptionsSetting` | 用户订阅消息设置，接口参数 withSubscriptions 值为 true 时才会返回。 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.openSetting({
  success: function (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```

---

## docs/apis/open-api/settings/SubscriptionsSetting.md

---
title: SubscriptionsSetting
sidebar_label: SubscriptionsSetting
---

订阅消息设置

注意事项
- itemSettings 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/SubscriptionsSetting.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mainSwitch | `boolean` | 订阅消息总开关，true 为开启，false 为关闭 |
| itemSettings | `{ [TEMPLATE_ID: string]: string; }` | 每一项订阅消息的订阅状态。itemSettings对象的键为一次性订阅消息的模板id或系统订阅消息的类型<br />- 一次性订阅消息使用方法详见 [Taro.requestSubscribeMessage](/docs/apis/open-api/subscribe-message/requestSubscribeMessage)<br />- 永久订阅消息（仅小游戏可用）使用方法详见 [Taro.requestSubscribeSystemMessage](https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html) |

## 参数

### TemplateReflex

模版消息订阅类型

| 参数 | 说明 |
| --- | --- |
| accept | 表示用户同意订阅该条id对应的模板消息 |
| reject | 表示用户拒绝订阅该条id对应的模板消息 |
| ban | 表示已被后台封禁 |

## 示例代码

```tsx
Taro.getSetting({
  withSubscriptions: true,
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
    console.log(res.subscriptionsSetting)
    // res.subscriptionsSetting = {
    //   mainSwitch: true, // 订阅消息总开关
    //   itemSettings: {   // 每一项开关
    //     SYS_MSG_TYPE_INTERACTIVE: 'accept', // 小游戏系统订阅消息
    //     SYS_MSG_TYPE_RANK: 'accept'
    //     zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: 'reject', // 普通一次性订阅消息
    //     ke_OZC_66gZxALLcsuI7ilCJSP2OJ2vWo2ooUPpkWrw: 'ban',
    //   }
    // }
  }
})
```

---

## docs/apis/open-api/soter/checkIsSoterEnrolledInDevice.md

---
title: Taro.checkIsSoterEnrolledInDevice(option)
sidebar_label: checkIsSoterEnrolledInDevice
---

获取设备内是否录入如指纹等生物信息的接口

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html)

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
| checkAuthMode | `keyof RequestAuthModes` | 是 | 认证方式 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### RequestAuthModes

| 参数 | 说明 |
| --- | --- |
| fingerPrint | 指纹识别 |
| facial | 人脸识别 |
| speech | 声纹识别<br />API 支持度: 暂未支持 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| isEnrolled | `boolean` | 是否已录入信息 |

## 示例代码

```tsx
Taro.checkIsSoterEnrolledInDevice({
  checkAuthMode: 'fingerPrint',
  success: function (res) {
    console.log(res.isEnrolled)
  }
})
```

---

## docs/apis/open-api/soter/checkIsSupportSoterAuthentication.md

---
title: Taro.checkIsSupportSoterAuthentication(option)
sidebar_label: checkIsSupportSoterAuthentication
---

获取本机支持的 SOTER 生物认证方式

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html)

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
| supportMode | `(keyof requestAuthModes)[]` | 该设备支持的可被SOTER识别的生物识别方式 |
| errMsg | `string` | 调用信息 |

### requestAuthModes

| 参数 | 说明 |
| --- | --- |
| fingerPrint | 指纹识别 |
| facial | 人脸识别 |
| speech | 声纹识别<br />API 支持度: 暂未支持 |

## 示例代码

```tsx
Taro.checkIsSupportSoterAuthentication({
  success: function (res) {
    // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
    // res.supportMode = ['fingerPrint'] 只支持指纹识别
    // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
  }
})
```

---

## docs/apis/open-api/soter/startSoterAuthentication.md

---
title: Taro.startSoterAuthentication(option)
sidebar_label: startSoterAuthentication
---

开始 SOTER 生物认证。验证流程请参考[说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html)。

**resultJSON 说明**
此数据为设备TEE中，将传入的challenge和TEE内其他安全信息组成的数据进行组装而来的JSON，对下述字段的解释如下表。例子如下：
| 字段名 | 说明 |
|---|----|
| raw | 调用者传入的challenge |
| fid | （仅Android支持）本次生物识别认证的生物信息编号（如指纹识别则是指纹信息在本设备内部编号） |
| counter | 防重放特征参数 |
| tee_n | TEE名称（如高通或者trustonic等） |
| tee_v | TEE版本号 |
| fp_n | 指纹以及相关逻辑模块提供商（如FPC等） |
| fp_v | 指纹以及相关模块版本号 |
| cpu_id | 机器唯一识别ID |
| uid | 概念同Android系统定义uid，即应用程序编号 |

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html)

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
| challenge | `string` | 是 | 挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 `resultJSON` 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。 |
| requestAuthModes | `(keyof requestAuthModes)[]` | 是 | 请求使用的可接受的生物认证方式 |
| authContent | `string` | 否 | 验证描述，即识别过程中显示在界面上的对话框提示内容 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| authMode | `string` | 生物认证方式 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 错误信息 |
| resultJSON | `string` | 在设备安全区域（TEE）内获得的本机安全信息（如TEE名称版本号等以及防重放参数）以及本次认证信息（仅Android支持，本次认证的指纹ID）。具体说明见下文 |
| resultJSONSignature | `string` | 用SOTER安全密钥对 `resultJSON` 的签名(SHA256 with RSA/PSS, saltlen=20) |

### requestAuthModes

| 参数 | 说明 |
| --- | --- |
| fingerPrint | 指纹识别 |
| facial | 人脸识别 |
| speech | 声纹识别<br />API 支持度: 暂未支持 |

## 示例代码

```tsx
Taro.startSoterAuthentication({
   requestAuthModes: ['fingerPrint'],
   challenge: '123456',
   authContent: '请用指纹解锁',
   success: function (res) { }
})
```

```json
{
  "raw":"msg",
  "fid":"2",
  "counter":123,
  "tee_n":"TEE Name",
  "tee_v":"TEE Version",
  "fp_n":"Fingerprint Sensor Name",
  "fp_v":"Fingerprint Sensor Version",
  "cpu_id":"CPU Id",
  "uid":"21"
}
```

---

## docs/apis/open-api/sticker/openSingleStickerView.md

---
title: Taro.openSingleStickerView(option)
sidebar_label: openSingleStickerView
---

打开单个表情

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/sticker/wx.openSingleStickerView.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| url | `Object` | 是 | 表情链接，可前往(表情开放平台)[https://sticker.weixin.qq.com/cgi-bin/mmemoticonwebnode-bin/pages/home]，在详情页中的「小程序跳转链接」入口复制 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.openSingleStickerView({
  url: '',
  success(res) {}
})
```

---

## docs/apis/open-api/sticker/openStickerIPView.md

---
title: Taro.openStickerIPView(option)
sidebar_label: openStickerIPView
---

打开表情IP合辑

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/sticker/wx.openStickerIPView.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| url | `Object` | 是 | 表情IP合辑链接，可前往[表情开放平台](https://sticker.weixin.qq.com/cgi-bin/mmemoticonwebnode-bin/pages/home)，在详情页中的「小程序跳转链接」入口复制 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.openStickerIPView({
  url: '',
  success(res) {}
})
```

---

## docs/apis/open-api/sticker/openStickerSetView.md

---
title: Taro.openStickerSetView(option)
sidebar_label: openStickerSetView
---

打开表情专辑

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/sticker/wx.openStickerSetView.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| url | `Object` | 是 | 表情专辑链接，可前往[表情开放平台](https://sticker.weixin.qq.com/cgi-bin/mmemoticonwebnode-bin/pages/home)，在详情页中的「小程序跳转链接」入口复制 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.openStickerSetView({
  url: '',
  success(res) {}
})
```

---

## docs/apis/open-api/subscribe-message/requestSubscribeDeviceMessage.md

---
title: Taro.requestSubscribeDeviceMessage(option)
sidebar_label: requestSubscribeDeviceMessage
---

订阅设备消息接口，调用后弹出授权框，用户同意后会允许开发者给用户发送订阅模版消息。当用户点击“允许”按钮时，模板消息会被添加到用户的小程序设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeDeviceMessage.html)

## 类型

```tsx
(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tmplIds | `string[]` | 是 | 需要订阅的消息模板的 id 的集合，一次调用最多可订阅3条消息 |
| sn | `string` | 是 | 设备唯一序列号。由厂商分配，长度不能超过128字节。字符只接受数字，大小写字母，下划线（_）和连字符（-）。 |
| snTicket | `string` | 是 | 设备票据，5分钟内有效。 |
| modelId | `string` | 是 | 设备型号 id 。通过微信公众平台注册设备获得。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(result: FailCallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | `number` | 接口调用失败错误码，有可能为空 |
| errMsg | `string` | 接口调用失败错误信息 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| [TEMPLATE_ID] | "accept" or "reject" or "ban" or "filter" or "acceptWithAudio" | [TEMPLATE_ID]是动态的键，即模板id |
| errMsg | `string` | 接口调用成功时errMsg值为'requestSubscribeMessage:ok' |

#### 示例代码

表示用户同意订阅 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE 这条消息
```json
{
  "errMsg": "requestSubscribeDeviceMessage:ok",
  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"
}
```

### TemplateReflex

模版消息订阅类型

| 参数 | 说明 |
| --- | --- |
| accept | 表示用户同意订阅该条id对应的模板消息 |
| reject | 表示用户拒绝订阅该条id对应的模板消息 |
| ban | 表示已被后台封禁 |
| filter | 表示该模板因为模板标题同名被后台过滤 |
| acceptWithAudio | 表示用户接收订阅消息并开启了语音提醒 |

## 示例代码

```tsx
Taro.requestSubscribeDeviceMessage({
  tmplIds: ['xxxxx'],
  sn: 'xxxx',
  snTicket: 'xxxxx',
  modelId: 'xxx',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})
```

---

## docs/apis/open-api/subscribe-message/requestSubscribeMessage.md

---
title: Taro.requestSubscribeMessage(option)
sidebar_label: requestSubscribeMessage
---

请求订阅消息

注意：[2.8.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)

## 类型

```tsx
(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tmplIds | `string[]` | 是 | 需要订阅的消息模板的id的集合（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置<br />API 支持度: weapp, tt |
| entityIds | `string[]` | 是 | 需要订阅的消息模板 id 集合（注意：1、一次性模板 id 和长期性模板 id 不可同时使用，2、一次最多传入三个模板 id<br />API 支持度: alipay |
| thirdTypeAppId | `string` | 否 | 模板小程序 appId，仅在服务商代调用场景下需要传入<br />API 支持度: alipay |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(result: FailCallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | `number` | 接口调用失败错误码 |
| errMsg | `string` | 接口调用失败错误信息 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| [TEMPLATE_ID] | "accept" or "reject" or "ban" | 是 | 动态的键，即模板id |
| behavior | `string` | 否 | 用户订阅操作结果。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or subscribe or 订阅成功 or<br />API 支持度: alipay |
| keep | `boolean` | 否 | 一次性订阅，是否勾选 总是保持以上选择，不再询问。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or true or 勾选 or<br />or false or 未勾选 or<br />API 支持度: alipay |
| refuse | `boolean` | 否 | 长期性订阅，是否点击 拒绝，不再询问。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or true or 点击 or<br />or false or 未点击 or<br />API 支持度: alipay |
| result | `ISubscribeResult` | 否 | 订阅数据<br />API 支持度: alipay |
| show | `boolean` | 否 | 本次订阅过程是否弹出了订阅面板。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or true or 弹出 or<br />or false or 未弹出 or<br />API 支持度: alipay |
| errMsg | `string` | 是 | 接口调用成功时errMsg值为'requestSubscribeMessage:ok' |

#### 示例代码

表示用户同意订阅 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE 这条消息

```json
{
  "errMsg": "requestSubscribeMessage:ok",
  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"
}
```

### ISubscribeResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| subscribeEntityIds | `string[]` | 订阅成功的模板列表 |
| subscribedEntityIds | `string[]` | 最终订阅成功的模板列表 |
| unsubscribedEntityIds | `string[]` | 未订阅的模板列表 |
| currentSubscribedEntityIds | `string[]` | 本次新增订阅成功的模板列表 |

### TemplateReflex

模版消息订阅类型

| 参数 | 说明 |
| --- | --- |
| accept | 表示用户同意订阅该条id对应的模板消息<br />API 支持度: weapp, alipay, tt |
| reject | 表示用户拒绝订阅该条id对应的模板消息<br />API 支持度: weapp, alipay, tt |
| ban | 表示已被后台封禁<br />API 支持度: weapp, tt |
| filter | 表示该模板因为模板标题同名被后台过滤<br />API 支持度: weapp |
| fail | 表示该条 id 对应的模版消息授权失败<br />API 支持度: tt |

## 示例代码

```tsx
Taro.requestSubscribeMessage({
  tmplIds: [''],
  success: function (res) { }
})
```

---

## docs/apis/open-api/subscribe-message/subscribeService.md

---
title: Taro.subscribeService(option)
sidebar_label: subscribeService
---

小程序消息订阅服务，包括取消订阅和查询订阅；订阅操作详见 [form 表单](https://smartprogram.baidu.com/docs/develop/component/formlist_form/)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-subscribeService/)

## 类型

```tsx
(option: subscribeService.Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `subscribeService.Option` |

## 示例代码

```tsx
Taro.subscribeService({
  templateId: 'BD0003',
  subscribeId: '8026',
  type: 'query',
  success(res) {
    Taro.showModal({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})
```

---

## docs/apis/open-api/subscribe-message/unsubscribeMessage.md

---
title: Taro.unsubscribeMessage(option)
sidebar_label: unsubscribeMessage
---

取消当前用户已订阅的消息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/07vg26?pathHash=8c9630ac)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| entityIds | `string[]` | 是 | 需要取消订阅的消息模板 id 集合（注意：1、一次性模板 id 和长期性模板 id 不可同时使用，2、一次最多传入三个模板 id）。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.unsubscribeMessage({
  entityIds: [
    'ac768fca1ce245ccae9404bb5243c49b',
    '9aa357acb7c6434aba294aded1cdfb7c',
  ],
  success(res) {
    console.log(res);
  },
  fail(err) {
    console.log(err);
  }
})
```

---

