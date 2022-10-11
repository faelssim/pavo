import Head from 'next/head'
import styles from './daily.module.css'

export default function Weather (props) {
    const { data } = props
    console.log(data)
    return (
        <>
            <Head>
                <link href="https://fonts.googlefonts.cn/css?family=Comfortaa" rel="stylesheet"></link>
            </Head>
            <div className={ styles.page }>
                <p className={ styles.title }>222</p>
                <div
                    className={ styles.content }
                    // dangerouslySetInnerHTML={{ __html: data.content }}
                >
                    dsd
                </div>
            </div>
        </>
    )
}

const TOKEN = 'LwExDtUWhF3rH5ib'

export async function getStaticProps () {
    const response = await fetch(`https://api.66mz8.com/api/music.163.php?format=json`, {
        method: 'get'
    })
    const result = await response.json()
    return {
        props: {
            data: result
        }
    }
}