import React from 'react'
import {auth} from "../firebase.init"
import {useAuthState} from "react-firebase-hooks/auth"

function dashboard() {
  const [user,loading]=useAuthState
  return (
    <div>
      <h3>Okay just</h3>
    </div>
  )
}

export default dashboard