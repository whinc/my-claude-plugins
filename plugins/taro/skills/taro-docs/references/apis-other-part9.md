## docs/apis/taro.extend/interceptorify.md

---
title: Taro.interceptorify(promiseifyApi)
sidebar_label: interceptorify
---

包裹 promiseify api 的洋葱圈模型

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
<T, R>(promiseifyApi: promiseifyApi<T, R>) => Interceptorify<T, R>
```

## 参数

### promiseifyApi

```tsx
(requestParams: T) => Promise<R>
```

| 参数 | 类型 |
| --- | --- |
| requestParams | `T` |

### InterceptorifyChain

| 参数 | 类型 |
| --- | --- |
| requestParams | `T` |
| proceed | `promiseifyApi<T, R>` |

### InterceptorifyInterceptor

```tsx
(chain: InterceptorifyChain<T, R>) => Promise<R>
```

| 参数 | 类型 |
| --- | --- |
| chain | `InterceptorifyChain<T, R>` |

### Interceptorify

#### request

```tsx
(requestParams: T) => Promise<R>
```

| 参数 | 类型 |
| --- | --- |
| requestParams | `T` |

#### addInterceptor

```tsx
(interceptor: InterceptorifyInterceptor<T, R>) => void
```

| 参数 | 类型 |
| --- | --- |
| interceptor | `InterceptorifyInterceptor<T, R>` |

#### cleanInterceptors

```tsx
() => void
```

## 示例代码

### 示例 1

```tsx
// 创建实例
const modalInterceptorify = interceptorify(taro.showModal)
// 添加拦截器
modalInterceptorify.addInterceptor(async function (chain) {
  const res = await chain.proceed({
    ...chain.requestParams,
    title: 'interceptor1'
  })
  return res
})
modalInterceptorify.addInterceptor(async function (chain) {
  const res = await chain.proceed({
    ...chain.requestParams,
    content: 'interceptor2'
  })
  return res
})
// 使用
modalInterceptorify.request({})
```

### 示例 2

```tsx
// 创建实例
const fetchDataInterceptorify = interceptorify(taro.request)
// 添加拦截器
fetchDataInterceptorify.addInterceptor(async function (chain) {
  taro.showLoading({
    title: 'Loading...'
  })
  const res = await chain.proceed(chain.requestParams)
  taro.hideLoading()
  return res
})
fetchDataInterceptorify.addInterceptor(async function (chain) {
  const params = chain.requestParams
  const res = await chain.proceed({
    url: 'http://httpbin.org' + params.url,
  })
  return res.data
})
// 使用
fetchDataInterceptorify.request({
  url: '/ip'
}).then((res) => {
  // log my ip
  console.log(res.origin)
})
```

---

## docs/apis/taro.extend/pxTransform.md

---
title: Taro.pxTransform(size)
sidebar_label: pxTransform
---

尺寸转换

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(size: number) => string
```

## 参数

| 参数 | 类型 |
| --- | --- |
| size | `number` |

---

## docs/apis/taro.extend/requirePlugin.md

---
title: requirePlugin
sidebar_label: requirePlugin
---

小程序引用插件 JS 接口

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
{ (pluginName: string): any; (pluginName: string, success?: (mod: any) => any, error?: (e: { mod: any; errMsg: string; }) => any): any; async?: (pluginName: string) => Promise<any>; }
```

## 参数

| 参数 | 类型 |
| --- | --- |
| pluginName | `string` |

---

## docs/apis/taro.extend/setGlobalDataPlugin.md

---
title: setGlobalDataPlugin
sidebar_label: setGlobalDataPlugin
---

Vue3 插件，用于设置 `getApp()` 中的全局变量

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
Plugin
```

## 参数

### Plugin

Vue3 插件，用于设置 `getApp()` 中的全局变量

#### install

```tsx
(app: any, data: any) => void
```

## 示例代码

```js
// 使用插件
const App = createApp(...)
App.use(setGlobalDataPlugin, {
  xxx: 999
})
// 获取全局变量
Taro.getApp().xxx
```

---

## docs/apis/taro.hooks/useAddToFavorites.md

---
title: Taro.useAddToFavorites(callback)
sidebar_label: useAddToFavorites
---

用户点击右上角菜单“收藏”按钮时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: (payload: AddToFavoritesObject) => AddToFavoritesReturnObject) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(payload: AddToFavoritesObject) => AddToFavoritesReturnObject` |

---

## docs/apis/taro.hooks/useDidHide.md

---
title: Taro.useDidHide(callback)
sidebar_label: useDidHide
---

页面隐藏时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/useDidShow.md

---
title: Taro.useDidShow(callback)
sidebar_label: useDidShow
---

页面展示时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (options?: getLaunchOptionsSync.LaunchOptions) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(options?: getLaunchOptionsSync.LaunchOptions) => void` |

