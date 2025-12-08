## docs/components/open/ad-custom.md

---
title: AdCustom
sidebar_label: AdCustom
---

Banner 广告

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html)

## 类型

```tsx
ComponentType<AdCustomProps>
```

## 示例代码

```tsx
class App extends Component {
  render () {
    return (
      <AdCustom
        unitId=''
        adIntervals={60}
        onLoad={() => console.log('ad onLoad')}
        onError={() => console.log('ad onError')}
        onClose={() => console.log('ad onClose')}
      />
    )
  }
}
```

## AdCustomProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| unitId | `string` | 是 | 广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com/)的流量主模块新建 |
| adIntervals | `number` | 否 | 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） |
| onLoad | `CommonEventFunction` | 否 | 广告加载成功的回调 |
| onError | `CommonEventFunction<AdProps.onErrorEventDetail>` | 否 | 当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| AdCustomProps.unitId | ✔️ |  |  |  |
| AdCustomProps.adIntervals | ✔️ |  |  |  |
| AdCustomProps.onLoad | ✔️ |  |  |  |
| AdCustomProps.onError | ✔️ |  |  |  |

---

## docs/components/open/ad.md

---
title: Ad
sidebar_label: Ad
---

Banner 广告

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html)

## 类型

```tsx
ComponentType<AdProps>
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
class App extends Component {
  render () {
    return (
      <Ad
        unitId=''
        adIntervals={60}
        onLoad={() => console.log('ad onLoad')}
        onError={() => console.log('ad onError')}
        onClose={() => console.log('ad onClose')}
      />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <ad
    unit-id=""
    ad-intervals="60"
    @load="onLoad"
    @error="onError"
    @close="onClose"
  />
</template>
```
</TabItem>
</Tabs>

## AdProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| unitId | `string` |  | 是 | 广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com/)的流量主模块新建 |
| adIntervals | `number` |  | 否 | 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） |
| adType | "banner" or "video" or "grid" |  | 否 | 广告类型，默认为展示`banner`，可通过设置该属性为`video`展示视频广告, `grid`为格子广告 |
| adTheme | "white" or "black" |  | 否 | 广告主题样式设置 |
| appid | `string` |  | 否 | 小程序应用 ID |
| apid | `string` |  | 否 | 小程序广告位 ID |
| type | `string` | `feed` | 否 | 广告类型：banner、feed ，需和百青藤平台上的代码位类型相匹配 |
| updatetime | `string` |  | 否 | 更改该属性，可以触发广告刷新 |
| fixed | `string` |  | 否 | 广告是否在屏幕中固定展示 |
| scale | `string` | `100` | 否 | 广告的缩放比例，100 为标准尺寸 |
| adLeft | `string` |  | 否 | type 为 feeds 时广告左边距（px），必须大于 0 |
| adTop | `string` |  | 否 | type 为 feeds 时广告上边距（px），必须大于 0 |
| adWidth | `string` |  | 否 | type 为 feeds 时广告宽度（px），默认 100%，最大值为屏幕宽度，最小值为 265 |
| adHeight | `string` |  | 否 | type 为 feeds 时广告高度（px），最小 85，最大 160 |
| blockSize | `string` | `1` | 否 | type 为 block 时请求积木广告数量（展示以实际拉取广告数量为准） |
| blockOrientation | "vertical" or "landscape" | `landscape` | 否 | type 为 block 时请求积木广告排列方向 |
| testBannerType | "one" or "three" | `three` | 否 | 开发者工具下，type 为 banner 时，指定 banner 广告展示三图文还是单图 |
| onLoad | `CommonEventFunction` |  | 否 | 广告加载成功的回调 |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因，事件对象 event.detail = {errCode: 1002} |
| onClose | `CommonEventFunction` |  | 否 | 广告关闭的回调 |
| onStatus | `CommonEventFunction` |  | 否 | 贴片类型广告播放期间触发 |
| onSize | `CommonEventFunction<onSizeEventDetail>` |  | 否 | type 为 feeds 时广告实际宽高回调 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| AdProps.unitId | ✔️ |  | ✔️ | ✔️ |  |  |  |
| AdProps.adIntervals | ✔️ |  | ✔️ |  |  |  |  |
| AdProps.adType | ✔️ |  |  |  |  |  |  |
| AdProps.adTheme | ✔️ |  |  |  |  |  |  |
| AdProps.appid |  | ✔️ |  |  |  |  |  |
| AdProps.apid |  | ✔️ |  |  |  |  |  |
| AdProps.type |  | ✔️(支持 banner、feed) | ✔️ | ✔️(支持 banner、card、feeds、block) |  |  |  |
| AdProps.updatetime |  | ✔️ |  |  |  |  |  |
| AdProps.fixed |  |  | ✔️ |  |  |  |  |
| AdProps.scale |  |  | ✔️ |  |  |  |  |
| AdProps.adLeft |  |  |  | ✔️ |  |  |  |
| AdProps.adTop |  |  |  | ✔️ |  |  |  |
| AdProps.adWidth |  |  |  | ✔️ |  |  |  |
| AdProps.adHeight |  |  |  | ✔️ |  |  |  |
| AdProps.blockSize |  |  |  | ✔️ |  |  |  |
| AdProps.blockOrientation |  |  |  | ✔️ |  |  |  |
| AdProps.testBannerType |  |  |  | ✔️ |  |  |  |
| AdProps.onLoad | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| AdProps.onError | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| AdProps.onClose | ✔️ | ✔️ | ✔️ |  |  |  |  |
| AdProps.onStatus |  | ✔️ |  |  |  |  |  |
| AdProps.onSize |  |  |  | ✔️ |  |  |  |

