import React from 'react'

const Register = ({ history }) => {
  const onSubmit = () => {
    localStorage.setItem('isLoggedIn', true)
    history.push('/')
  }
  return (
    <button onClick={onSubmit}>Register</button>
  )
}

export default Register
