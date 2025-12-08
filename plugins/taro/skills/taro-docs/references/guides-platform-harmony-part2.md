## docs/harmony/hybrid.md

---
title: Hybrid 容器方案
---

:::info
Taro v3.6.24+ 开始支持
:::

## 简介

Taro Harmony Hybrid 容器是为让 Taro 小程序代码可以完整的运行在鸿蒙单内核系统里，在 Taro H5 平台的基础上，基于原生壳工程的 JSBridge 能力，扩展 H5 平台不支持的小程序 Api 能力，让 Taro 小程序 0 成本运行在鸿蒙系统。

此方案不同于 Taro 的 Harmony 原生方案，其运行时还是 Webview，重点解决 Api 切换的问题。

![taroharmonyhybrid](@site/static/img/taroharmonyhybrid.jpg)

## 快速编译运行

### H5 侧编译运行

Taro CLI 依赖于 Node.js 环境，所以在你的机器上需要安装 Node.js 环境。请确保已具备较新的 node 环境（>=16.20.0）。当你的机器已经存在了 Node.js 环境，可以通过在终端输入命令  npm i -g `@tarojs/cli`  安装 Taro CLI。安装完毕之后，在终端输入命令  taro，如果出现类似内容就说明安装成功了：

```shell
👽 Taro v3.6.25
Usage: taro <command> [options]
Options:
  -V, --version       output the version number
  -h, --help          output usage information
```

安装好 Taro CLI 之后可以通过 taro init  命令创建一个全新的项目，你可以根据你的项目需求填写各个选项，一个最小版本的 Taro 项目会包括以下文件：

```
├── babel.config.js             # Babel 配置
├── .eslintrc.js                # ESLint 配置
├── config                      # 编译配置目录
│   ├── dev.js                  # 开发模式配置
│   ├── index.js                # 默认配置
│   └── prod.js                 # 生产模式配置
├── package.json                # Node.js manifest
├── dist                        # 打包目录
├── project.config.json         # 小程序项目配置
└── src # 源码目录
    ├── app.config.js           # 全局配置
    ├── app.css                 # 全局 CSS
    ├── app.js                  # 入口组件
    ├── index.html              # H5 入口 HTML
    └── pages                   # 页面组件
        └── index
            ├── index.config.js # 页面配置
            ├── index.css       # 页面 CSS
            └── index.jsx       # 页面组件，如果是 Vue 项目，此文件为 index.vue
```

通过 Taro CLI 工具基于`默认模板`创建 Taro 工程，使用如下编译命令生成 harmony-hybrid 平台的 Web 资源：

```shell
# 项目根目录下安装依赖
# yarn
$ yarn install
# npm script
$ npm install
# pnpm script
$ pnpm install

# 编译项目
# yarn
$ yarn build:harmony-hybrid
# npm script
$ npm run build:harmony-hybrid
# pnpm script
$ pnpm build:harmony-hybrid
```

生成的产物在 `dist` 目录下

