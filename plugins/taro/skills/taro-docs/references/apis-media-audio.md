## docs/apis/media/audio/AudioBuffer.md

---
title: AudioBuffer
sidebar_label: AudioBuffer
---

AudioBuffer 接口表示存在内存里的一段短小的音频资源，利用 [WebAudioContext.decodeAudioData](./WebAudioContext#decodeaudiodata) 方法从一个音频文件构建，或者利用 [AudioContext.createBuffer](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/(AudioContext.createBuffer).html) 从原始数据构建。把音频放入 AudioBuffer 后，可以传入到一个 AudioBufferSourceNode 进行播放。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sampleRate | `number` | 存储在缓存区的PCM数据的采样率（单位为sample/s) |
| length | `number` | 返回存储在缓存区的PCM数据的采样帧率 |
| duration | `number` | 返回存储在缓存区的PCM数据的时长（单位为秒） |
| numberOfChannels | `number` | 储存在缓存区的PCM数据的通道数 |

### getChannelData

返回一个 Float32Array，包含了带有频道的PCM数据，由频道参数定义（有0代表第一个频道）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.getChannelData.html)

```tsx
(channel: number) => Float32Array
```

| 参数 | 类型 |
| --- | --- |
| channel | `number` |

#### 示例代码

```tsx
const audioCtx = Taro.createWebAudioContext()
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const nowBuffering = myArrayBuffer.getChannelData(channel);
```

### copyFromChannel

从 AudioBuffer 的指定频道复制到数组终端。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.copyFromChannel.html)

```tsx
() => void
```

#### 示例代码

```tsx
const audioCtx = Taro.createWebAudioContext()
const audioBuffer = audioCtx.createFromAudioFile({
  filePath:'/pages/res/bgm.mp3', // 静态资源
  mixToMono:true,
  sampleRate:44100
});
const channels = audioBuffer.numberOfChannels
const anotherArray = new Float32Array(frameCount);
const rate = audioBuffer.sampleRate
const startOffSet = 0
const endOffset = rate * 3;
const newAudioBuffer = audioCtx.createBuffer(channels,endOffset - startOffset,rate)
const offset = 0

for (let channel = 0; channel < channels; channel++) {
  audioBuffer.copyFromChannel(anotherArray, channel, startOffset);
  newAudioBuffer.copyToChannel(anotherArray, channel, offset);
}
```

### copyToChannel

从指定数组复制样本到 audioBuffer 的特定通道

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.copyToChannel.html)

```tsx
(source: Float32Array, channelNumber: number, startInChannel: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| source | `Float32Array` | 需要复制的源数组 |
| channelNumber | `number` | 需要复制到的目的通道号 |
| startInChannel | `number` | 复制偏移数据量 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AudioBuffer | ✔️ |  |  |  |  |
| AudioBuffer.getChannelData | ✔️ |  |  |  |  |
| AudioBuffer.copyFromChannel | ✔️ |  |  |  |  |
| AudioBuffer.copyToChannel | ✔️ |  |  |  |  |

---

## docs/apis/media/audio/AudioContext.md

---
title: AudioContext
sidebar_label: AudioContext
---

`AudioContext` 实例，可通过 `Taro.createAudioContext` 获取。

`AudioContext` 通过 `id` 跟一个 `audio` 组件绑定，操作对应的 audio 组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html)

## 方法

### pause

暂停音频。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.pause.html)

```tsx
() => void
```

### play

播放音频。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.play.html)

```tsx
() => void
```

### seek

跳转到指定位置。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.seek.html)

```tsx
(position: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| position | `number` | 跳转位置，单位 s |

### setSrc

设置音频地址

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.setSrc.html)

```tsx
(src: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| src | `string` | 音频地址 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| AudioContext | ✔️ |  |  |  | ✔️ | ✔️ |
| AudioContext.pause | ✔️ |  |  |  | ✔️ | ✔️ |
| AudioContext.play | ✔️ |  |  |  | ✔️ | ✔️ |
| AudioContext.seek | ✔️ |  |  |  |  | ✔️ |
| AudioContext.setSrc | ✔️ |  |  |  |  | ✔️ |

---

## docs/apis/media/audio/createAudioContext.md

---
title: Taro.createAudioContext(id, component)
sidebar_label: createAudioContext
---

创建 audio 上下文 AudioContext 对象。
**注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.createInnerAudioContext](./createInnerAudioContext) 接口**

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html)

## 类型

```tsx
(id: string, component?: TaroGeneral.IAnyObject) => AudioContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | [audio](/docs/components/media/audio) 组件的 id |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [audio](/docs/components/media/audio) 组件 |

