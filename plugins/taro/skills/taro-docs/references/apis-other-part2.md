## docs/apis/ai/visionkit/VKFrame.md

---
title: VKFrame
sidebar_label: VKFrame
---

vision kit 会话对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| timestamp | `number` | 生成时间 |
| camera | `VKCamera` | 相机对象 |

### getCameraTexture

获取当前帧纹理，目前只支持 YUV 纹理

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraTexture.html)

```tsx
(ctx: WebGLRenderingContext) => IGetCameraTextureResult
```

| 参数 | 类型 |
| --- | --- |
| ctx | `WebGLRenderingContext` |

### getCameraBuffer

获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。
按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象时必须传入 gl 参数。
此接口仅建议拿来做帧分析使用，上屏请使用 getCameraTexture 来代替。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraBuffer.html)

```tsx
(widht: number, height: number) => ArrayBuffer
```

| 参数 | 类型 |
| --- | --- |
| widht | `number` |
| height | `number` |

### getDisplayTransform

获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getDisplayTransform.html)

```tsx
() => Float32Array
```

## 参数

### IGetCameraTextureResult

帧纹理对象

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| yTexture | `WebGLTexture` | Y 分量纹理 |
| uvTexture | `WebGLTexture` | UV 分量纹理 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKFrame | ✔️ |  |  |  |  |
| VKFrame.getCameraTexture | ✔️ |  |  |  |  |
| VKFrame.getCameraBuffer | ✔️ |  |  |  |  |
| VKFrame.getDisplayTransform | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKHandAnchor.md

---
title: VKHandAnchor
sidebar_label: VKHandAnchor
---

手势 anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKHandAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `7` | 类型 |
| detectId | `number` | 识别序号 |
| size | `ISize` | 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| origin | `IOrigin` | 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| confidence | `number[]` | 关键点的置信度 |
| points | `IPoint[]` | 关键点 |
| score | `number` | 总体置信值 |
| gesture | keyof IGesture or -1 | 手势分类, 返回整数 -1 到 18, -1 表示无效手势 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 7 | 手势 |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IOrigin

相对视窗的位置信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### IPoint

关键点

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### IGesture

手势分类

| 参数 | 说明 |
| --- | --- |
| 0 | 单手比心 |
| 1 | 布（数字5） |
| 2 | 剪刀（数字2） |
| 3 | 握拳 |
| 4 | 数字1 |
| 5 | 热爱 |
| 6 | 点赞 |
| 7 | 数字3 |
| 8 | 摇滚 |
| 9 | 数字6 |
| 10 | 数字8 |
| 11 | 双手抱拳（恭喜发财） |
| 12 | 数字4 |
| 13 | 比ok |
| 14 | 不喜欢（踩） |
| 15 | 双手比心 |
| 16 | 祈祷（双手合十） |
| 17 | 双手抱拳 |
| 18 | 无手势动作 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKHandAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKMarkerAnchor.md

---
title: VKMarkerAnchor
sidebar_label: VKMarkerAnchor
---

marker anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKMarkerAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `1` | 类型 |
| transform | `Float32Array` | 包含位置、旋转、放缩信息的矩阵，以列为主序 |
| markerId | `number` | marker id |
| path | `string` | 图片路径 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 1 | marker |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKMarkerAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKOCRAnchor.md

---
title: VKOCRAnchor
sidebar_label: VKOCRAnchor
---

OCR anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKOCRAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `6` | 类型 |
| text | `string` | 识别的文字结果 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 6 | OCR |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKOCRAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKOSDAnchor.md

---
title: VKOSDAnchor
sidebar_label: VKOSDAnchor
---

OSD anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKOSDAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `2` | 类型 |
| markerId | `number` | marker id |
| size | `ISize` | 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| path | `string` | 图片路径 |
| origin | `IOrigin` | 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 2 | OSD |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IOrigin

相对视窗的位置信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKOSDAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKPlaneAnchor.md

