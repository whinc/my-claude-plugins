## docs/react-native-harmony.md

---
title: React Native 方案
---

:::tip Taro v4.0.0-beta.36+ 开始支持  
:::
// todo 具体版本待定
随着鸿蒙系统的日渐完善，鸿蒙与 React Native 进行合作，React Native 会推出对鸿蒙的适配。

## 配置鸿蒙环境

### 1.安装、配置 DevEco Studio

（1）登录  [HarmonysOS 应用开发门户](https://developer.harmonyos.com/cn/home)，点击右上角注册按钮，注册开发者帐号。

（2）进入  [HUAWEI DevEco Studio 套件货架中心](https://developer.harmonyos.com/deveco-developer-suite/)，申请白名单，由于目前最新版本的 OpenHarmony SDK 和 IDE 以及 React Native 需要的 npm 包 和 SDK 仍未对外开发，因此个人开发者若想尝鲜，需要先申请白名单成为合作伙伴后才能继续进行下面的步骤。

（3）白名单申请通过后，进入货架下载开发套件具体版本请查看**软件要求**。

（4）下载完成后，打开 IDE 安装包进行安装，安装成功后启动 DevEco Studio，根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)解压套件里附带的 SDK 压缩包，并根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)在 IDE 中配置好 SDK 的使用路径。

### 2.软件要求

(1) IDE 版本: 4.1.3.400

(2) SDK 版本: HarmonyOS S NEXT Developer Preview1

(3) Node.js 版本：V18.14.1（可使用 DevEco Studio 安装的 Node.js）

## 使用 Taro 开发鸿蒙 RN

### 1. JS 工程

#### 1.1 通过 CLI 创建 JS 工程

```bash
npx @tarojs/cli@beta init
```

#### 1.2 模版选择

选择**react-native-harmony**

#### 1.3 手动修改代码

##### 1.3.1 添加 harmony 依赖

JS 工程项目同级需要 **react-native-harmony** 、**react-native-harmony-cli** 两个目录（由于目前鸿蒙暂未开源，需跟根据环境配置所述申请白名单，下载对对应的开发套件）

##### 1.3.2 修改 metro.config.js

本修改只针对**pnpm** 包管理的开发者,对于使用**npm**、**yarn**的可发这可忽略

将 metro.config.js 中 fs.lstatSync 修改成 fs.statSync

```bash
/**node_modules/react-native-harmony/metro.config.js**/

function hasNodeModulePathHarmonyCode(nodeModulePath) {
  if (!fs.lstatSync(nodeModulePath).isDirectory()) return false;
  const nodeModuleContentNames = fs.readdirSync(nodeModulePath);
}
```

#### 1.4 运行 JS 工程

```bash
 pnpm start --reset-cache
```

#### 1.5 检查 bundle server 是否正常

