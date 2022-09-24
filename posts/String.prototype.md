---
title: "String.prototype"
date: "2022-09-23"
---

<font color="#a5a5a5">以下具体信息可查看</font>[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

---

#### String.prototype.at
> 返回位于索引处的字符串。可以为负数，负数从结尾开始数。

```
let str = 'abcdefg'
str.at(2) // c
str.at(-2) // f
```

#### String.prototype.charAt

> 作用同at，不同点第一对于超出范围的情况，at 返回 **undefined** charAt返回 **空字符串** ，其次 charAt不支持负数

#### String.prototype.concat

> concat 方法将一个或多个字符串与原字符串 **连接合并**，形成一个新的字符串并返回。 concat 方法并不影响原字符串。

#### String.prototype.endsWith

> 判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 **true** 或 **false**。

#### String.prototype.padEnd

> 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

#### String.prototype.slice

> 提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

```
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```

#### String.raw

> 来获取一个模板字符串的原始字符串的，比如说，占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \n）不会。<font color="red">注意：String的静态方法，不在其原型链上。</font>

```
String.raw`Hi\n${2+3}!` // 'Hi\\n5!'
String.raw({ raw: 'test' }, 0, 1, 2) // 't0e1s2t'
String.raw({ raw: 'test' }, 0) // t0est
String.raw({ raw: 'test' }, 0, 1, 2, 4, 5) // 't0e1s2t'
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script') // 'foo5barJavaScriptbaz'
```

----

![MissYou](https://s-bj-4351-lyra.oss.dogecdn.com/44fa9d171fcd971e2f5f952c77b6dd1f.jpeg)
<p style="text-align:center;">
    <font color="" size="2">天涯旧恨，独自凄凉人不问</font>
</p>
<p style="text-align:center;">
    <font color="" size="2">欲见回肠，断尽金炉小篆香</font>
</p>
<p style="text-align:center;">
    <font color="" size="2">黛蛾长敛，任是春风吹不展</font>
</p>
<p style="text-align:center;">
    <font color="" size="2">困倚危楼，过尽飞鸿字字愁</font>
</p>
<p style="text-align:center;margin-top:30px;">
    <font color="#a5a5a5" size="1">《减字木兰花·天涯旧恨》 秦观</font>
</p>
