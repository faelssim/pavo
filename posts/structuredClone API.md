---
title: "structuredClone API"
date: "2022-09-29"
---

> 全局的 structuredClone() 方法使用结构化克隆算法将给定的值进行深拷贝 (en-US)。
> 该方法还支持把原始值中的 transferable objects (en-US) (可转移对象) 转移到新对象，而不是把属性引用拷贝过去。 可转移对象与原始对象分离并附加到新对象;它们不可以在原始对象中访问被访问到。

```
structuredClone(value)
structuredClone(value, { transfer })
```

<font size="2" color="red">参数：</font>

***value***

> 被克隆的对象。可以是任何[结构化克隆支持的类型](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#%E6%94%AF%E6%8C%81%E7%9A%84%E7%B1%BB%E5%9E%8B)。

***transfer***

> 是一个[可转移对象 (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects)的数组，里面的 值 并没有被克隆，而是被转移到被拷贝对象上。

![兼容性](https://s-bj-4351-lyra.oss.dogecdn.com/Snipaste_2022-09-29_13-46-14.png)


