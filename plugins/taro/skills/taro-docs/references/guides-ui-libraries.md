## docs/component-style.md

---
title: 组件的外部样式和全局样式
---

自定义组件对应的样式文件，只对该组件内的节点生效。编写组件样式时，需要注意以下几点：

- 组件和引用组件的页面不能使用 id 选择器（`#a`）、属性选择器（`[a]`）和标签名选择器，请改用 class 选择器。
- 组件和引用组件的页面中使用后代选择器（`.a .b`）在一些极端情况下会有非预期的表现，如遇，请避免使用。
- 子元素选择器（`.a > .b`）只能用于 `View` 组件与其子节点之间，用于其他组件可能导致非预期的情况。
- **继承样式，如 `font` 、 `color` ，会从组件外（父组件）继承到组件内。但是引用组件时在组件节点上书写的 `className` 无效。** _（具体解决方案请参见下面的外部和全局样式介绍。）_
- 除继承样式外， `app.scss` 中的样式、组件所在页面的样式，均对自定义组件无效。

```css
/* 在组件中不能使用 */
#a {
}
/* 在组件中不能使用 */
[a] {
}
/* 在组件中不能使用 */
button {
}
/* 除非 .a 是 view 组件节点，否则不一定会生效 */
.a > .b {
}
```

除此以外，组件可以指定它所在节点的默认样式，使用 `:host` 选择器（需要包含基础库 [1.7.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 或更高版本的开发者工具支持）。

```css
/* 该自定义组件的默认样式 */
:host {
  color: yellow;
}
```

## 外部样式类

如果想传递样式给引用的自定义组件，以下写法（直接传递 `className`）**不可行**：

```jsx
/* CustomComp.js */
export default class CustomComp extends Component {
  static defaultProps = {
    className: '',
  }

  render() {
    return <View className={this.props.className}>这段文本的颜色不会由组件外的 class 决定</View>
  }
}
```

```jsx
/* MyPage.js */
export default class MyPage extends Component {
  render() {
    return <CustomComp className="red-text" />
  }
}
```

```scss
/* MyPage.scss */
.red-text {
  color: red;
}
```

取而代之的，需要利用 `externalClasses` 定义段定义若干个外部样式类。这个特性从小程序基础库版本 [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)  开始支持。

```jsx
/* CustomComp.js */
export default class CustomComp extends Component {
  static externalClasses = ['my-class']

  render() {
    return <View className="my-class">这段文本的颜色由组件外的 class 决定</View>
  }
}
```

```jsx
/* MyPage.js */
export default class MyPage extends Component {
  render() {
    return <CustomComp my-class="red-text" />
  }
}
```

```scss
/* MyPage.scss */
.red-text {
  color: red;
}
```

> 注意：`externalClasses` 需要使用 **短横线命名法 (kebab-case)**，而不是 React 惯用的 驼峰命名法 (camelCase)。否则无效。

## 全局样式类

使用外部样式类可以让组件使用指定的组件外样式类，如果希望组件外样式类能够完全影响组件内部，可以将组件构造器中的 `options.addGlobalClass` 字段置为 `true`。这个特性从小程序基础库版本 [2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)  开始支持。

```jsx
/* CustomComp.js */
export default class CustomComp extends Component {
  static options = {
    addGlobalClass: true,
  }

  render() {
    return <View className="red-text">这段文本的颜色由组件外的 class 决定</View>
  }
}
```

```scss
/* 组件外的样式定义 */
.red-text {
  color: red;
}
```

---

## docs/components-desc.mdx

---
title: 组件库说明
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Taro 以 [微信小程序组件库](https://developers.weixin.qq.com/miniprogram/dev/component/) 为标准，结合 `jsx` 语法规范，定制了一套自己的组件库规范。

基于以上原则，在小程序端，我们可以使用所有的小程序原生组件，而在其他端，我们提供了对应的组件库实现

- H5 端，`@tarojs/components`，同时也是需要引入的默认标准组件库

在使用时，React 中我们需要先从 Taro 标准组件库 `@tarojs/components` 引用组件，再进行使用，例如使用 `<View />`、 `<Text />` 组件，而 Vue 我们则无需引入

<Tabs
  defaultValue="React"
  values={[
    {label: 'React', value: 'React'},
    {label: 'Vue', value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class C extends Component {
  render() {
    return (
      <View className="c">
        <Text>c component</Text>
      </View>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view class="c">
    <text>c component</text>
  </view>
</template>
```

</TabItem>

</Tabs>

## 注意

在组件的详细文档中列出了组件在不同端的支持程度，以及基本的使用示例。 部分未列出示例的，标明仅在小程序端支持的组件的用法可以直接参考[小程序组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/)。

需要注意的是仍需遵循 Taro 的开发规范：

### 首字母大写与驼峰式命名

例如，使用 H5 端尚未支持的 map 组件

```jsx
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
// 引入 map 组件
import { Map } from '@tarojs/components'

class App extends Components {
  onTap() {}
  render() {
    return <Map onClick={this.onTap} />
  }
}
```

### 组件的事件传递都要以 on 开头

在微信小程序中 bind 开头这样的用法，都需要转成以 on 开头的形式。

---

## docs/css-in-js.mdx

---
title: 使用 CSS-in-JS
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

## linaria

在 React 社区有一个著名的 CSS-in-JS 解决方案: [styled-components](https://github.com/styled-components/styled-components)。但遗憾的是，`styled-components` 使用 `<style>` 标签来动态地控制样式，在小程序没有类似的方案。但我们可以通过 [linaria](https://github.com/callstack/linaria) 实现同样的功能，`linaria` 主要提供以下特性：

- 近似于 `styled-components` 的 API
- 完整的 TypeScript 支持
- 零运行时

使用 `linaria` 也非常简单，首先通过 NPM 安装依赖：

```bash
$ pnpm i @linaria/core @linaria/react @linaria/babel-preset @linaria/webpack-loader
```

其次配置项目根目录的 `babel.config.js`:

```js title="babel.config.js"
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
      },
    ],
    '@linaria', // 添加到 babel-preset
  ],
}
```

之后配置 `config/index.js`

```js title="config/index.js"
const config = {
  mini: {
    webpackChain(chain, webpack) {
      // linaria/loader 选项详见 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('@linaria/webpack-loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
    },
  },
  h5: {
    webpackChain(chain, webpack) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('@linaria/webpack-loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
    },
  },
}
```

最后在项目根目录新建 `linaria.config.js`

```js title="linaria.config.js"
// linaria 配置详见 https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options
module.exports = {
  rules: [
    {
      action: require('@linaria/shaker').default,
    },
    {
      test: /node_modules[\/\\](?!@tarojs)/,
      action: 'ignore',
    },
  ],
}
```

在业务代码中我们可以这样使用：

<Tabs
  defaultValue="JS"
  values={[
    {label: 'JavaScript', value: 'JS'},
    {label: 'TypeScript', value: 'TS'}
  ]}>
<TabItem value="JS">

```jsx
import { styled } from '@linaria/react'
import { View } from '@tarojs/components'
import React from 'react'

const Title = styled(View)`
  color: ${(props) => props.color};
`

const Index = () => {
  return <Title color="red">Hello World!</Title>
}

export default Index
```

</TabItem>

<TabItem value="TS">

```tsx
import { styled } from '@linaria/react'
import { View, ViewProps } from '@tarojs/components'

import React from 'react'
import './index.scss'

declare type Component<TProps> =
  | ((props: TProps) => any)
  | {
      new (props: TProps): any
    }

type VPS = ViewProps & { style?: React.CSSProperties }
type TP = VPS & { color: string }
const Title = styled<TP, VPS, Component<TP>>(View)`
  color: ${(props) => props.color};
`
const Index: React.FC = () => {
  return <Title color="red">Hello World!</Title>
}

export default Index
```

</TabItem>
</Tabs>

### 常见问题

- 使用 Linaria 设置组件样式后，该组件上的属性不生效，[#11664](https://github.com/NervJS/taro/issues/11664)
- `styled(View)` 写法会产生类型错误，[#8883](https://github.com/NervJS/taro/issues/8883)
- 与微信小程序直播插件 `live-player-plugin` 共用时报错，[#7389](https://github.com/NervJS/taro/issues/7389)

## Panda

[`pandacss`](https://panda-css.com/) 是个新兴的优秀 `CSS-in-JS` 编译时框架，相比 `linaria`，它的配置更加简单，智能提示好，开发者体验也更好。

而且它也吸收了许多 `tailwindcss` 的优点，我们可以自由的配置我们的主题与样式，且原子化的类名也更容易进行自由组合。

[`weapp-pandacss`](https://github.com/sonofmagic/weapp-pandacss) 就是让你在小程序开发中使用它。

### 快速开始

#### pandacss 安装和配置

##### 0. 安装和初始化 pandacss

首先我们需要把 `@pandacss/dev` 这些都安装和配置好，这里我们以 `tarojs` 项目为例：

```bash
npm install -D @pandacss/dev weapp-pandacss postcss # 或者 yarn / pnpm
npx panda init
```

此时会在当前目录生成一个 `panda.config.ts` 和一个包含大量文件的 `styled-system`。

> `panda.config.ts` 是 `pandacss` 的配置文件，`styled-system` 文件夹里的是 `pandacss` 的运行时 `js`。

把 `styled-system` 加入我们的 `.gitignore` 中去。

```diff
# .gitignore
+ styled-system
```

##### 1. 配置 postcss

接着在根目录里，添加一个 `postcss.config.cjs` 文件，写入以下代码注册 `pandacss`:

```js
module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {}
  }
}
```

##### 2. 检查你的 panda.config.ts

生成的配置文件大概长下面这样，尤其注意 `include` 是用来告诉 `pandacss` 从哪些文件中提取原子类的，所以这个配置一定要准确

```ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // 小程序不需要
  preflight: process.env.TARO_ENV === 'h5',
  // ⚠️这里，假如你使用 vue，记得把 vue 文件格式包括进来！！！
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {}
  },
  outdir: "styled-system",
})
```

##### 3. 修改 package.json 脚本

然后，我们添加下方 `prepare` 脚本在我们的 `package.json` 的 `scripts` 块中:

```diff
{
  "scripts": {
+    "prepare": "panda codegen",
  }
}
```

这样我们每次重新 `npm i/yarn/pnpm i` 的时候，都会执行这个方法，重新生成 `styled-system`，当然你也可以直接通过 `npm run prepare` 直接执行这个脚本。

##### 4. 全局 css 注册 pandacss

然后在我们的全局样式文件 `src/app.scss` 中注册 `pandacss`:

```css
@layer reset, base, tokens, recipes, utilities;
```

配置好了之后，此时 `pandacss` 在 `h5` 平台已经生效了，你可以 `npm run dev:h5` 在 `h5` 平台初步使用了，但是为了开发体验，我们还有一些优化项要做。

##### 5. 配置的优化与别名

来到根目录的 `tsconfig.json` 添加:

```diff
{
  "compilerOptions": {
    "paths": {
      "@/*": [
        "src/*"
      ],
+      "styled-system/*": [
+        "styled-system/*"
+      ]
    }
  },
  "include": [
    "./src",
    "./types",
    "./config",
+    "styled-system"
  ],
}
```

接着来到 `config/index.ts` 添加 `alias`([参考链接](./config-detail#alias)):

```ts
import path from 'path'

