## docs/apis/media/audio/WebAudioContext.md

---
title: WebAudioContext
sidebar_label: WebAudioContext
---

WebAudioContext 实例，通过 [Taro.createWebAudioContext](./createWebAudioContext) 接口获取该实例。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| state | `string` | 当前 WebAudio 上下文的状态。<br /><br />可能的值如下：suspended（暂停）、running（正在运行）、closed（已关闭）。<br />需要注意的是，不要在 audioContext close 后再访问 state 属性 |
| onstatechange | `() => void` | 可写属性，开发者可以对该属性设置一个监听函数，当 WebAudio 状态改变的时候，会触发开发者设置的监听函数。 |
| currentTime | `number` | 获取当前上下文的时间戳。 |
| destination | `WebAudioContextNode` | 当前上下文的最终目标节点，一般是音频渲染设备。 |
| listener | `AudioListener` | 空间音频监听器。 |
| sampleRate | `number` | 采样率，通常在 8000-96000 之间，通常 44100hz 的采样率最为常见。 |

### close

关闭WebAudioContext

**注意事项**
同步关闭对应的 WebAudio 上下文。close 后会立即释放当前上下文的资源，**不要在 close 后再次访问 state 属性**。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.close.html)

```tsx
() => Promise<void>
```

#### 示例代码

```tsx
const audioCtx = Taro.createWebAudioContext()
audioCtx.close().then(() => {
  console.log(audioCtx.state) // bad case：不应该在close后再访问state
})
```

### resume

同步恢复已经被暂停的 WebAudioContext 上下文

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.resume.html)

```tsx
() => Promise<void>
```

### suspend

同步暂停 WebAudioContext 上下文

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.suspend.html)

```tsx
() => Promise<void>
```

### createIIRFilter

创建一个 IIRFilterNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createIIRFilter.html)

```tsx
(feedforward: number[], feedback: number[]) => IIRFilterNode
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| feedforward | `number[]` | 一个浮点值数组，指定IIR滤波器传递函数的前馈(分子)系数。 |
| feedback | `number[]` | 一个浮点值数组，指定IIR滤波器传递函数的反馈(分母)系数。 |

#### 示例代码

```tsx
let lowPassCoefs = [
  {
    frequency: 200,
    feedforward: [0.00020298, 0.0004059599, 0.00020298],
    feedback: [1.0126964558, -1.9991880801, 0.9873035442]
  },
  {
    frequency: 500,
    feedforward: [0.0012681742, 0.0025363483, 0.0012681742],
    feedback: [1.0317185917, -1.9949273033, 0.9682814083]
  },
  {
    frequency: 1000,
    feedforward: [0.0050662636, 0.0101325272, 0.0050662636],
    feedback: [1.0632762845, -1.9797349456, 0.9367237155]
  },
  {
    frequency: 5000,
    feedforward: [0.1215955842, 0.2431911684, 0.1215955842],
    feedback: [1.2912769759, -1.5136176632, 0.7087230241]
  }
]

const feedForward = lowPassCoefs[filterNumber].feedforward
const feedBack = lowPassCoefs[filterNumber].feedback
const iirFilter = audioContext.createIIRFilter(feedForward, feedBack)
```

### createWaveShaper

创建一个 WaveShaperNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createWaveShaper.html)

```tsx
() => WaveShaperNode
```

### createConstantSource

创建一个 ConstantSourceNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createConstantSource.html)

```tsx
() => ConstantSourceNode
```

### createOscillator

创建一个 OscillatorNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createOscillator.html)

```tsx
() => OscillatorNode
```

### createGain

创建一个 GainNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createGain.html)

```tsx
() => GainNode
```

### createPeriodicWave

创建一个 PeriodicWaveNode

**注意**
`real` 和 `imag` 数组必须拥有一样的长度，否则抛出错误

```tsx
const real = new Float32Array(2)
const imag = new Float32Array(2)
real[0] = 0
imag[0] = 0
real[1] = 1
imag[1] = 0

