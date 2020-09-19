import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  return (
    <Route
      {...rest}
      render={props => isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}