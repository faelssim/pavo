/*
 * @Author: wangkun
 * @Date: 2022-09-10 00:20:49
 * @LastEditTime: 2022-09-13 10:44:26
 * @LastEditors: wangkun
 * @Description: 
 */
import { useEffect, useRef } from 'react'

const isFirstRender = () => {
    const isFirst = useRef(true) //不会因为重复 render 重复申明， 类似于类组件的 this.xxx
    const { current } = isFirst
    //如果是第一次，改变状态并返回true
    if (current) {
        isFirst.current = false
        return true
    }
    return current
}
export default function useUpdateEffect(effect, deps) {
    const isFirst = isFirstRender()
    useEffect(() => {
        //如果不是第一次执行函数
        if (!isFirst) return effect()
    }, deps)
}