## docs/apis/open-api/user-info/getUserInfo.md

---
title: Taro.getUserInfo(option)
sidebar_label: getUserInfo
---

获取用户信息。

**接口调整说明**
在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见[《公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01))。在用户已授权的情况下调用此接口，可成功获取用户信息。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)

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
| lang | `keyof Language` | 否 | 显示用户信息的语言 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| withCredentials | `boolean` | 否 | 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 Taro.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) |
| iv | `string` | 是 | 加密算法的初始向量，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) |
| rawData | `string` | 是 | 不包括敏感信息的原始数据字符串，用于计算签名 |
| signature | `string` | 是 | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| userInfo | `UserInfo` | 是 | 用户信息对象，不包含 openid 等敏感信息 |
| errMsg | `string` | 是 | 调用结果 |

## 示例代码

```tsx
// 必须是在用户已经授权的情况下调用

Taro.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    var gender = userInfo.gender //性别 0：未知、1：男、2：女
    var province = userInfo.province
    var city = userInfo.city
    var country = userInfo.country
  }
})
```

敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。
获取得到的开放数据为以下 json 结构：

```json
{
  "openId": "OPENID",
  "nickName": "NICKNAME",
  "gender": GENDER,
  "city": "CITY",
  "province": "PROVINCE",
  "country": "COUNTRY",
  "avatarUrl": "AVATARURL",
  "unionId": "UNIONID",
  "watermark": {
    "appid":"APPID",
    "timestamp": TIMESTAMP
  }
}
```

---

## docs/apis/open-api/user-info/getUserProfile.md

---
title: Taro.getUserProfile(option)
sidebar_label: getUserProfile
---

> 最低 Taro 版本: 2.2.17+，3.0.29+

获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 `userInfo`。

若开发者需要获取用户的个人信息（头像、昵称、性别与地区），可以通过 Taro.getUserProfile 接口进行获取，

微信该接口从基础库 **2.10.4** 版本开始支持，该接口只返回用户个人信息，不包含用户身份标识符。该接口中 desc 属性（声明获取用户个人信息后的用途）后续会展示在弹窗中，请开发者谨慎填写。

开发者每次通过该接口获取用户个人信息均需用户确认，请开发者妥善保管用户快速填写的头像昵称，避免重复弹窗。

[微信端调整背景和说明，请参考文档](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| lang | `keyof Language` |  | 否 | 显示用户信息的语言 |
| desc | `string` |  | 是 | 声明获取用户个人信息后的用途，不超过30个字符 |
| force | `boolean` | `false` | 否 | 当宿主未登录时，是否强制拉起登录框<br />API 支持度: tt |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| userInfo | `UserInfo` | 用户信息对象 |
| rawData | `string` | 不包括敏感信息的原始数据字符串，用于计算签名 |
| signature | `string` | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| encryptedData | `string` | 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) |
| iv | `string` | 加密算法的初始向量，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) |
| cloudID | `string` | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细 [见云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |

## 示例代码

推荐使用 Taro.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认

```tsx
Taro.getUserProfile({
  desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  success: (res) => {
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    this.setState({
      userInfo: res.userInfo,
      hasUserInfo: true
    })
  }
})
```

---

## docs/apis/open-api/user-info/UserInfo.md

---
title: UserInfo
sidebar_label: UserInfo
---

用户信息

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html)

## 方法

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| nickName | `string` | 是 | 用户昵称 |
| avatarUrl | `string` | 是 | 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 |
| gender | `keyof Gender` | 否 | 用户性别。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) |
| country | `string` | 是 | 用户所在国家。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) |
| province | `string` | 是 | 用户所在省份。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) |
| city | `string` | 是 | 用户所在城市。不再返回，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) |
| language | `keyof Language` | 是 | 显示 country，province，city 所用的语言。强制返回 “zh_CN”，参考 [相关公告](https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801) |

## 参数

### Language

| 参数 | 类型 |
| --- | --- |
| en | `"英文"` |
| zh_CN | `"简体中文"` |
| zh_TW | `"繁体中文"` |

### Gender

| 参数 | 类型 |
| --- | --- |
| 0 | `"未知"` |
| 1 | `"男性"` |
| 2 | `"女性"` |

---

## docs/apis/open-api/werun/getWeRunData.md

---
title: Taro.getWeRunData(option)
sidebar_label: getWeRunData
---

