/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-08-31 18:09:38
 * @LastEditors: wangkun
 * @Description: 
 */
// import fs from "fs"
// import path from "path"
import Head from 'next/head'
import Link from 'next/link'
import Layout, { SITE_TITLE, NAME } from '../components/layout'
import { getSortedPostsData } from '../utils/posts'


export default function Home(props) {
    // console.log(props)
    const { postDatas } = props
    return (
        <Layout home>
            <div>
                <Head>
                    <title>{ SITE_TITLE }</title>
                    <link href="https://fonts.googlefonts.cn/css?family=Leckerli+One" rel="stylesheet"></link>
                </Head>
                <section className="text-xl leading-normal pt-4">
                    <h2 className="text-2xl my-4 font-bold"></h2>
                    <ul>
                        {
                            postDatas.map(({ id, date, title }) => (
                                <li
                                    key={ id }
                                    className="mb-5"
                                >
                                    <Link
                                        href={ `/posts/${id}` }
                                    >
                                        <a>{ title }</a>
                                    </Link>
                                    <br />
                                    <small>
                                        { date }
                                    </small>
                                </li>
                            ))
                         }
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const postDatas = await getSortedPostsData()
    return {
      props: {
        postDatas
      }
    }
  
}