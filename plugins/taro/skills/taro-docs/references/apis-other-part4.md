## docs/apis/base/system/getSystemInfoAsync.md

---
title: Taro.getSystemInfoAsync(res)
sidebar_label: getSystemInfoAsync
---

异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> 微信小程序: 小程序可以在微信和企业微信中调用此接口，但是在企业微信中调用此接口时，会额外返回一个 environment 字段（微信中不返回），如此字段值为 wxwork，则表示当前小程序运行在企业微信环境中。
>
> H5: 不支持 version、statusBarHeight、fontSizeSetting、SDKVersion

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)

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

```tsx
Taro.getSystemInfoAsync({
  success (res) {
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

## docs/apis/base/system/getSystemInfoSync.md

---
title: Taro.getSystemInfoSync()
sidebar_label: getSystemInfoSync
---

[Taro.getSystemInfo](./getSystemInfo) 的同步版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> 微信小程序: 小程序可以在微信和企业微信中调用此接口，但是在企业微信中调用此接口时，会额外返回一个 environment 字段（微信中不返回），如此字段值为 wxwork，则表示当前小程序运行在企业微信环境中。
>
> H5: 不支持 version、statusBarHeight、fontSizeSetting、SDKVersion

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html)

## 类型

```tsx
() => Result
```

## 参数

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

```tsx
try {
  const res = Taro.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
} catch (e) {
  // Do something when catch error
}
```

---

## docs/apis/base/system/getSystemSetting.md

---
title: Taro.getSystemSetting()
sidebar_label: getSystemSetting
---

获取设备设置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 不支持 bluetoothEnabled、locationEnabled、wifiEnabled

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemSetting.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| bluetoothEnabled | `boolean` | 否 | 蓝牙的系统开关 |
| locationEnabled | `boolean` | 否 | 地理位置的系统开关 |
| wifiEnabled | `boolean` | 否 | Wi-Fi 的系统开关 |
| deviceOrientation | `keyof DeviceOrientation` | 否 | 设备方向 |

### DeviceOrientation

设备方向合法值

| 参数 | 说明 |
| --- | --- |
| portrait | 竖屏 |
| landscape | 横屏 |

## 示例代码

```tsx
const systemSetting = Taro.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)
```

---

## docs/apis/base/system/getWindowInfo.md

---
title: Taro.getWindowInfo()
sidebar_label: getWindowInfo
---

获取窗口信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 不支持 statusBarHeight、safeArea

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| pixelRatio | `number` | 是 | 设备像素比 |
| screenWidth | `number` | 是 | 屏幕宽度，单位px |
| screenHeight | `number` | 是 | 屏幕高度，单位px |
| windowWidth | `number` | 是 | 可使用窗口宽度，单位px |
| windowHeight | `number` | 是 | 可使用窗口高度，单位px |
| statusBarHeight | `number` | 否 | 状态栏的高度，单位px |
| safeArea | `TaroGeneral.SafeAreaResult` | 否 | 在竖屏正方向下的安全区域 |

## 示例代码

```tsx
const windowInfo = Taro.getWindowInfo()

console.log(windowInfo.pixelRatio)
console.log(windowInfo.screenWidth)
console.log(windowInfo.screenHeight)
console.log(windowInfo.windowWidth)
console.log(windowInfo.windowHeight)
console.log(windowInfo.statusBarHeight)
console.log(windowInfo.safeArea)
console.log(windowInfo.screenTop)
```

---

## docs/apis/base/system/openAppAuthorizeSetting.md

---
title: Taro.openAppAuthorizeSetting(option)
sidebar_label: openAppAuthorizeSetting
---

跳转系统微信授权管理页

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html)

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
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
Taro.openAppAuthorizeSetting({
  success (res) {
    console.log(res)
  }
})
```

---

## docs/apis/base/system/openSystemBluetoothSetting.md

---
title: Taro.openSystemBluetoothSetting(option)
sidebar_label: openSystemBluetoothSetting
---

跳转系统蓝牙设置页

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openSystemBluetoothSetting.html)

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
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 示例代码

```tsx
Taro.openSystemBluetoothSetting({
  success (res) {
    console.log(res)
  }
})
```

---

## docs/apis/base/update/getUpdateManager.md