获取用户过去三十天微信运动步数。需要先调用 Taro.login 接口。步数信息会在用户主动进入小程序时更新。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)

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

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)。解密后得到的数据结构见后文 |
| iv | `string` | 是 | 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| errMsg | `string` | 是 | 调用结果 |

## 示例代码

```tsx
Taro.getWeRunData({
  success: function (res) {
    // 拿 encryptedData 到开发者后台解密开放数据
    const encryptedData = res.encryptedData
    // 或拿 cloudID 通过云调用直接获取开放数据
    const cloudID = res.cloudID
  }
})
```

**开放数据 JSON 结构**
敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。
获取得到的开放数据为以下 json 结构：

```json
{
  "stepInfoList": [
    {
      "timestamp": 1445866601,
      "step": 100
    },
    {
      "timestamp": 1445876601,
      "step": 120
    }
  ]
}
```

stepInfoList 中，每一项结构如下：

| 属性 | 类型 | 说明 |
| --- | ---- | --- |
| timestamp | number | 时间戳，表示数据对应的时间 |
| step | number | 微信运动步数 |

---

## docs/apis/open-api/werun/shareToWeRun.md

---
title: Taro.shareToWeRun(option)
sidebar_label: shareToWeRun
---

分享数据到微信运动。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html)

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
| recordList | `record[]` | 是 | 运动数据列表 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### record

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| typeId | `number` | 运动项目id |
| time | `number` | 运动时长 |
| distance | `number` | 运动距离 |
| calorie | `number` | 消耗卡路里 |

---

## docs/apis/qq/addRecentColorSign.md

---
title: Taro.addRecentColorSign(option)
sidebar_label: addRecentColorSign
---

