## docs/apis/media/media-recorder/MediaRecorder.md

---
title: MediaRecorder
sidebar_label: MediaRecorder
---

## 方法

### destroy

销毁录制器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.destroy.html)

```tsx
() => Promise<void>
```

### off

取消监听录制事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.off.html)

```tsx
(eventName: keyof EventName, callback: Callback) => Promise<void>
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `keyof EventName` | 事件名 |
| callback | `Callback` | 事件触发时执行的回调函数 |

### on

注册监听录制事件的回调函数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.on.html)

```tsx
(eventName: keyof EventName, callback: Callback) => Promise<void>
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `keyof EventName` | 事件名 |
| callback | `Callback` | 事件触发时执行的回调函数 |

### pause

暂停录制

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.pause.html)

```tsx
() => Promise<void>
```

### requestFrame

请求下一帧录制，在 callback 里完成一帧渲染后开始录制当前帧

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.requestFrame.html)

```tsx
(callback: Callback) => Promise<void>
```

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

### resume

恢复录制

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.resume.html)

```tsx
() => Promise<void>
```

### start

开始录制

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.start.html)

```tsx
() => Promise<void>
```

### stop

结束录制

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.stop.html)

```tsx
() => Promise<void>
```

## 参数

### on

#### EventName

eventName 的合法值

| 参数 | 说明 |
| --- | --- |
| start | 录制开始事件。 |
| stop | 录制结束事件。返回 {tempFilePath, duration, fileSize} |
| pause | 录制暂停事件。 |
| resume | 录制继续事件。 |
| timeupdate | 录制时间更新事件。 |

#### Callback

事件触发时执行的回调函数

