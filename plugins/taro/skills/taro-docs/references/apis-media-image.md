## docs/apis/media/editor/EditorContext.md

---
title: EditorContext
sidebar_label: EditorContext
---

`EditorContext` 实例，可通过 `Taro.createSelectorQuery` 获取。
`EditorContext` 通过 `id` 跟一个 `editor` 组件绑定，操作对应的 `editor` 组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html)

## 方法

### blur

编辑器失焦，同时收起键盘。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.blur.html)

```tsx
(option?: BlurOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `BlurOption` |

### clear

清空编辑器内容

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.clear.html)

```tsx
(option?: ClearOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ClearOption` |

### format

修改样式

****

## 支持设置的样式列表
| name | value |
| ------| ------ |
| bold  |        |
| italic  |        |
| underline  |        |
| strike  |        |
| ins  |        |
| script  | sub / super |
| header  | H1 / H2 / h3 / H4 / h5 /  H6 |
| align  | left / center / right / justify |
| direction  | rtl  |
| indent | -1 / +1 |
| list | ordered / bullet / check |
| color | hex color |
| backgroundColor| hex color |
| margin/marginTop/marginBottom/marginLeft/marginRight  |  css style  |
| padding/paddingTop/paddingBottom/paddingLeft/paddingRight  | css style |
| font/fontSize/fontStyle/fontVariant/fontWeight/fontFamily  |  css style |
| lineHeight | css style |
| letterSpacing |  css style |
| textDecoration |  css style |
| textIndent    | css style |

对已经应用样式的选区设置会取消样式。css style 表示 css 中规定的允许值。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.format.html)

```tsx
(name: string, value?: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 属性 |
| value | `string` | 值 |

### getContents

获取编辑器内容

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getContents.html)

```tsx
(option?: GetContentsOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `GetContentsOption` |

### getSelectionText

获取编辑器已选区域内的纯文本内容。当编辑器失焦或未选中一段区间时，返回内容为空。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getSelectionText.html)

```tsx
(option?: Option) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### insertDivider

插入分割线

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertDivider.html)

```tsx
(option?: InsertDividerOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `InsertDividerOption` |

### insertImage

插入图片。

地址为临时文件时，获取的编辑器html格式内容中 `<img>` 标签增加属性 data-local，delta 格式内容中图片 attributes 属性增加 data-local 字段，该值为传入的临时文件地址。

开发者可选择在提交阶段上传图片到服务器，获取到网络地址后进行替换。替换时对于html内容应替换掉 `<img>` 的 src 值，对于 delta 内容应替换掉 `insert { image: abc }` 值。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertImage.html)

```tsx
(option: InsertImageOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `InsertImageOption` |

#### 示例代码

```tsx
this.editorCtx.insertImage({
  src: 'xx',
  width: '100px',
  height: '50px',
  extClass: className
})
```

### insertText

覆盖当前选区，设置一段文本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertText.html)

```tsx
(option: InsertTextOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `InsertTextOption` |

### redo

恢复

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.redo.html)

```tsx
(option?: RedoOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `RedoOption` |

### removeFormat

清除当前选区的样式

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.removeFormat.html)

```tsx
(option?: RemoveFormatOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `RemoveFormatOption` |

### scrollIntoView

使得编辑器光标处滚动到窗口可视区域内。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.scrollIntoView.html)

```tsx
() => void
```

### setContents

初始化编辑器内容，html和delta同时存在时仅delta生效

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.setContents.html)

```tsx
(option: SetContentsOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `SetContentsOption` |

### undo

撤销

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.undo.html)