## 示例代码

```tsx
const audioCtx = Taro.createAudioContext('myAudio')
```

---

## docs/apis/media/audio/createInnerAudioContext.md

---
title: Taro.createInnerAudioContext(option)
sidebar_label: createInnerAudioContext
---

创建内部 audio 上下文 InnerAudioContext 对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html)

## 类型

```tsx
(option?: Option) => InnerAudioContext
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| useWebAudioImplement | `boolean` | 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项。<br />API 支持度: weapp |

## 示例代码

```tsx
const innerAudioContext = Taro.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'https://storage.360buyimg.com/jdrd-blog/27.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
```

---

## docs/apis/media/audio/createMediaAudioPlayer.md

---
title: Taro.createMediaAudioPlayer()
sidebar_label: createMediaAudioPlayer
---

创建媒体音频播放器对象 [MediaAudioPlayer](./MediaAudioPlayer) 对象，可用于播放视频解码器 [VideoDecoder](/docs/apis/media/video-decoder/VideoDecoder) 输出的音频

**注意事项**
- iOS 7.0.15 mediaAudioPlayer 播放网络视频资源会出现音频卡顿，本地视频没有这个问题，将下一个客户端版本修复。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createMediaAudioPlayer.html)

## 类型

```tsx
() => MediaAudioPlayer
```

## 示例代码

```tsx
// 创建视频解码器，具体参数见 createVideoDecoder 文档
const videoDecoder = Taro.createVideoDecoder()
// 创建媒体音频播放器
const mediaAudioPlayer = Taro.createMediaAudioPlayer()
// 启动视频解码器
videoDecoder.start()
// 启动播放器
mediaAudioPlayer.start().then(() => {
  // 添加播放器音频来源
  mediaAudioPlayer.addAudioSource(videoDecoder).then(res => {
    videoDecoder.getFrameData() // 建议在 requestAnimationFrame 里获取每一帧视频数据
    console.log(res)
  })

  // 移除播放器音频来源
  mediaAudioPlayer.removeAudioSource(videoDecoder).then()
  // 停止播放器
  mediaAudioPlayer.stop().then()
  // 销毁播放器
  mediaAudioPlayer.destroy().then()
  // 设置播放器音量
  mediaAudioPlayer.volume = 0.5
})
```

---

## docs/apis/media/audio/createWebAudioContext.md

---
title: Taro.createWebAudioContext()
sidebar_label: createWebAudioContext
---

创建 WebAudio 上下文。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createWebAudioContext.html)

## 类型

```tsx
() => WebAudioContext
```

## 示例代码

一个简单的播放demo

```tsx
const audioCtx = Taro.createWebAudioContext()

const loadAudio = (url) => {
  return new Promise((resolve) => {
    Taro.request({
      url,
      responseType: 'arraybuffer',
      success: res => {
        console.log('res.data', res.data)
        audioCtx.decodeAudioData(res.data, buffer => {
          resolve(buffer)
        }, err => {
          console.error('decodeAudioData fail', err)
          reject()
        })
      },
      fail: res => {
        console.error('request fail', res)
        reject()
      }
    })
  })
}

const play = () => {
  loadAudio('xxx-test.mp3').then(buffer => {
    const source = audioCtx.createBufferSource()
    source.buffer = buffer
    source.connect(audioCtx.destination)
    source.start()
  }).catch(() => {
    console.log('fail')
  })
}

