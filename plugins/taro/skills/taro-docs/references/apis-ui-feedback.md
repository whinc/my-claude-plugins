## docs/apis/ui/animation/Animation.md

---
title: Animation
sidebar_label: Animation
---

动画对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html)

## 方法

### export

导出动画队列。**export 方法每次调用后会清掉之前的动画操作**。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.export.html)

```tsx
() => { actions: TaroGeneral.IAnyObject[]; }
```

### step

表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.step.html)

```tsx
(option?: StepOption) => Animation
```

| 参数 | 类型 |
| --- | --- |
| option | `StepOption` |

### matrix

同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix.html)

```tsx
(a: number, b: number, c: number, d: number, tx: number, ty: number) => Animation
```

| 参数 | 类型 |
| --- | --- |
| a | `number` |
| b | `number` |
| c | `number` |
| d | `number` |
| tx | `number` |
| ty | `number` |

### matrix3d

同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix3d.html)

```tsx
(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number) => Animation
```

| 参数 | 类型 |
| --- | --- |
| a1 | `number` |
| b1 | `number` |
| c1 | `number` |
| d1 | `number` |
| a2 | `number` |
| b2 | `number` |
| c2 | `number` |
| d2 | `number` |
| a3 | `number` |
| b3 | `number` |
| c3 | `number` |
| d3 | `number` |
| a4 | `number` |
| b4 | `number` |
| c4 | `number` |
| d4 | `number` |

### rotate

从原点顺时针旋转一个角度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate.html)

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

### rotate3d

从 固定 轴顺时针旋转一个角度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate3d.html)

```tsx
(x: number, y?: number, z?: number, angle?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 旋转轴的 x 坐标 |
| y | `number` | 旋转轴的 y 坐标 |
| z | `number` | 旋转轴的 z 坐标 |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

### rotateX

从 X 轴顺时针旋转一个角度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateX.html)

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

### rotateY

从 Y 轴顺时针旋转一个角度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateY.html)

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

### rotateZ

从 Z 轴顺时针旋转一个角度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateZ.html)

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

### scale

缩放

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale.html)

```tsx
(sx: number, sy?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sx | `number` | 当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数 |
| sy | `number` | 在 Y 轴缩放 sy 倍数 |

### scale3d

缩放

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale3d.html)

```tsx
(sx: number, sy: number, sz: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sx | `number` | x 轴的缩放倍数 |
| sy | `number` | y 轴的缩放倍数 |
| sz | `number` | z 轴的缩放倍数 |

### scaleX

缩放 X 轴

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleX.html)

```tsx
(scale: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scale | `number` | X 轴的缩放倍数 |

### scaleY

缩放 Y 轴

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleY.html)

```tsx
(scale: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scale | `number` | Y 轴的缩放倍数 |

### scaleZ

缩放 Z 轴

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleZ.html)

```tsx
(scale: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scale | `number` | Z 轴的缩放倍数 |

### skew

对 X、Y 轴坐标进行倾斜

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skew.html)

```tsx
(ax: number, ay: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ax | `number` | 对 X 轴坐标倾斜的角度，范围 [-180, 180] |
| ay | `number` | 对 Y 轴坐标倾斜的角度，范围 [-180, 180] |

### skewX

对 X 轴坐标进行倾斜

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewX.html)

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 倾斜的角度，范围 [-180, 180] |

### skewY

对 Y 轴坐标进行倾斜

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewY.html)

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 倾斜的角度，范围 [-180, 180] |

### translate

平移变换

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate.html)

```tsx
(tx?: number, ty?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tx | `number` | 当仅有该参数时表示在 X 轴偏移 tx，单位 px |
| ty | `number` | 在 Y 轴平移的距离，单位为 px |

### translate3d

对 xyz 坐标进行平移变换

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate3d.html)

```tsx
(tx?: number, ty?: number, tz?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tx | `number` | 在 X 轴平移的距离，单位为 px |
| ty | `number` | 在 Y 轴平移的距离，单位为 px |
| tz | `number` | 在 Z 轴平移的距离，单位为 px |

### translateX

对 X 轴平移

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateX.html)

```tsx
(translation: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| translation | `number` | 在 X 轴平移的距离，单位为 px |

### translateY

对 Y 轴平移

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateY.html)

```tsx
(translation: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| translation | `number` | 在 Y 轴平移的距离，单位为 px |

### translateZ

对 Z 轴平移

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateZ.html)

```tsx
(translation: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| translation | `number` | 在 Z 轴平移的距离，单位为 px |

### opacity

设置透明度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.opacity.html)

```tsx
(value: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `number` | 透明度，范围 0-1 |

### backgroundColor

设置背景色

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.backgroundColor.html)

```tsx
(value: string) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 颜色值 |

### width

设置宽度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.width.html)

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

### height

设置高度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.height.html)

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

### left

设置 left 值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.left.html)

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

### right

设置 right 值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.right.html)

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

### top

设置 top 值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.top.html)

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