---
title: VKPlaneAnchor
sidebar_label: VKPlaneAnchor
---

平面 anchor，只有 v2 版本支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKPlaneAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `0` | 类型 |
| transform | `Float32Array` | 包含位置、旋转、放缩信息的矩阵，以列为主序 |
| size | `ISize` | 尺寸 |
| alignment | `number` | 方向 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 0 | 平面 |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKPlaneAnchor | ✔️ |  |  |  |  |

---

## docs/apis/ai/visionkit/VKSession.md

---
title: VKSession
sidebar_label: VKSession
---

vision kit 会话对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| state | `keyof IState` | 会话状态 |
| config | `IConfig` | 会话配置 |
| cameraSize | `ISize` | 相机尺寸 |

### addMarker

添加一个 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.addMarker.html)

```tsx
(path: string) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 图片路径，目前只支持本地用户图片 |

### addOSDMarker

添加一个 OSD marker（one-shot detection marker），要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.addOSDMarker.html)

```tsx
(path: string) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 图片路径，目前只支持本地用户图片 |

### cancelAnimationFrame

取消由 requestAnimationFrame 添加到计划中的动画帧请求

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.cancelAnimationFrame.html)

```tsx
(requestID: number) => void
```

| 参数 | 类型 |
| --- | --- |
| requestID | `number` |

### destroy

销毁会话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.destroy.html)

```tsx
() => void
```

### detectBody

静态图像人体关键点检测。当 Taro.createVKSession 参数传入 {track: {body: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectBody.html)

```tsx
(option: IDetectBodyOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectBodyOption` |

### detectDepth

深度识别。当 Taro.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectDepth.html)

```tsx
(option: IDetectDepthOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectDepthOption` |

### detectFace

静态图像人脸关键点检测。当 Taro.createVKSession 参数传入 {track: {face: {mode: 2} } } 时可用。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectFace.html)

```tsx
(option: IDetectFaceOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectFaceOption` |

### detectHand

静态图像手势关键点检测。当 Taro.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectHand.html)

```tsx
(option: IDetectHandOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectHandOption` |

### getAllMarker

获取所有 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getAllMarker.html)

```tsx
() => IMarker[]
```

### getAllOSDMarker

获取所有 OSD marker，要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getAllOSDMarker.html)

```tsx
() => IOSDMarker[]
```

### getVKFrame

获取帧对象，每调用一次都会触发一次帧分析过程

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getVKFrame.html)

```tsx
(width: number, height: number) => VKFrame
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### hitTest

触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。

如果需要重新识别其他平面，可以在调用此方法时将 reset 参数置为 true。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.hitTest.html)

```tsx
(x: number, y: number, reset?: boolean) => IHitTestResult[]
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 相对视窗的横坐标，取值范围为 [0, 1]，0 为左边缘，1 为右边缘 |
| y | `number` | 相对视窗的纵坐标，取值范围为 [0, 1]，0 为上边缘，1 为下边缘 |
| reset | `boolean` | 是否需要重新识别其他平面，v2 版本不再需要此参数 |

### off

取消监听会话事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.off.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

### on

监听会话事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.on.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

### removeMarker

删除一个 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.removeMarker.html)

```tsx
(markerId: number) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |

### removeOSDMarker

删除一个 OSD marker，要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.removeOSDMarker.html)

```tsx
(markerId: number) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |

### requestAnimationFrame

在下次进行重绘时执行。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.requestAnimationFrame.html)