play()
```

---

## docs/apis/media/audio/getAvailableAudioSources.md

---
title: Taro.getAvailableAudioSources(option)
sidebar_label: getAvailableAudioSources
---

获取当前支持的音频输入源

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html)

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
| audioSources | `(keyof audioSources)[]` | 支持的音频输入源列表，可在 [RecorderManager.start()](/docs/apis/media/recorder/RecorderManager#start)用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource |
| errMsg | `string` | 调用结果 |

### audioSources

支持的音频输入源

| 参数 | 说明 |
| --- | --- |
| auto | 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用 |
| buildInMic | 手机麦克风，仅限 iOS |
| headsetMic | 耳机麦克风，仅限 iOS |
| mic | 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android |
| camcorder | 同 mic，适用于录制音视频内容，仅限 Android |
| voice_communication | 同 mic，适用于实时沟通，仅限 Android |
| voice_recognition | 同 mic，适用于语音识别，仅限 Android |

---

## docs/apis/media/audio/InnerAudioContext.md

---
title: InnerAudioContext
sidebar_label: InnerAudioContext
---

InnerAudioContext 实例，可通过 [Taro.createInnerAudioContext](./createInnerAudioContext) 接口获取实例。

**支持格式**

| 格式 | iOS  | Android |
| ---- | ---- | ------- |
| flac | x    | √       |
| m4a  | √    | √       |
| ogg  | x    | √       |
| ape  | x    | √       |
| amr  | x    | √       |
| wma  | x    | √       |
| wav  | √    | √       |
| mp3  | √    | √       |
| mp4  | x    | √       |
| aac  | √    | √       |
| aiff | √    | x       |
| caf  | √    | x       |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html)

## 方法

| 参数 | 类型 | 默认值 | 只读 | 必填 | 说明 |
| --- | --- | :---: | :---: | :---: | --- |
| src | `string` |  | 否 | 是 | 音频资源的地址，用于直接播放。 |
| startTime | `number` | `0` | 否 | 是 | 开始播放的位置（单位：s） |
| autoplay | `boolean` | `false` | 否 | 是 | 是否自动开始播放 |
| loop | `boolean` | `false` | 否 | 是 | 是否循环播放 |
| obeyMuteSwitch | `boolean` | `true` | 否 | 是 | 是否遵循系统静音开关。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [Taro.setInnerAudioOption](/docs/apis/media/audio/setInnerAudioOption) 接口统一设置。 |
| volume | `number` | `1` | 否 | 是 | 音量。范围 0~1。 |
| playbackRate | `number` | `1` | 否 | 是 | 播放速度。范围 0.5-2.0。 |
| duration | `number` |  | 是 | 是 | 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回 |
| currentTime | `number` |  | 是 | 是 | 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位 |
| paused | `boolean` |  | 是 | 是 | 当前是是否暂停或停止状态 |
| buffered | `number` |  | 是 | 是 | 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲 |
| referrerPolicy | `string` |  | 否 | 否 | origin: 发送完整的 referrer; no-referrer: 不发送 |

### play

播放

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

```tsx
() => void
```

### pause

暂停

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
() => void
```

### stop

停止

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

```tsx
() => void
```

### seek

跳转到指定位置，单位 s

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(position: number) => void
```

| 参数 | 类型 |
| --- | --- |
| position | `number` |

### destroy

销毁当前实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
() => void
```

### onCanplay