---
title: Taro.getUpdateManager()
sidebar_label: getUpdateManager
---

获取**全局唯一**的版本更新管理器，用于管理小程序更新。
关于小程序的更新机制，可以查看[运行机制](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)文档。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html)

## 类型

```tsx
() => UpdateManager
```

## 示例代码

```tsx
const updateManager = Taro.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate)
})
updateManager.onUpdateReady(function () {
  Taro.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success: function (res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})
updateManager.onUpdateFailed(function () {
  // 新的版本下载失败
})
```

---

## docs/apis/base/update/UpdateManager.md

---
title: UpdateManager
sidebar_label: UpdateManager
---

UpdateManager 对象，用来管理更新，可通过 Taro.getUpdateManager 接口获取实例。

**Tips**
- 微信开发者工具上可以通过「编译模式」下的「下次编译模拟更新」开关来调试
- 小程序开发版/体验版没有「版本」概念，所以无法在开发版/体验版上测试更版本更新情况

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html)

## 方法

### applyUpdate

强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html)

```tsx
() => void
```

### onCheckForUpdate

监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html)

```tsx
(callback: OnCheckForUpdateCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnCheckForUpdateCallback` | 向微信后台请求检查更新结果事件的回调函数 |

### onUpdateReady

监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 小程序有版本更新事件的回调函数 |

### onUpdateFailed

监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 小程序更新失败事件的回调函数 |

## 参数

### OnCheckForUpdateCallback

向微信后台请求检查更新结果事件的回调函数

```tsx
(result: OnCheckForUpdateResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnCheckForUpdateResult` |

### OnCheckForUpdateResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| hasUpdate | `boolean` | 是否有新版本 |

## 示例代码

```tsx
const updateManager = Taro.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success: function (res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
})
```

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| UpdateManager | ✔️ | ✔️ |  |  |  |
| UpdateManager.applyUpdate | ✔️ | ✔️ |  |  |  |
| UpdateManager.onCheckForUpdate | ✔️ | ✔️ |  |  |  |
| UpdateManager.onUpdateReady | ✔️ | ✔️ |  |  |  |
| UpdateManager.onUpdateFailed | ✔️ | ✔️ |  |  |  |

---

## docs/apis/base/update/updateWeChatApp.md

---
title: Taro.updateWeChatApp(option)
sidebar_label: updateWeChatApp
---

更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.updateWeChatApp.html)

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
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

---

## docs/apis/base/weapp/app-event/offAppHide.md

---
title: Taro.offAppHide(callback)
sidebar_label: offAppHide
---

取消监听小程序切后台事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html)

## 类型

```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: CallbackResult) => void` | 小程序切后台事件的回调函数 |

---

## docs/apis/base/weapp/app-event/offAppShow.md

---
title: Taro.offAppShow(callback)
sidebar_label: offAppShow
---

取消监听小程序切前台事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html)

## 类型

```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: CallbackResult) => void` | 小程序切前台事件的回调函数 |

---

## docs/apis/base/weapp/app-event/offAudioInterruptionBegin.md

---
title: Taro.offAudioInterruptionBegin(callback)
sidebar_label: offAudioInterruptionBegin
---

取消监听音频因为受到系统占用而被中断开始事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音频因为受到系统占用而被中断开始事件的回调函数 |

---

## docs/apis/base/weapp/app-event/offAudioInterruptionEnd.md

---
title: Taro.offAudioInterruptionEnd(callback)
sidebar_label: offAudioInterruptionEnd
---

取消监听音频中断结束事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音频中断结束事件的回调函数 |

---

## docs/apis/base/weapp/app-event/offError.md

---
title: Taro.offError(callback)
sidebar_label: offError
---

取消监听音频播放错误事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offError.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 音频播放错误事件的回调函数 |

---

## docs/apis/base/weapp/app-event/offPageNotFound.md

---
title: Taro.offPageNotFound(callback)
sidebar_label: offPageNotFound
---

取消监听小程序要打开的页面不存在事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 小程序要打开的页面不存在事件的回调函数 |

---

## docs/apis/base/weapp/app-event/offThemeChange.md

---
title: Taro.offThemeChange(callback)
sidebar_label: offThemeChange
---

取消监听系统主题改变事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offThemeChange.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

---

## docs/apis/base/weapp/app-event/offUnhandledRejection.md