```tsx
(callback: TaroGeneral.TFunc) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `TaroGeneral.TFunc` | 执行函数 |

### runOCR

静态图像 OCR 检测。当 Taro.createVKSession 参数传入 {track: {OCR: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.runOCR.html)

```tsx
(option: IRunOCROption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IRunOCROption` |

### start

开启会话。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.start.html)

```tsx
(callback: (status: keyof IStartStatus) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(status: keyof IStartStatus) => void` | 开启会话回调 |

### stop

停止会话。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.stop.html)

```tsx
() => void
```

### update3DMode

开启 3D 模式

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.update3DMode.html)

```tsx
(open3d: boolean) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| open3d | `boolean` | 是否开启 |

### updateOSDThreshold

更新 OSD 识别精确度，要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.updateOSDThreshold.html)

```tsx
(threshold: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| threshold | `number` | 阈值 |

## 参数

### IState

state 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 不可用 |
| 1 | 运行中 |
| 2 | 暂停中 |
| 3 | 初始化中 |

### IConfig

会话配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| version | `keyof IVersion` | 不可用 |
| track | `ITrack` | 运行中 |
| marker | `boolean` | marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力 |
| OSD | `boolean` | OSD 跟踪配置 |
| depth | `IDepth` | 深度识别配置 |
| face | `IFace` | 人脸检测配置。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。 |
| OCR | `IOCR` | OCR 检测配置。 |
| body | `IBody` | 人体检测配置。 |
| hand | `IHand` | 手势检测配置。 |
| threeDof | `boolean` | 提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。 |
| gl | `WebGLRenderingContext` | 绑定的 WebGLRenderingContext 对象 |

### IVersion

vision kit 版本

| 参数 | 说明 |
| --- | --- |
| v1 | 旧版本 |
| v2 | v2 版本，目前只有 iOS 基础库 2.22.0 以上支持 |

### ITrack

跟踪配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| plane | `IPlane` | 平面跟踪配置 |

### IPlane

平面跟踪配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mode | `keyof IPlaneMode` | 平面跟踪配置模式 |

### IPlaneMode

平面跟踪配置模式合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 检测横向平面 |
| 2 | 检测纵向平面，只有 v2 版本支持 |
| 3 | 检测横向和纵向平面，只有 v2 版本支持 |

### IDepth

深度识别配置

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IDepthMode` |

### IDepthMode

深度识别模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IFace

人脸检测模式

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IFaceMode` |

### IFaceMode

人脸检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IOCR

OCR 检测配置

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IOCRMode` |

### IOCRMode

OCR 检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IBody

人体检测模式

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IBodyMode` |

### IBodyMode

人体检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IHand

手势检测配置

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IHandMode` |

### IHandMode

手势检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### ISize

相机尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IDetectBodyOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| frameBuffer | `ArrayBuffer` | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 是 | 图像宽度 |
| height | `number` | 是 | 图像高度 |
| scoreThreshold | `number` | 否 | 评分阈值。正常情况传入 0.8 即可。默认值 0.8 |
| sourceType | `keyof ISourceType` | 否 | 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果。默认值1 |

### ISourceType

图像源类型。

| 参数 | 说明 |
| --- | --- |
| 1 | 表示输入的图片是随机的图片 |
| 0 | 表示输入的图片是来自一个连续视频的每一帧图像 |

### IDetectDepthOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer` | 人需要识别深度的图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 图像宽度 |
| height | `number` | 图像高度 |

### IDetectFaceOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| frameBuffer | `ArrayBuffer` | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 是 | 图像宽度 |
| height | `number` | 是 | 图像高度 |
| scoreThreshold | `number` | 否 | 评分阈值。正常情况传入 0.8 即可。默认值 0.8 |
| sourceType | `keyof ISourceType` | 否 | 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果。默认值1 |
| modelModel | `keyof IModelModel` | 否 | 算法模型类型。正常情况传入 1 即可。0、1、2 分别表示小、中、大模型，模型越大识别准确率越高，但资源占用也越高。建议根据用户设备性能进行选择。 |

### IModelModel

算法模型类型

| 参数 | 说明 |
| --- | --- |
| 0 | 小模型 |
| 1 | 中模型 |
| 2 | 大模型 |

### IDetectHandOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| frameBuffer | `ArrayBuffer` | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 是 | 图像宽度 |
| height | `number` | 是 | 图像高度 |
| scoreThreshold | `number` | 否 | 评分阈值。正常情况传入 0.8 即可。默认值0.8 |
| algoMode | `keyof IAlgoMode` | 否 | 算法检测模式 |

### IAlgoMode

算法检测模式

| 参数 | 说明 |
| --- | --- |
| 0 | 检测模式，输出框和点 |
| 1 | 手势模式，输出框和手势分类 |
| 2 | 结合0和1模式，输出框、点、手势分类 |

### IMarker

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |
| path | `string` | 图片路径 |

### IOSDMarker

OSD marker

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |
| path | `string` | 图片路径 |

### IRunOCROption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer` | 待识别图像的像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 图像宽度 |
| height | `number` | 图像高度 |

### IHitTestResult

hitTest 检测结果

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| transform | `Float32Array` | 包含位置、旋转、放缩信息的矩阵，以列为主序 |

### IStartStatus

start status 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 成功 |
| 2000000 | 系统错误 |
| 2000001 | 参数错误 |
| 2000002 | 设备不支持 |
| 2000003 | 系统不支持 |
| 2003000 | 会话不可用 |
| 2003001 | 未开启系统相机权限 |
| 2003002 | 未开启小程序相机权限 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| VKSession | ✔️ |  |  |  |  |
| VKSession.addMarker | ✔️ |  |  |  |  |
| VKSession.addOSDMarker | ✔️ |  |  |  |  |
| VKSession.cancelAnimationFrame | ✔️ |  |  |  |  |
| VKSession.destroy | ✔️ |  |  |  |  |
| VKSession.detectBody | ✔️ |  |  |  |  |
| VKSession.detectDepth | ✔️ |  |  |  |  |
| VKSession.detectFace | ✔️ |  |  |  |  |
| VKSession.detectHand | ✔️ |  |  |  |  |
| VKSession.getAllMarker | ✔️ |  |  |  |  |
| VKSession.getAllOSDMarker | ✔️ |  |  |  |  |
| VKSession.getVKFrame | ✔️ |  |  |  |  |
| VKSession.hitTest | ✔️ |  |  |  |  |
| VKSession.off | ✔️ |  |  |  |  |
| VKSession.on | ✔️ |  |  |  |  |
| VKSession.removeMarker | ✔️ |  |  |  |  |
| VKSession.removeOSDMarker | ✔️ |  |  |  |  |
| VKSession.requestAnimationFrame | ✔️ |  |  |  |  |
| VKSession.runOCR | ✔️ |  |  |  |  |
| VKSession.start | ✔️ |  |  |  |  |
| VKSession.stop | ✔️ |  |  |  |  |
| VKSession.update3DMode | ✔️ |  |  |  |  |
| VKSession.updateOSDThreshold | ✔️ |  |  |  |  |

---

## docs/apis/base/crypto/getRandomValues.md

---
title: Taro.getRandomValues(option)
sidebar_label: getRandomValues
---

获取密码学安全随机数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 示例代码

```tsx
Taro.getRandomValues({
  length: 6 // 生成 6 个字节长度的随机数
}).then(res => {
  console.log(Taro.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
})
```

---

## docs/apis/base/crypto/getUserCryptoManager.md

---
title: Taro.getUserCryptoManager()
sidebar_label: getUserCryptoManager
---

获取用户加密模块

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/wx.getUserCryptoManager.html)

