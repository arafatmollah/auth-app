import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

export default function () {
  return (
    <div>
        <h2>Join us today</h2>
        <div>
            <p>Select Provider</p>
            <div className='flex p-4 flex-col w-100 jus'>
                <button className='bg-gray-700 text-white align-middle'>
                    <FcGoogle></FcGoogle>
                    Sign In with Google</button>
                <button className='bg-gray-700 text-white mt-5 align-middle'>
                    <AiFillFacebook></AiFillFacebook>
                    Sign In with Google</button>
            </div>
        </div>
    </div>
  )
}