const waveNode = audioContext.createPeriodicWave(real, imag, {disableNormalization: true})
```

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createPeriodicWave.html)

```tsx
(real: Float32Array, imag: Float32Array, constraints: Constraints) => PeriodicWave
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| real | `Float32Array` | 一组余弦项(传统上是A项) |
| imag | `Float32Array` | 一组余弦项(传统上是A项) |
| constraints | `Constraints` | 一个字典对象，它指定是否应该禁用规范化(默认启用规范化) |

### createBiquadFilter

创建一个BiquadFilterNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createBiquadFilter.html)

```tsx
() => BiquadFilterNode
```

### createBufferSource

创建一个 BufferSourceNode 实例，通过 AudioBuffer 对象来播放音频数据。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createBufferSource.html)

```tsx
() => AudioBufferSourceNode
```

### createChannelMerger

创建一个ChannelMergerNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createChannelMerger.html)

```tsx
(numberOfInputs: number) => ChannelMergerNode
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| numberOfInputs | `number` | 输出流中需要保持的输入流的个数 |

### createChannelSplitter

创建一个ChannelSplitterNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createChannelSplitter.html)

```tsx
(numberOfOutputs: number) => ChannelSplitterNode
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| numberOfOutputs | `number` | 要分别输出的输入音频流中的通道数 |

### createDelay

创建一个DelayNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createDelay.html)

```tsx
(maxDelayTime: number) => DelayNode
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| maxDelayTime | `number` | 最大延迟时间 |

#### 示例代码

```tsx
let audioCtx = Taro.createWebAudioContext()
const delayNode = audioCtx.createDelay(5)
```

### createDynamicsCompressor

创建一个DynamicsCompressorNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createDynamicsCompressor.html)

```tsx
() => DynamicsCompressorNode
```

#### 示例代码

```tsx
let audioCtx = Taro.createWebAudioContext()
let compressor = audioCtx.createDynamicsCompressor()

compressor.threshold.value = -50
compressor.knee.value = 40
compressor.ratio.value = 12
compressor.attack.value = 0
compressor.release.value = 0.25
```

### createScriptProcessor

创建一个ScriptProcessorNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createScriptProcessor.html)

```tsx
(bufferSize: number, numberOfInputChannels: number, numberOfOutputChannels: number) => ScriptProcessorNode
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bufferSize | `number` | 缓冲区大小，以样本帧为单位 |
| numberOfInputChannels | `number` | 用于指定输入 node 的声道的数量 |
| numberOfOutputChannels | `number` | 用于指定输出 node 的声道的数量 |

#### 示例代码

```tsx
let audioCtx = Taro.createWebAudioContext()
const sampleSize = 4096
audioContext.createScriptProcessor(sampleSize, 1, 1)
```

### createPanner

创建一个PannerNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createPanner.html)

```tsx
() => PannerNode
```

### createBuffer

创建一个AudioBuffer，代表着一段驻留在内存中的短音频

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createBuffer.html)

