/*
 * @Author: wangkun
 * @Date: 2022-09-01 10:32:23
 * @LastEditTime: 2022-09-01 11:18:31
 * @LastEditors: wangkun
 * @Description: 
 */
import Image from 'next/image'
import Link from 'next/link'
import { LOGO } from '../components/layout'
import styles from '../components/footer.module.css'

export default function Footer () {
    return (
        <section className={ 'flex-shrink-0 p-4 text-white ' + styles.d_footer }>
            <section
                style={{ fontSize: 0 }}
                className='flex justify-between items-center'
            >
                <Image
                    priority
                    className='rounded-full'
                    src={ LOGO }
                    width={ 50 }
                    height= { 50 }
                />
                <Link href='/'>
                    <a className='text-xs text-white'>← 返回首页</a>
                </Link>
            </section>
        </section>
    )
}