### onErrorEventDetail

| 参数 | 类型 |
| --- | --- |
| errCode | `keyof AdErrCode` |

### AdErrCode

广告错误码

错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。

| 参数 | 异常情况 | 理由 | 解决方案 |
| --- | :---: | :---: | :---: |
| 1000 | `后端错误调用失败` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1001 | `参数错误` | `使用方法错误` | `可以前往 developers.weixin.qq.com 确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。` |
| 1002 | `广告单元无效` | `可能是拼写错误、或者误用了其他APP的广告ID` | `请重新前往 mp.weixin.qq.com 确认广告位ID。` |
| 1003 | `内部错误` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1004 | `无合适的广告` | `广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告` | `属于正常情况，且开发者需要针对这种情况做形态上的兼容。` |
| 1005 | `广告组件审核中` | `你的广告正在被审核，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1006 | `广告组件被驳回` | `你的广告审核失败，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1007 | `广告组件被封禁` | `你的广告能力已经被封禁，封禁期间无法展现广告` | `请前往 mp.weixin.qq.com 确认小程序广告封禁状态。` |
| 1008 | `广告单元已关闭` | `该广告位的广告能力已经被关闭` | `请前往 mp.weixin.qq.com 重新打开对应广告位的展现。` |

### onSizeEventDetail

| 参数 | 类型 |
| --- | --- |
| width | `number` |
| height | `number` |

---

## docs/components/open/aweme-data.md

---
title: AwemeData
sidebar_label: AwemeData
---

直播间状态组件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/open-capacity/aweme-data/)

## 类型

```tsx
ComponentType<AwemeDataProps>
```

## AwemeDataProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| awemeId | `string` |  | 否 | 用户的抖音号，可以进入抖音 App 用户个人主页查看 |
| type | `string` | `"avatar"` | 否 | 类型，可以选择头像或昵称 |
| disableDefault | `boolean` | `false` | 否 | 禁用默认行为。点击头像时，如果用户处于直播状态下默认会跳转到直播间，非直播状态下跳转到个人主页。如果为 true，点击头像时不会有默认行为。 |
| defaultAvatar | `string` |  | 否 | 获取信息失败时显示的默认头像 url |
| defaultText | `string` |  | 否 | 获取信息失败时显示的默认昵称文本 |
| onError | `CommonEventFunction` |  | 否 | 当错误发生时触发 |

