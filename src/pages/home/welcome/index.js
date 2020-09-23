import React from 'react'

import CLUBS from '@/mock/clubs.json'

import './styles.scss'

const { id, name } = CLUBS[4]

const Welcome = ({ history }) => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <div className="content-header">
          Your booking is ready.
        </div>
        <div className="content-body">
          <div className="club">
            <div className="logo-container">
              <img src={require(`@/assets/images/clubs/${id}.png`)} alt={name} />
            </div>
            <div className="detail">
              <div className="name">{name}</div>
              <div className="detail-field">
                <img src={require('@/assets/images/icons/tennis.svg')} alt="Sports" />Tennis inne
              </div>
              <div className="detail-field">
                <img src={require('@/assets/images/icons/calendar.svg')} alt="Date" />Tusday 24 Mars
              </div>
              <div className="detail-field">
                <img src={require('@/assets/images/icons/clock.svg')} alt="Time" />08:30 - 09:30
              </div>
              <div className="detail-field">
                <img src={require('@/assets/images/icons/play-ground.svg')} alt="PlayGround" />Bana 8
              </div>
              <div className="detail-field">
                <img src={require('@/assets/images/icons/user.svg')} alt="User" />Medspelare: 1 Guest
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-cancel" onClick={() => history.push('/clubs')}>Cancel</div>
    </div>
  )
}

export default Welcome
