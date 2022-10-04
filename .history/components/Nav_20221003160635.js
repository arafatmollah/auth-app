import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <Link href="/">Logo</Link>
        <ul>
            <Link href="/auth">
            <a className='py-2 bg-teal-500 m-5 rounded-lg te'>Join Now</a>
            </Link>
        </ul>
    </div>
  )
}

export default Nav