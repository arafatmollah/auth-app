import React from 'react'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <div className='mx-14'>
       <Nav></Nav>
        <main>
        {children}
        </main>
        </div>
  )
}
