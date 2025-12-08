## docs/apis/canvas/CanvasContext.md (part 2)
### setLineJoin

设置线条的交点样式

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html)

```tsx
(lineJoin: keyof LineJoin) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| lineJoin | `keyof LineJoin` | 线条的结束交点样式 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()
ctx.draw()
```

### setLineWidth

设置线条的宽度

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineWidth.html)

```tsx
(lineWidth: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| lineWidth | `number` | 线条的宽度，单位px |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(5)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(15)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()
ctx.draw()
```

### setMiterLimit

设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。当 [CanvasContext.setLineJoin()](/docs/apis/canvas/CanvasContext#setlinejoin) 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setMiterLimit.html)

```tsx
(miterLimit: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| miterLimit | `number` | 最大斜接长度 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(4)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()
ctx.draw()
```

### setShadow

设定阴影样式。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setShadow.html)

```tsx
(offsetX: number, offsetY: number, blur: number, color: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| offsetX | `number` | 阴影相对于形状在水平方向的偏移，默认值为 0。 |
| offsetY | `number` | 阴影相对于形状在竖直方向的偏移，默认值为 0。 |
| blur | `number` | 阴影的模糊级别，数值越大越模糊。范围 0- 100。，默认值为 0。 |
| color | `string` | 阴影的颜色。默认值为 black。 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.setShadow(10, 50, 50, 'blue')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

### setStrokeStyle

设置描边颜色。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html)

```tsx
(color: string | CanvasGradient) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| color | string or CanvasGradient | 描边的颜色，默认颜色为 black。 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

### setTextAlign

设置文字的对齐

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextAlign.html)

```tsx
(align: keyof Align) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| align | `keyof Align` | 文字的对齐方式 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()
ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)
await ctx.draw(true)
ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)
await ctx.draw(true)
ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)
await ctx.draw(true)
```

### setTextBaseline

设置文字的竖直对齐

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextBaseline.html)

```tsx
(textBaseline: keyof TextBaseline) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| textBaseline | `keyof TextBaseline` | 文字的竖直对齐方式 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()
ctx.setFontSize(20)
ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)
await ctx.draw(true)
ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)
await ctx.draw(true)
ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)
await ctx.draw(true)
ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)
await ctx.draw(true)
```

### setTransform

使用矩阵重新设置（覆盖）当前变换的方法

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTransform.html)

```tsx
{ (scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, skewY: number, skewX: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: ...
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scaleX | `number` | 水平缩放 |
| skewX | `number` | 水平倾斜 |
| skewY | `number` | 垂直倾斜 |
| scaleY | `number` | 垂直缩放 |
| translateX | `number` | 水平移动 |
| translateY | `number` | 垂直移动 |

### stroke

画出当前路径的边框。默认颜色色为黑色。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.stroke.html)

```tsx
() => void
```

#### 示例代码

##### 示例 1

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```

##### 示例 2

stroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去。

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()
// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)
// only stoke this rect, not in current path
ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)
ctx.rect(10, 100, 100, 30)
// it will stroke current path
ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```

### strokeRect

画一个矩形(非填充)。 用 [`setStrokeStyle`](/docs/apis/canvas/CanvasContext#setstrokestyle) 设置矩形线条的颜色，如果没设置默认是黑色。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeRect.html)

```tsx
(x: number, y: number, width: number, height: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 矩形路径左上角的横坐标 |
| y | `number` | 矩形路径左上角的纵坐标 |
| width | `number` | 矩形路径的宽度 |
| height | `number` | 矩形路径的高度 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

### strokeText

给定的 (x, y) 位置绘制文本描边的方法

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeText.html)

