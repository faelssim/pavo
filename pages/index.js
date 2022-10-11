/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-09-29 15:13:51
 * @LastEditors: faelssim
 * @Description: 
 */
// import fs from "fs"
// import path from "path"
import Head from 'next/head'
import Link from 'next/link'
import Layout, { SITE_TITLE, NAME } from '../components/layout'
import Timeline from '../components/timeline'
import { getSortedPostsData } from '../utils/posts'


export default function Home(props) {
    // console.log(props)
    const { postDatas } = props
    return (
        <Layout home>
            <div className='w-screen flex justify-center'>
                <Head>
                    <title>{ SITE_TITLE }</title>
                    <link href="https://fonts.googlefonts.cn/css?family=Itim" rel="stylesheet"></link>
                    <link href="https://fonts.googlefonts.cn/css?family=Space+Mono" rel="stylesheet"></link>
                    <link href="https://fonts.googlefonts.cn/css?family=Laila" rel="stylesheet"></link>
                </Head>
                <Timeline data={ postDatas }></Timeline>
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