开发可参考项目：[mini-program-example](https://github.com/NervJS/taro/tree/main/examples/mini-program-example)

### 壳工程编译运行

Taro `harmony-hybrid` 平台产物需要结合鸿蒙壳工程一起编译运行才能实现完整的功能。`@hybrid/web-container` 三方库模块提供了鸿蒙 `TaroWebContainer` 等组件和 API，支持开发者快速构建运行环境。鸿蒙壳工程使用 `@hybrid/web-container` 模块的方式如下：

- 使用 DevEco Studio 开发工具（ >= 5.0.3.100 ）新建应用工程，选择 Empty Ability 模板，API >= 11, 其他配置使用默认值。
- 在 `entry/oh-package.json5` 文件中添加 `@hybrid/web-container` 模块的依赖并点击 Sync 进行同步：

```json
{
  "license": "ISC",
  "devDependencies": {},
  "name": "entry",
  "description": "演示如何使用TaroWebContainer组件",
  "version": "1.0.0",
  "dependencies": {
    "@hybrid/web-container": "2.0.0-rc.7"
  }
}
```

具体使用方式请参考下个章节：集成到现有鸿蒙工程

- 最后点击菜单 `Build` -- `Rebuild Project` 编译项目。

## 集成到现有鸿蒙工程

### 初始化

在 src/main/ets/entryability/EntryAbility.ets 中的 windowStage.loadContent 里初始化和预加载，扩展原生 Api 可参考进阶教程中部分

```ts
import { TaroHybridManager, InjectObject } from '@hybrid/web-container'
import router from '@ohos.router'

const nativeObj: InjectObject = {}

// 在windowStage.loadContent中初始化项目
windowStage.loadContent('pages/Index', (err) => {
  // 全局初始化
  TaroHybridManager.init({
    uiAbilityContext: this.context,
    domain: 'https://customer.domain.com', // 小程序的域名，注意：此处不添加/结尾
    injectNativeMethod: (indexHtmlPath: string, uiAbilityContext: common.UIAbilityContext) => {
      // 扩展原生API
      return nativeObj
    },
    rootIndexHtmlPath: '/index.html',
    nativeBack: () => {
      router.back()
    },
    forceDarkAccess: true,
    windowClass: windowStage.getMainWindowSync(),
    rawFileName: 'spa',
    diskCacheEnable: true,
  })
  // 预加载，可选，不是必须
  TaroHybridManager.preLoader(
    windowStage.getMainWindowSync().getUIContext(),
    '/xx/index.html', // html的path路由
    '/pages/index/index' // Taro小程序的Page路径
  )
})
```

**TaroHybridManager.init 参数说明：**

init 方法的参数类型为 `TaroHybridManagerOptions`, 各字段说明如下：

| 字段名称           | 类型                                       | 描述                                               | 必填 |
| ------------------ | ------------------------------------------ | -------------------------------------------------- | ---- |
| uiAbilityContext   | UIAbilityContext                           | UIAbility 的上下文对象                             | 是   |
| windowClass        | Window                                     | 主窗口                                             | 是   |
| injectNativeMethod | (string, UIAbilityContext) => InjectObject | 注入对象生成函数                                   | 否   |
| nativeBack         | () => void                                 | 多容器场景回退自定义函数，只作用于 TaroHybrid 组件 | 否   |
| rootIndexHtmlPath  | string                                     | 主资源路径，只作用于 TaroHybrid 组件               | 否   |
| forceDarkAccess    | boolean                                    | 是否强制反色适配深色模式，只作用于 TaroHybrid 组件 | 否   |
| domain             | string                                     | 小程序的域名，此处不添加/结尾                      | 否   |
| rawFileName        | string                                     | 小程序的 bundle 目录                               | 否   |
| diskCacheEnable    | boolean                                    | 小程序磁盘是否缓存，默认 true                      | 否   |

### 简单集成（TaroWebContainer）

`TaroWebContainer` 组件提供加载单页面 Web 应用能力，并提供部分 Taro API 鸿蒙版本。

**使用方法：**

在 src/main/ets/pages/Index.ets 中使用 TaroWebContainer 组件拉起 taro 项目

```typescript
import Want from '@ohos.app.ability.Want';
import Url from '@ohos.url';
import { TaroWebContainer, InjectObject, HostPageState, TaroWebController } from '@hybrid/web-container';

const WEB_CONTAINER_PAGE_TAG = 'WebContainerPage';
let storage = LocalStorage.getShared() // 获取共享的本地存储对象
const TAG = 'WebContainerPage';

@Entry(storage)
@Component
struct WebContainerPage {
  @LocalStorageProp('want') want: Want = {};
  @State pageState: HostPageState = HostPageState.PageInit;
  @State taroWebController: TaroWebController = new TaroWebController();

  // 用户可以自定义对象注入到Web环境中，使用native.sayHello格式进行调用
  nativeObj: InjectObject = {
    sayHello: () => console.log(TAG, 'sayHello %{public}s', 'Hello World'),
  }

  onBackPress() {
    if (this.taroWebController.accessBackward()) {
      this.taroWebController.backward();
      return true;
    }
    return false;
  }

  onPageShow() {
    this.pageState = HostPageState.PageOnShow;
  }

  onPageHide() {
    this.pageState = HostPageState.PageOnHide;
  }

  webUrl(): string {
    // 开发阶段可以把网站静态资源文件放置到src/main/resources/rawfile/目录下
    // 生产环境下把网站静态资源放置到web服务器, 这里填写实际的网站地址url
    return 'resource://rawfile/index.html';
  }

  webUrlPrefix() {
    try {
      const url = Url.URL.parseURL(this.webUrl());
      return `${url.protocol}//${url.host}/`;
    } catch (err) {
      console.error(WEB_CONTAINER_PAGE_TAG, `Invalid webUrl: ${this.webUrl()}`);
      return '';
    }
  }

  getUrl(value: LoadCommittedDetails) {
    console.log('LoadCommittedDetails:', JSON.stringify(value))
  }

  build() {
    Column() {
      TaroWebContainer({
        indexHtmlPath: 'index.html',
        pageState: this.pageState, // 页面状态同步到组件
        webUrl: this.webUrl(), // 初始Url
        webUrlPrefix: this.webUrlPrefix(),
        useCache: false,
        want: this.want, // want信息
        taroWebController: this.taroWebController,
        isFullScreen: false, // 是否全屏显示
        injectObj: this.nativeObj, // 注入对象
        navigationInitVisible: true, // 导航栏是否显示
        showCapsule:true,
        capsulePage:'index.html',
        enableWebDebug:true,
        forceDarkAccess: true,
        userAgent: '',
        getLoadCommittedDetails: (value: LoadCommittedDetails) => {
          this.getUrl(value)
        }
      })
        .width('100%')
        .height('100%')
    }
  }
}
```

**构造参数说明：**

| 参数名称                | 类型              | 描述                                                               | 必填                        |
| ----------------------- | ----------------- | ------------------------------------------------------------------ | --------------------------- |
| taroWebController       | TaroWebController | TaroWebContainer 组件的控制器                                      | 是                          |
| webUrl                  | string            | 资源入口 url                                                       | 是                          |
| webUrlPrefix            | string            | 资源入口 url 的前缀，一般是 `${webUrl.protocol}://${webUrl.host}/` | 是                          |
| pageState               | HostPageState     | 传递页面状态                                                       | 是                          |
| useCache                | boolean           | 是否优先使用应用内置的 Web 资源                                    | 否，默认值： true           |
| want                    | Want              | 传递 EntryAbility 中`onCreate`和`onNewWant`保存的 want 信息        | 否，默认值： { }            |
| isFullScreen            | boolean           | 是否全屏显示应用                                                   | 否，默认值： true           |
| injectObj               | ESObject          | 注入 ets 对象到 Web 环境                                           | 否：默认值：undefined       |
| showCapsule             | boolean           | 是否显示胶囊按钮                                                   | 否：默认值：true            |
| capsulePage             | string            | 点击胶囊按钮跳转的页面                                             | 否：默认值：`pages/Capsule` |
| enableWebDebug          | boolean           | [开启 Web 调试功能][Web调试devtools配置]                           | 否：默认值：true            |
| navigationInitVisible   | boolean           | 控制导航栏初始显示状态                                             | 否：默认值：true            |
| userAgent               | string            | 自定义用户代理                                                     | 否                          |
| getLoadCommittedDetails | Function          | 网页跳转时触发该回调方法                                           | 否                          |
| forceDarkAccess         | boolean           | 网页强制开启深色模式                                               | 否:默认值：false            |

### 多容器和容器共用集成（TaroHybrid）

`TaroHybrid` 同`TaroWebContainer`组件功能相似，提供加载单页面 Web 应用能力，并提供部分 Taro API 鸿蒙版本，主要用于项目中有多个 webview 的场景。

**使用方法：**

1.在 src/main/ets/pages/SafeArea.ets 中定义一个顶部导航栏避让的组件

```ts
@Component
export struct SafeArea {
  @StorageProp('topRectHeight') topRectHeight: string = '0px'
  @BuilderParam child: ()=>void

  build() {
    Column() {
       Row()
         .width('100%')
         .height(this.topRectHeight)
         .backgroundColor(0xFFFFFF)
      Column(){
        this.child()
      }
      .width('100%')
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
  }
}
```

2.在 src/main/ets/pages/TaroHybridPage.ets 中使用 TaroHybrid 组件拉起 taro 项目

```typescript
import { HostPageState, TaroHybrid, TaroHybridManager } from '@hybrid/web-container/Index';
import router from '@ohos.router';
import { SafeArea } from './SafeArea';

const TAG = 'TaroHybridPage'

// 创建TaroHybridPage页面（例子是基于Entry实现）
export interface TaroHybridRouterParams {
    indexHtmlPath: string,
    taroPath: string
}
export const RouterToTaroHybrid = (params: TaroHybridRouterParams) => {
   // 跳转之前先加载url，目的是为了提升新页面的打开速度
   const result = TaroHybridManager.loadUrl(params.indexHtmlPath, params.taroPath);
   if (result) {
    // 容器复用成功，等待loadUrl，不然会出现先看到上一个页面
    setTimeout(()=>{
      router.pushUrl({
        url: 'pages/TaroHybridPage',
        params: params
      }, router.RouterMode.Standard)
    }, 300)
  } else {
    router.pushUrl({
      url: 'pages/TaroHybridPage',
      params: params
    }, router.RouterMode.Standard)
  }
}

@Entry
@Component
struct TaroHybridPage {
  @State pageState: HostPageState = HostPageState.PageInit;
  private indexHtmlPath: string = (router.getParams() as TaroHybridRouterParams).indexHtmlPath
  private taroPath: string = (router.getParams() as TaroHybridRouterParams).taroPath

 aboutToAppear(): void {
     // 设置UserAgent
    TaroHybridManager.setCustomUserAgent('')
    // initLoadCommittedDetails(indexHtmlPath,callBack()) web页面跳转时触发callBack()
    TaroHybridManager.initLoadCommittedDetails(this.indexHtmlPath,(value: LoadCommittedDetails): void => {})
  }

  onPageShow(): void {
    this.pageState = HostPageState.PageOnShow
  }
  onPageHide(): void {
    this.pageState = HostPageState.PageOnHide
  }
  onBackPress(): boolean | void {
    const instance = TaroHybridManager.getCoreInstance(this.indexHtmlPath)
    if (!instance) {
      return false;
    }
    return TaroHybridManager.onBack(
      instance.builderData.indexHtmlPath,
      instance.builderData.taroPath)
  }

  build() {
    Stack({alignContent: Alignment.TopStart}){
      SafeArea(){
        TaroHybrid({
          indexHtmlPath: this.indexHtmlPath,
          taroPath: this.taroPath,
          pageState: this.pageState
        })
      }
    }
  }
}

```