---

## docs/apis/taro.hooks/useError.md

---
title: Taro.useError(callback)
sidebar_label: useError
---

小程序发生脚本错误或 API 调用报错时触发的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (error: string) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(error: string) => void` |

---

## docs/apis/taro.hooks/useLaunch.md

---
title: Taro.useLaunch(callback)
sidebar_label: useLaunch
---

小程序初始化完成时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (options: getLaunchOptionsSync.LaunchOptions) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(options: getLaunchOptionsSync.LaunchOptions) => void` |

---

## docs/apis/taro.hooks/useLoad.md

---
title: Taro.useLoad(callback)
sidebar_label: useLoad
---

页面加载完成时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
<T extends {} = Record<string, any>>(callback: (param: T) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `T` |

---

## docs/apis/taro.hooks/useOptionMenuClick.md

---
title: Taro.useOptionMenuClick(callback)
sidebar_label: useOptionMenuClick
---

导航栏的额外图标被点击时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/usePageNotFound.md

---
title: Taro.usePageNotFound(callback)
sidebar_label: usePageNotFound
---

小程序要打开的页面不存在时触发的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 多页面模式不支持该方法

## 类型

```tsx
(callback: (res: { [key: string]: any; path: string; query: Record<any, any>; isEntryPage: boolean; }) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(res: { [key: string]: any; path: string; query: Record<any, any>; isEntryPage: boolean; }) => void` |

---

## docs/apis/taro.hooks/usePageScroll.md

---
title: Taro.usePageScroll(callback)
sidebar_label: usePageScroll
---

页面滚动时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (payload: PageScrollObject) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(payload: PageScrollObject) => void` |

---

## docs/apis/taro.hooks/usePullDownRefresh.md

---
title: Taro.usePullDownRefresh(callback)
sidebar_label: usePullDownRefresh
---

下拉刷新时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/usePullIntercept.md

---
title: Taro.usePullIntercept(callback)
sidebar_label: usePullIntercept
---

下拉中断时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/useReachBottom.md

---
title: Taro.useReachBottom(callback)
sidebar_label: useReachBottom
---

上拉触底时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/useReady.md

---
title: Taro.useReady(callback)
sidebar_label: useReady
---

页面初次渲染完成的回调。
此时页面已经准备妥当，可以和视图层进行交互。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/useResize.md

---
title: Taro.useResize(callback)
sidebar_label: useResize
---

页面尺寸改变时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (payload: PageResizeObject) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(payload: PageResizeObject) => void` |

---

## docs/apis/taro.hooks/useRouter.md

---
title: Taro.useRouter(dynamic)
sidebar_label: useRouter
---

获取当前路由参数。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
<TParams extends Partial<Record<string, string>> = Partial<Record<string, string>>>(dynamic?: boolean) => RouterInfo<TParams>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| dynamic | `TParams` |

---

## docs/apis/taro.hooks/useSaveExitState.md

---
title: Taro.useSaveExitState(callback)
sidebar_label: useSaveExitState
---

页面销毁前保留状态回调

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: () => { data: Record<any, any>; expireTimeStamp?: number; }) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => { data: Record<any, any>; expireTimeStamp?: number; }` |

---

## docs/apis/taro.hooks/useShareAppMessage.md

---
title: Taro.useShareAppMessage(callback)
sidebar_label: useShareAppMessage
---

页面转发时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: (payload: ShareAppMessageObject) => ShareAppMessageReturn) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(payload: ShareAppMessageObject) => ShareAppMessageReturn` |

---

## docs/apis/taro.hooks/useShareTimeline.md

---
title: Taro.useShareTimeline(callback)
sidebar_label: useShareTimeline
---

用户点击右上角菜单“分享到朋友圈”按钮时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: () => ShareTimelineReturnObject) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => ShareTimelineReturnObject` |

---

## docs/apis/taro.hooks/useTabItemTap.md

---
title: Taro.useTabItemTap(callback)
sidebar_label: useTabItemTap
---

当前是 tab 页时，tab 被点击时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (payload: TabItemTapObject) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(payload: TabItemTapObject) => void` |

---

## docs/apis/taro.hooks/useTitleClick.md

---
title: Taro.useTitleClick(callback)
sidebar_label: useTitleClick
---

导航栏的标题被点击时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/taro.hooks/useUnhandledRejection.md

---
title: Taro.useUnhandledRejection(callback)
sidebar_label: useUnhandledRejection
---