---
title: Taro.offUnhandledRejection(callback)
sidebar_label: offUnhandledRejection
---

取消监听未处理的 Promise 拒绝事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offUnhandledRejection.html)

## 类型

```tsx
<T = any>(callback: Callback<T>) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `T` |

---

## docs/apis/base/weapp/app-event/onAppHide.md

---
title: Taro.onAppHide(callback)
sidebar_label: onAppHide
---

监听小程序切后台事件。该事件与 [`App.onHide`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onhide) 的回调时机一致。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html)

## 类型

```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: CallbackResult) => void` | 小程序切后台事件的回调函数 |

---

## docs/apis/base/weapp/app-event/onAppShow.md

---
title: Taro.onAppShow(callback)
sidebar_label: onAppShow
---

监听小程序切前台事件。该事件与 [`App.onShow`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object) 的回调参数一致。

**返回有效 referrerInfo 的场景**

| 场景值 | 场景                            | appId含义  |
| ------ | ------------------------------- | ---------- |
| 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
| 1035   | 公众号自定义菜单                | 来源公众号 |
| 1036   | App 分享消息卡片                | 来源App    |
| 1037   | 小程序打开小程序                | 来源小程序 |
| 1038   | 从另一个小程序返回              | 来源小程序 |
| 1043   | 公众号模板消息                  | 来源公众号 |

**注意**

部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html)

## 类型

```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: CallbackResult) => void` | 小程序切前台事件的回调函数 |

### CallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| path | `string` | 是 | 小程序切前台的路径 |
| query | `TaroGeneral.IAnyObject` | 是 | 小程序切前台的 query 参数 |
| shareTicket | `string` | 是 | shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
| scene | `number` | 是 | 小程序切前台的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) |
| referrerInfo | `ResultReferrerInfo` | 是 | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |
| forwardMaterials | `ForwardMaterial[]` | 否 | 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 |
| chatType | `keyof ChatType` | 否 | 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 |
| apiCategory | `keyof ApiCategory` | 否 | API 类别 |

### ResultReferrerInfo

来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| appId | `string` | 否 | 来源小程序、公众号或 App 的 appId |
| extraData | `TaroGeneral.IAnyObject` | 否 | 来源小程序传过来的数据，scene=1037或1038时支持 |

### ForwardMaterial

ChatType 类型合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `string` | 文件的mimetype类型 |
| name | `string` | 文件名 |
| path | `string` | 文件路径（如果是webview则是url） |
| size | `number` | 文件大小 |

### ChatType

ChatType 类型合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 微信联系人单聊 |
| 2 | 企业微信联系人单聊 |
| 3 | 普通微信群聊 |
| 4 | 企业微信互通群聊 |

### ApiCategory

API 类别合法值

| 参数 | 说明 |
| --- | --- |
| default | 默认类别 |
| nativeFunctionalized | 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序 |
| browseOnly | 仅浏览，朋友圈快照页等场景打开的小程序 |
| embedded | 内嵌，通过打开半屏小程序能力打开的小程序 |

---

## docs/apis/base/weapp/app-event/onAudioInterruptionBegin.md

---
title: Taro.onAudioInterruptionBegin(callback)
sidebar_label: onAudioInterruptionBegin
---

监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音频因为受到系统占用而被中断开始事件的回调函数 |

---

## docs/apis/base/weapp/app-event/onAudioInterruptionEnd.md

---
title: Taro.onAudioInterruptionEnd(callback)
sidebar_label: onAudioInterruptionEnd
---

监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音频中断结束事件的回调函数 |

---

## docs/apis/base/weapp/app-event/onError.md

---
title: Taro.onError(callback)
sidebar_label: onError
---

监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 [`App.onError`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onerrorstring-error) 的回调时机与参数一致。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

### Callback

小程序错误事件的回调函数

```tsx
(error: string | ErrorEvent | Error) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| error | string or ErrorEvent or Error | 错误信息，包含堆栈 |

---

## docs/apis/base/weapp/app-event/onPageNotFound.md

---
title: Taro.onPageNotFound(callback)
sidebar_label: onPageNotFound
---

监听小程序要打开的页面不存在事件。该事件与 [`App.onPageNotFound`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onpagenotfoundobject-object) 的回调时机一致。