3.在 src/main/ets/pages/Index.ets 中增加一个跳转按钮，可跳转到 TaroHybridPage 页面

```ts
import { RouterToTaroHybrid } from './TaroHybridPage';
import { SafeArea } from './SafeArea';

let storage = LocalStorage.getShared() // 获取共享的本地存储对象

@Entry(storage)
@Component
struct Index {
  build() {
    Stack({ alignContent: Alignment.TopStart }) {
      SafeArea() {
        Column({ space: 30 }) {
          Button('TaroHybrid例子', { type: ButtonType.Normal, stateEffect: true })
            .borderRadius(8)
            .backgroundColor(0x317aff)
            .height(40)
            .onClick(() => {
              RouterToTaroHybrid({
                indexHtmlPath: "/spa/main/index.html",
                taroPath: "/pages/index/index"
              })
            })
        }
        .width('100%')
        .height('100%')
        .alignItems(HorizontalAlign.Center)
      }
    }
  }
}

```

**TaroHybrid 的设计思路：**

1. 多容器的判断依据：html 的 Path 路径为判断依赖，相同则共用，不同则新建载体页
2. 容器共用的思路：通过鸿蒙的 NodeContainer + NodeController 实现
3. 注意：容器共用存在一个问题：相邻两个原生 Page 之间如果共用容器，页面切换动画时，会有一个页面白屏，进入和退出时都会出现，尽量避免相邻两个原生 Page 之间共用容器。

## 进阶教程

### 混合路由

#### **实现方式**

在原生与 TaroHybrid 混合鸿蒙应用中，如果使用了容器共用，用户的路由栈会比较复杂，当在 Taro Hybrid 页面时，用户使用原生的物理返回时，需要区分是 Web 容器的返回，还是原生的返回。

TaroHybrid 组件已经解决了此问题，其思路为：

1. 原生跳转打开的 taro 页面，添加 query 参数 tarofrom=native
2. 原生的 onBackPress 逻辑里，获取当前 url，判断有没有参数 tarofrom=native，如果有则走原生路由返回，如果没有则走 Web 组件的 backward 逻辑

```typescript
// @hybrid/web-container 内部已实现
static onBack(taroWebController: TaroWebController): boolean {
    let curUrl = taroWebController.webController.getUrl();

    if (curUrl?.endsWith('?tarofrom=native')) {  //web回退到原生
      // Web先返回
      if (taroWebController.accessBackward()) {
        setTimeout(()=>{
          taroWebController.backward();
        }, 200)
      }
      // 回退到原生
      return false;
    }
    if (taroWebController?.accessBackward()) { // web回退
      taroWebController?.backward();
      // 保留在当前Web页面
      return true;
    }
    // 回退到原生
    return false;
  }
```

#### **使用方式**

1. TaroWebContainer 组件设置混合路由返回方式

   ```tsx
   ...
   struct WebContainerPage {
    // 判断原生返回或taro返回
     onBackPress() {
       if (this.taroWebController.accessBackward()) {
         this.taroWebController.backward();
         return true;
       }
       return false;
     }
   	...

     build() {
       Column() {
         TaroWebContainer({...})
           .width('100%')
           .height('100%')
       }
     }
   }
   ```

2. TaroHybrid 组件设置混合路由返回方式

   ```tsx
   ...

   @Entry
   @Component
   struct TaroHybridPage {
   	......

   // 通过indexHtmlPath区分webview容器，设置返回方式
     onBackPress(): boolean | void {
       const instance = TaroHybridManager.getCoreInstance(this.indexHtmlPath)
       if (!instance) {
         return false;
       }
       return TaroHybridManager.onBack(
         instance.builderData.indexHtmlPath,
         instance.builderData.taroPath)
     }

     build() {
       Stack({alignContent: Alignment.TopStart}){
         SafeArea(){
           TaroHybrid({
            ...
           })
         }
       }
     }
   }
   ```

### 小程序内置及热更新

#### 内置及热更新的使用方式

##### 小程序内置规则

在业务较为复杂的场景时，项目通常分为多个`bundle`,内置到应用时遵循以下目录结构规则：

```
└──rawfile                          # 应用rawfile目录
    └──spa                          # 多bundle内置目录,支持配置
        ├──spa_main@100000          # 小程序1的bundle
        │   └──spa                  # 一级目录
        │        └──main            # 二级目录
        │             ├──js         # js目录
        │             ├──css        # css目录
        │             ├──static     # 静态资源目录
        │             └──index.html # 首页文件
        └──spa_new@100000           # 小程序2的bundle
            └──spa                  # 一级目录
                 └──new             # 二级目录
                     ├──js          # js目录
                     ├──css         # css目录
                     ├──static      # 静态资源目录
                     └──index.html  # 首页文件
```

以上目录结构的解释说明

1. rawfile 目录下的 spa，为多 bundle 的内置目录，容器会在此目录下读取 bundle 加载，支持以下方式配置（该目录要与配置一致）：

```typescript
// src/main/ets/entryability/EntryAbility.ets文件中写入
windowStage.loadContent('pages/Index', (err) => {
    // 全局初始化
    TaroHybridManager.init({
      	......
        rawFileName: 'spa',
        diskCacheEnable: true
    })
```

2. bundle 包名称：`一级目录`+`_`+`二级目录`+`@`+`VersionCode`,例如：spa*main@100000，以`@`符分割为两部分：  
   2.1 `@`符分前置: 为 bundle 的打包目录层级，一般为 index.html(首页文件)的 path 路径，用下划线`*`分割,作用是为内置文件路径拦截匹配查找；  
   2.2 VersionCode: 为当前 bundle 版本号，作用为版本控制及磁盘热更新

#### 热更新

##### 整体方案简介

动态下开发代码，在不发布新版本的情况下修复`bug`和发布新功能，绕开应用商店的审核机制，避免长时间审核以及多次被拒绝造成的成本问题，缩短用户取得新版本的流程，改善用户体验。

##### 使用说明

###### `arkts`端配置

热更新配置分为三步，首先需要配置`rawfile`内资源顶层文件夹名称，以壳工程资源为例`rawfile/spa/`，需要配置`spa`名称；其次，需要配置云端资源信息的`url`生成函数，这样当资源需要更新时可以从该地址获取相应信息；

