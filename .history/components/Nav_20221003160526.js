import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <Link href="/">Logo</Link>
        <ul>
            <Link>
            <a className='py-3 background-teal-500 m'>Join Now</a>
            </Link>
        </ul>
    </div>
  )
}

export default Nav