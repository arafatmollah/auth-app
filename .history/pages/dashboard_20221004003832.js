import { userAgent } from 'next/server'
import React from 'react'

function dashboard() {
  return (
    {
      user && (
        <div>
      It is dashboard {user.displayName}
    </div>
      )
    }
  )
}

export default dashboard