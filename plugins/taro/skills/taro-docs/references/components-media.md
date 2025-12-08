## docs/components/media/animation-video.md

---
title: AnimationVideo
sidebar_label: AnimationVideo
---

透明视频动画

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/animation-video/)

## 类型

```tsx
ComponentType<AnimationVideoProps>
```

## AnimationVideoProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| resourceWidth | `number` | `800` | 否 | 组件使用的 video 视频资源的宽度（单位：px） |
| resourceHeight | `number` | `400` | 否 | 组件使用的 video 视频资源的高度（单位：px） |
| canvasStyle | `string` | `"width: 400px;height: 400px"` | 否 | 用于设置动画画布的 CSS 样式 |
| path | `string` |  | 否 | 动画资源地址，支持相对路径以及远程地址。如果是远程路径，注意 response header 里需要设置 Access-Control-Allow-Origin 来防止跨域问题 |
| loop | `boolean` | `false` | 否 | 动画是否循环播放 |
| autoplay | `boolean` | `false` | 否 | 动画是否自动播放 |
| alphaDirection | `string` | `"left"` | 否 | 视频资源中 alpha 通道的方向，left 表示 alpha 通道在资源的左边，right 表示 alpha 通道在资源的右边。详情请参考透明视频设计资源示例 |
| onStarted | `CommonEventFunction` |  | 否 | 动画开始播放的回调 |
| onEnded | `CommonEventFunction` |  | 否 | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及暂停动画不会触发） |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AnimationVideoProps.resourceWidth |  | ✔️ |  |  |  |
| AnimationVideoProps.resourceHeight |  | ✔️ |  |  |  |
| AnimationVideoProps.canvasStyle |  | ✔️ |  |  |  |
| AnimationVideoProps.path |  | ✔️ |  |  |  |
| AnimationVideoProps.loop |  | ✔️ |  |  |  |
| AnimationVideoProps.autoplay |  | ✔️ |  |  |  |
| AnimationVideoProps.alphaDirection |  | ✔️ |  |  |  |
| AnimationVideoProps.onStarted |  | ✔️ |  |  |  |
| AnimationVideoProps.onEnded |  | ✔️ |  |  |  |

---

## docs/components/media/animation-view.md

---
title: AnimationView
sidebar_label: AnimationView
---

Lottie 动画

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/animation-view-Lottie/)

## 类型

```tsx
ComponentType<AnimationViewProps>
```

## AnimationViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| path | `string` |  | 否 | 动画资源地址，目前只支持绝对路径 |
| loop | `boolean` | `false` | 否 | 动画是否循环播放 |
| autoplay | `boolean` | `true` | 否 | 动画是否自动播放 |
| action | "play" or "pause" or "stop" | `"play"` | 否 | 动画操作，可取值 play、pause、stop |
| hidden | `boolean` | `true` | 否 | 是否隐藏动画 |
| onEnded | `CommonEventFunction` |  | 否 | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发） |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AnimationViewProps.path |  | ✔️ |  |  |  |
| AnimationViewProps.loop |  | ✔️ |  |  |  |
| AnimationViewProps.autoplay |  | ✔️ |  |  |  |
| AnimationViewProps.action |  | ✔️ |  |  |  |
| AnimationViewProps.hidden |  | ✔️ |  |  |  |
| AnimationViewProps.onEnded |  | ✔️ |  |  |  |

---

## docs/components/media/ar-camera.md

---
title: ArCamera
sidebar_label: ArCamera
---

AR 相机

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/media_ar-camera/)

## 类型

```tsx
ComponentType<ArCameraProps>
```

## ArCameraProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| key | `string` |  | 否 | AR 项目唯一标识，在 DuMixAR 内容开放平台上传生成 AR 项目后获取 AR Key |
| type | "0" or "5" or "8" |  | 否 | AR 相机类型，在 DuMixAR 内容开放平台上传生成 AR 项目后获取 AR Type：<br />2D 跟踪类型：0<br />SLAM 类型：5<br />IMU 类型：8 |
| flash | "auto" or "on" or "off" | `"off"` | 否 | 闪光灯，值为 auto、on、off |
| onError | `CommonEventFunction` |  | 否 | 用户不允许使用摄像头或扫码失败时触发 |
| onLoad | `CommonEventFunction` |  | 否 | AR 加载成功时触发 |
| onMessage | `CommonEventFunction` |  | 否 | 开发者制作 AR 项目时可自定义按键，用户点击时会收到事件和数据，用户自定义事件格式参见代码示例 2：用户自定义事件 |
| onScanCode | `CommonEventFunction` |  | 否 | 扫描识图结束后触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ArCameraProps.key |  | ✔️ |  |  |  |
| ArCameraProps.type |  | ✔️ |  |  |  |
| ArCameraProps.flash |  | ✔️ |  |  |  |
| ArCameraProps.onError |  | ✔️ |  |  |  |
| ArCameraProps.onLoad |  | ✔️ |  |  |  |
| ArCameraProps.onMessage |  | ✔️ |  |  |  |
| ArCameraProps.onScanCode |  | ✔️ |  |  |  |

---

## docs/components/media/audio.md

---
title: Audio
sidebar_label: Audio
---

音频。1.6.0版本开始，该组件不再维护。建议使用能力更强的 Taro.createInnerAudioContext 接口

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html)

## 类型