```tsx
(text: string, x: number, y: number, maxWidth?: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | `string` | 要绘制的文本 |
| x | `number` | 文本起始点的 x 轴坐标 |
| y | `number` | 文本起始点的 y 轴坐标 |
| maxWidth | `number` | 需要绘制的最大宽度，可选 |

### transform

使用矩阵多次叠加当前变换的方法
使用矩阵叠加当前变换。矩阵由方法的参数进行描述，可以缩放、旋转、移动和倾斜上下文

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.transform.html)

```tsx
{ (scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, skewY: number, skewX: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: ...
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scaleX | `number` | 水平缩放 |
| skewX | `number` | 水平倾斜 |
| skewY | `number` | 垂直倾斜 |
| scaleY | `number` | 垂直缩放 |
| translateX | `number` | 水平移动 |
| translateY | `number` | 垂直移动 |

### translate

对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.translate.html)

```tsx
(x: number, y: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 水平坐标平移量 |
| y | `number` | 竖直坐标平移量 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.draw()
```

## 参数

### Repetition

参数 repetition 可选值

| 参数 | 说明 |
| --- | --- |
| repeat | 水平竖直方向都重复 |
| repeat-x | 水平方向重复 |
| repeat-y | 竖直方向重复 |
| no-repeat | 不重复 |

### LineCap

参数 lineCap 可选值

| 参数 | 说明 |
| --- | --- |
| butt | 向线条的每个末端添加平直的边缘。 |
| round | 向线条的每个末端添加圆形线帽。 |
| square | 向线条的每个末端添加正方形线帽。 |

### LineJoin

参数 lineJoin 可选值

| 参数 | 说明 |
| --- | --- |
| bevel | 斜角 |
| round | 圆角 |
| miter | 尖角 |

### Align

参数 align 可选值

| 参数 | 说明 |
| --- | --- |
| left | 左对齐 |
| center | 居中对齐 |
| right | 右对齐 |

### TextBaseline

参数 textBaseline 可选值

| 参数 | 说明 |
| --- | --- |
| top | 顶部对齐<br />API 支持度: weapp, alipay, swan, jd, qq, tt, h5 |
| bottom | 底部对齐<br />API 支持度: weapp, alipay, swan, jd, qq, tt, h5 |
| middle | 居中对齐<br />API 支持度: weapp, alipay, swan, jd, qq, tt, h5 |
| normal | <br />API 支持度: weapp, alipay, swan, jd, qq, tt, h5 |
| hanging | 文本基线为悬挂基线。<br />API 支持度: alipay, tt, h5 |
| alphabetic | 文本基线是标准的字母基线<br />API 支持度: alipay, tt, h5 |
| ideographic | 文字基线是表意字基线。如果字符本身超出了alphabetic 基线，那么ideograhpic基线位置在字符本身的底部。<br />API 支持度: alipay, tt, h5 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CanvasContext.arc | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.arcTo | ✔️ |  | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.beginPath | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.bezierCurveTo | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.clearRect | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.clip | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.closePath | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.createCircularGradient | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.createLinearGradient | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.createPattern | ✔️ |  | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.draw | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(第二次调用 draw 前需要等待上一次 draw 调用结束后再调用，否则新的一次 draw 调用栈不会清空而导致结果异常。) |  |  | ✔️ | ✔️ |
| CanvasContext.drawImage | ✔️ |  |  |  |  |  | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.fill | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.fillRect | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.fillText | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.lineTo | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.measureText | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.moveTo | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.quadraticCurveTo | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.rect | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.reset |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| CanvasContext.restore | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.rotate | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.save | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.scale | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setFillStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setFontSize | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setGlobalAlpha | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setLineCap | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setLineDash | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setLineJoin | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setLineWidth | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setMiterLimit | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setShadow | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setStrokeStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setTextAlign | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setTextBaseline | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.setTransform | ✔️ | ✔️ |  | ✔️ |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.stroke | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.strokeRect | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.strokeText | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.transform | ✔️ |  |  | ✔️ |  | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| CanvasContext.translate | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

---

## docs/apis/canvas/canvasGetImageData.md

---
title: Taro.canvasGetImageData(option, component)
sidebar_label: canvasGetImageData
---

获取 canvas 区域隐含的像素数据。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html)

## 类型

```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| option | `Option` |  |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| canvasId | `string` | 是 | 画布标识，传入 [canvas](/docs/components/canvas) 组件的 `canvas-id` 属性。 |
| height | `number` | 是 | 将要被提取的图像数据矩形区域的高度 |
| width | `number` | 是 | 将要被提取的图像数据矩形区域的宽度 |
| x | `number` | 是 | 将要被提取的图像数据矩形区域的左上角横坐标 |
| y | `number` | 是 | 将要被提取的图像数据矩形区域的左上角纵坐标 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `Uint8ClampedArray` | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba |
| height | `number` | 图像数据矩形的高度 |
| width | `number` | 图像数据矩形的宽度 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success: function (res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```

---

## docs/apis/canvas/CanvasGradient.md

---
title: CanvasGradient
sidebar_label: CanvasGradient
---

