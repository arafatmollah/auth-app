import React from 'react'
import Link from 'next/link'
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

function Nav() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
        <nav className='flex justify-between items-center py-10'>
        <Link href="/">Logo</Link>
        <ul>
          
             {
              !user && (
                
              )
             }
           
           
        </ul>
        </nav>
    </div>
  )
}

export default Nav