## Introduction

> Generate digital clock or dial clock, support time zone, custom style
> Currently only digital clocks are supported, other types are under development...

##  Install

#### Install via NPM/YARN

``` shell
$ npm install /i clock-widget-ts --save
$ yarn install /i clock-widget-ts --save
```

## API

> Object instantiation
```js
import Clock from 'clock-widget-ts'
new Clock(option)
```

> The option object has the following properties

| Parameter | Type | Default | Description |
| ----------------- | --------- | --------------- | ----- -------------------------------------------------- ----- |
| tz | String | America/New_York | time zone (please refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| tick. | Boolean | true | whether to move |
| style | String | | custom style, such as color, size, etc. |
| type | String | digital | digital pure digital clock, dial dial clock. |

## Events

| event name | parameter | description |
| ------------------ | :----------------------------- - | ------------------------------------------------ ------------ |
| destroy | | destroy instance | |

## Example usage


```javascript
import Clock from 'clock-widget-ts'
let myClock = null
let option = {
   tz: 'America/New_York',
   style: 'color:red;width:50px;'
    //...
}
myClock = new Clock(option)

myClock. destroy()
```

## license

This project is authorized under the license of the Massachusetts Institute of Technology (MIT), for details, please click [LICENSE](https://github.com/tangyuxian/tangyuxian-js-socket/blob/main/LICENSE) file to view.