### bottom

设置 bottom 值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.bottom.html)

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | string or number | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

## 参数

### StepOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| delay | `number` | 否 | 动画延迟时间，单位 ms |
| duration | `number` | 否 | 动画持续时间，单位 ms |
| timingFunction | `keyof TimingFunction` | 否 | 动画的效果 |
| transformOrigin | `string` | 否 |  |

### TimingFunction

| 参数 | 说明 |
| --- | --- |
| linear | 动画从头到尾的速度是相同的 |
| ease | 动画以低速开始，然后加快，在结束前变慢 |
| ease-in | 动画以低速开始 |
| ease-in-out | 动画以低速开始和结束 |
| ease-out | 动画以低速结束 |
| step-start | 动画第一帧就跳至结束状态直到结束 |
| step-end | 动画一直保持开始状态，最后一帧跳到结束状态 |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Animation | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.export | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.step | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.matrix | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.matrix3d | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.rotate | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.rotate3d | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.rotateX | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.rotateY | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.rotateZ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.scale | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.scale3d | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.scaleX | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.scaleY | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.scaleZ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.skew | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.skewX | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.skewY | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.translate | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.translate3d | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.translateX | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.translateY | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.translateZ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.opacity | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.backgroundColor | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.width | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.height | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.left | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.right | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.top | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| Animation.bottom | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

---

## docs/apis/ui/animation/createAnimation.md

---
title: Taro.createAnimation(option)
sidebar_label: createAnimation
---

创建一个动画实例 [animation](../Animation)。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)

## 类型

```tsx
(option: Option) => Animation
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| duration | `number` |  | 否 | 动画持续时间，单位 ms |
| timingFunction | `keyof TimingFunction` |  | 否 | 动画的效果 |
| delay | `number` | `0` | 否 | 动画延迟时间，单位 ms |
| transformOrigin | `string` | `"50% 50% 0"` | 否 |  |
| unit | `string` |  | 否 | 单位<br />API 支持度: h5 |

### TimingFunction

| 参数 | 说明 |
| --- | --- |
| linear | 动画从头到尾的速度是相同的 |
| ease | 动画以低速开始，然后加快，在结束前变慢 |
| ease-in | 动画以低速开始 |
| ease-in-out | 动画以低速开始和结束 |
| ease-out | 动画以低速结束 |
| step-start | 动画第一帧就跳至结束状态直到结束 |
| step-end | 动画一直保持开始状态，最后一帧跳到结束状态 |

## 示例代码

```tsx
var animation = Taro.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})
```

---

## docs/apis/ui/background/setBackgroundColor.md

---
title: Taro.setBackgroundColor(option)
sidebar_label: setBackgroundColor
---

动态设置窗口的背景色

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> React Native: 仅 Android

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html)

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
| backgroundColor | `string` | 否 | 窗口的背景色，必须为十六进制颜色值 |
| backgroundColorBottom | `string` | 否 | 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 |
| backgroundColorTop | `string` | 否 | 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.setBackgroundColor({
  backgroundColor: '#ffffff', // 窗口的背景色为白色
})
Taro.setBackgroundColor({
  backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
  backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
})
```

---

## docs/apis/ui/background/setBackgroundTextStyle.md

---
title: Taro.setBackgroundTextStyle(option)
sidebar_label: setBackgroundTextStyle
---

