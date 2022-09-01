/*
 * @Author: wangkun
 * @Date: 2022-09-01 10:32:23
 * @LastEditTime: 2022-09-01 11:06:38
 * @LastEditors: wangkun
 * @Description: 
 */
import Image from 'next/image'
import { LOGO } from '../components/layout'
import styles from '../components/footer.module.css'

export default function Footer () {
    return (
        <section className={ 'flex-shrink-0 p-4 text-white ' + styles.d_footer }>
            <section>
                <Image
                    priority
                    className='rounded-full'
                    src={ LOGO }
                    width={ 70 }
                    height= { 70 }
                />
            </section>
        </section>
    )
}