```tsx
ComponentType<AudioProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <Audio
          src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
          controls={true}
          autoplay={false}
          loop={false}
          muted={true}
          initialTime='30'
          id='video'
        />
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <audio
      id="video"
      src="https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
      :controls="true"
      :autoplay="false"
      :loop="false"
      :muted="true"
    />
  </view>
</template>
```
</TabItem>
</Tabs>

## AudioProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| id | `string` |  | 否 | audio 组件的唯一标识符 |
| src | `string` |  | 否 | 要播放音频的资源地址 |
| loop | `boolean` | `false` | 否 | 是否循环播放 |
| muted | `boolean` | `false` | 否 | 是否静音播放 |
| controls | `boolean` | `false` | 否 | 是否显示默认控件 |
| poster | `string` |  | 否 | 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效 |
| name | `string` | `"未知音频"` | 否 | 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效 |
| author | `string` | `"未知作者"` | 否 | 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code} |
| onPlay | `CommonEventFunction` |  | 否 | 当开始/继续播放时触发play事件 |
| onPause | `CommonEventFunction` |  | 否 | 当暂停播放时触发 pause 事件 |
| onTimeUpdate | `CommonEventFunction<onTimeUpdateEventDetail>` |  | 否 | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} |
| onEnded | `CommonEventFunction` |  | 否 | 当播放到末尾时触发 ended 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | QQ 小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| AudioProps.id | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| AudioProps.src | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.loop | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.muted |  |  |  | ✔️ |  |  | ✔️ |  |
| AudioProps.controls | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.poster | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| AudioProps.name | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| AudioProps.author | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| AudioProps.nativeProps |  |  |  | ✔️ |  |  | ✔️ |  |
| AudioProps.onError | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.onPlay | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.onPause | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.onTimeUpdate | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| AudioProps.onEnded | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

### onErrorEventDetail

| 参数 | 类型 |
| --- | --- |
| errMsg | `keyof Code` |

### onTimeUpdateEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| currentTime | `number` | 当前时间 |
| duration | `number` | 持续时间 |

### MediaError

#### Code

| 参数 | 说明 |
| --- | --- |
| 1 | 获取资源被用户禁止 |
| 2 | 网络错误 |
| 3 | 解码错误 |
| 4 | 不合适资源 |

---

## docs/components/media/camera.md

---
title: Camera
sidebar_label: Camera
---

系统相机

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)

## 类型

```tsx
ComponentType<CameraProps>
```

## CameraProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| mode | `keyof Mode` | `"normal"` | 否 | 模式，有效值为normal, scanCode |
| resolution | `keyof Resolution` | `"medium"` | 否 | 分辨率，不支持动态修改 |
| devicePosition | `keyof DevicePosition` | `"back"` | 否 | 摄像头朝向 |
| flash | `keyof Flash` | `"auto"` | 否 | 闪光灯 |
| frameSize | `keyof FrameSize` | `"medium"` | 否 | 指定期望的相机帧数据尺寸 |
| outputDimension | "360P" or "540P" or "720P" or "1080P" or "max" | `"720P"` | 否 | 相机拍照，录制的分辨率。 |
| onStop | `CommonEventFunction` |  | 否 | 摄像头在非正常终止时触发，<br />如退出后台等情况 |
| onError | `CommonEventFunction` |  | 否 | 用户不允许使用摄像头时触发 |
| onInitDone | `CommonEventFunction<onInitDoneEventDetail>` |  | 否 | 相机初始化完成时触发 |
| onReady | `CommonEventFunction<onInitDoneEventDetail>` |  | 否 | 相机初始化成功时触发。 |
| onScanCode | `CommonEventFunction<onScanCodeEventDetail>` |  | 否 | 在成功识别到一维码时触发，<br />仅在 mode="scanCode" 时生效 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CameraProps.mode | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |
| CameraProps.resolution | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| CameraProps.devicePosition | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| CameraProps.flash | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| CameraProps.frameSize | ✔️ |  | ✔️ | ✔️ |  |  |  |  |  |  |
| CameraProps.outputDimension |  |  | ✔️ |  |  |  |  |  |  |  |
| CameraProps.onStop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| CameraProps.onError | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| CameraProps.onInitDone | ✔️ |  |  | ✔️ |  |  |  | ✔️ |  | ✔️ |
| CameraProps.onReady |  |  | ✔️ |  |  |  |  |  |  |  |
| CameraProps.onScanCode | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |  |

### Mode

mode 的合法值

| 参数 | 说明 |
| --- | --- |
| normal | 相机模式 |
| scanCode | 扫码模式 |

### Resolution

resolution 的合法值

| 参数 | 说明 |
| --- | --- |
| low | 低 |
| medium | 中 |
| high | 高 |

### DevicePosition

device-position 的合法值

| 参数 | 说明 |
| --- | --- |
| front | 前置 |
| back | 后置 |

### Flash

flash 的合法值

| 参数 | 说明 |
| --- | --- |
| auto | 自动 |
| on | 打开 |
| off | 关闭 |
| torch | 常亮 |

### FrameSize

frame-size 的合法值

| 参数 | 说明 |
| --- | --- |
| small | 小尺寸帧数据 |
| medium | 中尺寸帧数据 |
| large | 大尺寸帧数据 |

### onInitDoneEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| maxZoom | `number` | 最大变焦 |

### onScanCodeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| charSet | `string` | 字符集 |
| rawData | `string` | 原始数据 |
| type | `string` | 码类型 |
| result | `string` | 识别结果 |
| fullResult | `string` | 识别结果(完整) |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| onScanCodeEventDetail.rawData | ✔️ |  |  |  |  |  |
| onScanCodeEventDetail.fullResult |  | ✔️ |  |  |  |  |