```tsx
(option?: UndoOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `UndoOption` |

## 参数

### BlurOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### ClearOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### GetContentsOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### getSelectionText

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | `string` | 纯文本内容 |

### InsertDividerOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### InsertImageOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| src | `string` | 是 | 图片地址，仅支持 http(s)、base64、云图片(2.8.0)、临时文件(2.8.3)。 |
| nowrap | `boolean` | 否 | 插入图片后是否自动换行，默认换行 |
| alt | `string` | 否 | 图像无法显示时的替代文本 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| data | `TaroGeneral.IAnyObject` | 否 | data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上 |
| extClass | `string` | 否 | 添加到图片 img 标签上的类名 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| height | `string` | 否 | 图片高度 (pixels/百分比) |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| width | `string` | 否 | 图片宽度（pixels/百分比) |

### InsertTextOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| text | `string` | 否 | 文本内容 |

### RedoOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### RemoveFormatOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SetContentsOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| delta | `TaroGeneral.IAnyObject` | 否 | 表示内容的delta对象 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| html | `string` | 否 | 带标签的HTML内容 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### UndoOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| EditorContext | ✔️ |  |  |  |  |
| EditorContext.blur | ✔️ |  |  |  |  |
| EditorContext.clear | ✔️ |  |  |  |  |
| EditorContext.format | ✔️ |  |  |  |  |
| EditorContext.getContents | ✔️ |  |  |  |  |
| EditorContext.getSelectionText | ✔️ |  |  |  |  |
| EditorContext.insertDivider | ✔️ |  |  |  |  |
| EditorContext.insertImage | ✔️ |  |  |  |  |
| EditorContext.insertText | ✔️ |  |  |  |  |
| EditorContext.redo | ✔️ |  |  |  |  |
| EditorContext.removeFormat | ✔️ |  |  |  |  |
| EditorContext.scrollIntoView | ✔️ |  |  |  |  |
| EditorContext.setContents | ✔️ |  |  |  |  |
| EditorContext.undo | ✔️ |  |  |  |  |

---

## docs/apis/media/image/chooseImage.md

---
title: Taro.chooseImage(option)
sidebar_label: chooseImage
---

从本地相册选择图片或使用相机拍照。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)

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
| count | `number` | `9` | 否 | 最多可以选择的图片张数<br />API 支持度: weapp, alipay, swan, tt, h5, rn |
| sizeType | `(keyof sizeType)[]` | `['original', 'compressed']` | 否 | 所选的图片的尺寸<br />API 支持度: weapp, alipay, swan, tt, rn |
| sourceType | `(keyof sourceType)[]` | `['album', 'camera']` | 否 | 选择图片的来源<br />API 支持度: weapp, alipay, swan, tt, h5, rn |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| imageId | `string` |  | 否 | 用来上传的input元素ID（仅h5端<br />API 支持度: h5 |

### sizeType

图片的尺寸

| 参数 | 说明 |
| --- | --- |
| original | 原图 |
| compressed | compressed |

### sourceType

图片的来源

| 参数 | 说明 |
| --- | --- |
| album | 从相册选图 |
| camera | 使用相机 |
| user | 使用前置摄像头(仅H5纯浏览器使用) |
| environment | 使用后置摄像头(仅H5纯浏览器) |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePaths | `string[]` | 图片的本地临时文件路径列表 |
| tempFiles | `ImageFile[]` | 图片的本地临时文件列表 |
| errMsg | `string` | 调用结果 |

### ImageFile

图片的本地临时文件列表

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| path | `string` | 是 | 本地临时文件路径 |
| size | `number` | 是 | 本地临时文件大小，单位 B |
| type | `string` | 否 | 文件的 MIME 类型<br />API 支持度: h5 |
| originalFileObj | `File` | 否 | 原始的浏览器 File 对象<br />API 支持度: h5 |

## 示例代码

```tsx
Taro.chooseImage({
  count: 1, // 默认9
  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths
  }
})
```

---

## docs/apis/media/image/chooseMessageFile.md

---
title: Taro.chooseMessageFile(option)
sidebar_label: chooseMessageFile
---

从客户端会话选择文件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)

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
| count | `number` | 是 | 最多可以选择的文件个数，可以 0～100 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| extension | `string[]` | 否 | 根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| type | `keyof SelectType` | 否 | 所选的文件的类型 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFiles | `ChooseFile[]` | 返回选择的文件的本地临时文件对象数组 |
| errMsg | `string` | 调用结果 |

### ChooseFile

返回选择的文件的本地临时文件对象数组

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 选择的文件名称 |
| path | `string` | 本地临时文件路径 |
| size | `number` | 本地临时文件大小，单位 B |
| time | `number` | 选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性 |
| type | `keyof SelectedType` | 选择的文件类型 |

### SelectType

| 参数 | 说明 |
| --- | --- |
| all | 从所有文件选择 |
| video | 只能选择视频文件 |
| image | 只能选择图片文件 |
| file | 可以选择除了图片和视频之外的其它的文件 |

### SelectedType

| 参数 | 说明 |
| --- | --- |
| video | 选择了视频文件 |
| image | 选择了图片文件 |
| file | 选择了除图片和视频的文件 |

## 示例代码

```tsx
Taro.chooseMessageFile({
  count: 10,
  type: 'image',
  success: function (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFiles
  }
})
```

---

## docs/apis/media/image/compressImage.md

---
title: Taro.compressImage(option)
sidebar_label: compressImage
---

压缩图片接口，可选压缩质量

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html)

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
| src | `string` | 是 | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| quality | `number` | 否 | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。 |
| compressedWidth | `number` | 否 | 压缩后图片的宽度，单位为px，若不填写则默认以 compressedHeight 为准等比缩放。 |
| compressedHeight | `number` | 否 | 压缩后图片的高度，单位为px，若不填写则默认以 compressedWidth 为准等比缩放。 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 压缩后图片的临时文件路径 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.compressImage({
  src: '', // 图片路径
  quality: 80 // 压缩质量
})
```

---

## docs/apis/media/image/cropImage.md

---
title: Taro.cropImage(option)
sidebar_label: cropImage
---

裁剪图片接口

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.cropImage.html)

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
| src | `string` | 是 | 图片路径，图片的路径，支持本地路径、代码包路径 |
| cropScale | `keyof CropScale` | 是 | 裁剪比例 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 剪裁后图片的临时文件路径 (本地路径) |