创建 canvas 的绘图上下文 CanvasContext 对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html)

## 方法

### addColorStop

添加颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html)

```tsx
(stop: number, color: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| stop | `number` | 表示渐变中开始与结束之间的位置，范围 0-1。 |
| color | `string` | 渐变点的颜色。 |

#### 示例代码

```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// Create circular gradient
const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')
// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CanvasGradient | ✔️ |  |  |  |  |  |  |  |  | ✔️ |
| CanvasGradient.addColorStop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  | ✔️ |

---

## docs/apis/canvas/canvasPutImageData.md

---
title: Taro.canvasPutImageData(option, component)
sidebar_label: canvasPutImageData
---

将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html)

## 类型

```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| option | `Option` |  |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| canvasId | `string` | 是 | 画布标识，传入 [canvas](/docs/components/canvas) 组件的 canvas-id 属性。 |
| data | `Uint8ClampedArray` | 是 | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba |
| height | `number` | 是 | 源图像数据矩形区域的高度 |
| width | `number` | 是 | 源图像数据矩形区域的宽度 |
| x | `number` | 是 | 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量） |
| y | `number` | 是 | 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量） |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
const data = new Uint8ClampedArray([255, 0, 0, 1])
Taro.canvasPutImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 1,
  data: data,
  success: function (res) {}
})
```

---

## docs/apis/canvas/canvasToTempFilePath.md

---
title: Taro.canvasToTempFilePath(option, component)
sidebar_label: canvasToTempFilePath
---

把当前画布指定区域的内容导出生成指定大小的图片。在 `draw()` 回调里调用该方法才能保证图片导出成功。

**Bug & Tip：**

1.  `tip`: 在 `draw` 回调里调用该方法才能保证图片导出成功。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html)

## 类型