## 类型

```tsx
() => UserCryptoManager
```

---

## docs/apis/base/crypto/UserCryptoManager.md

---
title: UserCryptoManager
sidebar_label: UserCryptoManager
---

用户加密模块

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.html)

## 方法

### getLatestUserKey

获取最新的用户加密密钥

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getLatestUserKey.html)

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

#### 示例代码

```tsx
const userCryptoManager = Taro.getUserCryptoManager()
userCryptoManager.getLatestUserKey({
  success: res => {
    const { encryptKey, iv, version, expireTime } = res
    console.log(encryptKey, iv, version, expireTime)
  }
})
```

### getRandomValues

获取密码学安全随机数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)

```tsx
(option: Option) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

#### 示例代码

```tsx
Taro.getUserCryptoManager().getRandomValues({
  length: 6 // 生成 6 个字节长度的随机数,
  success: res => {
    console.log(Taro.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
  }
})
```

## 参数

### getLatestUserKey

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: SuccessCallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| encryptKey | `string` | 用户加密密钥 |
| iv | `string` | 密钥初始向量 |
| version | `number` | 密钥版本 |
| expireTime | `number` | 密钥过期时间 |

### getRandomValues

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| length | `number` | 是 | 整数，生成随机数的字节数，最大 1048576 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: SuccessCallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| randomValues | `ArrayBuffer` | 随机数内容，长度为传入的字节数 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| UserCryptoManager | ✔️ |  |  |  |  |
| UserCryptoManager.getLatestUserKey | ✔️ |  |  |  |  |
| UserCryptoManager.getRandomValues | ✔️ |  |  |  |  |

---

## docs/apis/base/debug/console.md

---
title: console
sidebar_label: console
---

向调试面板中打印日志。console 是一个全局对象，可以直接访问。在微信客户端中，向 vConsole 中输出日志。

**注意**
- 由于 vConsole 功能有限，以及不同客户端对 console 方法的支持情况有差异，建议开发者在小程序中只使用本文档中提供的方法。
- 部分内容展示的限制请参见调试

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.html)

## 方法

### debug

向调试面板中打印 debug 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.debug.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。 |

### error

向调试面板中打印 error 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.error.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。 |

### group

在调试面板中创建一个新的分组

**注意**
仅在工具中有效，在 vConsole 中为空函数实现。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.group.html)

```tsx
(label?: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| label | `string` | 分组标记 |

### groupEnd

结束由 [console.group](#group) 创建的分组

**注意**
仅在工具中有效，在 vConsole 中为空函数实现。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.groupEnd.html)

```tsx
() => void
```

### info

向调试面板中打印 info 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.info.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。 |

### log

向调试面板中打印 log 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.log.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。 |

### warn

向调试面板中打印 warn 日志

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.warn.html)

```tsx
(...args: any[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| args | `any[]` | 日志内容，可以有任意多个。 |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| console | ✔️ |  |  |  |  | ✔️ | ✔️ |
| console.debug | ✔️ |  |  |  |  | ✔️ | ✔️ |
| console.error | ✔️ |  |  |  |  | ✔️ | ✔️ |
| console.group | ✔️ |  |  |  |  | ✔️ | ✔️ |
| console.groupEnd | ✔️ |  |  |  |  | ✔️ | ✔️ |
| console.info | ✔️ |  |  |  |  | ✔️ | ✔️ |
| console.log | ✔️ | ✔️ |  |  |  | ✔️ | ✔️ |
| console.warn | ✔️ |  |  |  |  | ✔️ | ✔️ |

---

## docs/apis/base/debug/getLogManager.md

---
title: Taro.getLogManager(res)
sidebar_label: getLogManager
---

获取日志管理器对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html)

## 类型

```tsx
(res?: Option) => LogManager
```

## 参数

| 参数 | 类型 |
| --- | --- |
| res | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 |
| --- | --- | :---: | :---: |
| level | `keyof Level` | `0` | 否 |

### Level

| 参数 | 说明 |
| --- | --- |
| 0 | 表示会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志 |
| 1 | 表示不会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志 |

## 示例代码

```tsx
const logger = Taro.getLogManager({level: 1})

logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```

---

## docs/apis/base/debug/getRealtimeLogManager.md

---
title: Taro.getRealtimeLogManager()
sidebar_label: getRealtimeLogManager
---

获取实时日志管理器对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
() => RealtimeLogManager
```

## 示例代码

```tsx
const logger = Taro.getRealtimeLogManager()
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```

---