添加当前小程序页面到最近浏览彩签，需要授权基础库 1.20.0 开始支持。
提示：在手 Q 8.9.0 前的版本，当系统未授予手 Q 悬浮穿权限时，每次调用该接口都会弹出系统授权窗口。自手 Q 8.9.0 起交互调整如下:
  1. 系统没有授予手 Q 悬浮窗权限时，接口执行 fail 回调函数并附带 ”No floating window permission“的错误信息，开发者可针对此信息在业务代码里弹窗提示用户手动授予手 Q 悬浮窗权限。
  2. 安卓系统部分机型存在获取悬浮窗权限不准确情况。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addColorSign.html#qq-addrecentcolorsign)

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
| query | `string` | 否 | 做为点击最近彩签打开的小程序页面的启动参数，如 a=1&b=2<br />默认值：当前页面的查询参数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.addRecentColorSign({
  query: 'a=1&b=2',
  success(res) {
    console.log('addRecentColorSign success: ', res)
  },
  fail(err) {
    console.log('addRecentColorSign fail: ', err)
  },
  complete(res) {
    console.log('addRecentColorSign complete: ', res)
  }
})
```

---

## docs/apis/qq/applyAddToMyApps.md

---
title: Taro.applyAddToMyApps(option)
sidebar_label: applyAddToMyApps
---

申请用户将本小程序添加到下拉页面中“我的小程序”当中，手Q8.9.13及以上版本支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addToMyApps.html#qq-applyaddtomyapps)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| confirm | `boolean` | true 代表用户选择了同意 |
| cancel | `boolean` | true 代表用户选择了不同意 |

## 示例代码

```tsx
Taro.applyAddToMyApps({
  success(res) {
    if (res.confirm) {
      // 用户同意添加
    }
    if (res.cancel) {
      // 用户不同意添加
    }
    // 原则上，confirm和cancel是互斥的
  }
})
```

---

## docs/apis/qq/getGuildInfo.md

---
title: Taro.getGuildInfo(option)
sidebar_label: getGuildInfo
---

获取频道信息与当前人身份（FOR 机器人服务入口）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_guild.html)

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
| open_guild_id | `string` | 是 | 频道id |
| channel_id | `string` | 否 | 子频道Id |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| encryptedData | `string` | 加密之后的数据，需要解密 |
| iv | `string` | 对称解密算法初始向量(base64) |
| signature | `string` | 签名(base64) |

---

## docs/apis/qq/getQQRunData.md

---
title: Taro.getQQRunData(option)
sidebar_label: getQQRunData
---

获取用户过去三十天QQ运动步数。需要先调用 qq.login 接口。步数信息会在用户主动进入小程序时更新。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_sport.html)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| encryptedData | `string` | 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。 |
| iv | `string` | 加密算法的初始向量，详细见加密数据解密算法 |

## 示例代码

```tsx
Taro.getQQRunData({
  success(res) {
    // 拿 encryptedData 到开发者后台解密开放数据
    const encryptedData = res.encryptedData
  }
})
```

**开放数据 JSON 结构**
敏感数据有两种获取方式，一是使用 加密数据解密算法 。 获取得到的开放数据为以下 json 结构：

```json
{
  "stepInfoList": [
    {
      "timestamp": 1445866601,
      "step": 100
    },
    {
      "timestamp": 1445876601,
      "step": 120
    }
  ]
}
```
* stepInfoList 中，每一项结构如下：

| 属性 | 类型 | 说明 |
| --- | ---- | --- |
| timestamp | number | 时间戳，表示数据对应的时间 |
| step | number | QQ运动步数 |

---

## docs/apis/qq/isAddedToMyApps.md

---
title: Taro.isAddedToMyApps(option)
sidebar_label: isAddedToMyApps
---

查询用户是否已经将本小程序添加到下拉页面中“我的小程序”当中，手Q8.9.13及以上版本支持，建议使用qq.applyAddToMyApps之前先调用qq.isAddedToMyApps来作前置判断

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addToMyApps.html#qq-isaddedtomyapps)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| isAdded | `boolean` | true 代表用户已经添加，false 则还没添加 |

## 示例代码

```tsx
Taro.isAddedToMyApps({
  success(res) {
    if (res.isAdded) {
      // 用户已经添加
    } else {
      // 用户还未添加
    }
  }
})
```

---

## docs/apis/qq/openQzonePublish.md

---
title: Taro.openQzonePublish(option)
sidebar_label: openQzonePublish
---

此接口可打开手Q说说发表界面，并将文字内容和图片/视频内容传递到手Q说说发表界面。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_openQzonePublish.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | `string` | 传递的文字内容 |
| media | `Media[]` | 传递的视频/图片内容，显示顺序为元素下标顺序 |
| path | `string` | 说说小尾巴跳转到的页面路径，不填则默认跳到主页 |
| footnote | `string` | 说说小尾巴显示的文案，不填则默认显示小程序的简介文案 |

### Media

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `MediaType` | 图片填"photo"，视频填"video" |
| path | `string` | 文件路径，必须为本地文件 |

### MediaType

```tsx
"photo" | "video"
```

## 示例代码

```tsx
Taro.openQzonePublish({
  footnote: '使用同款滤镜',
  path: 'pages/index/index',
  text: '我爱中国',
  media: [
    {
      type: 'photo',
      path: 'qqfile://1.png'
    },
    {
      type: 'video',
      path: 'qqfile://2.mp4'
    }
  ]
})
```

---

## docs/apis/qq/setCustomDress.md

---
title: Taro.setCustomDress(option)
sidebar_label: setCustomDress
---

QQ美化平台内测阶段，仅被邀请的商户可使用此接口。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/personalize.html#qq-setcustomdress)

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
| action | `string` | 是 | 方法名，设置头像填"uploadAvatar"，其他方法后续开放 |
| path | `string` | 是 | 素材路径，必须为本地文件，路径为 wxfile:// 的形式 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.setCustomDress({
  action: "uploadAvatar",
  path:"wxfile://images/1.png"
  success(res) {
    console.log("success"+res);
  },
  fail(res) {
    console.log("fail"+res);
  }
})
```

---

## docs/apis/qq/setOfficialDress.md

---
title: Taro.setOfficialDress(option)
sidebar_label: setOfficialDress
---

QQ美化平台内测阶段，仅被邀请的商户可使用此接口。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/personalize.html#qq-setofficialdress)

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
| action | `string` | 是 | 方法名，设置头像填"setAvatar"，其他方法后续开放 |
| uin | `string` | 是 | openid，给自己设置头像填"self" |
| item_id | `string` | 否 | 物品id |
| busi_info | `string` | 否 | 设置头像"setAvatar"此处不用填 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.setOfficialDress({
  action: "setAvatar",
  uin: "self",
  item_id: "2740",
  success(res) {
    console.log("success"+res);
  },
  fail(res) {
    console.log("fail"+res);
  }
})
```

---

## docs/apis/qq/updateQQApp.md

---
title: Taro.updateQQApp(option)
sidebar_label: updateQQApp
---

更新 QQ 版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_updateQQ.html#qq-updateqqapp)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.updateQQApp({
  success: function(res) {
    console.log('updateQQApp success',res)
  },
  fail: function(err) {
    console.log('updateQQApp fail',err)
  },
  complete: function(res) {
    console.log('updateQQApp info',res)
  }
})
```

