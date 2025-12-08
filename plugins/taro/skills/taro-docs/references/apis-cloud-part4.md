## docs/apis/cloud/DB.md (part 3)
### IGeo

数据库地理位置结构集

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Geo.html)

#### Point

构造一个地理位置 ”点“。方法接受两个必填参数，第一个是经度（longitude），第二个是纬度（latitude），务必注意顺序。

如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.Point.html)

```tsx
(longitude: number, latitide: number) => GeoPoint
```

| 参数 | 类型 |
| --- | --- |
| longitude | `number` |
| latitide | `number` |

##### 示例代码

###### 示例 1

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: db.Geo.Point(113, 23)
  }
}).then(console.log).catch(console.error)
```

###### 示例 2

除了使用接口构造一个点外，也可以使用等价的 GeoJSON 的 点 (Point) 的 JSON 表示，其格式如下：

```json
{
  "type": "Point",
  "coordinates": [longitude, latitude] // 数字数组：[经度, 纬度]
}
```

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: {
      type: 'Point',
      coordinates: [113, 23]
    }
  }
}).then(console.log).catch(console.error)
```

#### LineString

构造一个地理位置的 ”线“。一个线由两个或更多的点有序连接组成。

如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.LineString.html)

```tsx
(points: JSONMultiPoint | GeoPoint[]) => GeoMultiPoint
```

| 参数 | 类型 |
| --- | --- |
| points | JSONMultiPoint or GeoPoint[] |

##### 示例代码

###### 示例 1

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: db.Geo.LineString([
      db.Geo.Point(113, 23),
      db.Geo.Point(120, 50),
      // ... 可选更多点
    ])
  }
}).then(console.log).catch(console.error)
```

###### 示例 2

除了使用接口构造一条 LineString 外，也可以使用等价的 GeoJSON 的 线 (LineString) 的 JSON 表示，其格式如下：

```json
{
  "type": "LineString",
  "coordinates": [
    [p1_lng, p1_lat],
    [p2_lng, p2_lng]
    // ... 可选更多点
  ]
}
```

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: {
      type: 'LineString',
      coordinates: [
        [113, 23],
        [120, 50]
      ]
    }
  }
}).then(console.log).catch(console.error)
```

#### Polygon

构造一个地理位置 ”多边形“

如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引

**说明**

一个多边形由一个或多个线性环（Linear Ring）组成，一个线性环即一个闭合的线段。一个闭合线段至少由四个点组成，其中最后一个点和第一个点的坐标必须相同，以此表示环的起点和终点。如果一个多边形由多个线性环组成，则第一个线性环表示外环（外边界），接下来的所有线性环表示内环（即外环中的洞，不计在此多边形中的区域）。如果一个多边形只有一个线性环组成，则这个环就是外环。

多边形构造规则：

1. 第一个线性环必须是外环
2. 外环不能自交
3. 所有内环必须完全在外环内
4. 各个内环间不能相交或重叠，也不能有共同的边
5. 外环应为逆时针，内环应为顺时针

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.Polygon.html)

```tsx
(lineStrings: JSONPolygon | GeoLineString[]) => GeoPolygon
```

| 参数 | 类型 |
| --- | --- |
| lineStrings | JSONPolygon or GeoLineString[] |

##### 示例代码

###### 示例 1

单环多边形

```tsx
const { Polygon, LineString, Point } = db.Geo
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: Polygon([
      LineString([
        Point(0, 0),
        Point(3, 2),
        Point(2, 3),
        Point(0, 0)
      ])
    ])
  }
}).then(console.log).catch(console.error)
```

###### 示例 2

含一个外环和一个内环的多边形

```tsx
const { Polygon, LineString, Point } = db.Geo
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: Polygon([
      // 外环
      LineString([ Point(0, 0), Point(30, 20), Point(20, 30), Point(0, 0) ]),
      // 内环
      LineString([ Point(10, 10), Point(16, 14), Point(14, 16), Point(10, 10) ])
    ])
  }
}).then(console.log).catch(console.error)
```

###### 示例 3

除了使用接口构造一个 Polygon 外，也可以使用等价的 GeoJSON 的 多边形 (Polygon) 的 JSON 表示，其格式如下：

