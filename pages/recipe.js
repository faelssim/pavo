/*
 * @Author: wangkun
 * @Date: 2022-09-09 14:05:48
 * @LastEditTime: 2022-09-13 11:26:17
 * @LastEditors: wangkun
 * @Description: 
 */
import axios from 'axios'
import { useState } from 'react'
import useUpdateEffect from '../hooks/useUpdateEffect'
import Head from 'next/head'
import Image from 'next/image'
import styles from './recipe.module.css'
import img1 from '../public/images/pig.svg'
import img2 from '../public/images/chicken.svg'
import img3 from '../public/images/fish.svg'
import img4 from '../public/images/lotus.svg'
import img5 from '../public/images/cauliflower.svg'
import img6 from '../public/images/eggplant.svg'

const API_KEY = 'ook8iz1ArB4QQ31L6CL9WuszFP'

const MENUS = [
    { img: img1, name: '红烧肉' },
    { img: img2, name: '大盘鸡' },
    { img: img3, name: '红烧鱼' },
    { img: img4, name: '糖醋藕丁' },
    { img: img5, name: '干锅花菜' },
    { img: img6, name: '油焖茄子' }
]
const Recipe = (props) => {
    const [current, setCurrent] = useState(-1)
    const [data, setData] = useState({})
    const doTapMenu = (index) => {
        setCurrent(index)
    }
    const getRecipeData = async (i) => {
        const { data: { accessories, cooksteps, information } } = await axios.get('https://qqlykm.cn/api/recipe/get', {
            params: {
                name: MENUS[i].name,
                key: API_KEY
            }
        })
        setData({
            accessories,
            cooksteps,
            information
        })
    }

    useUpdateEffect(() => {
        getRecipeData(current)
    }, [current])

    return (
        <>
            <Head>
                <title>人间有味是清欢</title>
            </Head>
            <main className={ 'grid-bg ' + styles.d_page }>
                <nav className={ styles.d_menus }>
                    {
                        MENUS.map((item, index) => (
                            <a key={ index } onClick={ () => doTapMenu(index) }>
                                <Image
                                    src={ item.img }
                                    width={ 50 }
                                    height={ 50 }
                                />
                                <span className={ current === index ? `${styles.span_title} ${styles.span_title_active}` : styles.span_title }><span>{ item.name }</span></span>
                            </a>
                        ))
                    }
                </nav>
                {
                    data.information ? (
                        <>
                            <section className={ styles.d_title }>{ data.information.name }</section>
                            <section className={ styles.d_img } style={{ backgroundImage: `url(${data.information.foodpic})` }}></section>
                        </>
                    ) : null
                }
            </main>
        </>
    )
}
export default Recipe

// export const getStaticProps = async () => {
//     const res = await fetch(`https://qqlykm.cn/api/recipe/get?key=ook8iz1ArB4QQ31L6CL9WuszFP&name=红烧肉`, {
//         method: 'get',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const data = await res.json()
//     return {
//         props: {
//             data
//         }
//     }
// }