---

## docs/components/media/channel-live.md

---
title: ChannelLive
sidebar_label: ChannelLive
---

小程序内嵌视频号直播组件，展示视频号直播状态和封面，并无弹窗跳转至视频号。注意：使用该组件打开的视频号视频需要与小程序的主体一致。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html)

## 类型

```tsx
ComponentType<ChannelLiveProps>
```

## ChannelLiveProps

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| feedId | `string` | 视频 feedId |
| finderUserName | `string` | 视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ChannelLiveProps.feedId | ✔️ |  |  |  |
| ChannelLiveProps.finderUserName | ✔️ |  |  |  |

---

## docs/components/media/channel-video.md

---
title: ChannelVideo
sidebar_label: ChannelVideo
---

小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号。注意：使用该组件打开的视频号视频需要与小程序相同主体或关联主体。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html)

## 类型

```tsx
ComponentType<ChannelVideoProps>
```

## ChannelVideoProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| feedId | `string` |  | 是 | 仅视频号视频与小程序同主体时生效。若内嵌非同主体视频，请使用 feed-token。 |
| finderUserName | `string` |  | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。 |
| loop | `boolean` | `false` | 否 | 是否循环播放 |
| muted | `boolean` | `false` | 否 | 是否静音播放 |
| objectFit | "fill" or "contain" or "cover" | `"contain"` | 否 | 当视频大小与 video 容器大小不一致时，视频的表现形式 |
| autoplay | `boolean` | `false` | 否 | 是否自动播放 |
| feedToken | `string` |  | 否 | 仅内嵌小程序非同主体视频号视频时使用，获取方式参考[本指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/channels-activity.html#feed-token)。 |
| onError | `CommonEventFunction` |  | 否 | 视频播放出错时触发 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ChannelVideoProps.feedId | ✔️ |  |  |  |
| ChannelVideoProps.finderUserName | ✔️ |  |  |  |
| ChannelVideoProps.loop | ✔️ |  |  |  |
| ChannelVideoProps.muted | ✔️ |  |  |  |
| ChannelVideoProps.objectFit | ✔️ |  |  |  |
| ChannelVideoProps.autoplay | ✔️ |  |  |  |
| ChannelVideoProps.feedToken | ✔️ |  |  |  |
| ChannelVideoProps.onError | ✔️ |  |  |  |

---

## docs/components/media/image.md

---
title: Image
sidebar_label: Image
---

图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式以及云文件ID。

**Note:** 为实现小程序的 `mode` 特性，在 H5 组件中使用一个 `div` 容器来对内部的 `img` 进行展示区域的裁剪，因此请勿使用元素选择器来重置 `img` 的样式！

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

## 类型

```tsx
ComponentType<ImageProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <Image
          style='width: 300px;height: 100px;background: #fff;'
          src='nerv_logo.png'
        />
        <Image
          style='width: 300px;height: 100px;background: #fff;'
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        />
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <image
      style="width: 300px;height: 100px;background: #fff;"
      src="nerv_logo.png"
    />
    <image
      style="width: 300px;height: 100px;background: #fff;"
      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
    />
  </view>
</template>
```
</TabItem>
</Tabs>

## ImageProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| src | `string` |  | 是 | 图片资源地址 |
| mode | `keyof Mode` | `"scaleToFill"` | 否 | 图片裁剪、缩放的模式 |
| webp | `boolean` | `false` | 否 | 默认不解析 webP 格式，只支持网络资源 |
| svg | `boolean` | `false` | 否 | 默认不解析 svg 格式，svg 图片只支持 aspectFit |
| lazyLoad | `boolean` | `false` | 否 | 图片懒加载。只针对 page 与 scroll-view 下的 image 有效 |
| showMenuByLongpress | `boolean` | `false` | 否 | 开启长按图片显示识别小程序码菜单 |
| imgProps | `ImgHTMLAttributes<HTMLImageElement>` |  | 否 | 为 img 标签额外增加的属性 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| defaultSource | `string` |  | 否 | 默认图片地址，若设置默认图片地址，会先显示默认图片，等 src 对应的图片加载成功后，再渲染对应的图片。 |
| imageMenuPrevent | `string` |  | 否 | 阻止长按图片时弹起默认菜单（即将该属性设置为image-menu-prevent="true"或image-menu-prevent），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性。注：长按菜单后的操作暂不支持 svg 格式 |
| preview | `string` |  | 否 | 点击后是否预览图片。在不设置的情况下，若 image 未监听点击事件且宽度大于 1/4 屏宽，则默认开启 |
| originalSrc | `string` |  | 否 | 预览时显示的图片地址 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| fadeIn | `boolean` | `false` | 否 | 是否渐显 |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 当错误发生时，发布到 AppService 的事件名，事件对象 |
| onLoad | `CommonEventFunction<onLoadEventDetail>` |  | 否 | 当图片载入完毕时，发布到 AppService 的事件名，事件对象 |
| onTap | `CommonEventFunction` |  | 否 | 点击图片时触发。 |
| catchTap | `CommonEventFunction` |  | 否 | 点击图片时触发，阻止事件冒泡。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ImageProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ImageProps.mode | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(部分支持 scaleToFill, aspectFit, aspectFill, widthFix) | ✔️(部分支持 scaleToFill, aspectFit, aspectFill, widthFix, heightFix) | ✔️ | ✔️ |
| ImageProps.webp | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ImageProps.svg |  |  |  |  |  |  |  | ✔️ |  |  |  |
| ImageProps.lazyLoad | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ | ✔️ |
| ImageProps.showMenuByLongpress | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ImageProps.imgProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| ImageProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| ImageProps.defaultSource |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ImageProps.imageMenuPrevent |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ImageProps.preview |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ImageProps.originalSrc |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ImageProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ImageProps.fadeIn | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ImageProps.onError | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ImageProps.onLoad | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ImageProps.onTap |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ImageProps.catchTap |  |  | ✔️ |  |  |  |  |  |  |  |  |

### Mode

mode 的合法值

| 参数 | 说明 |
| --- | --- |
| scaleToFill | 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 |
| aspectFill | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFix | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变 |
| heightFix | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变 |
| top | 裁剪模式，不缩放图片，只显示图片的顶部区域 |
| bottom | 裁剪模式，不缩放图片，只显示图片的底部区域 |
| center | 裁剪模式，不缩放图片，只显示图片的中间区域 |
| left | 裁剪模式，不缩放图片，只显示图片的左边区域 |
| right | 裁剪模式，不缩放图片，只显示图片的右边区域 |
| top left | 裁剪模式，不缩放图片，只显示图片的左上边区域 |
| top right | 裁剪模式，不缩放图片，只显示图片的右上边区域 |
| bottom left | 裁剪模式，不缩放图片，只显示图片的左下边区域 |
| bottom right | 裁剪模式，不缩放图片，只显示图片的右下边区域 |

### onErrorEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### onLoadEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| height | string or number | 图片高度 |
| width | string or number | 图片宽度 |

---

## docs/components/media/live-player.md

---
title: LivePlayer
sidebar_label: LivePlayer
---

实时音视频播放。相关api：Taro.createLivePlayerContext

需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)

