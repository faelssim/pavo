/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-09-01 10:35:52
 * @LastEditors: wangkun
 * @Description: 
 */
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import Head from 'next/head'
import ReactMarkdown  from 'react-markdown'
import gfm from 'remark-gfm' // 扩展链接、表格
import { getPostData, getAllPostIds } from '../../utils/posts'

export default function Post ({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <section className='h-screen flex flex-col'>
                <section className='flex-grow'>
                    <h1 className='text-3xl font-extrabold tracking-tighter text-center pt-10'>
                        {postData.title}
                    </h1>
                    <article className='py-8 prose prose-h1:mt-8 px-8'>
                        <ReactMarkdown
                            className="markdown-body"
                            remarkPlugins={ [ gfm ] }
                        >
                            { postData.content }
                        </ReactMarkdown>
                    </article>
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