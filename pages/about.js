/*
 * @Author: wangkun
 * @Date: 2022-09-02 17:22:09
 * @LastEditTime: 2022-10-11 13:48:06
 * @LastEditors: faelssim
 * @Description: 
 */
import Link from 'next/link'
import Image from 'next/image'
import { LOGO } from '../components/layout'
import styles from './about.module.css'

export default function About () {
    const LOGO_SIZE = 100
    return (
        <div className='min-h-screen w-screen grid-bg flex flex-col items-center pt-10'>
            <Image
                className={ 'rounded-full ' + styles.i_logo }
                width={ LOGO_SIZE }
                height={ LOGO_SIZE }
                src={ LOGO }
            />
            <div className='mt-10 text-center leading-10'>
                <p>你没有如期归来</p>
                <p>而这正是离别的意义</p>
                <p>...</p>
            </div>
            <img
                className={ styles.d_img }
                src="https://s-bj-4351-lyra.oss.dogecdn.com/5c661e149753a9f7783abf9717b53c35.jpeg"
            />
            <div className='pt-10'>
                <Link href="/history">
                    <a>历史上的今天</a>
                </Link>
            </div>
            <div className='pt-5'>
                <Link href="/recipe">
                    <a>每日一文</a>
                </Link>
            </div>
        </div>
    )
}