---
title: "关于Js的一些问题"
date: "2022-09-16"
---

<font color="red" size="4"><b>一. 闭包</b></font>

> 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来. -- From MDN

**简单的说：一个函数和它可以访问的外层作用域的变量就形成了一个闭包**

```
function foo () {
    let name = 'falessim'
    let age = 23
    function bar () {
        console.log(name)
    }
    return bar
}
let f = foo()
f()
```

1. bar函数和它访问的name组成了一个闭包
2. 当执行到bar函数中，V8引擎会优化，把bar函数中没有使用的属性移除。比如age
3. f函数调用完毕之后foo函数和age属性会被销毁，但是name不会，因为bar函数内部持有对其的访问。怎么解决呢？**f = null**
   
![img1](https://s-bj-4351-lyra.oss.dogecdn.com/Snipaste_2022-09-16_10-50-20.png)


<font color="red" size="4"><b>二. 事件循环</b></font>

1. 事件循环Event Loop又叫事件队列，两者是一个概念
2. 微任务、宏任务概念介绍
    + 微任务与宏任务就属于js代码的范畴
    + js代码主要分为两大类： 同步代码、异步代码
    + 异步代码又分为：微任务与宏任务

        |   任务（事件）  |   宏/微任务   |
        |---------------|--------------|
        |    网络请求    |   宏任务      |
        |    定时器      |   宏任务      |
        | fs.readFile() |   宏任务      |
        | Promise.then  |   微任务      |
        | async/await   |   微任务      |

3. 事件循环Event Loop执行机制
   + 进入到script标签,就进入到了第一次事件循环.
   + 遇到同步代码，立即执行
   + 遇到宏任务,放入到宏任务队列里.
   + 遇到微任务,放入到微任务队列里.
   + 执行完所有同步代码
   + 执行微任务代码
   + 微任务代码执行完毕，本次队列清空
   + 寻找下一个宏任务，重复步骤1
   + 以此反复直到清空所以宏任务，这种不断重复的执行机制，就叫做事件循环

   + 易错点
      + promise本身是一个同步的代码(只是容器)，只有它后面调用的then()方法里面的回调才是微任务
        ```
          new Promise((resolve, reject) => {
              console.log(1111)
              resolve()
          }).then(() => {
              console.log(2222)
          })
          console.log(3333)

          // 1111 3333 2222
        ```
      + await右边的表达式还是会立即执行,表达式之后的代码才是微任务, await微任务可以转换成等价的promise微任务分析
         ```
          async function fn () {
              console.log(1111)
              await fn2()
              console.log(3333)
          }
          function fn2 () {
              console.log(2222)
              Promise.resolve().then(() => {
                  console.log(4444)
              })
          }
          fn()

          // 11111 2222 4444 3333
       ``` 

<font color="red" size="4"><b>三. vue/React列表中key的作用</b></font>

1. vue会使用**就地复用**原则来高效的渲染元素。例如：
   
   ```
     <template v-if="isShow">
        <input placeholder="one" />
     </template>
     <template v-else>
        <input placeholder="tow" />
     </template>
   ```
   > 上面的例子中，切换**isShow**的时候<kbd>input</kbd>的内容会保留，仅仅是更新了其placeholder。

   <font size="2" color="deeppink">由于v-for循环渲染出的就是上面input这样的dom元素相同，只是内容有些不同，所以当Vue重新渲染列表时，并不会修改每个dom，因为修改dom的重绘和回流时很耗时的，所以它会用元素来匹配数据项，就地更改元素，并且保证他们每个索引位置能正确渲染。</font>

   <p style="margin:10px 0;"><font size="2" color="deepskyblue">这样利用元素就地复用减少dom操作，提高了渲染速度。但是这种方式只适用于不依赖子组件状态或临时 DOM 状态的列表。</font></p>

   **作用:（diff算法相关）**
   1. 因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。
   2. 利用key的唯一性生成map对象来获取对应节点，比遍历方式更快