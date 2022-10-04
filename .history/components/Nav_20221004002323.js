import React from 'react'
import Link from 'next/link'
import {auth} from "../firebase.init"
import {useAuthState} from "react-firebase-hooks/auth"


export default function Nav() {
const [user,loading]=useAuthState(auth)
  return (
    <div>
        <nav className='flex justify-between items-center py-10'>
        <Link href="/">Logo</Link>
        <ul>
         
              {
                !user
              }
           
              
              
    
        </ul>
        </nav>
    </div>
  )
}
