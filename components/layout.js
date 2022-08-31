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
                {
                    home ? (
                        <>
                            <Image
                                priority
                                src='/images/avatar.jpeg'
                                className='rounded-full'
                                height={ 144 }
                                width={ 144 }
                                alt={ NAME }
                            />
                            <div className='flex flex-col items-center relative z-10'>
                                <h1 className='text-5xl font-extrabold tracking-tighter mt-10 text-white' style={{fontFamily: 'Leckerli One'}}>
                                    { NAME }
                                </h1>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href='/'>
                                <a>
                                    <Image
                                        priority
                                        src='/images/avatar.jpeg'
                                        className='rounded-full'
                                        height={ 108 }
                                        width={ 108 }
                                        alt={ NAME }
                                    />
                                </a>
                            </Link>
                            <h2 className='text-2xl my-4'>
                                <Link href='/'>
                                    <a>{ NAME }</a>
                                </Link>
                            </h2>
                        </>
                        )
                }
            </header>
            <main>{ children }</main>
            {
                !home && (
                    <div className="mt-12">
                        <Link href="/">
                            <a>← 返回首页</a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}