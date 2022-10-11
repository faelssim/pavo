---
title: "Javascript模块梳理"
date: "2022-10-11"
---

> 最初，<font color="red">Javascript</font> 没有导入/导出模块的方法， 这是让人头疼的问题。 想象一下，只用一个文件编写应用程序——这简直是噩梦！然后，很多比人试图给 Javascript 添加模块化。其中就有 <font color="red">CJS、AMD、UMD、ESM</font>。

<b><font size="5" color="#000">CJS</font></b>

CJS 是 CommonJS 的缩写。经常我们这么使用：

```
// importing 
const doSomething = require('./doSomething.js'); 

// exporting
module.exports = function doSomething(n) {
  // do something
}

```

+ 很多人可以从 Node 中立刻认出 CJS 的语法。这是因为 Node 就是使用 CJS 模块的
+ CJS 是同步导入模块
+ 当 CJS 导入时，它会给你一个导入对象的副本
+ CJS <font color="red">不能在浏览器中工作。它必须经过转换和打包</font>

---

<b><font size="5" color="#000">AMD</font></b>

AMD 代表异步模块定义。下面是一个示例代码

```
define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
})
```

+ AMD 是异步(asynchronously)导入模块的(因此得名)
+ 一开始被提议的时候，AMD 是为前端而做的(而 CJS 是后端)
+ AMD 的语法不如 CJS 直观
  
---

<b><font size="5" color="#000">UMD</font></b>

UMD 代表通用模块定义（Universal Module Definition）。下面是它可能的样子

```
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory)
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"))
    } else {
        root.Requester = factory(root.$, root._)
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... }

    return Requester
}))
```

+ 在前端和后端都适用（“通用”因此得名）
+ 与 CJS 或 AMD 不同，UMD 更像是一种配置多个模块系统的模式。这里可以找到更多的模式
+ 之类的打包器时，UMD 通常用作备用模块

---

<b><font size="5" color="#000">ESM</font></b>

ESM 代表 ES 模块。这是 Javascript 提出的实现一个标准模块系统的方案。我相信你们很多人都看到过这个:

`import React from 'react'`

或者其他更多的

```
import {foo, bar} from './myLib'

...

export default function() {
  // your Function
}
export const function1() {...}
export const function2() {...}
```

+ 在很多现代浏览器可以使用
+ 它兼具两方面的优点：具有 CJS 的简单语法和 AMD 的异步
+ 得益于 ES6 的静态模块结构，可以进行 Tree Shaking
+ 可以在 HTML 中调用，只要如下

```
<script type="module">
  import {func1} from 'my-lib'

  func1()
</script>
```

---

<b><font size="5" color="#000">总结</font></b>

+ 由于 ESM 具有简单的语法，异步特性和可摇树性，因此它是最好的模块化方案
+ UMD 随处可见，通常在 ESM 不起作用的情况下用作备用
+ CJS 是同步的，适合后端
+ AMD 是异步的，适合前端