```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| option | `Option` |  |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| canvas | `Canvas` |  | 否 | 画布标识，传入 [canvas](/docs/components/canvas) 组件实例 （canvas type="2d" 时使用该属性）。 |
| canvasId | `string` |  | 否 | 画布标识，传入 [canvas](/docs/components/canvas) 组件的 canvas-id |
| quality | `number` |  | 否 | 图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| destHeight | `number` |  | 否 | 输出的图片的高度 |
| destWidth | `number` |  | 否 | 输出的图片的宽度 |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| fileType | `keyof FileType` | `"png"` | 否 | 目标文件的类型 |
| height | `number` |  | 否 | 指定的画布区域的高度 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| width | `number` |  | 否 | 指定的画布区域的宽度 |
| x | `number` |  | 否 | 指定的画布区域的左上角横坐标 |
| y | `number` |  | 否 | 指定的画布区域的左上角纵坐标 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tempFilePath | `string` | 是 | 生成文件的临时路径 |
| apFilePath | `string` | 否 | 图片路径(本地临时文件)。<br />API 支持度: alipay |
| errMsg | `string` | 是 | 调用结果 |

### FileType

| 参数 | 说明 |
| --- | --- |
| jpg | jpg 图片 |
| png | png 图片 |

### CanvasProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | `string` |  | 否 | 指定 canvas 类型，支持 2d 和 webgl |
| canvasId | `string` |  | 否 | canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性 |
| disableScroll | `boolean` | `false` | 否 | 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 |
| onTouchStart | `TaroGeneral.CommonEventFunction` |  | 否 | 手指触摸动作开始 |
| onTouchMove | `TaroGeneral.CommonEventFunction` |  | 否 | 手指触摸后移动 |
| onTouchEnd | `TaroGeneral.CommonEventFunction` |  | 否 | 手指触摸动作结束 |
| onTouchCancel | `TaroGeneral.CommonEventFunction` |  | 否 | 手指触摸动作被打断，如来电提醒，弹窗 |
| onLongTap | `TaroGeneral.CommonEventFunction` |  | 否 | 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 |
| onError | `TaroGeneral.CommonEventFunction<onErrorEventDetail>` |  | 否 | 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'} |

#### onErrorEventDetail

| 参数 | 类型 |
| --- | --- |
| errMsg | `string` |

## 示例代码

```tsx
Taro.canvasToTempFilePath({
  x: 100,
  y: 200,
  width: 50,
  height: 50,
  destWidth: 100,
  destHeight: 100,
  canvasId: 'myCanvas',
  success: function (res) {
    console.log(res.tempFilePath)
  }
})
```

---

## docs/apis/canvas/Color.md

---
title: Color
sidebar_label: Color
---

颜色。可以用以下几种方式来表示 canvas 中使用的颜色：

- RGB 颜色： 如 `'rgb(255, 0, 0)'`
- RGBA 颜色：如 `'rgba(255, 0, 0, 0.3)'`
- 16 进制颜色： 如 `'#FF0000'`
- 预定义的颜色： 如 `'red'`

其中预定义颜色有以下148个：
*注意**: Color Name 大小写不敏感

| Color Name           | HEX     |
| -------------------- | ------- |
| AliceBlue            | #F0F8FF |
| AntiqueWhite         | #FAEBD7 |
| Aqua                 | #00FFFF |
| Aquamarine           | #7FFFD4 |
| Azure                | #F0FFFF |
| Beige                | #F5F5DC |
| Bisque               | #FFE4C4 |
| Black                | #000000 |
| BlanchedAlmond       | #FFEBCD |
| Blue                 | #0000FF |
| BlueViolet           | #8A2BE2 |
| Brown                | #A52A2A |
| BurlyWood            | #DEB887 |
| CadetBlue            | #5F9EA0 |
| Chartreuse           | #7FFF00 |
| Chocolate            | #D2691E |
| Coral                | #FF7F50 |
| CornflowerBlue       | #6495ED |
| Cornsilk             | #FFF8DC |
| Crimson              | #DC143C |
| Cyan                 | #00FFFF |
| DarkBlue             | #00008B |
| DarkCyan             | #008B8B |
| DarkGoldenRod        | #B8860B |
| DarkGray             | #A9A9A9 |
| DarkGrey             | #A9A9A9 |
| DarkGreen            | #006400 |
| DarkKhaki            | #BDB76B |
| DarkMagenta          | #8B008B |
| DarkOliveGreen       | #556B2F |
| DarkOrange           | #FF8C00 |
| DarkOrchid           | #9932CC |
| DarkRed              | #8B0000 |
| DarkSalmon           | #E9967A |
| DarkSeaGreen         | #8FBC8F |
| DarkSlateBlue        | #483D8B |
| DarkSlateGray        | #2F4F4F |
| DarkSlateGrey        | #2F4F4F |
| DarkTurquoise        | #00CED1 |
| DarkViolet           | #9400D3 |
| DeepPink             | #FF1493 |
| DeepSkyBlue          | #00BFFF |
| DimGray              | #696969 |
| DimGrey              | #696969 |
| DodgerBlue           | #1E90FF |
| FireBrick            | #B22222 |
| FloralWhite          | #FFFAF0 |
| ForestGreen          | #228B22 |
| Fuchsia              | #FF00FF |
| Gainsboro            | #DCDCDC |
| GhostWhite           | #F8F8FF |
| Gold                 | #FFD700 |
| GoldenRod            | #DAA520 |
| Gray                 | #808080 |
| Grey                 | #808080 |
| Green                | #008000 |
| GreenYellow          | #ADFF2F |
| HoneyDew             | #F0FFF0 |
| HotPink              | #FF69B4 |
| IndianRed            | #CD5C5C |
| Indigo               | #4B0082 |
| Ivory                | #FFFFF0 |
| Khaki                | #F0E68C |
| Lavender             | #E6E6FA |
| LavenderBlush        | #FFF0F5 |
| LawnGreen            | #7CFC00 |
| LemonChiffon         | #FFFACD |
| LightBlue            | #ADD8E6 |
| LightCoral           | #F08080 |
| LightCyan            | #E0FFFF |
| LightGoldenRodYellow | #FAFAD2 |
| LightGray            | #D3D3D3 |
| LightGrey            | #D3D3D3 |
| LightGreen           | #90EE90 |
| LightPink            | #FFB6C1 |
| LightSalmon          | #FFA07A |
| LightSeaGreen        | #20B2AA |
| LightSkyBlue         | #87CEFA |
| LightSlateGray       | #778899 |
| LightSlateGrey       | #778899 |
| LightSteelBlue       | #B0C4DE |
| LightYellow          | #FFFFE0 |
| Lime                 | #00FF00 |
| LimeGreen            | #32CD32 |
| Linen                | #FAF0E6 |
| Magenta              | #FF00FF |
| Maroon               | #800000 |
| MediumAquaMarine     | #66CDAA |
| MediumBlue           | #0000CD |
| MediumOrchid         | #BA55D3 |
| MediumPurple         | #9370DB |
| MediumSeaGreen       | #3CB371 |
| MediumSlateBlue      | #7B68EE |
| MediumSpringGreen    | #00FA9A |
| MediumTurquoise      | #48D1CC |
| MediumVioletRed      | #C71585 |
| MidnightBlue         | #191970 |
| MintCream            | #F5FFFA |
| MistyRose            | #FFE4E1 |
| Moccasin             | #FFE4B5 |
| NavajoWhite          | #FFDEAD |
| Navy                 | #000080 |
| OldLace              | #FDF5E6 |
| Olive                | #808000 |
| OliveDrab            | #6B8E23 |
| Orange               | #FFA500 |
| OrangeRed            | #FF4500 |
| Orchid               | #DA70D6 |
| PaleGoldenRod        | #EEE8AA |
| PaleGreen            | #98FB98 |
| PaleTurquoise        | #AFEEEE |
| PaleVioletRed        | #DB7093 |
| PapayaWhip           | #FFEFD5 |
| PeachPuff            | #FFDAB9 |
| Peru                 | #CD853F |
| Pink                 | #FFC0CB |
| Plum                 | #DDA0DD |
| PowderBlue           | #B0E0E6 |
| Purple               | #800080 |
| RebeccaPurple        | #663399 |
| Red                  | #FF0000 |
| RosyBrown            | #BC8F8F |
| RoyalBlue            | #4169E1 |
| SaddleBrown          | #8B4513 |
| Salmon               | #FA8072 |
| SandyBrown           | #F4A460 |
| SeaGreen             | #2E8B57 |
| SeaShell             | #FFF5EE |
| Sienna               | #A0522D |
| Silver               | #C0C0C0 |
| SkyBlue              | #87CEEB |
| SlateBlue            | #6A5ACD |
| SlateGray            | #708090 |
| SlateGrey            | #708090 |
| Snow                 | #FFFAFA |
| SpringGreen          | #00FF7F |
| SteelBlue            | #4682B4 |
| Tan                  | #D2B48C |
| Teal                 | #008080 |
| Thistle              | #D8BFD8 |
| Tomato               | #FF6347 |
| Turquoise            | #40E0D0 |
| Violet               | #EE82EE |
| Wheat                | #F5DEB3 |
| White                | #FFFFFF |
| WhiteSmoke           | #F5F5F5 |
| Yellow               | #FFFF00 |
| YellowGreen          | #9ACD32 |

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html)

---

## docs/apis/canvas/createCanvasContext.md

---
title: Taro.createCanvasContext(canvasId, component)
sidebar_label: createCanvasContext
---

创建 canvas 的绘图上下文 [CanvasContext](/docs/apis/canvas/CanvasContext) 对象

**Tip**: 需要指定 canvasId，该绘图上下文只作用于对应的 `<canvas/>`；另外，Web 端需要在 `useReady` 回调中执行它，否则会因为底层 canvas 渲染出来之前而去获取 CanvasContext，导致其底层的 context 为 `undefined`，从而不能正常绘图。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html)

## 类型

```tsx
(canvasId: string, component?: TaroGeneral.IAnyObject) => CanvasContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| canvasId | `string` | 要获取上下文的 [canvas](/docs/components/canvas) 组件 canvas-id 属性 |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 [canvas](/docs/components/canvas) ，如果省略则不在任何自定义组件内查找 |