```json
{
  "type": "Polygon",
  "coordinates": [
    [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ], // 外环
    [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ], // 可选内环 1
    ...
    [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ], // 可选内环 n
  ]
}
```

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: {
      type: 'Polygon',
      coordinates: [
        [ [0, 0], [30, 20], [20, 30], [0, 0] ],
        [ [10, 10], [16, 14], [14, 16], [10, 10]]
      ]
    }
  }
}).then(console.log).catch(console.error)
```

#### MultiPoint

构造一个地理位置的 ”点“ 的集合。一个点集合由一个或更多的点组成。

如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.MultiPoint.html)

```tsx
(polygons: JSONMultiPolygon | GeoPolygon[]) => GeoMultiPolygon
```

| 参数 | 类型 |
| --- | --- |
| polygons | JSONMultiPolygon or GeoPolygon[] |

##### 示例代码

###### 示例 1

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: db.Geo.MultiPoint([
      db.Geo.Point(113, 23),
      db.Geo.Point(120, 50),
      // ... 可选更多点
    ])
  }
}).then(console.log).catch(console.error)
```

###### 示例 2

除了使用接口构造 MultiPoint 外，也可以使用等价的 GeoJSON 的 点集合 (MultiPoint) 的 JSON 表示，其格式如下：

```json
{
  "type": "MultiPoint",
  "coordinates": [
    [p1_lng, p1_lat],
    [p2_lng, p2_lng]
    // ... 可选更多点
  ]
}
```

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: {
      type: 'MultiPoint',
      coordinates: [
        [113, 23],
        [120, 50]
      ]
    }
  }
}).then(console.log).catch(console.error)
```

#### MultiLineString

构造一个地理位置 ”线“ 集合。一个线集合由多条线组成。

如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.MultiLineString.html)

```tsx
(lineStrings: JSONMultiLineString | GeoLineString[]) => GeoMultiLineString
```

| 参数 | 类型 |
| --- | --- |
| lineStrings | JSONMultiLineString or GeoLineString[] |

##### 示例代码

###### 示例 1

```tsx
const { LineString, MultiLineString, Point } = db.Geo
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: MultiLineString([
      LineString([ Point(0, 0), Point(30, 20), Point(20, 30), Point(0, 0) ]),
      LineString([ Point(10, 10), Point(16, 14), Point(14, 16), Point(10, 10) ])
    ])
  }
}).then(console.log).catch(console.error)
```

###### 示例 2

除了使用接口构造一个 MultiLineString 外，也可以使用等价的 GeoJSON 的 线集合 (MultiLineString) 的 JSON 表示，其格式如下：

```json
{
  "type": "MultiLineString",
  "coordinates": [
    [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
    [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
    ...
    [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ]
  ]
}
```

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: {
      type: 'MultiLineString',
      coordinates: [
        [ [0, 0], [3, 3] ],
        [ [5, 10], [20, 30] ]
      ]
    }
  }
}).then(console.log).catch(console.error)
```

#### MultiPolygon

构造一个地理位置 ”多边形“ 集合。一个多边形集合由多个多边形组成。

如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引

**说明**

一个多边形由一个或多个线性环（Linear Ring）组成，一个线性环即一个闭合的线段。一个闭合线段至少由四个点组成，其中最后一个点和第一个点的坐标必须相同，以此表示环的起点和终点。如果一个多边形由多个线性环组成，则第一个线性环表示外环（外边界），接下来的所有线性环表示内环（即外环中的洞，不计在此多边形中的区域）。如果一个多边形只有一个线性环组成，则这个环就是外环。

多边形构造规则：

1. 第一个线性环必须是外环
2. 外环不能自交
3. 所有内环必须完全在外环内
4. 各个内环间不能相交或重叠，也不能有共同的边
5. 外环应为逆时针，内环应为顺时针

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.MultiPolygon.html)

```tsx
(polygons: JSONMultiPolygon | GeoPolygon[]) => GeoMultiPolygon
```

| 参数 | 类型 |
| --- | --- |
| polygons | JSONMultiPolygon or GeoPolygon[] |

##### 示例代码

###### 示例 1

```tsx
const { MultiPolygon, Polygon, LineString, Point } = db.Geo
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: MultiPolygon([
      Polygon([
        LineString([ Point(50, 50), Point(60, 80), Point(80, 60), Point(50, 50) ]),
      ]),
      Polygon([
        LineString([ Point(0, 0), Point(30, 20), Point(20, 30), Point(0, 0) ]),
        LineString([ Point(10, 10), Point(16, 14), Point(14, 16), Point(10, 10) ])
      ]),
    ])
  }
}).then(console.log).catch(console.error)
```

###### 示例 2

除了使用接口构造一个 MultiPolygon 外，也可以使用等价的 GeoJSON 的 多边形 (MultiPolygon) 的 JSON 表示，其格式如下：

```json
{
  "type": "MultiPolygon",
  "coordinates": [
    // polygon 1
    [
      [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
      [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
      ...
      [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ]
    ],
    ...
    // polygon n
    [
      [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
      [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
      ...
      [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ]
    ],
  ]
}
```

```tsx
db.collection('todos').add({
  data: {
    description: 'eat an apple',
    location: {
      type: 'MultiPolygon',
      coordinates: [
        [
          [ [50, 50], [60, 80], [80, 60], [50, 50] ]
        ],
        [
          [ [0, 0], [30, 20], [20, 30], [0, 0] ],
          [ [10, 10], [16, 14], [14, 16], [10, 10]]
        ]
      ]
    }
  }
}).then(console.log).catch(console.error)
```

#### GeoPoint

地理位置 “点”

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoPoint.html)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| longitude | `number` | 经度 |
| latitude | `number` | 纬度 |

