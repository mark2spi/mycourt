import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const onSubmit = () => {
    localStorage.setItem('isLoggedIn', true)
    history.push('/')
  }
  return (
    <button onClick={onSubmit}>Login</button>
  )
}

export default Login
