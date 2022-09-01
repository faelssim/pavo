/*
 * @Author: wangkun
 * @Date: 2022-09-01 16:24:55
 * @LastEditTime: 2022-09-01 16:33:37
 * @LastEditors: wangkun
 * @Description: 
 */
import { PrismLight as SyntaxHighlighter  } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { javascript } from 'react-syntax-highlighter/dist/cjs/languages/prism'
console.log(coy)
export default function Code (props) {
    const { language, value } = props
    return (
        <h4>CODE</h4>
    )
}