{
  alias: {
    'styled-system': path.resolve(__dirname, '..', 'styled-system')
  },
}
```

这样我们就不需要使用相对路径来使用 `pandacss` 了，同时 `ts` 智能提示也有了，你可以这样使用它:

```ts
import { View, Text } from "@tarojs/components";
import { css } from "styled-system/css";

const styles = css({
  bg: "yellow.200",
  rounded: "9999px",
  fontSize: "90px",
  p: "10px 15px",
  color: "pink.500",
});

export default function Index() {
  return (
    <View className={styles}>
      <Text>Hello world!</Text>
    </View>
  );
}
```

> 此部分参考的官方链接 <https://panda-css.com/docs/installation/postcss>

接下来进入 `weapp-pandacss` 的插件配置，不用担心，相比前面那些繁琐的步骤，这个可简单多了。

#### weapp-pandacss 配置

> 记得安装好 `weapp-pandacss` !

##### 0. 回到 postcss 进行注册

回到项目根目录的 `postcss.config.cjs` 注册 `weapp-pandacss`，添加以下配置:

```diff
module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {},
+   'weapp-pandacss/postcss': {}
  }
}
```

##### 1. 回到 package.json 添加生成脚本

然后去 `package.json` 你添加 `prepare` 脚本的地方，加点代码

```diff
{
  "scripts": {
-    "prepare": "panda codegen",
+    "prepare": "panda codegen && weapp-panda codegen",
  }
}
```

> 注意这里必须用 `&&` 而不能用 `&`，`&` 任务执行会并行不会等待，而 `&&` 会等待前一个执行完成再执行后一条命令

然后，你再手动执行一下

```bash
npm run prepare
```

来重新生成 `styled-system`, 此时你会发现 `pandacss` 的命令行输出中多了 `2` 行:

```diff
✔️ `src/styled-system/css`: the css function to author styles
✔️ `src/styled-system/tokens`: the css variables and js function to query your tokens
✔️ `src/styled-system/patterns`: functions to implement apply common layout patterns
✔️ `src/styled-system/jsx`: styled jsx elements for react
+ ✔️ `src/styled-system/weapp-panda`: the core escape function for weapp
+ ✔️ `src/styled-system/helpers.mjs`: inject escape function into helpers
```

这代表着小程序相关的转义逻辑已经被注入进去，此时 `panda css` 生成的类就兼容小程序平台啦，是不是很简单?

当然为了防止你配置失败，我也给出了参考项目: [taro-react-pandacss-template](https://github.com/sonofmagic/taro-react-pandacss-template) 方便进行排查纠错。

### 常见问题

#### 跨平台注意事项

你可能同时开发 `小程序` 和 `h5` 平台，但是你发现使用 `weapp-pandacss` 之后，`h5` 平台似乎就不行了？

这时候你可以这样配置：

`process.env.TARO_ENV === 'h5'` 的时候，不去加载 `weapp-pandacss/postcss` (根据环境变量动态加载 `postcss` 插件)

同时你也可以执行 `weapp-panda rollback` 把 `css` 方法进行回滚到最原始适配 `h5` 平台的状态。

当然你恢复到小程序版本也只需要执行 `weapp-panda codegen` 就会重新注入了。

#### 小程序预览事项

当小程序预览时会出现 `Error: 非法的文件，错误信息：invalid file: pages/index/index.js, 565:24, SyntaxError: Unexpected token . if (variants[key]?.[value])` 错误。

这是因为 `panda` 生成的文件 `cva.mjs` 使用了 [`Optional chaining (?.)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)语法，这个语法小程序原生不支持，这时候可以开启勾选 `将JS编译成ES5` 功能再进行预览，或者使用 `babel` 预先进行处理再上传预览。