---

## docs/apis/share/authPrivateMessage.md

---
title: Taro.authPrivateMessage(option)
sidebar_label: authPrivateMessage
---

验证私密消息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.authPrivateMessage.html)

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
| shareTicket | `string` | 是 | shareTicket |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| errMsg | `string` | 是 | 错误信息 |
| iv | `string` | 是 | 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |

## 示例代码

```tsx
Taro.authPrivateMessage({
  shareTicket: 'xxxxxx',
  success(res) {
    console.log('authPrivateMessage success', res)
    // res
    // {
    //   errMsg: 'authPrivateMessage:ok'
    //   valid: true
    //   iv: 'xxxx',
    //   encryptedData: 'xxxxxx'
    // }
  },
  fail(res) {
    console.log('authPrivateMessage fail', res)
  }
})
```

---

## docs/apis/share/getShareInfo.md

---
title: Taro.getShareInfo(option)
sidebar_label: getShareInfo
---

获取转发详细信息

**Tips**
- 如需要展示群名称，可以使用[开放数据组件](/docs/components/open/open-data)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html)

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
| shareTicket | `string` | 是 | shareTicket |
| timeout | `number` | 否 | 超时时间，单位 ms |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |
| errMsg | `string` | 是 | 错误信息 |
| iv | `string` | 是 | 加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html) |

## 示例代码

敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。
获取得到的开放数据为以下 json 结构（其中 openGId 为当前群的唯一标识）：
```json
{
 "openGId": "OPENGID"
}
```

---

## docs/apis/share/hideShareMenu.md

---
title: Taro.hideShareMenu(option)
sidebar_label: hideShareMenu
---

隐藏当前页面的转发按钮

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html)

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
| menus | `string[]` | 否 | 本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
Taro.hideShareMenu()
```

---

## docs/apis/share/offCopyUrl.md

---
title: Taro.offCopyUrl(callback)
sidebar_label: offCopyUrl
---

取消监听用户点击右上角菜单的「复制链接」按钮时触发的事件

> 本接口为 Beta 版本，暂只在 Android 平台支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.offCopyUrl.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 |

---

## docs/apis/share/onCopyUrl.md

---
title: Taro.onCopyUrl(callback)
sidebar_label: onCopyUrl
---

监听用户点击右上角菜单的「复制链接」按钮时触发的事件

> 本接口为 Beta 版本，暂只在 Android 平台支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数 |

### Callback

用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| query | `string` | 用短链打开小程序时当前页面携带的查询字符串。小程序中使用时，应在进入页面时调用 `Taro.onCopyUrl` 自定义 `query`，退出页面时调用 `Taro.offCopyUrl`，防止影响其它页面。 |

---

## docs/apis/share/shareFileMessage.md

---
title: Taro.shareFileMessage(option)
sidebar_label: shareFileMessage
---

转发文件到聊天

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareFileMessage.html)

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
| filePath | `string` | 是 | 要分享的视频地址，必须为本地路径或临时路径 |
| fileName | `string` | 否 | 自定义文件名，若留空则使用 filePath 中的文件名 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/share/shareVideoMessage.md

---
title: Taro.shareVideoMessage(option)
sidebar_label: shareVideoMessage
---

转发视频到聊天

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareVideoMessage.html)

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
| videoPath | `string` | 是 | 要分享的视频地址，必须为本地路径或临时路径 |
| thumbPath | `string` | 否 | 缩略图路径，若留空则使用视频首帧 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

callback 写法

```tsx
Taro.downloadFile({
  url: URL, // 下载url
  success (res) {
    // 下载完成后转发
    Taro.shareVideoMessage({
      videoPath: res.tempFilePath,
      success() {},
      fail: console.error,
    })
  },
  fail: console.error,
})
```

async await 写法

```tsx
const { tempFilePath } = await Taro.downloadFile({
  url: URL, // 下载url
})
// 下载完成后转发
await Taro.shareVideoMessage({
  videoPath: res.tempFilePath,
})
```

---

## docs/apis/share/showShareImageMenu.md

---
title: Taro.showShareImageMenu(option)
sidebar_label: showShareImageMenu
---

打开分享图片弹窗，可以将图片发送给朋友、收藏或下载

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareImageMenu.html)

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
| path | `string` | 是 | 要分享的图片地址，必须为本地路径或临时路径 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
Taro.downloadFile({
  url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
  success: (res) => {
    Taro.showShareImageMenu({
      path: res.tempFilePath
    })
  }
})
```

