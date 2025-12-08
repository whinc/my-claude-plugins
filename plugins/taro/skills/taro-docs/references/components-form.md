## docs/components/forms/button.md

---
title: Button
sidebar_label: Button
---

按钮

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

## 类型

```tsx
ComponentType<ButtonProps>
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
export default class PageButton extends Component {
  state = {
    btn: [
      {
        text: '页面主操作 Normal',
        size: 'default',
        type: 'primary'
      },
      {
        text: '页面主操作 Loading',
        size: 'default',
        type: 'primary',
        loading: true,
      },
      {
        text: '页面主操作 Disabled',
        size: 'default',
        type: 'primary',
        disabled: true,
      },
      {
        text: '页面次要操作 Normal',
        size: 'default',
        type: 'default'
      },
      {
        text: '页面次要操作 Disabled',
        size: 'default',
        type: 'default',
        disabled: true,
      },
      {
        text: '警告类操作 Normal',
        size: 'default',
        type: 'warn'
      },
      {
        text: '警告类操作 Disabled',
        size: 'default',
        type: 'warn',
        disabled: true,
      }
    ]
  }
  render () {
    return (
      <View className='container'>
        {this.state.btn.map(item => {
          return (
            <Button
              size={item.size ? item.size : ''}
              type={item.type ? item.type : ''}
              loading={item.loading ? item.loading : false}
              disabled={item.disabled ? item.disabled : false}
            >
              {item.text}
            </Button>
          )
        })}
        <Button className='btn-max-w' plain type='primary'>按钮</Button>
        <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
        <Button className='btn-max-w' plain >按钮</Button>
        <Button className='btn-max-w' plain disabled >按钮</Button>
        <Button size='mini' type='primary'>按钮</Button>
        <Button size='mini' >按钮</Button>
        <Button size='mini' type='warn'>按钮</Button>
        <Button openType='getPhoneNumber' onGetPhoneNumber="callback">按钮</Button>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <button
      v-for="item in btn"
      :size="item.size ? item.size : ''"
      :type="item.type ? item.type : ''"
      :loading="item.loading ? item.loading : false"
      :disabled="item.disabled ? item.disabled : false"
    >
      {{ item.text }}
    </button>
    <button class="btn-max-w" :plain="true" type="primary">按钮</button>
    <button class="btn-max-w" :plain="true" type="primary" :disabled="true">不可点击的按钮</button>
    <button class="btn-max-w" :plain="true">按钮</button>
    <button class="btn-max-w" :plain="true" :disabled="true">按钮</button>
    <button size="mini" type="primary">按钮</button>
    <button size="mini" >按钮</button>
    <button size="mini" type="warn">按钮</button>
    <button open-type="getPhoneNumber" @getphonenumber="callback">按钮</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      btn: [
        {
          text: '页面主操作 Normal',
          size: 'default',
          type: 'primary'
        },
        {
          text: '页面主操作 Loading',
          size: 'default',
          type: 'primary',
          loading: true,
        },
        {
          text: '页面主操作 Disabled',
          size: 'default',
          type: 'primary',
          disabled: true,
        },
        {
          text: '页面次要操作 Normal',
          size: 'default',
          type: 'default'
        },
        {
          text: '页面次要操作 Disabled',
          size: 'default',
          type: 'default',
          disabled: true,
        },
        {
          text: '警告类操作 Normal',
          size: 'default',
          type: 'warn'
        },
        {
          text: '警告类操作 Disabled',
          size: 'default',
          type: 'warn',
          disabled: true,
        }
      ]
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## ButtonProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| size | `keyof Size` | `default` | 否 | 按钮的大小 |
| type | `keyof Type` | `default` | 否 | 按钮的样式类型 |
| plain | `boolean` | `false` | 否 | 按钮是否镂空，背景色透明 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| loading | `boolean` | `false` | 否 | 名称前是否带 loading 图标 |
| formType | `keyof FormType` |  | 否 | 用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件 |
| openType | `OpenType` |  | 否 | 微信开放能力 |
| hoverClass | `string` | `button-hover` | 否 | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 |
| hoverStyle | `StyleProp<ViewStyle>` | `none` | 否 | 由于 RN 不支持 hoverClass，故 RN 端的 Button 组件实现了 `hoverStyle`属性，写法和 style 类似，只不过 `hoverStyle` 的样式是指定按下去的样式。 |
| hoverStopPropagation | `boolean` | `false` | 否 | 指定是否阻止本节点的祖先节点出现点击态 |
| hoverStartTime | `number` | `20` | 否 | 按住后多久出现点击态，单位毫秒 |
| hoverStayTime | `number` | `70` | 否 | 手指松开后点击态保留时间，单位毫秒 |
| lang | `keyof Lang` |  | 否 | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。<br /><br />生效时机: `open-type="getUserInfo"` |
| sessionFrom | `string` |  | 否 | 会话来源<br /><br />生效时机：`open-type="contact"` |
| sendMessageTitle | `string` | `当前标题` | 否 | 会话内消息卡片标题<br /><br />生效时机：`open-type="contact"` |
| sendMessagePath | `string` | `当前标题` | 否 | 会话内消息卡片点击跳转小程序路径<br /><br />生效时机：`open-type="contact"` |
| sendMessageImg | `string` | `截图` | 否 | 会话内消息卡片图片<br /><br />生效时机：`open-type="contact"` |
| appParameter | `string` |  | 否 | 打开 APP 时，向 APP 传递的参数<br /><br />生效时机：`open-type="launchApp"` |
| scope | "userInfo" or "phoneNumber" |  | 否 | 支付宝小程序 scope<br /><br />生效时机：`open-type="getAuthorize"` |
| showMessageCard | `boolean` | `false` | 否 | 显示会话内消息卡片<br /><br />生效时机：`open-type="contact"` |
| publicId | `string` |  | 否 | 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。 |
| templateId | string or string[] |  | 否 | 发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取<br />当参数类型为 Array 时，可传递 1~3 个模板库标题 ID |
| subscribeId | `string` |  | 否 | 发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br />注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id |
| groupId | `string` |  | 否 | 群聊 id |
| guildId | `string` |  | 否 | 打开频道页面时，传递的频道号 |
| shareType | `string` | `27` | 否 | 分享类型集合，请参考下面share-type有效值说明。share-type后续将不再维护，请更新为share-mode |
| shareMode | `string` | `['qq', 'qzone']` | 否 | 分享类型集合，请参考下面share-mode有效值说明 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| openId | `string` |  | 否 | 添加好友时，对方的 openid |
| shareMessageFriendInfo | `string` |  | 否 | 发送对象的 FriendInfo |
| shareMessageTitle | `string` |  | 否 | 转发标题，不传则默认使用当前小程序的昵称。 FriendInfo |
| shareMessageImg | `string` |  | 否 | 转发显示图片的链接，可以是网络图片路径（仅 QQ CDN 域名路径）或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4FriendInfo |
| dataAwemeId | `string` |  | 否 | 跳转抖音号个人页，只支持小程序绑定的品牌号、员工号、合作号 |
| dataIsHalfPage | `boolean` |  | 否 | 是否开启半屏模式 |
| onGetUserInfo | `CommonEventFunction<onGetUserInfoEventDetail>` |  | 否 | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与 Taro.getUserInfo 返回的一致<br /><br />生效时机: `open-type="getUserInfo"` |
| onGetAuthorize | `CommonEventFunction` |  | 否 | 支付宝获取会员基础信息授权回调<br /><br />生效时机：`open-type="getAuthorize"` |
| onContact | `CommonEventFunction<onContactEventDetail>` |  | 否 | 客服消息回调<br /><br />生效时机：`open-type="contact"` |
| onGetPhoneNumber | `CommonEventFunction<onGetPhoneNumberEventDetail>` |  | 否 | 获取用户手机号回调<br /><br />生效时机：`open-type="getPhoneNumber"` |
| onGetRealTimePhoneNumber | `CommonEventFunction<onGetRealTimePhoneNumberEventDetail>` |  | 否 | 手机号实时验证回调，`open-type="getRealtimePhoneNumber"` 时有效 |
| onError | `CommonEventFunction` |  | 否 | 当使用开放能力时，发生错误的回调<br /><br />生效时机：`open-type="launchApp"` |
| onOpenSetting | `CommonEventFunction<onOpenSettingEventDetail>` |  | 否 | 在打开授权设置页后回调<br /><br />生效时机：`open-type="openSetting"` |
| onLaunchApp | `CommonEventFunction` |  | 否 | 打开 APP 成功的回调<br /><br />生效时机：`open-type="launchApp"` |
| onChooseAvatar | `CommonEventFunction` |  | 否 | 获取用户头像回调<br /><br />生效时机：`open-type="chooseAvatar"` |
| onAgreePrivacyAuthorization | `CommonEventFunction` |  | 否 | 用户同意隐私协议事件回调，`open-type="agreePrivacyAuthorization"`时有效 |
| onTap | `CommonEventFunction` |  | 否 | 点击。<br />说明： 每点击一次会触发一次事件，建议自行使用代码防止重复点击,可以使用 js 防抖和节流实现。 |
| onFollowLifestyle | CommonEventFunction<{ followStatus: true or 1 or 2 or 3; }> |  | 否 | 当 open-type 为 lifestyle 时有效。<br />当点击按钮时触发。<br />event.detail = { followStatus }，followStatus 合法值有 1、2、3，其中 1 表示已关注。2 表示用户不允许关注。3 表示发生未知错误；<br />已知问题：基础库 1.0，当用户在点击按钮前已关注生活号，event.detail.followStatus 的值为 true。 |
| onChooseAddress | `CommonEventFunction` |  | 否 | 用户点击该按钮时，调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，从返回参数的 detail 中获取，和 swan.chooseAddress 一样的。和 open-type 搭配使用，使用时机：open-type="chooseAddress" |
| onChooseInvoiceTitle | `CommonEventFunction` |  | 否 | 用户点击该按钮时，选择用户的发票抬头，和 swan.chooseInvoiceTitle 一样的。和 open-type 搭配使用，使用时机：open-type="chooseInvoiceTitle" |
| onLogin | `CommonEventFunction` |  | 否 | 登录回调，和 open-type 搭配使用，使用时机：open-type="login"。可以通过返回参数的 detail 判断是否登录成功，当 errMsg 为'login:ok'时即为成功。如想获取登录凭证请使用 swan.getLoginCode |
| onSubscribe | `CommonEventFunction` |  | 否 | 订阅消息授权回调，和 open-type 搭配使用，使用时机：open-type="subscribe" |
| onAddFriend | `CommonEventFunction` |  | 否 | 添加好友的回调 |
| onAddGroupApp | `CommonEventFunction` |  | 否 | 添加群应用的回调。errCode 错误码：41004（当前用户非管理员或群主，无权操作），41005（超过可添加群应用的群数量） |
| onOpenAwemeUserProfile | `CommonEventFunction` |  | 否 | 监听跳转抖音号个人页的回调<br /><br />生效时机：`open-type="openAwemeUserProfile"` |
| onJoinGroup | `CommonEventFunction<{ errMsg: string; errNo: number; }>` |  | 否 | 加群后触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ButtonProps.size | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ButtonProps.type | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.plain | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.loading | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.formType | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |
| ButtonProps.openType | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| ButtonProps.hoverClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(支持 hoverStyle 属性，但框架未支持 hoverClass) |  | ✔️ | ✔️ |
| ButtonProps.hoverStyle |  |  |  |  |  |  |  | ✔️ |  |  |  |
| ButtonProps.hoverStopPropagation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| ButtonProps.hoverStartTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ButtonProps.hoverStayTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| ButtonProps.lang | ✔️ |  |  |  | ✔️ | ✔️ |  |  |  |  |  |
| ButtonProps.sessionFrom | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.sendMessageTitle | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.sendMessagePath | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.sendMessageImg | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.appParameter | ✔️ |  |  |  | ✔️ | ✔️ |  |  |  |  | ✔️ |
| ButtonProps.scope |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.showMessageCard | ✔️ | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.publicId |  |  | ✔️ |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.templateId |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.subscribeId |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.groupId |  |  |  | ✔️(通过创建聊天群、查询群信息获取) | ✔️(打开群资料卡时，传递的群号) |  |  |  |  |  |  |
| ButtonProps.guildId |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.shareType |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.shareMode |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.openId |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.shareMessageFriendInfo |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.shareMessageTitle |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.shareMessageImg |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.dataAwemeId |  |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.dataIsHalfPage |  |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.onGetUserInfo | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  |  |  |  |  |
| ButtonProps.onGetAuthorize |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onContact | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.onGetPhoneNumber | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |  |  |
| ButtonProps.onGetRealTimePhoneNumber | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ButtonProps.onError | ✔️ |  | ✔️ |  | ✔️ | ✔️ |  |  |  |  | ✔️ |
| ButtonProps.onOpenSetting | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| ButtonProps.onLaunchApp | ✔️ |  |  |  | ✔️ |  |  |  |  |  | ✔️ |
| ButtonProps.onChooseAvatar | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ButtonProps.onAgreePrivacyAuthorization | ✔️ |  |  |  |  |  |  |  |  |  |  |
| ButtonProps.onTap |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onFollowLifestyle |  |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onChooseAddress |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onChooseInvoiceTitle |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onLogin |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onSubscribe |  | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onAddFriend |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.onAddGroupApp |  |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.onOpenAwemeUserProfile |  |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.onJoinGroup |  |  |  | ✔️ |  |  |  |  |  |  |  |

### Size

size 的合法值

| 参数 | 说明 |
| --- | --- |
| default | 默认大小 |
| mini | 小尺寸 |

### Type

type 的合法值

| 参数 | 说明 |
| --- | --- |
| primary | 绿色 |
| default | 白色 |
| warn | 红色 |

### FormType

form-type 的合法值

| 参数 | 说明 |
| --- | --- |
| submit | 提交表单 |
| reset | 重置表单 |

### OpenType

open-type 的合法值

### openTypeKeys

open-type 的合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| weapp | { contact: any; share: any; getPhoneNumber: any; getRealtimePhoneNumber: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; chooseAvatar: any; agreePrivacyAuthorization: any; "getPhoneNumberoragreePrivacyAuthorization": any; "getRealtimePhoneNumberoragreePrivacyAuthorization": any; "getUserInfoorag... |  |
| alipay | `{ share: any; getAuthorize: any; contactShare: any; lifestyle: any; }` | 支付宝小程序专属的 open-type 合法值<br />[参考地址](https://opendocs.alipay.com/mini/component/button) |
| qq | `{ share: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; openGroupProfile: any; addFriend: any; addColorSign: any; openPublicProfile: any; addGroupApp: any; shareMessageToFriend: any; }` | QQ 小程序专属的 open-type 合法值<br />[参考地址](https://q.qq.com/wiki/develop/miniprogram/component/form/button.html) |
| tt | `{ share: any; getPhoneNumber: any; im: any; platformIm: any; navigateToVideoView: any; openAwemeUserProfile: any; openWebcastRoom: any; addCalendarEvent: any; addShortcut: any; joinGroup: any; privateMessage: any; authorizePrivateMessage: any; }` | TT 小程序专属的 open-type 合法值<br />[参考地址](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/list/button/#open-type-%E7%9A%84%E5%90%88%E6%B3%95%E5%80%BC) |

### Lang

lang 的合法值

| 参数 | 说明 |
| --- | --- |
| en | 英文 |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |

### onGetUserInfoEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| userInfo | `{ nickName: string; avatarUrl: string; avatar: string; gender: keyof Gender; province: string; city: string; country: string; }` | 是 |  |
| rawData | `string` | 是 | 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 |
| signature | `string` | 是 | 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据 |
| iv | `string` | 是 | 加密算法的初始向量 |
| errMsg | `string` | 是 |  |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |

### Gender

性别的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 未知 |
| 1 | 男 |
| 2 | 女 |

### onContactEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` |  |
| path | `string` | 小程序消息指定的路径 |
| query | `Record<string, any>` | 小程序消息指定的查询参数 |

### onGetPhoneNumberEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| errMsg | `string` | 是 |  |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据 |
| iv | `string` | 是 | 加密算法的初始向量 |
| code | `string` | 否 | 动态令牌。可通过动态令牌换取用户手机号。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95) |
| sign | `string` | 是 | 签名信息，如果在开放平台后台配置了加签方式后有此字段 |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| onGetPhoneNumberEventDetail.sign |  | ✔️ |  |  |  |

### onGetRealTimePhoneNumberEventDetail

| 参数 | 类型 |
| --- | --- |
| code | `string` |

### onOpenSettingEventDetail

| 参数 | 类型 |
| --- | --- |
| errMsg | `string` |
| authSetting | `Record<string, boolean>` |

---

## docs/components/forms/checkbox-group.md

---
title: CheckboxGroup
sidebar_label: CheckboxGroup
---

多项选择器，内部由多个checkbox组成

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html)

## 类型

```tsx
ComponentType<CheckboxGroupProps>
```

## 示例代码

```tsx
export default class PageCheckbox extends Component {
  state = {
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }
  render () {
    return (
      <View className='page-body'>
        <View className='page-section'>
          <Text>默认样式</Text>
          <Checkbox value='选中' checked>选中</Checkbox>
          <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
        </View>
        <View className='page-section'>
          <Text>推荐展示样式</Text>
          {this.state.list.map((item, i) => {
            return (
              <Label className='checkbox-list__label' for={i} key={i}>
                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>
              </Label>
            )
          })}
        </View>
      </View>
    )
  }
}
```

## CheckboxGroupProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| name | `string` | 否 | 表单组件中加上 name 来作为 key |
| onChange | `CommonEventFunction<{ value: string[]; }>` | 否 | `<CheckboxGroup/>` 中选中项发生改变是触发 change 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CheckboxGroupProps.name |  |  | ✔️ | ✔️ |  |  | ✔️ |  |  | ✔️ |  |
| CheckboxGroupProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |

---

## docs/components/forms/checkbox.md

---
title: Checkbox
sidebar_label: Checkbox
---

多选项目

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html)

## 类型

```tsx
ComponentType<CheckboxProps>
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
export default class PageCheckbox extends Component {
  state = {
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }
  render () {
    return (
      <View className='page-body'>
        <View className='page-section'>
          <Text>默认样式</Text>
          <Checkbox value='选中' checked>选中</Checkbox>
          <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
        </View>
        <View className='page-section'>
          <Text>推荐展示样式</Text>
          {this.state.list.map((item, i) => {
            return (
              <Label className='checkbox-list__label' for={i} key={i}>
                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>
              </Label>
            )
          })}
        </View>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <view class="page-section">
      <text>默认样式</text>
      <checkbox value="选中" :checked="true">选中</checkbox>
      <checkbox style="margin-left: 20rpx;" value="未选中">未选中</checkbox>
    </view>
    <view class="page-section">
      <text>推荐展示样式(Taro 团队成员):</text>
      <label v-for="item in list" class="checkbox-list__label">
        <checkbox class="checkbox-list__checkbox" :value="item.value" :checked="item.checked">{{ item.text }}</checkbox>
      </label>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          value: '美国',
          text: '美国',
          checked: false
        },
        {
          value: '中国',
          text: '中国',
          checked: true
        },
        {
          value: '巴西',
          text: '巴西',
          checked: false
        },
        {
          value: '日本',
          text: '日本',
          checked: false
        },
        {
          value: '英国',
          text: '英国',
          checked: false
        },
        {
          value: '法国',
          text: '法国',
          checked: false
        }
      ]
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## CheckboxProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `string` |  | 是 | `<Checkbox/>`标识，选中时触发`<CheckboxGroup/>`的 change 事件，并携带 `<Checkbox/>` 的 value |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| checked | `boolean` | `false` | 否 | 当前是否选中，可用来设置默认选中 |
| color | `string` |  | 否 | checkbox的颜色，同 css 的 color |
| name | `string` |  | 否 | Checkbox 的名字 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<{ value: string[]; }>` |  | 否 | 选中项发生变化时触发 change 事件，小程序无此 API |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CheckboxProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| CheckboxProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| CheckboxProps.checked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| CheckboxProps.color | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| CheckboxProps.name |  |  |  |  |  |  | ✔️ |  | ✔️ | ✔️ |  |
| CheckboxProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| CheckboxProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| CheckboxProps.onChange |  |  | ✔️ |  |  |  | ✔️ | ✔️ | ✔️ | ✔️ |  |

