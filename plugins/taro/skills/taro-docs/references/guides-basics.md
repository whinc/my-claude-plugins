## docs/mdx/image-list.tsx

import o2logo from '@site/static/img/o2logo.png'
import React from 'react'
⋮----
interface IList {
  list?: IListItem[]
  height?: number
}
⋮----
interface IListItem {
  image?: string
  label?: string
}

---

## docs/best-practice.md

---
title: 最佳实践
---

## 关于 JSX 支持程度补充说明

由于 JSX 中的写法千变万化，我们不能支持到所有的 JSX 写法，同时由于微信小程序端的限制，也有部分 JSX 的优秀用法暂时不能得到很好地支持，特在此补充说明一下对于 JSX 的支持程度:

- [不能使用 Array#map 之外的方法操作 JSX 数组](https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/manipulate-jsx-as-array.md)
- [暂不支持在 render() 之外的方法定义 JSX](https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-jsx-in-class-method.md) (自 v1.3.0-beta.0 起支持)
- [不能在 JSX 参数中使用对象展开符](https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-spread-in-props.md) (自 v1.3.0-beta.0 起，自定义组件可以使用对象展开符，内置组件仍然需要分别单独传入参数)
- [不支持无状态组件](https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/no-stateless-function.md) (自 v1.3.0-beta.0 起支持)

以上的规则在 Taro 默认生成的模板都有 ESLint 检测，无需做任何配置。如果你的编辑器没有安装 ESLint 插件可以参考以下教程在你的编辑器安装：

- [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [IntelliJ IDEA(WebStorm 等 JetBrains 系)](https://www.jetbrains.com/help/idea/eslint.html)
- [Sublime Text](https://packagecontrol.io/packages/ESLint)

默认情况下 Taro 的编译器也会对无法运行的代码进行警告，当没有调用栈信息时代码是可以生成的。如果你需要在编译时禁用掉 ESLint 检查，可以在命令前加入 `ESLINT=false` 参数，例如：

```bash
$ ESLINT=false taro build --type weapp --watch
```

## 最佳编码方式

经过较长时间的探索与验证，目前 Taro 在微信小程序端是采用依托于小程序原生自定义组件系统来设计实现 Taro 组件化的，所以目前小程序端的组件化会受到小程序原生组件系统的限制，而同时为了实现以 React 方式编写代码的目标，Taro 本身做了一些编译时以及运行时的处理，这样也带来了一些值得注意的约束，所以有必要阐述一下 Taro 编码上的最佳实践。

### 组件样式说明

微信小程序的[自定义组件样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)默认是不能受外部样式影响的，例如在页面中引用了一个自定义组件，在页面样式中直接写自定义组件元素的样式是无法生效的。这一点，在 Taro 中也是一样，而这也是与大家认知的传统 Web 开发不太一样。

### 给组件设置 `defaultProps`

在微信小程序端的自定义组件中，只有在 `properties` 中指定的属性，才能从父组件传入并接收

```jsx
Component({
  properties: {
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
         // 属性被改变时执行的函数（可选），也可以写成在 methods 段中定义的方法名字符串, 如：'_propertyChange'
         // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    myProperty2: String // 简化的定义方式
  }
  ...
})
```

而在 Taro 中，对于在组件代码中使用到的来自 `props` 的属性，会在编译时被识别并加入到编译后的 `properties` 中，暂时支持到了以下写法

```jsx
this.props.property

const { property } = this.props

const property = this.props.property
```

但是一千个人心中有一千个哈姆雷特，不同人的代码写法肯定也不尽相同，所以 Taro 的编译肯定不能覆盖到所有的写法，而同时可能会有某一属性没有使用而是直接传递给子组件的情况，这种情况是编译时无论如何也处理不到的，这时候就需要大家在编码时给组件设置 [`defaultProps`](./apis/about/tarocomponent.md#defaultprops) 来解决了。

组件设置的 `defaultProps` 会在运行时用来弥补编译时处理不到的情况，里面所有的属性都会被设置到 `properties` 中初始化组件，正确设置 `defaultProps` 可以避免很多异常的情况的出现。

### 组件传递函数属性名以 `on` 开头

> 在 v1.3.0-beta.0 之后，自定义组件间的事件传递可以不用 `on` 开头，但内置组件的事件依然是以 `on` 开头的，为了一致性我们仍然推荐你以 `on` 开头命名你的事件。

在 Taro 中，父组件要往子组件传递函数，属性名必须以 `on` 开头

```jsx
// 调用 Custom 组件，传入 handleEvent 函数，属性名为 onTrigger
class Parent extends Component {
  handleEvent() {}

  render() {
    return <Custom onTrigger={this.handleEvent}></Custom>
  }
}
```

这是因为，微信小程序端组件化是不能直接传递函数类型给子组件的，在 Taro 中是借助组件的[事件机制](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)来实现这一特性，而小程序中传入事件的时候属性名写法为 `bindmyevent` 或者 `bind:myevent`

```xml
<!-- 当自定义组件触发 myevent 事件时，调用 onMyEvent 方法 -->
<component-tag-name bindmyevent="onMyEvent" />
<!-- 或者可以写成 -->
<component-tag-name bind:myevent="onMyEvent" />
```

所以 Taro 中约定组件传递函数属性名以 `on` 开头，同时这也和内置组件的事件绑定写法保持一致了。

### 小程序端不要在组件中打印传入的函数

> 自 v1.3.0-beta.0 没有这条限制

前面已经提到小程序端的组件传入函数的原理，所以在小程序端不要在组件中打印传入的函数，因为拿不到结果，但是 `this.props.onXxx && this.props.onXxx()` 这种判断函数是否传入来进行调用的写法是完全支持的。

### 小程序端不要将在模板中用到的数据设置为 `undefined`

由于小程序不支持将 data 中任何一项的 value 设为 `undefined` ，在 setState 的时候也请避免这么用。你可以使用 null 来替代。

### 小程序端不要在组件中打印 `this.props.children`

在微信小程序端是通过 `<slot />` 来实现往自定义组件中传入元素的，而 Taro 利用 `this.props.children` 在编译时实现了这一功能， `this.props.children` 会直接被编译成 `<slot />` 标签，所以它在小程序端属于语法糖的存在，请不要在组件中打印它。

### 支持 props 传入 JSX

> 自 `1.1.9` 开始支持

支持 props 传入 JSX，但是元素传入 JSX 的属性名必须以 `render` 开头

例如，子组件写法

```javascript
class Dialog extends Component {
  render() {
    return (
      <View className="dialog">
        <View className="header">{this.props.renderHeader}</View>
        <View className="body">{this.props.children}</View>
        <View className="footer">{this.props.renderFooter}</View>
      </View>
    )
  }
}
```

父组件调用子组件是传入 JSX

```javascript
class App extends Component {
  render() {
    return (
      <View className="container">
        <Dialog
          renderHeader={<View className="welcome-message">Welcome!</View>}
          renderFooter={<Button className="close">Close</Button>}
        >
          <View className="dialog-message">Thank you for using Taro.</View>
        </Dialog>
      </View>
    )
  }
}
```

### 组件属性传递注意

不要以 `id`、`class`、`style` 作为自定义组件的属性与内部 state 的名称，因为这些属性名在微信小程序小程序中会丢失。

### 组件 `state` 与 `props` 里字段重名的问题

不要在 `state` 与 `props` 上用同名的字段，因为这些字段在微信小程序中都会挂在 `data` 上。

### 小程序中页面生命周期 `componentWillMount` 不一致问题

由于微信小程序里页面在 `onLoad` 时才能拿到页面的路由参数，而页面 onLoad 前组件都已经 `attached` 了。因此页面的 `componentWillMount` 可能会与预期不太一致。例如：

```jsx
// 错误写法
render () {
  // 在 willMount 之前无法拿到路由参数
  const abc = this.$router.params.abc
  return <Custom adc={abc} />
}

// 正确写法
componentWillMount () {
  const abc = this.$router.params.abc
  this.setState({
    abc
  })
}
render () {
  // 增加一个兼容判断
  return this.state.abc && <Custom adc={abc} />
}
```

对于不需要等到页面 willMount 之后取路由参数的页面则没有任何影响。

### 组件的 `constructor` 与 `render` 提前调用

很多细心的开发者应该已经注意到了，在 Taro 编译到小程序端后，组件的 `constructor` 与 `render` 默认会多调用一次，表现得与 React 不太一致。

这是因为，Taro 的组件编译后就是小程序的自定义组件，而小程序的自定义组件的初始化时是可以指定 `data` 来让组件拥有初始化数据的。开发者一般会在组件的 `constructor` 中设置一些初始化的 `state`，同时也可能会在 `render` 中处理 `state` 与 `props` 产生新的数据，在 Taro 中多出的这一次提前调用，就是为了收集组件的初始化数据，给自定义组件提前生成 `data` ，以保证组件初始化时能带有数据，让组件初次渲染正常。

所以，在编码时，需要在处理数据的时候做一些容错处理，这样可以避免在 `constructor` 与 `render` 提前调用时出现由于没有数据导致出错的情况。

### JS 编码必须用单引号

在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误。

### 环境变量 `process.env` 的使用

不要以解构的方式来获取通过 `env` 配置的 `process.env` 环境变量，请直接以完整书写的方式 `process.env.NODE_ENV` 来进行使用

```jsx
// 错误写法，不支持
const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
  ...
}

// 正确写法
if (process.env.NODE_ENV === 'development') {

}
```

### 使用 `this.$componentType` 来判断当前 Taro.Component 是页面还是组件

`this.$componentType` 可能取值分别为 `PAGE` 和 `COMPONENT`，开发者可以根据此变量的取值分别采取不同逻辑。

### 原生小程序组件传递 props 给 Taro 组件

**Taro v1.3+** 对 props 系统进行了改造，使得不能兼容原生组件通过 properties 传入的属性。

目前可以通过把所有需要传入 Taro 组件的 props，通过借助 `extraProps` 属性来解决。

```js
// 小程序组件常规 props 传递
<plugin title="{{name}}" desc="{{desc}}" bindonclick="onClick"></plugin>

// 原生小程序组件调用 Taro 组件时需要改造成以下形式：
this.setData({
  extraProps: {
    name,
    desc,
    onClick: this.onClick
  }
})
<plugin extraProps="{{extraProps}}" ></plugin>
```

## 全局变量

在 Taro 中推荐使用 `Redux` 来进行全局变量的管理，但是对于一些小型的应用， `Redux` 就可能显得比较重了，这时候如果想使用全局变量，推荐如下使用。

新增一个自行命名的 `JS` 文件，例如 `global_data.js`，示例代码如下

```jsx
const globalData = {}

export function set(key, val) {
  globalData[key] = val
}

export function get(key) {
  return globalData[key]
}
```

随后就可以在任意位置进行使用啦

```jsx
import { set as setGlobalData, get as getGlobalData } from './path/name/global_data'

setGlobalData('test', 1)

getGlobalData('test')
```

---

## docs/children.md

---
title: Children 与组合
---

> 经测试，由于微信小程序的 `<slot />` 无法在循环中使用，因此 Children 和组合在微信小程序中也无法在循环中使用。百度小程序、支付宝小程序、H5、React Native 都可以在循环中使用此功能。

## Children

在我们设计组件时，有些组件通常不知道自己的子组件会有什么内容，例如 `Sidebar` 和 `Dialog` 这样的容器组件。

我们建议在这样的情况使用 `this.props.children` 来传递子元素：

```jsx
class Dialog extends Component {
  render() {
    return (
      <View className="dialog">
        <View className="header">Welcome!</View>
        <View className="body">{this.props.children}</View>
        <View className="footer">-- divider --</View>
      </View>
    )
  }
}
```

这样就能允许其它组件在 JSX 中嵌套任意子组件传递给 `Dialog`:

```jsx
class App extends Component {
  render() {
    return (
      <View className="container">
        <Dialog>
          <View className="dialog-message">Thank you for using Taro.</View>
        </Dialog>
      </View>
    )
  }
}
```

在 `<Dialog />` JSX 标签内的任何内容都会作为它的子元素(Children)都会传递到它的组件。

### 注意事项

**请不要对 `this.props.children` 进行任何操作**。Taro 在小程序中实现这个功能使用的是小程序的 [`slot`](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html) 功能，也就是说你可以把 `this.props.children` 理解为 `slot` 的语法糖，`this.props.children` 在 Taro 中并不是 React 的 `ReactElement` 对象，因此形如 `this.props.children && this.props.children`、`this.props.children[0]` 在 Taro 中都是非法的。

**`this.props.children` 无法用 `defaultProps` 设置默认内容**。由于小程序的限制，Taro 也无法知道组件的消费者是否传入内容，所以无法应用默认内容。

**不能把 `this.props.children` 分解为变量再使用**。由于普通的 `props` 有一个确切的值，所以当你把它们分解为变量运行时可以处理，`this.props.children` 则不能这样操作，你必须显性地把 `this.props.children` 全部都写完整才能实现它的功能。

## 组合

> 自 `1.1.9` 开始支持

有些情况你不仅仅需要只传递一个子组件，可能会需要很多个「占位符」。例如在这个 `Dialog` 组件中，你不仅需要自定义它的 `body`，你希望它的 `header` 和 `footer` 都是给 `Dialog` 组件的使用者自由定制。这种情况可以这样做：

```jsx
class Dialog extends Component {
  render() {
    return (
      <View className="dialog">
        <View className="header">{this.props.renderHeader}</View>
        <View className="body">{this.props.children}</View>
        <View className="footer">{this.props.renderFooter}</View>
      </View>
    )
  }
}

class App extends Component {
  render() {
    return (
      <View className="container">
        <Dialog
          renderHeader={<View className="welcome-message">Welcome!</View>}
          renderFooter={<Button className="close">Close</Button>}
        >
          <View className="dialog-message">Thank you for using Taro.</View>
        </Dialog>
      </View>
    )
  }
}
```

在我们声明 `Dialog` 组件时，`header` 和 `footer` 部分我们分别增加了 `this.props.renderHeader` 和 `this.props.renderFooter` 作为占位符。相应地，我们在使用 `Dialog` 组件时，就可以给 `renderHeader` 和 `renderFooter` 传入 JSX 元素，这两个分别传入的 JSX 元素将会填充它们在 `Dialog` 组件中的位置——就像在 `Dialog` JSX 标签里写入的内容，会填充到 `this.props.children` 的位置一样。

### 注意事项

**组件的组合需要遵守 `this.props.children` 的所有规则**。组合这个功能和 `this.props.children` 一样是通过 `slot` 实现的，也就是说 `this.props.children` 的限制对于组件组合也都同样适用。

**所有组合都必须用 `render` 开头，且遵守驼峰式命名法**。和我们的事件规范以 `on` 开头一样，组件组合使用 `render` 开头。

**组合只能传入单个 JSX 元素，不能传入其它任何类型**。当你需要进行一些条件判断或复杂逻辑操作的时候，可以使用一个 `Block` 元素包裹住，然后在 `Block` 元素的里面填充其它复杂的逻辑。

---

## docs/cli.md

---
title: CLI 命令
---

常用的 Taro CLI 命令。

### 查看 Taro 所有命令及帮助

```bash
$ taro --help
```

### 环境及依赖检测

Taro 提供了命令来一键检测 Taro 环境及依赖的版本等信息，方便大家查看项目的环境及依赖，排查环境问题。在提 issue 的时候，请附上 `taro info` 打印的信息，帮助开发人员快速定位问题。

```bash
$ taro info
👽 Taro v3.0.7



  Taro CLI 3.0.7 environment info:
    System:
      OS: macOS High Sierra 10.13.6
      Shell: 5.3 - /bin/zsh
    Binaries:
      Node: 13.14.0 - ~/.nvm/versions/node/v13.14.0/bin/node
      Yarn: 1.22.4 - ~/.nvm/versions/node/v13.14.0/bin/yarn
      npm: 6.14.4 - ~/.nvm/versions/node/v13.14.0/bin/npm
    npmPackages:
      @tarojs/components: 1.3.27 => 1.3.27
      @tarojs/router: 1.3.27 => 1.3.27
      @tarojs/taro: 1.3.27 => 1.3.27
      @tarojs/taro-h5: 1.3.27 => 1.3.27
      @tarojs/webpack-runner: 1.3.27 => 1.3.27
      eslint-config-taro: 1.3.27 => 1.3.27
      eslint-plugin-taro: 1.3.27 => 1.3.27
      nerv-devtools: 1.5.5 => 1.5.5
      nervjs: 1.5.5 => 1.5.5

```

### Taro Doctor

Taro Doctor 就像一个医生一样，可以诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案。

但和真正的医生不一样，Taro Doctor 不需要排队挂号，也不用花钱。你只需要在终端运行命令：`taro doctor`，就像图里一样：

![Taro Doctor 诊断结果图](https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png)

### 快速创建新页面

Taro create --name [页面名称] --dir [路径] --subpkg [分包路径]  能够在当前项目的指定目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器。

> taro 会尝试同步修改 `app.config.js` 配置文件中的 `pages` 或者 `subPackages` 字段。

#### 例子
假设当前当前跟路径为 `/project/root`。

执行下面命令创建主包页面：
```bash
taro create newPage --dir pages/mydir
```
那么会在 `/project/root/src/pages/mydir` 目录下生成新的页面，并且在 `app.config.js` 中自动补齐 `pages` 字段。

执行下面命令创建分包页面：
```bash
taro create newPage --subpkg mysubpages
```
那么会在 `/project/root/src/mysubpages` 目录下生成新的页面，并且在 `app.config.js` 中自动补齐 `subPackages` 字段。

### 快速创建插件模版

参考 [插件编写](./plugin-custom.md)

### CLI 配置

Taro 会在用户根目录下创建 .taro 文件夹，其中 .taro/index.json 用于存放 CLI 相关配置。

开发者可以使用 `taro config` 命令对配置项进行一系列操作：

```bash
# 查看用法
$ taro config --help
# 设置配置项<key>的值为<value>
$ taro config set <key> <value>
# 读取配置项<key>
$ taro config get <key>
# 删除配置项<key>
$ taro config delete <key>
# 打印所有配置项
$ taro config list [--json]
```

### 全局插件或插件集配置

Taro 会在用户根目录下创建 .taro-global-config 文件夹，用于在执行 CLI 阶段时，如果没有获取到项目的配置文件，可以从该文件夹下读取全局的配置。

目前开发了 插件（plugins）和 插件集（presets）这两个可配置项。
有了这一配置，Taro 将支持在没有项目配置文件时，去执行一些插件。这些插件大部分是一些自定义命令类型的插件。

开发者可以使用 `taro global-config` 命令对配置项进行一系列操作：

```bash
# 查看用法
$ taro global-config --help
# 添加全局插件
$ taro global-config add-plugin [pluginName]
# 删除全局插件
$ taro global-config remove-plugin [pluginName]
# 添加全局插件集
$ taro global-config add-preset [presetName]
# 删除全局插件集
$ taro global-config remove-preset [presetName]
# 重置 .taro-global-config 文件夹
$ taro global-config reset
```

举个例子，比如有一些自定义的模版源，如果直接执行 `taro init` 命令，在每次初始化时都得传入大量的参数才得以完成项目的初始化构建。这时候开发者可以自行开发一个自定义的初始化插件，如下：

```typescript
const TEMPLATE_SOURCE = 'your template source'
export default (ctx: IPluginContext) => {
  ctx.registerCommand({
    // 命令名
    name: 'custom-init',
    optionsMap: {
      '--name': '项目名称',
      '--description': '项目描述',
    },
    // 执行 taro custom-init --help 时输出的使用例子的信息
    synopsisList: ['taro custom-init <projectName> --description <description>'],
    // 命令钩子
    async fn() {
      const name = ctx?.runOpts?._[1] || ctx?._.name
      const description = ctx?.runOpts?.options?.description
      //使用 taro cli 内部命令插件已通过此方法暴露出来
      ctx.applyCliCommandPlugin(['init'])
      ctx.applyPlugins({
        name: 'init',
        opts: {
          options: {
            typescript: true,
            templateSource: TEMPLATE_SOURCE,
            css: 'none',
            framework: 'react',
            compiler: 'webpack5',
            description: description,
            projectName: name,
          },
        },
      })
    },
  })
}
```

之后，可以把该插件作为全局插件安装，假设该插件名为 taro-custom-init，运行：

```bash
$ taro global-config add-plugin taro-custom-init
```

之后只需要运行以下命令，即可完成你的自定义 Taro 项目了：

```bash
$ taro custom-init <projectName> --description <description>
```

---

## docs/codebase-overview.md

---
title: Taro 仓库概览
---

## 仓库组成

以下列表介绍了 Taro 由哪些 NPM 包所组成，以及每个包的功能。

### 基础

| 路径                     | 描述                                              |
| ------------------------ | :------------------------------------------------ |
| `@tarojs/cli`            | CLI 工具                                          |
| `@tarojs/service`        | 插件化内核                                        |
| `@tarojs/taro-loader`    | Webpack loaders                                   |
| `@tarojs/helper`         | 工具库，主要供 CLI、编译时使用                    |
| `@tarojs/runner-utils`   | 工具库，主要供小程序、H5 的编译工具使用           |
| `@tarojs/shared`         | 工具库，主要供运行时使用                          |
| `@tarojs/taro`           | 暴露各端所需要的 Taro 对象                        |
| `@tarojs/api`            | 和各端相关的 Taro API                             |
| `babel-preset-taro`      | Babel preset                                      |
| `eslint-config-taro`     | ESLint 规则                                       |
| `postcss-pxtransform`    | PostCSS 插件，转换 `px` 为各端的自适应尺寸单位    |
| `postcss-html-transform` | PostCSS 插件，用于 HTML、小程序标签的类名相互转换 |

### 小程序

| 路径                             | 描述                                              |
| -------------------------------- | :------------------------------------------------ |
| `@tarojs/mini-runner`            | 小程序编译工具，主要用于设置、调用 Webpack        |
| `@tarojs/react`                  | 基于 `react-reconciler` 的小程序专用 React 渲染器 |
| `@tarojs/runtime`                | 小程序运行时适配器核心                            |
| `@tarojs/plugin-platform-weapp`  | 微信小程序插件                                    |
| `@tarojs/plugin-platform-alipay` | 支付宝小程序插件                                  |
| `@tarojs/plugin-platform-swan`   | 百度小程序插件                                    |
| `@tarojs/plugin-platform-tt`     | 抖音小程序插件                                    |
| `@tarojs/plugin-platform-qq`     | qq 小程序插件                                     |
| `@tarojs/plugin-platform-jd`     | 京东小程序插件                                    |
| `@tarojs/plugin-html`            | 支持使用 HTML 标签的插件                          |
| `@tarojs/plugin-react-devtools`  | 支持使用 React DevTools 的插件                    |
| `@tarojs/extend`                 | 类似 jQuery 的库                                  |

### H5

| 路径                             | 描述                                     |
| -------------------------------- | :--------------------------------------- |
| `@tarojs/webpack-runner`         | H5 编译工具，主要用于设置、调用 Webpack  |
| `@tarojs/router`                 | H5 路由                                  |
| `@tarojs/taro-h5`                | H5 端根据微信小程序规范实现的 API        |
| `@tarojs/components`             | H5 组件库（Web Components 版本）         |
| `@tarojs/components-react`       | H5 组件库（React 版本）                  |
| `babel-plugin-transform-taroapi` | Babel 插件，让 API 可以被 `tree-shaking` |
| `postcss-plugin-constparse`      | PostCSS 插件，用于处理 `tabbar` 的高度   |

### RN

| 路径                                                | 描述                                                                 |
| --------------------------------------------------- | :------------------------------------------------------------------- |
| `@tarojs/components-rn`                             | RN 组件库                                                            |
| `@tarojs/rn-runner`                                 | RN 编译工具，主要用于设置、调用 metro                                |
| `@tarojs/rn-style-transformer`                      | RN 样式转换工具，让 RN 支持 sass、less、stylus、postcss              |
| `@tarojs/rn-supporter`                              | RN 基础 metro 配置                                                   |
| `@tarojs/rn-transformer`                            | RN 应用入口及页面转换工具，让 RN 支持 Taro 定义的 app 及 page config |
| `@tarojs/router-rn`                                 | RN 路由                                                              |
| `@tarojs/runtime-rn`                                | RN 运行时封装                                                        |
| `@tarojs/taro-rn`                                   | RN 端根据微信小程序规范实现的 API                                    |
| `babel-plugin-transform-react-jsx-to-rn-stylesheet` | Babel 插件，让 jsx 支持 className 属性                               |
| `taro-css-to-react-native`                          | 将 css 转为 RN 的 stylesheet                                         |

### 其它

| 路径                 | 描述                         |
| -------------------- | :--------------------------- |
| `@tarojs/taroize`    | 小程序转 Taro 的编译器       |
| `@tarojs/with-weapp` | 小程序转 Taro 的运行时适配器 |

---

## docs/communicate.mdx

---
title: 沟通与反馈
---

import ImageList from './mdx/image-list'

## 开发交流

选择下列对应的群，使用微信扫码添加，会收到入群二维码，再扫群码添加即可。

<ImageList
  height={148}
  list={[
    {
      image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_qr.png',
      label: 'Taro',
    },
    {
      image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_vue_qr.png',
      label: 'Taro Vue',
    },
    {
      image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_rn_qr.png',
      label: 'Taro RN',
    },
    {
      image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_harmony_qr.png',
      label: 'Taro x Harmony',
    },
    {
      image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_lark_qr.png',
      label: 'Taro Lark',
    },
    {
      image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_nutui_qr.png',
      label: 'Taro x NutUI',
    },
  ]}
/>

## 问题反馈与建议

遇到 Bug 请[给 Taro 提 ISSUE](https://nervjs.github.io/taro-issue-helper/)。

有疑问或想法请到 [Github Discussion](https://github.com/NervJS/taro/discussions) 讨论。

## 社区共享

### 论坛

[Taro 交流社区——让每一次交流都被沉淀](https://taro-club.jd.com/)

你可以在交流社区里提问、讨论、吐槽。

### 物料市场

[Taro 物料市场——让每一个轮子产生价值](https://taro-ext.jd.com/)

你可以在物料市场里找到一些开源的模板、组件和项目，也欢迎你分享你的成果。

## 加入共建

### 加入 Taro 社区共建

[Taro 邀你加入社区共建](https://github.com/NervJS/taro/issues/4714)

### 为 Taro 贡献代码

Taro 非常欢迎社区开发者为 Taro 贡献代码，在贡献之前请先阅读[贡献指南](/docs/CONTRIBUTING)。

如果你想为 Taro 实现一个重要功能，需要先撰写 RFC 文档，按照 Taro 的 [RFC 机制](https://github.com/NervJS/taro-rfcs)进行操作，在经过社区讨论完善后才可以进行代码的提交。

---

## docs/complier-mode.mdx

---
title: 半编译模式
---

:::info
Taro v3.6.23 开始支持，目前只支持 **React**，暂不支持 Vue。底层实现原理请参考 [RFC 文档](https://github.com/NervJS/taro/discussions/14708)。
:::

在节点数量增多到一定量级时，Taro3 的渲染性能会大幅下降，出现白屏时间长、交互延时等问题。经排查发现是目前 Taro 的 `<template>` 模板语法所造成的，为此我们参考 Taro 1/2 的思路，提供了 **CompileMode** 渲染模式。`CompileMode` 适合长列表 Item 这类会被重复渲染多次的组件使用，在长列表场景能提升 **30%** 以上的首开速度，同时能有效减少节点过多时产生的交互延时问题。CompileMode 可以说是应对复杂页面性能优化的“银弹”。

## 使用方法

首先在 Taro 编译配置中开启使用半编译模式：

```js title="config/index.js"
const config = {
  mini: {
    experimental: {
      compileMode: true
    }
  }
  // ...
}
```

然后只需要给 Taro 基础组件添加 `compileMode` 属性，该组件及其 children 将会被编译为单独的小程序模板：

```jsx
function GoodsItem () {
  return (
    <View compileMode>
      ...
    </View>
  )
}
```

更为详细的用法请看 [详细用法](#详细用法)

## 常见问题

### 1. 编译出的模板文件会增加包体积

半编译模式使用了空间来换时间，编译出模板会令包体积增大。增加的文件大小视 JSX 写法而定，可以在编译后的页面目录下找到对应的模板文件，如 `pages/index/index.jsx` 编译出的模板位置在 `dist/pages/index/index-templates.wxml`。因此开发者应权衡后使用。

### 2. 只能优化部分语法

编译阶段只能识别、优化部分语法，不支持的语法会自动回退到 Taro3 默认的渲染模式，具体支持的语法可以查阅 [RFC 文档](https://github.com/NervJS/taro/discussions/14708)。

有一种常见语法需要注意：编译阶段只能识别 Taro 基础组件，而 React、Vue 组件的渲染会自动回退到旧的渲染模式。如果这些 React、Vue 组件也需要使用半编译模式，需要在组件内部再次添加 `compileMode` 属性：

```jsx
function Index () {
  return (
    <View compileMode>
      <Text>Hello</Text> {/* 能被编译阶段识别 */}
      <Foo /> {/*会自动回退到 Taro3 默认的渲染模式*/}
    </View>
  )
}

function Foo () {
  return (
    // 如果希望 Foo 组件也使用半编译模式，需要在 Foo 组件内部再次添加 compileMode 属性
    <View compileMode>
      ...
    </View>
  )
}

```

## 详细用法
### 条件表达式 + 自定义组件
通过状态来控制展示哪一个自定义组件的场景在业务中是很常见的，比如以下场景
```jsx
export default function Index () {
  const [show, setShow] = useState(true)

  return (
    <View compileMode>
      <Button onClick={()=>setShow(!show)}>toggle show</Button>
      <View>
        {
          show ? <Item/> : null
        }
      </View>
    </View>
  )
}

function Item () {
  return (
    <View compileMode>
      item
    </View>
  )
}
```
正常来说，上面这段代码是没问题的，但是由于 compileMode 得在编译的时候，给元素加上 compileIf 的属性，所以必须是一个确切的标签，所以以上写法暂不支持。后续计划设法把这个属性直接写入在 template 节点上，以支持以上写法。现阶段，先用以下的降级方法：
```jsx
export default function Index () {
  const [show, setShow] = useState(true)

  return (
    <View compileMode>
      <Button onClick={()=>setShow(!show)}>toggle show</Button>
      <View>
        <Item show={show}/>
      </View>
    </View>
  )
}

function Item (props) {
  const { show } = props
  return (
    show 
    ?
    <View compileMode>
      item
    </View>
    : null
  )
}
```
即把组件的展示，放到子组件中去进行判断。

### 使用 jsx 变量
直接使用 jsx 变量，在半编译的情况下是会报错，如以下代码：
```jsx
export default function Index () {

  const item = (<View>item</View>)
  return (
    <View compileMode>
      <View>
        {item}
      </View>
    </View>
  )
}
```
要改为 render 开头的渲染函数，如下：
```jsx
export default function Index () {

  const renderItem = () => <View>item</View>
  return (
    <View compileMode>
      <View>
        {renderItem()}
      </View>
    </View>
  )
}
```
不过这种写法，并不会把 `renderItem` 的返回值直接打入模版里面，所以这种写法对性能会有一定的消耗。

### 表单驱动 jsx 元素
这个场景下，其实就是 「使用 jsx 变量」 的一个延伸，如以下代码：
```jsx
export default function Index () {

  const itemMap = {
    a: <View compileMode>itemA</View>,
    b: <View compileMode>itemB</View>,
    c: <View compileMode>itemC</View>
  }
  return (
    <View compileMode>
      {itemMap.a}
      {itemMap.b}
      {itemMap.c}
    </View>
  )
}
```
需要改为以下写法：
```jsx
export default function Index () {
  const itemMap = {
    renderA: ()=> <View compileMode>itemA</View>,
    renderB: ()=> <View compileMode>itemB</View>,
    renderC: ()=> <View compileMode>itemC</View>
  }
  return (
    <View compileMode>
      <View>
      {itemMap.renderA()}
      {itemMap.renderB()}
      {itemMap.renderC()}
      </View>
    </View>
  )
}
```

## 半编译预处理
:::info
`4.0.7` 开始支持
:::info

允许在组件中自定义的以 `render` 开头的函数，来实现组件内部的模块化能力。
### 使用方法
1. 函数必须是 `render` 开头
2. 函数 `return` 的第一个标签必须带上 `compileMode="subRenderFn"` 属性

### 限制
1. `render` 开头的函数暂不支持拥有自己的作用域代码
2. 传递给 `render` 开头的函数的参数，现阶段必须是一个变量

### 例子
```jsx
const ComponentA = (props) => {
    const { data1, data2 } = props
    const renderXxxx = (props1, props2, ...) => { 
        //1. 这里暂不支持编码，涉及到作用域的问题
        return (
            //return 的第一个标签必须带上 compileMode="subRenderFn" 属性
            <View compileMode="subRenderFn">
                {props1}
                {props2}
                 ...
            </View>
        )
    }
    
    return (
        <View compileMode>
            // 2. props 暂时只支持传递变量，涉及到变量替换的问题
            {renderXxxx(data1, data2)}
        </View>
    )
}
```


## 最佳实践
总的来说，要最大限度的发挥半编译模式的优势，就是要把尽量把静态节点，尽可能的写到同一个 jsx 里面去。自我检查的最简单的方式就是看看编译后的模版数量是否足够少，每个模版是否包含了足够多节点。
如果一个 template 只是包含了少数节点，那其实无法带来很大的提升。可以结合半编译预处理，使用组件内的 `render` 开头的函数，进行模块化拆分 如以下代码：
```jsx
import { View, Image, Text } from "@tarojs/components";

import './index.scss'

const dataList = [
    {
        src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/35189432_1009333_ED.jpg?defaultImage=NoImageAvailableInternal",
        title: "这是标题1",
        subTitle: "这是子标题1",
        tag:[
            {
                name: "标签1",
                type: 1
            },
            {
                name: "标签2",
                type: 2
            },
            {
                name: "标签3",
                type: 3
            }
        ],
        des: "这是描述1",
        subDes:'这是子描述1',
        prices: {
            normal: {
                int: '86',
                float: '88'
            },
            line: 100
        }
    },
    {
        src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/62866950_989218_ED.jpg?defaultImage=NoImageAvailableInternal",
        title: "这是标题2",
        subTitle: "这是子标题2",
         tag:[
            {
                name: "标签1",
                type: 1
            },
            {
                name: "标签2",
                type: 2
            },
            {
                name: "标签3",
                type: 3
            }
        ],
        tagType: 2,
        des: "这是描述2",
        subDes:'这是子描述2',
        prices: {
            normal: {
                int: '60',
                float: '70'
            },
            line: 100
        }
    },
    {
        src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/62507586_989743_ED_M.jpg?defaultImage=NoImageAvailableInternal",
        title: "这是标题3",
        subTitle: "这是子标题3",
         tag:[
            {
                name: "标签1",
                type: 1
            },
            {
                name: "标签2",
                type: 2
            },
            {
                name: "标签3",
                type: 3
            }
        ],
        des: "这是描述3",
        subDes:'这是子描述3',
        prices: {
            normal: {
                int: '85',
                float: '10'
            },
            line: 100
        }
    },
    {
        src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/33263465_997778_ED.jpg?defaultImage=NoImageAvailableInternal",
        title: "这是标题4",
        subTitle: "这是子标题4",
         tag:[
            {
                name: "标签1",
                type: 1
            },
            {
                name: "标签2",
                type: 2
            },
            {
                name: "标签3",
                type: 3
            }
        ],
        des: "这是描述4",
        subDes:'这是子描述4',
        prices: {
            normal: {
                int: '8',
                float: '88'
            },
            line: 100
        }
    },
    {
        src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/60957401_1023440_ED.jpg?defaultImage=NoImageAvailableInternal",
        title: "这是标题5",
        subTitle: "这是子标题5",
        tag:[
            {
                name: "标签1",
                type: 1
            },
            {
                name: "标签2",
                type: 2
            },
            {
                name: "标签3",
                type: 3
            }
        ],
        des: "这是描述5",
        subDes:'这是子描述5',
        prices: {
            normal: {
                int: '77',
                float: '88'
            },
            line: 100
        }
    }
]


const Item = (props) =>{
    const { itemIndex } = props
    const sectionIndex = itemIndex % 5
    const data = dataList[sectionIndex]
    const { tag, src, title, subTitle, des, subDes, prices } = data

    const renderCard = ()=> {
        return (
            <View className='item-body-wrap' compileMode="subRenderFn">
            {renderImage()}
            {renderContent()}
        </View>
        )
    }
    const renderImage = ()=> {
        return (
            <View className='image-wrap' compileMode="subRenderFn">
                <Image src={src} mode='aspectFill' className='image-wrap' />
            </View>
        )
    }

    const renderContent = () =>{
        return (
            <View className='body-left'compileMode="subRenderFn">
                {renderTitle()}
                {renderDes()}
                {renderTags(tag)}
                {renderPrices()}
                {renderBtn()}
            </View>
        )

    }

    const renderTitle = () =>{
        return (
            <View className='title-wrap' compileMode="subRenderFn">
                <View className='title'>
                    {title}
                </View>
                <View className='sub-title'>
                    {subTitle}
                </View>
            </View>
        )
    }


    const renderDes = () => {
        return (
            <View className='des-wrap' compileMode="subRenderFn">
                <View className='des'>
                    {des}
                </View>
                <View className='sub-des'>
                    {subDes}
                </View>
            </View>
        )
    }

    const renderPrices = () =>{
        return (
            <View className='price-wrap' compileMode="subRenderFn">
                <View className='price-normal'>
                    <Text className='price-normal-int'>{prices.normal.int}</Text>
                    <Text className='price-normal-float'>.{prices.normal.float}</Text>
                </View>
                <View className='price-line'>
                    {prices.line}
                </View>
            </View>
        )
    }

    const renderTag1 = (tag, key)=>{
        return <View compileMode="subRenderFn" className="tag1" key={key}>{tag}</View>
    }
    const renderTag2 = (tag, key)=>{
        return <View compileMode="subRenderFn" className="tag2" key={key}>{tag}</View>
    }
    const renderTag3 = (tag, key)=>{
        return <View compileMode="subRenderFn" className="tag3" key={key}>{tag}</View>
    }

    const renderTags = (tags)=>{
        return (<View className="tag-wrap" compileMode="subRenderFn">
            {
                tags.map((e, index)=>{
                    const { name, type } = e
                    return (
                        <>
                            {
                                type === 1 ? renderTag1(name, index) :
                                type === 2 ? renderTag2(name, index) :
                                type === 3 ? renderTag3(name, index) : null
                            }
                        </>
                    )
                })
            }
        </View>)
    }

    const renderBtn = ()=>{
        return (
            <View className='add' compileMode="subRenderFn">
                <Image src='https://img12.360buyimg.com/imagetools/jfs/t1/169993/8/27041/5311/61b1b219E03cffee0/778c223bd7677925.png' mode='aspectFill' className='add-image' />
            </View>
        )
    }

    return (
        <View key={`s${sectionIndex}i${itemIndex}`} compileMode>
           {renderCard()}
        </View>
    )
    
}

export default Item 
```

```css
.item {
    &-header{
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        height: 100%;
        border: 1px red solid;
        z-index: 10;
        box-sizing: border-box;
    }
    &-body{
        display: flex;
        align-items: center;
        border: 1px red solid;
        box-sizing: border-box;
        &-wrap {
            width: 100%;
            display: flex;
            align-items: center;
            .image-wrap {
                width: 70px;
                height: 70px;
            }

            .body-left {
                flex: 1;
                position: relative;
                margin-left: 20px;
                .title-wrap {
                    display: flex;
                    align-items: center;
                    .sub-title {
                        font-size: 14px;
                        color: gray;
                        margin-left: 5px;
                    }
                    .title {
                        font-size: 20px;
                    }
                }
                
                .des-wrap {
                    display: flex;
                    .sub-des {
                        margin-left: 4px;
                        font-size: 12px;
                        color: gray;
                    }
                    .des {
                        font-size: 16px;
                    }
                }


                .tag-wrap {
                    .tag1 {
                        border: 1px gray solid;
                        border-radius: 1px;
                        margin-right: 2px;
                        font-size: 12px;
                    }
                    .tag2 {
                        border: 1px red dashed;
                        border-radius: 1px;
                        margin-right: 2px;
                        font-size: 12px;
                    }
                    .tag3 {
                        border: 1px green solid;
                        border-radius: 1px;
                        margin-right: 2px;
                        font-size: 12px;
                    }
                    display: flex;
                }
                .price {
                    &-wrap{
                        display: flex;
                        align-items: flex-end;
                    }

                    &-normal {
                        color: red;
                        display: flex;
                        align-items: flex-end;
                        &-int{
                            line-height: 12px;
                            font-size: 12px;
                        }
                        &-float{
                            line-height: 10px;
                            font-size: 10px;
                        }   
                    }
                    &-line {
                        line-height: 10px;
                        font-size: 10px;
                        color: gray;
                        text-decoration: line-through;
                    }
                }
                .add {
                    position: absolute;
                    right: 5px;
                    bottom: 5px;
                    .add-image{
                        width: 20px;
                        height: 20px;
                    }
                }

            }
        }
    }
}
```

---

## docs/composition-api.md

---
title: Vue3 Composition APIs
---

:::info
Taro v3.4.0+ 开始支持
:::

Vue3 提供了 [Composition API（组合式 API）](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 特性，和传统的 Options API 不同，Composition API 提供了全新的编码方式 ，可以让我们更好地去组织和复用代码逻辑。

本文将会介绍 Taro 提供的一些**自定义 Composition APIs**。而关于 Composition API 的相关用法和内置 API 等信息，请参阅 Vue 文档：

- [介绍](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Setup 函数](https://v3.vuejs.org/guide/composition-api-setup.html)
- [生命周期](https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html)
- [Provider / Inject](https://v3.vuejs.org/guide/composition-api-provide-inject.html)
- [Template Refs](https://v3.vuejs.org/guide/composition-api-template-refs.html)
- [`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax)

## Taro Composition APIs

Taro 内置的一些 Composition API，可以从 `@tarojs/taro` 包中引入使用。

例子：

```html title="在 setup 函数中使用"
<script>
  import { useDidShow } from '@tarojs/taro'

  export default {
    setup() {
      useDidShow(() => console.log('onShow'))
    },
  }
</script>
```

```html title="在 <script setup> 中使用"
<script setup>
  import { useDidShow } from '@tarojs/taro'

  useDidShow(() => console.log('onShow'))
</script>
```

### useRouter

等同于 `Taro.getCurrentInstance().router`。

```jsx title="示例代码"
// { path: '', params: { ... } }
const router = useRouter()
```

### useLoad

:::info
Taro v3.5.0+ 开始支持
:::

等同于页面的 `onLoad` 生命周期钩子。

```jsx title="示例代码"
useLoad(() => {
  console.log('onLoad')
})
```

### useReady

等同于页面的 `onReady` 生命周期钩子。

从此生命周期开始可以使用 `createCanvasContext` 或 `createSelectorQuery` 等 API 访问小程序渲染层的 DOM 节点。

```js title="示例代码"
useReady(() => {
  const query = wx.createSelectorQuery()
})
```

### useDidShow

页面显示/切入前台时触发。等同于 `onShow` 页面生命周期钩子。

```jsx title="示例代码"
useDidShow(() => {
  console.log('onShow')
})
```

### useDidHide

页面隐藏/切入后台时触发。等同于 `onHide` 页面生命周期钩子。

```jsx title="示例代码"
useDidHide(() => {
  console.log('onHide')
})
```

### useUnload

:::info
Taro v3.5.0+ 开始支持
:::

等同于页面的 `onUnload` 生命周期钩子。

```jsx title="示例代码"
useUnload(() => {
  console.log('onUnload')
})
```

### usePullDownRefresh

监听用户下拉动作。等同于 `onPullDownRefresh` 页面生命周期钩子。

```jsx title="示例代码"
usePullDownRefresh(() => {
  console.log('onPullDownRefresh')
})
```

### useReachBottom

监听用户上拉触底事件。等同于 `onReachBottom` 页面生命周期钩子。

```jsx title="示例代码"
useReachBottom(() => {
  console.log('onReachBottom')
})
```

### usePageScroll

监听用户滑动页面事件。等同于 `onPageScroll` 页面生命周期钩子。

```jsx title="示例代码"
usePageScroll((res) => {
  console.log(res.scrollTop)
})
```

### useResize

小程序屏幕旋转时触发。等同于 `onResize` 页面生命周期钩子。

```jsx title="示例代码"
useResize((res) => {
  console.log(res.size.windowWidth)
  console.log(res.size.windowHeight)
})
```

### useShareAppMessage

监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。等同于 `onShareAppMessage` 页面生命周期钩子。

**使用时，必须为页面配置 `enableShareAppMessage: true`。（修改配置文件后请重新编译项目）**

```html title="page.vue"
<script setup>
  import { useShareAppMessage } from '@tarojs/taro'

  useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
    }
  })
</script>
```

```js title="page.config.js" {2}
export default {
  enableShareAppMessage: true,
}
```

### useTabItemTap

点击 tab 时触发。等同于 `onTabItemTap` 页面生命周期钩子。

```jsx title="示例代码"
useTabItemTap((item) => {
  console.log(item.index)
  console.log(item.pagePath)
  console.log(item.text)
})
```

### useShareTimeline

监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。等同于 `onShareTimeline` 页面生命周期钩子。

> 只有微信小程序支持，基础库 2.11.3 开始支持，本接口为 Beta 版本，暂只在 Android 平台支持

**使用时，必须为页面配置 `enableShareTimeline: true`。（修改配置文件后请重新编译项目）**

```html title="page.vue"
<script setup>
  import { useShareTimeline } from '@tarojs/taro'

  useShareTimeline(() => {
    console.log('onShareTimeline')
  })
</script>
```

```js title="page.config.js" {2}
export default {
  enableShareTimeline: true,
}
```

### useAddToFavorites

监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。等同于 `onAddToFavorites` 页面生命周期钩子。

> 只有微信小程序支持，本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持

```jsx title="示例代码"
useAddToFavorites((res) => {
  // webview 页面返回 webviewUrl
  console.log('WebviewUrl: ', res.webviewUrl)
  return {
    title: '自定义标题',
    imageUrl: 'https://demo.png',
    query: 'name=xxx&age=xxx',
  }
})
```

### useSaveExitState

:::info
Taro v3.5.0+ 开始支持
:::

每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用，可以进行[退出状态](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81)的保存。

> 只有微信小程序支持，基础库 2.7.4 开始支持。

```jsx title="示例代码"
useSaveExitState(() => {
  const exitState = { myDataField: 'myData' } // 需要保存的数据
  return {
    data: exitState,
    expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000, // 超时时刻
  }
})
```

### useTitleClick

> 只有支付宝小程序支持。等同于 `onTitleClick` 页面生命周期钩子。

点击标题触发。

```jsx title="示例代码"
useTitleClick(() => console.log('onTitleClick'))
```

### useOptionMenuClick

> 只有支付宝小程序支持。等同于 `onOptionMenuClick` 页面生命周期钩子。

点击导航栏额外图标触发。

```jsx title="示例代码"
useOptionMenuClick(() => console.log('onOptionMenuClick'))
```

### usePullIntercept

> 只有支付宝小程序支持。等同于 `onPullIntercept` 页面生命周期钩子。

下拉截断时触发。

```jsx title="示例代码"
usePullIntercept(() => console.log('onPullIntercept'))
```

---

## docs/composition.md

---
title: 更多资源
---

最新的更多资源，请参考：[NervJS/awesome-taro](https://github.com/NervJS/awesome-taro)

## 开源项目

### Taro3

- [Taro UI Vue3](https://b2nil.github.io/taro-ui-vue3/)
- [Taro UI Vue](https://github.com/psaren/taro-ui-vue)
- [基于 Taro + Taro-ui + Typescript + redux 开发的网易云音乐小程序](https://github.com/lsqy/taro-music)
- [Taro Design 开源页面设计器](https://github.com/ShaoGongBra/taro-design)

### Taro2

- 💯 [Hi 头像](https://github.com/hi-our/hi-face) 自带[教程小册](https://www.xiaoxili.com/hi-face)
- 💯 [基于 Taro2.0 + dva + Taro-ui + immer 开发的电商小程序](https://github.com/jiechud/taro-mall)
- 💯 [基于 Taro2.0 + TypeScript + 云开发的地图同学录小程序](https://github.com/Mayandev/classmate-map)
- [基于 Taro + Taro-ui + Typescript + redux 开发的网易云音乐小程序](https://github.com/lsqy/taro-music/tree/feature_taro2.x)
- [基于 Taro2.0 + dva + Taro-ui + wemark 开发的 markdown 文章博客小程序](https://github.com/hirCodd/JavaNorthMiniApp.git)

### Taro1

- 💯 [首个 Taro 多端统一实例 - 网易严选（小程序 + H5 + React Native）](https://github.com/js-newbee/taro-yanxuan)
- 💯 [基于 Taro + Dva 构建的时装衣橱(电商实战项目)](https://github.com/EasyTuan/taro-msparis)
- 💯 [基于 Taro + Taro-ui + dva 开发的公益 App](https://github.com/hugetiny/quit-smoking)
- 💯 [github 上能找到的 taro 适配 Android、iOS、微信小程序、H5 最佳实践项目脚手架](https://github.com/bozaigao/Taro-demo)
- [Taro 掘金小册源码](https://github.com/o2team/taro-ebook-source)
- [基于 taro + dva 开发的音乐播放器小程序](https://github.com/huangzhuangjia/taro-music)
- [Taro + Taro-UI GitHub 小程序客户端 Gitter 源码](https://github.com/huangjianke/Gitter)
- [基于 Taro + dva + Taro-ui + Typescript 开发的网易云音乐小程序](https://github.com/abc-club/taro-music-ts)

## 官方资源

- [Taro 项目仓库](https://github.com/NervJS/taro)
- [Taro 官方文档](/docs)
- [Taro UI 项目仓库](https://github.com/NervJS/taro-ui)
- [Taro UI 官方文档](https://taro-ui.jd.com)

## 生态资源

- [Taro UI](https://taro-ui.jd.com)
- [Taro UI Vue3](https://b2nil.github.io/taro-ui-vue3/)
- [Taro UI Vue](https://github.com/psaren/taro-ui-vue)
- [更多](/docs/redux)

## 文章教程

- [官方博客](/blog)
- [不敢阅读 npm 包源码？带你揭秘 taro init 背后的哲学](https://juejin.im/post/5c21f4e5f265da61117a54a0)
- [从 0 到 1 构建适配不同端（微信小程序、H5、React-Native 等）的 taro + dva 应用](https://juejin.im/post/5bb1766d5188255c3272cdd0)
- [【小程序 taro 最佳实践】http 请求封装（方便使用，增加 token，统一错误日志记录和上报）](https://segmentfault.com/a/1190000016533592)
- [【小程序 taro 最佳实践】异步 action 优雅实践(简化流程)](https://segmentfault.com/a/1190000016534001)
- [使用 Taro 框架开发小程序](https://juejin.im/post/5ba0a53af265da0ab5037234)
- [Taro 下利用 Decorator 快速实现小程序分享](https://juejin.im/post/5b99da5d5188255c6f1e084e)
- [微信小程序授权登陆方案以及在 Taro 下利用 Decorator 修饰器实现](https://juejin.im/post/5b97a762e51d450e9649a8fd)
- [试用 React 语法的多端框架 Taro 问题汇总](https://segmentfault.com/a/1190000016247153)
- [Taro 在京东购物小程序上的实践](https://juejin.im/entry/5b987859e51d450ea2465ddd)
- [Taro 实践 - TOPLIFE 小程序 开发体验](https://juejin.im/post/5b3b786a6fb9a04f89780a9f)
- [Taro 技术揭秘：taro-cli](https://juejin.im/post/5b3ce041e51d45194832aaf6)
- [为何我们要用 React 来写小程序 - Taro 诞生记](https://juejin.im/post/5b30b476518825749e4a1d91)
- [GitLab-CI 微信小程序进行持续集成和持续部署](https://zacksleo.github.io/2018/04/08/GitLab-CI%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%BF%9B%E8%A1%8C%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E5%92%8C%E6%8C%81%E7%BB%AD%E9%83%A8%E7%BD%B2/)
- [使用 Taro 和 Typescript 进行小程序开发](https://zacksleo.github.io/2018/06/16/%E4%BD%BF%E7%94%A8Taro%E5%92%8CTypescript%E8%BF%9B%E8%A1%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%8F%91/)
- [微信小程序及 h5,基于 taro，zoro 最佳实践探索](https://www.jianshu.com/p/7c27dbbc080f)
- [手把手教你用 Taro 框架写一个图像处理类微信小程序](https://juejin.im/post/5c3c8c58f265da611a4813a9)
- [Taro 多端开发的正确姿势：打造三端统一的网易严选（小程序、H5、React Native）](https://juejin.im/post/5c6a151f518825625e4ac830)
- [Taro 与 Redux 结合使用教程](https://github.com/imageslr/taro-library#%E5%BC%95%E5%85%A5-redux)
- [微信小程序开发之影分身术](https://juejin.im/post/5c788d28e51d4560a82be8d2)

## 视频教程

- [凹凸极客沙龙《用 Webpack 打包小程序》2020-04-17](https://www.bilibili.com/video/BV15A411b7cy) by [luckyadam](https://github.com/luckyadam)

## 开发技巧

- [微信小程序 wx.request 对于 JSON 含 \u2028 处理异常](https://segmentfault.com/a/1190000015443614)
- [Taro 最佳实践](https://github.com/js-newbee/taro-best-practices)
- [封装 Taro.request（拦截器，url 配置等）](https://github.com/TigerHee/taro-request)

## 示例项目

### Taro 3

- [TodoMVC React 版](https://github.com/NervJS/TodoMVC/tree/react) (小程序 / H5)
- [TodoMVC Vue 版](https://github.com/NervJS/TodoMVC/tree/vue) (小程序 / H5)
- Taro 组件库示例 [taro-components-sample](https://github.com/NervJS/taro-components-sample) （默认是 React，Vue 请切到 Vue 分支）
- [仿知乎小程序 React 版](https://github.com/NervJS/taro-zhihu-sample/tree/next)
- [仿知乎小程序 Vue 版](https://github.com/NervJS/taro-zhihu-sample/tree/vue)
- [V2ex 小程序（TypeScript） React 版](https://github.com/NervJS/taro-v2ex/tree/next)
- [V2ex 小程序（TypeScript）Vue 版](https://github.com/NervJS/taro-v2ex/tree/vue)
- [与微信小程序原生融合的示例（React 版）](https://github.com/NervJS/taro-sample-weapp/tree/next)
- [与微信小程序原生融合的示例（Vue 版）](https://github.com/NervJS/taro-sample-weapp/tree/vue)
- [Taro 示例项目(内置 计数器 与 异步请求): Taro + Dva + Typescript + Immutable](https://github.com/didilinkin/tarojs-ts-cli)
- 💯 [nice-router-taro 脚手架项目，DVA+数据驱动页面+数据驱动表单+数据驱动 list](https://github.com/kala888/nice-router-taro)

### Taro 2

- Taro Redux 示例 [taro-redux-sample](https://github.com/NervJS/taro-redux-sample)
- [TodoMVC](https://github.com/NervJS/TodoMVC) (小程序/H5/React Native)
- Taro 组件库示例 [taro-components-sample](https://github.com/NervJS/taro-components-sample/tree/master)
- [Taro 脚手架（特性： 封装 api、redux 优雅集成、异常日志上报）](https://github.com/wsdo/taro-kit.git)
- [仿知乎小程序](https://github.com/NervJS/taro-zhihu-sample)
- [仿知乎小程序: Taro + Taro-UI + yapi API](https://github.com/MoonCheung/zhihu-applet)
- [V2ex 小程序（TypeScript）](https://github.com/NervJS/taro-v2ex)
- [与微信小程序原生融合的示例](https://github.com/NervJS/taro-sample-weapp)
- [记日常小程序 Taro-UI + Rematch + 云开发 + tcb-router](https://github.com/zhixiaoqiang/taroCloud)
- 💯 [nice-router-taro 脚手架项目，DVA+数据驱动页面+数据驱动表单+数据驱动 list](https://github.com/kala888/nice-router-taro/tree/taro2)

### Taro 1

- Taro 端能力示例 [taro-apis-sample](https://github.com/NervJS/taro-apis-sample)
- Taro 实验性特性项目 [taro-todo](https://github.com/NervJS/taro-todo)
- [Taro 整合 Dva 示例](https://github.com/zuoge85/taro-dva)
- [taro 结合 zoro 完整方案示例](https://github.com/FaureWu/ztaro)
- [Taro-UI + Rematch 示例](https://github.com/qwIvan/taro-demo-todolist)
- [Taro+dva+wxParse 多端富文本解析示例](https://github.com/zcSkr/taro-dva-wxParse)
- [Taro+Taro-UI+es6 入门 demo](https://github.com/hyyqcweb/taro-gank)
- [知识付费小程序（TypeScript）](https://github.com/SmallRuralDog/yundocs)
- [书店小程序： Taro + Redux + 本地 Mock Server 示例项目](https://github.com/imageslr/taro-library)
- [Taro 示例项目(内置 计数器 与 异步请求): Taro + Dva + Typescript + Immutable](https://github.com/didilinkin/elf-taro-cli/tree/taro-1.2.8)

## 第三方库和组件

- [f2 图表封装 兼容 H5 和微信小程序](https://github.com/xioxin/taro-f2)
- [echarts 图表封装](https://github.com/WsmDyj/echarts-for-taro)
- [taro-plugin-canvas - 基于 Taro 的小程序海报组件](https://github.com/chuyun/taro-plugin-canvas)
- [taro-bdmark - 基于 Taro 的百度小程序 md 解析器](https://github.com/guozimo/taro-bdMark)
- [Mounted - 一款基于 Taro 的小程序组件库](https://github.com/fjc0k/mounted)
- [taro-axios - 在 Taro 中使用 axios](https://github.com/fjc0k/taro-axios)
- 🔨[TaroCreator - 基于 Taro UI 的小程序可视化设计工具](https://github.com/mpfast/TaroCreator)

---

## docs/condition.md

---
title: 条件渲染
---

在 Taro 中，你可以创建不同的组件来封装各种你需要的行为。然后还可以根据应用的状态变化只渲染其中的一部分。

Taro 中的条件渲染和 JavaScript 中的一致，使用 Taro 操作符 if 或条件运算符来创建表示当前状态的元素，然后让 Taro 根据它们来更新 UI。

## 元素变量

你可以使用变量来储存元素。它可以帮助你有条件的渲染组件的一部分，而输出的其他部分不会更改。

考虑如下代码：

```jsx
// LoginStatus.js
class LoginStatus extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn
    // 这里最好初始化声明为 `null`，初始化又不赋值的话
    // 小程序可能会报警为变量为 undefined
    let status = null
    if (isLoggedIn) {
      status = <Text>已登录</Text>
    } else {
      status = <Text>未登录</Text>
    }

    return <View>{status}</View>
  }
}
// app.js
import LoginStatus from './LoginStatus'

// 这样会渲染 `已登录`
class App extends Component {
  render() {
    return (
      <View>
        <LoginStatus isLoggedIn={true} />
      </View>
    )
  }
}
```

在以上代码中，我们通过 `isLoggedIn ` 作为参数来判定 `status` 显示什么内容，当 `isLoggedIn ` 为 `true` 时 显示 「已登录」，反之显示「未登录」。

声明变量并使用 if 语句是条件渲染组件的不错的方式，但有时你也想使用更简洁的语法，在 JSX 中有如下几种方法。

### 逻辑运算符 `&&`

你可以通过用花括号包裹代码在 JSX 中嵌入几乎任何表达式 ，也包括 JavaScript 的逻辑与 &&，它可以方便地条件渲染一个元素。

```jsx
class LoginStatus extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn

    return (
      <View>
        {isLoggedIn && <Text>已登录</Text>}
        {!isLoggedIn && <Text>未登录</Text>}
      </View>
    )
  }
}
```

以上代码和 `元素变量` 部分代码达成的效果是一样的。之所以能这样做，是因为在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。

因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，Taro 会忽略并跳过它。

### 三元运算符（条件表达式）

条件渲染的另一种方法是使用 JavaScript 的条件运算符 `condition ? true : false`。

```jsx
class LoginStatus extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn

    return <View>{isLoggedIn ? <Text>已登录</Text> : <Text>未登录</Text>}</View>
  }
}
```

以上代码和之前的两种方法达成的效果也是一致的。

在 JSX 条件渲染的模式和 JavaScript 差不多，你可以根据团队的习惯选择更易读的方式。但当条件变得过于复杂，可能就是提取元素抽象成组件的好时机了。

### 枚举条件渲染

有时渲染的条件非常多，不管是 `if-else` 还是 `switch-case` 来做条件渲染都会显得太麻烦。这时我们可以使用「表驱动法」：枚举渲染。

```jsx
function Loading(props) {
  const { loadingText, LOADING_STATUS, loadingStatus, onRetry } = props
  return (
    <View className="loading-status">
      {
        {
          loading: loadingText,
          fail: <View onClick={onRetry}> 加载失败, 点击重试 </View>,
          'no-more': '没有更多了',
        }[loadingStatus] /** loadingStatus 是 `loading`、`fail`、`no-more`  其中一种状态 **/
      }
    </View>
  )
}
```

---

## docs/context.md

---
title: Context
---

> 自 `v1.3.0-beta.5` 起支持
> 在 Taro 中没有对 React 15 的 [legacy context](https://zh-hans.reactjs.org/docs/legacy-context.html) 进行支持，无法使用 `getChildContext()` API。

在一个典型的 Taro 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

## API

### Taro.createContext

```jsx
const MyContext = Taro.createContext(defaultValue)
```

创建一个 Context 对象。当 Taro 渲染一个订阅了这个 Context 对象的组件，这个组件会从最先渲染的 `Provider` 中读取到 `Provider` 的 `value`。

> 在 Taro 中，即便在框架层面也无法知道组件的树结构，因此 Taro 无法像 React 一样往父组件找离自己最近的 Provider。因此创建的 Context 最好只在一个地方使用。

### Context.Provider

```jsx
<MyContext.Provider value={/* 某个值 */}>
```

每个 Context 对象都会返回一个 Provider Taro 组件，它允许消费组件订阅 context 的变化。

Provider 接收一个 `value` 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。

当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部包含 `contextType` 或使用 `useContext` 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

通过新旧值检测来确定变化，使用了与 `Object.is` 相同的算法。

> 由于现在 Taro 还没有 render props 的完整支持，所以无法使用 Context.Comsumer API，如果要消费 Context，可以使用 `ContextType` 或 `useContext` API。

### Class.contextType

```jsx
class MyClass extends Taro.Component {
  componentDidMount() {
    let value = this.context
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context
    /* ... */
  }
  render() {
    let value = this.context
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext
```

挂载在 class 上的 `contextType` 属性会被重赋值为一个由 `Taro.createContext()` 创建的 Context 对象。这能让你使用 this.context 来消费 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。

> 注意：
> 你只通过该 API 订阅单一 context。如果你想订阅多个，阅读使用多个 Context 章节
> 如果你正在使用实验性的 public class fields 语法，你可以使用 static 这个类属性来初始化你的 contextType。

```jsx
class MyClass extends React.Component {
  static contextType = MyContext
  render() {
    let value = this.context
    /* 基于这个值进行渲染工作 */
  }
}
```

## 示例

### 动态 Context

```jsx
// counter-context.js
export const CounterContext = Taro.createContext(0)

// index.js
class Index extends Component {
  render() {
    const [count, setCount] = useState(0)
    return (
      <CounterContext.Provider value={count}>
        <View className="container">
          <Test />
          <Button onClick={() => setCount(0)}>Reset</Button>
          <Button onClick={() => setCount((prevCount) => prevCount + 1)}>+</Button>
          <Button onClick={() => setCount((prevCount) => prevCount - 1)}>-</Button>
        </View>
      </CounterContext.Provider>
    )
  }
}

// child.js
class Child extends Taro.Component {
  shouldComponentUpdate() {
    // 即便返回 false 也不会阻止 CounterContext 更新消费它的组件
    return false
  }

  render() {
    return <Counter />
  }
}

// counter.js
import { CounterContext } from './counter-context.js'
class Counter extends Taro.Component {
  static contextType = CounterContext

  render() {
    const value = this.context
    return <View>Count: {value}</View>
  }
}
```

我们在这个例子中把计数器 `count` 的值通过 `CounterContext.Provider` 往下传递，`Child` 组件中虽然禁止了更新，但 `Counter` 组件在 `CounterContext.Provider` 的 `value` 每次变化之后，还是能够订阅更新，收到每次 `count` 的值。

### 消费多个 Context

```jsx
const ThemeContext = Taro.createContext('light')

// 用户登录 context
const UserContext = Taro.createContext({
  name: 'Guest',
})

class App extends Taro.Component {
  render() {
    const { signedInUser, theme } = this.props

    // 提供初始 context 值的 App 组件
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  )
}

// 一个组件可能会消费多个 context
function Content() {
  const theme = useContext(ThemeContext)
  const user = useContext(UserContext)
  return <ProfilePage user={user} theme={theme} />
}
```

---

## docs/convert-to-react.md

---
title: 转换成 React
---

## 二次开发

原生小程序代码：

```jsx
Page({
  data: {
    text: 'Hello World'
  }
})

<view class="container">
  {{ text }}
</view>
```

转换后：

```javascript
import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Title from '../../components/title/index'
import './index.scss'

@withWeapp({
  data: {
    text: 'Hello World',
  },
})
class _C extends React.Component {
  render() {
    const { text } = this.data
    return <View className="container">{text}</View>
  }
}

export default _C
```

它看起来就像普通的 Taro 组件，最重要的区别就在于 `@withWeapp()` 这个装饰器，你可以将它理解为转换代码的运行时，`@withWeapp()` 会增加一些原来 Taro 没有方法和属性，例如：

### `this.setData`

转换后的 `this.setData` 的 API 相当于小程序的 `this.setData` 的 polyfill，他和 `this.setState` 最大的区别就在于，`this.setData` 之后 `data` 的数据是同步更新，而渲染是异步更新，而 `setState` 两者都是异步的。

### `this.data` 和 `this.properties`

`this.data` 和 `this.properties` 相当于 Taro 的 `this.state` 和 `this.props` 的 alias，当它们的数据更新时，对应的 `state` 和 `props` 也会同步更新。

### 生命周期

Taro 会将原生小程序的生命周期转换为 Taro 的生命周期，完整对应关系如下：

| 小程序生命周期     | Taro 生命周期        |
| :----------------- | :------------------- |
| onShow             | componentDidShow     |
| onHide             | componentDidHide     |
| App.onLaunch       | onLaunch             |
| Page.onLoad        | onLoad               |
| Page.onReady       | onReady              |
| Page.onUnload      | componentWillUnmount |
| Component.created  | componentWillMount   |
| Component.attached | componentDidMount    |
| Component.ready    | Page.onReady         |
| Component.detached | componentWillUnmount |

---

## docs/event.md

---
title: 事件处理
---

Taro 元素的事件处理和 DOM 元素的很相似。但是有一点语法上的不同:

Taro 事件绑定属性的命名采用驼峰式写法，而不是小写。
如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串 (DOM 元素的写法)。
例如，传统的微信小程序模板：

```html
<button onclick="activateLasers">Activate Lasers</button>
```

Taro 中稍稍有点不同：

```jsx
<button onClick={this.activateLasers}>Activate Lasers</button>
```

在 Taro 中另一个不同是你不能使用 `catchEvent` 的方式阻止事件冒泡。你必须明确的使用 `stopPropagation`。例如，阻止事件冒泡你可以这样写：

```jsx
class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  onClick = (e) => {
    e.stopPropagation()
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }))
  }

  render() {
    return <button onClick={this.onClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
  }
}
```

## 向事件处理程序传递参数

通常我们会为事件处理程序传递额外的参数。例如，传入欲删除行的 `id`：

```jsx
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

当你通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 `e` 要排在所传递参数的后面。

```jsx
class Popper extends Component {
  constructor() {
    super(...arguments)
    this.state = { name: 'Hello world!' }
  }

  // 你可以通过 bind 传入多个参数
  preventPop(name, test, e) {
    //事件对象 e 要放在最后
    e.stopPropagation()
  }

  render() {
    return <Button onClick={this.preventPop.bind(this, this.state.name, 'test')}></Button>
  }
}
```

### 使用匿名函数

> 自 v1.2.9 开始支持

> 注意：在各小程序端，使用匿名函数，尤其是在 **循环中** 使用匿名函数，比使用 `bind` 进行事件传参占用更大的内存，速度也会更慢。

除了 `bind` 之外，事件参数也可以使用匿名函数进行传参。直接写匿名函数不会打乱原有监听函数的参数顺序：

```jsx
class Popper extends Component {
  constructor() {
    super(...arguments)
    this.state = { name: 'Hello world!' }
  }

  render() {
    const name = 'test'
    return (
      <Button
        onClick={(e) => {
          e.stopPropagation()
          this.setState({
            name,
          })
        }}
      >
        {this.state.name}
      </Button>
    )
  }
}
```

> 注意：
> 使用通过 `usingComponents` 的第三方组件不支持匿名函数

### 柯里化

> 自 v1.3.0-beta.1 开始支持

> 在各小程序端，使用柯里化 Taro 会在编译后多生成一个匿名函数。

除了 `bind` 和匿名函数之外，事件参数也可以使用[柯里化](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)传参。

```jsx
class Title extends Component{

  handleClick = (index) => (e) => {
    e.stopPropagation()
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { currentIndex } = this.props;
    return (
      {/* 调用 `this.handleClick(currentIndex)` 会返回一个函数，这个函数可以访问到 `currentIndex` 同时也能满足 `onClick` 的签名 */}
      <View onClick={this.handleClick(currentIndex)}>
      </View>
    )
  }
 }
```

> 注意：
> 使用通过 `usingComponents` 的第三方组件不支持匿名函数

### 函数式组件

在函数式组件中，事件传参可以传入事件的引用也可以传入匿名函数，以下是函数式组件配合 [`useCallback`](hooks.md#usecallback) 的一个例子：

```jsx
const App = () => {
  const [c1, setC1] = useState(0)
  const [c2, setC2] = useState(0)
  const [c3, setC3] = useState(0)

  const increment = (c) => c + 1

  // 只有 useCallback 对应的 c1 或 c2 的值改变时，才会返回新的函数
  const increment1 = useCallback(() => setC1(increment), [c1])
  const increment2 = useCallback(() => setC2(increment), [c2])

  return (
    <View>
      <Text> Counter 1 is {c1} </Text>
      <Text> Counter 2 is {c2} </Text>
      <Text> Counter 3 is {c3} </Text>
      <View>
        <Button onClick={increment1}>Increment Counter 1</Button>
        <Button onClick={increment2}>Increment Counter 2</Button>
        <Button onClick={() => setC3(increment)}>Increment Counter 3</Button>
      </View>
    </View>
  )
}
```

## 任何组件的事件传递都要以 `on` 开头

> 在 v1.3.0-beta.0 之后，自定义组件间的事件传递可以不用 `on` 开头，但内置组件的事件依然是以 `on` 开头的，为了一致性我们仍然推荐你以 `on` 开头命名你的事件。

在微信小程序中，可能你会看到像 `bindTap` 这样的用法，但在 Taro 中，事件参数(props)都以 `on` 开头:

```jsx
// 错误
const element = <View bindtap={this.onTag} />
const element2 = <Input bindfocus={this.onFocus} />
const element3 = <CustomElement animationEnd={this.props.onAnimationEnd} />
```

只要当 JSX 组件传入的参数是函数，参数名就必须以 `on` 开头：

```jsx
// 正确
const element = <View onClick={this.onTag} />
const element2 = <Input onFocus={this.onFocus} />
const element3 = <CustomElement onAnimationEnd={this.props.onAnimationEnd} />
```

---

