import React from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  const onSubmit = () => {
    localStorage.setItem('isLoggedIn', true)
    history.push('/')
  }
  return (
    <button onClick={onSubmit}>Register</button>
  )
}

export default Register