## 类型

```tsx
ComponentType<LivePlayerProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
class App extends Components {
  render () {
    return (
      <LivePlayer src='url' mode='live' autoplay  />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <live-player src="url" mode="live" :autoplay="true"  />
</template>
```
</TabItem>
</Tabs>

## LivePlayerProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| src | `string` |  | 否 | 音视频地址。目前仅支持 flv, rtmp 格式 |
| mode | `keyof Mode` | `"live"` | 否 | 模式 |
| autoplay | `boolean` | `false` | 否 | 自动播放 |
| muted | `boolean` | `false` | 否 | 是否静音 |
| orientation | `keyof Orientation` | `"vertical"` | 否 | 画面方向 |
| objectFit | `keyof objectFit` | `"contain"` | 否 | 填充模式 |
| backgroundMute | `boolean` | `false` | 否 | 进入后台时是否静音（已废弃，默认退台静音）<br />**不推荐使用** |
| minCache | `number` | `1` | 否 | 最小缓冲区，单位s |
| maxCache | `number` | `3` | 否 | 最大缓冲区，单位s |
| soundMode | `keyof soundMode` | `"speaker"` | 否 | 声音输出方式 |
| autoPauseIfNavigate | `boolean` | `true` | 否 | 当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放 |
| pictureInPictureMode | "" or "push" or "pop" or ("push" or "pop")[] |  | 否 | 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） |
| autoPauseIfOpenNative | `boolean` | `true` | 否 | 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放 |
| referrerPolicy | "origin" or "no-referrer" | `'no-referrer'` | 否 | 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html ，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； |
| signature | `string` |  | 否 | 设置署名水印 |
| enableMetadata | `string` |  | 否 | 是否回调metadata |
| id | `string` |  | 否 | live-player 属性的唯一标志符 |
| enableAutoRotation | `boolean` | `false` | 否 | 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效 |
| enableCasting | `boolean` | `false` | 否 | 是否支持投屏。开启后，可以通过 LivePlayerContext 上相关方法进行操作。 |
| onStateChange | `CommonEventFunction<onStateChangeEventDetail>` |  | 否 | 播放状态变化事件，detail = {code} |
| onFullScreenChange | `CommonEventFunction<onFullScreenChangeEventDetail>` |  | 否 | 全屏变化事件，detail = {direction, fullScreen} |
| onNetStatus | `CommonEventFunction<onNetStatusEventDetail>` |  | 否 | 网络状态通知，detail = {info} |
| onAudioVolumeNotify | `CommonEventFunction<{}>` |  | 否 | 播放音量大小通知，detail = {} |
| onEnterPictureInPicture | `CommonEventFunction` |  | 否 | 播放器进入小窗 |
| onLeavePictureInPicture | `CommonEventFunction` |  | 否 | 播放器退出小窗 |
| onError | `CommonEventFunction` |  | 否 | 播放错误事件 |
| onMetaDataChange | `CommonEventFunction` |  | 否 | metadata通知，detail = {info} |
| onCastingUserSelect | CommonEventFunction<{ state: "success" or "fail"; }> |  | 否 | 用户选择投屏设备时触发 detail = { state: "success"/"fail" } |
| onCastingStateChange | CommonEventFunction<{ type: any; state: "success" or "fail"; }> |  | 否 | 投屏成功/失败时触发 detail = { type, state: "success"/"fail" } |
| onCastingInterrupt | `CommonEventFunction` |  | 否 | 投屏被中断时触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LivePlayerProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.mode | ✔️ |  |  | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.autoplay | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.muted | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.orientation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.objectFit | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.backgroundMute | ✔️ | ✔️ |  |  |  |  |  |  |
| LivePlayerProps.minCache | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| LivePlayerProps.maxCache | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| LivePlayerProps.soundMode | ✔️ |  |  | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.autoPauseIfNavigate | ✔️ |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.pictureInPictureMode | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.autoPauseIfOpenNative | ✔️ |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.referrerPolicy | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.signature |  |  | ✔️ |  |  |  |  |  |
| LivePlayerProps.enableMetadata |  |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.id |  | ✔️ |  |  |  |  |  |  |
| LivePlayerProps.enableAutoRotation | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.enableCasting | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onStateChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.onFullScreenChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.onNetStatus | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| LivePlayerProps.onAudioVolumeNotify | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onEnterPictureInPicture | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onLeavePictureInPicture | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onError |  |  | ✔️ |  |  |  |  |  |
| LivePlayerProps.onMetaDataChange |  |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.onCastingUserSelect | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onCastingStateChange | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onCastingInterrupt | ✔️ |  |  |  |  |  |  |  |

