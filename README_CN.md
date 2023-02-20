## 简介

> 生成数字时钟或者表盘时钟，支持时区，自定义样式
> 目前只支持数字时钟，其它类型正在开发中...

##  安装

#### 通过NPM/YARN安装

``` shell
$ npm install/i clock-widget-ts --save
$ yarn install/i clock-widget-ts --save
```

##  api

> 对象实例化
```js
import Clock from 'clock-widget-ts'
new Clock(option)
```

> option对象中有以下属性

| 参数              | 类型       | 默认值           | 说明                                                                                          |
| ----------------- | --------- | --------------- | -------------------------------------------------------------------------------------------- |
| tz                | String   | America/New_York | 时区(请参考https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)                       |
| tick.             | Boolean  | true             | 是否走动                                                                                       |
| style             | String   |                  | 自定义样式，如颜色，大小等                                                                        |
| type              | String   | digital          | digital纯数字时钟，dial表盘时钟.                                                                 |

## Events

| 事件名             | 参数                            | 说明                                                         |
| ------------------ | :------------------------------ | ------------------------------------------------------------ |
| destroy             |                     | 销毁实例                                        |                  |

## 用法示例


``` javascript
import Clock from 'clock-widget-ts'
let myClock = null
let option = {
  tz: 'America/New_York',
  style: 'color:red;width:50px;'
   //...
}
myClock = new Clock(option)

myClock.destroy()
```

## 许可证

本项目是根据麻省理工学院(MIT)的许可证授权, 详情可点击 [LICENSE](https://github.com/tangyuxian/tangyuxian-js-socket/blob/main/LICENSE) 文件查看.