```tsx
(numOfChannels: number, length: number, sampleRate: number) => AudioBuffer
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| numOfChannels | `number` | 定义了 buffer 中包含的声频通道数量的整数 |
| length | `number` | 代表 buffer 中的样本帧数的整数 |
| sampleRate | `number` | 线性音频样本的采样率，即每一秒包含的关键帧的个数 |

#### 示例代码

```tsx
const audioCtx = Taro.createWebAudioContext()
const channels = 2, frameCount = audioCtx.sampleRate * 2.0
const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)
```

### decodeAudioData

异步解码一段资源为AudioBuffer。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.decodeAudioData.html)

```tsx
() => AudioBuffer
```

#### 示例代码

```tsx
Taro.request({
  url: url, // 音频 url
  responseType: 'arraybuffer',
  success: res => {
    audioCtx.decodeAudioData(res.data, buffer => {
      console.log(buffer)
    }, err => {
      console.error('decodeAudioData fail', err)
    })
  }
})
```

## 参数

### createPeriodicWave

#### Constraints

字典对象

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| disableNormalization | `boolean` | `false` | 否 | 如果指定为 true 则禁用标准化 |

## 示例代码

监听状态

```tsx
const audioCtx = Taro.createWebAudioContext()
audioCtx.onstatechange = () => {
  console.log(ctx.state)
}
setTimeout(audioCtx.suspend, 1000)
setTimeout(audioCtx.resume, 2000)
```

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| WebAudioContext | ✔️ |  |  |  |  |
| WebAudioContext.close | ✔️ |  |  |  |  |
| WebAudioContext.resume | ✔️ |  |  |  |  |
| WebAudioContext.suspend | ✔️ |  |  |  |  |
| WebAudioContext.createIIRFilter | ✔️ |  |  |  |  |
| WebAudioContext.createWaveShaper | ✔️ |  |  |  |  |
| WebAudioContext.createConstantSource | ✔️ |  |  |  |  |
| WebAudioContext.createOscillator | ✔️ |  |  |  |  |
| WebAudioContext.createGain | ✔️ |  |  |  |  |
| WebAudioContext.createPeriodicWave | ✔️ |  |  |  |  |
| WebAudioContext.createBiquadFilter | ✔️ |  |  |  |  |
| WebAudioContext.createBufferSource | ✔️ |  |  |  |  |
| WebAudioContext.createChannelMerger | ✔️ |  |  |  |  |
| WebAudioContext.createChannelSplitter | ✔️ |  |  |  |  |
| WebAudioContext.createDelay | ✔️ |  |  |  |  |
| WebAudioContext.createDynamicsCompressor | ✔️ |  |  |  |  |
| WebAudioContext.createScriptProcessor | ✔️ |  |  |  |  |
| WebAudioContext.createPanner | ✔️ |  |  |  |  |
| WebAudioContext.createBuffer | ✔️ |  |  |  |  |
| WebAudioContext.decodeAudioData | ✔️ |  |  |  |  |

---

## docs/apis/media/audio/WebAudioContextNode.md

---
title: WebAudioContextNode
sidebar_label: WebAudioContextNode
---

一类音频处理模块，不同的Node具备不同的功能，如GainNode(音量调整)等。一个 WebAudioContextNode 可以通过上下文来创建。

> 目前已经支持以下Node： IIRFilterNode WaveShaperNode ConstantSourceNode ChannelMergerNode OscillatorNode GainNode BiquadFilterNode PeriodicWaveNode BufferSourceNode ChannelSplitterNode ChannelMergerNode DelayNode DynamicsCompressorNode ScriptProcessorNode PannerNode

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContextNode.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| positionX | `number` | 右手笛卡尔坐标系中X轴的位置。 |
| positionY | `number` | 右手笛卡尔坐标系中Y轴的位置。 |
| positionZ | `number` | 右手笛卡尔坐标系中Z轴的位置。 |
| forwardX | `number` | 表示监听器的前向系统在同一笛卡尔坐标系中的水平位置，作为位置（位置x，位置和位置和位置）值。 |
| forwardY | `number` | 表示听众的前向方向在同一笛卡尔坐标系中作为位置（位置x，位置和位置和位置）值的垂直位置。 |
| forwardZ | `number` | 表示与position (positionX、positionY和positionZ)值在同一笛卡尔坐标系下的听者前进方向的纵向(前后)位置。 |
| upX | `number` | 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向前方向的水平位置。 |
| upY | `number` | 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向上方向的水平位置。 |
| upZ | `number` | 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向后方向的水平位置。 |

### setOrientation

设置监听器的方向

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(...args: any[]) => void
```

| 参数 | 类型 |
| --- | --- |
| args | `any[]` |

### setPosition