---

## docs/components/forms/editor.md

---
title: Editor
sidebar_label: Editor
---

富文本编辑器，可以对图片、文字进行编辑。

编辑器导出内容支持带标签的 html和纯文本的 text，编辑器内部采用 delta 格式进行存储。

通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在小程序内使用时通过 delta 进行插入。

富文本组件内部引入了一些基本的样式使得内容可以正确的展示，开发时可以进行覆盖。需要注意的是，在其它组件或环境中使用富文本组件导出的 html 时，需要额外引入 这段样式，并维护 `<ql-container><ql-editor></ql-editor></ql-container>` 的结构。

图片控件仅初始化时设置有效。

*编辑器内支持部分 HTML 标签和内联样式，不支持 **class** 和 **id***

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/editor.html)

## 类型

```tsx
ComponentType<EditorProps>
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
  state = {
    placeholder: '来，输入隔壁的名字试试...'
  }

  editorReady = e => {
    Taro.createSelectorQuery().select('#editor').context((res) => {
      this.editorCtx = res.context
    }).exec()
  }

  undo = e => {
    this.editorCtx.undo()
  }

  render () {
    return (
      <View>
        <Editor id='editor' className='editor' placeholder={this.state.placeholder} onReady={this.editorReady}></Editor>
        <Button type='warn' onClick={this.undo}>撤销</Button>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <editor id="editor" class="editor" :placeholder="placeholder" @ready="editorReady"></editor>
    <button type="warn" @tap="undo">撤销</button>
  </view>
</template>

<script>
  import Taro from '@tarojs/taro'
  export default {
    data() {
      return {
        placeholder: '来，输入隔壁的名字试试...'
      }
    },
    methods: {
      editorReady() {
        Taro.createSelectorQuery().select('#editor').context((res) => {
          this.editorCtx = res.context
        }).exec()
      },
      undo() {
        this.editorCtx.undo()
      }
    }
  }
</script>
```
</TabItem>
</Tabs>

## EditorProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| readOnly | `boolean` | `false` | 否 | 设置编辑器为只读 |
| placeholder | `string` |  | 否 | 提示信息 |
| showImgSize | `boolean` | `false` | 否 | 点击图片时显示图片大小控件 |
| showImgToolbar | `boolean` | `false` | 否 | 点击图片时显示工具栏控件 |
| showImgResize | `boolean` | `false` | 否 | 点击图片时显示修改尺寸控件 |
| onReady | `CommonEventFunction` |  | 否 | 编辑器初始化完成时触发 |
| onFocus | `CommonEventFunction<editorEventDetail>` |  | 否 | 编辑器聚焦时触发 |
| onBlur | `CommonEventFunction<editorEventDetail>` |  | 否 | 编辑器失去焦点时触发<br />detail = { html, text, delta } |
| onInput | `CommonEventFunction<editorEventDetail>` |  | 否 | 编辑器内容改变时触发<br />detail = { html, text, delta } |
| onStatusChange | `CommonEventFunction` |  | 否 | 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 |

### API 支持度

| API | 微信小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| EditorProps.readOnly | ✔️ | ✔️ |  |  |  |  |
| EditorProps.placeholder | ✔️ | ✔️ |  |  |  |  |
| EditorProps.showImgSize | ✔️ | ✔️ |  |  |  |  |
| EditorProps.showImgToolbar | ✔️ | ✔️ |  |  |  |  |
| EditorProps.showImgResize | ✔️ | ✔️ |  |  |  |  |
| EditorProps.onReady | ✔️ | ✔️ |  |  |  |  |
| EditorProps.onFocus | ✔️ | ✔️ |  |  |  |  |
| EditorProps.onBlur | ✔️ | ✔️ |  |  |  |  |
| EditorProps.onInput | ✔️ | ✔️ |  |  |  |  |
| EditorProps.onStatusChange | ✔️ | ✔️ |  |  |  |  |

### editorEventDetail

---

## docs/components/forms/form.md

---
title: Form
sidebar_label: Form
---

表单。将组件内的用户输入的 switch input checkbox slider radio picker 提交。

当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)

## 类型

```tsx
ComponentType<FormProps>
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

  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }

  render () {
    return (
      <Form onSubmit={this.formSubmit} onReset={this.formReset} >
        <View className='example-body'>
          <Switch name='switch' className='form-switch'></Switch>
        </View>
      </Form>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <form @submit="formSubmit" @reset="formReset" >
      <view class="taro-example-body">
        <switch name="switch" class="form-switch"></Switch>
      </view>
      <view class="taro-example-btns">
        <button form-type="submit">Submit</button>
        <button type="default" form-type="reset">Reset</button>
    </view>
  </form>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    formSubmit (e) {
      console.log(e)
    },

    formReset (e) {
      console.log(e)
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## FormProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| reportSubmit | `boolean` | `false` | 否 | 是否返回 `formId` 用于发送模板消息。 |
| reportSubmitTimeout | `number` | `0` | 否 | 等待一段时间（毫秒数）以确认 `formId` 是否生效。<br />如果未指定这个参数，`formId` 有很小的概率是无效的（如遇到网络失败的情况）。<br />指定这个参数将可以检测 `formId` 是否有效，<br />以这个参数的时间作为这项检测的超时时间。<br />如果失败，将返回 `requestFormId:fail` 开头的 `formId`。 |
| reportType | `string` | `'default'` | 否 | 模板消息的类型，report-submit 为 true 时填写有效<br />取值：default / subscribe |
| templateId | string or string[] |  | 否 | 发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取<br />当参数类型为 Array 时，可传递 1~3 个模板库标题 ID （注：此处填写模板库id。示例：BD0001） |
| subscribeId | `string` |  | 否 | 发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br />注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id |
| conversionTarget | `number` | `0` | 否 | 用于分发目的。取值：0 或 1，其中 0 表示默认，1 表示留资目标，需要和留资分发配置一起使用，详情见留资分发配置 |
| clueComponentId | `string` | `""` | 否 | 用于分发目的。开发者在【小程序开发者后台 -> 进入目标小程序 -> 运营 -> 流量配置 -> 抖音 -> 留资分发配置】复制创建的配置 ID，需要和留资分发配置一起使用，详情见留资分发配置 |
| onSubmit | `CommonEventFunction<onSubmitEventDetail>` |  | 否 | 携带 form 中的数据触发 submit 事件 |
| onReset | `CommonEventFunction` |  | 否 | 表单重置时会触发 reset 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| FormProps.reportSubmit | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| FormProps.reportSubmitTimeout | ✔️ |  |  |  |  |  |  |  |  |  |  |
| FormProps.reportType |  | ✔️ |  |  |  |  |  |  |  |  |  |
| FormProps.templateId |  | ✔️ |  |  |  |  |  |  |  |  |  |
| FormProps.subscribeId |  | ✔️ |  |  |  |  |  |  |  |  |  |
| FormProps.conversionTarget |  |  |  | ✔️ |  |  |  |  |  |  |  |
| FormProps.clueComponentId |  |  |  | ✔️ |  |  |  |  |  |  |  |
| FormProps.onSubmit | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| FormProps.onReset | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### onSubmitEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| value | `{ [formItemName: string]: any; }` | 否 | 当点击 `<form>` 表单中 `form-type` 为 `submit` 的 `<button>` 组件时，<br />会将表单组件中的 `value` 值进行提交，<br />需要在表单组件中加上 `name` 来作为 `key`。 |
| formId | `string` | 否 | 当 `reportSubmit` 为 `true` 时，返回 `formId` 用于发送模板消息。 |

---

## docs/components/forms/input.md

---
title: Input
sidebar_label: Input
---

输入框。该组件是原生组件，使用时请注意相关限制

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)

## 类型

```tsx
ComponentType<InputProps>
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
      <View className='example-body'>
        <Text>可以自动聚焦的 input</Text>
          <Input type='text' placeholder='将会获取焦点' focus/>
          <Text>控制最大输入长度的 input</Text>
          <Input type='text' placeholder='最大输入长度为 10' maxLength='10'/>
          <Text>数字输入的 input</Text>
          <Input type='number' placeholder='这是一个数字输入框'/>
          <Text>密码输入的 input</Text>
          <Input type='password' password placeholder='这是一个密码输入框'/>
          <Text>带小数点的 input</Text>
          <Input type='digit' placeholder='带小数点的数字键盘'/>
          <Text>身份证输入的 input</Text>
          <Input type='idcard' placeholder='身份证输入键盘'/>
          <Text>控制占位符颜色的 input</Text>
          <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red'/>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="example-body">
    <text>可以自动聚焦的 input</text>
    <input type="text" placeholder="将会获取焦点" :focus="true" />
    <text>控制最大输入长度的 input</text>
    <input type="text" placeholder="最大输入长度为 10" maxLength="10"/>
    <text>数字输入的 input</text>
    <input type="number" placeholder="这是一个数字输入框"/>
    <text>密码输入的 input</text>
    <input type="password" :password="true" placeholder="这是一个密码输入框"/>
    <text>带小数点的 input</text>
    <input type="digit" placeholder="带小数点的数字键盘"/>
    <text>身份证输入的 input</text>
    <input type="idcard" placeholder="身份证输入键盘"/>
    <text>控制占位符颜色的 input</text>
    <input type="text" placeholder="占位符字体是红色的" placeholder-style="color:red;"/>
  </view>
