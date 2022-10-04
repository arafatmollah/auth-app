import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { GoogleAuthProvider } from 'firebase/auth'
import {auth} from "../../firebase.init"
import {useAuthState} from 'react-firebase-hooks/auth'
import { async } from '@firebase/util'

export default function () {
const [user,loading] = useAuthState(auth)
const googleProvider = new GoogleAuthProvider()
const GoogleLogin = async ()=>{
try{
  const result = await SignInWithGoogle(auth,googleProvider)
  console.log(result)
}
catch(error){
  console.log(error)
}
}

  return (
    <div>
        <h2>Join us today</h2>
        <div>
            <p>Select Provider</p>
            <div className='flex flex-col w-30 justify-center align-middle mt-5 shadow-xl py-10 px-5'>
                <button onClick={Goo} className='bg-gray-700 text-white w-full flex align-middle gap-2 p-4 rounded-lg'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    Sign In with Google</button>
                <button className='bg-gray-700 text-white mt-5 flex align-middle p-4 gap-2 w-full rounded-lg'>
                    <AiFillFacebook className='text-blue-400 text-2xl'></AiFillFacebook>
                    Sign In with Google</button>
            </div>
        </div>
    </div>
  )
}
