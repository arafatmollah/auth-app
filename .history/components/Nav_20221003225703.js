import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
        <nav className='flex justify-between items-center py-10'>
        <Link href="/">Logo</Link>
        <ul>
           {!user &&
           
           }
        </ul>
        </nav>
    </div>
  )
}

export default Nav