### Mode

mode 的合法值

| 参数 | 说明 |
| --- | --- |
| live | 直播 |
| RTC | 实时通话，该模式时延更低 |

### Orientation

orientation 的合法值

| 参数 | 说明 |
| --- | --- |
| vertical | 竖直 |
| horizontal | 水平 |

### objectFit

objectFit 的合法值

| 参数 | 说明 |
| --- | --- |
| contain | 图像长边填满屏幕，短边区域会被填充⿊⾊ |
| fillCrop | 图像铺满屏幕，超出显示区域的部分将被截掉 |

### soundMode

soundMode 的合法值

| 参数 | 说明 |
| --- | --- |
| speaker | 扬声器 |
| ear | 听筒 |

### onStateChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | `number` | 状态码 |

### onFullScreenChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| direction | `number` | 方向 |
| fullScreen | number or boolean | 全屏 |

### onNetStatusEventDetail

| 参数 | 类型 |
| --- | --- |
| info | `NetStatus` |

### Status

状态码

| 参数 | 说明 |
| --- | --- |
| 2001 | 已经连接服务器 |
| 2002 | 已经连接 RTMP 服务器,开始拉流 |
| 2003 | 网络接收到首个视频数据包(IDR) |
| 2004 | 视频播放开始 |
| 2005 | 视频播放进度 |
| 2006 | 视频播放结束 |
| 2007 | 视频播放Loading |
| 2008 | 解码器启动 |
| 2009 | 视频分辨率改变 |
| -2301 | 网络断连，且经多次重连抢救无效，更多重试请自行重启播放 |
| -2302 | 获取加速拉流地址失败 |
| 2101 | 当前视频帧解码失败 |
| 2102 | 当前音频帧解码失败 |
| 2103 | 网络断连, 已启动自动重连 |
| 2104 | 网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀 |
| 2105 | 当前视频播放出现卡顿 |
| 2106 | 硬解启动失败，采用软解 |
| 2107 | 当前视频帧不连续，可能丢帧 |
| 2108 | 当前流硬解第一个I帧失败，SDK自动切软解 |
| 3001 | RTMP -DNS解析失败 |
| 3002 | RTMP服务器连接失败 |
| 3003 | RTMP服务器握手失败 |
| 3005 | RTMP 读/写失败 |

---

## docs/components/media/live-pusher.md

---
title: LivePusher
sidebar_label: LivePusher
---

实时音视频录制。需要用户授权 scope.camera、scope.record
需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)

## 类型

```tsx
ComponentType<LivePusherProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
class App extends Components {
  render () {
    return (
      <LivePusher url='url' mode='RTC' autopush  />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <live-pusher url="url" mode="RTC" :autopush="true"  />
</template>
```
</TabItem>
</Tabs>

## LivePusherProps

