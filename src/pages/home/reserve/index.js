import React from 'react'

import CLUBS from '@/mock/clubs.json'
import { iconLocation, iconExclamationMark } from '@/assets'

import './styles.scss'

const { id, name, location } = CLUBS[4]

const Reserve = ({ history }) => {
  return (
    <div className="reserve">
      <div className="club">
        <div className="logo-container">
          <img src={require(`@/assets/images/clubs/${id}.png`)} alt={name} />
        </div>
        <div className="detail">
          <div className="name">{name}</div>
          <div className="location">
            <img src={iconLocation} alt="Location" />{location}
          </div>
          <div className="sport">
            <img src={require('@/assets/images/icons/tennis.svg')} alt="Sports" />Tennis inne
          </div>
        </div>
        <i className="arrow right" />
      </div>
      <div className="reserve-field">Tennis inne <i className="arrow down" /></div>
      <div className="reserve-field">Friday 20 March <i className="arrow down" /></div>
      <div className="reserve-field">No coach selected <i className="arrow down" /></div>
      <div className="reserve-content">
        <div className="btn-search" onClick={() => history.push(`/reserve/detail/${id}`)}>Search for available courses</div>
        <div className="reserve-tip">
          <img src={iconExclamationMark} alt="exclamation-mark" />There are no activities available on this day
        </div>
      </div>
      <div className="reserve-link">Would you rather book in the desktop view? <span>click here</span></div>
    </div>
  )
}

export default Reserve
