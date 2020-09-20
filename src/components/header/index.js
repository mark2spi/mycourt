import React from 'react'
import cx from 'classnames'
import { useHistory } from 'react-router-dom'

import { srcAvatar } from '@/assets'
import './styles.scss'

const Header = () => {
  const history = useHistory()
  const { location: { pathname } } = history
  return (
    <header>
      <div className="loggedin-user">
        <img src={srcAvatar} alt="User" />
        Johan Andersson
      </div>
      <nav>
        <div className={cx('nav-item', { active: pathname.match('clubs') })} onClick={() => history.push('/clubs')}>Clubs</div>
        <div className={cx('nav-item', { active: pathname.match('reserve') })} onClick={() => history.push('/reserve')}>Reserve</div>
        <div className={cx('nav-item', { active: pathname.match('bookings') })} onClick={() => history.push('/bookings')}>My bookings</div>
      </nav>
    </header>
  )
}

export default Header
