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
                        <span className="text-gray-600 font-light text-xs">{ date }</span>
                    </li>
                ))
            }
        </ul>
    )
}