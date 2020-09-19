import React, { useState } from 'react'
import cx from 'classnames'

import { srcAvatar } from '@/assets'
import './styles.scss'

const Header = ({ activeNav, onChangeNav}) => {
  return (
    <header>
      <div className="loggedin-user">
        <img src={srcAvatar} alt="User" />
        Johan Andersson
      </div>
      <nav>
        <div className={cx('nav-item', { active: activeNav === 'clubs' })} onClick={() => onChangeNav('clubs')}>Clubs</div>
        <div className={cx('nav-item', { active: activeNav === 'reserve' })} onClick={() => onChangeNav('reserve')}>Reserve</div>
        <div className={cx('nav-item', { active: activeNav === 'bookings' })} onClick={() => onChangeNav('bookings')}>My bookings</div>
      </nav>
    </header>
  )
}

export default Header
