import React from 'react'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <div className=''>
       <Nav></Nav>
        <main>
        {children}
        </main>
        </div>
  )
}