实时音视频录制。
需要用户授权 scope.camera、scope.record
暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| url | `string` |  | 否 | 推流地址。目前仅支持 rtmp 格式 |
| mode | "SD" or "HD" or "FHD" or "RTC" | `"RTC"` | 否 | SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话） |
| autopush | `boolean` | `false` | 否 | 自动推流 |
| enableVideoCustomRender | `boolean` | `false` | 否 | 自定义渲染，允许开发者自行处理所采集的视频帧 |
| muted | `boolean` | `false` | 否 | 是否静音。即将废弃，可用 enable-mic 替代<br />**不推荐使用** |
| enableCamera | `boolean` | `true` | 否 | 开启摄像头 |
| autoFocus | `boolean` | `true` | 否 | 自动聚集 |
| orientation | `keyof Orientation` | `"vertical"` | 否 | 画面方向 |
| beauty | `number` | `0` | 否 | 美颜，取值范围 0-9 ，0 表示关闭 |
| whiteness | `number` | `0` | 否 | 美白，取值范围 0-9 ，0 表示关闭 |
| aspect | "9:16" or "3:4" | `"9:16"` | 否 | 宽高比，可选值有 3:4, 9:16 |
| minBitrate | `number` | `200` | 否 | 最小码率 |
| maxBitrate | `number` | `1000` | 否 | 最大码率 |
| audioQuality | `string` | `"high"` | 否 | 高音质(48KHz)或低音质(16KHz)，值为high, low |
| waitingImage | `string` |  | 否 | 进入后台时推流的等待画面 |
| waitingImageHash | `string` |  | 否 | 等待画面资源的MD5值 |
| zoom | `boolean` | `false` | 否 | 调整焦距 |
| devicePosition | `string` | `"front"` | 否 | 前置或后置，值为front, back |
| backgroundMute | `boolean` | `false` | 否 | 进入后台时是否静音 |
| mirror | `boolean` | `false` | 否 | 设置推流画面是否镜像，产生的效果在 LivePlayer 反应到 |
| remoteMirror | `boolean` | `false` | 否 | 设置推流画面是否镜像，产生的效果在 LivePlayer 反应到<br /><br />**Note:** 同 mirror 属性，后续 mirror 将废弃 |
| localMirror | `keyof LocalMirror` | `"auto"` | 否 | 控制本地预览画面是否镜像 |
| audioReverbType | `keyof AudioReverbType` | `0` | 否 | 音频混响类型 |
| enableMic | `boolean` | `true` | 否 | 开启或关闭麦克风 |
| enableAgc | `boolean` | `false` | 否 | 是否开启音频自动增益 |
| enableAns | `boolean` | `false` | 否 | 是否开启音频噪声抑制 |
| audioVolumeType | `keyof AudioVolumeType` | `"voicecall"` | 否 | 音量类型 |
| videoWidth | `number` | `360` | 否 | 上推的视频流的分辨率宽度 |
| videoHeight | `number` | `640` | 否 | 上推的视频流的分辨率高度 |
| beautyStyle | `keyof BeautyStyleType` | `smooth` | 否 | 设置美颜类型 |
| filter | `keyof FilterType` | `standard` | 否 | 设置色彩滤镜 |
| pictureInPictureMode | string or any[] |  | 否 | 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） |
| customEffect | `boolean` | `false` | 否 | 是否启动自定义特效，设定后不能更改 |
| skinWhiteness | `number` | `0` | 否 | 自定义特效美白效果，取值 0~1。需要开启 custom-effect |
| skinSmoothness | `number` | `0` | 否 | 自定义特效磨皮效果，取值 0~1。需要开启 custom-effect |
| faceThinness | `number` | `0` | 否 | 自定义特效瘦脸效果，取值 0~1。需要开启 custom-effect |
| eyeBigness | `number` | `0` | 否 | 自定义特效大眼效果，取值 0~1。需要开启 custom-effect |
| voiceChangerType | `number` | `0` | 否 | 0：关闭变声；1：熊孩子；2：萝莉；3：大叔；4：重金属；6：外国人；7：困兽；8：死肥仔；9：强电流；10：重机械；11：空灵 |
| fps | `number` | `15` | 否 | 帧率，有效值为 1~30 |
| onStateChange | `CommonEventFunction<onStateChangeEventDetail>` |  | 否 | 状态变化事件，detail = {code} |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 渲染错误事件，detail = {errMsg, errCode} |
| onBgmProgress | `CommonEventFunction<onBgmProgressEventDetail>` |  | 否 | 背景音进度变化时触发，detail = {progress, duration} |
| onBgmComplete | `CommonEventFunction` |  | 否 | 背景音播放完成时触发 |
| onAudioVolumeNotify | `CommonEventFunction` |  | 否 | 返回麦克风采集的音量大小 |
| onNetStatus | `CommonEventFunction` |  | 否 | 网络状态通知，detail = {info} |
| onEnterPictureInPicture | `string` |  | 否 | 进入小窗 |
| onLeavePictureInPicture | `string` |  | 否 | 退出小窗 |
| onBgmStart | `CommonEventFunction` |  | 否 | 背景音开始播放时触发 |

### API 支持度

| API | 微信小程序 | QQ 小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LivePusherProps.url | ✔️ | ✔️ |  |  |  |
| LivePusherProps.mode | ✔️ | ✔️ |  |  |  |
| LivePusherProps.autopush | ✔️ | ✔️ |  |  |  |
| LivePusherProps.enableVideoCustomRender | ✔️ |  |  |  |  |
| LivePusherProps.muted | ✔️ | ✔️ |  |  |  |
| LivePusherProps.enableCamera | ✔️ | ✔️ |  |  |  |
| LivePusherProps.autoFocus | ✔️ | ✔️ |  |  |  |
| LivePusherProps.orientation | ✔️ | ✔️ |  |  |  |
| LivePusherProps.beauty | ✔️ | ✔️ |  |  |  |
| LivePusherProps.whiteness | ✔️ | ✔️ |  |  |  |
| LivePusherProps.aspect | ✔️ | ✔️ |  |  |  |
| LivePusherProps.minBitrate | ✔️ | ✔️ |  |  |  |
| LivePusherProps.maxBitrate | ✔️ | ✔️ |  |  |  |
| LivePusherProps.audioQuality | ✔️ | ✔️ |  |  |  |
| LivePusherProps.waitingImage | ✔️ | ✔️ |  |  |  |
| LivePusherProps.waitingImageHash | ✔️ | ✔️ |  |  |  |
| LivePusherProps.zoom | ✔️ | ✔️ |  |  |  |
| LivePusherProps.devicePosition | ✔️ | ✔️ |  |  |  |
| LivePusherProps.backgroundMute | ✔️ | ✔️ |  |  |  |
| LivePusherProps.mirror | ✔️ | ✔️ |  |  |  |
| LivePusherProps.remoteMirror | ✔️ |  |  |  |  |
| LivePusherProps.localMirror | ✔️ |  |  |  |  |
| LivePusherProps.audioReverbType | ✔️ | ✔️ |  |  |  |
| LivePusherProps.enableMic | ✔️ |  |  |  |  |
| LivePusherProps.enableAgc | ✔️ |  |  |  |  |
| LivePusherProps.enableAns | ✔️ |  |  |  |  |
| LivePusherProps.audioVolumeType | ✔️ |  |  |  |  |
| LivePusherProps.videoWidth | ✔️ |  |  |  |  |
| LivePusherProps.videoHeight | ✔️ |  |  |  |  |
| LivePusherProps.beautyStyle | ✔️ |  |  |  |  |
| LivePusherProps.filter | ✔️ |  |  |  |  |
| LivePusherProps.pictureInPictureMode | ✔️ |  |  |  |  |
| LivePusherProps.customEffect | ✔️ |  |  |  |  |
| LivePusherProps.skinWhiteness | ✔️ |  |  |  |  |
| LivePusherProps.skinSmoothness | ✔️ |  |  |  |  |
| LivePusherProps.faceThinness | ✔️ |  |  |  |  |
| LivePusherProps.eyeBigness | ✔️ |  |  |  |  |
| LivePusherProps.voiceChangerType | ✔️ |  |  |  |  |
| LivePusherProps.fps | ✔️ |  |  |  |  |
| LivePusherProps.onStateChange | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onError | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onBgmProgress | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onBgmComplete | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onAudioVolumeNotify | ✔️ |  |  |  |  |
| LivePusherProps.onNetStatus | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onEnterPictureInPicture | ✔️ |  |  |  |  |
| LivePusherProps.onLeavePictureInPicture | ✔️ |  |  |  |  |
| LivePusherProps.onBgmStart | ✔️ | ✔️ |  |  |  |

