/*
 * @Author: wangkun
 * @Date: 2022-09-01 16:24:55
 * @LastEditTime: 2022-09-01 16:34:53
 * @LastEditors: wangkun
 * @Description: 
 */
import { PrismLight as SyntaxHighlighter  } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { javascript } from 'react-syntax-highlighter/dist/cjs/languages/prism'

export default function Code (props) {
    const { language, value } = props
    return (
        <figure>
            <SyntaxHighlighter language={ language } style={ coy }>
                { value }
            </SyntaxHighlighter>
        </figure>
    )
}