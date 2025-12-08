## docs/apis/storage/cache-manager/CacheManager.md

---
title: CacheManager
sidebar_label: CacheManager
---

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mode | `keyof Mode` | 当前缓存模式 |
| origin | `string` | 全局 origin |
| maxAge | `number` | 全局缓存有效时间 |
| state | `keyof State` | 当前缓存管理器状态 |

### addRule

添加规则

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.addRule.html)

```tsx
(option: AddRuleOption) => string
```

| 参数 | 类型 |
| --- | --- |
| option | `AddRuleOption` |

#### 示例代码

```tsx
const ruleId = cacheManager.addRule({
  id: 'haha-rule',
  method: 'GET',
  url: '/haha',
  maxAge: 123455,
  dataSchema: [
    // data 字段的匹配，默认为空，表示不匹配
    // 类型可以是：string、number、boolean、null、object、any（表示任意类型均可），以及这些类型的数组表示方式
    {name: 'aaa', schema: {type: 'string'}}, // 类型为 string
    {name: 'bbb', schema: [{type: 'number'}, {type: 'string'}]}, // 类型为 number, string
    {name: 'ccc', schema: {type: 'string', value: 'abc'}}, // 值为 abc
    {name: 'ddd', schema: {type: 'string', value: /(abc|cba)/ig}}, // 值符合该正则匹配，如果该值不是字符串类型，则会被尝试转成字符串后再进行比较
    {name: 'ddd', schema: {type: 'string', value: val => val === '123'}}, // 传入函数来校验值
    {name: 'eee', schema: {type: 'object', value: [{ // 类型为对象，则通过嵌套的方式来逐层校验
      name: 'aaa', schema: {type: 'string'},
      // ...
      // 嵌套 dataSchema，同上面的方式一样来匹配嵌套的对象
    }]}},
    {name: 'fff', schema: {type: 'string[]'}}, // 类型为 string 数组
    {name: 'ggg', schema: {type: 'any'}}, // 类型为任意类型
    {name: 'hhh', schema: {type: 'any[]'}}, // 类型为任意类型的数组
  ]
})
```

### addRules

批量添加规则

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.addRules.html)

```tsx
(option: AddRulesOption) => string[]
```

| 参数 | 类型 |
| --- | --- |
| option | `AddRulesOption` |

### clearCaches

清空所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.clearCaches.html)

```tsx
() => void
```

### clearRules

清空所有规则，同时会删除对应规则下所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.clearRules.html)

```tsx
() => void
```

### deleteCache

删除缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteCache.html)

```tsx
(id: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 缓存 id |

### deleteCaches

批量删除缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteCaches.html)

```tsx
(ids: string[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ids | `string[]` | 缓存 id 列表 |

### deleteRule

删除规则，同时会删除对应规则下所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteRule.html)

```tsx
(id: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 规则 id |

### deleteRules

批量删除规则，同时会删除对应规则下所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteRules.html)

```tsx
(ids: string[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ids | `string[]` | 规则 id 列表 |

### match

匹配命中的缓存规则，一般需要和 request 事件搭配使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.match.html)

```tsx
(option: MatchOption) => MatchResult
```

| 参数 | 类型 |
| --- | --- |
| option | `MatchOption` |

### off

取消事件监听

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.off.html)

```tsx
(eventName: string, handler: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| handler | `TaroGeneral.EventCallback` | 事件监听函数 |

### on

监听事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.on.html)

```tsx
(eventName: keyof OnEventName, handler: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `keyof OnEventName` | 事件名称 |
| handler | `TaroGeneral.EventCallback` | 事件监听函数 |

### start

开启缓存，仅在 mode 为 none 时生效，调用后缓存管理器的 state 会置为 1

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.start.html)

```tsx
() => void
```

### stop

关闭缓存，仅在 mode 为 none 时生效，调用后缓存管理器的 state 会置为 0

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.stop.html)

```tsx
() => void
```

## 参数

### Mode

| 参数 | 说明 |
| --- | --- |
| weakNetwork | 默认值，弱网/离线使用缓存返回 |
| always | 总是使用缓存返回 |
| none | 不开启，后续可手动开启/停止使用缓存返回 |

### State

| 参数 | 说明 |
| --- | --- |
| 0 | 不使用缓存返回 |
| 1 | 使用缓存返回 |
| 2 | 未知 |

### DataSchema

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| type | `string` | 是 | 需要匹配的 data 对象的参数类型<br />string、number、boolean、null、object、any（表示任意类型），<br />同时支持数组模式（数组模式则在类型后面加 []，如 string[] 表示字符串数组） |
| value | string or Function or RegExp or DataRule[] | 否 | 需要匹配的 data 对象的参数值<br />当 type 为基本类型时，可以用 string/regexp 来匹配固定的值，<br />也可以通过 function 来确定值是否匹配，<br />如果传入的 type 是 object，那么表示需要嵌套匹配值是否正确，可以传入 Array |

### DataRule

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 需要匹配的参数名 |
| schema | DataSchema or DataSchema[] |  |

