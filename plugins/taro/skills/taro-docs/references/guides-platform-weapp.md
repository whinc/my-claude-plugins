## docs/custom-tabbar.mdx

---
title: 微信小程序自定义 Tabbar
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Taro 支持使用 React、Vue、或者小程序原生语法来编写小程序自定义 TabBar 组件。

## 示例项目

- [微信小程序自定义 TabBar（React）](https://github.com/NervJS/taro/tree/next/examples/custom-tabbar-react)
- [微信小程序自定义 TabBar（Vue3）](https://github.com/NervJS/taro/tree/next/examples/custom-tabbar-vue3)

## 如何使用

配置方法和微信小程序相同，开发前请仔细阅读 [《微信小程序自定义 TabBar 文档》](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)。

### 配置信息

- 在 `app.config` 中按正常填写 **tabBar 项**的相关配置（为了向下兼容），并把 **tabBar 项**的 `custom` 字段设置为 `true`。
- 所有作为 TabBar 页面的 `config` 里需要声明 `usingComponents` 项，也可以在 `app.config` 设置全局开启。

**示例：**

```js title="app.config.js" {3}
export default {
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#000000',
    list: [
      {
        pagePath: 'page/component/index',
        text: '组件',
      },
      {
        pagePath: 'page/API/index',
        text: '接口',
      },
    ],
  },
}
```

```js title="page/component/index.config.js" {3}
export default {
  navigationBarTitleText: '组件页',
  usingComponents: {},
}
```

```js title="page/API/index.config.js" {3}
export default {
  navigationBarTitleText: '接口页',
  usingComponents: {},
}
```

### 添加 custom-tab-bar

在 **src 目录**下添加 `custom-tab-bar` 目录，在里面书写组件，支持 React、Vue 和原生写法。

**React：**

    ├── config
    ├── src
    |   └── custom-tab-bar
    |       ├── index.json.js
    |       └── index.jsx
    └── package.json

**Vue：**

    ├── config
    ├── src
    |   └── custom-tab-bar
    |       ├── index.json.js
    |       └── index.vue
    └── package.json

**原生写法：**

    ├── config
    ├── src
    |   └── custom-tab-bar
    |       ├── index.js
    |       ├── index.json
    |       ├── index.wxss
    |       └── index.wxml
    └── package.json

### 图片资源引用

使用 React/Vue 开发自定义 TabBar 时，可以不使用 `import` 或 `require` 引用图片资源（Taro 会自动根据 TabBar 配置处理）。

如果使用了 `import`、`require` 或使用 `background-image` 时需要关注图片是否被 `url-loader` 处理为 base64，base64 的图片在 TabBar 中不能展示。

### 状态管理

默认 TabBar 与自定义 TabBar 的最大不同点在于，**默认 TabBar 在所有 TabBar 页共享一个组件实例，而自定义 TabBar 在各个 TabBar 页面初始化时都会创建一个新的组件实例**。

也就是说各个 TabBar 页内的自定义 TabBar 组件实例的状态是不共享的。因此对 TabBar 的状态管理（例如 `selected` 选中态）则尤为重要。

对于不同写法的自定义 TabBar，Taro 提供了不同的状态管理方案：

#### 1. 原生写法

微信小程序原生写法推荐使用 `getTabBar` 方法进行管理，如果你的自定义组件是使用原生写法编写的，那么可以参考[小程序官方提供的示例](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)。

**唯一需要注意的是**，在小程序原生页面是调用 `this.getTabBar`，但 Taro 的页面是 React/Vue 组件，`this` 指向的并不是原生页面对象。因此需要先获取原生页面对象再进行调用：

```js
// 页面 onShow 时
Taro.getCurrentInstance().page.getTabBar()
```

#### 2. React / Vue

React 和 Vue 推荐使用**状态管理工具**（Redux、Vuex 等）对 TabBar 页的状态进行管理。优点在于无须侵入各个 TabBar 页面的代码，逻辑可以归集在 TabBar 组件中。

如果开发者不希望使用状态管理工具，Taro 提供了 `Taro.getTabBar` API 以获取自定义 TabBar 组件（React/Vue 组件），然后开发者可以调用它上面的方法去更新 TabBar 组件的状态。

```js
// 页面 onShow 时
const pageObj = Taro.getCurrentInstance().page
const tabbar = Taro.getTabBar(pageObj)
```

> [示例项目](./custom-tabbar#示例项目) 中提供了两个例子，React 版本的例子展示了如何使用 `Taro.getTabBar` 管理状态，Vue3 版本的例子则展示了如何使用状态管理工具来管理状态。

### 组件配置项

自定义 TabBar 组件使用小程序的 `Component` 构造器构造，开发者在处理样式隔离等问题时可以需要对 `Component` 进行配置。这时开发者可以给 React/Vue 编写的自定义组件这些配置项属性，Taro 会把它们放置到 `Component` 构造对象上，目前支持：`options`、`externalClasses`、`behaviors`。

**例子：**

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="示例代码"
// Class Component
class CustomTabBar extends Component {
  static options = {
    addGlobalClass: true,
  }
}

// Functional Component
function CustomTabBar() {}
CustomTabBar.options = {
  addGlobalClass: true,
}
```

</TabItem>

<TabItem value="Vue">

```html title="示例代码"
<script>
  // 只支持 Options API 写法，不支持 <script setup>
  export default {
    options: {
      addGlobalClass: true,
    },
  }
</script>
```

</TabItem>
</Tabs>

## 常见问题

### 闪烁问题

#### 第一次加载 TabBar 页时 TabBar 会闪烁

自定义 TabBar 在各个 TabBar 页面初始化时都会创建一个新的组件实例导致。可以到微信小程序开发者社区寻找相关解决方案。

#### 切换 Tab 时图片闪烁

尽量使用本地图片或 iconfont。

### 相关讨论

- https://github.com/NervJS/taro/issues/7302

---

## docs/env-mode-config.md

---
title: 模式和环境变量
---

:::info
Taro v3.5.10 开始支持，之前的版本可参考 [taro-plugin-environment](https://github.com/bigmeow/taro-plugin-environment)
:::

`模式` 在 `Taro cli` 中，是用于给环境变量分组并加载其分组下的环境变量，它是一组环境变量的 `name`。
它参考了 [vue-cli 中的模式和环境变量加载方式](https://cli.vuejs.org/zh/guide/mode-and-env.html) , 所以若你之前使用过 `vue-cli`，可以更快掌握用法。

## 默认行为

默认情况下, `模式` `Taro cli` 有 2 个模式：

- `development` 模式用于开发时 `taro build --type weapp --watch`，它等价于 `taro build --type weapp --watch --mode development`
- `production` 模式用于生产时 `taro build --type weapp`， 它等价于 `taro build --type weapp --mode production`

可以发现，默认情况下 `模式` 的值，取决于 `NODE_ENV` 的值（但是反过来说模式的值无法改变 `NODE_ENV` 的值）。

假设你有`开发`和`生产`2 个环境，你可以在项目根目录下新建两个`env`环境文件：

```
.env.development     # 在 development 模式时被载入
.env.production      # 在 production 模式时被载入
```

环境文件只包含环境变量的“键=值”对：

```
TARO_APP_API="https://api.tarojs.com"
```

:::warning 限制
请注意，只有以 `TARO_APP_` 开头的变量将通过 `webpack.DefinePlugin` 静态地嵌入到客户端侧的代码中。这是为了避免和系统内置环境变量冲突。
:::

被载入的环境变量我们可以在所有 `taro` 插件、 `config/index.ts`配置文件 以及 `src` 目录下面的项目文件中使用, 例如：

```ts
// src/service/request.ts
const request = axios.create({
  baseURL: process.env.TARO_APP_API
};
export default request
```

在构建过程中，`process.env.TARO_APP_API` 将会被相应的值所取代。在 `TARO_APP_API="https://api.tarojs.com"` 的情况下，它会被替换为 "https://api.tarojs.com"

## 自定义模式

若默认的模式满足不了需求，你可以在命令上使用参数 `--mode 模式名` 的方式来指定模式名，以加载某一组环境变量，例如：

```bash
taro build --type weapp --mode uat
```

以上命令表示在构建时会加载 `.env.uat` 文件中的环境变量.

mode 具体载入规则：

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

:::info 环境文件加载优先级

为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。

.env 环境文件是通过运行 `taro` 命令载入的，因此环境文件发生变化，你需要重启服务。
:::

## 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 `.env.local` 文件取而代之。本地环境文件默认会被忽略，且出现在 `.gitignore` 中。

`.local` 也可以加在指定模式的环境文件上，比如 `.env.development.local` 将会在 `development` 模式下被载入，且被 `git` 忽略。

## 自定义环境变量前缀

前面提到，默认只加载 `.env` 文件中以 `TARO_APP_` 前缀开头的环境变量，你可能想改成自己公司的英文名称作为前缀，`@tarojs/cli` 提供了 `--env-prefix` 参数来实现这一需求：

```sh
taro build --type weapp --mode development --env-prefix JD_APP_
```

此时 `.env` 文件中能被加载的环境变量只能是 `JD_APP_` 前缀开头的：

```
TARO_APP_API="https://api.tarojs.com"    # 不满足前缀，不加载

JD_APP_TEST="foo"                        # 满足前缀，加载
```

但是，有个特殊的环境变量不受自定义前缀配置的影响，始终会被加载，那就是 `TARO_APP_ID`。

## 特殊环境变量 `TARO_APP_ID`

:::info
Taro v3.6.9 开始支持
:::

`TARO_APP_ID` 是专门针对小程序的 `appid` 设计的，在构建输出 `dist/project.config.json` 文件前， 会将 `dist/project.config.json` 文件中的 `appid` 字段，修改为 `TARO_APP_ID` 的值。 在不同环境配置不同的小程序 `appid` 时，它特别有用，还能免去开发者在开发者工具上手动修改 `appid` 的麻烦。

![免去开发者工具修改appid](@site/static/img/update-appid.png)

---

## docs/envs-debug.md

---
title: 多端同步调试
---

从 1.3.5 版本开始，可以在 dist 目录下创建一个与编译的目标平台名同名的目录，并将结果放在这个目录下，例如编译到微信小程序，最终结果是在 dist/weapp 目录下，这样做的好处是，各个平台使用独立的目录互不影响，从而达到多端同步调试的目的，在 `config/index.js` 配置如下：

```js title="/config/index.js"
outputRoot: `dist/${process.env.TARO_ENV}`
```

多端同步调试需要在终端工具中打开多个 Tab 来同时执行 taro 命令进行同步调试，如下图，编译成微信小程序和支付宝小程序：

对于微信小程序，还需要将`project.config.json`文件的`miniprogramRoot` 的值改为 `dist/weapp/`，这样就可以正常在开发者工具中看到小程序了。

![打开多个 Tab 来同时执行 taro 命令进行同步调试](https://img30.360buyimg.com/ling/jfs/t1/62633/10/8451/595888/5d663badE57d35fd2/5a34822774836ede.png)

编译出来的目录如下图，`dist` 目录下有 `weapp` 和 `alipay` 两个目录：

![同步调试编译结果](https://img20.360buyimg.com/ling/jfs/t1/74046/26/8491/148076/5d663baaEf2ed8064/33fbb1d365053d1c.png)

## React Native 端调试

参考[React Native 端开发流程](./react-native.md)

---

## docs/envs.md

---
title: 跨平台开发
---

Taro 的设计初衷就是为了统一跨平台的开发方式，并且已经尽力通过运行时框架、组件、API 去抹平多端差异，但是由于不同的平台之间还是存在一些无法消除的差异，所以为了更好的实现跨平台开发，Taro 中提供了如下的解决方案。

## 内置环境变量

Taro 在编译时提供了一些内置的环境变量来帮助用户做一些特殊处理。

### process.env.TARO_ENV

用于判断当前的编译平台类型。

取值：`weapp` / `swan` / `alipay` / `tt` / `qq` / `jd` / `h5` / `rn`/ `ascf`

可以通过这个变量来区分不同环境，从而使用不同的逻辑。在编译阶段，**会移除不属于当前编译类型的代码，只保留当前编译类型下的代码**，例如：

#### 1. 在微信小程序和 H5 端分别引用不同资源：

```jsx
/** 源码 */
if (process.env.TARO_ENV === 'weapp') {
  require('path/to/weapp/name')
} else if (process.env.TARO_ENV === 'h5') {
  require('path/to/h5/name')
}

/** 编译后（微信小程序）*/
if (true) {
  require('path/to/weapp/name')
}
/** 编译后（H5）*/
if (true) {
  require('path/to/h5/name')
}
```

#### 2. 决定不同端要加载的组件

```jsx
/** 源码（React JSX） */
<View>
  {process.env.TARO_ENV === 'weapp' && <ScrollViewWeapp />}
  {process.env.TARO_ENV === 'h5' && <ScrollViewH5 />}
</View>

/** 编译后（微信小程序）*/
<View>
  {true && <ScrollViewWeapp />}
</View>
/** 编译后（H5）*/
<View>
  {true && <ScrollViewH5 />}
</View>
```

:::note
不要解构 `process.env` 来获取环境变量，请直接以完整书写的方式（`process.env.TARO_ENV`）来进行使用。

```js
// 正确写法
if (process.env.TARO_ENV === 'weapp') {
}

// 错误写法
const { TARO_ENV = 'weapp' } = process.env
if (TARO_ENV === 'weapp') {
}
```

:::

### 组件文件中跨平台支持

为了方便大家书写样式跨端的组件代码，目前在.vue文件template模板内容中支持条件编译的特性。

指定平台保留样式：

```vue
/*  #ifdef  %PLATFORM%  */
模板代码
/*  #endif  */
```

指定平台剔除样式：

```vue
/*  #ifndef  %PLATFORM%  */
模板代码
/*  #endif  */
```

其中 `PLATFORM` 的取值与 `process.env.TARO_ENV` 保持一致

例如，希望某段模板内容只在 **微信小程序中** 生效，可以如下写法

```vue
/*  #ifdef weapp  */
模板代码
/*  #endif  */
```

如果是多个平台，之间可以使用空格隔开。

## 统一接口的多端文件

内置环境变量虽然可以解决大部分跨端的问题，但是会让代码中充斥着逻辑判断的代码，影响代码的可维护性，而且也让代码变得愈发丑陋。为了解决这种问题，Taro 提供了另外一种跨端开发的方式作为补充。

开发者可以通过使用**统一接口的多端文件**，来解决跨端差异的功能。针对一项功能，如果多个端之间都有差异，那么开发者可以通过将文件修改成 `原文件名 + 端类型` 的命名形式（端类型对应着 `process.env.TARO_ENV` 的取值），不同端的文件代码对外保持统一接口，而引用的时候仍然是 `import` 原文件名的文件。Taro 在编译时，会跟根据当前的编译平台类型，将加载的文件变更为带有对应端类型文件名的文件，从而达到不同的端加载对应文件的目的。

### 使用要点

统一接口的多端文件这一跨平台兼容写法有如下三个使用要点：

- 不同端的对应文件一定要**统一接口和调用方式**。
- 引用文件的时候，**只需要写默认文件名，不用带文件后缀**。
- 最好有一个平台无关的默认文件，这样在使用 TS 的时候也不会出现报错。

通常有以下三种使用场景：

### 多端组件

假如有一个 `Test` 组件存在微信小程序、百度小程序和 H5 三个不同版本，那么就可以像如下组织代码：

```
├── test.js                Test 组件默认的形式，编译到微信小程序、百度小程序和 H5 之外的端使用的版本
├── test.weapp.js          Test 组件的微信小程序版本
├── test.swan.js           Test 组件的百度小程序版本
└── test.h5.js             Test 组件的 H5 版本
```

四个文件，对外暴露的是统一的接口，它们接受一致的参数，只是内部有针对各自平台的代码实现。

而使用 `Test` 组件的时候，引用的方式依然和之前保持一致。`import` 的是**不带端类型的文件名**，在编译的时候会自动识别并添加端类型后缀：

```jsx
import Test from '../../components/test'
;<Test argA={1} argA={2} />
```

### 多端脚本逻辑

与多端组件类似，假如有需要针对不同的端写不同的脚本逻辑代码，我们也可以类似的进行处理，遵守的唯一原则就是**多端文件对外的接口保持一致**。

例如微信小程序上使用 `Taro.setNavigationBarTitle` 来设置页面标题，H5 则是使用 `document.title`。那么我们可以封装一个 `setTitle` 方法来抹平两个平台的差异。

1. 编写 `set_title.weapp.js`：

```js title="set_title.weapp.js"
import Taro from '@tarojs/taro'
export default function setTitle(title) {
  Taro.setNavigationBarTitle({
    title,
  })
}
```

2. 编写 `set_title.h5.js`：

```js title="set_title.h5.js"
export default function setTitle(title) {
  document.title = title
}
```

3. 调用：

```js
import setTitle from '../utils/set_title'

setTitle('页面标题')
```

### 多端页面路由

可以根据不同平台，设置不同的路由规则。例如：

```js title="app.config.js"
let pages = []

if (process.env.TARO_ENV === 'weapp') {
  pages = ['/pages/index/index']
}

if (process.env.TARO_ENV === 'swan') {
  pages = ['/pages/indexswan/indexswan']
}

export default {
  pages,
}
```

### 解析 node_modules 内的多端文件

#### 小程序 & H5

Taro 3 里的多端文件由 [MultiPlatformPlugin](https://github.com/NervJS/taro/blob/next/packages/taro-runner-utils/src/resolve/MultiPlatformPlugin.ts) 插件进行解析。

它是一个 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 插件，Taro 内部会默认加载它。但为了提高解析效率，插件**默认不解析 node_modules 中的文件**。

假设我们需要解析 NPM 包 **taro-mobile** 里面的多端文件，可以利用 WebpackChain 为 `MultiPlatformPlugin` 插件添加 `include` 配置：

```js title="config/index.js"
// mini 也可改为 h5，分别对应小程序与 h5 端配置
mini: {
  webpackChain (chain) {
    // Taro 3.1 & 3.2
    chain.resolve.plugin('MultiPlatformPlugin')
      .tap(args => {
        return [...args, {
          include: ['@taro-mobile']
        }]
      })

    // Taro 3.3+
    chain.resolve.plugin('MultiPlatformPlugin')
      .tap(args => {
         args[2]["include"] = ['@taro-mobile']
         return args
      })
  }
}
```

#### React Native

RN 端没有使用 Webpack，因此单独增加了一个配置支持：

```js title="config/index.js"
rn: {
  resolve: {
    include: ['taro-mobile'],
  }
}
```

## 参考案例

[Taro Playground](https://github.com/wuba/taro-playground) 项目支持 RN、微信小程序、web 可供参考。

| Android                                                                                | iOS                                                                                    | Web                                                                                 | Mini Program                                                                        |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ![](https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png) | ![](https://pic1.58cdn.com.cn/nowater/fangfe/n_v224532e5560314106b6ab32b0a1534a9d.png) | ![](https://pic5.58cdn.com.cn/nowater/frs/n_v2d585527f52e640679cdd37123a418fe3.png) | ![](https://pic3.58cdn.com.cn/nowater/frs/n_v23ec2613515c6458aaa44f01d459cea8b.jpg) |
| https://github.com/wuba/taro-playground/releases                                       | https://apps.apple.com/cn/app/taro-playground/id1576830673                             | https://wuba.github.io/taro-playground/                                             | https://github.com/wuba/taro-playground                                             |

同时该项目集成了[Github Workflows](https://github.com/wuba/taro-playground/tree/main/.github/workflows)，实现了安卓、iOS、微信小程序、web 的自动化发布。

---

## docs/folder.md

---
title: 目录结构
---

## 项目目录结构

    ├── dist                        编译结果目录
    |
    ├── config                      项目编译配置目录
    |   ├── index.js                默认配置
    |   ├── dev.js                  开发环境配置
    |   └── prod.js                 生产环境配置
    |
    ├── src                         源码目录
    |   ├── pages                   页面文件目录
    |   |   └── index               index 页面目录
    |   |       ├── index.js        index 页面逻辑
    |   |       ├── index.css       index 页面样式
    |   |       └── index.config.js index 页面配置
    |   |
    |   ├── app.js                  项目入口文件
    |   ├── app.css                 项目总通用样式
    |   └── app.config.js           项目入口配置
    |
    ├── project.config.json         微信小程序项目配置 project.config.json
    ├── project.tt.json             抖音小程序项目配置 project.tt.json
    ├── project.swan.json           百度小程序项目配置 project.swan.json
    ├── project.qq.json             QQ 小程序项目配置 project.qq.json
    ├── ascf.config.json            ASCF元服务项目配置 ascf.config.json
    |
    ├── babel.config.js             Babel 配置
    ├── tsconfig.json               TypeScript 配置
    ├── .eslintrc                   ESLint 配置
    |
    └── package.json

## 编译配置

    └── config                      项目编译配置目录
        ├── index.js                默认配置
        ├── dev.js                  开发环境配置
        └── prod.js                 生产环境配置

用于配置 Taro 项目的编译行为、修改 Webpack 配置等，详情请参考[编译配置](./config)和[编译配置详情](./config-detail)。

## 源码组织

和小程序规范一样，Taro 包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`。

### app

    └── src                         源码目录
        ├── app.js                  项目入口文件
        ├── app.css                 项目总通用样式
        └── app.config.js           项目入口配置

小程序的主体由下面三个文件组成：

| 文件          | 必须 | 作用           |
| :------------ | :--- | :------------- |
| app.js        | 是   | 小程序入口逻辑 |
| app.css       | 否   | 小程序全局样式 |
| app.config.js | 是   | 小程序全局配置 |

代码示例请根据你选择的框架进行查看：[React](./react-overall), [Preact](./preact), [Vue](./vue-overall), [Vue3](./vue3)。

#### 1. 小程序全局配置

`app.config.js` 对应小程序规范的全局配置文件 `app.json`，优势在于它是 JS 文件可以编写逻辑。配置以**微信小程序的全局配置**为规范。详情请参考[全局配置](./app-config)。

#### 2. 小程序全局样式

小程序全局样式文件可以通过 ES6 规范的 `import` 进行引入。

```js title="app.js"
import './app.css'
```

### page

    └── src                         源码目录
        └── pages                   页面文件目录
            └── index               index 页面目录
                ├── index.js        index 页面逻辑
                ├── index.css       index 页面样式
                └── index.config.js index 页面配置

一个小程序页面由三个文件组成，如下：

| 文件           | 必须 | 作用         |
| :------------- | :--- | :----------- |
| page.js        | 是   | 页面入口逻辑 |
| page.css       | 否   | 页面样式     |
| page.config.js | 否   | 页面配置     |

#### 1. 页面配置

`page.config.js` 对应小程序规范的页面配置文件 `page.json`，优势在于它是 JS 文件可以编写逻辑。配置以**微信小程序的页面配置**为规范。详情请参考[页面配置](./page-config)。

#### 2. 页面样式

页面的样式文件可以通过 ES6 规范的 `import` 进行引入。

```js title="pages/index/index.js"
import './index.css'
```

#### 3. 页面路由

页面路由与小程序规范一致，需要在小程序全局配置 `app.config.js` 中进行配置。

## 项目配置

    └──project.config.json         微信小程序项目配置 project.config.json

各类小程序平台均有自己的项目配置文件，Taro 支持对它们进行适配，详情请参考[项目配置](./project-config)。

## Babel 配置

    └── babel.config.js             Babel 配置

请参考 [Babel 配置](./babel-config)

## ESLint 配置

    └── .eslintrc                   ESLint 配置

ESLint 配置请参考 [Github](https://github.com/NervJS/taro/tree/next/packages/eslint-config-taro)

---

## docs/independent-subpackage.md

---
title: 微信小程序独立分包
---

Taro 支持使用微信小程序的独立分包功能，配置方法和微信小程序中一致，请参考[《微信小程序独立分包文档》](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html)。

## 示例

- [weapp-independent-subpackages](https://github.com/NervJS/taro/tree/next/examples/weapp-independent-subpackages)

## 配置方法

假设小程序目录结构如下：

    ├── config
    ├── src
    |   ├── pages
    |   |   └── index
    |   ├── moduleA
    |   |   └── pages
    |   |       ├── rabbit
    |   |       └── squirrel
    |   ├── moduleB
    |   |   └── pages
    |   |       ├── pear
    |   |       └── pineapple
    |   ├── app.css
    |   ├── app.json
    |   └── app.js
    └── package.json

开发者通过在 `app.json` 的 `subpackages` 字段中，给对应的分包配置项中定义的 `independent` 字段声明对应分包为独立分包：

```js title="app.json" {18}
{
  "pages": [
    "pages/index"
  ],
  "subpackages": [
    {
      "root": "moduleA",
      "pages": [
        "pages/rabbit",
        "pages/squirrel"
      ]
    }, {
      "root": "moduleB",
      "pages": [
        "pages/pear",
        "pages/pineapple"
      ],
      "independent": true
    }
  ]
}
```

---

## docs/mini-split-chunks-plugin.md

---
title: 智能提取分包依赖
---

在开发小程序时，Taro 编译器依赖 SplitChunksPlugin 插件抽取公共文件，默认主包、分包依赖的 module 都会打包到根目录 vendors.js 文件中（有一个例外，当只有分包里面有且只有一个页面依赖 module 时，会打包到分包中依赖页面源码中），直接影响到小程序主包大小，很容易超出 2M 的限制大小。

### SplitChunks 默认配置

> 可通过 [mini.commonChunks](/docs/next/config-detail#minicommonchunks) 配置进行修改。

```json title="SplitChunks 默认配置"
{
  chunks: 'all',
  maxInitialRequests: Infinity,
  minSize: 0,
  cacheGroups: {
    common: {
      name: config.isBuildPlugin ? 'plugin/common' : 'common',
      minChunks: 2,
      priority: 1
    },
    vendors: {
      name: config.isBuildPlugin ? 'plugin/vendors' : 'vendors',
      minChunks: 2, // 当大于 2 个依赖时，才打包到 vendors.js 中
      test: module => {
        return /[\\/]node_modules[\\/]/.test(module.resource)
      },
      priority: 10
    },
    taro: {
      name: config.isBuildPlugin ? 'plugin/taro' : 'taro',
      test: module => {
        return taroBaseReg.test(module.context)
      },
      priority: 100
    }
  }
}
```

那么应该如何对分包公共依赖的进行抽取，减少主包大小呢？

### 优化思路

感谢 [@huangcj](https://github.com/huangcj99) 提交的 miniSplitChunksPlugin 插件，在打包时通过继承 SplitChunksPlugin 进行相关 module 依赖树分析，过滤出主包中无依赖但分包独自依赖的 module 提取成 sub vendor chunks，过滤出主包中无依赖但多个分包共同依赖的 module 为 sub common chunks，利用 SplitChunksPlugin 的 cacheGroup 功能，将相关分包依赖进行文件 split。抽取出的目录文件如下：

- 分包根目录/sub-vendors.(js|wxss)

  - 如果该 module 只被单个分包内的多个 page 引用，则提取到该分包根目录的 sub-vendors 文件中。

  ![sub-venders](https://img13.360buyimg.com/imagetools/jfs/t1/205404/34/21044/222198/6256e36cE62a6c078/93671ab13f3df367.png)

- 分包根目录/sub-common/\*.(js|wxss)

  - 如果该 module 被多个分包内的 page 引用，正常情况下会被提取到主包的公共模块中，这里为了保证主包的体积最优，则会先提取成一个公共模块，然后分别复制到对应分包的 sub-common 文件夹下**（因为小程序无法跨分包引入文件，所以这里需要每个分包都复制一份）**，需要注意的是，这样会导致总包的体积变大一些。

  ![sub-common](https://img12.360buyimg.com/imagetools/jfs/t1/136245/21/26437/256225/6256e36dE6a1c438f/43dfcf54cf443ca0.png)

### 使用方法

1 将 Taro 升级到 **3.3.11** 及以上版本

```shell title="升级版本"
# 使用Taro 升级命令更新CLI版本到最新版本
$ taro update self 
# 使用Taro 升级命令更新CLI版本到指定版本
$ taro update self [版本号]
# 使用Taro 升级命令将项目依赖升级到与@tarojs/cli一致的版本
$ taro update project
# 使用Taro 升级命令将项目依赖升级到指定版本
$ taro update project [版本号]
```

2 修改配置文件

通过配置 [mini.optimizeMainPackage.enable](/docs/next/config-detail#minioptimizemainpackage) 为 true，即可开启智能提取分包依赖插件。

```js title="开启智能提取分包依赖"
// config/index.js
config = {
  // ...
  mini: {
    // ...
    optimizeMainPackage: {
      enable: true,
    },
  },
}
```

3 排除不想抽取的 module
如果依赖的 module 不想走分包提取逻辑，可以配置 exclude 属性，支持字符串（字符串需写文件完整绝对路径名）和函数数组，匹配到的 module 依旧按默认提取到主包中。

```js title="开启智能提取分包依赖"
// config/index.js
config = {
  // ...
  mini: {
    // ...
    optimizeMainPackage: {
      enable: true,
      exclude: [
        path.resolve(__dirname, '../src/utils/moduleName.js'),
        (module) => module.resource?.indexOf('moduleName') >= 0,
      ],
    },
  },
}
```

4.目前只支持微信小程序，默认支持 .wxss、.json、.js、.wxml、.wxs 5 种文件格式。

### 效果展示

[Demo 工程](https://github.com/NervJS/taro/tree/feat/webpack5/examples/mini-split-chunks-plugin)

```bash title="源文件工程目录"
src
├── app.config.js
├── app.js
├── app.scss
├── index.html
├── packageA // 分包 A
│   ├── common
│   │   └── index.scss // 分包 A 公共样式
│   └── pages
│       ├── cat
│       │   ├── index.config.js
│       │   ├── index.jsx // 依赖 taro-ui 和分包公共样式文件
│       │   └── index.scss
│       └── dog
│           ├── index.config.js
│           ├── index.jsx // 依赖 miniprogram-sm-crypto、 taro-ui 和分包公共样式文件
│           └── index.scss
├── packageB // 分包 B
│   └── pages
│       ├── apple
│       │   ├── index.config.js
│       │   ├── index.jsx // 依赖 miniprogram-sm-crypto
│       │   └── index.scss
│       └── banana
│           ├── index.config.js
│           ├── index.jsx
│           └── index.scss
└── pages // 主包
    └── index
        ├── index.config.js
        ├── index.jsx
        └── index.scss
```

```bash title="输出工程目录"
dist
├── app.js
├── app.js.LICENSE.txt
├── app.json
├── app.wxss
├── base.wxml
├── comp.js
├── comp.json
├── comp.wxml
├── custom-wrapper.js
├── custom-wrapper.json
├── custom-wrapper.wxml
├── packageA
│   ├── pages
│   │   ├── cat
│   │   │   ├── index.config.wxss
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   └── dog
│   │       ├── index.config.wxss
│   │       ├── index.js
│   │       ├── index.json
│   │       ├── index.wxml
│   │       └── index.wxss
│   ├── sub-common
│   │   ├── 34299ff0bdffe7d50742f6fc2ed88f06.js // miniprogram-sm-crypto 依赖模块 jsbn 源码
│   │   └── a223b12dc801f51582835c16be379976.js // miniprogram-sm-crypto 源码
│   ├── sub-vendors.js // taro-ui AtButton组件源码
│   ├── sub-vendors.js.LICENSE.txt
│   └── sub-vendors.wxss // taro-ui AtButton组件样式及分包公共样式源码
├── packageB
│   ├── pages
│   │   ├── apple
│   │   │   ├── index.config.wxss
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   └── banana
│   │       ├── index.config.wxss
│   │       ├── index.js
│   │       ├── index.json
│   │       ├── index.wxml
│   │       └── index.wxss
│   └── sub-common
│       ├── 34299ff0bdffe7d50742f6fc2ed88f06.js // miniprogram-sm-crypto 依赖模块 jsbn 源码
│       └── a223b12dc801f51582835c16be379976.js // miniprogram-sm-crypto 源码
├── pages
│   └── index
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── project.config.json
├── runtime.js
├── taro.js
├── taro.js.LICENSE.txt
├── utils.wxs
├── vendors.js // 公共JS文件
└── vendors.js.LICENSE.txt
```

### 注意事项

因为 sub-common 会在每个分包目录下分别复制一份，所以会增大小程序包整体大小，使用时需根据具体场景具体分析，采用适合自己的性能最优方案。

---

## docs/miniprogram-plugin.md

---
title: 微信小程序插件开发
---

Taro 支持开发微信小程序插件，本文将介绍主要用法。

:::info
目前微信小程序仅支持使用 `React` 来进行开发
:::

## 参考

- [微信小程序插件开发概述](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/)
- [完整示例](https://github.com/NervJS/taro/tree/next/examples/build-weapp-plugin)

## 开发步骤

### 1. 创建插件开发模版

微信小程序插件分为**页面**、**组件**、**接口**三种。开发者可以使用 `taro init` 命令，然后选择生成**微信小程序插件模版**，即可在当前目录生成包含上述三种插件类型的 Taro 微信小程序插件项目。

#### 项目结构

推荐的插件项目结构如下：

注意，最后发布的是 plugin 文件夹内的内容，插件的所有内容及除了 npm 包以外的依赖都应写在 plugin 文件夹内。`src/pages` 内的页面只是用于调试插件。

    ├── config                 配置目录
    ├── src                    源码目录
    |   ├── pages              调试页面目录，用于调试插件
    |   |   └── index
    |   ├── plugin             插件目录
    |   |   ├── doc            插件文档目录
    |   |   ├── components     组件插件目录
    |   |   ├── pages          页面插件目录
    |   |   ├── index.js       接口插件文件
    |   |   └── plugin.json    插件配置文件
    |   ├── app.css            项目总通用样式
    |   └── app.js             项目入口文件
    └── package.json
    └── package.config.json

### 配置 appid

创建完模版后，首先需要修改 `project.config.json` 的 **appid** 字段和 `src/app.config.ts` 的 **prodiver** 字段为同一 appid。

### 编译项目

```bin
taro build --plugin weapp
taro build --plugin weapp --watch
```

### 添加小程序项目

在微信开发者工具中添加 Taro 插件项目根目录。

## 使用插件页面

plugin.json 的 **pages** 字段加入页面插件路径：

```json title="plugin.json"
{
  "pages": {
    "list": "pages/list/list"
  }
}
```

页面使用路径： **plugin://[app.js 中注册的插件名]/[plugin.json 中注册的页面名]** 进行跳转。

```jsx {1}
<Navigator url="plugin://myPlugin/list">Go to pages/list!</Navigator>
```

### 插件页面获取小程序渲染层元素

```js
// 通过 this.props.$scope 获取到小程序原生配置对象
const query = Taro.createSelectorQuery().in(this.props.$scope)
query
  .select('#id')
  .boundingClientRect()
  .exec((res) => {
    console.log(res)
  })
```

### genericsImplementation

支持使用 `genericsImplementation` 传入组件到插件页面，详细用法请看 Demo。

## 使用插件组件

plugin.json 的 **publicComponents** 字段加入组件插件路径：

```json title="plugin.json"
{
  "publicComponents": {
    "avatar": "components/avatar/avatar"
  }
}
```

在页面配置 config.usingComponents 中配置好插件名和插件路径（**plugin://[app.js 中注册的插件名]/[plugin.json 中注册的组件名]**）：

```jsx {4}
export default class Index extends Component {
  config = {
    usingComponents: {
      avatar: 'plugin://myPlugin/avatar',
    },
  }
}
```

### 插件组件接受外部 props

如果需要给插件传入参数，需要将参数统一放在组件的 `props` 中进行传入。

```js
// 常规 props 传递
<Plugin title={this.state.name} desc={this.state.desc} />

// 在使用插件组件时需要改造成以下形式：
const extraProps = {
  name: this.state.name,
  desc: this.state.desc
}
<Plugin props={extraProps} />
```

### 插件组件事件传递

微信小程序的 props 支持传递函数，因此我们也可以通过给插件组件传入函数 props 达到事件传递的目的。

```js
// 调用方传入事件回调函数
;<Plugin props={{ onSomeEvent() {} }} />

// 插件调用事件函数
this.props.onSomeEvent()
```

### 插件组件获取小程序渲染层元素

```js
// 通过 this.props.$scope 获取到小程序原生配置对象
const query = Taro.createSelectorQuery().in(this.props.$scope)
query
  .select('#id')
  .boundingClientRect()
  .exec((res) => {
    console.log(res)
  })
```

### componentGenerics

暂不支持 `componentGenerics`。

## 使用插件接口

plugin.json 的 **main** 字段加入接口插件路径：

```json title="plugin.json"
{
  "main": "index.js"
}
```

页面中使用：

```jsx
const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class Index extends Component {
  componentWillMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }
```

---

## docs/project-config.md

---
title: 项目配置
---

各类小程序平台均有自己的项目配置文件，例如：

- 微信小程序，[project.config.json](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html?search-key=%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE)
- 百度小程序，[project.swan.json](https://smartprogram.baidu.com/docs/develop/devtools/projectconfig/)
- 抖音小程序，[project.config.json](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/basic-reference/catalog-structure)
- QQ 小程序，project.config.json
- 支付宝小程序，[mini.project.json](https://opendocs.alipay.com/mini/framework/project)
- 京东小程序，暂无发现
- 飞书小程序，[project.config.json](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-project-configuration?from=taro)
- ASCF元服务，[ascf.config.json](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/project-json-config)

为了能够适配不同小程序平台的配置文件不同的情况，Taro 支持为各个小程序平台添加各自的项目配置文件。

通过 Taro 模板创建的项目都会默认拥有 `project.config.json` 这一项目配置文件，这个文件 **只能用于微信小程序**，若要兼容到其他小程序平台，请按如下对应规则来增加相应平台的配置文件，其配置与各自小程序平台要求的一致：

| 小程序平台   | 添加配置文件        |
| ------------ | ------------------- |
| 微信小程序   | project.config.json |
| 百度小程序   | project.swan.json   |
| 抖音小程序   | project.tt.json     |
| QQ 小程序    | project.qq.json     |
| 支付宝小程序 | project.alipay.json |
| 飞书小程序   | project.lark.json   |
| ASCF元服务  | ascf.config.json    |

:::caution 注意
飞书小程序从[插件](https://www.npmjs.com/package/@tarojs/plugin-platform-lark)1.0.2 版本开始，配置文件修改为`project.lark.json`，之前版本为`project.tt.json`。
推荐升级[飞书插件](https://www.npmjs.com/package/@tarojs/plugin-platform-lark)到最新版，避免使用 Taro 同时开发抖音小程序和飞书小程序配置文件 appId 冲突的问题。
:::

---

## docs/specials.md

---
title: 常见问题
---

- [Issue #46](https://github.com/NervJS/taro/issues/46)，`redux-saga` 的引入问题处理

- 在 H5 模式下，tabBar 可能会挡住页面 fixed 元素问题：这是因为与小程序的 tabBar 不同，在 H5 下 tabBar 是一个普通的组件，当页面中存在 `fixed(bottom)` 定位的元素时，其表现会与小程序中不一致。Taro 提供了一个适配的方法：

例如：

```css
.fixed {
  bottom: 0;
  /* 在 H5 模式下将会编译成 margin-bottom: 50px，在小程序模式下则会忽略 */
  margin-bottom: taro-tabbar-height;
}
```

---

## docs/taro-dom.md

---
title: Taro DOM Reference
---

**小程序**环境下，Taro 模拟实现的 DOM、BOM API 概览。

相关代码位于 `@tarojs/runtime` 包中。

## DOM

### TaroEventTarget

| 属性或方法          | 说明     |
| :------------------ | :------- |
| addEventListener    | 绑定事件 |
| removeEventListener | 解绑事件 |

### TaroNode

`TaroEventTarget <- TaroNode`

| 属性或方法      | 说明                                                |
| :-------------- | :-------------------------------------------------- |
| nodeType        |                                                     |
| nodeName        |                                                     |
| parentNode      |                                                     |
| childNodes      |                                                     |
| nextSibling     |                                                     |
| previousSibling |                                                     |
| parentElement   |                                                     |
| firstChild      |                                                     |
| lastChild       |                                                     |
| textContent     | setter                                              |
| insertBefore    |                                                     |
| appendChild     |                                                     |
| replaceChild    |                                                     |
| removeChild     |                                                     |
| remove          |                                                     |
| hasChildNodes   |                                                     |
| ownerDocument   | 只读，返回模拟的 [document](taro-dom#document) 对象 |

#### 可选属性/方法

以下属性/方法不是每个 Web 框架、每个应用都需要使用的。因此 Taro v3.4 把这类 DOM APIs 做成可插拔式，让开发者可以选择在最终的编译结果里只存在哪些 DOM APIs。

:::tip
如果没有使用 React 的 `dangerouslySetInnerHTML` 或 Vue2 的 `v-html` 去渲染 HTML 字符串，可以关闭对 `innerHTML` 的支持，可以节省 **9k** 的空间。
但 Vue3 必须开启，因为它使用了 insertAdjacentHTML。
:::

| 属性或方法         | 默认状态     | 配置项             | 说明                                                                                                            |
| :----------------- | :----------- | :----------------- | :-------------------------------------------------------------------------------------------------------------- |
| innerHTML          | 开启         | enableInnerHTML    | 目前只实现了 `setter`(主要用于支持 React `dangerouslySetInnerHTML`、Vue `v-html`)<br/>`getter` 只会返回空字符串 |
| insertAdjacentHTML | 开启（Vue3） | enableAdjacentHTML |                                                                                                                 |
| cloneNode          | 开启（Vue3） | enableCloneNode    |                                                                                                                 |
| contains           | 关闭         | enableContains     |                                                                                                                 |

### TaroText

`TaroEventTarget <- TaroNode <- TaroText`

| 属性或方法  | 说明 |
| :---------- | :--- |
| textContent |      |
| nodeValue   |      |

### TaroElement

`TaroEventTarget <- TaroNode <- TaroElement`

| 属性或方法             | 说明 |
| :--------------------- | :--- |
| id                     |      |
| tagName                |      |
| props                  |      |
| style                  |      |
| dataset                |      |
| className              |      |
| cssText                |      |
| classList              |      |
| children               |      |
| attributes             |      |
| textContent            |      |
| hasAttribute           |      |
| hasAttributes          |      |
| focus                  |      |
| blur                   |      |
| setAttribute           |      |
| removeAttribute        |      |
| getAttribute           |      |
| getElementsByTagName   |      |
| getElementsByClassName |      |
| dispatchEvent          |      |

#### 可选属性/方法

| 属性或方法            | 默认状态     | 配置项                | 说明                                |
| :-------------------- | :----------- | :-------------------- | :---------------------------------- |
| content               | 开启（Vue3） | enableTemplateContent |                                     |
| getBoundingClientRect | 关闭         | enableSizeAPIs        | 受限于小程序，此 API 是**异步函数** |

### RootElement

`TaroEventTarget <- TaroNode <- TaroElement <- RootElement`

非 Web 标准 API。是链接 Taro DOM 更新和小程序 `setData` 的核心实现。

在这里会调用小程序的 `setData` API，把 Taro DOM 的序列化数据传递到小程序渲染层。

### FormElement

`TaroEventTarget <- TaroNode <- TaroElement <- FormElement`

| 属性或方法 | 说明                   |
| :--------- | :--------------------- |
| value      | 返回或设置当前控件的值 |

### SVGElement

`TaroEventTarget <- TaroNode <- TaroElement <- SVGElement`

只是实现了继承关系，没有实现属性与方法。

## BOM

### window

Taro 模拟实现了基于浏览器标准 `window` 对象，它主要实现了用于支持 React、Vue 等框架运行的必备 API。

此外，Taro 会为 `window` 对象赋值小程序的 `global` 对象上的全部属性。

| 属性或方法            | 说明                                                               |
| :-------------------- | :----------------------------------------------------------------- |
| navigator             | 模拟的 [navigator](taro-dom#navigator) 对象                        |
| document              | 模拟的 [document](taro-dom#document) 对象                          |
| requestAnimationFrame | 模拟的 [requestAnimationFrame](taro-dom#requestanimationframe) API |
| cancelAnimationFrame  | 模拟的 [cancelAnimationFrame](taro-dom#cancelanimationframe) API   |
| getComputedStyle      | 只能用于返回元素的 `style` 值，做不到真正去计算 `css` 后的样式     |
| addEventListener      | 空函数                                                             |
| removeEventListener   | 空函数                                                             |

### document

`TaroEventTarget <- TaroNode <- TaroElement <- document`

| 属性或方法       | 说明                                                                |
| :--------------- | :------------------------------------------------------------------ |
| createElement    | 返回 `TaroElement`                                                  |
| createElementNS  | 没有真正去实现，等同于 `document.createElement`，返回 `TaroElement` |
| createTextNode   | 返回 `TaroText`                                                     |
| createComment    | 返回 `TaroText`                                                     |
| getElementById   | 返回 `TaroElement`                                                  |
| querySelector    | 目前只能根据 `id` 寻找元素，等同于 `document.getElementById`        |
| querySelectorAll | 没有真正去实现，返回 `[]`                                           |
| defaultView      | 返回 [window](taro-dom#window)                                      |

### navigator

`navigator` 为以下对象：

```json
{
  "appCodeName": "Mozilla",
  "appName": "Netscape",
  "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",
  "cookieEnabled": true,
  "mimeTypes": [],
  "onLine": true,
  "platform": "MacIntel",
  "plugins": [],
  "product": "Taro",
  "productSub": "20030107",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",
  "vendor": "Joyent",
  "vendorSub": ""
}
```

### requestAnimationFrame

优先使用小程序的 `requestAnimationFrame` API，如果不存在则进行 [polyfill](https://github.com/NervJS/taro/blob/next/packages/taro-runtime/src/bom/raf.ts)。

### cancelAnimationFrame

优先使用小程序的 `cancelAnimationFrame` API，如果不存在则使用 `clearTimeout` 代替。

---

## docs/taro-in-miniapp.mdx

---
title: 原生项目使用 Taro
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

:::info
Taro v3.0.25 开始支持
:::

## 基础混合用法

### 示例项目

[blended-basic](https://github.com/NervJS/taro/tree/next/examples/blended-basic)

### 用法

#### 1. 开发环境

1.1 推荐在 Taro 项目中进行开发调试，在生产环境下再把产物移动到原生小程序中进行预览。

```bash
# 和编译普通 Taro 项目一样
$ taro build --type [platform] --watch
```

1.2 小程序开发者工具导入 **Taro 项目**进行预览。

#### 2. 生产环境

1.1 编译项目时使用 `--blended` 参数以输出混合模式的代码。

```bash
# 以混合模式进行打包
$ taro build --type [platform] --blended
```

1.2 移动 Taro 项目的输出目录到原生项目内

也可以编写一个 **Taro 插件**自动移动，可以参考 [plugin-mv](https://github.com/NervJS/taro/blob/next/examples/blended-basic/taro-project/plugin-mv/index.js)。

1.3 原生项目的 `app.js` 中引用 Taro 入口文件

```js title="app.config.js" {2,7,12}
// 必须引用 Taro 项目的入口文件
const taroApp = require('./taro/app.js').taroApp

App({
  onShow() {
    // 可选，调用 Taro 项目 app 的 onShow 生命周期
    taroApp.onShow()
  },

  onHide() {
    // 可选，调用 Taro 项目 app 的 onHide 生命周期
    taroApp.onHide()
  },
})
```

### Taro 项目引用原生项目的 JS 文件

有时我们需要在 Taro 项目中引用原生项目中的公共 JS 模块（如上报 sdk）。但是 Webpack 会把这些公共模块一并打包，导致公共模块存在两份（Taro 产物中一份，原生项目中一份）。

为了优化包体积大小，我们希望不要打包到 Taro 产物中，而是直接引用原生项目中的代码，可以使用 Webpack 的 [externals](https://webpack.js.org/configuration/externals/) 配置去实现。

#### 例子

假设以下项目结构：

    ├── miniapp           原生项目
    |   └── utils
    |       └── util.js
    └── taro-project      Taro 项目
        ├── config
        |   └── index.js
        └── src
            └── pages
                └── index 此页面中希望引用 miniapp/utils/util.js

1. 配置 `alias`，目的是让 `externals` 更方便地筛选出不需要打包的依赖。
2. 配置 Webpack `externals`，选择出不需要打包的依赖，并计算好相对路径。
3. 设置环境变量 `process.env.NODE_ENV` 为 `production` 时，externals 生效。（当没有手动设置环境变量时，默认在 `watch` 模式时环境变量为 `development`，否则为 `production`）

```js title="config/index.js" {3,8,10,15-29}
const config = {
  alias: {
    '@/utils':
      process.env.NODE_ENV === 'production'
        ? // 生产环境路径计算：
          // Webpack 编译发生在 taro-project 下，假设编译后的 taro-project/dist 会被移到到 miniapp/taro。
          // path.resolve(__dirname, '..') 为 taro-project。taro-project/dist 之于 taro-project，相当于 miniapp/taro 之于 miniapp。
          // 再根据 miniapp/utils 与 miniapp 的相对路径，得出 path.resolve(__dirname, '../utils')
          path.resolve(__dirname, '../utils')
        : // 开发环境直接引用原生项目下的依赖，方便开发
          path.resolve(__dirname, '../../miniapp/utils'),
  },
  mini: {
    webpackChain(chain) {
      chain.merge({
        externals: [
          (context, request, callback) => {
            const externalDirs = ['@/utils']
            const externalDir = externalDirs.find((dir) => request.startsWith(dir))

            if (process.env.NODE_ENV === 'production' && externalDir) {
              const externalDirPath = config.alias[externalDir]
              const res = request.replace('@/utils', path.relative(context, externalDirPath))

              return callback(null, `commonjs ${res}`)
            }

            callback()
          },
        ],
      })
    },
  },
}
```

#### 效果

```js title="taro-project/src/pages/index/index.js"
import { logSomething } from '@/utils/util'
logSomething()
```

```js title="webpack 打包结果"
{
  "./src/pages/index/index.jsx": (function(m, e, __webpack_require__) {
    var _utils_util = __webpack_require__("@/utils/util");
    // ...
  }),
  "@/utils/util": (function(module, exports) {
    // 成功 external
    module.exports = require("../../../utils/util");
  })
}
```

### Taro 项目引用原生项目的原生组件

有时我们需要在 Taro 项目中引用原生项目中的公共自定义组件。

和[引用原生项目的 js 文件](./taro-in-miniapp#引用原生项目的-js-文件)一样，我们希望在开发环境能正确解析组件路径，在生产环境则直接引用原生项目的组件而不是重复打包，可以使用 Taro 的 [alias](./config-detail#alias) 配置去实现。

#### 例子

假设以下项目结构：

    ├── miniapp                原生项目
    |   └── components
    |       └── title
    |           ├── index.js
    |           ├── index.wxml
    |           ├── index.wxss
    |           └── index.json
    └── taro-project           Taro 项目
        ├── config
        |   └── index.js
        └── src
            ├── components     小程序不支持引用根目录之外的组件，因此只能把原生项目的组件拷贝过来，让开发环境能正确解析组件
            |   └── title
            └── pages
                └── index      此页面中希望引用 miniapp/components/title

1. 把原生项目的组件拷贝到 Taro 项目，让开发环境能正确解析组件。
2. 根据开发环境和生产环境，正确配置 `alias`

```js title="config/index.js" {3,8,10}
const config = {
  alias: {
    '@/components':
      process.env.NODE_ENV === 'production'
        ? // 生产环境路径计算：
          // Webpack 编译发生在 taro-project 下，假设编译后的 taro-project/dist 会被移到到 miniapp/taro。
          // path.resolve(__dirname, '..') 为 taro-project。taro-project/dist 之于 taro-project，相当于 miniapp/taro 之于 miniapp。
          // 再根据 miniapp/components 与 miniapp 的相对路径，得出 path.resolve(__dirname, '../components')
          path.resolve(__dirname, '../components')
        : // 开发环境引用 taro-project/src 下的组件
          path.resolve(__dirname, '../src/components'),
  },
}
```

```js title="taro-project/src/pages/index/index.config.js" {3}
export default {
  usingComponents: {
    title: '@/components/title/index',
  },
}
```

### 对 Taro 项目的部分页面分包

在原生项目中直接配置 subPackages 指向 Taro 编译后的页面即可。

#### 依赖细分

Taro 默认会把页面共用的普通依赖打包为主包里的 `common.js`，node_modules 依赖打包为主包里的 `vendor.js`。

但是在分包时，我们会希望把**只有在分包中共用的依赖**打包到分包中，而不是打在主包的 `common.js` 和 `vendor.js` 中。这就需要我们对依赖进行细分。可以借助 Webpack 的 [splitChunk](https://webpack.js.org/plugins/split-chunks-plugin/) 和 Taro 的 [addChunkPages](./config-detail#miniaddchunkpages) 配置去实现。

#### 例子

假设以下项目结构：

    ├── dist
    |   |── common.js     公共依赖
    |   |── vendors.js    node_modules 依赖
    |   └── subPackages
    |       ├── foo
    |       ├── bar
    |       └── common.js 只有 subPackages 子包中使用的公共依赖
    └── src
        └── subPackages
            ├── foo
            └── bar

1. 使用 **Webpack splitChunks** 把只有 `subpackages` 子包独有的依赖打包到 `subpackages/common.js` 中。
2. 使用 **Taro addChunkPages** 配置，在子包中所有页面的头部添加对 `subpackages/common.js` 的引用。

```js title="config/index.js" {3-6,12-20}
const config = {
  mini: {
    addChunkPages(pages) {
      pages.set('subpackages/bar/index', ['subpackages/common']),
        pages.set('subpackages/foo/index', ['subpackages/common'])
    },
    webpackChain(chain) {
      chain.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              subpackagesCommon: {
                name: 'subpackages/common',
                minChunks: 2,
                test: (module, chunks) => {
                  const isNoOnlySubpackRequired = chunks.find((chunk) => !/\bsubpackages\b/.test(chunk.name))
                  return !isNoOnlySubpackRequired
                },
                priority: 200,
              },
            },
          },
        },
      })
    },
  },
}
```

## 把 Taro 项目作为一个完整分包

### 示例项目

[blended-apart](https://github.com/NervJS/taro/tree/next/examples/blended-apart)

### 使用方法

#### 1. 安装使用插件

安装插件 [@tarojs/plugin-indie](https://github.com/NervJS/taro-plugin-indie)

```bash
npm i @tarojs/plugin-indie --save-dev
```

使用插件

```js title="config/index.js"
const config = {
  plugins: ['@tarojs/plugin-indie'],
}
```

#### 2. 开发环境

2.1 推荐在 Taro 项目中进行开发调试，在生产环境下再把产物移动到原生小程序中进行预览。

```bash
# 和编译普通 Taro 项目一样
$ taro build --type [platform] --watch
```

2.2 小程序开发者工具导入 **Taro 项目**进行预览。

#### 3. 生产环境

3.1 编译项目时使用 `--blended` 参数以输出混合模式的代码。

```bash
# 以混合模式进行打包
$ taro build --type [platform] --blended
```

3.2 移动 Taro 项目的输出目录到原生项目内

也可以编写一个 **Taro 插件**自动移动，可以参考 [plugin-mv](https://github.com/NervJS/taro/blob/next/examples/blended-basic/taro-project/plugin-mv/index.js)。

3.3 设置原生项目的分包配置

### 把 Taro 项目拆分到多个分包

假设有一个 Taro 项目，它含有页面 A 和页面 B。我们需要把页面 A 加入原生项目的其中一个分包 M，把页面 B 加入到另一个分包 N。

为此，和普通打出**一个分包**不同的是，首先需要配置 Webpack 的 `output.jsonpFunction` 配置，避免 `chunkid` 的冲突。

```js title="config/index.js" {7}
config = {
  mini: {
    webpackChain(chain) {
      chain.merge({
        output: {
          // 可以配合 npm script 和环境变量来动态修改
          jsonpFunction: process.env.JSONP_NAME || 'webpackJsonp',
        },
      })
    },
  },
}
```

然后分别对 A、B 页面使用混合模式打包，步骤和[把 Taro 项目作为一个完整分包](./taro-in-miniapp#把-taro-项目作为一个完整分包)一致。

## 把 Taro 组件编译为原生自定义组件

:::info
Taro v3.1.2 开始支持使用 React 开发，Taro v3.5.6 开始支持使用 Vue3 开发。
:::

Taro 支持把组件编译为**原生小程序自定义组件**，供原生项目使用。

### 示例项目

- [blended-taro-component](https://github.com/NervJS/taro/tree/next/examples/blended-taro-component)
- [blended-taro-component-vue3](https://github.com/NervJS/taro/tree/next/examples/blended-taro-component-vue3)

### 使用方法

#### 1. 配置组件路径

修改 `app.config.js`，增加 `components` 配置，指向组件入口文件的路径：

```js title="app.config.js"
export default {
  // ...
  components: ['pages/index/index', 'components/picker/index'],
}
```

#### 2. 开始编译

使用 `taro build native-components` 命令，配合参数 `type`，即可编译出对应平台的自定义组件。

```bash
taro build native-components --type [platform] [--watch]
```

### props 传递

传递 props 给 Taro 编译出来的原生自定义组件时，需要统一通过 `props` 参数来传递：

```js title="page/index/index.js"
Page({
  data: {
    pickerProps: {
      mode: 'format',
      value: [0, 0, 0],
      onInitial(value, index) {
        console.log('onInitial')
      },
    },
  },
})
```

```xml title="page/index/index.wxml"
<!--index.wxml-->
<view>
  <picker props="{{pickerProps}}"></picker>
</view>
```

```jsx title="Taro 组件 - Picker"
function Picker ({ mode, value, onInitial }) {
  return (
    // ...
  )
}
```

### 小程序自定义组件对象实例

React 开发者可以通过 `props.$scope` 获取到小程序的自定义组件对象实例，而 Vue3 开发者可以通过 `props._scope` 获取。

使用某些小程序 API 时可能需要使用此实例，如获取视图层 DOM：

`Taro.createSelectorQuery().in(props.$scope)`

### 组件间通信与事件

支持使用两种方式进行组件间通信。

#### 使用小程序的 triggerEvent

和小程序原生自定义组件的[组件间通信与事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)一样，子组件使用 `triggerEvent` 发送事件。

```js title="子组件"
props.$scope.triggerEvent('myevent', myEventDetail, myEventOption)
```

#### 通过 props 传递事件回调

```js title="父组件"
Page({
  data: {
    childProps: {
      // props 里可以传递函数
      onMyEvent (value, index) {
        console.log(value, index)
      }
    }
  }
})
// 和普通 props 传递一样
<child props="{{childProps}}">
```

```js title="子组件"
props.onMyEvent(value, index)
```

### 组件配置

:::info
Taro v3.3.20 开始支持
:::

微信小程序的自定义组件支持配置 [styleIsolation](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)、[virtualHost](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E8%99%9A%E6%8B%9F%E5%8C%96%E7%BB%84%E4%BB%B6%E8%8A%82%E7%82%B9) 等特性。在 Taro 中可以通过修改组件的配置文件进行设置：

```js title="index.config.js"
export default {
  styleIsolation: 'isolated',
  virtualHost: true,
}
```

### 使用 Slot

:::info
Taro v3.5.7 开始支持
:::

组件可以使用 `<NativeSlot>` 作为小程序的 slot 节点。用法介绍：

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx title="Taro 组件"
import { View, NativeSlot } from '@tarojs/components'

export default function () {
  return (
    <View>
      <NativeSlot />
    </View>
  )
}
```

</TabItem>

<TabItem value="Vue">

```html title="Taro 组件"
<template>
  <view>
    <native-slot />
  </view>
</template>
```

</TabItem>
</Tabs>

```xml title="原生组件 - index.wxml"
<comp>
  <view>Slot Content</view>
</comp>
```

## 新混合模式
:::info
Taro v3.6.13 开始支持使用 React 开发。
:::

### 模式介绍
新的混合模式在项目打包过程中会同时处理 `Taro组件编译为原生自定义组件` 的任务，该模式适用于同时需要用到 `页面混合模式` 以及 `Taro组件编译为原生自定义组件` 的场景。

> 以往使用`taro build native-components` 命令编译的自定义组件会额外包含一套Taro运行时，而这个特性可以帮助你在编译原生自定义组件的同时与taro页面共享同一套运行时代码，避免了两套运行时导致包体增大的问题。通过这种优化，我们能够更加高效地使用混合模式，并减少包体积的增长。

### 示例项目
[new-blended](https://github.com/NervJS/taro/tree/next/examples/new-blended)

### 使用方法
#### 1. 以新混合模式进行项目打包

编译项目时使用 --new-blended 参数替代老的 --blended 以输出新混合模式的代码。
```bash
$ taro build --type [platform] --new-blended
```
#### 2. 把 Taro 组件编译为原生自定义组件(可选)

配置组件路径
修改 `app.config.js`，增加 `components` 配置，指向组件入口文件的路径：
```js title="app.config.js"
export default {
  // ...
  components: ['pages/index/index', 'components/picker/index'],
}
```

#### 3. 其他用法同 [普通混合模式](#基础混合用法).

### 注意事项
该特性已集成 `@tarojs/plugin-indie` 插件能力，不需要再启用该插件，即可把 Taro 项目作为一个完整分包使用。

---

## docs/wxcloudbase.md

---
title: 小程序云开发模板
---

> 自 `v1.2.20` 开始支持此功能，仅支持微信小程序

[云开发（CloudBase）](https://www.cloudbase.net?ADTAG=taro)是基于 Serverless 架构构建的一站式后端云服务，涵盖函数、数据库、存储、CDN 等服务，免后端运维，支持小程序、Web 和 APP 开发。
其中，小程序·云开发是微信和腾讯云联合推出的云端一体化解决方案，基于云开发可以免鉴权调用微信所有开放能力，在微信开发者工具中即可开通使用。

## 使用小程序云开发项目模板

在 1.2.20 版本中，新增了小程序云开发项目模板。如需使用，请将 CLI 更新至 `1.2.20` 以上版本。[更新](./GETTING-STARTED#更新)

## 模板目录结构

```conf
├── client                                  小程序端目录
│   ├── config                              配置目录
│   │   ├── dev.js                          开发时配置
│   │   ├── index.js                        默认配置
│   │   └── prod.js                         打包时配置
│   ├── dist                                编译结果目录
│   ├── package.json
│   ├── src                                 源码目录
│   │   ├── app.scss                        项目总通用样式
│   │   ├── app.js                          项目入口文件
│   │   ├── components                      组件文件目录
│   │   │   └── login                       login 组件目录
│   │   │       └── index.weapp.js          login 组件逻辑
│   │   └── pages                           页面文件目录
│   │       └── index                       index 页面目录
│   │           ├── index.scss              index 页面逻辑
│   │           └── index.js                index 页面样式
├── cloud                                   服务端目录
│   └── functions                           云函数目录
│       └── login                           login 云函数
│           ├── index.js                    login 函数逻辑
│           └── package.json
└── project.config.json                     小程序项目配置
```

### 使用要点

1. 开发时，进入 client 目录，在此目录下运行相关编译预览或打包命令
2. 使用微信开发者工具调试项目，请将项目 **整个文件夹** 作为运行目录。 注意： 不是 client 中生成的 dist 文件夹

---

