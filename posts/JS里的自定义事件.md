---
title: "Js里的自定义事件"
date: "2022-09-05"
---

> <div style="padding:10px 0;"><font size="2">在开始之前先探究一个问题，怎么感知<font color="deepskyblue">localStorage</font>中信息的变动？</font></div>

<font size="2">在这之前，鄙人想到的方法是加个定时器去获取数据比较。但这个方法毕竟太过粗暴，太不优雅。虽说localStorage有个change事件，但是那个在同个页面不会触发。</font>

**试试用CustomEvent来处理吧  -  鲁迅**

<font size="1" color="#888">以下描述出自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)</font>
<br />
<kbd>CustomEvent</kbd>接口表示由程序出于某个目的而创建的事件。
<br />
1. 构造函数为<font color="deepskyblue" size="2">CustomEvent()</font>
2. 属性
   + <font color="deeppink" size="2">detail</font>
        + 返回在初始化事件中传入的数据 


```
const ev = new CustomEvent('storageChange', {
    detail: {}
})
const originalSetItem = localStorage.prototype.setItem


localStorage.prototype.setItem = function (...args) {
    originalSetItem.apply(this, args)
    ev.detail.params = args
    document.dispathEvent(ev)
}

document.addEventListener('storageChange', (e) => {
    console.log(e.detail)
})

```

<font color="red"><b>Tips</b></font>

<font color="brown" size="2">CustomEvent和Event的区别在于前者可以传一些自定义参数</font>

![](https://s-bj-4351-lyra.oss.dogecdn.com/3efbcdbe308b9a39e02683cf244eaa99.jpeg)