### Orientation

orientation 的合法值

| 参数 | 说明 |
| --- | --- |
| vertical | 竖直 |
| horizontal | 水平 |

### LocalMirror

localMirror 的合法值

| 参数 | 说明 |
| --- | --- |
| auto | 前置摄像头镜像，后置摄像头不镜像 |
| enable | 前后置摄像头均镜像 |
| disable | 前后置摄像头均不镜像 |

### AudioReverbType

audioReverbType 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 关闭 |
| 1 | KTV |
| 2 | 小房间 |
| 3 | 大会堂 |
| 4 | 低沉 |
| 5 | 洪亮 |
| 6 | 金属声 |
| 7 | 磁性 |

### AudioVolumeType

audioVolumeType 的合法值

| 参数 | 说明 |
| --- | --- |
| auto | 自动 |
| media | 媒体音量 |
| voicecall | 通话音量 |

### BeautyStyleType

beautyStyleType 的合法值

| 参数 | 说明 |
| --- | --- |
| smooth | 光滑美颜 |
| nature | 自然美颜 |

### FilterType

filterType 的合法值

| 参数 | 说明 |
| --- | --- |
| standard | 标准 |
| pink | 粉嫩 |
| nostalgia | 怀旧 |
| blues | 蓝调 |
| romantic | 浪漫 |
| cool | 清凉 |
| fresher | 清新 |
| solor | 日系 |
| aestheticism | 唯美 |
| whitening | 美白 |
| cerisered | 樱红 |

### onStateChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | `number` | 状态码 |

### onNetstatusEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| info | `NetStatus` | 网络状态 |

### onErrorEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | string or number | 错误码 |

### onBgmProgressEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| progress | `any` | 进展 |
| duration | `number` | 持续时间 |

---

## docs/components/media/lottie.md

---
title: Lottie
sidebar_label: Lottie
---

Lottie

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/component/lottie)

## 类型

```tsx
ComponentType<LottieProps>
```

## LottieProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| autoplay | `boolean` | `false` | 否 | 是否自动播放。 |
| path | `string` |  | 否 | Lottie 资源地址。包含近端（包内地址）和远端（网络）的 JSON 文件地址。<br />与 djangoId 二选一。 |
| speed | `number` | `1.0` | 否 | 播放速度。正数为正向播放，负数负向播放。 |
| repeatCount | `number` | `0` | 否 | 循环次数。<br /><br />如果是负数表示无限次。<br />如果是 0 表示不循环，播放一次。<br />如果是 1 表示循环一次，播放两次。 |
| autoReverse | `boolean` | `false` | 否 | 是否自动回播。 |
| assetsPath | `string` |  | 否 | 资源地址。"/" 表明是小程序根目录。 |
| placeholder | `string` |  | 否 | 兜底图或者降级图地址。<br /><br />1. 支持本地资源，案例：'/image/lottie/lottie2_default.png'。<br />支持 http 的 cdn 地址、近端地址。<br />小程序场景不支持 djangoId。 |
| md5 | `string` |  | 否 | 在线资源的 md5 校验。<br />djangoId=https://b.zip。<br />可以使用 b.zip 加密 获取 md5 值<br />md5="77c6c86fc89ba94cc0a9271b77ae77d2" |
| optimize | `boolean` | `false` | 否 | 降级。降级是指如遇低端设备，Lottie 会降级展示为 placeholder。<br />当 optimize 为 true ，并且传入了 placeholder 时，在低端设备上只会展示 placeholder，不展示 Lottie。<br />低端设备如下所示：<br /><br />iOS ：小于等于 iPhone6P<br />Android：内存容量小于 3G |
| onDataReady | `CommonEventFunction` |  | 否 | 当数据下载+视图创建完成时触发。 |
| onDataFailed | `CommonEventFunction` |  | 否 | 数据加载失败时触发。 |
| onAnimationStart | `CommonEventFunction` |  | 否 | 动画开始时触发。 |
| onAnimationEnd | `CommonEventFunction` |  | 否 | 动画结束时触发。 |
| onAnimationRepeat | `CommonEventFunction` |  | 否 | 动画一次重播结束。 |
| onAnimationCancel | `CommonEventFunction` |  | 否 | 动画取消。业务调用 Cancel 时回调。 |
| onDataLoadReady | `CommonEventFunction` |  | 否 | 参数化时，数据准备完成，等待业务传入参数化值。 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LottieProps.autoplay |  | ✔️ |  |  |  |
| LottieProps.path |  | ✔️ |  |  |  |
| LottieProps.speed |  | ✔️ |  |  |  |
| LottieProps.repeatCount |  | ✔️ |  |  |  |
| LottieProps.autoReverse |  | ✔️ |  |  |  |
| LottieProps.assetsPath |  | ✔️ |  |  |  |
| LottieProps.placeholder |  | ✔️ |  |  |  |
| LottieProps.md5 |  | ✔️ |  |  |  |
| LottieProps.optimize |  | ✔️ |  |  |  |
| LottieProps.onDataReady |  | ✔️ |  |  |  |
| LottieProps.onDataFailed |  | ✔️ |  |  |  |
| LottieProps.onAnimationStart |  | ✔️ |  |  |  |
| LottieProps.onAnimationEnd |  | ✔️ |  |  |  |
| LottieProps.onAnimationRepeat |  | ✔️ |  |  |  |
| LottieProps.onAnimationCancel |  | ✔️ |  |  |  |
| LottieProps.onDataLoadReady |  | ✔️ |  |  |  |