### 高级配置文件

你可以通过 `npx weapp-panda init` 命令在当前目录下创建一个 `weapp-pandacss.config.ts` 配置文件。

这个配置文件可以用来控制转义代码的生成和一部分 `postcss` 插件的行为。

```ts
import { defineConfig } from 'weapp-pandacss'

export default defineConfig({
  postcss: {
    // 转义插件是否生效，这只能控制核心插件的生效情况,而核心插件只是一部分
    // 假如你想让整个插件真正不生效，请在 `postcss.config.cjs` 里进行动态加载判断
    disabled: false,
    // 数组merge默认行为是直接concat 合并，所以传一个空数组是使用的默认数组
    // 转义替换对象
    selectorReplacement: {
      root: [],
      universal: [],
      cascadeLayers: 'a'
    },
    removeNegationPseudoClass: true
  },
  // 生成上下文
  context: {
    // 转义注入判断条件，更改后需要重新生成代码
    escapePredicate: `process.env.TARO_ENV !== 'h5' && process.env.TARO_ENV !== 'rn'`,
    // 插件的 pandaConfig 寻找配置
    pandaConfig: {
      cwd: process.cwd(),
      file: 'path/to/your-panda-config-file'
    }
  }
})
```

当然，你更改相关的配置项之后，要重新执行一下 `npm run prepare` 来生成新的注入转义代码。