### RuleObject

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| id | `string` |  | 规则 id，如果不填则会由基础库生成 |
| method | `string` |  | 请求方法，可选值 GET/POST/PATCH/PUT/DELETE，如果为空则表示前面提到的所有方法都能被匹配到 |
| url | `any` |  | uri 匹配规则，可参考规则字符串写法和正则写法 |
| maxAge | `number` | `7 * 24 * 60 * 60 * 1000` | 缓存有效时间，单位为 ms，不填则默认取缓存管理器全局的缓存有效时间 |
| dataSchema | `DataRule[]` |  | 匹配请求参数 |

### Rule

### AddRuleOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rule | `Rule` | 规则 |

### AddRulesOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rules | `Rule[]` | 规则列表 |

### MatchOption

| 参数 | 说明 |
| --- | --- |
| evt | request 事件对象 |

### MatchResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ruleId | `string` | 命中的规则id |
| cacheId | `string` | 缓存id |
| data | `any` | 缓存内容，会带有 fromCache 标记，方便开发者区分内容是否来自缓存 |
| createTime | `number` | 缓存创建时间 |
| maxAge | `number` | 缓存有效时间 |

### OnEventName

| 参数 | 说明 |
| --- | --- |
| request | 发生 wx.request 请求，只在缓存管理器开启阶段会触发 |
| enterWeakNetwork | 进入弱网/离线状态 |
| exitWeakNetwork | 离开弱网/离线状态 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CacheManager.addRule | ✔️ |  |  |  |  |
| CacheManager.addRules | ✔️ |  |  |  |  |
| CacheManager.clearCaches | ✔️ |  |  |  |  |
| CacheManager.clearRules | ✔️ |  |  |  |  |
| CacheManager.deleteCache | ✔️ |  |  |  |  |
| CacheManager.deleteCaches | ✔️ |  |  |  |  |
| CacheManager.deleteRule | ✔️ |  |  |  |  |
| CacheManager.deleteRules | ✔️ |  |  |  |  |
| CacheManager.match | ✔️ |  |  |  |  |
| CacheManager.off | ✔️ |  |  |  |  |
| CacheManager.on | ✔️ |  |  |  |  |
| CacheManager.start | ✔️ |  |  |  |  |
| CacheManager.stop | ✔️ |  |  |  |  |

---

## docs/apis/storage/cache-manager/createCacheManager.md

---
title: Taro.createCacheManager(option)
sidebar_label: createCacheManager
---

创建缓存管理器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/wx.createCacheManager.html)

## 类型

```tsx
(option: Option) => CacheManager
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Mode

| 参数 | 说明 |
| --- | --- |
| weakNetwork | 弱网/离线使用缓存返回 |
| always | 总是使用缓存返回 |
| none | 不开启，后续可手动开启/停止使用缓存返回 |

### Extra

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| apiList | `string[]` | 否 | 需要缓存的 wx api 接口，不传则表示支持缓存的接口全都做缓存处理。返回的如果是缓存数据，开发者可通过 fromCache 标记区分 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| origin | `string` | 否 | 全局 origin |
| mode | `keyof Mode` | 否 | 缓存模式 |
| maxAge | `number` | 否 | 全局缓存有效时间，单位为毫秒，默认为 7 天，最长不超过 30 天 |
| extra | `Extra` | 否 | 额外的缓存处理 |

---

## docs/apis/storage/batchGetStorage.md

---
title: Taro.batchGetStorage(option)
sidebar_label: batchGetStorage
---

从本地缓存中异步批量获取指定 key 的内容。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorage.html)

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
| keyList | `string[]` | 是 | 本地缓存中指定的 keyList |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.batchGetStorage({
  keyList: ['key'],
  success(res) {
    console.log(res)
  }
})
```

---

## docs/apis/storage/batchGetStorageSync.md

---
title: Taro.batchGetStorageSync(keyList)
sidebar_label: batchGetStorageSync
---

从本地缓存中同步批量获取指定 key 的内容。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html)

## 类型

```tsx
<T = any>(keyList: string[]) => T[]
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| keyList | `T` | 本地缓存中指定的 key 数组 |

## 示例代码

```tsx
try {
  var valueList = Taro.batchGetStorageSync(['key'])
  if (valueList) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
```

---

## docs/apis/storage/batchSetStorage.md

---
title: Taro.batchSetStorage(option)
sidebar_label: batchSetStorage
---

将数据批量存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。
除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。
单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorage.html)

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
| kvList | `kv[]` | 是 | [{ key, value }] |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### kv

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | key 本地缓存中指定的 key |
| value | `any` | data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 |

## 示例代码

```tsx
Taro.batchGetStorage({
  keyList: ['key']
  success(res) {
    console.log(res)
  }
})
```

---

## docs/apis/storage/batchSetStorageSync.md

---
title: Taro.batchSetStorageSync(option)
sidebar_label: batchSetStorageSync
---

将数据批量存储在本地缓存中指定的 key 中。
会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。
单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| kvList | `kv[]` | [{ key, value }] |

### kv

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | key 本地缓存中指定的 key |
| value | `any` | data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 |

## 示例代码

```tsx
try {
  Taro.batchSetStorageSync([{key: 'key', value: 'value'}])
} catch (e) { }
```

---

## docs/apis/storage/clearStorage.md

---
title: Taro.clearStorage(option)
sidebar_label: clearStorage
---

清理本地数据缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.clearStorage()
```

---

## docs/apis/storage/clearStorageSync.md

---
title: Taro.clearStorageSync()
sidebar_label: clearStorageSync
---

Taro.clearStorage 的同步版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html)

