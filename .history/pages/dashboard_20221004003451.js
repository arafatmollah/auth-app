import React from 'react'
import {auth} from '../firebase.init'
import {useAuthState} from "react-firebase-hooks/auth"

function dashboard() {
  const [user,loading]=useAuthState(auth)
  return (
    
  )}

export default dashboard