动态设置下拉背景字体、loading 图的样式

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> React Native: 仅 iOS

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html)

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
| textStyle | "dark" or "light" | 是 | 下拉背景字体、loading 图的样式。<br /><br />可选值：<br />- 'dark': dark 样式;<br />- 'light': light 样式; |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.setBackgroundTextStyle({
  textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
})
```

---

## docs/apis/ui/custom-component/nextTick.md

---
title: Taro.nextTick(callback)
sidebar_label: nextTick
---

延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）

**说明**
因为自定义组件中的 setData 和 triggerEvent 等接口本身是同步的操作，当这几个接口被连续调用时，都是在一个同步流程中执行完的，因此若逻辑不当可能会导致出错。
一个极端的案例：当父组件的 setData 引发了子组件的 triggerEvent，进而使得父组件又进行了一次 setData，期间有通过 wx:if 语句对子组件进行卸载，就有可能引发奇怪的错误，所以对于不需要在一个同步流程内完成的逻辑，可以使用此接口延迟到下一个时间片再执行。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html)

## 类型

```tsx
(callback: (...args: any[]) => any) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(...args: any[]) => any` |

## 示例代码

```tsx
this.setData({ number: 1 }) // 直接在当前同步流程中执行
Taro.nextTick(() => {
  this.setData({ number: 3 }) // 在当前同步流程结束后，下一个时间片执行
})
this.setData({ number: 2 }) // 直接在当前同步流程中执行
```

---

## docs/apis/ui/fonts/loadFontFace.md

---
title: Taro.loadFontFace(option)
sidebar_label: loadFontFace
---

动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址。

注意：
1. 字体文件返回的 context-type 参考 [font](https://www.iana.org/assignments/media-types/media-types.xhtml#font)，格式不正确时会解析失败。
2. 字体链接必须是https（ios不支持http)
3. 字体链接必须是同源下的，或开启了cors支持，小程序的域名是`servicewechat.com`
4. canvas等原生组件不支持使用接口添加的字体
5. 工具里提示 Failed to load font 可以忽略

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> 支付宝小程序: source 地址格式为 `url('https://...')`，而不是单纯 URL 地址
>
> H5: 不支持 global (默认全局加载)

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html)

## 类型

```tsx
(option: Option) => Promise<CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| global | `boolean` | `false` | 否 | 是否全局生效 |
| family | `string` |  | 是 | 定义的字体名称 |
| source | `string` |  | 是 | 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的 iOS 上会不兼容。 |
| desc | `DescOption` |  | 否 | 可选的字体描述符 |
| success | `(res: CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| fail | `(res: CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| complete | `(res: CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| status | `string` | 加载字体结果 |

### DescOption

可选的字体描述符

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| ascentOverride | `string` | 否 | <br />API 支持度: h5 |
| descentOverride | `string` | 否 | <br />API 支持度: h5 |
| featureSettings | `string` | 否 | <br />API 支持度: h5 |
| lineGapOverride | `string` | 否 | <br />API 支持度: h5 |
| stretch | `string` | 否 | <br />API 支持度: h5 |
| style | `string` | 否 | 字体样式，可选值为 normal / italic / oblique |
| unicodeRange | `string` | 否 | <br />API 支持度: h5 |
| variant | `string` | 否 | 设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit |
| variationSettings | `string` | 否 | <br />API 支持度: h5 |
| weight | `string` | 否 | 字体粗细，可选值为 normal / bold / 100 / 200../ 900 |

## 示例代码

```tsx
Taro.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success: console.log
})
```

---

## docs/apis/ui/interaction/disableAlertBeforeUnload.md

---
title: Taro.disableAlertBeforeUnload(option)
sidebar_label: disableAlertBeforeUnload
---

关闭小程序页面返回询问对话框

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.disableAlertBeforeUnload.html)

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

## docs/apis/ui/interaction/enableAlertBeforeUnload.md

---
title: Taro.enableAlertBeforeUnload(option)
sidebar_label: enableAlertBeforeUnload
---

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
| message | `string` | 是 | 询问对话框内容 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

---

## docs/apis/ui/interaction/hideLoading.md

---
title: Taro.hideLoading(option)
sidebar_label: hideLoading
---

隐藏 loading 提示框

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html)

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
| noConflict | `boolean` | `false` | 否 | 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.showLoading({
  title: '加载中',
})
setTimeout(function (){
  Taro.hideLoading()
},2000)
```

---

## docs/apis/ui/interaction/hideToast.md

---
title: Taro.hideToast(option)
sidebar_label: hideToast
---

隐藏消息提示框

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html)

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
| noConflict | `boolean` | `false` | 否 | 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

---

## docs/apis/ui/interaction/showActionSheet.md

---
title: Taro.showActionSheet(option)
sidebar_label: showActionSheet
---

显示操作菜单

**注意**
- Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
- Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)

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
| alertText | `string` | 否 | 警示文案 |
| itemList | `string[]` | 是 | 按钮的文字数组，数组长度最大为 6 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| itemColor | `string` | 否 | 按钮的文字颜色 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tapIndex | `number` | 用户点击的按钮序号，从上到下的顺序，从0开始 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success: function (res) {
    console.log(res.tapIndex)
  },
  fail: function (res) {
    console.log(res.errMsg)
  }
})
```

---

## docs/apis/ui/interaction/showLoading.md

---
title: Taro.showLoading(option)
sidebar_label: showLoading
---

显示 loading 提示框。需主动调用 Taro.hideLoading 才能关闭提示框

**注意**
- Taro.showLoading 和 Taro.showToast 同时只能显示一个
- Taro.showLoading 应与 Taro.hideLoading 配对使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)

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
| title | `string` | 是 | 提示的内容 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| mask | `boolean` | 否 | 是否显示透明蒙层，防止触摸穿透 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.showLoading({
  title: '加载中',
})
setTimeout(function () {
  Taro.hideLoading()
}, 2000)
```

---

## docs/apis/ui/interaction/showModal.md

---
title: Taro.showModal(option)
sidebar_label: showModal
---

显示模态对话框
**注意**
- Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
- Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)

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
| cancelColor | `string` | 否 | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
| cancelText | `string` | 否 | 取消按钮的文字，最多 4 个字符 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| confirmColor | `string` | 否 | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
| confirmText | `string` | 否 | 确认按钮的文字，最多 4 个字符 |
| content | `string` | 否 | 提示的内容 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| showCancel | `boolean` | 否 | 是否显示取消按钮 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| title | `string` | 否 | 提示的标题 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cancel | `boolean` | 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） |
| confirm | `boolean` | 为 true 时，表示用户点击了确定按钮 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success: function (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```

---