</template>
```
</TabItem>
</Tabs>

## InputProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `string` |  | 否 | 输入框的初始内容 |
| defaultValue | `string` |  | 否 | 设置 React 非受控输入框的初始内容 |
| type | `keyof Type` | `"text"` | 否 | input 的类型 |
| password | `boolean` | `false` | 否 | 是否是密码类型 |
| placeholder | `string` |  | 否 | 输入框为空时占位符 |
| placeholderStyle | `string` |  | 否 | 指定 placeholder 的样式 |
| placeholderClass | `string` | `"input-placeholder"` | 否 | 指定 placeholder 的样式类 |
| placeholderTextColor | `string` |  | 否 | 指定 placeholder 的文本颜色 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| maxlength | `number` | `140` | 否 | 最大输入长度，设置为 -1 的时候不限制最大长度 |
| cursorSpacing | `number` | `0` | 否 | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 |
| autoFocus | `boolean` | `false` | 否 | (即将废弃，请直接使用 focus )自动聚焦，拉起键盘<br />**不推荐使用** |
| focus | `boolean` | `false` | 否 | 获取焦点 |
| confirmType | `keyof ConfirmType` | `done` | 否 | 设置键盘右下角按钮的文字，仅在type='text'时生效 |
| confirmHold | `boolean` | `false` | 否 | 点击键盘右下角按钮时是否保持键盘不收起 |
| cursor | `number` |  | 否 | 指定focus时的光标位置 |
| cursorColor | `string` |  | 否 | 光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制 |
| selectionStart | `number` | `-1` | 否 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 |
| selectionEnd | `number` | `-1` | 否 | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 |
| adjustPosition | `boolean` | `true` | 否 | 键盘弹起时，是否自动上推页面 |
| holdKeyboard | `boolean` | `false` | 否 | focus 时，点击页面的时候不收起键盘 |
| alwaysEmbed | `boolean` | `false` | 否 | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) |
| safePasswordCertPath | `string` |  | 否 | 安全键盘加密公钥的路径，只支持包内路径 |
| safePasswordLength | `number` |  | 否 | 安全键盘输入密码长度 |
| safePasswordTimeStamp | `number` |  | 否 | 安全键盘加密时间戳 |
| safePasswordNonce | `string` |  | 否 | 安全键盘加密盐值 |
| safePasswordSalt | `string` |  | 否 | 安全键盘计算hash盐值，若指定custom-hash 则无效 |
| safePasswordCustomHash | `string` |  | 否 | 安全键盘计算hash的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` |
| randomNumber | `boolean` | `false` | 否 | 当 type 为 number, digit, idcard 数字键盘是否随机排列 |
| controlled | `boolean` | `false` | 否 | 是否为受控组件。为 true 时，value 内容会完全受 setData 控制。<br /><br />建议当 type 值为 text 时不要将 controlled 设置为 true,详见 [Bugs & Tips](https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip) |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| name | `string` |  | 否 | 组件名字，用于表单提交获取数据。 |
| alwaysSystem | `boolean` | `false` | 否 | 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| clueType | `number` | `0` | 否 | 用于分发目的。取值：0 和 1，其中 0 表示默认，1 表示手机号，需要和留资分发配置一起使用，详情见留资分发配置。 |
| onInput | `CommonEventFunction<inputEventDetail>` |  | 否 | 当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。 |
| onFocus | `CommonEventFunction<inputForceEventDetail>` |  | 否 | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度 |
| onBlur | `CommonEventFunction<inputValueEventDetail>` |  | 否 | 输入框失去焦点时触发 |
| onConfirm | `CommonEventFunction<inputValueEventDetail>` |  | 否 | 点击完成按钮时触发 |
| onKeyboardHeightChange | `CommonEventFunction<onKeyboardHeightChangeEventDetail>` |  | 否 | 键盘高度发生变化的时候触发此事件 |
| onNickNameReview | `CommonEventFunction` |  | 否 | 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效，event.detail = { pass, timeout } |
| onSelectionChange | `CommonEventFunction` |  | 否 | 选区改变事件, {selectionStart, selectionEnd} |
| onKeyboardCompositionStart | `CommonEventFunction` |  | 否 | 输入法开始新的输入时触发 （仅当输入法支持时触发） |
| onKeyboardCompositionUpdate | `CommonEventFunction` |  | 否 | 输入法输入字符时触发（仅当输入法支持时触发） |
| onKeyboardCompositionEnd | `CommonEventFunction` |  | 否 | 输入法输入结束时触发（仅当输入法支持时触发） |
| onKeyoardHeightChangeWorklet | `string` |  | 否 | 键盘高度变化时触发。event.detail = {height: height, pageBottomPadding: pageBottomPadding}； height: 键盘高度，pageBottomPadding: 页面上推高度 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| InputProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.defaultValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InputProps.type | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.password | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.placeholder | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.placeholderStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ |
| InputProps.placeholderClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| InputProps.placeholderTextColor |  |  |  |  |  |  |  | ✔️ | ✔️ |  |  |
| InputProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InputProps.maxlength | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.cursorSpacing | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| InputProps.autoFocus | ✔️ |  |  |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| InputProps.focus | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| InputProps.confirmType | ✔️ | ✔️ | ✔️(confirm-type 与 enableNative 属性冲突，若希望 confirm-type 生效，enableNative 不能设定为 false，而且不能设定 always-system) | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ |
| InputProps.confirmHold | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| InputProps.cursor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  |  |
| InputProps.cursorColor | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.selectionStart | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |
| InputProps.selectionEnd | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |
| InputProps.adjustPosition | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |  |
| InputProps.holdKeyboard | ✔️ |  |  | ✔️ |  |  |  |  |  |  |  |
| InputProps.alwaysEmbed | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.safePasswordCertPath | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.safePasswordLength | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.safePasswordTimeStamp | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.safePasswordNonce | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.safePasswordSalt | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.safePasswordCustomHash | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.randomNumber |  |  | ✔️ |  |  |  |  |  |  |  |  |
| InputProps.controlled |  |  | ✔️ |  |  |  |  |  |  |  |  |
| InputProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |  |
| InputProps.name |  |  | ✔️ |  |  |  |  |  |  |  |  |
| InputProps.alwaysSystem |  |  | ✔️ |  |  |  |  |  |  |  |  |
| InputProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |  |
| InputProps.clueType |  |  |  | ✔️ |  |  |  |  |  |  |  |
| InputProps.onInput | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.onFocus | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.onBlur | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.onConfirm | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| InputProps.onKeyboardHeightChange | ✔️ |  |  | ✔️ | ✔️ |  |  |  | ✔️ |  |  |
| InputProps.onNickNameReview | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.onSelectionChange | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.onKeyboardCompositionStart | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.onKeyboardCompositionUpdate | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.onKeyboardCompositionEnd | ✔️ |  |  |  |  |  |  |  |  |  |  |
| InputProps.onKeyoardHeightChangeWorklet | ✔️ |  |  |  |  |  |  |  |  |  |  |

