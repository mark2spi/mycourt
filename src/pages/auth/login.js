import React, { useState } from 'react'
import cx from 'classnames'

import { Checkbox } from '@/components'
import { srcLogo } from '@/assets'
import './styles.scss'

const Login = ({ history }) => {
  const [loginTab, setLoginTab] = useState(true)
  const onSubmit = () => {
    localStorage.setItem('isLoggedIn', true)
    history.push('/')
  }
  return (
    <div className="login">
      <img className="logo" src={srcLogo} alt="logo" />
      <div class="form-title">{loginTab ? 'Log in to mycourt' : 'Register'}</div>

      <div class="tabs">
        <div class={cx('tab-login', { active: loginTab })} onClick={() => setLoginTab(true)}>Login</div>
        <div class={cx('tab-register', { active: !loginTab })} onClick={() => setLoginTab(false)}>Register</div>
      </div>

      {loginTab && (
        <form>
          <input placeholder="Email address" />
          <input className="mt-3 mb-4" type="password" placeholder="Password" />
          <Checkbox label="I agree to the terms" />
          <Checkbox label="Remember me" />
          <div className="d-flex justify-content-between align-items-center">
            <button onClick={onSubmit}>Sign in</button>
            <span>Forgot password?</span>
          </div>
        </form>
      )}

      {!loginTab && (
        <form>
          <input placeholder="Firstname" />
          <input className="my-3" placeholder="Surename" />
          <input className="mb-4" type="email" placeholder="Email" />
          <button onClick={onSubmit}>Register</button>
          <div className="terms">By clicking on "Register" you agree to our <span>terms of use</span> and privacy policy</div>
        </form>
      )}

    </div>
  )
}

export default Login
