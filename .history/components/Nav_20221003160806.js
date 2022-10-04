import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <Link href="/">Logo</Link>
        <ul>
            <Link href="/auth">
            <a className='py-2 px- bg-teal-500 my-5 rounded-lg text-white'>Join Now</a>
            </Link>
        </ul>
    </div>
  )
}

export default Nav