```tsx
(res: { tempFilePath: string; duration: number; fileSize: number; }) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `{ tempFilePath: string; duration: number; fileSize: number; }` |

### requestFrame

#### Callback

事件触发时执行的回调函数

```tsx
() => void
```

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| MediaRecorder.destroy | ✔️ |  |  |  |  |
| MediaRecorder.off | ✔️ |  |  |  |  |
| MediaRecorder.on | ✔️ |  |  |  |  |
| MediaRecorder.pause | ✔️ |  |  |  |  |
| MediaRecorder.requestFrame | ✔️ |  |  |  |  |
| MediaRecorder.resume | ✔️ |  |  |  |  |
| MediaRecorder.start | ✔️ |  |  |  |  |
| MediaRecorder.stop | ✔️ |  |  |  |  |

---

## docs/apis/media/video/chooseMedia.md

---
title: Taro.chooseMedia(option)
sidebar_label: chooseMedia
---

拍摄或从手机相册中选择图片或视频。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)

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
| count | `number` | `9` | 否 | 最多可以选择的文件个数<br />API 支持度: weapp, h5 |
| mediaType | `(keyof mediaType)[]` | `['image', 'video']` | 否 | 文件类型<br />API 支持度: weapp, h5 |
| sourceType | `(keyof sourceType)[]` | `['album', 'camera']` | 否 | 图片和视频选择的来源<br />API 支持度: weapp, h5 |
| maxDuration | `number` | `10` | 否 | 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间<br />API 支持度: weapp |
| sizeType | ("original" or "compressed")[] | `['original', 'compressed']` | 否 | 是否压缩所选文件<br />API 支持度: weapp |
| camera | `string` | `"back"` | 否 | 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头<br />API 支持度: weapp, h5 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| mediaId | `string` |  | 否 | 用来上传的input元素ID<br />API 支持度: h5 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFiles | `ChooseMedia[]` | 本地临时文件列表 |
| type | `string` | 文件类型，有效值有 image 、video、mix |

### ChooseMedia

本地临时文件列表

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tempFilePath | `string` | 是 | 本地临时文件路径 (本地路径) |
| size | `number` | 是 | 本地临时文件大小，单位 B |
| duration | `number` | 是 | 视频的时间长度 |
| height | `number` | 是 | 视频的高度 |
| width | `number` | 是 | 视频的宽度 |
| thumbTempFilePath | `string` | 是 | 视频缩略图临时文件路径 |
| fileType | `string` | 是 | 选择的文件的类型 |
| originalFileObj | `File` | 否 | 原始的浏览器 File 对象<br />API 支持度: h5 |

### mediaType

| 参数 | 说明 |
| --- | --- |
| video | 只能拍摄视频或从相册选择视频 |
| image | 只能拍摄图片或从相册选择图片 |
| mix | 可同时选择图片和视频 |

### sourceType

| 参数 | 说明 |
| --- | --- |
| album | 从相册选择 |
| camera | 使用相机拍摄 |

### camera

| 参数 | 说明 |
| --- | --- |
| back | 使用后置摄像头 |
| front | 使用前置摄像头 |

## 示例代码

```tsx
Taro.chooseMedia({
  count: 9,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success: (res) => {
    console.log(res.tempFiles)
    console.log(res.type)
  }
})
```

---

## docs/apis/media/video/chooseVideo.md

---
title: Taro.chooseVideo(option)
sidebar_label: chooseVideo
---

拍摄视频或从手机相册中选视频。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)

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
| camera | `keyof Camera` | `"back"` | 否 | 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效<br />API 支持度: weapp, h5 |
| compressed | `boolean` | `true` | 否 | 是否压缩所选择的视频文件<br />API 支持度: weapp |
| maxDuration | `number` | `60` | 否 | 拍摄视频最长拍摄时间，单位秒<br />API 支持度: weapp |
| sourceType | `(keyof sourceType)[]` | `['album', 'camera']` | 否 | 视频选择的来源<br />API 支持度: weapp, h5 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 选定视频的临时文件路径 |
| duration | `number` | 选定视频的时间长度 |
| size | `number` | 选定视频的数据量大小 |
| height | `number` | 返回选定视频的高度 |
| width | `number` | 返回选定视频的宽度 |
| errMsg | `string` | 调用结果 |

### Camera

| 参数 | 说明 |
| --- | --- |
| back | 默认拉起后置摄像头 |
| front | 默认拉起前置摄像头 |

### sourceType

| 参数 | 说明 |
| --- | --- |
| album | 从相册选择视频 |
| camera | 使用相机拍摄视频 |

## 示例代码

```tsx
Taro.chooseVideo({
  sourceType: ['album','camera'],
  maxDuration: 60,
  camera: 'back',
  success: function (res) {
    console.log(res.tempFilePath)
  }
})
```

---

## docs/apis/media/video/compressVideo.md

---
title: Taro.compressVideo(option)
sidebar_label: compressVideo
---

压缩视频接口。
开发者可指定压缩质量 `quality` 进行压缩。当需要更精细的控制时，可指定 `bitrate`、`fps`、和 `resolution`，当 `quality` 传入时，这三个参数将被忽略。原视频的相关信息可通过 [getVideoInfo](/docs/apis/media/video/getVideoInfo) 获取。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html)

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
| src | `string` | 是 | 视频文件路径，可以是临时文件路径也可以是永久文件路径 |
| quality | `keyof Quality` | 是 | 压缩质量 |
| bitrate | `number` | 是 | 码率，单位 kbps |
| fps | `number` | 是 | 帧率 |
| resolution | `number` | 是 | 相对于原视频的分辨率比例，取值范围(0, 1] |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 压缩后的临时文件地址 |
| size | `number` | 压缩后的大小，单位 kB |

### Quality

| 参数 | 说明 |
| --- | --- |
| low | 低 |
| medium | 中 |
| high | 高 |

## 示例代码

```tsx
Taro.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  camera: 'back',
  compressed: false,
  success (res) {
    Taro.compressVideo({
      src: res.tempFilePath,
      quality: quality,
      bitrate: 1032,
      fps: 24,
      resolution:0.5,
      success (res) {
        console.log("压缩成功")
      },
      fail (err) {
        console.log("压缩失败")
      }
    })
  }
})
```

---

## docs/apis/media/video/createVideoContext.md

---
title: Taro.createVideoContext(id, component)
sidebar_label: createVideoContext
---

创建 video 上下文 VideoContext 对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html)

## 类型

```tsx
(id: string, component?: TaroGeneral.IAnyObject) => VideoContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | video 组件的 id |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 video 组件 |

