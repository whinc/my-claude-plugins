## docs/apis/network/download/downloadFile.md

---
title: Taro.downloadFile(option)
sidebar_label: downloadFile
---

下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。

注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)

## 类型

```tsx
(option: Option) => DownloadTaskPromise
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| url | `string` |  | 是 | 下载资源的 url |
| filePath | `string` |  | 否 | 指定文件下载后存储的路径 |
| header | `TaroGeneral.IAnyObject` |  | 否 | HTTP 请求的 Header，Header 中不能设置 Referer |
| timeout | `number` |  | 否 | 超时时间，单位为毫秒 |
| withCredentials | `boolean` | `true` | 否 | 是否应使用传出凭据 (cookie) 发送此请求<br />API 支持度: h5 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: FileSuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### FileSuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| filePath | `string` | 是 | 用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致 |
| statusCode | `number` | 是 | 开发者服务器返回的 HTTP 状态码 |
| tempFilePath | `string` | 是 | 临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 |
| errMsg | `string` | 是 | 调用结果 |
| header | `TaroGeneral.IAnyObject` | 否 | 开发者服务器返回的 HTTP Response Header<br />API 支持度: weapp<br />weapp: 非官方文档标注属性 |
| dataLength | `number` | 否 | 数据长度，单位 Byte<br />API 支持度: weapp<br />weapp: 非官方文档标注属性 |
| cookies | `string[]` | 否 | cookies<br />API 支持度: weapp<br />weapp: 非官方文档标注属性 |
| profile | `TaroGeneral.IAnyObject` | 否 | 网络请求过程中一些调试信息 |

## 示例代码

```tsx
Taro.downloadFile({
  url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
  success: function (res) {
    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    if (res.statusCode === 200) {
      Taro.playVoice({
        filePath: res.tempFilePath
      })
    }
  }
})
```

---

## docs/apis/network/download/DownloadTask.md

---
title: DownloadTask
sidebar_label: DownloadTask
---

一个可以监听下载进度变化事件，以及取消下载任务的对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html)

## 方法

### abort

中断下载任务

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.abort.html)

```tsx
() => void
```

### onProgressUpdate

监听下载进度变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onProgressUpdate.html)

```tsx
(callback: OnProgressUpdateCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnProgressUpdateCallback` | 下载进度变化事件的回调函数 |

### offProgressUpdate

取消监听下载进度变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offProgressUpdate.html)

```tsx
(callback: OnProgressUpdateCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnProgressUpdateCallback` | 下载进度变化事件的回调函数 |

### onHeadersReceived

监听 HTTP Response Header 事件。会比请求完成事件更早

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onHeadersReceived.html)

```tsx
(callback: OnHeadersReceivedCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnHeadersReceivedCallback` | HTTP Response Header 事件的回调函数 |

### offHeadersReceived

取消监听 HTTP Response Header 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offHeadersReceived.html)

```tsx
(callback: OnHeadersReceivedCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnHeadersReceivedCallback` | HTTP Response Header 事件的回调函数 |

## 参数

### OnHeadersReceivedCallback

HTTP Response Header 事件的回调函数

```tsx
(result: OnHeadersReceivedCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnHeadersReceivedCallbackResult` |

### OnProgressUpdateCallback

下载进度变化事件的回调函数

```tsx
(result: OnProgressUpdateCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnProgressUpdateCallbackResult` |

### OnHeadersReceivedCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| header | `TaroGeneral.IAnyObject` | 开发者服务器返回的 HTTP Response Header |

### OnProgressUpdateCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| progress | `number` | 下载进度百分比 |
| totalBytesExpectedToWrite | `number` | 预期需要下载的数据总长度，单位 Bytes |
| totalBytesWritten | `number` | 已经下载的数据长度，单位 Bytes |

### DownloadTaskPromise

## 示例代码

```tsx
const downloadTask = Taro.downloadFile({
  url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
  success (res) {
    Taro.playVoice({
      filePath: res.tempFilePath
    })
  }
})

downloadTask.onProgressUpdate((res) => {
  console.log('下载进度', res.progress)
  console.log('已经下载的数据长度', res.totalBytesWritten)
  console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
})

downloadTask.abort() // 取消下载任务
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| DownloadTask | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| DownloadTask.abort | ✔️ |  |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| DownloadTask.onProgressUpdate | ✔️ |  |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| DownloadTask.offProgressUpdate | ✔️ |  |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| DownloadTask.onHeadersReceived | ✔️ |  |  |  | ✔️ |  |  |  | ✔️ |
| DownloadTask.offHeadersReceived | ✔️ |  |  |  | ✔️ |  |  |  | ✔️ |

---

## docs/apis/network/mdns/offLocalServiceDiscoveryStop.md

---
title: Taro.offLocalServiceDiscoveryStop(callback)
sidebar_label: offLocalServiceDiscoveryStop
---

取消监听 mDNS 服务停止搜索的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceDiscoveryStop.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务停止搜索的事件的回调函数 |

### Callback

mDNS 服务停止搜索的事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

---

## docs/apis/network/mdns/offLocalServiceFound.md

---
title: Taro.offLocalServiceFound(callback)
sidebar_label: offLocalServiceFound
---

取消监听 mDNS 服务发现的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceFound.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务发现的事件的回调函数 |

### Callback

mDNS 服务发现的事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

---

## docs/apis/network/mdns/offLocalServiceLost.md

---
title: Taro.offLocalServiceLost(callback)
sidebar_label: offLocalServiceLost
---

取消监听 mDNS 服务离开的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceLost.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务离开的事件的回调函数 |

### Callback

mDNS 服务离开的事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

---

## docs/apis/network/mdns/offLocalServiceResolveFail.md

---
title: Taro.offLocalServiceResolveFail(callback)
sidebar_label: offLocalServiceResolveFail
---

取消监听 mDNS 服务解析失败的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceResolveFail.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务解析失败的事件的回调函数 |

### Callback

mDNS 服务解析失败的事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

---

## docs/apis/network/mdns/onLocalServiceDiscoveryStop.md

---
title: Taro.onLocalServiceDiscoveryStop(callback)
sidebar_label: onLocalServiceDiscoveryStop
---

监听 mDNS 服务停止搜索的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceDiscoveryStop.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务停止搜索的事件的回调函数 |

### Callback

mDNS 服务停止搜索的事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

---

## docs/apis/network/mdns/onLocalServiceFound.md

---
title: Taro.onLocalServiceFound(callback)
sidebar_label: onLocalServiceFound
---

监听 mDNS 服务发现的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务发现的事件的回调函数 |

### Callback

mDNS 服务发现的事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ip | `string` | 服务的 ip 地址 |
| port | `number` | 服务的端口 |
| serviceName | `string` | 服务的名称 |
| serviceType | `string` | 服务的类型 |

---

## docs/apis/network/mdns/onLocalServiceLost.md

---
title: Taro.onLocalServiceLost(callback)
sidebar_label: onLocalServiceLost
---

监听 mDNS 服务离开的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceLost.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务离开的事件的回调函数 |

### Callback

mDNS 服务离开的事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| serviceName | `string` | 服务的名称 |
| serviceType | `string` | 服务的类型 |

---

## docs/apis/network/mdns/onLocalServiceResolveFail.md

---
title: Taro.onLocalServiceResolveFail(callback)
sidebar_label: onLocalServiceResolveFail
---

监听 mDNS 服务解析失败的事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceResolveFail.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | mDNS 服务解析失败的事件的回调函数 |

### Callback

mDNS 服务解析失败的事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| serviceName | `string` | 服务的名称 |
| serviceType | `string` | 服务的类型 |

---

## docs/apis/network/mdns/startLocalServiceDiscovery.md

---
title: Taro.startLocalServiceDiscovery(option)
sidebar_label: startLocalServiceDiscovery
---

开始搜索局域网下的 mDNS 服务。搜索的结果会通过 wx.onLocalService* 事件返回。

**注意**
1. wx.startLocalServiceDiscovery 是一个消耗性能的行为，开始 30 秒后会自动 stop 并执行 wx.onLocalServiceDiscoveryStop 注册的回调函数。
2. 在调用 wx.startLocalServiceDiscovery 后，在这次搜索行为停止后才能发起下次 wx.startLocalServiceDiscovery。停止本次搜索行为的操作包括调用 wx.stopLocalServiceDiscovery 和 30 秒后系统自动 stop 本次搜索。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html)

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
| fail | `(result: FailCallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息<br /><br />可选值：<br />- 'invalid param': serviceType 为空;<br />- 'scan task already exist': 在当前 startLocalServiceDiscovery 发起的搜索未停止的情况下，再次调用 startLocalServiceDiscovery; |

---

## docs/apis/network/mdns/stopLocalServiceDiscovery.md

---
title: Taro.stopLocalServiceDiscovery(option)
sidebar_label: stopLocalServiceDiscovery
---

停止搜索 mDNS 服务

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html)

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
| fail | `(result: FailCallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息<br /><br />可选值：<br />- 'task not found': 在当前没有处在搜索服务中的情况下调用 stopLocalServiceDiscovery; |

---

## docs/apis/network/request/addInterceptor.md

---
title: Taro.addInterceptor(interceptor)
sidebar_label: addInterceptor
---

> 最低 Taro 版本: 1.2.16

可以使用拦截器在请求发出前或发出后做一些额外操作。

在调用 `Taro.request` 发起请求之前，调用 `Taro.addInterceptor` 方法为请求添加拦截器，拦截器的调用顺序遵循洋葱模型。
拦截器是一个函数，接受 chain 对象作为参数。chain 对象中含有 **requestParmas** 属性，代表请求参数。拦截器内最后需要调用 `chain.proceed(requestParams)` 以调用下一个拦截器或发起请求。

Taro 提供了两个内置拦截器 `logInterceptor` 与 `timeoutInterceptor`，分别用于打印请求的相关信息和在请求超时时抛出错误。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(interceptor: interceptor) => any
```

## 参数

| 参数 | 类型 |
| --- | --- |
| interceptor | `interceptor` |

## 示例代码

### 示例 1

```tsx
const interceptor = function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams

  console.log(`http ${method || 'GET'} --> ${url} data: `, data)

  return chain.proceed(requestParams)
    .then(res => {
      console.log(`http <-- ${url} result:`, res)
      return res
    })
  }
Taro.addInterceptor(interceptor)
Taro.request({ url })
```

### 示例 2

```tsx
Taro.addInterceptor(Taro.interceptors.logInterceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)
Taro.request({ url })
```

---

## docs/apis/network/request/cleanInterceptors.md

---
title: Taro.cleanInterceptors()
sidebar_label: cleanInterceptors
---

清除所有拦截器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
() => void
```

## 示例代码

```tsx
Taro.cleanInterceptors()
```

---

## docs/apis/network/request/request.md

---
title: Taro.request(option)
sidebar_label: request
---

发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。

**data 参数说明**
最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
- 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
- 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
- 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## 类型

```tsx
<T = any, U = any>(option: Option<T, U>) => RequestTask<T>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `T` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| url | `string` |  | 是 | 开发者服务器接口地址 |
| data | `U` |  | 否 | 请求的参数 |
| header | `TaroGeneral.IAnyObject` |  | 否 | 设置请求的 header，header 中不能设置 Referer。<br /><br />`content-type` 默认为 `application/json` |
| timeout | `number` | `60000` | 否 | 超时时间，单位为毫秒<br />API 支持度: weapp, h5, tt, alipay, rn |
| method | `keyof Method` | `"GET"` | 否 | HTTP 请求方法 |
| dataType | `string` |  | 否 | 返回的数据格式 |
| responseType | `keyof ResponseType` |  | 否 | 响应的数据类型 |
| enableHttp2 | `boolean` | `false` | 否 | 开启 http2<br />API 支持度: weapp |
| enableQuic | `boolean` | `false` | 否 | 开启 quic<br />API 支持度: weapp |
| enableCache | `boolean` | `false` | 否 | 开启 cache<br />API 支持度: weapp, tt |
| enableHttpDNS | `boolean` | `false` | 否 | 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS<br />API 支持度: weapp |
| httpDNSServiceId | `string` |  | 否 | HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS<br />API 支持度: weapp |
| enableChunked | `boolean` | `false` | 否 | 开启 transfer-encoding chunked。<br />API 支持度: weapp |
| forceCellularNetwork | `boolean` | `false` | 否 | wifi下使用移动网络发送请求<br />API 支持度: weapp |
| enableCookie | `boolean` | `false` | 否 | headers 中设置 cookie 字段是否生效。如果为 false，则 headers 中的 cookie 字段将被忽略，请求头中将包含服务端上一次返回的 cookie（如果有）。<br />API 支持度: alipay 支付宝: 10.2.33+ |
| referrerStrategy | `keyof ReferrerStrategy` | `"querystring"` | 否 | referer 策略，用于控制当前请求 header 对象中 referer 字段格式。该参数默认值可通过 app.json 中的配置进行修改。<br />API 支持度: alipay 支付宝: 10.3.50+ APPX: 2.8.7 开发者工具: 3.5.1<br />[参考地址](https://opendocs.alipay.com/mini/api/owycmh#referrerStrategy%20%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E) |
| success | `(result: SuccessCallbackResult<T>) => void` |  | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| complete | `(res: Partial<SuccessCallbackResult> & TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| jsonp | string or boolean | `false` | 否 | 设置是否使用 jsonp 方式获取数据<br />API 支持度: h5 |
| jsonpCache | `RequestCache` |  | 否 | 设置 jsonp 请求 url 是否需要被缓存<br />API 支持度: h5 |
| mode | `keyof CorsMode` | `"same-origin"` | 否 | 设置是否允许跨域请求<br />API 支持度: h5 |
| credentials | `keyof Credentials` | `"omit"` | 否 | 设置是否携带 Cookie<br />API 支持度: h5 |
| cache | `keyof Cache` | `"default"` | 否 | 设置缓存模式<br />API 支持度: h5 |
| retryTimes | `number` | `2` | 否 | 设置请求重试次数<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| backup | string or string[] |  | 否 | 设置请求的兜底接口<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| signal | `AbortSignal` |  | 否 | 设置请求中止信号<br />API 支持度: h5 |
| dataCheck | `() => boolean` |  | 否 | 设置请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| useStore | `boolean` | `false` | 否 | 设置请求是否使用缓存<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| storeCheckKey | `string` |  | 否 | 设置请求缓存校验的 key<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| storeSign | `string` |  | 否 | 设置请求缓存签名<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| storeCheck | `() => boolean` |  | 否 | 设置请求校验函数，一般不需要设置<br />API 支持度: h5 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `T` | 是 | 开发者服务器返回的数据 |
| header | `TaroGeneral.IAnyObject` | 是 | 开发者服务器返回的 HTTP Response Header |
| statusCode | `number` | 是 | 开发者服务器返回的 HTTP 状态码 |
| errMsg | `string` | 是 | 调用结果 |
| cookies | `string[]` | 否 | cookies |

### DataType

返回的数据格式

| 参数 | 说明 |
| --- | --- |
| json | 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse<br />其他: 不对返回的内容进行 JSON.parse |
| text | 返回的数据为文本字符串<br />API 支持度: alipay |
| base64 | 返回的数据将转换为 base64 格式字符串<br />API 支持度: alipay |
| arraybuffer | 返回的数据将保持 ArrayBuffer 数据<br />API 支持度: alipay 支付宝: 10.1.70+ |

### Method

HTTP 请求方法

| 参数 | 说明 |
| --- | --- |
| OPTIONS | HTTP 请求 OPTIONS |
| GET | HTTP 请求 GET |
| HEAD | HTTP 请求 HEAD |
| POST | HTTP 请求 POST |
| PUT | HTTP 请求 PUT |
| PATCH | HTTP 请求 PATCH |
| DELETE | HTTP 请求 DELETE |
| TRACE | HTTP 请求 TRACE |
| CONNECT | HTTP 请求 CONNECT |

### ResponseType

响应的数据类型

| 参数 | 说明 |
| --- | --- |
| text | 响应的数据为文本 |
| arraybuffer | 响应的数据为 ArrayBuffer |

### CorsMode

跨域策略

| 参数 | 说明 |
| --- | --- |
| no-cors | 跨域请求将获取不透明的响应 |
| cors | 允许跨域请求 |
| same-origin | 请求总是向当前的源发起的 |

### Credentials

证书

| 参数 | 说明 |
| --- | --- |
| include | 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息 |
| same-origin | 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息 |
| omit | 从不发送cookies |

### Cache

缓存策略

| 参数 | 说明 |
| --- | --- |
| default | 浏览器从HTTP缓存中寻找匹配的请求 |
| no-cache | 浏览器在其HTTP缓存中寻找匹配的请求 |
| reload | 浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存 |
| force-cache | 浏览器在其HTTP缓存中寻找匹配的请求 |
| only-if-cached | 浏览器在其HTTP缓存中寻找匹配的请求 |

### ReferrerStrategy

referer 策略

| 参数 | 说明 |
| --- | --- |
| index | referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html |
| page | 保留 page（pages/xxx/yyy），referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page} |
| querystring | 默认值。会将发起请求时所在页面的 URL 作为 referer 值，会保留 page（pages/xxx/yyy）和 querystring（x=1&y=2）并可能有框架添加的其他参数，referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}?{querysrtring}{框架其他参数} |

## 示例代码

### 示例 1

```tsx
Taro.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success: function (res) {
    console.log(res.data)
  }
})
```

### 示例 2

async/await 用法：

```tsx
const res = await Taro.request(params)
```

---

## docs/apis/network/request/RequestTask.md

---
title: RequestTask
sidebar_label: RequestTask
---

网络请求任务对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html)

## 方法

### abort

中断请求任务

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html)

```tsx
() => void
```

### onHeadersReceived

监听 HTTP Response Header 事件。会比请求完成事件更早

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | HTTP Response Header 事件的回调函数 |

### offHeadersReceived

取消监听 HTTP Response Header 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | HTTP Response Header 事件的回调函数 |

### onChunkReceived

监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onChunkReceived.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | Transfer-Encoding Chunk Received 事件的回调函数 |

### offChunkReceived

移除 Transfer-Encoding Chunk Received 事件的监听函数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offChunkReceived.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | Transfer-Encoding Chunk Received 事件的回调函数 |

## 参数

### onHeadersReceived

#### Callback

HTTP Response Header 事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

#### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| header | `TaroGeneral.IAnyObject` | 开发者服务器返回的 HTTP Response Header |

### onChunkReceived

#### Callback

Transfer-Encoding Chunk Received 事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

#### CallbackResult

开发者服务器每次返回新 chunk 时的 Response

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `ArrayBuffer` | 返回的chunk buffer |

## 示例代码

### 示例 1

回调函数(Callback)用法：

```tsx
const requestTask = Taro.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '' ,
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success: function (res) {
    console.log(res.data)
  }
})
requestTask.abort()
```

### 示例 2

Promise 用法：

```tsx
const requestTask = Taro.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '' ,
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success: function (res) {
    console.log(res.data)
  }
})
requestTask.then(res => {
  console.log(res.data)
})
requestTask.abort()
```

### 示例 3

async/await 用法：

```tsx
const requestTask = Taro.request(params)
const res = await requestTask
requestTask.abort()
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RequestTask | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| RequestTask.abort | ✔️ |  |  | ✔️ |  |  |  |  | ✔️ | ✔️ |
| RequestTask.onHeadersReceived | ✔️ |  |  |  |  |  |  |  | ✔️ | ✔️ |
| RequestTask.offHeadersReceived | ✔️ |  |  |  |  |  |  |  | ✔️ | ✔️ |
| RequestTask.onChunkReceived | ✔️ |  |  |  |  |  |  |  |  |  |
| RequestTask.offChunkReceived | ✔️ |  |  |  |  |  |  |  |  |  |

---

## docs/apis/network/tcp/createTCPSocket.md

---
title: Taro.createTCPSocket()
sidebar_label: createTCPSocket
---

创建一个 TCP Socket 实例。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。

**连接限制**

- 允许与局域网内的非本机 IP 通信
- 允许与配置过的服务器域名通信，详见[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)
- 禁止与以下端口号连接：1024 以下 1099 1433 1521 1719 1720 1723 2049 2375 3128 3306 3389 3659 4045 5060 5061 5432 5984 6379 6000 6566 7001 7002 8000-8100 8443 8888 9200 9300 10051 10080 11211 27017 27018 27019
- 每 5 分钟内最多创建 20 个 TCPSocket

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html)

## 类型

```tsx
() => TCPSocket
```

---

## docs/apis/network/tcp/TCPSocket.md

---
title: TCPSocket
sidebar_label: TCPSocket
---

一个 TCP Socket 实例，默认使用 IPv4 协议

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.html)

## 方法

### connect

在给定的套接字上启动连接

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.connect.html)

```tsx
(option: Option) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

#### 示例代码

```tsx
const tcp = Taro.createTCPSocket()
tcp.connect({ address: '192.168.193.2', port: 8848 })
```

### write

在 socket 上发送数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.write.html)

```tsx
(data: string | ArrayBuffer) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | string or ArrayBuffer | 要发送的数据 |

#### 示例代码

```tsx
const tcp = Taro.createTCPSocket()
tcp.write('hello, how are you')
```

### close

关闭连接

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.close.html)

```tsx
() => void
```

#### 示例代码

```tsx
const tcp = Taro.createTCPSocket()
tcp.close()
```

### onClose

监听关闭事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onClose.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 当一个 socket 完全关闭就发出该事件的回调函数 |

### offClose

取消监听当一个 socket 完全关闭就发出该事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offClose.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 当一个 socket 完全关闭就发出该事件的回调函数 |

### onConnect

监听当一个 socket 连接成功建立的时候触发该事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onConnect.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 当一个 socket 连接成功建立的时候触发该事件的回调函数 |

### offConnect

取消监听当一个 socket 连接成功建立的时候触发该事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offConnect.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 当一个 socket 连接成功建立的时候触发该事件的回调函数 |

### onError

监听当错误发生时触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onError.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 监听当错误发生时触发的回调函数 |

### offError

取消监听当错误发生时触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offError.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 监听当错误发生时触发的回调函数 |

### onMessage

监听当接收到数据的时触发该事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onMessage.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 当接收到数据的时触发该事件的回调函数 |

### offMessage

取消监听当接收到数据的时触发该事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offMessage.html)

```tsx
(callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 当接收到数据的时触发该事件的回调函数 |

## 参数

### connect

#### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| address | `string` | 套接字要连接的地址 |
| port | `number` | 套接字要连接的端口 |

### onClose

#### Callback

当一个 socket 完全关闭就发出该事件的回调函数

```tsx
(args: unknown[]) => void
```

| 参数 | 类型 |
| --- | --- |
| args | `unknown[]` |

### onConnect

#### Callback

当一个 socket 连接成功建立的时候触发该事件的回调函数

```tsx
(args: unknown[]) => void
```

| 参数 | 类型 |
| --- | --- |
| args | `unknown[]` |

### onError

#### Callback

监听当错误发生时触发的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

#### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### onMessage

#### Callback

当接收到数据的时触发该事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

#### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| message | `ArrayBuffer` | 收到的消息 |
| remoteInfo | `RemoteInfo` | 发送端地址信息 |
| localInfo | `LocalInfo` | 接收端地址信息 |

#### RemoteInfo

发送端地址信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| address | `string` | 发送消息的 socket 的地址 |
| family | `string` | 使用的协议族，为 IPv4 或者 IPv6 |
| port | `number` | 端口号 |
| size | `number` | message 的大小，单位：字节 |

#### LocalInfo

接收端地址信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| address | `string` | 接收消息的 socket 的地址 |
| family | `string` | 使用的协议族，为 IPv4 或者 IPv6 |
| port | `number` | 端口号 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| TCPSocket | ✔️ |  |  |  |  |
| TCPSocket.connect | ✔️ |  |  |  |  |
| TCPSocket.write | ✔️ |  |  |  |  |
| TCPSocket.close | ✔️ |  |  |  |  |
| TCPSocket.onClose | ✔️ |  |  |  |  |
| TCPSocket.offClose | ✔️ |  |  |  |  |
| TCPSocket.onConnect | ✔️ |  |  |  |  |
| TCPSocket.offConnect | ✔️ |  |  |  |  |
| TCPSocket.onError | ✔️ |  |  |  |  |
| TCPSocket.offError | ✔️ |  |  |  |  |
| TCPSocket.onMessage | ✔️ |  |  |  |  |
| TCPSocket.offMessage | ✔️ |  |  |  |  |

---

