/*
 * @Author: wangkun
 * @Date: 2022-09-01 10:32:23
 * @LastEditTime: 2022-09-02 17:01:07
 * @LastEditors: wangkun
 * @Description: 
 */
import Image from 'next/image'
import Link from 'next/link'
import { LOGO } from '../components/layout'
import styles from '../components/footer.module.css'

export default function Footer () {
    return (
        <section className={ 'flex-shrink-0 text-white ' + styles.d_footer }>
            <section
                style={{ fontSize: 0 }}
                className='flex justify-between items-center flex-fullscreen px-4 h-full'
            >
                <Image
                    priority
                    className={ 'rounded-full ' + styles.i_f_logo }
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