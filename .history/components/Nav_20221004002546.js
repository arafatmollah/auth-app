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
                !user && (
                  <Link href="/auth/login">
              <a className='py-2 px-4 bg-teal-500 my-5 rounded-lg text-white'>Join Now</a>
              </Link>
                )
              }
              {
                user && (
                  <Link>
                  <img src={user.photo}></img>
                  </Link>
                )
              }
           
              
              
    
        </ul>
        </nav>
    </div>
  )
}
