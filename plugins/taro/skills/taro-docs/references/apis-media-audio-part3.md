## docs/apis/media/recorder/RecorderManager.md

---
title: RecorderManager
sidebar_label: RecorderManager
---

全局唯一的录音管理器

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html)

## 方法

### onError

监听录音错误事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnErrorCallback` | 录音错误事件的回调函数 |

### onFrameRecorded

监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)

```tsx
(callback: OnFrameRecordedCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnFrameRecordedCallback` | 已录制完指定帧大小的文件事件的回调函数 |

### onInterruptionBegin

监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音因为受到系统占用而被中断开始事件的回调函数 |

### onInterruptionEnd

监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音中断结束事件的回调函数 |

### onPause

监听录音暂停事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onPause.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音暂停事件的回调函数 |

### onResume

监听录音继续事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onResume.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音继续事件的回调函数 |

### onStart

监听录音开始事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStart.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音开始事件的回调函数 |

### onStop

监听录音结束事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStop.html)

```tsx
(callback: OnStopCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnStopCallback` | 录音结束事件的回调函数 |

### pause

暂停录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.pause.html)

```tsx
() => void
```

### resume

继续录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.resume.html)

```tsx
() => void
```

### start

开始录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html)

```tsx
(option: StartOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StartOption` |

### stop

停止录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.stop.html)

```tsx
() => void
```

## 参数

### OnErrorCallback

录音错误事件的回调函数

```tsx
(result: OnErrorCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnErrorCallbackResult` |

### OnErrorCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### OnFrameRecordedCallback

已录制完指定帧大小的文件事件的回调函数

```tsx
(result: OnFrameRecordedCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnFrameRecordedCallbackResult` |

### OnFrameRecordedCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer` | 录音分片数据 |
| isLastFrame | `boolean` | 当前帧是否正常录音结束前的最后一帧 |

### OnStopCallback

录音结束事件的回调函数

```tsx
(result: OnStopCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnStopCallbackResult` |

### OnStopCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| duration | `number` | 录音总时长，单位：ms |
| fileSize | `number` | 录音文件大小，单位：Byte |
| tempFilePath | `string` | 录音文件的临时路径 |

### StartOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| audioSource | `keyof AudioSource` | 否 | 指定录音的音频输入源，可通过 [Taro.getAvailableAudioSources()](/docs/apis/media/audio/getAvailableAudioSources) 获取当前可用的音频源 |
| duration | `number` | 否 | 录音的时长，单位 ms，最大值 600000（10 分钟） |
| encodeBitRate | `number` | 否 | 编码码率，有效值见下表格 |
| format | `keyof Format` | 否 | 音频格式 |
| frameSize | `number` | 否 | 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 |
| numberOfChannels | `keyof NumberOfChannels` | 否 | 录音通道数 |
| sampleRate | `keyof SampleRate` | 否 | 采样率 |

### AudioSource

指定录音的音频输入源

| 参数 | 说明 |
| --- | --- |
| auto | 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用 |
| buildInMic | 手机麦克风，仅限 iOS |
| headsetMic | 耳机麦克风，仅限 iOS |
| mic | 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android |
| camcorder | 同 mic，适用于录制音视频内容，仅限 Android |
| voice_communication | 同 mic，适用于实时沟通，仅限 Android |
| voice_recognition | 同 mic，适用于语音识别，仅限 Android |

### Format

音频格式

| 参数 | 说明 |
| --- | --- |
| mp3 | mp3 格式 |
| aac | aac 格式 |
| wav | wav 格式 |
| PCM | pcm 格式 |

### NumberOfChannels

录音通道数

| 参数 | 说明 |
| --- | --- |
| 1 | 1 个通道 |
| 2 | 2 个通道 |

### SampleRate

采样率

| 参数 | 说明 | 编码码率 |
| --- | --- | --- |
| 8000 | 8000 采样率 | `16000 ~ 48000` |
| 11025 | 11025 采样率 | `16000 ~ 48000` |
| 12000 | 12000 采样率 | `24000 ~ 64000` |
| 16000 | 16000 采样率 | `24000 ~ 96000` |
| 22050 | 22050 采样率 | `32000 ~ 128000` |
| 24000 | 24000 采样率 | `32000 ~ 128000` |
| 32000 | 32000 采样率 | `48000 ~ 192000` |
| 44100 | 44100 采样率 | `64000 ~ 320000` |
| 48000 | 48000 采样率 | `64000 ~ 320000` |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RecorderManager.onError | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.onFrameRecorded | ✔️ | ✔️ |  |  |  |  |
| RecorderManager.onInterruptionBegin | ✔️ |  |  |  |  |  |
| RecorderManager.onInterruptionEnd | ✔️ |  |  |  |  |  |
| RecorderManager.onPause | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.onResume | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.onStart | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.onStop | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.pause | ✔️ |  |  | ✔️ |  | ✔️ |
| RecorderManager.resume | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.start | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| RecorderManager.stop | ✔️ | ✔️ |  | ✔️ |  | ✔️ |

---

## docs/apis/media/recorder/startRecord.md

---
title: Taro.startRecord(option)
sidebar_label: startRecord
---

开始录音。当主动调用`Taro.stopRecord`，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。
**注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.getRecorderManager](/docs/apis/media/recorder/getRecorderManager) 接口**
需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.record

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html)

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
| tempFilePath | `string` | 录音文件的临时路径 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.startRecord({
  success: function (res) {
    const tempFilePath = res.tempFilePath
  }
})
setTimeout(function () {
  Taro.stopRecord() // 结束录音
}, 10000)
```

---

## docs/apis/media/recorder/stopRecord.md

---
title: Taro.stopRecord(option)
sidebar_label: stopRecord
---

停止录音。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html)

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

## 示例代码

```tsx
Taro.startRecord({
  success: function (res) {
    var tempFilePath = res.tempFilePath
  },
  fail: function (res) {
     //录音失败
  }
})
setTimeout(function() {
  //结束录音
  Taro.stopRecord()
}, 10000)
```

---

## docs/apis/media/voip/exitVoIPChat.md

---
title: Taro.exitVoIPChat(option)
sidebar_label: exitVoIPChat
---

退出（销毁）实时语音通话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.exitVoIPChat.html)

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

## docs/apis/media/voip/join1v1Chat.md

---
title: Taro.join1v1Chat(option)
sidebar_label: join1v1Chat
---

加入（创建）双人通话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.join1v1Chat.html)

## 类型

```tsx
(option: Option) => Promise<Promised>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Caller

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| nickname | `string` | 是 | 昵称 |
| headImage | `string` | 否 | 头像 |
| openid | `string` | 是 | 小程序内 openid |

### Listener

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| nickname | `string` | 是 | 昵称 |
| headImage | `string` | 否 | 头像 |
| openid | `string` | 是 | 小程序内 openid |

### RoomType

| 参数 | 说明 |
| --- | --- |
| voice | 语音通话 |
| video | 视频通话 |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| caller | `Caller` |  | 是 | 呼叫方信息 |
| listener | `Listener` |  | 是 | 接听方信息 |
| backgroundType | `keyof ColorType` | `0` | 否 | 窗口背景色 |
| roomType | `keyof RoomType` |  | 否 | 通话类型 |
| minWindowType | `keyof ColorType` | `1` | 否 | 小窗样式 |
| disableSwitchVoice | `boolean` | `false` | 否 | 不允许切换到语音通话 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### ChatErrCode

| 参数 | 说明 |
| --- | --- |
| -20000 | 未开通双人通话 |
| -20001 | 当前设备不支持 |
| -20002 | 正在通话中 |
| -20003 | 其它小程序正在通话中 |
| -30000 | 内部系统错误 |
| -30001 | 微信缺失相机权限 |
| -30002 | 微信缺失录音权限 |
| -30003 | 小程序缺失录音权限 |
| -30004 | 小程序缺失相机权限 |
| -1 | 当前已在房间内 |
| -2 | 录音设备被占用，可能是当前正在使用微信内语音通话或系统通话 |
| -3 | 加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败 |
| -1000 | 系统错误 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `keyof ChatErrCode` | 错误码 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### Promised

```tsx
FailCallbackResult | SuccessCallbackResult
```

---

## docs/apis/media/voip/joinVoIPChat.md

---
title: Taro.joinVoIPChat(option)
sidebar_label: joinVoIPChat
---

加入 (创建) 实时语音通话，更多信息可见 [实时语音指南](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/voip-chat.html)

调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html)

## 类型

```tsx
(option: Option) => Promise<Promised>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Promised

```tsx
FailCallbackResult | SuccessCallbackResult
```

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| roomType | `RoomType` | `"voice"` | 否 | 房间类型 |
| signature | `string` |  | 是 | 签名，用于验证小游戏的身份 |
| nonceStr | `string` |  | 是 | 验证所需的随机字符串 |
| timeStamp | `number` |  | 是 | 验证所需的时间戳 |
| groupId | `string` |  | 是 | 小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间。 |
| muteConfig | `MuteConfig` |  | 否 | 静音设置 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### RoomType

房间类型

| 参数 | 说明 |
| --- | --- |
| voice | 音频房间，用于语音通话 |
| video | 视频房间，结合 [voip-room](/docs/components/media/voip-room) 组件可显示成员画面 |

### MuteConfig

静音设置

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| muteMicrophone | `boolean` | 否 | 是否静音麦克风 |
| muteEarphone | `boolean` | 否 | 是否静音耳机 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | `keyof VoipErrCode` | 错误码 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| openIdList | `string[]` | 还在实时语音通话中的成员 openId 名单 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### VoipErrCode

Voip 错误码

| 参数 | 说明 |
| --- | --- |
| -1 | 当前已在房间内 |
| -2 | 录音设备被占用，可能是当前正在使用微信内语音通话或系统通话 |
| -3 | 加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败 |
| -1000 | 系统错误 |

---

## docs/apis/media/voip/offVoIPChatInterrupted.md

---
title: Taro.offVoIPChatInterrupted(callback)
sidebar_label: offVoIPChatInterrupted
---

取消监听被动断开实时语音通话事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatInterrupted.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

---

## docs/apis/media/voip/offVoIPChatMembersChanged.md

---
title: Taro.offVoIPChatMembersChanged(callback)
sidebar_label: offVoIPChatMembersChanged
---

取消监听实时语音通话成员在线状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatMembersChanged.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

---

## docs/apis/media/voip/offVoIPChatSpeakersChanged.md

---
title: Taro.offVoIPChatSpeakersChanged(callback)
sidebar_label: offVoIPChatSpeakersChanged
---

取消监听实时语音通话成员通话状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatSpeakersChanged.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

---

## docs/apis/media/voip/offVoIPChatStateChanged.md

---
title: Taro.offVoIPChatStateChanged(callback)
sidebar_label: offVoIPChatStateChanged
---

取消监听房间状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatStateChanged.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

---

## docs/apis/media/voip/offVoIPVideoMembersChanged.md

---
title: Taro.offVoIPVideoMembersChanged(callback)
sidebar_label: offVoIPVideoMembersChanged
---

取消监听实时语音通话成员视频状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPVideoMembersChanged.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `Callback` |

---

## docs/apis/media/voip/onVoIPChatInterrupted.md

---
title: Taro.onVoIPChatInterrupted(callback)
sidebar_label: onVoIPChatInterrupted
---

监听被动断开实时语音通话事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatInterrupted.html)

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
| openIdList | `string[]` | 还在实时语音通话中的成员 openId 名单 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### Callback

房间状态变化事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

---

## docs/apis/media/voip/onVoIPChatMembersChanged.md

---
title: Taro.onVoIPChatMembersChanged(callback)
sidebar_label: onVoIPChatMembersChanged
---

监听实时语音通话成员在线状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatMembersChanged.html)

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
| openIdList | `string[]` | 还在实时语音通话中的成员 openId 名单 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### Callback

房间状态变化事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

---

## docs/apis/media/voip/onVoIPChatSpeakersChanged.md

---
title: Taro.onVoIPChatSpeakersChanged(callback)
sidebar_label: onVoIPChatSpeakersChanged
---

监听实时语音通话成员通话状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html)

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
| openIdList | `string[]` | 还在实时语音通话中的成员 openId 名单 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### Callback

房间状态变化事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

---

## docs/apis/media/voip/onVoIPChatStateChanged.md

---
title: Taro.onVoIPChatStateChanged(callback)
sidebar_label: onVoIPChatStateChanged
---

监听房间状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatStateChanged.html)

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
| code | `number` | 事件码 |
| data | `Record<any, any>` | 附加信息 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### Callback

房间状态变化事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

---

## docs/apis/media/voip/onVoIPVideoMembersChanged.md

---
title: Taro.onVoIPVideoMembersChanged(callback)
sidebar_label: onVoIPVideoMembersChanged
---

监听实时语音通话成员视频状态变化事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPVideoMembersChanged.html)

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
| openIdList | `string[]` | 开启视频的成员名单 |
| errCode | `number` | 错误码 |
| errMsg | `string` | 调用结果 |

### Callback

实时语音通话成员视频状态变化事件的回调函数

```tsx
(res: Result) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `Result` |

---

## docs/apis/media/voip/setEnable1v1Chat.md

---
title: Taro.setEnable1v1Chat(option)
sidebar_label: setEnable1v1Chat
---

开启双人通话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.setEnable1v1Chat.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| enable | `boolean` |  | 是 | 是否开启 |
| backgroundType | `keyof ColorType` | `0` | 否 | 窗口背景色 |
| minWindowType | `keyof ColorType` | `1` | 否 | 小窗样式 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### ColorType

音频通话背景以及小窗模式背景

| 参数 | 说明 |
| --- | --- |
| 0 | #262930 |
| 1 | #FA5151 |
| 2 | #FA9D3B |
| 3 | #3D7257 |
| 4 | #1485EE |
| 5 | #6467F0 |

---

## docs/apis/media/voip/subscribeVoIPVideoMembers.md

---
title: Taro.subscribeVoIPVideoMembers(option)
sidebar_label: subscribeVoIPVideoMembers
---

订阅视频画面成员

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.subscribeVoIPVideoMembers.html)

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
| openIdList | `string[]` | 是 | 订阅的成员列表 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/media/voip/updateVoIPChatMuteConfig.md

---
title: Taro.updateVoIPChatMuteConfig(option)
sidebar_label: updateVoIPChatMuteConfig
---

更新实时语音静音设置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.updateVoIPChatMuteConfig.html)

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
| muteConfig | `MuteConfig` | 是 | 静音设置 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### MuteConfig

静音设置

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| muteMicrophone | `boolean` | 否 | 是否静音麦克风 |
| muteEarphone | `boolean` | 否 | 是否静音耳机 |

---