---

## docs/components/media/rtc-room-item.md

---
title: RtcRoomItem
sidebar_label: RtcRoomItem
---

实时音视频通话画面

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/media_rtc-room-item/)

## 类型

```tsx
ComponentType<RtcRoomItemProps>
```

## RtcRoomItemProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| id | `string` | 否 | rtc-room-item 组件的唯一标识符 |
| type | `string` | 否 | 指定 item 展示本地 / 远端画面，有效值：local、remote ，不可动态变更 |
| userId | `number` | 否 | item 展示画面的用户 id |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| RtcRoomItemProps.id |  | ✔️ |  |  |  |
| RtcRoomItemProps.type |  | ✔️ |  |  |  |
| RtcRoomItemProps.userId |  | ✔️ |  |  |  |

---

## docs/components/media/rtc-room.md

---
title: RtcRoom
sidebar_label: RtcRoom
---

实时音视频通话房间

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/media_rtc-room/)

## 类型

```tsx
ComponentType<RtcRoomProps>
```

## RtcRoomProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| id | `string` |  | 否 | rtc-room 组件的唯一标识符 |
| enableCamera | `boolean` | `true` | 否 | 是否开启摄像头 |
| enableAutoFocus | `boolean` | `true` | 否 | 是否开启摄像头自动对焦 |
| enableZoom | `boolean` | `false` | 否 | 是否支持双手滑动调整摄像头聚焦 |
| devicePosition | "front" or "back" | `"front"` | 否 | 设置前置还是后置摄像头，有效值：front、back |
| enableMic | `boolean` | `true` | 否 | 是否开启麦克风 |
| enableAgc | `boolean` | `false` | 否 | 是否开启音频自动增益 |
| enableAns | `boolean` | `false` | 否 | 是否开启音频噪声抑制 |
| bitrate | `number` | `900` | 否 | 最大码率 |
| videoWidth | `number` | `360` | 否 | 视频分辨率宽 |
| videoHeight | `number` | `640` | 否 | 视频分辨率高 |
| enableRemoteMirror | `boolean` | `false` | 否 | 设置远端看到的画面的镜像效果，该属性的变化不会影响到本地画面，仅影响远端看到的画面效果 |
| localMirror | "auto" or "enable" or "disable" | `"auto"` | 否 | 设置本地摄像头预览画面的镜像效果，有效值：auto、enable、disable |
| soundMode | "speaker" or "ear" | `"speaker"` | 否 | 设置声音输出方式，有效值：speaker、ear |
| onStateChange | `CommonEventFunction` |  | 否 | 房间状态变化事件，参考下方状态码，detail = { code, msg, userInfo } |
| onError | `CommonEventFunction` |  | 否 | 错误事件。参考下方错误码，detail = { errMsg, errCode } |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| RtcRoomProps.id |  | ✔️ |  |  |  |
| RtcRoomProps.enableCamera |  | ✔️ |  |  |  |
| RtcRoomProps.enableAutoFocus |  | ✔️ |  |  |  |
| RtcRoomProps.enableZoom |  | ✔️ |  |  |  |
| RtcRoomProps.devicePosition |  | ✔️ |  |  |  |
| RtcRoomProps.enableMic |  | ✔️ |  |  |  |
| RtcRoomProps.enableAgc |  | ✔️ |  |  |  |
| RtcRoomProps.enableAns |  | ✔️ |  |  |  |
| RtcRoomProps.bitrate |  | ✔️ |  |  |  |
| RtcRoomProps.videoWidth |  | ✔️ |  |  |  |
| RtcRoomProps.videoHeight |  | ✔️ |  |  |  |
| RtcRoomProps.enableRemoteMirror |  | ✔️ |  |  |  |
| RtcRoomProps.localMirror |  | ✔️ |  |  |  |
| RtcRoomProps.soundMode |  | ✔️ |  |  |  |
| RtcRoomProps.onStateChange |  | ✔️ |  |  |  |
| RtcRoomProps.onError |  | ✔️ |  |  |  |

---