小程序有未处理的 Promise reject 时触发。也可以使用 Taro.onUnhandledRejection 绑定监听。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (error: { reason: Error; promise: Promise<Error>; }) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(error: { reason: Error; promise: Promise<Error>; }) => void` |

---

## docs/apis/taro.hooks/useUnload.md

---
title: Taro.useUnload(callback)
sidebar_label: useUnload
---

页面卸载时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: () => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `() => void` |

---

## docs/apis/worker/createWorker.md

---
title: Taro.createWorker(scriptPath)
sidebar_label: createWorker
---

创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate](/docs/apis/worker/#terminate)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html)

## 类型

```tsx
(scriptPath: string) => Worker
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scriptPath | `string` | worker 入口文件的**绝对路径** |

## 示例代码

```tsx
const worker = Taro.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
  worker.onMessage(function (res) {
  console.log(res)
})
worker.postMessage({
  msg: 'hello worker'
})
worker.terminate()
```

---

## docs/apis/worker/Worker.md

---
title: Worker
sidebar_label: Worker
---

## 方法

### onMessage

监听主线程/Worker 线程向当前线程发送的消息的事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html)

```tsx
(callback: OnMessageCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnMessageCallback` | 主线程/Worker 线程向当前线程发送的消息的事件的回调函数 |

### onProcessKilled

监听 worker 线程被系统回收事件（当 iOS 系统资源紧张时，worker 线程存在被系统回收的可能，开发者可监听此事件并重新创建一个 worker）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onProcessKilled.html)

```tsx
(callback: OnMessageCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnMessageCallback` | worker 线程被系统回收事件的回调函数 |

### postMessage

向主线程/Worker 线程发送的消息。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html)

```tsx
(message: TaroGeneral.IAnyObject) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| message | `TaroGeneral.IAnyObject` | 需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。 |

#### 示例代码

worker 线程中

```tsx
worker.postMessage({
  msg: 'hello from worker'
})
```

主线程中

```tsx
const worker = Taro.createWorker('workers/request/index.js')
worker.postMessage({
  msg: 'hello from main'
})
```

### terminate

结束当前 Worker 线程。仅限在主线程 worker 对象上调用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html)

```tsx
() => void
```

## 参数

### OnMessageCallback

```tsx
(result: OnMessageCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnMessageCallbackResult` |

### OnMessageCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| message | `TaroGeneral.IAnyObject` | 主线程/Worker 线程向当前线程发送的消息 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Worker.onMessage | ✔️ |  |  |  |  |
| Worker.onProcessKilled | ✔️ |  |  |  |  |
| Worker.postMessage | ✔️ |  |  |  |  |
| Worker.terminate | ✔️ |  |  |  |  |

---

## docs/apis/wxml/createIntersectionObserver.md

---
title: Taro.createIntersectionObserver(component, options)
sidebar_label: createIntersectionObserver
---

创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createIntersectionObserver([options])` 来代替。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html)

## 类型

```tsx
(component: TaroGeneral.IAnyObject, options?: Option) => IntersectionObserver
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| component | `TaroGeneral.IAnyObject` | 自定义组件实例 |
| options | `Option` | 选项 |

### Option

选项

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| initialRatio | `number` | 否 | 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。 |
| observeAll | `boolean` | 否 | 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能） |
| thresholds | `number[]` | 否 | 一个数值数组，包含所有阈值。 |

## 示例代码

```tsx
const observer = Taro.createIntersectionObserver(this, { thresholds: [0], observeAll: true })
```

---

## docs/apis/wxml/createMediaQueryObserver.md

---
title: Taro.createMediaQueryObserver()
sidebar_label: createMediaQueryObserver
---

创建并返回一个 MediaQueryObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createMediaQueryObserver()` 来代替。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#Media%20Query)

## 类型

```tsx
() => MediaQueryObserver
```

## 示例代码

```tsx
let createMediaQueryObserver
if (process.env.TARO_ENV === 'weapp') {
   // 小程序没有组件实例，只能获取Page级组件实例
   createMediaQueryObserver = Taro.getCurrentInstance().page.createMediaQueryObserver
} else if (process.env.TARO_ENV === 'h5') {
   createMediaQueryObserver= Taro.createMediaQueryObserver
}
const mediaQueryObserver = createMediaQueryObserver()
```

---

## docs/apis/wxml/createSelectorQuery.md

---
title: Taro.createSelectorQuery()
sidebar_label: createSelectorQuery
---

返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createSelectorQuery()` 来代替。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html)

## 类型

```tsx
() => SelectorQuery
```

## 示例代码

```tsx
const query = Taro.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
  res[0].top       // #the-id节点的上边界坐标
  res[1].scrollTop // 显示区域的竖直滚动位置
})
```

---

## docs/apis/wxml/IntersectionObserver.md

---
title: IntersectionObserver
sidebar_label: IntersectionObserver
---

`IntersectionObserver` 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html)

## 方法

### disconnect

停止监听。回调函数将不再触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html)

```tsx
() => void
```

### observe

指定目标节点并开始监听相交状态变化情况

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html)

```tsx
(targetSelector: string, callback: ObserveCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| targetSelector | `string` | 选择器 |
| callback | `ObserveCallback` | 监听相交状态变化的回调函数 |

### relativeTo

使用选择器指定一个节点，作为参照区域之一。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html)

