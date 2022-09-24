---
title: "中断Promise的方法"
date: "2022-09-15"
---

**怎么中断一个Promise?**

#### 方法1：

<font color="#d5d5d5">关键词：</font><kbd>AbortController</kbd>

```
<button onclick="doTapBtn()">Submit</button>

<script>
    const PENDING = 'pending'
    const FULFILLED = 'fulfilled'
    const REJECTED = 'rejected'
    class AbortPromise {
        constructor (fn) {
            this.state = PENDING
            this.value = this.reason = undefined
            this.isAbort = false
            this.fulfilledCallback = []
            this.rejectedCallback = []
            this.controller = new AbortController()
            this.signal = this.controller.signal
            this.signal.addEventListener('abort', () => {
                this.isAbort = true
                reject(new Error('Promise has abort!'))
            })
            let resolve = (value) => {
                if (this.isAbort) {
                    return
                }
                this.state = FULFILLED
                this.value = value
                this.fulfilledCallback.map(cb => {
                    this.value = cb(this.value)
                })
            }
            let reject = (reason) => {
                this.state = REJECTED
                this.reason = reason
                this.rejectedCallback.map(cb => {
                    this.reason = cb(this.reason)
                })
            }
            try {
                fn(resolve, reject)
            } catch (e) {
                console.log(e)
            }
        }
        then (onFulfilled, onRejected) {
            onFulfilled && this.fulfilledCallback.push(onFulfilled)
            onRejected && this.rejectedCallback.push(onRejected)
            return this
        }
        catch (onRejected) {
            onRejected && this.rejectedCallback.push(onRejected)
        }
        abort () {
            this.controller.abort()
        }
    }
    const abortPromise = new AbortPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('兮兮不生气')
        }, 4000)
    })
    abortPromise.then(r => {
        console.log(r)
        return '兮兮也会生气'
    }, e => {
        console.log(e)
    }).then(r2 => {
        console.log(r2)
        return '相见恨晚...'
    }).then(r3 => {
        console.log(r3)
    })

    function doTapBtn () {
        // 中断
        abortPromise.abort()
    }
</script>
```

1. **new AbortController()** 实例，返回一个控制器
---
2. 控制器中有个**signal**信号量
---
3. **signal**监听<kbd>abort</kbd>事件，该事件有控制器调用**abort**方法

![img3](https://s-bj-4351-lyra.oss.dogecdn.com/Snipaste_2022-09-15_15-10-51.png)