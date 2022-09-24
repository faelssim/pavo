/*
 * @Author: wangkun
 * @Date: 2022-09-01 10:16:14
 * @LastEditTime: 2022-09-19 14:23:35
 * @LastEditors: faelssim
 * @Description: 
 */
import Link from 'next/link'

export default function Timeline ({ data }) {
    return (
        <ul
            className="w-8/12 "
        >
            {
                data.map(({ id, title, date }) => (
                    <li
                        key={ id }
                        className='flex justify-between items-center mb-5'
                    >
                        <Link
                            href={ `/posts/${id}` }
                        >
                            <a className="cursor-pointer text-blue-900 text-sm">{ title }</a>
                        </Link>
                        <span className="text-gray-600 font-light text-xs" style={{ fontFamily: 'Space Mono' }}>{ date }</span>
                    </li>
                ))
            }
            <li 
                className='flex justify-center items-center text-xs text-gray-400' 
                style={{ fontFamily: 'Laila', margin: '20px 0' }}
            >
                Powered by NEXT.JS
            </li>
        </ul>
    )
}