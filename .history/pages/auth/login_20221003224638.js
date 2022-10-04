import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';

import app from '../../firebase.init';



const auth = getAuth(app)
export default function () {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          rou
        );
      }

  return (
    <div>
        <h2>Join us today</h2>
        <div>
            <p>Select Provider</p>
            <div className='flex flex-col w-30 justify-center align-middle mt-5 shadow-xl py-10 px-5'>
                <button onClick={()=>signInWithGoogle()} className='bg-gray-700 text-white w-full flex align-middle gap-2 p-4 rounded-lg'>
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