设置监听器的位置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(...args: any[]) => void
```

| 参数 | 类型 |
| --- | --- |
| args | `any[]` |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| WebAudioContextNode | ✔️ |  |  |  |  |
| WebAudioContextNode.setOrientation | ✔️ |  |  |  |  |
| WebAudioContextNode.setPosition | ✔️ |  |  |  |  |

---

## docs/apis/media/background-audio/BackgroundAudioManager.md

---
title: BackgroundAudioManager
sidebar_label: BackgroundAudioManager
---

BackgroundAudioManager 实例，可通过 [Taro.getBackgroundAudioManager](/docs/apis/media/background-audio/getBackgroundAudioManager) 获取。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html)

## 方法

| 参数 | 类型 | 默认值 | 只读 | 必填 | 说明 |
| --- | --- | :---: | :---: | :---: | --- |
| src | `string` |  | 否 | 是 | 音频的数据源（[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID）。默认为空字符串，**当设置了新的 src 时，会自动开始播放**，目前支持的格式有 m4a, aac, mp3, wav。 |
| startTime | `number` |  | 否 | 是 | 音频开始播放的位置（单位：s）。 |
| title | `string` |  | 否 | 是 | 音频标题，用于原生音频播放器音频标题（必填）。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 |
| epname | `string` |  | 否 | 是 | 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
| singer | `string` |  | 否 | 是 | 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
| coverImgUrl | `string` |  | 否 | 是 | 封面图 URL，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 |
| webUrl | `string` |  | 否 | 是 | 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 |
| protocol | `string` |  | 否 | 是 | 音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频。 |
| playbackRate | `number` | `1` | 否 | 否 | 播放速度。范围 0.5-2.0。 |
| duration | `number` |  | 是 | 是 | 当前音频的长度（单位：s），只有在有合法 src 时返回。 |
| currentTime | `number` |  | 是 | 是 | 当前音频的播放位置（单位：s），只有在有合法 src 时返回。 |
| paused | `boolean` |  | 是 | 是 | 当前是否暂停或停止。 |
| buffered | `number` |  | 是 | 是 | 音频已缓冲的时间，仅保证当前播放时间点到此时间点内容已缓冲。 |
| referrerPolicy | `string` |  | 否 | 否 | origin: 发送完整的 referrer; no-referrer: 不发送 |

### play

播放

```tsx
() => void
```

### pause

暂停

```tsx
() => void
```

### seek

跳转到指定位置，单位 s

```tsx
(position: any) => void
```

### stop

停止

```tsx
() => void
```

### onCanplay

背景音频进入可以播放状态，但不保证后面可以流畅播放

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onWaiting

音频加载中事件，当音频因为数据不足，需要停下来加载时会触发

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onError

背景音频播放错误事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onPlay

背景音频播放事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onPause

背景音频暂停事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onSeeking

背景音频开始跳转操作事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onSeeked

背景音频完成跳转操作事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onEnded

背景音频自然播放结束事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onStop

背景音频停止事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onTimeUpdate

背景音频播放进度更新事件

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onPrev

用户在系统音乐播放面板点击上一曲事件（iOS only）

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

### onNext

用户在系统音乐播放面板点击下一曲事件（iOS only）

```tsx
(callback?: () => void) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

## 示例代码

```tsx
const backgroundAudioManager = Taro.getBackgroundAudioManager()
backgroundAudioManager.title = '此时此刻'
backgroundAudioManager.epname = '此时此刻'
backgroundAudioManager.singer = '许巍'
backgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
// 设置了 src 之后会自动播放
backgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
```

---

## docs/apis/media/background-audio/getBackgroundAudioManager.md

---
title: Taro.getBackgroundAudioManager()
sidebar_label: getBackgroundAudioManager
---

获取**全局唯一**的背景音频管理器。
小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。

从微信客户端6.7.2版本开始，若需要在小程序切后台后继续播放音频，需要在 [app.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html) 中配置 `requiredBackgroundModes` 属性。开发版和体验版上可以直接生效，正式版还需通过审核。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html)

## 类型

```tsx
() => BackgroundAudioManager
```

## 示例代码

```tsx
const backgroundAudioManager = Taro.getBackgroundAudioManager()
backgroundAudioManager.title = '此时此刻'
backgroundAudioManager.epname = '此时此刻'
backgroundAudioManager.singer = '许巍'
backgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
backgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
```

---

## docs/apis/media/background-audio/getBackgroundAudioPlayerState.md

---
title: Taro.getBackgroundAudioPlayerState(option)
sidebar_label: getBackgroundAudioPlayerState
---

