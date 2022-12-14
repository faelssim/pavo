/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-09-29 14:58:26
 * @LastEditors: faelssim
 * @Description: 
 */
import Footer from '../../components/footer'
import Head from 'next/head'
import ReactMarkdown  from 'react-markdown'
import { PrismLight as SyntaxHighlighter  } from 'react-syntax-highlighter'
import { tomorrow, synthwave84, solarizedlight, coldarkCold, dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm' // 扩展链接、表格
import rehypeRaw from 'rehype-raw'
import { getPostData, getAllPostIds } from '../../utils/posts'
import styles from './[id].module.css'

const CODE_THEME = [
    tomorrow,
    synthwave84,
    coldarkCold,
    dark,
    solarizedlight
]

export default function Post (props) {
    const { postData } = props
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <section className={ 'grid-bg h-screen flex flex-col ' + styles.d_page }>
                <section className='flex-grow'>
                    <h1 className='text-xl font-extrabold tracking-tighter text-center pt-10'>
                        {postData.title}
                    </h1>
                    <article className='py-8 prose prose-h1:mt-8 px-8'>
                        <ReactMarkdown
                            className="markdown-body"
                            remarkPlugins={ [ gfm ] }
                            rehypePlugins={ [ rehypeRaw ] }
                            children={ postData.content }
                            components={{
                                code({node, inline, className = 'highlight', children, ...props}) {
                                    const match = 'javascript'
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={ String(children).replace(/\n$/, '') }
                                            style={ CODE_THEME[Math.floor(Math.random() * CODE_THEME.length)] }
                                            language={ match }
                                            PreTag="div"
                                            { ...props }
                                        />
                                    ) : (
                                        <code className={ className } { ...props }>
                                            { children }
                                        </code>
                                    )
                                }
                            }}
                        />
                    </article>
                    <section
                        className={ styles.d_divider }
                    >
                        本文发布于：{ postData.date }
                    </section>
                </section>
                <Footer />
            </section>
        </>
    )
}

export const getStaticPaths = async () => {
    // 获取所有文章id，即所有路由
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
	// 获取文章内容 
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        },
    }
}