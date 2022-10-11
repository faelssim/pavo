/*
 * @Author: faelssim
 * @Date: 2022-10-11 13:47:00
 * @LastEditTime: 2022-10-11 14:17:33
 * @LastEditors: faelssim
 * @Description: 
 */
import Head from 'next/head'
import {
    APP_ID,
    HISTORY_ON_TODAY
} from '../utils/app.config'
import styles from './history.module.css'

export default function History (props) {
    const { data: { data } } = props
    console.log(data)
    return Array.isArray(data) ? (
        <>
            <Head>
                <link href="https://fonts.googlefonts.cn/css?family=Nova+Mono" rel="stylesheet" />
            </Head>
            <div className={ styles.page }>
                <ul className={ styles['history-ul'] }>
                    {
                        data.map((item, index) => (
                            <li key={ index } data-date={ `${item.year}-${item.month}-${item.day}` }>
                                { item.title }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    ) : null
}

export async function getStaticProps () {
    const response = await fetch(`https://www.mxnzp.com/api/history/today?type=0&app_id=${APP_ID}&app_secret=${HISTORY_ON_TODAY}`, {
        method: 'GET'
    })
    const result = await response.json()
    return {
        props: {
            data: result
        }
    }
}