## 示例代码

```tsx
import { useReady } from '@tarojs/taro'

useReady(() => {
  const context = Taro.createCanvasContext('canvas')
  context.setStrokeStyle("#00ff00")
  context.setLineWidth(5)
  context.rect(0, 0, 200, 200)
  context.stroke()
  context.setStrokeStyle("#ff0000")
  context.setLineWidth(2)
  context.moveTo(160, 100)
  context.arc(100, 100, 60, 0, 2 * Math.PI, true)
  context.moveTo(140, 100)
  context.arc(100, 100, 40, 0, Math.PI, false)
  context.moveTo(85, 80)
  context.arc(80, 80, 5, 0, 2 * Math.PI, true)
  context.moveTo(125, 80)
  context.arc(120, 80, 5, 0, 2 * Math.PI, true)
  context.stroke()
  context.draw()
})
```

---

## docs/apis/canvas/createContext.md

---
title: Taro.createContext(不推荐使用)
sidebar_label: createContext
---


创建并返回绘图上下文。

## API支持度

| API | 微信小程序 | H5 | React Native |
| :-: | :-: | :-: | :-: |
| Taro.createContext | ✔️ |  |  |

---

## docs/apis/canvas/createOffscreenCanvas.md

---
title: Taro.createOffscreenCanvas(options)
sidebar_label: createOffscreenCanvas
---