## 类型

```tsx
() => void
```

## 示例代码

```tsx
try {
  Taro.clearStorageSync()
} catch(e) {
// Do something when catch error
}
```

---

## docs/apis/storage/createBufferURL.md

---
title: Taro.createBufferURL(buffer)
sidebar_label: createBufferURL
---

根据传入的 buffer 创建一个唯一的 URL 存在内存中

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.createBufferURL.html)

## 类型

```tsx
(buffer: TypedArray | ArrayBuffer) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| buffer | TypedArray or ArrayBuffer | 需要存入内存的二进制数据 |

---

## docs/apis/storage/getStorage.md

---
title: Taro.getStorage(option)
sidebar_label: getStorage
---

从本地缓存中异步获取指定 key 的内容

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html)

## 类型

```tsx
<T = any>(option: Option<T>) => Promise<SuccessCallbackResult<T>>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `T` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| key | `string` | 是 | 本地缓存中指定的 key |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult<T>) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `T` | key对应的内容 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.getStorage({
  key: 'key',
  success: function (res) {
    console.log(res.data)
  }
})
```

---

## docs/apis/storage/getStorageInfo.md

---
title: Taro.getStorageInfo(option)
sidebar_label: getStorageInfo
---

异步获取当前storage的相关信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html)

## 类型

```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(option: SuccessCallbackOption) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| currentSize | `number` | 当前占用的空间大小, 单位 KB |
| keys | `string[]` | 当前 storage 中所有的 key |
| limitSize | `number` | 限制的空间大小，单位 KB |

## 示例代码

```tsx
Taro.getStorageInfo({
  success: function (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```

---

## docs/apis/storage/getStorageInfoSync.md

---
title: Taro.getStorageInfoSync()
sidebar_label: getStorageInfoSync
---

Taro.getStorageInfo 的同步版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html)

## 类型

```tsx
() => Option
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| currentSize | `number` | 是 | 当前占用的空间大小, 单位 KB |
| keys | `string[]` | 是 | 当前 storage 中所有的 key |
| limitSize | `number` | 是 | 限制的空间大小，单位 KB |
| success | `boolean` | 否 | 是否执行成功<br />API 支持度: alipay |

## 示例代码

```tsx
try {
  const res = Taro.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
```

---

## docs/apis/storage/getStorageSync.md

---
title: Taro.getStorageSync(key)
sidebar_label: getStorageSync
---

Taro.getStorage 的同步版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html)

## 类型

```tsx
<T = any>(key: string) => T
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `T` | 本地缓存中指定的 key |

## 示例代码

```tsx
try {
  var value = Taro.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
```

---

## docs/apis/storage/removeStorage.md

---
title: Taro.removeStorage(option)
sidebar_label: removeStorage
---

从本地缓存中移除指定 key

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html)

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
| key | `string` | 是 | 本地缓存中指定的 key |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.removeStorage({
  key: 'key',
  success: function (res) {
    console.log(res)
  }
})
```

---

## docs/apis/storage/removeStorageSync.md

---
title: Taro.removeStorageSync(key)
sidebar_label: removeStorageSync
---

Taro.removeStorage 的同步版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html)

## 类型

```tsx
(key: string) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 本地缓存中指定的 key |

## 示例代码

```tsx
try {
  Taro.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
```

---

## docs/apis/storage/revokeBufferURL.md

---
title: Taro.revokeBufferURL(url)
sidebar_label: revokeBufferURL
---

根据 URL 销毁存在内存中的数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.revokeBufferURL.html)

## 类型

```tsx
(url: string) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| url | `string` | 需要销毁的二进制数据 URL |

---

## docs/apis/storage/setStorage.md

---
title: Taro.setStorage(option)
sidebar_label: setStorage
---

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)

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
| data | `any` | 是 | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |
| key | `string` | 是 | 本地缓存中指定的 key |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.setStorage({
  key:"key",
  data:"value"
})
```
```tsx
try {
  Taro.setStorageSync('key', 'value')
} catch (e) { }
```

---

## docs/apis/storage/setStorageSync.md

---
title: Taro.setStorageSync(key, data)
sidebar_label: setStorageSync
---

Taro.setStorage 的同步版本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)

## 类型

```tsx
(key: string, data: any) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 本地缓存中指定的 key |
| data | `any` | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |

## 示例代码

### 示例 1

```tsx
Taro.setStorage({
  key:"key",
  data:"value"
})
```

### 示例 2

```tsx
try {
  Taro.setStorageSync('key', 'value')
} catch (e) { }
```

---

