---
title: "About CSS"
date: "2022-09-02"
---

#### Today, we talking about CSS...

1. **:focus-within**
   + 伪类
   + 当其或者其后代元素获得焦点时触发

![兼容性](https://s-bj-4351-lyra.oss.dogecdn.com/Snipaste_2022-09-02_10-19-06.png)

2. **:has()**
    + 伪类
    + 更像是一种父选择器

*Ex: 要设置包含h2的section元素样式*

```
 section:has(h2) {
    background: deepskyblue;
 }
```
![兼容性](https://s-bj-4351-lyra.oss.dogecdn.com/Snipaste_2022-09-02_10-24-00.png)

3. **gap**
    + 用于 flex 和 grid 布局时设置行和列之间的间隔
    + row-gap 和 column-gap 的简写
    + 除了IE 可以直接用（fuck ie）


4. **calc、clamp、min、max**
    + min

        + 提供的值将作为属性的最大允许值
        + min(80ch,100vw)，结果是在更大的视窗中，将选择 80ch
    
    + max

        + 是上面介绍的 min() 的反义

    + calc

        + 行基本的数学运算，常用于动态计算高宽值，支持 + - * / 运算，能够在单位类型之间进行插值（例如 rem 到 vw）

    + clamp

        + 把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，在最小值和最大值之间选择一个值使用
        + clamp() 函数接收三个参数，并且需按照以下顺序

            a. 范围内的最小值

            b. 理想值/首选值

            c. 范围内的最大值  