## 示例代码

```tsx
videoContext = Taro.createVideoContext('myVideo')
```

---

## docs/apis/media/video/getVideoInfo.md

---
title: Taro.getVideoInfo(option)
sidebar_label: getVideoInfo
---

获取视频详细信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.getVideoInfo.html)

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
| src | `string` | 是 | 视频文件路径，可以是临时文件路径也可以是永久文件路径 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| orientation | `keyof Orientation` | 画面方向 |
| type | `string` | 视频格式 |
| duration | `number` | 视频长度 |
| size | `number` | 视频大小，单位 kB |
| height | `number` | 视频的长，单位 px |
| width | `number` | 视频的宽，单位 px |
| fps | `number` | 视频帧率 |
| bitrate | `number` | 视频码率，单位 kbps |

### Orientation

| 参数 | 说明 |
| --- | --- |
| up | 默认 |
| down | 180 度旋转 |
| left | 逆时针旋转 90 度 |
| right | 顺时针旋转 90 度 |
| up-mirrored | 同 up，但水平翻转 |
| down-mirrored | 同 down，但水平翻转 |
| left-mirrored | 同 left，但垂直翻转 |
| right-mirrored | 同 right，但垂直翻转 |

## 示例代码

```tsx
Taro.downloadFile({
  url: 'https://mock.taro.org/mock_video.mp4',
  success(res) {
    Taro.getVideoInfo({
      src: res.tempFilePath,
      success (res) {
        console.log('获取文件地址成功')
        console.log(res)
      },
      fail (res) {
        console.log('获取文件地址失败')
        console.log(res)
      },
      complete (res) {
        console.log('获取文件地址')
      }
    })
  }
})
```

---

## docs/apis/media/video/openVideoEditor.md

---
title: Taro.openVideoEditor(option)
sidebar_label: openVideoEditor
---

打开视频编辑器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.openVideoEditor.html)

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
| filePath | `string` | 是 | 视频源的路径，只支持本地路径 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| duration | `number` | 剪辑后生成的视频文件的时长，单位毫秒（ms） |
| size | `number` | 剪辑后生成的视频文件大小，单位字节数（byte） |
| tempFilePath | `string` | 编辑后生成的视频文件的临时路径 |
| tempThumbPath | `string` | 编辑后生成的缩略图文件的临时路径 |

## 示例代码

```tsx
Taro.openVideoEditor({
 filePath: ''
})
```

---

## docs/apis/media/video/saveVideoToPhotosAlbum.md

---
title: Taro.saveVideoToPhotosAlbum(option)
sidebar_label: saveVideoToPhotosAlbum
---

保存视频到系统相册。支持mp4视频格式。需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.writePhotosAlbum

**Bug & Tip：**

1.  `tip`: camera 参数在部分 Android 手机下由于系统 ROM 不支持无法生效

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html)

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
| filePath | `string` | 是 | 视频文件路径，可以是临时文件路径也可以是永久文件路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.saveVideoToPhotosAlbum({
  filePath: 'file://xxx',
  success: function (res) {
    console.log(res.errMsg)
  }
})
```

---

## docs/apis/media/video/VideoContext.md

---
title: VideoContext
sidebar_label: VideoContext
---

VideoContext 实例，可通过 [Taro.createVideoContext](./createVideoContext) 获取。

VideoContext 通过 id 跟一个 video 组件绑定，操作对应的 video 组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html)

## 方法

### exitBackgroundPlayback

退出后台音频播放模式。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitBackgroundPlayback.html)

```tsx
() => void
```

### exitFullScreen

退出全屏

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitFullScreen.html)

```tsx
() => void
```

### exitPictureInPicture

退出小窗，该方法可在任意页面调用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitPictureInPicture.html)

```tsx
(option: ExitPictureInPictureOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ExitPictureInPictureOption` |

### hideStatusBar

隐藏状态栏，仅在iOS全屏下有效

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html)

```tsx
() => void
```

### pause

暂停视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.pause.html)

```tsx
() => void
```

### play

播放视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.play.html)

```tsx
() => void
```

### playbackRate

设置倍速播放

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html)

```tsx
(rate: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rate | `number` | 倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速 |

### requestBackgroundPlayback

进入后台音频播放模式。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestBackgroundPlayback.html)

```tsx
() => void
```

### requestFullScreen

进入全屏

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestFullScreen.html)

