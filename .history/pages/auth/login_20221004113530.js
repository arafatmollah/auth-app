import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from "../../firebase.init"
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'

export default function () {
const [user,loading] = useAuthState(auth)
const route = useRouter()
const googleProvider = new GoogleAuthProvider()
const GoogleLogin = async ()=>{
try{
  const result = await signInWithPopup(auth,googleProvider)
  console.log(result.user)
   route.push('/dashboard')
}
catch(error){
  console.log(error)
}
}
  return (
    <div>
        <div className='mx-30'>
           
            <div className='flex flex-col w-4/5 mx-au justify-center align-middle mt-5 shadow-xl py-10 px-5'>
            <p className='text-center font-semibold my-5 text-teal-800'>Log In here</p>
                <button onClick={GoogleLogin} className='bg-gray-700 text-white w-full flex align-middle gap-2 p-4 rounded-lg'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    Sign In with Google</button>
                    <p className='my-5 text-gray-700 text-center'>Have any Questions</p>
            </div>
        </div>
    </div>
  )
}