```tsx
// 在src/main/ets/entryability/EntryAbility.ets中
import { TaroHybridManager,LocalMiniInfo,NetworkMiniInfo } from '@hybrid/web-container';

// 请求更新版本的信息和下载路径
function getNeedUpdateNetworkInfos(localVersions: LocalMiniInfo[]): Promise<NetworkMiniInfo[] | undefined> {
  return new Promise((resolve)=>{
    // 使用接口请求服务端的版本信息 NetworkMiniInfo
    let httpRequest = http.createHttp()
    httpRequest.request("http://www.xxx.com",(error:Error,data:http.HttpResponse)=>{
      if(data.result){
        let NetworkMiniInfos:NetworkMiniInfo[]=data.result as NetworkMiniInfo[]
        resolve(NetworkMiniInfos)
      }else{
        console.error(`getNeedUpdateNetworkInfos fail! errMsg ${error}`)
      }

    })
  })
}

export default class EntryAbility extends UIAbility {
    onCreate(want: Want) {
        // ... other code
         TaroHybridManager.startUpdateDiskCacheFromNetwork(this.context.getApplicationContext(),	(localVersions:LocalMiniInfo[])=>getNeedUpdateNetworkInfos(localVersions))
      }
    ......other code
}
```

###### 1、配置位置

热更新的启动位置，一般放在某个页面的`aboutToAppear`或者应用被打开时的`onCreate`中，热更新涉及有`http`请求，尽量减少热更新模块的执行。

###### 2、导入包

需要导入`TaroHybridManager`实例，以及配置热更新模块的参数类型`LocalMiniInfo, NetworkMiniInfo`

```tsx
import { TaroHybridManager, LocalMiniInfo, NetworkMiniInfo } from '@hybrid/web-container'
```

###### 3、热更新初始配置

在执行入口函数前，需要对热更新模块进行配置初始化。`TaroHybridManager.startUpdateDiskCacheFromNetwork`方法接受 2 个参数\*。其中第一个参数为应用的 context，可以直接调用 this.context.getApplicationContext()获取；第二个参数为一个方法，该方法接收 一个参数，为本地热更新资源的信息，返回通过网络请求获取服务端要更新的资源信息。

```tsx
TaroHybridManager.startUpdateDiskCacheFromNetwork(
  this.context.getApplicationContext(),
  (localVersions: LocalMiniInfo[]) => getNeedUpdateNetworkInfos(localVersions)
)
```

##### `js`端配置

**注意：因为该配置实现的方法需要在原生端被调用，所以需要这些方法要在热更新模块启动前进行配置，如果放在热更新启动后，可能无法生效**

热更新模块提供了一个对象，注入到了`js`端，这样用户可以依据业务来决定是否需要更新。

注入到`js`端的方法如下所示：

```tsx
applyUpdate(){}
onCheckForUpdate(listener: (hasUpdate: boolean)=>void){}
onUpdateReady(listener: (updatedPath: string)=>void){}
onUpdateFailed(listener: ()=>void){}
```

用户可以在`js`端通过预先注入的代理对象`native`调用这些方法，用以实现相应的业务，实现例子如下所示：

```ts
const updateManager = Taro.getUpdateManager()
updateManager.onCheckForUpdate(function listener(hasUpdate: boolean) {
  if (!hasUpdate) {
    return
  }
  updateManager.onUpdateReady(function listener(updatedPath: string) {
    updateManager.applyUpdate()
  })
})
updateManager.onUpdateFailed(function listener() {
  console.log('UpdateFailed')
})
```

该例子实现的功能是：调用原生端注入到`js`的的`getUpdateManager`方法，获取`LocalUpdateManagerInstance`实例，通过该实例调用了`onCheckForUpdate`方法，传递了一个参数`listener`，该参数为一个函数，里面包含了业务逻辑。

### 扩展原生 Api

当 Taro API 不满足业务需求时，可以扩展原生 API，实现小程序端调用原生功能。先由原生部分实现 JSBridge 方法，再由小程序部分注册该方法并调用。

#### 原生部分

##### 定义 InjectObject

示例代码如下：

```typescript
// src/main/ets/pages/TaroMethods.ets中定义对象和方法
import { InjectObject } from '@hybrid/web-container/Index'

interface LoginOptions {
  username: string
  password: string
  success: (t: string | null | undefined) => void
}

export const nativeObj: InjectObject = {
  customLogin: (options: LoginOptions) => {
    // 登录...
    options.success('xxx')
  },
}
```

##### 初始化注入 InjectObject

```typescript
// src/main/ets/entryability/EntryAbility.ets
import nativeObj from '../pages/TaroMethods'
TaroHybridManager.init({
  uiAbilityContex: this.context,
  domain: 'https://xxx.xxx.com', // 注意：此处不添加/结尾
  injectNativeMethod: (indexHtmlPath: string, uiAbilityContext: common.UIAbilityContext) => {
    return nativeObj
  },
})
```

##### 注意事项

1. 扩展的方法中只能定义一个参数，上面的例子中我们定义 LoginOptions 接口来封装全部参数。
2. 扩展的方法参数中只要最上层可以包含方法，嵌套的对象中不能包含方法，上面的例子中 LoginOptions 中包含了 success 和 error 方法，如果把 success 和 error 方法放到一个单独的 Callback interface 中就不可行了。

#### 小程序部分

##### 方法声明

通过@window.MethodChannel.jsBridgeMode 装饰器声明方法，具体代码如下：

```typescript
// @proxyClassSign('')
class NativeApi {
  // @ts-ignore
  @window.MethodChannel.jsBridgeMode({ isAsync: true, autoRelease: true })
  customLogin(option: any) {
    return option //这里固定返回option即可
  }
}

const native = new NativeApi()

export default native
```

参数说明：

isAsync：如果参数 option 中定义了回调方法则为 true，否则为 false

autoRelease：如果 option 中有回调方法且回调方法可能会调用多次则设置为 false，否则就为 true

##### 方法调用

```typescript
import { native } from './NativeApi'

native.customLogin({
  username: 'xxx',
  password: 'xxx',
  success: () => {
    console.log('Login success!')
  },
  error: (e) => {
    console.error('Login error.', e)
  },
})
```

### 鸿蒙一多适配指导

#### 鸿蒙折叠屏适配指导

默认情况下，设计尺寸是 750px，Taro 适配不同手机分辨率的方式是等比缩放，在鸿蒙折叠屏展开的状态下，等比放大的效果不满足华为应用商店上架要求。

**建议的适配方案：**

1. 最大放大比例不超过 1.2 倍
2. 宽度不基于 750px 来布局，基于 flex 自适应

最大放大比例不超过 1.1 倍的配置：

```javascript
// 修改config/index.js
export default defineConfig(async (merge, { command, mode }) => {
  const baseConfig = {
    // ....
    h5: {
      // ....
      postcss: {
        pxtransform: {
          enable: true,
          config: {
            baseFontSize: 20,
            maxRootSize: 24, // 最大不超过1.2倍
            minRootSize: 10, // 最小不超过0.5倍
          },
        },
        // ....
      },
    },
    // ....
  }
  // ....
})
```