### API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AwemeDataProps.awemeId |  | ✔️ |  |  |  |
| AwemeDataProps.type |  | ✔️ |  |  |  |
| AwemeDataProps.disableDefault |  | ✔️ |  |  |  |
| AwemeDataProps.defaultAvatar |  | ✔️ |  |  |  |
| AwemeDataProps.defaultText |  | ✔️ |  |  |  |
| AwemeDataProps.onError |  | ✔️ |  |  |  |

---

## docs/components/open/comment-detail.md

---
title: CommentDetail
sidebar_label: CommentDetail
---

评论详情

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/comment-detail/)

## 类型

```tsx
ComponentType<CommentDetailProps>
```

## CommentDetailProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| commentParam | `ICommentParam` |  | 是 | 评论核心参数 |
| srid | `string` |  | 是 | 评论 ID |
| isPageScroll | `boolean` | `true` | 否 | 滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 false |
| needToolbar | `boolean` | `true` | 否 | 是否需要底部 toolbar，若使用开发者自定义的底部 toolbar，该参数需设为 false |
| needLikeBtn | `boolean` | `true` | 否 | 是否需要详情顶部父级评论的点赞按钮，默认显示 |
| backListAfterDelete | `boolean` | `true` | 否 | 删除详情后是否返回列表项，默认一站式逻辑。若使用浮层，请设置改属性为 false |
| addComment | `boolean` | `false` | 否 | 用于调起评论发布器发布评论 |
| onDelete | `CommonEventFunction` |  | 否 | 删除整体详情内容时触发，返回数据为{status, data:{srid}} |
| onReply | `CommonEventFunction` |  | 否 | 评论发布成功时触发，返回数据为 {status, data:{srid}} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CommentDetailProps.commentParam |  | ✔️ |  |  |  |
| CommentDetailProps.srid |  | ✔️ |  |  |  |
| CommentDetailProps.isPageScroll |  | ✔️ |  |  |  |
| CommentDetailProps.needToolbar |  | ✔️ |  |  |  |
| CommentDetailProps.needLikeBtn |  | ✔️ |  |  |  |
| CommentDetailProps.backListAfterDelete |  | ✔️ |  |  |  |
| CommentDetailProps.addComment |  | ✔️ |  |  |  |
| CommentDetailProps.onDelete |  | ✔️ |  |  |  |
| CommentDetailProps.onReply |  | ✔️ |  |  |  |

### ICommentParam

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| snid | `string` | 被点赞的文章的 id，与 path 参数一一对应<br />example: "20200101" |
| title | `string` | 文章标题 |
| path | `string` | 智能小程序内页链接，最长不能超过 194 字符<br />example: "/pages/index/index" |

---

## docs/components/open/comment-list.md

---
title: CommentList
sidebar_label: CommentList
---

评论列表

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/comment-list/)

## 类型

```tsx
ComponentType<CommentListProps>
```

## CommentListProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| commentParam | `ICommentParam` |  | 是 | 评论核心参数 |
| toolbarConfig | `IToolbarConfig` |  | 否 | 底部 toolbar 的相关配置 |
| isPageScroll | `boolean` | `true` | 否 | 滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 false |
| needToolbar | `boolean` | `true` | 否 | 是否需要底部 toolbar ，若使用开发者自定义的底部 toolbar ，该参数需设为 false |
| addComment | `boolean` | `false` | 否 | 用于调起评论发布器发布评论，发布成功插入列表第一条，且滚动到列表顶部 |
| detailPath | `string` |  | 否 | 点击单条评论跳转的详情页页面 path ，若没有配置则不会发生跳转；配置的前提是列表与详情均是页面级 |
| isFolded | `boolean` | `false` | 否 | 是否折叠列表，默认全展示 |
| foldNum | `number` | `3` | 否 | 折叠后列表展示最大条数，默认 3 条，最多 10 条 |
| viewMorePath | `string` |  | 否 | 传入放置评论组件的页面路径，如'/pages/list/index'，组件内部会触发跳转逻辑 |
| viewMoreStyle | `IViewMoreStyle` |  | 否 | 『全部 xx 条』的样式，目前只支持开发者自定义字体颜色 |
| onClickComment | `CommonEventFunction` |  | 否 | 绑定点击单条评论的事件，点击单条评论时触发，返回数据为{status, data:{srid}} |
| onViewMore | `CommonEventFunction` |  | 否 | 绑定点击更多事件，若除了页面跳转还需要其他操作，可通过该回调执行；若为浮层，也可使用该回调自定义交互逻辑 |
| onReply | `CommonEventFunction` |  | 否 | 评论发布成功时触发，返回数据为 {status, data:{srid}} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CommentListProps.commentParam |  | ✔️ |  |  |  |
| CommentListProps.toolbarConfig |  | ✔️ |  |  |  |
| CommentListProps.isPageScroll |  | ✔️ |  |  |  |
| CommentListProps.needToolbar |  | ✔️ |  |  |  |
| CommentListProps.addComment |  | ✔️ |  |  |  |
| CommentListProps.detailPath |  | ✔️ |  |  |  |
| CommentListProps.isFolded |  | ✔️ |  |  |  |
| CommentListProps.foldNum |  | ✔️ |  |  |  |
| CommentListProps.viewMorePath |  | ✔️ |  |  |  |
| CommentListProps.viewMoreStyle |  | ✔️ |  |  |  |
| CommentListProps.onClickComment |  | ✔️ |  |  |  |
| CommentListProps.onViewMore |  | ✔️ |  |  |  |
| CommentListProps.onReply |  | ✔️ |  |  |  |

### ICommentParam

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| snid | `string` |  | 是 | 被点赞的文章的 id，与 path 参数一一对应<br />example: "20200101" |
| title | `string` |  | 是 | 文章标题 |
| path | `string` |  | 是 | 智能小程序内页链接，最长不能超过 194 字符<br />example: "/pages/index/index" |
| images | `string[]` | `['https://b.bdstatic.com/miniapp/images/demo-dog.png']` | 否 | 数组第一项用于收藏功能的展示图片 |

### IToolbarConfig

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| placeholder | `string` |  | 否 | 输入框提示文字 |
| moduleList | `string` | `['comment', 'like', 'favor', 'share']` | 否 | 显示的互动模块，对应默认值分别是：评论数、点赞、收藏、分享 |
| share | `IShare` |  | 否 | 若 moduleList 里配置了 share 模块，该参数为必填 |

### IShare

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| title | `string` | 是 | 分享标题 |
| content | `string` | 否 | 分享内容 |
| imageUrl | `string` | 否 | 分享图标 |
| path | `string` | 否 | 页面 path ，必须是以 / 开头的完整路径，如果 path 中参数包含中文字符，需对中文字符进行编码 |

### IViewMoreStyle

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| color | `string` | `"#3388ff"` | 否 | 『全部 xx 条』的字体颜色，默认为视觉提供色号，开发者可传入自定义色号 |

---

## docs/components/open/contact-button.md

---
title: ContactButton
sidebar_label: ContactButton
---

智能客服

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/component/contact-button)

## 类型

```tsx
ComponentType<ContactButtonProps>
```

## ContactButtonProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| tntInstId | `string` |  | 是 | 必填。企业唯一编码，一个企业支付宝账号对应一个编码。 |
| scene | `string` |  | 是 | 必填。聊天窗编码，每个聊天窗的唯一编码。 |
| size | string or number | `25` | 否 | 选填。咨询按钮大小，正方形设置边长（如25*25 px）。 |
| color | `string` | `"#00A3FF"` | 否 | 选填。咨询按钮颜色，默认白底蓝色。 |
| icon | `string` |  | 否 | 选填。咨询按钮头像。 |
| alipayCardNo | `string` |  | 否 | 选填。支付宝访客用户ID（2088开头）。<br />说明： 客服回答问题时，如客户已离开咨询窗口，则通过推送消息到支付宝 card 中提醒客户。 |
| extInfo | `string` |  | 否 | 选填。该属性主要用于传递一些扩展信息给组件，以实现一些高级功能。该属性值的生成方式为：encodeURIComponent({"字段名":"字段值"})， 其中，字段名和字段值要根据实际使用的功能进行替换。<br />目前通过传入扩展信息可支持的 3 个功能：<br />1.访客名片。需传 cinfo 和 key 两个扩展字段，代码形如在云客服中进入 设置 > 服务窗配置 > 聊天窗 URL。点击操作栏中的 聊天窗 URL ，获取 tntInstId（企业编码）和 scene（聊天窗编码）。encodeURIComponent({"cinfo":"生成的 cinfo","key":"生成的key"})，cinfo 和 key 的值说明 支付宝小程序接入访客名片；<br />2.聊天窗默认带出用户的小程序订单数据。需传 appId 字段，代码形如encodeURIComponent({"appId":"商户小程序appid"})<br />3.未读客服消息同步至"我的小程序-我的"。同样需传 appId 字段，代码形如 encodeURIComponent({"appId":"商户小程序appid"})。 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ContactButtonProps.tntInstId |  | ✔️ |  |  |  |
| ContactButtonProps.scene |  | ✔️ |  |  |  |
| ContactButtonProps.size |  | ✔️ |  |  |  |
| ContactButtonProps.color |  | ✔️ |  |  |  |
| ContactButtonProps.icon |  | ✔️ |  |  |  |
| ContactButtonProps.alipayCardNo |  | ✔️ |  |  |  |
| ContactButtonProps.extInfo |  | ✔️ |  |  |  |

---

## docs/components/open/follow-swan.md

---
title: FollowSwan
sidebar_label: FollowSwan
---

关注小程序

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/follow-swan/)

## 类型

```tsx
ComponentType<FollowSwanProps>
```

## FollowSwanProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| size | `string` | `"default"` | 否 | 组件大小 |
| type | `string` | `"primary"` | 否 | 组件样式 |
| onFavorStatusChange | `CommonEventFunction` |  | 否 | 关注和取消关注成功的回调，返回关注状态 {isFavor: trueorfalse} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| FollowSwanProps.size |  | ✔️ |  |  |  |
| FollowSwanProps.type |  | ✔️ |  |  |  |
| FollowSwanProps.onFavorStatusChange |  | ✔️ |  |  |  |

---

## docs/components/open/inline-payment-panel.md

---
title: InlinePaymentPanel
sidebar_label: InlinePaymentPanel
---

内嵌支付组件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel/)

## 类型

```tsx
ComponentType<InlinePaymentPanelProps>
```

## InlinePaymentPanelProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| totalAmount | `string` |  | 否 | 总金额，金额单位分，tip：仅支持整数型字符串 |
| dealId | `string` |  | 否 | 百度收银台的财务结算凭证，详见平台术语 |
| appKey | `string` |  | 否 | 支付能力开通后分配的支付 appKey，详见平台术语 |
| promotionTag | string or string[] |  | 否 | 平台营销信息，此处传当前订单中可使用平台券的 spuid，同时需在 支付能力中搭配使用传入该参数；注：仅与百度合作平台类目券的开发者需要填写该参数 |
| enablePageBackModal | `boolean` | `false` | 否 | 是否设置挽留弹窗 |
| customStyle | `string` |  | 否 | 自定义样式设置 |
| styleType | "tiny" or "small" or "default" or "medium" or "large" | `"default"` | 否 | 自定义样式档位配置，各档位配置项包括支付渠道/优惠券条高度、渠道图标大小、支付渠道文案字体大小、营销文案字体大小、选择器图标大小 |
| onGetPaymentInfo | `CommonEventFunction` |  | 否 | 获取支付相关信息，具体信息在返回值的 detail 字段中 |
| onError | `CommonEventFunction` |  | 否 | 当发生错误时触发 error 事件，具体信息在返回值的 detail 字段中，例如 {detail: {errMsg: "something is wrong"}} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| InlinePaymentPanelProps.totalAmount |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.dealId |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.appKey |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.promotionTag |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.enablePageBackModal |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.customStyle |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.styleType |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.onGetPaymentInfo |  | ✔️ |  |  |  |
| InlinePaymentPanelProps.onError |  | ✔️ |  |  |  |

---

## docs/components/open/lifestyle.md

---
title: Lifestyle
sidebar_label: Lifestyle
---