音频进入可以播放状态，但不保证后面可以流畅播放

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnCanplayCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnCanplayCallback` |

### onPlay

音频播放事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

```tsx
(callback?: OnPlayCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnPlayCallback` |

### onPause

音频暂停事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnPauseCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnPauseCallback` |

### onStop

音频停止事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

```tsx
(callback?: OnStopCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnStopCallback` |

### onEnded

音频自然播放结束事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

```tsx
(callback?: OnEndedCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnEndedCallback` |

### onTimeUpdate

音频播放进度更新事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnTimeUpdateCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnTimeUpdateCallback` |

### onError

音频播放错误事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

```tsx
(callback?: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### onWaiting

音频加载中事件，当音频因为数据不足，需要停下来加载时会触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnWaitingCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnWaitingCallback` |

### onSeeking

音频进行 seek 操作事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnSeekingCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnSeekingCallback` |

### onSeeked

音频完成 seek 操作事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnSeekedCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnSeekedCallback` |

### offCanplay

取消监听 canplay 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnCanplayCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnCanplayCallback` |

### offPlay

取消监听 play 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnPlayCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnPlayCallback` |

### offPause

取消监听 pause 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnPauseCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnPauseCallback` |

### offStop

取消监听 stop 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnStopCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnStopCallback` |

### offEnded

取消监听 ended 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnEndedCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnEndedCallback` |

### offTimeUpdate

取消监听 timeUpdate 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnTimeUpdateCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnTimeUpdateCallback` |

### offError

取消监听 error 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### offWaiting

取消监听 waiting 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnWaitingCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnWaitingCallback` |

### offSeeking

取消监听 seeking 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnSeekingCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnSeekingCallback` |

### offSeeked

取消监听 seeked 事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(callback?: OnSeekedCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnSeekedCallback` |

## 参数

### onErrorDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | `number` | 错误码 |
| errMsg | `string` | 错误信息 |

### onErrorDetailErrCode

| 参数 | 说明 |
| --- | --- |
| 10001 | 系统错误 |
| 10002 | 网络错误 |
| 10003 | 文件错误 |
| 10004 | 格式错误 |
| -1 | 未知错误 |

### OnCanplayCallback

音频进入可以播放状态事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnPlayCallback

音频播放事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnPauseCallback

音频暂停事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnStopCallback

音频停止事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnEndedCallback

音频自然播放结束事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnTimeUpdateCallback

音频播放进度更新事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnErrorCallback

音频播放错误事件的回调函数

```tsx
(res: onErrorDetail) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `onErrorDetail` |

### OnWaitingCallback

音频加载中事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnSeekingCallback

音频进行 seek 操作事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnSeekedCallback

音频完成 seek 操作事件的回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

## 示例代码

```tsx
const innerAudioContext = Taro.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
```

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| InnerAudioContext.play | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InnerAudioContext.pause | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.stop | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InnerAudioContext.seek | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.destroy | ✔️ | ✔️ |  |  |  | ✔️ |
| InnerAudioContext.onCanplay | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.onPlay | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InnerAudioContext.onPause | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.onStop | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InnerAudioContext.onEnded | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InnerAudioContext.onTimeUpdate | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.onError | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InnerAudioContext.onWaiting | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.onSeeking | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.onSeeked | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offCanplay | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offPlay | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offPause | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offStop | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offEnded | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offTimeUpdate | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offError | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offWaiting | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offSeeking | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| InnerAudioContext.offSeeked | ✔️ | ✔️ | ✔️ |  |  | ✔️ |

---

## docs/apis/media/audio/MediaAudioPlayer.md

---
title: MediaAudioPlayer
sidebar_label: MediaAudioPlayer
---

MediaAudioPlayer 实例，可通过 [Taro.createMediaAudioPlayer](./createMediaAudioPlayer) 接口获取实例。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.html)

## 方法

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| volume | `number` | `1` | 音量。范围 0~1 |

### start

启动播放器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.start.html)

```tsx
() => Promise<void>
```

### addAudioSource

添加音频源

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.addAudioSource.html)

```tsx
(source: VideoDecoder) => Promise<void>
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| source | `VideoDecoder` | 视频解码器实例。作为音频源添加到音频播放器中 |

### removeAudioSource

移除音频源

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.removeAudioSource.html)

```tsx
(source: VideoDecoder) => Promise<void>
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| source | `VideoDecoder` | 视频解码器实例 |

### stop

停止播放器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.stop.html)

```tsx
() => Promise<void>
```

### destroy

销毁播放器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.destroy.html)

```tsx
() => Promise<void>
```

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| MediaAudioPlayer | ✔️ |  |  |  |  |
| MediaAudioPlayer.start | ✔️ |  |  |  |  |
| MediaAudioPlayer.addAudioSource | ✔️ |  |  |  |  |
| MediaAudioPlayer.removeAudioSource | ✔️ |  |  |  |  |
| MediaAudioPlayer.stop | ✔️ |  |  |  |  |
| MediaAudioPlayer.destroy | ✔️ |  |  |  |  |

---

## docs/apis/media/audio/pauseVoice.md

---
title: Taro.pauseVoice(option)
sidebar_label: pauseVoice
---

暂停正在播放的语音。再次调用 [Taro.playVoice](/docs/apis/media/audio/stopVoice)。
**注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.createInnerAudioContext](./createInnerAudioContext) 接口**

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html)

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
      Taro.playVoice({
      filePath: tempFilePath
    })
    setTimeout(function() {
        //暂停播放
      Taro.pauseVoice()
    }, 5000)
  }
})
```

---

## docs/apis/media/audio/playVoice.md

---
title: Taro.playVoice(option)
sidebar_label: playVoice
---

开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html)

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
| filePath | `string` | 是 | 需要播放的语音文件的文件路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| duration | `number` | 否 | 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.startRecord({
  success: function (res) {
    const tempFilePath = res.tempFilePath
    Taro.playVoice({
      filePath: tempFilePath,
      complete: function () { }
    })
  }
})
```

---

## docs/apis/media/audio/setInnerAudioOption.md

---
title: Taro.setInnerAudioOption(option)
sidebar_label: setInnerAudioOption
---

设置 [InnerAudioContext](/docs/apis/media/audio/InnerAudioContext)项。设置之后对当前小程序全局生效。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html)

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
| mixWithOther | `boolean` | 否 | 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐 |
| obeyMuteSwitch | `boolean` | 否 | （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/media/audio/stopVoice.md

---
title: Taro.stopVoice(option)
sidebar_label: stopVoice
---

结束播放语音。
**注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.createInnerAudioContext](./createInnerAudioContext) 接口**

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html)

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

### 示例 1

```tsx
Taro.startRecord({
  success: function (res) {
    const filePath = res.tempFilePath
    Taro.playVoice({ filePath })

    setTimeout(Taro.stopVoice, 5000)
  }
})
```

### 示例 2

```tsx
Taro.startRecord(params).then(res => {
  const filePath = res.tempFilePath
  Taro.playVoice({ filePath })

  setTimeout(Taro.stopVoice, 5000)
})
```

---