### Type

Input 类型

| 参数 | 说明 |
| --- | --- |
| text | 文本输入键盘 |
| number | 数字输入键盘 |
| idcard | 身份证输入键盘 |
| digit | 带小数点的数字键盘 |
| safe-password | 密码安全输入键盘[指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/safe-password.html) |
| nickname | 昵称输入键盘 |
| numberpad | 数字输入键盘 |
| digitpad | 带小数点的数字键盘 |
| idcardpad | 身份证输入键盘 |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Type.text | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| Type.number | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |
| Type.idcard | ✔️ | ✔️ |  | ✔️ |  |  |  |
| Type.digit | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| Type.safe-password | ✔️ | ✔️ |  |  |  |  |  |
| Type.nickname | ✔️ | ✔️ |  |  |  |  |  |
| Type.numberpad |  | ✔️ |  |  |  |  |  |
| Type.digitpad |  | ✔️ |  |  |  |  |  |
| Type.idcardpad |  | ✔️ |  |  |  |  |  |

### ConfirmType

Confirm 类型

| 参数 | 说明 |
| --- | --- |
| send | 右下角按钮为“发送” |
| search | 右下角按钮为“搜索” |
| next | 右下角按钮为“下一个” |
| go | 右下角按钮为“前往” |
| done | 右下角按钮为“完成” |

### inputEventDetail

