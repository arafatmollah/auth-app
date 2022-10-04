import React from 'react'
import Link from 'next/link'
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../firebase.init"


function Nav() {
const [user,loading]=useAuthState(auth)
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