### CropScale

| 参数 | 说明 |
| --- | --- |
| 1:1 | 宽高比为1比1 |
| 3:4 | 宽高比为3比4 |
| 4:3 | 宽高比为4比3 |
| 4:5 | 宽高比为4比5 |
| 5:4 | 宽高比为5比4 |
| 9:16 | 宽高比为9比16 |
| 16:9 | 宽高比为16比9 |

## 示例代码

```tsx
Taro.cropImage({
  src: '', // 图片路径
  cropScale: '1:1', // 裁剪比例
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths
  }
})
```

---

## docs/apis/media/image/editImage.md

---
title: Taro.editImage(option)
sidebar_label: editImage
---

编辑图片接口

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.editImage.html)

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
| src | `string` | 是 | 图片路径，图片的路径，支持本地路径、代码包路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 编辑后图片的临时文件路径 (本地路径) |

## 示例代码

```tsx
Taro.editImage({
  src: '', // 图片路径
})
```

---

## docs/apis/media/image/getImageInfo.md

---
title: Taro.getImageInfo(option)
sidebar_label: getImageInfo
---

获取图片信息。网络图片需先配置download域名才能生效。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)

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
| src | `string` | 是 | 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| height | `number` |  | 图片原始高度，单位px。不考虑旋转。 |
| orientation | `keyof Orientation` | `"up"` | [拍照时设备方向](http://sylvana.net/jpegcrop/exif_orientation.html) |
| path | `string` |  | 图片的本地路径 |
| type | `string` |  | 图片格式 |
| width | `number` |  | 图片原始宽度，单位px。不考虑旋转。 |
| errMsg | `string` |  | 调用结果 |

### Orientation

| 参数 | 说明 |
| --- | --- |
| up | 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。 |
| up-mirrored | 同 up，但镜像翻转，对应 Exif 中的 2 |
| down | 旋转180度，对应 Exif 中的 3 |
| down-mirrored | 同 down，但镜像翻转，对应 Exif 中的 4 |
| left-mirrored | 同 left，但镜像翻转，对应 Exif 中的 5 |
| right | 顺时针旋转90度，对应 Exif 中的 6 |
| right-mirrored | 同 right，但镜像翻转，对应 Exif 中的 7 |
| left | 逆时针旋转90度，对应 Exif 中的 8 |

## 示例代码

```tsx
Taro.getImageInfo({
  src: 'images/a.jpg',
  success: function (res) {
    console.log(res.width)
    console.log(res.height)
  }
})
Taro.chooseImage({
  success: function (res) {
    Taro.getImageInfo({
      src: res.tempFilePaths[0],
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})
```

---

## docs/apis/media/image/previewImage.md

---
title: Taro.previewImage(option)
sidebar_label: previewImage
---

在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)

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
| urls | `string[]` | 是 | 需要预览的图片链接列表。 |
| current | string or number | 否 | 当前显示图片的http链接 |
| enablesavephoto | `boolean` | 否 | 是否支持长按下载图片<br />API 支持度: alipay 基础库: 1.13.0 |
| enableShowPhotoDownload | `boolean` | 否 | 是否在右下角显示下载入口<br />API 支持度: alipay 基础库: 1.13.0 |
| showmenu | `boolean` | 否 | <br />API 支持度: weapp 最低版本：2.13.0。是否显示长按菜单，默认值：true |
| referrerPolicy | `string` | 否 | <br />API 支持度: weapp 最低版本：2.13.0。origin: 发送完整的referrer; no-referrer: 不发送。格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；默认值：no-referrer |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.previewImage({
  current: '', // 当前显示图片的http链接
  urls: [] // 需要预览的图片http链接列表
})
```

---

## docs/apis/media/image/previewMedia.md

---
title: Taro.previewMedia(option)
sidebar_label: previewMedia
---

预览图片和视频。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Sources

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| url | `string` | 是 | 图片或视频的地址 |
| type | "image" or "video" | 否 | 资源的类型（图片或视频），默认值：image |
| poster | `string` | 否 | 视频的封面图片 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| sources | `Sources[]` | 是 | 需要预览的资源列表 |
| current | `number` | 否 | 当前显示的资源序号，默认值：0 |
| showmenu | `boolean` | 否 | 是否显示长按菜单	2.13.0，默认值：true |
| referrerPolicy | `string` | 否 | origin: 发送完整的referrer; no-referrer: 不发送。格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；默认值：no-referrer |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.previewMedia({
  sources: []
})
```

---

## docs/apis/media/image/saveImageToPhotosAlbum.md

---
title: Taro.saveImageToPhotosAlbum(option)
sidebar_label: saveImageToPhotosAlbum
---

保存图片到系统相册。需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.writePhotosAlbum

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html)

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
| filePath | `string` | 是 | 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.saveImageToPhotosAlbum({
  success: function (res) { }
})
```

---

