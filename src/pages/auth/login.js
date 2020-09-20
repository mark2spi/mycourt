import React from 'react'

const Login = ({ history }) => {
  const onSubmit = () => {
    localStorage.setItem('isLoggedIn', true)
    history.push('/')
  }
  return (
    <button onClick={onSubmit}>Login</button>
  )
}

export default Login
