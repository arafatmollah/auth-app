import React from 'react'
import Link from 'next/link'
import {useAuthState} from ''

function Nav() {
  return (
    <div>
        <nav className='flex justify-between items-center py-10'>
        <Link href="/">Logo</Link>
        <ul>
           {!user && (
             <Link href="/auth/login">
             <a className='py-2 px-4 bg-teal-500 my-5 rounded-lg text-white'>Join Now</a>
             </Link>
           )}
           {
            user && (
              <img src={user.photoURL}></img>
            )
           }
        </ul>
        </nav>
    </div>
  )
}

export default Nav