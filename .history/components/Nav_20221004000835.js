import React from 'react'
import Link from 'next/link'
import {auth} from "../../firebase"



function Nav() {

  return (
    <div>
        <nav className='flex justify-between items-center py-10'>
        <Link href="/">Logo</Link>
        <ul>
          
                <Link href="/auth/login">
             <a className='py-2 px-4 bg-teal-500 my-5 rounded-lg text-white'>Join Now</a>
             </Link>
              
    
        </ul>
        </nav>
    </div>
  )
}

export default Nav