关注生活号

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/component/lifestyle)

## 类型

```tsx
ComponentType<LifestyleProps>
```

## LifestyleProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| publicId | `string` | 否 | 必填，生活号 ID（即生活号 APPID），必须是当前小程序同账号主体且已关联的生活号。 |
| memo | `string` | 否 | 文案。支持商家自定义，最多展示一行。 |
| onFollow | `CommonEventFunction` | 否 | 当用户关注生活号成功后执行。 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LifestyleProps.publicId |  | ✔️ |  |  |  |
| LifestyleProps.memo |  | ✔️ |  |  |  |
| LifestyleProps.onFollow |  | ✔️ |  |  |  |

---

## docs/components/open/like.md

---
title: Like
sidebar_label: Like
---

点赞

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/like/)

## 类型

```tsx
ComponentType<LikeProps>
```

## LikeProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| isLiked | `boolean` | `false` | 否 | 是否已被点赞 |
| mode | `string` | `"icon"` | 否 | 按钮模式。icon：表示仅有图标；mixture：表示图标文字结合 |
| iconType | `string` | `"hand"` | 否 | 图标类型。hand：表示手形；heart：表示心形 |
| likeText | `string` | `"赞"` | 否 | 点赞按钮上的文案。默认为赞，仅在 mode 属性值为'mixture'时有效 |
| likeNum | `number` | `0` | 否 | 点赞数量 |
| likeType | `number` | `0` | 否 | 被点赞的对象类型。0：表示对文章内容进行点赞；1：表示对评论内容进行点赞 |
| animationType | `number` | `1` | 否 | 点赞动效形式。0：无动效；1：轻动效；2：强动效 |
| isShowToast | `boolean` | `false` | 否 | 点赞后是否弹出 toast 提示 |
| toastText | `string[]` | `['已点赞', '已取消']` | 否 | toast 文案，默认为已点赞、已取消 |
| likeParam | `ILikeParam` |  | 是 | 点赞服务需要的必要参数 |
| onError | `CommonEventFunction` |  | 否 | 使用 npm 方式引入点赞组件时，点击按钮时在用户未登录状态下会触发此事件；使用动态库方式引入点赞组件时，点击按钮时在用户未登录状态下不会触发此事件 |
| onSuccess | `CommonEventFunction` |  | 否 | 点击点赞按钮，在点赞服务成功后将状态返回给使用组件者 |
| onFail | `CommonEventFunction` |  | 否 | 点击点赞按钮，在点赞服务失败后将状态返回给使用组件者 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LikeProps.isLiked |  | ✔️ |  |  |  |
| LikeProps.mode |  | ✔️ |  |  |  |
| LikeProps.iconType |  | ✔️ |  |  |  |
| LikeProps.likeText |  | ✔️ |  |  |  |
| LikeProps.likeNum |  | ✔️ |  |  |  |
| LikeProps.likeType |  | ✔️ |  |  |  |
| LikeProps.animationType |  | ✔️ |  |  |  |
| LikeProps.isShowToast |  | ✔️ |  |  |  |
| LikeProps.toastText |  | ✔️ |  |  |  |
| LikeProps.likeParam |  | ✔️ |  |  |  |
| LikeProps.onError |  | ✔️ |  |  |  |
| LikeProps.onSuccess |  | ✔️ |  |  |  |
| LikeProps.onFail |  | ✔️ |  |  |  |

### ILikeParam

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| openid | `string` | 是 | 用户身份唯一标识 |
| snid | `string` | 是 | 被点赞的文章的 id，与 path 参数一一对应<br />example: "20200101" |
| spid | `string` | 否 | 被点赞的评论 id |
| title | `string` | 是 | 文章标题 |
| path | `string` | 是 | 智能小程序内页链接，最长不能超过 194 字符<br />example: "/pages/index/index" |

---

## docs/components/open/login.md

---
title: Login
sidebar_label: Login
---

联合登录 / 手机号授权内嵌组件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/login/)

## 类型

```tsx
ComponentType<LoginProps>
```

## LoginProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| buttonClass | `string` |  | 否 | 组件中用户授权按钮的类名，可用于自定义样式 |
| checkedColor | `string` | `"#3388FF"` | 否 | 组件中用户授权勾选框选中时的颜色，同 CSS 的 color |
| themeColor | `string` | `"#3388FF"` | 否 | 主题颜色，设置后将应用于 “用户授权按钮背景色” 和 “用户授权勾选框选中时的颜色”<br />注：theme-color 的优先级低于 button-class 和 checked-color，且当 button-class 存在时，theme-color 不生效 |
| onGetPhoneNumber | `CommonEventFunction` |  | 否 | 用户完成授权后，获取用户手机号：<br />detail.errMsg 值为"getPhoneNumber:ok" 时代表用户信息获取成功；<br />detail.errMsg 值为"getPhoneNumber:fail auth deny"时代表用户信息获取失败。<br />参考 用户数据的签名验证和加解密 对用户数据进行处理获得用户手机号。<br />用户手机号信息解密后数据示例：{"mobile":"15000000000"}<br />1. 非个人开发者可申请；<br />2. 审核通过后，进入小程序首页,在左侧导航栏单击“设置 -> 开发设置”。下拉页面，在“获取用户手机号权限申请”中单击“申请开通” |
| onLoadError | `CommonEventFunction` |  | 否 | 组件加载失败回调 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LoginProps.buttonClass |  | ✔️ |  |  |  |
| LoginProps.checkedColor |  | ✔️ |  |  |  |
| LoginProps.themeColor |  | ✔️ |  |  |  |
| LoginProps.onGetPhoneNumber |  | ✔️ |  |  |  |
| LoginProps.onLoadError |  | ✔️ |  |  |  |

---

## docs/components/open/official-account.md

---
title: OfficialAccount
sidebar_label: OfficialAccount
---

公众号关注组件。当用户扫小程序码打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。

Tips
使用组件前，需前往小程序后台，在“设置”->“关注公众号”中设置要展示的公众号。注：设置的公众号需与小程序主体一致。

在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号组件的能力:

当小程序从扫小程序码场景（场景值1047，场景值1124）打开时
当小程序从聊天顶部场景（场景值1089）中的「最近使用」内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态
当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html)

## 类型

```tsx
ComponentType<OfficialAccountProps>
```

## OfficialAccountProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| onLoad | `CommonEventFunction<Detail>` | 否 | 组件加载成功时触发 |
| onError | `CommonEventFunction<Detail>` | 否 | 组件加载失败时触发 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| OfficialAccountProps.onLoad | ✔️ |  |  |  |
| OfficialAccountProps.onError | ✔️ |  |  |  |

### Detail

detail 对象

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| status | `number` | 状态码 |
| errMsg | `string` | 错误信息 |

### Status

status 有效值

| 参数 | 说明 |
| --- | --- |
| -2 | 网络错误 |
| -1 | 数据解析错误 |
| 0 | 加载成功 |
| 1 | 小程序关注公众号功能被封禁 |
| 2 | 关联公众号被封禁 |
| 3 | 关联关系解除或未选中关联公众号 |
| 4 | 未开启关注公众号功能 |
| 5 | 场景值错误 |
| 6 | 重复创建 |

---

## docs/components/open/open-data.md

---
title: OpenData
sidebar_label: OpenData
---

用于展示平台开放的数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)

## 类型

```tsx
ComponentType<OpenDataProps>
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
class App extends Component {
  render () {
    return (
      <OpenData type='userAvatarUrl'/>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <open-data type="userAvatarUrl" />
</template>
```
</TabItem>
</Tabs>

## OpenDataProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | `keyof Type` |  | 是 | 开放数据类型 |
| openGid | `string` |  | 否 | 当 type="groupName" 时生效, 群id |
| lang | `keyof Lang` | `"en"` | 否 | 当 type="user*" 时生效，以哪种语言展示 userInfo |
| defaultText | `string` |  | 否 | 数据为空时的默认文案 |
| defaultAvatar | `string` |  | 否 | 用户头像为空时的默认图片，支持相对路径和网络图片路径 |
| useEmptyValue | `string` |  | 否 | 当数据为空且未设置默认值时，是否显示官方默认值 |
| shareTicket | `string` |  | 否 | 当 type=groupCloudStorage 时有效，群分享对应的 shareTicket |
| keyList | `string` |  | 否 | 当 type=*CloudStorage 时有效，指定要拉取的 key 列表 |
| componentData | `string` |  | 否 | 当 type=*CloudStorage 时有效，从主域透传给开放数据域的数据，会自动注入到自定义开放数据域组件的 properties 中 |
| onError | `CommonEventFunction` |  | 否 | 群名称或用户信息为空时触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| OpenDataProps.type | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| OpenDataProps.openGid | ✔️ |  |  |  |  |  |  |
| OpenDataProps.lang | ✔️ |  |  | ✔️ |  |  |  |
| OpenDataProps.defaultText | ✔️ |  | ✔️ |  |  |  |  |
| OpenDataProps.defaultAvatar | ✔️ |  | ✔️ |  |  |  |  |
| OpenDataProps.useEmptyValue |  |  | ✔️ |  |  |  |  |
| OpenDataProps.shareTicket |  |  |  | ✔️ |  |  |  |
| OpenDataProps.keyList |  |  |  | ✔️ |  |  |  |
| OpenDataProps.componentData |  |  |  | ✔️ |  |  |  |
| OpenDataProps.onError | ✔️ |  | ✔️ | ✔️ |  |  |  |

### Type

type 的合法值

| 参数 | 说明 |
| --- | --- |
| groupName | 拉取群名称 |
| userNickName | 用户昵称 |
| userAvatarUrl | 用户头像 |
| userGender | 用户性别 |
| userCity | 用户所在城市 |
| userProvince | 用户所在省份 |
| userCountry | 用户所在国家 |
| userLanguage | 用户的语言 |

### Lang

lang 的合法值

| 参数 | 说明 |
| --- | --- |
| en | 英文 |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |

---

## docs/components/open/others.md

---
title: 其他
sidebar_label: 其他
---

##### 其他组件

除导航列表的一些组件外，还有一些差异化组件，每个端不同，后续计划将这些统一封装。目前差异化组件请详看各小程序官网。

>其他组件请看各小程序官方文档

[微信小程序](https://developers.weixin.qq.com/miniprogram/dev/component/)。

[百度小程序](https://smartprogram.baidu.com/docs/develop/component/view/)。

[支付宝小程序](https://docs.alipay.com/mini/component/overview)。

[抖音小程序](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/overview)。

---

## docs/components/open/web-view.md

---
title: WebView
sidebar_label: WebView
---

web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。个人类型与海外类型的小程序暂不支持使用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)

## 类型

```tsx
ComponentType<WebViewProps>
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
class App extends Component {
  handleMessage () {}

  render () {
    return (
      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <web-view src='https://mp.weixin.qq.com/' @message="handleMessage" />
</template>
```
</TabItem>
</Tabs>

## WebViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| src | `string` |  | 是 | webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。 |
| progressbarColor | `string` |  | 否 | webview 的进度条颜色 |
| type | `string` | `default` | 否 | 若使用web-view组件引入第三方客服，必须填写type="im" |
| onMessage | `CommonEventFunction<onMessageEventDetail>` |  | 否 | 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data } |
| onLoad | `CommonEventFunction<onLoadEventDetail>` |  | 否 | 网页加载成功时候触发此事件。e.detail = { src } |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 网页加载失败的时候触发此事件。e.detail = { src } |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| WebViewProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| WebViewProps.progressbarColor |  |  |  | ✔️ |  |  |  |  |  |  |  |
| WebViewProps.type |  |  |  | ✔️ |  |  |  |  |  |  |  |
| WebViewProps.onMessage | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| WebViewProps.onLoad | ✔️ |  | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ | ✔️ |
| WebViewProps.onError | ✔️ |  | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ | ✔️ |

### onMessageEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `any[]` | 消息数据，是多次 postMessage 的参数组成的数组 |

### onLoadEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| src | `string` | 网页链接 |

### onErrorEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| src | `string` | 网页链接 |

---