> 注意：React-Native 端 `inputEventDetail` 仅实现参数 `value`，若需实时获取光标位置则可通过 [`onSelectionChange`](https://reactnative.dev/docs/textinput#onselectionchange) 实现。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |
| cursor | `number` | 光标位置 |
| keyCode | `number` | 键值 |

### inputForceEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |
| height | `number` | 键盘高度 |

### inputValueEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 输入值 |

### onKeyboardHeightChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| height | `number` | 键盘高度 |
| duration | `number` | 持续时间 |

---

## docs/components/forms/keyboard-accessory.md

---
title: KeyboardAccessory
sidebar_label: KeyboardAccessory
---

设置 Input / Textarea 聚焦时键盘上方 CoverView / CoverImage 工具栏视图。需要配置 Taro 插件 `@tarojs/plugin-platform-weapp` 的 `enablekeyboardAccessory` 参数为 `true` 后才能使用，请参考：[#9548](https://github.com/NervJS/taro/issues/9548#issuecomment-891682216)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html)

## 类型

```tsx
ComponentType<StandardProps>
```

## 示例代码

```js
// config/index.js
{
  // ...
  plugins: [
    ['@tarojs/plugin-platform-weapp', {
      enablekeyboardAccessory: true
    }]
  ]
}
```

```tsx
class App extends Component {
  render () {
    return (
      <Textarea holdKeyboard="{{true}}">
        <KeyboardAccessory className="container" style={{ height: 50 }} >
          <CoverView onClick={() => { TODO }} style={{ flex: 1, background: 'green' }}>1</CoverView>
          <CoverView onClick={() => { TODO }} style={{ flex: 1, background: 'red' }}>2</CoverView>
        </KeyboardAccessory>
      </Textarea>
    )
  }
}
```

---

## docs/components/forms/label.md

---
title: Label
sidebar_label: Label
---

用来改进表单组件的可用性。

使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/label.html)

## 类型

```tsx
ComponentType<LabelProps>
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
      <RadioGroup>
        <Label className='example-body__label' for='1' key='1'>
          <Radio value='USA'>USA</Radio>
        </Label>
        <Label className='example-body__label' for='2' key='2'>
          <Radio value='CHN' checked>
          CHN
          </Radio>
        </Label>
      </RadioGroup>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <radio-group>
    <label class="example-body__label" for="1" key="1">
      <radio id="1" value="USA" />
      USA
    </label>
    <label class="example-body__label" for="2" key="2">
      <radio id="2" value="CHN" :checked="true" />
      CHN
    </label>
  </radio-group>
</template>
```
</TabItem>
</Tabs>

## LabelProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| for | `string` | 否 | 绑定控件的 id |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LabelProps.for | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |

---

## docs/components/forms/picker-view-column.md

---
title: PickerViewColumn
sidebar_label: PickerViewColumn
---

滚动选择器子项
仅可放置于 `<PickerView />` 中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html)

## 类型

```tsx
ComponentType<StandardProps>
```

## PickerViewColumnProps

---

## docs/components/forms/picker-view.md

---
title: PickerView
sidebar_label: PickerView
---

嵌入页面的滚动选择器
其中只可放置 picker-view-column 组件，其它节点不会显示

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html)

## 类型

```tsx
ComponentType<PickerViewProps>
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
export default class Picks extends Component {

  constructor () {
    super(...arguments)
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1]
    }
  }

  onChange = e => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }

  render() {
    return (
      <View>
        <View>{this.state.year}年{this.state.month}月{this.state.day}日</View>
        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.years.map(item => {
              return (
                <View>{item}年</View>
              );
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.months.map(item => {
              return (
                <View>{item}月</View>
              )
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.days.map(item => {
              return (
                <View>{item}日</View>
              )
            })}
          </PickerViewColumn>
        </PickerView>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="taro-example">
  <view>{{year}}年{{month}}月{{day}}日</view>
  <picker-view indicator-style="height: 30px;" style="width: 100%; height: 300px;" :value="value" @change="onChange">
    <picker-view-column>
      <view v-for="(item, index) in years" :key="index">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view v-for="(item, index) in months" :key="index">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view v-for="(item, index) in days" :key="index">{{item}}日</view>
    </picker-view-column>
  </picker-view>
</view>
</template>

<script>
  export default {
    name: "Index",
    data() {
      const date = new Date()
      const years = []
      const months = []
      const days = []
      for (let i = 1990; i <= date.getFullYear(); i++) {
        years.push(i)
      }
      for (let i = 1; i <= 12; i++) {
        months.push(i)
      }
      for (let i = 1; i <= 31; i++) {
        days.push(i)
      }
      return {
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        value: [3, 1, 1]
      }
    },

    methods: {
      onChange: function(e) {
        const val = e.detail.value
        console.log(val)
        this.year = this.years[val[0]]
        this.month = this.months[val[1]]
        this.day = this.days[val[2]]
      }
    }
  }
</script>
```
</TabItem>
</Tabs>

## PickerViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `number[]` |  | 否 | 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 |
| defaultValue | `number[]` |  | 否 | 设置 React 非受控状态下的初始取值 |
| indicatorStyle | `string` |  | 否 | 设置选择器中间选中框的样式 |
| indicatorClass | `string` |  | 否 | 设置选择器中间选中框的类名 |
| maskStyle | `string` |  | 否 | 设置蒙层的样式 |
| maskClass | `string` |  | 否 | 设置蒙层的类名 |
| immediateChange | `boolean` | `false` | 否 | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件。 |
| title | `string` |  | 否 | 选择器标题，建议标题控制在 12 个中文汉字长度内，避免出现截断现象, 截断部分将以 ... 形式展示 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） |
| onPickStart | `CommonEventFunction` |  | 否 | 当滚动选择开始时候触发事件 |
| onPickEnd | `CommonEventFunction` |  | 否 | 当滚动选择结束时候触发事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| PickerViewProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| PickerViewProps.defaultValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| PickerViewProps.indicatorStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| PickerViewProps.indicatorClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| PickerViewProps.maskStyle | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| PickerViewProps.maskClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| PickerViewProps.immediateChange | ✔️ |  | ✔️ | ✔️ |  |  |  |  |  |  |
| PickerViewProps.title |  | ✔️ |  |  |  |  |  |  |  |  |
| PickerViewProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |
| PickerViewProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ |
| PickerViewProps.onPickStart | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |
| PickerViewProps.onPickEnd | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  | ✔️ |

### onChangeEventDetail

| 参数 | 类型 |
| --- | --- |
| value | `number[]` |

---

