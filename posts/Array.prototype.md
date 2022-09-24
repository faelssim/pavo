---
title: "Array.prototype"
date: "2022-09-23"
---

<font color="#a5a5a5">以下具体信息可查看</font>[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

#### Array.prototype.at(index)

> 接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。

#### Array.prototype.copyWithin(target, ?start, ?end)

> 浅复制数组的一部分到同一数组中的另一个位置，并返回它，***不会改变原数组的长度***。<font color="red">但是会改变原数组！</font>

|     参数     |      描述      |
|--------------|----------------|
|   target     |必需。复制到指定目标索引位置。|
|   start      |可选。元素复制的起始位置,如果是负数，start 将从末尾开始计算。如果 start 被忽略，copyWithin 将会从 0 开始复制。|
|   end        |可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。|

```
let a = [1, 2, 3, 4, 5]
a.copyWithin(2) // 12123
[1, 2, 3, 4, 5].copyWithin(2, 4) // [1, 2, 5, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
```

<h6>此方法是在想不起来适合啥场景~</h6>

#### Array.from(arrayLike, ?mapFn, ?thisArg)

> 对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

```
Array.from('foo') // ["f", "o", "o"]
Array.from([1, 2, 3], x => x + x) // [2, 4, 6]
```

#### Array.of(element0[, element1[, ...[, elementN]]])

> 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

> Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为 7 的空数组（注意：这是指一个有 7 个空位 (empty) 的数组，而不是由 7 个undefined组成的数组）。

