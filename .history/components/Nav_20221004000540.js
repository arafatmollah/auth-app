import React from 'react'
import Link from 'next/link'
import {useAuthState} from "react-firebase-hooks"



function Nav() {

  return (
    <div>
        <nav className='flex justify-between items-center py-10'>
        <Link href="/">Logo</Link>
        <ul>
          
               {

               }
              
    
        </ul>
        </nav>
    </div>
  )
}

export default Nav