```tsx
(option: RequestFullScreenOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `RequestFullScreenOption` |

### seek

跳转到指定位置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html)

```tsx
(position: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| position | `number` | 跳转到的位置，单位 s |

### sendDanmu

发送弹幕

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html)

```tsx
(data: Danmu) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `Danmu` | 弹幕内容 |

### showStatusBar

显示状态栏，仅在iOS全屏下有效

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html)

```tsx
() => void
```

### stop

停止视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.stop.html)

```tsx
() => void
```

## 参数

### ExitPictureInPictureOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### RequestFullScreenOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| direction | 0 or 90 or -90 | 否 | 设置全屏时视频的方向，不指定则根据宽高比自动判断。<br /><br />可选值：<br />- 0: 正常竖向;<br />- 90: 屏幕逆时针90度;<br />- -90: 屏幕顺时针90度; |

### Danmu

弹幕内容

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| text | `string` | 是 | 弹幕文字 |
| color | `string` | 否 | 弹幕颜色 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| VideoContext | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.exitBackgroundPlayback | ✔️ |  |  |  |  | ✔️ |
| VideoContext.exitFullScreen | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.exitPictureInPicture | ✔️ |  |  |  |  |  |
| VideoContext.hideStatusBar | ✔️ |  |  |  |  |  |
| VideoContext.pause | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.play | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.playbackRate | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.requestBackgroundPlayback | ✔️ |  |  |  |  | ✔️ |
| VideoContext.requestFullScreen | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.seek | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| VideoContext.sendDanmu | ✔️ |  |  |  |  |  |
| VideoContext.showStatusBar | ✔️ |  |  |  |  |  |
| VideoContext.stop | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |

---

## docs/apis/media/video-decoder/createVideoDecoder.md

---
title: Taro.createVideoDecoder()
sidebar_label: createVideoDecoder
---

创建视频解码器，可逐帧获取解码后的数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/wx.createVideoDecoder.html)

## 类型

```tsx
() => VideoDecoder
```

---

## docs/apis/media/video-decoder/VideoDecoder.md

---
title: VideoDecoder
sidebar_label: VideoDecoder
---

## 方法

### getFrameData

获取下一帧的解码数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.getFrameData.html)

```tsx
() => Promise<Result>
```

### off

取消监听录制事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.off.html)

```tsx
(eventName: keyof EventName, callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `keyof EventName` | 事件名 |
| callback | `Callback` | 事件触发时执行的回调函数 |

### on

注册监听录制事件的回调函数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.on.html)

```tsx
(eventName: keyof EventName, callback: Callback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `keyof EventName` | 事件名 |
| callback | `Callback` | 事件触发时执行的回调函数 |

### remove

移除解码器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.remove.html)

```tsx
() => Promise<void>
```

### seek

跳到某个时间点解码

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.seek.html)

```tsx
(position: number) => Promise<void>
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| position | `number` | 跳转的解码位置，单位 ms |

### start

开始解码

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.start.html)

```tsx
(option: Option) => Promise<void>
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### stop

停止解码

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.stop.html)

```tsx
() => Promise<void>
```

## 参数

### getFrameData

#### Result

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 帧数据宽度 |
| height | `number` | 帧数据高度 |
| data | `ArrayBuffer` | 帧数据 |
| pkPts | `number` | 帧原始 pts |
| pkDts | `number` | 帧原始 dts |

### on

#### EventName

eventName 的合法值

| 参数 | 说明 |
| --- | --- |
| start | 开始事件。返回 {width, height} |
| stop | 结束事件。 |
| seek | seek 完成事件。 |
| bufferchange | 缓冲区变化事件。 |
| ended | 解码结束事件。 |

#### Callback

事件触发时执行的回调函数

```tsx
(res: { width: number; height: number; }) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `{ width: number; height: number; }` |