**注意**
- 开发者可以在回调中进行页面重定向，但必须在回调中**同步**处理，异步处理（例如 `setTimeout` 异步执行）无效。
- 若开发者没有调用 [Taro.onPageNotFound](/docs/apis/base/weapp/app-event/onPageNotFound) 绑定监听，也没有声明 `App.onPageNotFound`，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
- 如果回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再第二次回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

### Result

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| isEntryPage | `boolean` | 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） |
| path | `string` | 不存在页面的路径 |
| query | `TaroGeneral.IAnyObject` | 打开不存在页面的 query 参数 |

### Callback

小程序要打开的页面不存在事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

---

## docs/apis/base/weapp/app-event/onThemeChange.md

---
title: Taro.onThemeChange(callback)
sidebar_label: onThemeChange
---

监听系统主题改变事件。该事件与 [`App.onThemeChange`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onThemeChange-Object-object) 的回调时机一致。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

### Callback

系统主题改变事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

### Result

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| theme | `keyof ITheme` | 系统当前的主题，取值为`light`或`dark` |

### ITheme

| 参数 | 说明 |
| --- | --- |
| light | 浅色主题 |
| dark | 深色主题 |

---

## docs/apis/base/weapp/app-event/onUnhandledRejection.md

---
title: Taro.onUnhandledRejection(callback)
sidebar_label: onUnhandledRejection
---

监听未处理的 Promise 拒绝事件。该事件与 [`App.onUnhandledRejection`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onUnhandledRejection-Object-object) 的回调时机与参数一致。

**注意**
- 所有的 unhandledRejection 都可以被这一监听捕获，但只有 Error 类型的才会在小程序后台触发报警。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html)

## 类型

```tsx
<T = any>(callback: Callback<T>) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `T` |

### Callback

```tsx
(res: Result<T>) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result<T>` |

### Result

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| reason | string or Error | 拒绝原因，一般是一个 Error 对象 |
| promise | `Promise<T>` | 被拒绝的 Promise 对象 |

---

## docs/apis/base/weapp/life-cycle/getEnterOptionsSync.md

---
title: Taro.getEnterOptionsSync()
sidebar_label: getEnterOptionsSync
---

获取本次小程序启动时的参数。如果当前是冷启动，则返回值与 [`App.onLaunch`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object) 的回调参数一致；如果当前是热启动，则返回值与 [`App.onShow`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object) 一致。

**注意**
部分版本在无 `referrerInfo` 的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html)

## 类型

```tsx
() => EnterOptions
```

## 参数

### EnterOptions

启动参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| path | `string` | 是 | 启动小程序的路径 |
| scene | `number` | 是 | 启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) |
| query | `TaroGeneral.IAnyObject` | 是 | 启动小程序的 query 参数 |
| shareTicket | `string` | 是 | shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
| referrerInfo | `ReferrerInfo` | 是 | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |
| forwardMaterials | `ForwardMaterial[]` | 否 | 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 |
| chatType | `keyof ChatType` | 否 | 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 |
| apiCategory | `keyof ApiCategory` | 否 | API 类别 |

#### ReferrerInfo

来源信息

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| appId | `string` | 否 | 来源小程序、公众号或 App 的 appId |
| extraData | `TaroGeneral.IAnyObject` | 否 | 来源小程序传过来的数据，scene=1037或1038时支持 |

#### ForwardMaterial

ChatType 类型合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `string` | 文件的mimetype类型 |
| name | `string` | 文件名 |
| path | `string` | 文件路径（如果是webview则是url） |
| size | `number` | 文件大小 |

#### ChatType

ChatType 类型合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 微信联系人单聊 |
| 2 | 企业微信联系人单聊 |
| 3 | 普通微信群聊 |
| 4 | 企业微信互通群聊 |

#### ApiCategory

API 类别合法值

| 参数 | 说明 |
| --- | --- |
| default | 默认类别 |
| nativeFunctionalized | 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序 |
| browseOnly | 仅浏览，朋友圈快照页等场景打开的小程序 |
| embedded | 内嵌，通过打开半屏小程序能力打开的小程序 |

---

## docs/apis/base/weapp/life-cycle/getLaunchOptionsSync.md

---
title: Taro.getLaunchOptionsSync()
sidebar_label: getLaunchOptionsSync
---

获取小程序启动时的参数。与 [`App.onLaunch`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onlaunchobject-object) 的回调参数一致。

**注意**
部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html)

## 类型

```tsx
() => LaunchOptions
```

## 参数

### LaunchOptions

启动参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| path | `string` | 是 | 启动小程序的路径 |
| query | `TaroGeneral.IAnyObject` | 是 | 启动小程序的 query 参数 |
| scene | `number` | 是 | 启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) |
| shareTicket | `string` | 是 | shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
| referrerInfo | `ReferrerInfo` | 是 | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |
| forwardMaterials | `ForwardMaterial[]` | 否 | 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 |
| chatType | `keyof ChatType` | 否 | 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 |
| apiCategory | `keyof ApiCategory` | 否 | API 类别 |

#### ReferrerInfo

来源信息

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| appId | `string` | 否 | 来源小程序、公众号或 App 的 appId |
| extraData | `TaroGeneral.IAnyObject` | 否 | 来源小程序传过来的数据，scene=1037或1038时支持 |

#### ForwardMaterial

ChatType 类型合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `string` | 文件的mimetype类型 |
| name | `string` | 文件名 |
| path | `string` | 文件路径（如果是webview则是url） |
| size | `number` | 文件大小 |

#### ChatType

ChatType 类型合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 微信联系人单聊 |
| 2 | 企业微信联系人单聊 |
| 3 | 普通微信群聊 |
| 4 | 企业微信互通群聊 |

#### ApiCategory

API 类别合法值

| 参数 | 说明 |
| --- | --- |
| default | 默认类别 |
| nativeFunctionalized | 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序 |
| browseOnly | 仅浏览，朋友圈快照页等场景打开的小程序 |
| embedded | 内嵌，通过打开半屏小程序能力打开的小程序 |

---

## docs/apis/base/arrayBufferToBase64.md

---
title: Taro.arrayBufferToBase64(buffer)
sidebar_label: arrayBufferToBase64
---

将 ArrayBuffer 数据转成 Base64 字符串。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html)

## 类型

```tsx
(buffer: ArrayBuffer) => string
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| buffer | `ArrayBuffer` | 要转换成 Base64 字符串的 ArrayBuffer 对象 |