---

## docs/apis/share/showShareMenu.md

---
title: Taro.showShareMenu(option)
sidebar_label: showShareMenu
---

显示当前页面的转发按钮

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html)

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
| withShareTicket | `boolean` | 否 | 是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
| showShareItems | `string[]` | 否 | QQ小程序分享功能，支持分享到QQ、QQ空间、微信好友、微信朋友圈<br />API 支持度: weapp, qq<br />qq: QQ支持的值： ['qq', 'qzone', 'wechatFriends', 'wechatMoment']<br />weapp: 微信支持：['wechatFriends', 'wechatMoment'] / ['shareAppMessage', 'shareTimeline'] |

## 示例代码

```tsx
Taro.showShareMenu({
  withShareTicket: true
})
```

---

## docs/apis/share/updateShareMenu.md

---
title: Taro.updateShareMenu(option)
sidebar_label: updateShareMenu
---

更新转发属性

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html)

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
| activityId | `string` | 否 | 动态消息的 activityId。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| isUpdatableMessage | `boolean` | 否 | 是否是动态消息，详见[动态消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message.html) |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| templateInfo | `UpdatableMessageFrontEndTemplateInfo` | 否 | 动态消息的模板信息 |
| withShareTicket | `boolean` | 否 | 是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |

### UpdatableMessageFrontEndTemplateInfo

动态消息的模板信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| parameterList | `UpdatableMessageFrontEndParameter[]` | 参数列表 |

### UpdatableMessageFrontEndParameter

参数列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 参数名 |
| value | `string` | 参数值 |

## 示例代码

```tsx
Taro.updateShareMenu({
  withShareTicket: true,
  success () { }
})
```

---

## docs/apis/skyline/DraggableSheetContext.md

---
title: DraggableSheetContext
sidebar_label: DraggableSheetContext
---

DraggableSheet 实例，可通过 Taro.createSelectorQuery 的 NodesRef.node 方法获取。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.html)

## 方法

### scrollTo

滚动到指定位置。size 取值 [0, 1]，size = 1 时表示撑满 draggable-sheet 组件。size 和 pixels 同时传入时，仅 size 生效。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.scrollTo.html)

```tsx
(option: Option) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 参数

### scrollTo

#### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| size | `number` |  | 否 | 相对目标位置 |
| pixels | `number` |  | 否 | 绝对目标位置 |
| animated | `boolean` | `true` | 否 | 是否启用滚动动画 |
| duration | `number` | `300` | 否 | 滚动动画时长（ms) |
| easingFunction | `string` | `ease` | 否 | 缓动函数 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| DraggableSheetContext | ✔️ |  |  |  |  |

---

## docs/apis/skyline/Snapshot.md

---
title: Snapshot
sidebar_label: Snapshot
---

Snapshot 实例，可通过 SelectorQuery 获取。

Snapshot 通过 id 跟一个 snapshot 组件绑定，操作对应的 snapshot 组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/Snapshot.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 画布宽度 |
| height | `number` | 画布高度 |

### takeSnapshot

对 snapshot 组件子树进行截图

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/Snapshot.takeSnapshot.html)

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 参数

### TakeSnapshot

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| type | `string` | 是 | 截图导出类型，'file' 保存到临时文件目录或 'arraybuffer' 返回图片二进制数据，默认值为 'file' |
| format | `string` | 是 | 截图文件格式，'rgba' 或 'png'，默认值为 'png' |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 截图保存的临时文件路径，当 type 为 file 该字段生效 |
| data | `string` | 截图对应的二进制数据，当 type 为 arraybuffer 该字段生效 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| Snapshot | ✔️ |  |  |  |

---

