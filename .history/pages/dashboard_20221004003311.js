import React from 'react'
import {auth} from '../'
import {useAuthState} from "react-firebase-hooks/auth"

function dashboard() {
  const [user,loading]=useAuthState()
  return (
    <div>
      <h3>Okay just I am {user.displayName}</h3>
    </div>
  )
}

export default dashboard