可以通过在浏览器中访问 [http://localhost:8081/index.bundle?platform=harmony](http://localhost:8081/index.bundle?platform=harmony) 检查 bundle server 是否正常

### 2. 原生工程

#### 2.1 创建工程

根据**《ReactNative for OpenHarmony 开发使用指导》** 新建鸿蒙工程

#### 2.2 安装第三方依赖

| 包名                                      | 地址                                                                                                 |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| @react-native-async-storage/async-storage | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-async-storage-async-storage |
| @react-native-camera-roll/camera-roll     | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-cameraroll                  |
| @react-native-clipboard/clipboard         | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-clipboard-clipboard         |
| @react-native-community/geolocation       | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-geolocation                 |
| @react-native-community/netinfo           | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-netinfo           |
| @react-native-community/slider            | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-slider            |
| react-native-gesture-handler              | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-gesture-handler             |
| react-native-pager-view                   | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-pager-view                  |
| react-native-safe-area-context            | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-safe-area-context           |
| react-native-screens                      | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-screens                     |
| react-native-webview                      | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-webview                     |
| react-native-svg                          | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-svg                         |

更多第三库的安装请参考 [React Native OpenHarmony](https://react-native-oh-library.gitee.io/usage-docs/#/)

#### 2.3 连接手机或模拟器

启动手机模拟器后如果没有执行 bundle 加载 需执行一下命令进行端口映射

```bash
hdc rport tcp:8081 tcp:8081
```

#### 2.4 修改 moduleName

原生工程中使用的 moduleName 需要与 config 中的 rn.appName 保持一致，如'taroDemo'

```bash
private moduleName = 'taroDemo'
```

## 常见问题

### 1.暂不支持的 api 和组件

由于**taro reactnative** 的部分**api** 和**组件**依赖了原生的支持(主要集中在 expo 类型的依赖),目前鸿蒙暂时没有提供支持，所以使用上会有报错

#### 1.1 组件

| 组件名称 | 组件描述 |
| -------- | -------- |
| Video    | 视频组件 |
| Camera   | 拍摄组件 |

#### 1.2 api

| api 名称                   | api 描述                   |
| -------------------------- | -------------------------- |
| getSetting                 | 获取设置                   |
| openSetting                | 打开设置                   |
| authorize                  | 用户授权                   |
| saveImageToPhotosAlbum     | 保存图片到系统相册         |
| downLoadFIle               | 下载                       |
| chooseVideo                | 选择视频                   |
| chooseMedia                | 选择媒体类型               |
| createCameraContext        | 创建 camera 上下文         |
| getScreenBrightness        | 获取屏幕亮度               |
| setScreenBrightness        | 设置屏幕亮度               |
| onAccelerometerChange      | 监听加速度数据             |
| offAccelerometerChange     | 取消监听加速度数据事件     |
| startAccelerometer         | 开始监听加速度数据         |
| onDeviceMotionChange       | 监听设备方向变化事件       |
| offDeviceMotionChange      | 取消监听设备方向变化事件   |
| startDeviceMotionListening | 开始监听设备方向的变化     |
| stopDeviceMotionListening  | 停止监听设备方向的变化     |
| onGyroscopeChange          | 监听陀螺仪数据变化事件     |
| offGyroscopeChange         | 取消监听陀螺仪数据变化事件 |
| startGyroscope             | 开始监听陀螺仪数据         |
| stopGyroscope              | 停止监听陀螺仪数据         |
| scanCode                   | 调起客户端扫码界面         |
| vibrateShort               | 使手机发生较短时间的振动   |
| vibrateLong                | 使手机发生较长时间的振动   |

### 2.App 启动后没有加载 bundle

端口映射没有成功

```
hdc rport tcp:8081 tcp:8081
```

### 3.第三方库未生效

会看到信息：**No harmony-specific third-party packages have been detected pnpm install** 等操作，导致 node_modules 修改被覆盖。查看**node_modules/react-native-harmony/metro.config.js** **lstatSync** 是否改成了**statSync**。

---

## docs/react-native-remind.md

---
title: React Native 端开发前注意
---

:::tip Taro 3 需要使用 3.1 以上版本
:::

React Native 的样式基于开源的跨平台布局引擎 [Yoga](https://github.com/facebook/yoga) ，样式基本上是实现了 CSS 的一个子集，并且属性名不完全一致，所以当你开始在考虑兼容 React Native 端之前，可以先简要了解一下 React Native 的样式：[React Native Layout Props](https://facebook.github.io/react-native/docs/layout-props)

样式布局上 H5 最为灵活，小程序次之，RN 最弱，统一多端样式即是对齐短板，也就是要以 RN 的约束来管理样式，同时兼顾小程序的限制，核心可以用三点来概括：

- 使用 Flex 布局
- 基于 BEM 写样式
- 采用 style 属性覆盖组件样式

## 一、布局

### flex

在 React Native 中使用 Flexbox 规则来指定某个组件的子元素的布局。Flexbox 可以在不同屏幕尺寸上提供一致的布局结构。因此，如果你要考虑 React Native 端，那你的样式布局就得采用 Flex 布局。

Flex 布局入门，可以查看阮一峰的 [Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

注意：**RN 中 View 标签默认主轴方向是 column**，如果不将其他端改成与 RN 一致，就需要在所有用到 display: flex 的地方都显式声明主轴方向。

### position

在 React Native 中 position 仅支持两种属性，即 `relative`（默认）和 `absolute`。可[参考文档](https://reactnative.dev/docs/0.60/layout-props#position)

## 二、样式

### 选择器

> React Native 端仅支持类选择器，且不支持 **组合器** [Combinators and groups of selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)。

以下选择器的写法都是不支持的，在样式转换时会自动忽略。

```css
.button.button_theme_islands {
  font-style: bold;
}

img + p {
  font-style: bold;
}

p ~ span {
  color: red;
}

div > span {
  background-color: DodgerBlue;
}

div span {
  background-color: DodgerBlue;
}
```

若我们基于 `scss` 等预编译语言开发，则可基于 [BEM](https://getbem.com/) 写样式，如：

```jsx
<View className="block">
  <Text className="block__elem">文本</Text>
</View>
```

```css
.block: {
  background-color: DodgerBlue;
  &__elem {
    color: yellow;
  }
}
```

### 样式的条件编译

> 1.3+ 版本支持

#### 样式文件条件编译

假设目录中同时存在以下文件：

```
- index.scss
- index.rn.scss
```

当在 JS 文件中引用样式文件：`import './index.scss'` 时，RN 平台会找到并引入 `index.rn.scss`，其他平台会引入：`index.scss`，方便大家书写跨端样式，更好地兼容 RN。

#### 样式代码的条件编译

为了方便大家书写样式跨端的样式代码，添加了样式条件编译的特性。

指定平台保留：

```scss
/*  #ifdef  %PLATFORM%  */
样式代码
/*  #endif  */
```

指定平台剔除：

```scss
/*  #ifndef  %PLATFORM%  */
样式代码
/*  #endif  */
```

多个平台之间可以使用空格隔开。

### 样式的全局引入

- 方式一：入口文件 app.js 里面引入的样式就是全局样式，本地样式会覆盖全局样式。
- 方式二：通过配置全局注入

```js
// config/index.js
...
const config = {
    ...
    sass: {
        resource: [
            'src/styles/common.scss'
        ]
    }
}

```

# 三、导航

React Native 导航是封装的 React-Navigation [6.x](https://github.com/NervJS/taro/pull/11344)，为了更好的方便业务自定义，支持全局与页面配置中透传 React Navigation 的配置，但注意以下导航相关设置 Taro 3.x 生效。

### 全局配置

在全局配置 app.config.js 中可增加 rn 导航的独立配置

```js
//为了对其他端产生影响，最好加上环境判断

let rnConfig = {}

if(process.env.TARO_ENV === 'rn'){
  rnConfig = {
  //deep Linking前缀,https://reactnavigation.org/docs/deep-linking
  linking:[],
  //tabBar页面的设置，https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar 对应options的配置，支持以下属性透传，不支持返回react.Node节点设置的方案
   options:{
      title，
      tabBarVisible，
      tabBarBadge，
      tabBarBadgeStyle，
      tabBarTestID
   },
   tabBarOptions:{//tabbarOptions的配置，其他参考https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar tabBarOptions

   },
   screenOptions:{//全局screenOptions，作用于非所有页面，注意不支持返回React.Node的属性，参考https://reactnavigation.org/docs/stack-navigator/#options

   }
  }
}

export default {
  pages:[
    'pages/index/index',
  ],
  rn:rnConfig
}
```

### 页面配置

除了全局设置页面，也可单独对某个页面进行设置。

```js
// 页面config
rn: {
  screenOptions: {
    // 设置当前页面的options，参考https://reactnavigation.org/docs/stack-navigator/#options
  }
}
```

> 关于透传 react navigation 的配置有需要注意：
>
> - 不支持直接传入 React.Node 节点的参数
> - 传入的样式对象为 React Native 的样式对比，比如 tabStyle:{ backgroundColor :'#ff0000'}
> - rn 的配置优先于其他配置，比如统一的 tabBar 里配置了 selectedColor ，rn 配置里的 activeTintColor ，那么生效的是 activeTintColor

## 常见问题

### 1、box-shadow 能实现吗？

> React Native 这方面支持得并不好（仅 ios 支持且支持程度有限）,android 端仅可通过 `elevation` 设置灰色阴影。

```css
{
    /* 阴影相关属性 */
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: Color.CMHeaderBgColor,
    /* android 灰色阴影 */
    elevation: 4,
}
```

### 2、border{Top,Right,Bottom,Left} 不支持？

border{Top,Right,Bottom,Left} 的简写（shorthands）不支持，因为 `borderStyle` 不能应用于单个边框。

使用 sass：

```scss
/**
 * // NOTE Taro 编译成 RN 时对 border 的处理有问题
 * RN 不支持针对某一边设置 style，即 border-bottom-style 会报错
 * 那么 border-bottom: 1px 就需要写成如下形式：
 * border: 0 style color; border-bottom-width: 1px;
 */
@mixin border($dir, $width, $style, $color) {
  border: 0 $style $color;
  @each $d in $dir {
    #{border-#{$d}-width}: $width;
  }
}
```

### 3、React Native 不支持 background-image ，有什么解决办法吗？

使用 `Image 组件`，配合 Flex/Position 布局，基本可以实现你的大部分需求。阅读一下这篇文章：[Background Images in React Native](https://thekevinscott.com/background-images-in-react-native/)，有助于你理解。

## 附：各属性支持度

React Native 的样式基于开源的跨平台布局引擎 [Yoga](https://github.com/facebook/yoga) ，样式基本上是实现了 CSS 的一个子集，但是属性名不完全一致，具体的内容及相关差异可以查看文档 [React Native Layout Props](https://facebook.github.io/react-native/docs/layout-props)。

### Text 文本（18）

| 属性名                                       | 取值                                                                                                           | 描述                                                                                                                                                                                                                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color                                        | [&lt;color&gt;](#user-content-color)                                                                           | 对应 `CSS` [color](https://css.doyoe.com/properties/color/color.htm) 属性                                                                                                                                                                                              |
| fontFamily                                   | string                                                                                                         | 对应 `CSS` [font-family](https://css.doyoe.com/properties/font/font-family.htm) 属性                                                                                                                                                                                   |
| fontSize                                     | [&lt;number&gt;](#user-content-number)                                                                         | 对应 `CSS` [font-size](https://css.doyoe.com/properties/font/font-size.htm) 属性                                                                                                                                                                                       |
| fontStyle                                    | `normal`, `italic`                                                                                             | 对应 `CSS` [font-style](https://css.doyoe.com/properties/font/font-style.htm) 属性，但阉割了 `oblique` 取值                                                                                                                                                            |
| fontWeight                                   | `normal`, `bold` `100~900`                                                                                     | 对应 `CSS` [font-weight](https://css.doyoe.com/properties/font/font-weight.htm) 属性，但阉割了 `bolder, lighter` 取值                                                                                                                                                  |
| lineHeight                                   | [&lt;number&gt;](#user-content-number)                                                                         | 对应 `CSS` [line-height](https://css.doyoe.com/properties/text/line-height.htm) 属性                                                                                                                                                                                   |
| textAlign                                    | `auto`, `left`, `right`, `center`, `justify`<sup>`iOS`</sup>                                                   | 对应 `CSS` [text-align](https://css.doyoe.com/properties/text/text-align.htm) 属性，但增加了 `auto` 取值。当取值为 `justify` 时，在 `Android` 上会变为 `left`                                                                                                          |
| textDecorationLine                           | `none`, `underline`, `line-through`, `underline line-through`                                                  | 对应 `CSS` [text-decoration-line](https://css.doyoe.com/properties/text-decoration/text-decoration-line.htm) 属性，但阉割了 `overline`, `blink` 取值                                                                                                                   |
| textShadowColor                              | [&lt;color&gt;](#user-content-color)                                                                           | 对应 `CSS` [text-shadow](https://css.doyoe.com/properties/text-decoration/text-shadow.htm) 属性中的颜色定义                                                                                                                                                            |
| textShadowOffset                             | {<br />width:[&lt;number&gt;](#user-content-number),<br />height:[&lt;number&gt;](#user-content-number)<br />} | 对应 `CSS` [text-shadow](https://css.doyoe.com/properties/text-decoration/text-shadow.htm) 属性中的阴影偏移定义                                                                                                                                                        |
| textShadowRadius                             | [&lt;number&gt;](#user-content-number)                                                                         | 在 `CSS` 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义                                                                                                                                                                                                        |
| includeFontPadding<br /><sup>`Android`</sup> | [&lt;bool&gt;](#user-content-bool)                                                                             | Android 在默认情况下会为文字额外保留一些 padding，以便留出空间摆放上标或是下标的文字。对于某些字体来说，这些额外的 padding 可能会导致文字难以垂直居中。如果你把 `textAlignVertical` 设置为 `center` 之后，文字看起来依然不在正中间，那么可以尝试将本属性设置为 `false` |
| textAlignVertical<br /><sup>`Android`</sup>  | `auto`, `top`, `bottom`, `center`                                                                              | 对应 `CSS` [vertical-align](https://css.doyoe.com/properties/text/vertical-align.htm) 属性，增加了 `auto` 取值，`center` 取代了 `middle`，并阉割了 `baseline, sub` 等值                                                                                                |
| fontVariant<br /><sup>`iOS`</sup>            | `small-caps`, `oldstyle-nums`, `lining-nums`, `tabular-nums`, `proportional-nums`                              | 对应 `CSS` [font-variant](https://css.doyoe.com/properties/font/font-variant.htm) 属性，但取值更丰富                                                                                                                                                                   |
| letterSpacing<br /><sup>`iOS`</sup>          | [&lt;number&gt;](#user-content-number)                                                                         | 对应 `CSS` [letter-spacing](https://css.doyoe.com/properties/text/letter-spacing.htm) 属性                                                                                                                                                                             |
| textDecorationColor<br /><sup>`iOS`</sup>    | [&lt;color&gt;](#user-content-color)                                                                           | 对应 `CSS` [text-decoration-color](https://css.doyoe.com/properties/text-decoration/text-decoration-color.htm) 属性                                                                                                                                                    |
| textDecorationStyle<br /><sup>`iOS`</sup>    | `solid`, `double`, `dotted`, `dashed`                                                                          | 对应 `CSS` [text-decoration-style](https://css.doyoe.com/properties/text-decoration/text-decoration-style.htm) 属性，但阉割了 `wavy` 取值                                                                                                                              |
| writingDirection<br /><sup>`iOS`</sup>       | `auto`, `ltr`, `rtl`                                                                                           | 对应 `CSS` [direction](https://css.doyoe.com/properties/writing-modes/direction.htm) 属性，增加了 `auto` 取值                                                                                                                                                          |

<a name="dimension"></a>

### Dimension 尺寸（6）

| 属性名    | 取值                                   | 描述                                                                                    |
| --------- | -------------------------------------- | --------------------------------------------------------------------------------------- |
| width     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [width](https://css.doyoe.com/properties/dimension/width.htm) 属性           |
| minWidth  | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [min-width](https://css.doyoe.com/properties/dimension/min-width.htm) 属性   |
| maxWidth  | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [max-width](https://css.doyoe.com/properties/dimension/max-width.htm) 属性   |
| height    | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [height](https://css.doyoe.com/properties/dimension/height.htm) 属性         |
| minHeight | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [min-height](https://css.doyoe.com/properties/dimension/min-height.htm) 属性 |
| maxHeight | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [max-height](https://css.doyoe.com/properties/dimension/max-height.htm) 属性 |

<a name="positioning"></a>

### Positioning 定位（6）

| 属性名   | 取值                                   | 描述                                                                                                                 |
| -------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| position | `absolute`, `relative`                 | 对应 `CSS` [position](https://css.doyoe.com/properties/positioning/position.htm) 属性，但阉割了 `static, fixed` 取值 |
| top      | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [top](https://css.doyoe.com/properties/positioning/top.htm) 属性                                          |
| right    | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [right](https://css.doyoe.com/properties/positioning/right.htm) 属性                                      |
| bottom   | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [bottom](https://css.doyoe.com/properties/positioning/bottom.htm) 属性                                    |
| left     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [left](https://css.doyoe.com/properties/positioning/left.htm) 属性                                        |
| zIndex   | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [z-index](https://css.doyoe.com/properties/positioning/z-index.htm) 属性                                  |

<a name="margin"></a>

### Margin 外部白（7）

| 属性名           | 取值                                   | 描述                                                                                                                                                                                   |
| ---------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| margin           | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin](https://css.doyoe.com/properties/margin/margin.htm) 属性，不同的是，它只能定义一个参数，如需分别定义`上、右、下、左`4 个方位的外补白，可以通过下面的单向外部白属性 |
| marginHorizontal | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `marginRight` 和 `marginLeft`                                                                                                                |
| marginVertical   | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `marginTop` 和 `marginBottom`                                                                                                                |
| marginTop        | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-top](https://css.doyoe.com/properties/margin/margin-top.htm) 属性                                                                                                   |
| marginRight      | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-right](https://css.doyoe.com/properties/margin/margin-right.htm) 属性                                                                                               |
| marginBottom     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-bottom](https://css.doyoe.com/properties/margin/margin-bottom.htm) 属性                                                                                             |
| marginLeft       | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [margin-left](https://css.doyoe.com/properties/margin/margin-left.htm) 属性                                                                                                 |

<a name="padding"></a>

### Padding 内部白（7）

| 属性名            | 取值                                   | 描述                                                                                                                                                                                      |
| ----------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| padding           | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding](https://css.doyoe.com/properties/padding/padding.htm) 属性，不同的是，它只能定义一个参数，如需分别定义`上、右、下、左`4 个方位的内补白，可以通过下面的单向内部白属性 |
| paddingHorizontal | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `paddingRight` 和 `paddingLeft`                                                                                                                 |
| paddingVertical   | [&lt;number&gt;](#user-content-number) | 无对应的 `CSS` 属性。其效果相当于同时设置 `paddingTop` 和 `paddingBottom`                                                                                                                 |
| paddingTop        | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-top](https://css.doyoe.com/properties/padding/padding-top.htm) 属性                                                                                                   |
| paddingRight      | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-right](https://css.doyoe.com/properties/padding/padding-right.htm) 属性                                                                                               |
| paddingBottom     | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-bottom](https://css.doyoe.com/properties/padding/padding-bottom.htm) 属性                                                                                             |
| paddingLeft       | [&lt;number&gt;](#user-content-number) | 对应 `CSS` [padding-left](https://css.doyoe.com/properties/padding/padding-left.htm) 属性                                                                                                 |

### Border 边框（20）

| 属性名                  | 取值                                                                                                              | 描述                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| borderStyle             | `solid`, `dotted`, `dashed`                                                                                       | 对应 `CSS` `border-style` 属性，但阉割了 `none, hidden, double, groove, ridge, inset, outset` 取值，且无方向分拆属性 |
| borderWidth             | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-width` 属性                                                                                       |
| borderTopWidth          | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-top-width` 属性                                                                                   |
| borderRightWidth        | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-right-width` 属性                                                                                 |
| borderBottomWidth       | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-bottom-width` 属性                                                                                |
| borderLeftWidth         | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-left-width` 属性                                                                                  |
| borderColor             | [&lt;color&gt;](#user-content-color)                                                                              | 对应 `CSS` `border-color` 属性                                                                                       |
| borderTopColor          | [&lt;color&gt;](#user-content-color)                                                                              | 对应 `CSS` `border-top-color` 属性                                                                                   |
| borderRightColor        | [&lt;color&gt;](#user-content-color)                                                                              | 对应 `CSS` `border-right-color` 属性                                                                                 |
| borderBottomColor       | [&lt;color&gt;](#user-content-color)                                                                              | 对应 `CSS` `border-bottom-color` 属性                                                                                |
| borderLeftColor         | [&lt;color&gt;](#user-content-color)                                                                              | 对应 `CSS` `border-left-color` 属性                                                                                  |
| borderRadius            | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-radius` 属性                                                                                      |
| borderTopLeftRadius     | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-top-left-radius` 属性                                                                             |
| borderTopRightRadius    | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-top-right-radius` 属性                                                                            |
| borderBottomLeftRadius  | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-bottom-left-radius` 属性                                                                          |
| borderBottomRightRadius | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` `border-bottom-right-radius` 属性                                                                         |
| shadowColor             | [&lt;color&gt;](#user-content-color)                                                                              | 对应 `CSS` [box-shadow](https://css.doyoe.com/properties/border/box-shadow.htm) 属性中的颜色定义                     |
| shadowOffset            | {<br />width: [&lt;number&gt;](#user-content-number), <br />height: [&lt;number&gt;](#user-content-number)<br />} | 对应 `CSS` [box-shadow](https://css.doyoe.com/properties/border/box-shadow.htm) 属性中的阴影偏移定义                 |
| shadowRadius            | [&lt;number&gt;](#user-content-number)                                                                            | 在 `CSS` 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义                                                      |
| shadowOpacity           | [&lt;number&gt;](#user-content-number)                                                                            | 对应 `CSS` [box-shadow](https://css.doyoe.com/properties/border/box-shadow.htm) 属性中的阴影透明度定义               |

<a name="background"></a>

### Background 背景（1）

| 属性名          | 取值                                 | 描述                               |
| --------------- | ------------------------------------ | ---------------------------------- |
| backgroundColor | [&lt;color&gt;](#user-content-color) | 对应 `CSS` `background-color` 属性 |

<a name="transform"></a>

### Transform 转换（3）

| 属性名             | 取值                                                                                                                                                                                                                                    | 描述                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| transform          | `[{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]` | 对应 `CSS` `transform` 属性                                        |
| transformMatrix    | `TransformMatrixPropType`                                                                                                                                                                                                               | 类似于 `CSS` 中 `transform` 属性的 `matrix()` 和 `matrix3d()` 函数 |
| backfaceVisibility | `visible`, `hidden`                                                                                                                                                                                                                     | 对应 `CSS` `backface-visibility` 属性                              |

<a name="flexbox"></a>

### Flexbox 弹性盒（9）

我们在 React Native 中使用 Flexbox 规则来指定某个组件的子元素的布局。Flexbox 可以在不同屏幕尺寸上提供一致的布局结构。

一般来说，使用 `flexDirection`、`alignItems` 和 `justifyContent` 三个样式属性就已经能满足大多数布局需求。

#### Flex number

在 React Native 中 flex 的表现和 CSS 有些区别。 flex 在 RN 中只能为整数值，其具体表现请参考 [yoga 引擎](https://github.com/facebook/yoga) 的文档，

| 条件                              | 表现                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| flex 设置为正整数时，如 `flex: 1` | 组件是弹性的，尺寸和 flex 的值成正比                                                                         |
| `flex:0`                          | 组件没有弹性，且尺寸和 width ，height 一致                                                                   |
| `flex: -1`                        | 在空间足够的情况下，组件的尺寸和 width ，height 一致；但是在空间不足时，组件会被压缩至 minWidth 和 minHeight |

#### Flex Direction

在组件的 style 中指定 flexDirection 可以决定布局的主轴。子元素是应该沿着 `水平轴(row)`方向排列，还是沿着 `竖直轴(column)` 方向排列呢？**默认值是 `竖直轴(column)` 方向**，这点和 CSS 不一样，想要注意。

#### Justify Content

在组件的 style 中指定 justifyContent 可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：`flex-start`、`center`、`flex-end`、`space-around` 以及 `space-between`。

#### Align Items

在组件的 style 中指定 alignItems 可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为 row，则次轴方向为 column ）的排列方式。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：`flex-start`、`center`、`flex-end` 以及 `stretch`。

| 属性名         | 取值                                                                | 描述                                                         |
| -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| flex           | [&lt;number&gt;](#user-content-number)                              | 对应 `CSS` `flex` 属性，但只能为整数值                       |
| flexGrow       | [&lt;number&gt;](#user-content-number)                              | 对应 `CSS` `flex-grow` 属性                                  |
| flexShrink     | [&lt;number&gt;](#user-content-number)                              | 对应 `CSS` `flex-shrink` 属性                                |
| flexBasis      | [&lt;number&gt;](#user-content-number)                              | 对应 `CSS` `flex-basis` 属性                                 |
| flexDirection  | `row`, `row-reverse`, `column`, `column-reverse`                    | 对应 `CSS` `flex-direction` 属性                             |
| flexWrap       | `wrap`, `nowrap`                                                    | 对应 `CSS` `flex-wrap` 属性，但阉割了 `wrap-reverse` 取值    |
| justifyContent | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | 对应 `CSS` `justify-content` 属性，但阉割了 `stretch` 取值。 |
| alignItems     | `flex-start`, `flex-end`, `center`, `stretch`                       | 对应 `CSS` `align-items` 属性，但阉割了 `baseline` 取值。    |
| alignSelf      | `auto`, `flex-start`, `flex-end`, `center`, `stretch`               | 对应 `CSS` `align-self` 属性，但阉割了 `baseline` 取值       |

### Other 其他

| 属性名                                 | 取值                                   | 描述                                                                 |
| -------------------------------------- | -------------------------------------- | -------------------------------------------------------------------- |
| opacity                                | [&lt;number&gt;](#user-content-number) | 对应 `CSS` `opacity` 属性                                            |
| overflow                               | `visible`, `hidden`, `scroll`          | 对应 `CSS` `overflow` 属性，但阉割了 `auto` 取值                     |
| elevation<br /><sup>`Android`</sup>    | [&lt;number&gt;](#user-content-number) | `CSS` 中没有对应的属性，只在 `Android5.0+` 上有效                    |
| resizeMode                             | `cover`, `contain`, `stretch`          | `CSS` 中没有对应的属性，可以参考 `background-size` 属性              |
| overlayColor<br /><sup>`Android`</sup> | string                                 | `CSS` 中没有对应的属性，当图像有圆角时，将角落都充满一种颜色         |
| tintColor<br /><sup>`iOS`</sup>        | [&lt;color&gt;](#user-content-color)   | `CSS` 中没有对应的属性，`iOS` 图像上特殊的色彩，改变不透明像素的颜色 |

#### Color 颜色

`React Native` 支持了 `CSS` 中大部分的颜色类型：

- `#f00` (#rgb)
- `#f00c` (#rgba)：`CSS` 中无对应的值
- `#ff0000` (#rrggbb)
- `#ff0000cc` (#rrggbbaa)：`CSS` 中无对应的值
- `rgb(255, 0, 0)`
- `rgba(255, 0, 0, 0.9)`
- `hsl(360, 100%, 100%)`
- `hsla(360, 100%, 100%, 0.9)`
- `transparent`
- `0xff00ff00` (0xrrggbbaa)：`CSS` 中无对应的值
- `Color Name`：支持了 [基本颜色关键字](https://css.doyoe.com/appendix/color-keywords.htm#basic) 和 [拓展颜色关键字](https://css.doyoe.com/appendix/color-keywords.htm#extended)，但不支持 [28 个系统颜色](https://css.doyoe.com/appendix/color-keywords.htm#system)；

#### 优先级与继承（Specificity and inheritance）

组件的引入样式的优先级高于全局样式的优先级。

#### 选择器

1. 基本选择器只支持类选择器
2. 不支持组合选择器的写法
3. 不支持伪类及伪元素

#### CSS 的简写属性（Shorthand properties）

仅接受 React Native 支持的值。例如 background 只接受一种颜色 `backgroundColor`，因为 React Native 的 Background 仅支持 `backgroundColor` 属性。React Native 支持的属性可见上述 React Native 样式表。

#### 单位

Taro 使用 [PostCSS](https://github.com/ai/postcss) 单位转换插件 [postcss-pxtransform](https://github.com/NervJS/taro/blob/master/packages/postcss-pxtransform/README.md) 会将 px 转换为 React Native 的 `pt`，具体配置方法可以查看文档。

---

## docs/react-native.md

---
title: React Native 端开发流程
---

> 本篇主要讲解 Taro React Native 端开发流程，React Native 开发前注意事项请看 [开发前注意](./react-native-remind.md)。
>
> Taro3.x 跨端（h5、weapp、rn）开发可参考项目：[Taro 跨平台 demo（React Native + Weapp + h5）](https://github.com/wuba/Taro-Mortgage-Calculator)
>
> Taro React Native APP 开发调试工具，请查看 [Taro Playground](https://github.com/wuba/taro-playground) 项目。

## 简介

Taro 移动端的开发基于 Facebook 的开源项目 [React Native](https://github.com/facebook/react-native)。选择 **React** 框架开发的 Taro 项目，经过适配可以编译成 React Native 的 bundle 文件，再通过对应平台的工具可编译为 Android 及 iOS APP。

整体设计如下：

![image](https://pic8.58cdn.com.cn/nowater/frs/n_v287a918607dea4ac7b28471aef4fc8b6f.pic)

## 开发前准备

为了更顺利地进行开发，我们强烈地建议您，先对 React Native 开发进行学习。学习资料可在 [React Native 中文网](https://reactnative.cn/docs/getting-started)中找到，也可到 [React Native 官网](https://reactnative.dev/docs/getting-started)中查看。

完成基础知识的学习后，建议上手完成环境搭建，并确保能够顺利运行。环境搭建参考 [React Native 中文网的文档](https://reactnative.cn/docs/environment-setup) 及 [React Native 官网的文档](https://reactnative.dev/docs/environment-setup)。

## 开发模式

Taro 开发 React Native APP，提供了两种模式：

0. 集成模式：JS、iOS、Android 在同一仓库，通过 `taro init` 生成且选择 react-native 模板的项目，会采用此模式。与 `npx react-native init AwesomeProject` 生成的项目结构基本一致。**入门开发者推荐使用此模式**。
1. 分离模式：JS 代码在一个仓库，iOS 和 Android 代码在另外一个仓库（也称壳工程）。JS 代码可通过 `taro init` 选择任意模板生成。壳工程代码可 fork [Taro Native Shell 项目](https://github.com/NervJS/taro-native-shell)。

## Taro 对 React Native 的版本兼容情况

我们将以 React Native 最新版为主要适配对象，并及时跟进社区发展。

| React Native 版本 | 兼容情况                                                                                                                           | 壳工程分支                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| < 0.60.0          | 不兼容，可考虑使用 Taro 1.x/2.x 版本                                                                                               | -                                                                                                  |
| 0.60.x            | <= 3.4.2 兼容，但未全面测试，有问题请提供 issue                                                                                    | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)，更改 react-native 版本为 0.60.0 |
| 0.61.x            | <= 3.4.2 兼容，但未全面测试，有问题请提供 issue                                                                                    | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)，更改 react-native 版本为 0.61.0 |
| 0.62.x            | <= 3.4.2 兼容，但未全面测试，有问题请提供 issue                                                                                    | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)，更改 react-native 版本为 0.62.0 |
| 0.63.x            | >= 3.2.0，但 3.2.13 版本以后，需手动添加配置，参考 [PR](https://github.com/NervJS/taro/pull/9540)                                  | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)                                  |
| 0.64.x            | >= 3.2.0                                                                                                                           | [0.64.0](https://github.com/NervJS/taro-native-shell/tree/0.64.0)                                  |
| 0.65.x            | >= 3.3.10                                                                                                                          | -                                                                                                  |
| 0.66.x            | >= 3.3.10                                                                                                                          | [0.66.0](https://github.com/NervJS/taro-native-shell/tree/0.66.0)                                  |
| 0.67.x            | >= 3.3.10, unimodules                                                                                                              | [0.67.0](https://github.com/NervJS/taro-native-shell/tree/0.67.0)                                  |
| 0.67.x            | >= 3.3.10, expo                                                                                                                    | [0.67.0-expo](https://github.com/NervJS/taro-native-shell/tree/0.67.0-expo)                        |
| 0.68.x            | >= 3.5.0，但 3.5.6 版本以后，需要使用 expo-av@~11.2.3 react@17，参考[Discussion](https://github.com/NervJS/taro/discussions/12133) | [0.68.0](https://github.com/NervJS/taro-native-shell/tree/0.68.0)                                  |
| 0.69.x            | >= 3.5.6                                                                                                                           | [0.69.0](https://github.com/NervJS/taro-native-shell/tree/0.69.0)                                  |
| 0.70.x            | >= 3.6.0                                                                                                                           | [0.70.0](https://github.com/NervJS/taro-native-shell/tree/0.70.0)                                  |

## 集成模式

使用 `taro init` 命令进行初始化，选择 `react-native` 模板。**完成后执行 `yarn upgradePeerdeps` 进行依赖初始化**。

查看[演示视频](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4)。

> 如果需要初始化历史版本的 React-Native 项目，可在 [taro-project-templates](https://github.com/NervJS/taro-project-templates) 仓库中，找到对应版本的分支。
>
> 使用 `taro init --template-source github:NervJS/taro-project-templates#v3.5-RN-0.68` 命令，进行初始化。

### 常用命令

```shell
# 更新相关依赖。在初始化完成后或 Taro 版本更新后执行，用于同步 peerDependencies。
$ yarn upgradePeerdeps

# 打包 js bundle 及静态资源。在初始化完成后执行，用于打包默认使用的 bundle。platform 可选 ios, android
$ yarn build:rn --platform ios

# 启动 bundle server
$ yarn start

# 启动 iOS
$ yarn ios

# 启动安卓
$ yarn android
```

## 分离模式

使用 `taro init` 命令进行初始化，选择默认模板。fork 壳工程代码 [Taro Native Shell 项目](https://github.com/NervJS/taro-native-shell)。

### 配置 output

由于分离模式下，需要将 JS 工程产物输出到壳工程，合并完成打包工作。
可通过修改配置 `./config/index.js` 指定资源输出目录，如

```js
{
  rn: {
    output: {
      iosSourceMapUrl: '', // sourcemap 文件url
      iosSourcemapOutput: '../taro-native-shell/ios/main.map', // sourcemap 文件输出路径
      iosSourcemapSourcesRoot: '', // 将 sourcemap 资源路径转为相对路径时的根目录
      androidSourceMapUrl: '',
      androidSourcemapOutput: '../taro-native-shell/android/app/src/main/assets/index.android.map',
      androidSourcemapSourcesRoot: '',
      ios: '../taro-native-shell/ios/main.jsbundle',
      iosAssetsDest: '../taro-native-shell/ios',
      android: '../taro-native-shell/android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: '../taro-native-shell/android/app/src/main/res'
    },
  }
}
```

### JS 工程常用命令

```shell
# 启动 bundle server
$ yarn dev:rn

# 打包 js bundle 及静态资源。platform 可选 ios, android
$ yarn build:rn --platform ios
```

### 壳工程常用命令

```shell
# 更新相关依赖。Taro 版本更新后执行，用于同步 peerDependencies。
$ yarn upgradePeerdeps

# 启动 iOS
$ yarn ios

# 启动安卓
$ yarn android
```

## 使用 Taro Playground APP 进行调试

为方便没有原生开发经验的开发者对 Taro 进行体验，我们提供了高度集成的开发环境 [Taro Playground](https://github.com/wuba/taro-playground)。开发者仅需要正常运行 JS 工程，即可进行 APP 调试。

同时 Taro Playground APP 项目提供了参考代码，供学习。

查看[演示视频](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/09efc622c1f3fa25574d874314f4a421.mp4)。

### 开发调试

运行如下命令，启动 metro server，并打印二维码：

```shell
yarn dev:rn --qr
```

打开 Taro Playground APP，扫描二维码或在输入框中输入 `ip:port`，加载 dev bundle 进行调试。

### release 调试

运行如下命令，启动 http server，并打印二维码：

```shell
yarn build:rn --qr --platform ios
```

打开 Taro Playground APP，扫描二维码，加载 release bundle 进行调试。注意 Android 和 ios 需要分别验证。

### 分享 release bundle

利用 Taro Playground APP + GitHub Action + jsdelivr，我们可以将自己的 APP 通过二维码分享出来，使用方法参考 [taro-react-native-release 项目](https://github.com/zhiqingchen/taro-react-native-release)。

查看[演示视频](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/4c2ea6b807331f319c5fca2a673b454b.mp4)。

## 打包发布安卓包

先学习 [React Native 如何打包发布安卓包](https://www.react-native.cn/docs/signed-apk-android)。Taro 提供的 React Native 模板中集成了 GitHub Action，可使用 GitHub 进行打包，参考 [assemble_android_release](https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_android_release.yml)。

主要包含如下步骤：

1. `yarn`
2. `yarn build:rn --platform android`
3. linux: `sudo apt install -y ruby-bundler`, mac: `gem install bundler`
4. `cd android && bundle update && bundle exec fastlane assemble`

不使用 CI 工具：

1. `yarn`
2. `yarn build:rn --platform android`
3. `cd android && ./gradlew assembleRelease` 或使用 Android Studio 打包

## 打包发布到 APP Store

先学习 [React Native 如何打包发布 iOS 包](https://www.react-native.cn/docs/publishing-to-app-store)。Taro 提供的 React Native 模板中集成了 GitHub Action，可使用 GitHub 进行打包，参考 [assemble_ios_release](https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_ios_release.yml)。

主要包含如下步骤：

1. 证书导入
2. `yarn`
3. `yarn build:rn --platform ios`
4. `npx pod-install`
5. `export SKIP_BUNDLING=1`
6. `cd ios && bundle update && bundle exec fastlane build_release`

不使用 CI 工具：

1. `yarn`
2. `yarn build:rn --platform ios`
3. 使用 Xcode 打包

## 进阶教程

### 自定义原生依赖

Taro 对相关依赖做了按需加载，不需要的原生依赖可以不进行安装，以降低 APP 包大小。如 APP 中不涉及音视频，可直接删除 expo-av 依赖。

### 自定义 metro 配置

Taro 使用了 metro 中的 transformer 与 resolver，可与用户配置进行合并，开发者如需对 metro 做配置，可在项目根目录新建 `metro.config.js` 文件进行配置。

Taro 的默认配置为 `const { defaultConfig } = require('@tarojs/rn-runner/dist/config')`，可参考源码进行深入定制。

## 常见问题

### 通过 yarn start 或 yarn dev:rn 启动，如何判断是否成功？

- 启动后在终端可以看到 `React-Native Dev server is running on port: 8081` 等信息
- 在浏览器中输入 http://127.0.0.1:8081/status ，可以看到 packager-status:running
- 在浏览器中输入 http://127.0.0.1:8081/index.bundle?platform=ios&dev=true 会触发构建，此时可以在终端看到以下信息：

BUNDLE ./index ░░░░░░░░░░░░░░░░ 0.0% (0/173)

过程中如果有报错会在终端中提示，如无报错则显示绿色的信息：

BUNDLE ./index

以上三步都正常，说明 metro server 启动正常。

### yarn ios 运行报错：main.jsbundle: No such file or directory

```
yarn build:rn --platform ios
```

### 更新 `app.config` 文件，但发现未更新成功。

metro 缓存导致，尝试 `yarn dev:rn --reset-cache`

### requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager.

通常为部分依赖未安装，尝试 `yarn upgradePeerdeps`，或检查是否有依赖遗漏。

### yarn upgradePeerdeps 执行不成功

手动执行 `install-peerdeps @tarojs/taro-rn -o -Y && install-peerdeps @tarojs/components-rn -o -Y && install-peerdeps @tarojs/router-rn -o -Y && pod-install`

### install-peerdeps 也执行不成功

查看 [@tarojs/taro-rn](https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json)、[@tarojs/router-rn](https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json)、[@tarojs/components-rn](https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json) 的 peerDependencies，手动进行安装。

或者与 [Taro Native Shell](https://github.com/NervJS/taro-native-shell) 的 `package.json` 文件中的 `dependencies` 进行对齐。

### Invariant Violation: Tried to register two views with the same name RNCWebView

此类问题，通常是因为安装了多个版本的原生依赖导致。先通过`yarn why xxx`，例子中对应的命令为 `yarn why react-native-webview`，检查为何安装了多个版本。通过 resolutions 锁定需要的版本，建议使用 [@tarojs/taro-rn](https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json)、[@tarojs/router-rn](https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json)、[@tarojs/components-rn](https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json) 中的版本。

### packager Not Available

使用 Taro Playground 扫码后提示 packager Not Available，通常为网络问题，检查手机与电脑是否属于同一局域网下。

### Invariant Violation: "taroDemo" has not been registered.

检查 `config/index.js` 文件是否修改了 appName，默认使用 `taroDemo`。

```js
{
  rn: {
    appName: 'taroDemo',
  }
}
```

### 如何修改 appName？

0. 修改 `config/index.js` 中的 `rn.appName`
1. 修改 `MainActivity.java` 中 `getMainComponentName` 方法的返回值
2. 修改 `AppDelegate.m` 中 `RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"taroDemo" initialProperties:nil];` 的 `moduleName`
3. `yarn dev:rn --reset-cache`

### Library not found for -IDoubleConversion

使用 XCode 编译时，需要打开的文件是 `ios/taroDemo.xcworkspace`

### Entry file index.js does not exist. If you use another file as your entry point, pass ENTRY_FILE=myindex.js

Taro React Native 的 jdbundle 文件由 Taro 进行打包（yarn build:rn），如果使用 React Native 自带命令进行打包（react-native bundle），则会出现如上错误。因此我们需要跳过 React Native 原有的打包阶段。

react-native/ios/taroDemo.xcodeproj/project.pbxproj

```diff
-			shellScript = "set -e\n\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n";
+			shellScript = "set -e\n\nexport NODE_BINARY=node\nexport SKIP_BUNDLING=1\n../node_modules/react-native/scripts/react-native-xcode.sh\n";
```

android/app/build.gradle

```diff
-apply from: "../../node_modules/react-native/react.gradle"
+// apply from: "../../node_modules/react-native/react.gradle"
```

---