获取后台音乐播放状态。
**注意：1.2.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.getBackgroundAudioManager](/docs/apis/media/background-audio/getBackgroundAudioManager) 接口**

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html)

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
| currentPosition | `number` | 选定音频的播放位置（单位：s），只有在音乐播放中时返回 |
| dataUrl | `string` | 歌曲数据链接，只有在音乐播放中时返回 |
| downloadPercent | `number` | 音频的下载进度百分比，只有在音乐播放中时返回 |
| duration | `number` | 选定音频的长度（单位：s），只有在音乐播放中时返回 |
| status | `keyof Status` | 播放状态 |
| errMsg | `string` | 调用结果 |

### Status

| 参数 | 说明 |
| --- | --- |
| 0 | 暂停中 |
| 1 | 播放中 |
| 2 | 没有音乐播放 |

## 示例代码

```tsx
Taro.getBackgroundAudioPlayerState({
  success: function (res) {
    var status = res.status
    var dataUrl = res.dataUrl
    var currentPosition = res.currentPosition
    var duration = res.duration
    var downloadPercent = res.downloadPercent
  }
})
```

---

## docs/apis/media/background-audio/onBackgroundAudioPause.md

---
title: Taro.onBackgroundAudioPause(callback)
sidebar_label: onBackgroundAudioPause
---

监听音乐暂停。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPause.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音乐暂停事件的回调函数 |

---

## docs/apis/media/background-audio/onBackgroundAudioPlay.md

---
title: Taro.onBackgroundAudioPlay(callback)
sidebar_label: onBackgroundAudioPlay
---

监听音乐播放。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPlay.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音乐播放事件的回调函数 |

---

## docs/apis/media/background-audio/onBackgroundAudioStop.md

---
title: Taro.onBackgroundAudioStop(callback)
sidebar_label: onBackgroundAudioStop
---

监听音乐停止。

**bug & tip：**

1.  `bug`: `iOS` `6.3.30` Taro.seekBackgroundAudio 会有短暂延迟

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioStop.html)

## 类型

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 音乐停止事件的回调函数 |

---

## docs/apis/media/background-audio/pauseBackgroundAudio.md

---
title: Taro.pauseBackgroundAudio(option)
sidebar_label: pauseBackgroundAudio
---

暂停播放音乐。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html)

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
Taro.pauseBackgroundAudio()
```

---

## docs/apis/media/background-audio/playBackgroundAudio.md

---
title: Taro.playBackgroundAudio(option)
sidebar_label: playBackgroundAudio
---

使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html)

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
| dataUrl | `string` | 是 | 音乐链接，目前支持的格式有 m4a, aac, mp3, wav |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| coverImgUrl | `string` | 否 | 封面URL |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| title | `string` | 否 | 音乐标题 |

## 示例代码

```tsx
Taro.playBackgroundAudio({
  dataUrl: '',
  title: '',
  coverImgUrl: ''
})
```

---

## docs/apis/media/background-audio/seekBackgroundAudio.md

---
title: Taro.seekBackgroundAudio(option)
sidebar_label: seekBackgroundAudio
---

控制音乐播放进度。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html)

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
| position | `number` | 是 | 音乐位置，单位：秒 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.seekBackgroundAudio({
  position: 30
})
```

---

## docs/apis/media/background-audio/stopBackgroundAudio.md

---
title: Taro.stopBackgroundAudio(option)
sidebar_label: stopBackgroundAudio
---

停止播放音乐。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html)

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
Taro.stopBackgroundAudio()
```

---

## docs/apis/media/recorder/getRecorderManager.md

---
title: Taro.getRecorderManager()
sidebar_label: getRecorderManager
---

获取**全局唯一**的录音管理器 RecorderManager

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html)

## 类型

```tsx
() => RecorderManager
```

## 示例代码

```tsx
const recorderManager = Taro.getRecorderManager()
recorderManager.onStart(() => {
  console.log('recorder start')
})
recorderManager.onPause(() => {
  console.log('recorder pause')
})
recorderManager.onStop((res) => {
  console.log('recorder stop', res)
  const { tempFilePath } = res
})
recorderManager.onFrameRecorded((res) => {
  const { frameBuffer } = res
  console.log('frameBuffer.byteLength', frameBuffer.byteLength)
})
const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}
recorderManager.start(options)
```

---

