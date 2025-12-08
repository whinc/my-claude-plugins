## docs/apis/location/chooseLocation.md

---
title: Taro.chooseLocation(option)
sidebar_label: chooseLocation
---

打开地图选择位置。

`chooseLocation` api功能是依赖于腾讯位置服务，所以需要使用 api 密钥。如果您没有，可以前往腾讯位置服务[开发者控制台](https://lbs.qq.com/console/mykey.html?console=mykey)进行申请。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)

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
| latitude | `number` | 否 | 目标地纬度 |
| longitude | `number` | 否 | 目标地经度 |
| mapOpts | `Record<string, unknown>` | 否 | 地图选点组件参数<br />API 支持度: h5<br />h5: 仅支持 H5 使用<br />[参考地址](https://lbs.qq.com/webApi/component/componentGuide/componentPicker) |
| title | `string` | 否 | 页面显示标题<br />API 支持度: alipay<br />alipay: 安卓默认值为 位置，iOS、IDE 默认值为 你在哪里?<br />[参考地址](https://opendocs.alipay.com/mini/api/location?pathHash=951b46a1) |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| address | `string` | 是 | 详细地址 |
| latitude | `number` | 是 | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 |
| longitude | `number` | 是 | 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 |
| name | `string` | 是 | 位置名称 |
| adCode | `number` | 否 | 区县代码<br />API 支持度: alipay |
| adName | `string` | 否 | 区县名称<br />API 支持度: alipay |
| cityCode | `string` | 否 | 城市代码<br />API 支持度: alipay |
| cityName | `string` | 否 | 城市名称<br />API 支持度: alipay |
| provinceCode | `number` | 否 | 省份代码<br />API 支持度: alipay |
| provinceName | `string` | 否 | 省份名称<br />API 支持度: alipay |
| errMsg | `string` | 是 | 调用结果 |

## 示例代码

```tsx
// config/index.js

// 获得 api 密钥后，您需要将它填入项目的常量配置`defineConstants.LOCATION_APIKEY`中：
const config = {
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')
  },
  // ...
}
```

---

## docs/apis/location/choosePoi.md

---
title: Taro.choosePoi(option)
sidebar_label: choosePoi
---

打开POI列表选择位置，支持模糊定位（精确到市）和精确定位混选。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.choosePoi.html)

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

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `number` | 选择城市时，值为 1，选择精确位置时，值为 2 |
| city | `number` | 城市名称 |
| name | `string` | 位置名称 |
| address | `string` | 详细地址 |
| latitude | `number` | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 |
| longitude | `number` | 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 |

---

## docs/apis/location/getFuzzyLocation.md

---
title: Taro.getFuzzyLocation(option)
sidebar_label: getFuzzyLocation
---

获取当前的模糊地理位置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html)

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
| type | `keyof Type` | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Type

| 参数 | 说明 |
| --- | --- |
| wgs84 | 返回 gps 坐标 |
| gcj02 | 返回 gcj02 坐标 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| latitude | `number` | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | `number` | 经度，范围为 -180~180，负数表示西经 |

## 示例代码

```tsx
Taro.getFuzzyLocation({
  type: 'wgs84',
  success (res) {
    const latitude = res.latitude
    const longitude = res.longitude
  },
})
```

---

## docs/apis/location/getLocation.md

---
title: Taro.getLocation(option)
sidebar_label: getLocation
---

获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。

**注意**
- 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
- 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)

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
| altitude | `boolean` | `false` | 否 | 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| highAccuracyExpireTime | `number` |  | 否 | 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果 |
| isHighAccuracy | `boolean` | `false` | 否 | 开启高精度定位 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| type | `string` | `"wgs84"` | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标 |
| needFullAccuracy | `boolean` | `false` | 否 | 针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。<br />传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框<br />API 支持度: swan |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| accuracy | `number` | 是 | 位置的精确度 |
| altitude | `number` | 是 | 高度，单位 m |
| horizontalAccuracy | `number` | 是 | 水平精度，单位 m |
| latitude | `number` | 是 | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | `number` | 是 | 经度，范围为 -180~180，负数表示西经 |
| speed | `number` | 是 | 速度，单位 m/s |
| verticalAccuracy | `number` | 是 | 垂直精度，单位 m（Android 无法获取，返回 0） |
| street | `string` | 否 | 城市名称<br />API 支持度: swan |
| cityCode | `string` | 否 | 国家代码<br />API 支持度: swan |
| city | `string` | 否 | 城市名称<br />API 支持度: swan, tt |
| country | `string` | 否 | 国家<br />API 支持度: swan |
| countryCode | `string` | 否 | 国家代码<br />API 支持度: swan |
| province | `string` | 否 | 省份<br />API 支持度: swan |
| streetNumber | `string` | 否 | 街道号码<br />API 支持度: swan |
| district | `string` | 否 | 区<br />API 支持度: swan |
| isFullAccuracy | `boolean` | 否 | 是不是精确定位信息<br />API 支持度: swan |
| errMsg | `string` | 是 | 调用结果 |

## 示例代码

 ```tsx
Taro.getLocation({
 type: 'wgs84',
 success: function (res) {
   const latitude = res.latitude
   const longitude = res.longitude
   const speed = res.speed
   const accuracy = res.accuracy
 }
})
```

---

## docs/apis/location/offLocationChange.md

---
title: Taro.offLocationChange(callback)
sidebar_label: offLocationChange
---

取消监听实时地理位置变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.offLocationChange.html)