### start

#### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| source | `string` |  | 是 | 需要解码的视频源文件。 |
| mode | `number` | `1` | 否 | 解码模式。0：按 pts 解码；1：以最快速度解码 |
| abortAudio | `boolean` | `false` | 否 | 是否不需要音频轨道 |
| abortVideo | `boolean` | `false` | 否 | 是否不需要视频轨道 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VideoDecoder.getFrameData | ✔️ |  |  |  |  |
| VideoDecoder.off | ✔️ |  |  |  |  |
| VideoDecoder.on | ✔️ |  |  |  |  |
| VideoDecoder.remove | ✔️ |  |  |  |  |
| VideoDecoder.seek | ✔️ |  |  |  |  |
| VideoDecoder.start | ✔️ |  |  |  |  |
| VideoDecoder.stop | ✔️ |  |  |  |  |

---

## docs/apis/media/video-processing/createMediaContainer.md

---
title: Taro.createMediaContainer()
sidebar_label: createMediaContainer
---

创建音视频处理容器，最终可将容器中的轨道合成一个视频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/wx.createMediaContainer.html)

## 类型

```tsx
() => MediaContainer
```

---

## docs/apis/media/video-processing/MediaContainer.md

---
title: MediaContainer
sidebar_label: MediaContainer
---

创建音视频处理容器，最终可将容器中的轨道合成一个视频

> 可通过 [Taro.createMediaContainer](./createMediaContainer) 创建

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html)

## 方法

### addTrack

将音频或视频轨道添加到容器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.addTrack.html)

```tsx
(track: MediaTrack) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| track | `MediaTrack` | 要添加的音频或视频轨道 |

### destroy

将容器销毁，释放资源

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.destroy.html)

```tsx
() => void
```

### export

将容器内的轨道合并并导出视频文件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.export.html)

```tsx
() => void
```

### extractDataSource

将传入的视频源分离轨道。不会自动将轨道添加到待合成的容器里。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html)

```tsx
(option: ExtractDataSourceOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ExtractDataSourceOption` |

### removeTrack

将音频或视频轨道从容器中移除

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.removeTrack.html)

```tsx
(track: MediaTrack) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| track | `MediaTrack` | 要移除的音频或视频轨道 |

## 参数

### ExtractDataSourceOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| source | `string` | 视频源地址，只支持本地文件 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| MediaContainer | ✔️ |  |  |  |  |
| MediaContainer.addTrack | ✔️ |  |  |  |  |
| MediaContainer.destroy | ✔️ |  |  |  |  |
| MediaContainer.export | ✔️ |  |  |  |  |
| MediaContainer.extractDataSource | ✔️ |  |  |  |  |
| MediaContainer.removeTrack | ✔️ |  |  |  |  |

---

## docs/apis/media/video-processing/MediaTrack.md

---
title: MediaTrack
sidebar_label: MediaTrack
---

可通过 [MediaContainer.extractDataSource](/docs/apis/media/video-processing/MediaContainer#extractdatasource) 返回。
[MediaTrack](/docs/apis/media/video-processing/MediaTrack) 音频或视频轨道，可以对轨道进行一些操作

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html)

## 方法

| 参数 | 类型 | 只读 | 说明 |
| --- | --- | :---: | --- |
| kind | `keyof Kind` | 是 | 轨道类型 |
| duration | `number` | 是 | 轨道长度 |
| volume | `number` | 否 | 音量，音频轨道下有效，可写 |

## 参数

### Kind

| 参数 | 说明 |
| --- | --- |
| audio | 音频轨道 |
| video | 视频轨道 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| MediaTrack | ✔️ |  |  |  |  |

---