创建离屏 canvas 实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html

有两个版本的写法：

- createOffscreenCanvas(options) 从 2.16.1 起支持
- createOffscreenCanvas(width, height, this) 从 2.7.0 起支持)

## 类型

```tsx
(options: Option) => OffscreenCanvas
```

## 参数

| 参数 | 类型 |
| --- | --- |
| options | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | "webgl" or "2d" | `: 'webgl'` | 否 | 创建的离屏 canvas 类型 |
| height | `number` |  | 否 | 画布高度 |
| width | `number` |  | 否 | 画布宽度 |
| compInst | `TaroGeneral.IAnyObject` |  | 否 | 在自定义组件下，当前组件实例的 this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

## 示例代码

```tsx
// 创建离屏 2D canvas 实例
const canvas = Taro.createOffscreenCanvas({type: '2d', width: 300, height: 150})
// 获取 context。注意这里必须要与创建时的 type 一致
const context = canvas.getContext('2d')

// 创建一个图片
const image = canvas.createImage()
// 等待图片加载
await new Promise(resolve => {
  image.onload = resolve
  image.src = IMAGE_URL // 要加载的图片 url
})

// 把图片画到离屏 canvas 上
context.clearRect(0, 0, 300, 150)
context.drawImage(image, 0, 0, 300, 150)

// 获取画完后的数据
const imgData = context.getImageData(0, 0, 300, 150)
```

---

## docs/apis/canvas/drawCanvas.md

---
title: Taro.drawCanvas(不推荐使用)
sidebar_label: drawCanvas
---


使用方式同 [`wx.drawCanvas`](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/draw-canvas.html)。

## API支持度

| API | 微信小程序 | H5 | React Native |
| :-: | :-: | :-: | :-: |
| Taro.drawCanvas | ✔️ |  |  |

---

## docs/apis/canvas/Image.md

---
title: Image
sidebar_label: Image
---

图片对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Image.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| src | `string` | 图片的 URL |
| height | `number` | 图片的真实高度 |
| width | `number` | 图片的真实宽度 |
| referrerPolicy | `string` | origin: 发送完整的referrer; no-referrer: 不发送。<br /><br />格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本<br />API 支持度: weapp |
| onerror | `(...args: any[]) => any` | 图片加载发生错误后触发的回调函数 |
| onload | `(...args: any[]) => any` | 图片加载完成后触发的回调函数 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| Image | ✔️ |  |  |  |
| Image.referrerPolicy | ✔️ |  |  |  |

---

## docs/apis/canvas/ImageData.md

---
title: ImageData
sidebar_label: ImageData
---

ImageData 对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/ImageData.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 使用像素描述 ImageData 的实际宽度 |
| height | `number` | 使用像素描述 ImageData 的实际高度 |
| data | `Uint8ClampedArray` | 一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ImageData | ✔️ |  |  |  |

---

## docs/apis/canvas/OffscreenCanvas.md

---
title: OffscreenCanvas
sidebar_label: OffscreenCanvas
---

离屏 canvas 实例，可通过 Taro.createOffscreenCanvas 创建。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 画布宽度 |
| height | `number` | 画布高度 |

### createImage

创建一个图片对象。支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法

> 注意不允许混用 webgl 和 2d 画布创建的图片对象，使用时请注意尽量使用 canvas 自身的 createImage 创建图片对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.createImage.html)

```tsx
() => Image
```

### getContext

该方法返回 OffscreenCanvas 的绘图上下文

> 当前仅支持获取 WebGL 绘图上下文

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.getContext.html)

```tsx
(contextType: "webgl" | "2d") => RenderingContext
```

| 参数 | 类型 |
| --- | --- |
| contextType | "webgl" or "2d" |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| OffscreenCanvas | ✔️ |  |  |  |  |  |
| OffscreenCanvas.createImage | ✔️ |  |  |  |  |  |
| OffscreenCanvas.getContext | ✔️ | ✔️ |  |  |  |  |

---

