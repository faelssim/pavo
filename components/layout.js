/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-08-31 18:09:41
 * @LastEditors: wangkun
 * @Description: 
 */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'

export const NAME = "Faelssim"
export const SITE_TITLE = "Faelssim's Blog"

export default function Layout ({ children, home }) {
    return (
        <div className={ styles.d_layout }>
            <Head>
                <meta name='description' content={ `${NAME}的个人博客` } />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        SITE_TITLE
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={ SITE_TITLE } />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <header className={ 'flex flex-col items-center py-10 ' + styles.d_layout_header }>
                <Image
                    priority
                    src='/images/logo.jpeg'
                    className='rounded-full'
                    height={ 144 }
                    width={ 144 }
                    alt={ NAME }
                />
                <div className='flex flex-col items-center relative z-10'>
                    <h1 className='text-5xl font-extrabold tracking-tighter mt-10 text-white' style={{fontFamily: 'Itim'}}>
                        { NAME }
                    </h1>
                </div>
            </header>
            <article
                className='flex flex-col items-center py-5 text-sm font-thin tracking-widest text-gray-500 mb-10'
            >
                欢迎来到我的博客 请尽情的阅览吧！
            </article>
            <main>{ children }</main>
        </div>
    )
}