## 示例代码

```tsx
const arrayBuffer = new Uint8Array([11, 22, 33])
const base64 = Taro.arrayBufferToBase64(arrayBuffer)
```

---

## docs/apis/base/base64ToArrayBuffer.md

---
title: Taro.base64ToArrayBuffer(base64)
sidebar_label: base64ToArrayBuffer
---

将 Base64 字符串转成 ArrayBuffer 数据。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html)

## 类型

```tsx
(base64: string) => ArrayBuffer
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| base64 | `string` | 要转化成 ArrayBuffer 对象的 Base64 字符串 |

## 示例代码

```tsx
const base64 = 'CxYh'
const arrayBuffer = Taro.base64ToArrayBuffer(base64)
```

---

## docs/apis/base/canIUse.md

---
title: Taro.canIUse(schema)
sidebar_label: canIUse
---

判断小程序的 API，回调，参数，组件等是否在当前版本可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html)

## 类型

```tsx
(schema: string) => boolean
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| schema | `string` | 使用 `${API}.${method}.${param}.${option}` 或者 `${component}.${attribute}.${option}` 方式来调用<br /><br />**参数说明**<br /><br />- `${API}` 代表 API 名字<br />- `${method}` 代表调用方式，有效值为return, success, object, callback<br />- `${param}` 代表参数或者返回值<br />- `${option}` 代表参数的可选值或者返回值的属性<br />- `${component}` 代表组件名字<br />- `${attribute}` 代表组件属性<br />- `${option}` 代表组件属性的可选值 |

## 示例代码

```tsx
Taro.canIUse('openBluetoothAdapter')
Taro.canIUse('getSystemInfoSync.return.screenWidth')
Taro.canIUse('getSystemInfo.success.screenWidth')
Taro.canIUse('showToast.object.image')
Taro.canIUse('onCompassChange.callback.direction')
Taro.canIUse('request.object.method.GET')
Taro.canIUse('live-player')
Taro.canIUse('text.selectable')
Taro.canIUse('button.open-type.contact')
```

---

