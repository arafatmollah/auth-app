import React from 'react'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <div>
       <Nav></Nav>
        <main>
        {children}
        </main>
        </div>
  )
}