### 沉浸式适配指导

[鸿蒙官方适配指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/arkts-develop-apply-immersive-effects-0000001820435461-V5#section231547103814)提供了两个种方案：窗口全屏布局方案 及 组件安全区方案

建议使用“窗口全屏布局方案”，默认全屏模式，再处理状态栏及导航条的避让。

**全屏模式下的状态栏的避让：** 通过原生创建一个 SafeArea 组件实现，而不通过 JS 实现

1.在在 src/main/ets/entryability/EntryAbility.ets 的 onWindowStageCreate 中设置全局保存状态栏的安全高度

```javascript
onWindowStageCreate(windowStage: window.WindowStage) {
 	//  设置全局保存状态栏的安全高度
     const systemAvoidArea = windowStage.getMainWindowSync().getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
	const topRectHeight = systemAvoidArea.topRect.height
	AppStorage.setOrCreate('topRectHeight', `${topRectHeight}px`);

    windowStage.loadContent('pages/Index', storage, (err, data) => {
    	...
    }
}
```

2.自定义 SafeArea 组件

```typescript
// 自定义SafeArea组件
@Component
export struct SafeArea {
  @StorageProp('topRectHeight') topRectHeight: string = '0px'

  @BuilderParam child: ()=>void

  build() {
    Column() {
       Row()
         .width('100%')
         .height(this.topRectHeight)
         .backgroundColor(0xFFFFFF)
      Column(){
        this.child()
      }
      .width('100%')
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
  }
}

```

3.在 TaroHybridPage 页面中引用 SafeArea 组件

```tsx
// Taro Hybrid的布局
import {  HostPageState, TaroHybrid } from '@hybrid/web-container';
import { SafeArea } from './SafeArea'

@Entry
@Component
struct TaroHybridPage {
  @State pageState: HostPageState = HostPageState.PageInit;
  onPageShow(): void {
    this.pageState = HostPageState.PageOnShow
  }
  onPageHide(): void {
    this.pageState = HostPageState.PageOnHide
  }
  build() {
    Stack(){
      SafeArea(){
        TaroHybrid({
          indexHtmlPath: 'index.html',
          taroPath: 'pages/index/index',
          pageState: this.pageState
        })
      }
    }
  }
}
```

### Taro.request 请求方式选择（原生/js）

#### 一、Taro.request 原生实现（native 桥接）代码位置：taro/packages/taro-platform-harmony-hybrid/src/api/apis/network/request/index.ts

```typescript
let task!: Taro.RequestTask<any>
const result: ReturnType<typeof Taro.request> = new Promise((resolve, reject) => {
  const upperMethod = method ? method.toUpperCase() : method
  const taskID = native.request({
    url,
    method: upperMethod,
    ...otherOptions,
    success: (res: any) => {
      isFunction(success) && success(res)
      isFunction(complete) && complete(res)
      resolve(res)
    },
    fail: (res: any) => {
      isFunction(fail) && fail(res)
      isFunction(complete) && complete(res)
      reject(res)
    },
  })
  task = judgeUseAxios ? taskID : NativeRequest.getRequestTask(taskID)
}) as any
```

#### 二、Taro.request js 实现（axios）代码位置：taro/packages/taro-platform-harmony-hybrid/src/api/apis/request.ts

```typescript
this.httpRequest = axios.create({
  responseType: responseType || 'text',
  headers: headers,
  timeout: timeout || 2000,
})

// 请求拦截器
this.httpRequest.interceptors.request.use(
  (config) => {
    if (config.enableCache === false) {
      return config
    }
    // 处理缓存
    const cacheData = localStorage.getItem(config.url)
    if (cacheData !== null) {
      let result = cacheData
      if (dataType === 'json') {
        result = JSON.parse(cacheData)
      }
      source.cancel('cache has useful data!!')
      return Promise.resolve({ result })
    }
    return config
  },
  (error) => {
    console.error('error: ', error)
  }
)

// 响应拦截器
this.httpRequest.interceptors.response.use(
  (response) => {
    // 缓存数据
    if (response.config.enableCache === false) {
      localStorage.setItem(response.config.url, JSON.stringify(response.data))
    }
    callbackManager.headersReceived.trigger({
      header: response.headers,
    })
    return response
  },
  (error) => {
    console.error('error: ', error)
  }
)

if (!object) {
  console.error('request error: params illegal')
  return
}

let isFormUrlEncoded = false
for (const key in headers) {
  if (key.toLowerCase() === 'content-type') {
    if (headers[key].toLowerCase().includes('application/x-www-form-urlencoded')) {
      isFormUrlEncoded = true
    }
    break
  }
}

// data为Object类型时，属性的值类型如果是number, request请求时信息会丢失. 故将data转成string类型进行规避
if (data && (isFormUrlEncoded || ['GET', 'OPTIONS', 'DELETE', 'TRACE', 'CONNECT'].includes(method))) {
  const dataArray = []
  for (const key in data) {
    // @ts-ignore
    dataArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  }
  data = dataArray.join('&')
}

// header的属性的值类型如果是number, request请求时信息会丢失. 故将各个属性转成string类型
if (headers) {
  for (const key in headers) {
    headers[key] = `${headers[key]}`
  }
}

this.httpRequest({
  method: method,
  url: url,
  CancelToken: source.token,
  enableCache: enableCache || false,
})
  .then((response) => {
    if (success && !this.abortFlag) {
      let result = response.result
      if (response.config.responseType === 'text') {
        if (dataType === 'text') {
          result = response.data
        } else if (dataType === 'json') {
          result = JSON.parse(response.data)
        } else if (dataType === 'base64') {
          const encodeData = encodeURIComponent(response.data)
          result = btoa(encodeData)
        } else if (dataType === 'arraybuffer') {
          result = new TextEncoder().encode(response.data).buffer
        } else {
          console.error('Unsupported dataType!!')
        }
      } else if (response.config.responseType === 'arraybuffer') {
        result = response.data
      } else {
        console.error('Unsupported dataType!!: ', response.config.responseType)
      }
      const res = {
        data: result,
        statusCode: response.status,
        header: response.headers,
        cookies: response.cookies ? [response.cookies] : [],
        errMsg: 'request:ok',
      }
      this.result = res
      success(res)
    }
  })
  .catch((err) => {
    console.error('request error: ' + JSON.stringify(err))
    if (fail && !this.abortFlag) {
      // eslint-disable-next-line no-console
      const res = { errMsg: errMsgMap.has(err.code) ? errMsgMap.get(err.code) : `${JSON.stringify(err)}` }
      this.result = res
      fail(res)
    }
  })
  .finally(() => {
    if (complete && !this.abortFlag) {
      complete(this.result)
    }
    if (this.httpRequest) {
      source.cancel('requestTask cancelled by the user!')
    }
  })
```

#### 三、原生、js 方式转换实现

```typescript
// 调用时通过第二个参数控制是原生还是js实现，默认为原生实现方式
export function request (options: any, useNativeRequest: boolean = true) {
  return useNativeRequest ? nativeReuqest(options) : h5Request(options)
}

// 具体使用方式
 const task = Taro.request({
      ...data,
      success: (res) => {
       ...
      },
      fail: (res) => {
        ...
      },
      complete: (res) => {
        ...
      },
    },true/false)  //第二个参数可忽略

```

####

### 同层渲染

`@hybrid/web-container` 提供 `sameLayerManager.registerNativeComponentBuilders` 方法来注册同层渲染组件。

**参数说明：**

| 参数名称      | 类型                          | 描述                                           | 必填 |
| ------------- | ----------------------------- | ---------------------------------------------- | ---- |
| componentName | string                        | 对应 embed 标签 type 属性，去掉 `native/` 前缀 | 是   |
| builder       | (...args: ESObject[]) => void | 使用 `@Builder` 注解的原生组件 builder 函数    | 是   |

**使用方法：**

- 壳工程中，注册自定义组件：

```typescript
import { sameLayerManager } from '@hybrid/web-container'
import { NativeVideoBuilder } from '../pages/HosVideo' //具体路径根据项目实现路径引入

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    sameLayerManager.registerNativeComponentBuilders('hos-video', NativeVideoBuilder)
  }
  // ...
}
```

- Video 自定义组件实现参考

```typescript
import { sameLayerManager } from '@hybrid/web-container';

@Observed
export class VideoParams {
  width: number // 组件宽度
  height: number // 组件高度
  componentId: string // 组件ID
  src: string // 要播放视频的资源地址
  controls?: boolean // 是否显示播放控件
  muted?: boolean // 是否静音
  loop?: boolean
  autoPlay?: boolean
  onPlay?: (res?: string) => void
  onPause?: (res?: string) => void

  constructor() {
    this.width = 0;
    this.height = 0;
    this.componentId = '';
    this.src = '';
  }
}

@Component
export struct NativeVideo {
  @ObjectLink params: VideoParams
  videoController: VideoController = new VideoController();

  build() {
    Column() {
      Video({
        src: this.params.src,
        controller: this.videoController
      })
        .objectFit(ImageFit.Fill)
        .autoPlay(this.params.autoPlay ?? true)
        .muted(this.params.muted ?? false)
        .loop(this.params.loop ?? false)
        .controls(this.params.controls ?? true)
        .onClick((event) => {
          console.log('NativeEmbed video onClick.')
        })
        .onStart(() => {
          console.log('NativeEmbed video onPlay.', this.params.height)
          const callJsOnPlay: Function | undefined = (sameLayerManager.getSameLayerArgs(this.params.componentId) as VideoParams)?.onPlay
          callJsOnPlay && callJsOnPlay('Native Video playing.')
        })
        .onPause(() => {
          console.log('NativeEmbed video onPause.')
          const callJsOnPause: Function | undefined = (sameLayerManager.getSameLayerArgs(this.params.componentId) as VideoParams)?.onPause
          callJsOnPause && callJsOnPause('Native Video paused.')
        })
    }
    .width(this.params.width)
    .height(this.params.height)
  }
}

@Builder
export function NativeVideoBuilder(params: VideoParams) {
  NativeVideo({ params: params })
    .backgroundColor(Color.Green)
}

```

- 前端代码中，使用 `react` 框架实现的代码如下：

  1. sameLayerRender 实现如下

     ```ts
     // @ts-ignore
     const asyncAndNotRelease =
       (window.MethodChannel && window.MethodChannel.jsBridgeMode({ isAsync: true, autoRelease: false })) ||
       ((target) => target)

     class SameLayerRender {
       @asyncAndNotRelease
       transferSameLayerArgs(_options: object): void {}
     }
     const sameLayerRender = new SameLayerRender()
     export default sameLayerRender
     ```

  2. HosVideo.ts 组件实现如下

     ```tsx
     import React from 'react'
     import classNames from 'classnames'
     import sameLayerRender from './SameLayerRender'

     interface IProps extends React.HTMLAttributes<HTMLDivElement> {
       src: string
       controls?: boolean
       autoplay?: boolean
       loop?: boolean
       muted?: boolean
       onPlay?: (res: any) => void
       onPause?: (res: any) => void
     }

     export default class HosVideo extends React.Component<IProps> {
       // eslint-disable-next-line react/sort-comp
       private componentId: string

       constructor(props: IProps | Readonly<IProps>) {
         super(props)
         this.componentId = `video_${Math.floor(Math.random() * 100000)}_${Date.now()}`
       }

       componentDidMount() {
         this.transferVideoProps()
       }

       componentDidUpdate(_prevProps: IProps, _prevState: any) {
         // 组件更新时重新传输数据
         this.transferVideoProps()
       }

       transferVideoProps() {
         // 同层渲染video组件数据
         const { src, controls, autoplay, loop, muted, onPlay, onPause } = this.props

         const properties = {
           componentId: this.componentId,
           src: src,
           controls: controls,
           autoPlay: autoplay,
           loop: loop,
           muted: muted,
           onPlay: onPlay,
           onPause: onPause,
           width: '300px',
           height: '300px',
         }
         sameLayerRender.transferSameLayerArgs(properties)
       }

       render() {
         const { style, className } = this.props

         return (
           <div style={style} className={className ? className : classNames('taro-video-container')}>
             <embed
               className="taro-video-video"
               id={this.componentId}
               type="native/hos-video"
               style={{ width: '100%', height: '100%', objectPosition: 'inherit', display: 'block' }}
             />
           </div>
         )
       }
     }
     ```

  3. 具体使用方式

     ```tsx
     import { View, Button } from '@tarojs/components'
     import './index.scss'
     import HosVideo from '../nativeCompinents/hosvideodemo'

     export default function Index() {
       return (
         <View className="index">
           <HosVideo style={{ height: '300px', marginTop: '100px' }} src="https://xxx/xxx.mp4"></HosVideo>
         </View>
       )
     }
     ```

## FAQ

### 原生导航条影响 Fixed 布局

**原因：** Web 容器与原生导航栏之间是层叠布局，为了不影响 H5 页面的内容展示，Taro Harmony 给每个 Page 设置了一个 padding-top 值，其值来自原生注入的一个变量

```typescript
// Web组件加载时，原生会给js侧注入的代码：
var navigationHeight = ${this.navigationBarHeight};
```

当存在原生导航栏时，fixed 布局需要添加一个 top 值，其值为 window.navigationHeight，由原生测注入，taro 自动设置

[Web调试devtools配置]: https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/web/web-debugging-with-devtools.md

### 页面跳转后发现顶部多了一个 css 样式

**F:** 在打开 Taro 项目后，从 pageA 页面跳转到其他页面 ，发现跳转后页面增加了一个 css 样式，影响了页面的顶部布局样式。css 设置示例如下：

```css
.taro_router .taro_page.taro_navigation_page{
    padding-top:100px;
}
```

**Q:** 这个问题是由 taro 的 router 机制造成；在 pageA 的 index.scss 中为`.taro_router .taro_page.taro_navigation_page`选择器设置某些样式后，当 pageA 页面被触发加载一次后，该样式生效并作用于全局，成为一个全局样式，影响所有页面；

如果希望页面不受`.taro_router .taro_page.taro_navigation_page`选择器样式影响，可以在页面的配置文件 index.config.js 文件中将 navigationStyle 属性值设置为 custom，这样配置后，该页面不在受到 navigation 公共样式的影响，示例如下：

```javascript
export default {
  navigationStyle: 'custom',
}
```

不推荐使用`.taro_router .taro_page.taro_navigation_page`选择器设置样式

---

## docs/harmony/index.md

---
title: 初始化流程和结构介绍
---

:::info
Taro v4.1.0+ 开始支持
:::

随着鸿蒙系统的日渐完善，众多应用厂商都期待着把自家应用移植到鸿蒙平台上。借助 Taro，可以实现快速开发鸿蒙应用、把小程序快速转换为鸿蒙应用等功能。

## 背景阅读

鸿蒙 & OpenHarmony 相关背景知识简介。

### 鸿蒙与 OpenHarmony

> 摘录自 [《关于规范 HarmonyOS 沟通口径的通知》](https://www.google.com/search?q=%E5%85%B3%E4%BA%8E%E8%A7%84%E8%8C%83HarmonyOS%E6%B2%9F%E9%80%9A%E5%8F%A3%E5%BE%84%E7%9A%84%E9%80%9A%E7%9F%A5&oq=%E5%85%B3%E4%BA%8E%E8%A7%84%E8%8C%83HarmonyOS%E6%B2%9F%E9%80%9A%E5%8F%A3%E5%BE%84%E7%9A%84%E9%80%9A%E7%9F%A5&aqs=chrome..69i57.670j0j4&sourceid=chrome&ie=UTF-8)
>
> 为方便描述，本文档把这三者统一称作“鸿蒙”

1、**鸿蒙操作系统**是华为研发的智能终端操作系统。

2、华为已把该智能终端操作系统的基础能力全部捐献给开放原子开源基金会，由开放原子开源基金会整合其他参与者的贡献，形成 [OpenHarmony](https://gitee.com/openharmony) 开源项目，最新的版本为 OpenHarmony 4.0+。

3、[HarmonyOS](https://developer.harmonyos.com/) 是华为基于开源项目 OpenHarmony 开发的商用版本。

### 鸿蒙应用开发导读

建议开发前首先阅读 [《鸿蒙应用开发导读》](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-with-ets-stage) 部分，有助于对鸿蒙整体结构有一定了解。

鸿蒙应用程序包结构（Stage 模型）：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230821150835.75065627467290629243023494212142:50001231000000:2800:5EB57405CFA7AEA5D52F21AFDFF9B174880C6BB02D98FC4CB34C490B82D97AC1.png?needInitFileName=true?needInitFileName=true)

### 鸿蒙与小程序

鸿蒙 Stage 模型支持使用 ArkTS 来声明式地开发 UI（ArkUI）。ArkTS 是 HarmonyOS 优选的主力应用开发语言。ArkTS 围绕应用开发 [TypeScript](https://www.typescriptlang.org/)（简称 TS）生态基础上做了进一步扩展，继承了 TS 的所有特性，是 TS 的超集。

#### 鸿蒙 ArkUI 与小程序写法的主要异同

1. 开发语言

鸿蒙的开发语言 ArkTS 在语法方面由于是 TypeScript 的超集，因此能完美兼容小程序上的 JavaScript/TypeScript 语法。

2. 渲染 UI

小程序可以通过 `template` 模板来动态地拼接和生成页面的 UI，而鸿蒙可以通过系统提供的自定义组件来递归地渲染出页面 UI。

## 配置鸿蒙环境

首先要准备鸿蒙运行所需的环境，根据参考文档提示的步骤在 HUAWEI DevEco Studio 的 IDE 中完成 MyApplication 项目的创建，熟悉鸿蒙开发者工具的预览查看等功能。

### 1. 安装、配置 DevEco Studio

（1）登录  [HarmonysOS 应用开发门户](https://developer.harmonyos.com/cn/home)，点击右上角注册按钮，注册开发者帐号。

（2）进入  [HUAWEI DevEco Studio 下载中心](https://developer.huawei.com/consumer/cn/deveco-studio/)，点击立即下载按钮，下载最新版本的 DevEco Studio IDE。

### 2. 创建 Harmony 主项目

（1）创建新项目，选择需要开发的设备，根据应用配置所需的信息，点击 Finish 按钮，一个新的项目就被创建出来了。

（2）关注目录 `entry/src/main/ets/pages/Index.ets` 下面的文件，熟悉文件结构。`pages` 目录下为页面入口，新建项目的页面目录会包含若干个 `.ets` 文件，应用级配置信息位于 `build-profile.json5`，当前的模块信息 、编译信息配置项位于 `entry/build-profile.json5`。[项目结构详情](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-structure-stage)。

### 3. 预览 & 调试

（1）DevEco Studio 支持下述方式查看运行效果，链接到鸿蒙官网查看具体步骤

a. [使用预览器 previewer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkts-js) 该功能与真机效果可能存在差异，主要用于 UI 样式的预览，主要用于预览 ArkTS 侧经过 @Component 修饰的 UI 组件，在 Taro For Harmony 的开发中无法使用，可以暂时忽略。

b. [使用模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator) 使用 DevEco Studio 提供的模拟器功能，即可正常调试 Taro 打包出来的鸿蒙应用程序，除了无法使用 IDE 提供的 Profiler 来测量性能外，其余功能和真机并无太大差异，推荐没有真机的开发者优先考虑这种调试方式。

c. [使用本地真机](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device) 用户真机与电脑相连，打开开发者模式，即可在真机看到效果，这里需要注意的是，真机需要使用纯鸿蒙系统的手机，能够体验到完整的鸿蒙系统功能。

(2) DevEco Studio 真机进行调试

链接上真机后，选择好对应的入口模块，在项目代码中打上断点等信息，在编译器中启动调试即可。

![示例图](https://img20.360buyimg.com/img/jfs/t1/102571/34/33232/150214/6582b637F9d4860f7/4cf399a59a316520.png)

### 相关阅读

- [《DevEco Studio 使用指南》](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)
- [《构建第一个 ArkTS 应用（stage 模型）》](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-with-ets-stage)

---

## docs/harmony/meta.md

---
title: 元服务
---

### 元服务

#### 转换为 ASCF 元服务

##### ASCF 介绍
ASCF（Application Service Component Framework）是面向鸿蒙生态的元服务开发框架，提供轻量化服务能力：
- **包体更小**：最大包体限制10MB（小程序为20MB）
- **启动更快**：毫秒级服务卡片加载
- **深度集成**：支持系统级服务卡片、语音唤醒等鸿蒙特性

##### 开发前准备
1. **注册账号**：
   - 访问 [ASCF开发者平台](https://developer.ascf.harmonyos.com) 注册账号
   - 完成企业实名认证（个人开发者仅支持测试环境）

2. **环境配置**：
   ```bash
   # 安装ASCF编译插件
   npm install @tarojs/plugin-platform-ascf --save-dev

##### 开发第一个 ASCF 元服务

1. **创建Taro项目**：
    ```bash
    taro init my-ascf-app

2. **添加元服务页面**：

```diff
export default function Index() {
  return (
    <View className="container">
      <Text>Hello ASCF 元服务!</Text>
      <Button onClick={() => ascf.navigateTo({ url: '/pages/detail' })}>
        查看详情
      </Button>
    </View>
  )
}
```

3. **启动开发模式**：
    ```bash
    taro build --type ascf --watch

##### 修改编译配置

在项目根目录创建 project.ascf.json：
```diff
{
  "appid": "YOUR_ASCF_APPID",
  "projectname": "我的元服务",
  "minPlatformVersion": "3.0.0",
  "serviceCards": [{
    "name": "mainCard",
    "src": "/pages/index"
  }]
}
```

##### 编译运行

1. **完整编译**：
    ```bash
    taro build --type ascf

 
 2. **输出目录**：   
    ```bash
    dist/ascf

##### 预览&调试
1.使用 ASCF DevTools 导入 dist/ascf 目录

2.扫码预览服务卡片效果：

3.真机调试命令：
    ```bash
    ascf debug --device YOUR_DEVICE_ID

#### 注意事项

##### 与小程序的差异

| 特性         | 小程序               |   ASCF元服务    | 说明                |
| -------------- | -----------------| --------------|------------------|
| 包体大小      | <= 20MB           |      <= 10MB    |需精简资源 |
| 启动方式      | 扫码/搜索          |    服务卡片/语音  |需配置serviceCards  |
| 路由层级      | 无限制             |    最多5级       |避免深层嵌套      |
| 全局样式      | 支持               |    部分支持       |需添加-ascf-前缀 |



##### 常见问题

1. **样式兼容问题**：
        ```bash
    .container {
        -ascf-flex-direction: column;
    }

2. **API调用差异**：
    ```diff

    // 小程序方式 (不支持)
    wx.request({...})

    // ASCF方式
    ascf.request({...})

    ```
###### 不支持云开发

当前版本无法使用微信云开发/支付宝云能力，需自建后端服务

###### 不支持插件

无法直接使用小程序插件，需重写为ASCF组件：
    ```diff
    export default function CustomPicker({ options }) {
      return (
        <ascf-picker options={options} />
     )
 }
    ```

###### 不支持独立分包
所有代码必须打包到主包中，需优化首包体积：
    ```bash
    # 分析包体积
    npx taro asc analyze --type ascf


### HarmonyOS 应用

鸿蒙与小程序

鸿蒙 Stage 模型支持使用 ArkTS 来声明式地开发 UI（ArkUI）。ArkTS 是 HarmonyOS 优选的主力应用开发语言。ArkTS 围绕应用开发 TypeScript（简称 TS）生态基础上做了进一步扩展，继承了 TS 的所有特性，是 TS 的超集。

鸿蒙 ArkUI 与小程序写法的主要异同

1.开发语言
鸿蒙的开发语言 ArkTS 在语法方面由于是 TypeScript 的超集，因此能完美兼容小程序上的 JavaScript/TypeScript 语法。

2.渲染 UI
小程序可以通过 template 模板来动态地拼接和生成页面的 UI，而鸿蒙可以通过系统提供的自定义组件来递归地渲染出页面 UI。

配置鸿蒙环境

首先要准备鸿蒙运行所需的环境，根据参考文档提示的步骤在 HUAWEI DevEco Studio 的 IDE 中完成 MyApplication 项目的创建，熟悉鸿蒙开发者工具的预览查看等功能。

1. 安装、配置 DevEco Studio

（1）登录  HarmonysOS 应用开发门户，点击右上角注册按钮，注册开发者帐号。

（2）进入  HUAWEI DevEco Studio 下载中心，点击立即下载按钮，下载最新版本的 DevEco Studio IDE。

2. 创建 Harmony 主项目

（1）创建新项目，选择需要开发的设备，根据应用配置所需的信息，点击 Finish 按钮，一个新的项目就被创建出来了。

（2）关注目录 entry/src/main/ets/pages/Index.ets 下面的文件，熟悉文件结构。pages 目录下为页面入口，新建项目的页面目录会包含若干个 .ets 文件，应用级配置信息位于 build-profile.json5，当前的模块信息 、编译信息配置项位于 entry/build-profile.json5。项目结构详情。

3. 预览 & 调试

（1）DevEco Studio 支持下述方式查看运行效果，链接到鸿蒙官网查看具体步骤

a. 使用预览器 previewer 该功能与真机效果可能存在差异，主要用于 UI 样式的预览，主要用于预览 ArkTS 侧经过 @Component 修饰的 UI 组件，在 Taro For Harmony 的开发中无法使用，可以暂时忽略。

b. 使用模拟器 使用 DevEco Studio 提供的模拟器功能，即可正常调试 Taro 打包出来的鸿蒙应用程序，除了无法使用 IDE 提供的 Profiler 来测量性能外，其余功能和真机并无太大差异，推荐没有真机的开发者优先考虑这种调试方式。

c. 使用本地真机 用户真机与电脑相连，打开开发者模式，即可在真机看到效果，这里需要注意的是，真机需要使用纯鸿蒙系统的手机，能够体验到完整的鸿蒙系统功能。

(2) DevEco Studio 真机进行调试

链接上真机后，选择好对应的入口模块，在项目代码中打上断点等信息，在编译器中启动调试即可。

---

## docs/harmony/troubleshooting.md

---
title: 常见问题
---

### **ERROR: Failed to get ModuleInfo properties 'meta.pkgPath'**

本地可能存在部分混淆导致 IDE 无法正确解析依赖，需要检查 `build-profile.json5`、`obfuscation-rules.txt` 等文件中是否开启混淆配置，需要关闭后清理 IDE 缓存重新编译。

```diff
- -enable-property-obfuscation
- -enable-toplevel-obfuscation
- -enable-filename-obfuscation
- -enable-export-obfuscation
```

### **ERROR: Cannot resolved import statement**

本地执行 library 编译时，启用 `useNormalizedOHMUrl` 配置会导致外部依赖无法解析，建议在 library 模块中使用 `useNormalizedOHMUrl: false` 或者移除该配置。

### **ERROR: Duplicated files found in module default**

不使用核心库切换到使用核心库时可能会出现该问题，需要清理 build-profile.json5 文件中关于 so 包的配置项。

```diff
{
  "apiType": "stageMode",
  "buildOption": {
-    "externalNativeOptions": {
-      "path": "./src/main/cpp/CMakeLists.txt",
-      "arguments": "-DCMAKE_JOB_POOL_COMPILE:STRING=compile -DCMAKE_JOB_POOL_LINK:STRING=link -DCMAKE_JOB_POOLS:STRING=compile=8;link=8",
-      "cppFlags": "",
-      "abiFilters": [
-        "arm64-v8a"
-      ]
-    }
  },
  ...
}
```

---