## 类型

```tsx
(callback?: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 实时地理位置变化事件的回调函数 |

---

## docs/apis/location/offLocationChangeError.md

---
title: Taro.offLocationChangeError(callback)
sidebar_label: offLocationChangeError
---

取消监听持续定位接口返回失败时触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.offLocationChangeError.html)

## 类型

```tsx
(callback?: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 监听持续定位接口返回失败时触发的回调函数 |

---

## docs/apis/location/onLocationChange.md

---
title: Taro.onLocationChange(callback)
sidebar_label: onLocationChange
---

监听实时地理位置变化事件，需结合 Taro.startLocationUpdateBackground、Taro.startLocationUpdate 使用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 实时地理位置变化事件的回调函数 |

### Callback

实时地理位置变化事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| accuracy | `number` | 是 | 位置的精确度 |
| altitude | `number` | 是 | 高度，单位 m |
| horizontalAccuracy | `number` | 是 | 水平精度，单位 m |
| latitude | `number` | 是 | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | `number` | 是 | 经度，范围为 -180~180，负数表示西经 |
| speed | `number` | 是 | 速度，单位 m/s |
| verticalAccuracy | `number` | 是 | 垂直精度，单位 m（Android 无法获取，返回 0） |
| street | `string` | 否 | 街道名称<br />API 支持度: swan |
| cityCode | `string` | 否 | 城市编码<br />API 支持度: swan |
| city | `string` | 否 | 城市名称<br />API 支持度: swan, tt<br />tt: iOS 不支持 |
| country | `string` | 否 | 国家<br />API 支持度: swan |
| countryCode | `string` | 否 | 国家代码<br />API 支持度: swan |
| province | `string` | 否 | 省份<br />API 支持度: swan |
| streetNumber | `string` | 否 | 街道号码<br />API 支持度: swan |
| district | `string` | 否 | 区<br />API 支持度: swan |
| isFullAccuracy | `boolean` | 否 | 是不是精确定位信息<br />API 支持度: swan |

## 示例代码

```tsx
const _locationChangeFn = function (res) {
 console.log('location change', res)
}
Taro.onLocationChange(_locationChangeFn)
Taro.offLocationChange(_locationChangeFn)
```

---

## docs/apis/location/onLocationChangeError.md

---
title: Taro.onLocationChangeError(callback)
sidebar_label: onLocationChangeError
---

监听持续定位接口返回失败时触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChangeError.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 监听持续定位接口返回失败时触发的回调函数 |

### Callback

监听持续定位接口返回失败时触发的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| errCode | `number` | 是 | 错误码 |
| errMsg | `string` | 否 | 错误信息<br />API 支持度: tt<br />tt: 最低支持版本 2.48.0 |

---

## docs/apis/location/openLocation.md

---
title: Taro.openLocation(option)
sidebar_label: openLocation
---

使用微信内置地图查看位置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)

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
| latitude | `number` | 是 | 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 |
| longitude | `number` | 是 | 经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 |
| scale | `number` | 否 | 缩放比例<br />weapp: 范围 5~18，默认值18<br />alipay: 范围 3~19，默认值15 |
| name | `string` | 否 | 位置名 |
| address | `string` | 否 | 地址的详细说明 |
| ignoredApps | `any[]` | 否 | 定义在拉起的地图 App 面板中需要被屏蔽的地图类 App<br />API 支持度: swan |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.getLocation({
 type: 'gcj02', //返回可以用于 Taro.openLocation的经纬度
 success: function (res) {
   const latitude = res.latitude
   const longitude = res.longitude
   Taro.openLocation({
     latitude,
     longitude,
     scale: 18
   })
 }
})
```

---

## docs/apis/location/startLocationUpdate.md

---
title: Taro.startLocationUpdate(option)
sidebar_label: startLocationUpdate
---

开启小程序进入前台时接收位置消息

**注意**
- 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html)

## 类型

```tsx
(option?: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | `string` | `"gcj02"` | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 |
| needFullAccuracy | `boolean` | `false` | 否 | 针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。<br />传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框<br />API 支持度: swan |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

---

## docs/apis/location/startLocationUpdateBackground.md

---
title: Taro.startLocationUpdateBackground(option)
sidebar_label: startLocationUpdateBackground
---

开启小程序进入前后台时均接收位置消息，需引导用户开启[授权](../open-api/authorize/authorize.md#后台定位)。授权以后，小程序在运行中或进入后台均可接受位置消息变化。

**注意**
- 安卓微信7.0.6版本，iOS 7.0.5版本起支持该接口
- 需在app.json中配置requiredBackgroundModes: ['location']后使用
- 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html)

## 类型

```tsx
(option?: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | `string` | `"gcj02"` | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

---

## docs/apis/location/stopLocationUpdate.md

---
title: Taro.stopLocationUpdate(option)
sidebar_label: stopLocationUpdate
---

关闭监听实时位置变化，前后台都停止消息接收

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.stopLocationUpdate.html)

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
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/media/map/createMapContext.md

---
title: Taro.createMapContext(mapId, component)
sidebar_label: createMapContext
---

创建 [map](/docs/components/maps/map) 上下文 [MapContext](/docs/apis/media/map/MapContext) 对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html)

## 类型

```tsx
(mapId: string, component?: TaroGeneral.IAnyObject) => MapContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mapId | `string` | Map 组件的 id |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 Map 组件 |

## 示例代码

```tsx
const mapCtx = Taro.createMapContext('myMap')
```

---