```tsx
(selector: string, margins?: RelativeToMargins) => IntersectionObserver
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| selector | `string` | 选择器 |
| margins | `RelativeToMargins` | 用来扩展（或收缩）参照节点布局区域的边界 |

### relativeToViewport

指定页面显示区域作为参照区域之一

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html)

```tsx
(margins?: RelativeToViewportMargins) => IntersectionObserver
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| margins | `RelativeToViewportMargins` | 用来扩展（或收缩）参照节点布局区域的边界 |

#### 示例代码

下面的示例代码中，如果目标节点（用选择器 .target-class 指定）进入显示区域以下 100px 时，就会触发回调函数。

```tsx
Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {
  res.intersectionRatio // 相交区域占目标节点的布局区域的比例
  res.intersectionRect // 相交区域
  res.intersectionRect.left // 相交区域的左边界坐标
  res.intersectionRect.top // 相交区域的上边界坐标
  res.intersectionRect.width // 相交区域的宽度
  res.intersectionRect.height // 相交区域的高度
})
```

## 参数

### ObserveCallback

监听相交状态变化的回调函数

```tsx
(result: ObserveCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `ObserveCallbackResult` |

### ObserveCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| errMsg | `string` | 否 | 错误信息，会在找不到对应元素时返回<br />API 支持度: harmony |
| boundingClientRect | `BoundingClientRectResult` | 否 | 目标边界 |
| intersectionRatio | `number` | 否 | 相交比例 |
| intersectionRect | `IntersectionRectResult` | 否 | 相交区域的边界 |
| relativeRect | `RelativeRectResult` | 否 | 参照区域的边界 |
| time | `number` | 否 | 相交检测时的时间戳 |

### RelativeRectResult

参照区域的边界

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bottom | `number` | 下边界 |
| left | `number` | 左边界 |
| right | `number` | 右边界 |
| top | `number` | 上边界 |

### IntersectionRectResult

相交区域的边界

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bottom | `number` | 下边界 |
| height | `number` | 高度 |
| left | `number` | 左边界 |
| right | `number` | 右边界 |
| top | `number` | 上边界 |
| width | `number` | 宽度 |

### BoundingClientRectResult

目标边界

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bottom | `number` | 下边界 |
| height | `number` | 高度 |
| left | `number` | 左边界 |
| right | `number` | 右边界 |
| top | `number` | 上边界 |
| width | `number` | 宽度 |

### RelativeToMargins

用来扩展（或收缩）参照节点布局区域的边界

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| bottom | `number` | 否 | 节点布局区域的下边界 |
| left | `number` | 否 | 节点布局区域的左边界 |
| right | `number` | 否 | 节点布局区域的右边界 |
| top | `number` | 否 | 节点布局区域的上边界 |

### RelativeToViewportMargins

用来扩展（或收缩）参照节点布局区域的边界

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| bottom | `number` | 否 | 节点布局区域的下边界 |
| left | `number` | 否 | 节点布局区域的左边界 |
| right | `number` | 否 | 节点布局区域的右边界 |
| top | `number` | 否 | 节点布局区域的上边界 |

## API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony | Harmony hybrid | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| IntersectionObserver.disconnect | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| IntersectionObserver.observe | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| IntersectionObserver.relativeTo | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |
| IntersectionObserver.relativeToViewport | ✔️ | ✔️ | ✔️ |  |  | ✔️ | ✔️ |

---

## docs/apis/wxml/MediaQueryObserver.md

---
title: MediaQueryObserver
sidebar_label: MediaQueryObserver
---

`MediaQueryObserver` 对象，用于监听页面 media query 状态的变化，如界面的长宽是不是在某个指定的范围内。

## 方法

### observe

开始监听页面 media query 变化情况

```tsx
(descriptor: descriptor, callback: observeCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| descriptor | `descriptor` |
| callback | `observeCallback` |

### disconnect

停止监听。回调函数将不再触发

```tsx
() => void
```

## 参数

### descriptor

media query 描述符

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| minWidth | `number` | 页面最小宽度 (单位: px) |
| maxWidth | `number` | 页面最大宽度 (单位: px) |
| width | `number` | 页面宽度 (单位: px) |
| minHeight | `number` | 页面最小高度 (单位: px) |
| maxHeight | `number` | 页面最大高度（px 为单位） |
| height | `number` | 页面高度（px 为单位） |
| orientation | "landscape" or "portrait" | 屏幕方向 |

### observeCallback

监听 media query 状态变化的回调函数

```tsx
(res: { matches: boolean; }) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `{ matches: boolean; }` |

---