##### toJSON

格式化为 JSON 结构

```tsx
() => object
```

##### toString

格式化为字符串

```tsx
() => string
```

#### GeoLineString

地理位置的 ”线“。一个线由两个或更多的点有序连接组成。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoLineString.html)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| points | `GeoPoint[]` | 点集合 |

##### toJSON

格式化为 JSON 结构

```tsx
() => JSONLineString
```

##### toString

格式化为字符串

```tsx
() => string
```

#### GeoPolygon

地理位置 ”多边形“

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoPolygon.html)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| lines | `GeoLineString[]` | 线集合 |

##### toJSON

格式化为 JSON 结构

```tsx
() => JSONPolygon
```

##### toString

格式化为字符串

```tsx
() => string
```

#### GeoMultiPoint

地理位置的 ”点“ 的集合。一个点集合由一个或更多的点组成。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoMultiPoint.html)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| points | `GeoPoint[]` | 点集合 |

##### toJSON

格式化为 JSON 结构

```tsx
() => JSONMultiPoint
```

##### toString

格式化为字符串

```tsx
() => string
```

#### GeoMultiLineString

地理位置 ”线“ 集合。一个线集合由多条线组成。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoMultiLineString.html)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| lines | `GeoLineString[]` | 线集合 |

##### toJSON

格式化为 JSON 结构

```tsx
() => JSONMultiLineString
```

##### toString

格式化为字符串

```tsx
() => string
```

#### GeoMultiPolygon

地理位置 ”多边形“ 集合。一个多边形集合由多个多边形组成。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoMultiPolygon.html)

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| polygons | `GeoPolygon[]` | 多边形集合 |

##### toJSON

格式化为 JSON 结构

```tsx
() => JSONMultiPolygon
```

##### toString

格式化为字符串

```tsx
() => string
```

#### JSONPoint

地理位置 “点” 的 JSON 结构

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `"Point"` | 类型 |
| coordinates | `[number, number]` | 坐标 |

#### JSONLineString

地理位置 ”线“ 的 JSON 结构

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `"LineString"` | 类型 |
| coordinates | `[number, number][]` | 坐标 |

#### JSONPolygon

地理位置 ”多边形“ 的 JSON 结构

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `"Polygon"` | 类型 |
| coordinates | `[number, number][][]` | 坐标 |

#### JSONMultiPoint

地理位置的 ”点“ 集合的 JSON 结构

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `"MultiPoint"` | 类型 |
| coordinates | `[number, number][]` | 坐标 |

#### JSONMultiLineString

地理位置 ”线“ 集合的 JSON 结构

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `"MultiLineString"` | 类型 |
| coordinates | `[number, number][][]` | 坐标 |

#### JSONMultiPolygon

地理位置 ”多边形“ 集合的 JSON 结构

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `"MultiPolygon"` | 类型 |
| coordinates | `[number, number][][][]` | 坐标 |

---