### 参考示例

[taro-react-pandacss-template](https://github.com/sonofmagic/taro-react-pandacss-template)

## Fower

社区还有另一个方案 **Fower**，[文档](https://fower.vercel.app/docs/use-with-taro)

---

## docs/css-modules.md

---
title: 使用 CSS Modules
---

## 用法

Taro 中内置了 [CSS Modules](https://github.com/css-modules/css-modules) 的支持，但默认是关闭的，如果需要开启使用，请先在[编译配置](./config-detail)中添加如下配置。

### 在小程序端开启

```js title="config/index.js"
weapp: {
  module: {
    postcss: {
      // css modules 功能开关与相关配置
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module，下文详细说明
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}
```

### 在 H5 端开启

```js title="config/index.js"
h5: {
  module: {
    postcss: {
      // css modules 功能开关与相关配置
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module，下文详细说明
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}
```

### 设置转换模式

> 推荐使用自定义转换模式，这样的话就不会影响到一些第三方库的样式了

在开启之后，你就可以在 Taro 中使用 CSS Modules 功能了，值得注意的是，Taro 中使用 CSS Modules 有两种模式，分别为**全局转换**及**部分自定义转换**模式，通过 `namingPattern` 配置进行控制

`namingPattern` 配置取值分别如下：

- `global`，表示全局转换，所有样式文件都会经过 CSS Modules 转换处理，除了文件名中包含 `.global.` 的样式文件
- `module`，表示自定义转换，只有文件名中包含 `.module.` 的样式文件会经过 CSS Modules 转换处理

`generateScopedName` 支持传入字符串和函数：

- `字符串`，其格式见：[https://github.com/webpack/loader-utils#interpolatename](https://github.com/webpack/loader-utils#interpolatename)，值得指出的是，可使用 `[local]` 取其原类名
- `函数`，其类型定义为 `(localName: string, absoluteFilePath: string) => string`，其中 `localName` 为原类名，`absoluteFilePath` 为文件的绝对路径，返回值将作为新的类名

### 用法示例

CSS Modules 使用方式如下：

```scss title="组件样式"
.test {
  color: red;
  .txt {
    font-size: 36px;
  }
}
```

```jsx title="组件 JS 中使用样式"
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

import styles from './Test.module.scss'

export default class Test extends Component {
  render() {
    return (
      <View className={styles.test}>
        <Text className={styles.txt}>Hello world!</Text>
      </View>
    )
  }
}
```

## 相关阅读

[开源插件 weapp-css-modules - 极致追求，让小程序代码包立减 10% 的插件](https://taro-club.jd.com/topic/2264/%E6%9E%81%E8%87%B4%E8%BF%BD%E6%B1%82-%E8%AE%A9%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BB%A3%E7%A0%81%E5%8C%85%E7%AB%8B%E5%87%8F-10-%E7%9A%84%E6%8F%92%E4%BB%B6-weapp-css-modules)

---

## docs/nutui.mdx

---
title: 使用 NutUI 京东风格组件库
---

[NutUI](https://nutui.jd.com/#/) 已发布 4.0 版本，新版本支持 CSS 动态主题、抽离独立的 Icon 包、更高效的按需引入，提供 80+ 高质量组件，覆盖移动端主流场景。

NutUI 4.0 从功能、组件、性能、官网四方面放入手，不断在组件库的丰富性、轻量化、易用性上进行改进，力求打造一款好用的移动端组件库，为开发者提效，为业务赋能，为开源贡献一份力量。

## 预览体验

<img
  src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png"
  width="150"
  alt="NutUI"
/>
<img
  src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg"
  width="150"
  alt="NutUI"
  style={{ marginLeft: '30px' }}
/>

&nbsp;

## 介绍

通过本文你可以掌握 NutUI 的安装和使用方法，操作简单易上手，开发简洁快速。

## 安装 Taro 脚手架

```bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# 使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

## 使用 NutUI 模板创建项目

#### 1、使用命令创建 Taro 项目：

```bash
taro init myApp
```

#### 2、按照下方图片依次选择，选择 Vue3 + NutUI4.0 模板

<img src="https://img14.360buyimg.com/imagetools/jfs/t1/201678/33/30837/74007/63bcd078F1954ad0f/3859610e4a9f2c0a.png" />

## 在 Taro 项目中使用 NutUI

#### 1、安装 NutUI

```
npm i @nutui/nutui-taro
```

#### 2、Taro 相关配置

安装 [@tarojs/plugin-html](./use-h5)

```bash
npm i @tarojs/plugin-html
```

在项目中配置

```javascript
// config/index.js
config = {
  // 开启 HTML 插件
  plugins: ['@tarojs/plugin-html'],
  // 配置全局 Scss 变量
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  },
  // 配置 NutUI 375 尺寸
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
}
```

#### 3、组件用法

**方法一、常规用法**

```javascript
// app.ts
import { createApp } from 'vue'
import { Button } from '@nutui/nutui-taro'
// 引入所有组件的样式文件
import '@nutui/nutui-taro/dist/style.css'

const App = createApp({
  onShow(options) {},
})
App.use(Button)
export default App
```

**方法二、自动按需引入**

安装 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

```bash
npm i unplugin-vue-components -D
```

在 `Taro` 中配置插件：

```javascript
// config/index.js
import ComponentsPlugin from 'unplugin-vue-components/webpack'

const NutUIResolver = () => {
  return (name) => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3)
      return {
        name: partialName,
        from: '@nutui/nutui-taro',
        sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`,
      }
    }
  }
}

const config = {
  // 小程序开发
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          resolvers: [NutUIResolver()],
        })
      )
    },
  },
  // Taro-H5 开发
  h5: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          resolvers: [NutUIResolver()],
        })
      )
    },
  },
}
```

配置完成后，可以直接在模板中使用 NutUI 组件，`unplugin-vue-components` 插件会自动注册对应的组件，并按需引入组件样式。

```html
# 直接使用
<template>
  <nut-button></nut-button>
</template>
```

```javascript
# 移除手动引入和注册的代码
// import { Button } from '@nutui/nutui-taro';
// app.use(Button);
```

## 注意事项

#### 1、按需引入插件升级

NutUI 4.0 移除了 `babel-plugin-import` 插件的使用，按需引入样式不再依赖于 `babel`，开发者可以选择其他效率更高的编译工具。同时，NutUI 适配了支持自动引入和注册组件的 `unplugin-vue-components` 插件，这将使 `Taro` 的开发体验有所提升。

#### 2、检查 Taro 是否安装成功

```bash
taro -v
```

出现 Taro 版本号说明安装成功。

#### 3、安装 Taro 过程中出现 Saas 相关错误

可以考虑安装 `mirror-config-china` 后重试。

```bash
npm install -g mirror-config-china
```

#### 4、在 webpack 下使用按需引入时组件没有类型提示

解决方案：`unplugin-vue-components` 插件会为引入的组件自动生成全局类型文件 `components.d.ts`，请保留该文件并在 `tsconfig.json` 中将它添加至 `include` 字段中。

```json
{
  "include": [
    ...
    "components.d.ts"
  ],
}
```

#### 5、技术栈使用

工程开发需使用 **taro 3.5 以上版本 + vue3**，示例仓库：[taro3-nutui](https://github.com/jdf2e/nutui-demo/tree/master/taro)。

---

## docs/tailwindcss.mdx

---
title: 使用 Tailwind CSS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`Tailwind CSS` 是目前世界上**最**流行的原子化 `CSS` 框架。它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样语义化的类名。我们开发者能直接在各种脚本标记语言中编写它们，并把它们组合起来，构建出任何的设计。

自从 `3.x` 大版本开始，`Tailwind CSS` 把引擎升级为 `Just in Time(jit)` 。这使得我们能够编写代码的同时，实时生成各种 `CSS`，真正的做到了所写即所得。比如我们能够编写 `pt-[19.5px]`, `text-[#123456]` ，`bg-[url('/img/hero-pattern.svg')]` 这样的语义化的类名，它们生成的 `CSS` 结果一目了然。

所以，熟悉 `Tailwind CSS` 之后，可以大幅度的加快我们应用的开发速度，提升代码的可维护性，接下来让我们看看如何在 `tarojs` 应用中使用它吧。

## 1. 安装与配置 tailwindcss

首先我们要把 `tailwindcss` 安装和配置好。这里我们参考 `tailwindcss` 官网中，`postcss` 的使用方式进行安装 ([参考链接](https://tailwindcss.com/docs/installation/using-postcss))：

### 1. 使用包管理器安装 `tailwindcss`

<Tabs>
  <TabItem label="npm" value="npm">

```bash
npm i -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
```

  </TabItem>
  <TabItem label="yarn" value="yarn">

```bash
yarn add -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
```

  </TabItem>
  <TabItem label="pnpm" value="pnpm">

```bash
pnpm i -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
```

  </TabItem>
</Tabs>

:::info
`tailwindcss` 最新版本(`3.x`)对应的 `postcss` 大版本为 `8`，其中 `tarojs` 里已经内置了 `postcss` 和 `autoprefixer` 了。
:::

### 2. 创建 `postcss.config.js` 并注册 `tailwindcss`

```js title="postcss.config.js"
// postcss 插件以 object 方式注册的话，是按照由上到下的顺序执行的
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. 配置 `tailwind.config.js`

`tailwind.config.js` 是 `tailwindcss` 的配置文件，我们可以在里面配置 `tailwindcss` 的各种行为。[全量配置项](https://tailwindcss.com/docs/configuration)

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里给出了一份 taro 通用示例，具体要根据你自己项目的目录结构进行配置
  // 比如你使用 vue3 项目，你就需要把 vue 这个格式也包括进来
  // 不在 content glob 表达式中包括的文件，在里面编写 tailwindcss class，是不会生成对应的 css 工具类的
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  // 其他配置项 ...
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
    preflight: false,
  },
}
```

### 4. 引入 `tailwindcss`

在你的项目入口文件里引入 `tailwindcss`，比如 `taro app` 的 `app.scss`

```scss title="app.scss"
@use 'tailwindcss/base' as *;
@use 'tailwindcss/components' as *;
@use 'tailwindcss/utilities' as *;
// 不使用 sass 就这么写
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
```

然后在 `app.ts` 里，引入这个样式文件即可。

这样 `tailwindcss` 的安装与配置就完成了，接下来让我们进入第二个环节：安装和配置 `weapp-tailwindcss`。


## 2. 安装和配置 `weapp-tailwindcss`

什么是 `weapp-tailwindcss` ? 它是一个让你在小程序环境中，使用 `tailwindcss` 大部分特性的一个 `webpack`, `vite`, `gulp`, `postcss` 插件集合。它支持目前上几乎所有主流的多端小程序框架和使用 `webpack` / `gulp` 的原生小程序开发打包方式。

`weapp-tailwindcss` 使得你很容易在各个框架，或原生开发中集成 `tailwindcss`。

执行下列命令安装插件:

<Tabs>
  <TabItem label="npm" value="npm">

```bash
npm i -D weapp-tailwindcss
```

  </TabItem>
  <TabItem label="yarn" value="yarn">

```bash
yarn add -D weapp-tailwindcss
```

  </TabItem>
  <TabItem label="pnpm" value="pnpm">

```bash
pnpm i -D weapp-tailwindcss
```

  </TabItem>
</Tabs>

然后把下列脚本，添加进你的 `package.json` 的 `scripts` 字段里:

```diff title="package.json"
"scripts": {
+ "postinstall": "weapp-tw patch"
}
```

添加这段脚本的用途是，每次安装包后，都会自动执行一遍 `weapp-tw patch` 这个脚本，给本地的 `tailwindcss` 打上小程序支持补丁。

### 配置你的 `tarojs` 应用

> 这个配置同时支持 `tarojs` 的 `react` / `preact` / `vue2` / `vue3` 等等所有框架

在项目的配置文件 `config/index.js` 中注册:

```js title="config/index.js"
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack')
// 文件是 ts 则为
// import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack'
{
  // 找到 mini 这个小程序配置
  mini: {
    webpackChain(chain, webpack) {
      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [{
              appType: 'taro',
              // 下面个配置，会开启 rem -> rpx 的转化
              rem2rpx: true
            }]
          }
        }
      })
    }
  }
}
```

`rem2rpx` 这个配置项，是用来开启 `CSS` `rem` -> `rpx` 单位的转化的，可以不传值来关闭这个转化行为。

传 `true` 时，`1rem` 转化为 `32rpx`。可通过传入配置进行修改，详见 [rem 转 rpx (或 px)](https://weapp-tw.icebreaker.top/docs/quick-start/rem2rpx)

:::tip
**在使用 Taro 时，需要把 `config/index` 的配置项中的 `compiler` 设置为插件对应的版本 **

如果使用 `webpack4` 则使用从 `weapp-tailwindcss/webpack4` 导出的 `UnifiedWebpackPluginV4`

如果使用 `webpack5` 则使用从 `weapp-tailwindcss/webpack` 导出的 `UnifiedWebpackPluginV5`

另外假如你使用了 [`taro-plugin-compiler-optimization`](https://www.npmjs.com/package/taro-plugin-compiler-optimization) 记得把它去除。因为和它一起使用时，它会使整个打包结果变得混乱。详见 [issues/123](https://github.com/sonofmagic/weapp-tailwindcss/issues/123) [issues/131](https://github.com/sonofmagic/weapp-tailwindcss/issues/131)
:::

## 大功告成

现在我们尝试写下`tsx`模板:

```tsx
<View className="text-[#acc855] text-[100px]">Hello world!</View>
```

然后执行 `npm run dev:weapp` 开启我们的 `Tailwind CSS` 之旅吧！

:::tip
如果配置不成功，可以参考配置好的模板项目 [taro-react-tailwind-vscode-template](https://github.com/sonofmagic/taro-react-tailwind-vscode-template) 进行排错。
:::

## 和 NutUI 一起使用

`tarojs` 使用 [NutUI](https://nutui.jd.com) 的注意点:

[NutUI](https://nutui.jd.com) 需要配合 `@tarojs/plugin-html` 一起使用，

然而在和 `@tarojs/plugin-html` 一起使用时，默认配置下它会移除整个 `tailwindcss` 注入的 `css var` 区域块，这会造成所有 `tw-*` 相关`CSS`变量找不到，导致样式大量挂掉的问题。

此时可以给插件传入 [`injectAdditionalCssVarScope`](https://weapp-tw.icebreaker.top/docs/api/interfaces/UserDefinedOptions#injectadditionalcssvarscope) 配置项，把它设为 `true`，这能让插件在 `CSS` 里重新注入 `tailwindcss css var` 区域块。

相关的 [taro 官方文档](./use-h5#%E6%8F%92%E4%BB%B6-postcss-%E9%85%8D%E7%BD%AE%E9%A1%B9), 讨论详情见 [issues/155](https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin/issues/155)

## 参考项目和文档链接

想了解更多场景和常见问题，可以参考下列链接:

`weapp-tailwindcss` \[[官网](https://weapp-tw.icebreaker.top/)\] \[[Github](https://github.com/sonofmagic/weapp-tailwindcss)\]

`tailwindcss` \[[官网](https://tailwindcss.com/)\] \[[Github](https://github.com/tailwindlabs/tailwindcss)\]

---

## docs/ui-lib.md

---
title: 基于 Taro 开发第三方多端 UI 库
---

> 通过 Taro 提供的多端 UI 库打包能力，可以打包出一个多端运行的 UI 库，目前已经支持 微信/支付宝/百度小程序以及 H5，RN 端的支持还在调研中，示例项目 [taro-ui-sample](https://github.com/NervJS/taro-ui-sample)

## 多端 UI 库项目结构

多端 UI 库的项目目录结构与普通 Taro 项目基本一致，不同点如下

#### 增加一个 UI 库入口文件

> RN 端 `index.js` 已经被占用，如果要兼容 RN 端，需改为其他名字，并通过 `--ui-index`指定入口文件。

需要在 `src` 目录下添加 `index.js` 或者 `index.ts` 来作为 UI 库的入口文件，用于输出 UI 组件，如果有多个 UI 组件，可以如下书写

```javascript
export { default as A } from './components/A/A'
export { default as B } from './components/B/B'
```

这样的话，这个组件库使用起来，会是如下的方式

```javascript
import { A } from 'taro-ui-sample'

export default function Demo {
  return <A />
}
```

如果只有 UI 组件，也可以如下书写

```javascript
import A from './components/A/A'

export default A
```

这样的话，这个组件库使用起来，会是如下的方式

```javascript
import A from 'taro-ui-sample'

export default function Demo {
  return <A />
}
```

#### 配置文件改造

为了打包出可以在 H5 端使用的组件库，需要在 `config/index.js` 文件中增加一些配置

```javascript
if (process.env.TARO_BUILD_TYPE === 'ui') {
  Object.assign(config.h5, {
    enableSourceMap: false,
    enableExtract: false,
    enableDll: false,
  })
  config.h5.webpackChain = (chain) => {
    chain.plugins.delete('htmlWebpackPlugin')
    chain.plugins.delete('addAssetHtmlWebpackPlugin')
    chain.merge({
      output: {
        path: path.join(process.cwd(), 'dist', 'h5'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'taro-ui-sample',
      },
      externals: {
        nervjs: 'commonjs2 nervjs',
        classnames: 'commonjs2 classnames',
        '@tarojs/components': 'commonjs2 @tarojs/components',
        '@tarojs/taro-h5': 'commonjs2 @tarojs/taro-h5',
        weui: 'commonjs2 weui',
      },
    })
  }
}
```

以上配置可以根据需要自行修改。

## 打包命令

在完成以上项目结构改造后，你就可以获得一个 Taro 的多端 UI 库的项目了

这时候你可以通过如下命令来进行打包

```bash
$ TARO_BUILD_TYPE=ui taro build --ui --ui-index=${CUSTOM_ENTRY}
```

只有当 UI 库入口文件非 `index.js` 时，才需要通过 `--ui-index`指定入口文件，其中 `CUSTOM_ENTRY` 为自定义的 UI 库入口文件。

打包之后的文件在 `dist` 目录下

里面会包含一个 `index.js` 的入口文件，内容如下，需要注意的是，这个内容是 Taro 自动生成的，不可修改

```javascript
if (process.env.TARO_ENV === 'h5') {
  module.exports = require('./h5/index')
  module.exports.default = module.exports
} else {
  module.exports = require('./weapp/index')
  module.exports.default = module.exports
}
```

H5 端以及小程序类（微信/支付宝/百度）的文件分别在 `h5` 和 `weapp` 目录下，通过入口文件就能在不同的端内进行引用

## 项目测试

推荐采用 [Jest](https://jestjs.io/) 进行测试，项目中已经包含了完整的测试配置与范例，可以直接使用，有以下值得注意的地方

#### 使用 babel-jest

转换器使用 `babel-jest`，为了配合 babel 7 进行使用，需要安装

```bash
$ yarn add --dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core
```

其中 `babel-core@^7.0.0-bridge.0` 一定要安装

#### babel.config.js

由于测试使用了 babel 7，为了避免和 Taro 本身使用的 babel 冲突，测试使用的 babel 配置位于 `babel.config.js` 中

---

## docs/vant.mdx

---
title: 使用 Vant Weapp
---

import { ReactIcon, VueIcon } from '@site/static/icons'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

Taro3 支持使用 [Vant Weapp](https://youzan.github.io/vant-weapp/#/intro) 组件库进行开发，示例仓库：[taro3-vant-sample](https://github.com/NervJS/taro3-vant-sample)。

> 注意：使用原生第三方组件库进行开发的项目，**不再具有多端转换的能力**。
>
> **[Taroify](https://github.com/mallfoundry/taroify)** 是移动端组件库 Vant 的 Taro 版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。
>
> 但是，如果你想使用 Vant Weapp 又想拥有多端转换的能力，强烈推荐 Vant Weapp 社区衍生库 **[@antmjs/vantui](https://github.com/AntmJS/vantui)**， 它是基于 Vant Weapp 开发的多端组件库，同时支持 Taro 和 React。拥有 Taro 多端转换的能力，同时和 Vant Weapp 的 UI 和 API 高度保持一致。

## 使用方法

### 配置忽略 vant 的样式尺寸转换

如果直接使用 vant 组件，会发现样式偏小的情况，这是因为 Taro 默认将 vant 的样式尺寸从 **px** 转换为了 **rpx**，可以通过配置 [selectorblacklist](/docs/size#selectorblacklist) 来禁止转换。

配置方法：

```js title="config/index.js"
const config = {
  // ...
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/],
        },
      },
    },
  },
}
```

### 配置 copy 小程序原生文件

vant 组件中包含一些小程序原生文件的依赖，目前 Taro 没有对这些依赖进行分析。因此需要配置 `copy` 把这些依赖移动到 `dist` 目录中，例如需要 copy `wxs` 和样式文件，部分配置如下

```js title="config/index.js"
const config = {
  // ...
  copy: {
    patterns: [
      { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
      { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
      {
        from: 'src/components/vant-weapp/dist/common/index.wxss',
        to: 'dist/components/vant-weapp/dist/common/index.wxss',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/index.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/index.wxs',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/utils.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/utils.wxs',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/calendar.wxml',
        to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml',
      },
      {
        from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs',
        to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs',
      },
    ],
    options: {},
  },
}
```

### 引用 vant 组件

首先需要在 **app 的 config** 或**页面的 config** 文件中配置 `usingComponents` 字段，如：

```js
export default {
  navigationBarTitleText: '首页',
  usingComponents: {
    'van-button': '../../components/vant-weapp/dist/button/index',
  },
}
```

然后在页面中便可以直接使用。

### 使用 vant 组件

#### 1. 绑定属性

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Index extends Component {
  render() {
    return (
      <View>
        <van-button type="primary" loading loading-text="ing">
          Button
        </van-button>
      </View>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view>
    <van-button type="primary" :loading="true" loading-text="ing">Button</van-button>
  </view>
</template>

<script>
  export default {
    name: 'index',
  }
</script>
```

</TabItem>
</Tabs>

> 注意：如果组件的某些属性在 vant 文档里写着带有默认值 `true`，在 Taro 中使用时仍然需要**显式设置为 true**。

#### 2. 绑定事件

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Index extends Component {
  handleClick = () => {
    console.log('click')
  }

  onAfterRead = (res) => {
    console.log(res)
  }

  render() {
    return (
      <View>
        // 对应 bind:click 事件
        <van-button type="primary" onClick={this.handleClick}>
          Button
        </van-button>
        // 对应 bind:after-read 事件
        <van-uploader fileList={[]} onAfterRead={this.onAfterRead} />
      </View>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view>
    <van-button type="primary" @click="handleClick">Button</van-button>
    <van-uploader :fileList="[]" @after-read="onAfterRead" />
  </view>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('click')
      },
      onAfterRead(res) {
        console.log(res)
      },
    },
  }
</script>
```

</TabItem>
</Tabs>

#### 3. Slot

<Tabs
  defaultValue="React"
  values={[
    {label: <ReactIcon />, value: 'React'},
    {label: <VueIcon />, value: 'Vue'}
  ]}>
<TabItem value="React">

```jsx
import React, { Component } from 'react'
import { View, Slot } from '@tarojs/components'

export default class Index extends Component {
  render() {
    return (
      <View>
        <van-calendar poppable show>
          <Slot name="title">
            <View>Hello world</View>
          </Slot>
        </van-calendar>
      </View>
    )
  }
}
```

</TabItem>

<TabItem value="Vue">

```html
<template>
  <view>
    <van-calendar :poppable="true" :show="true">
      <slot-view :name='"title"'>
        <view>Hello world</view>
      </slot-view>
    </van-calendar>
  </view>
</template>

<script>
  export default {
    name: 'index',
  }
</script>
```

</TabItem>
</Tabs>

### 处理 Vant 组件默认值失效的问题

> v1.0.2+ 开始支持，且需要 Taro v3.4.10+

在默认情况下，第三方自定义组件的属性会被编译为形如：`<van-empty image="{{i.image}}" />`。

这时自定义组件声明的默认值会失效（详情请浏览 [#11575](https://github.com/NervJS/taro/issues/11575)）。

```js
Component({
  props: {
    image: {
      type: String,
      value: 'default',
    },
  },
})
```

所以我们需要使用 [@tarojs/plugin-inject](https://github.com/NervJS/taro-plugin-inject/tree/v1.0.2#6-thirdpartycomponents) 为此属性增加默认值，把它编译为形如：`<van-empty image="{{i.image===undefined?'default':i.image}}" />`。

用法：

```js
const config = {
  plugins: [
    [
      '@tarojs/plugin-inject',
      {
        thirdPartyComponents: {
          // 为 `van-empty` 组件的 image 属性设置默认值 'default'
          'van-empty': {
            image: "'default'",
          },
        },
      },
    ],
  ],
}
```

## 常见问题

### Vue3

- [`readonly` 属性不生效](https://github.com/NervJS/taro/issues/10337#issuecomment-989641124)
- 传递函数类型的属性失败：[React 写法](https://github.com/NervJS/taro/issues/8495#issuecomment-1179526364)、[Vue3 写法](https://github.com/NervJS/taro/issues/10337#issuecomment-989834523)

---

