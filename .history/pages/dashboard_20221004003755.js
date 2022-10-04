import { userAgent } from 'next/server'
import React from 'react'

function dashboard() {
  return (
    <div>
      It is dashboard {userAgent.}
    </div>
  )
}

export default dashboard