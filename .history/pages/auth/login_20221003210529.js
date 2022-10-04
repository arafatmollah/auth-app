import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function () {
  return (
    <div>
        <h2>Join us today</h2>
        <div>
            <p>Select Provider</p>
            <div>
                <button className='bg-gray-700 text-white text-xl font-medium'>
                    <FcGoogle></FcGoogle>
                    Sign In with Google</button>
                <button className='bg-gray-700 text-white text-xl font-medium'>Sign In with Google</button>
            </div>
        </div>
    </div>
  )
}
