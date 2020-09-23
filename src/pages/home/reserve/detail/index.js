import React from 'react'
import cx from 'classnames'

import CLUBS from '@/mock/clubs.json'

import './styles.scss'

const { id, name } = CLUBS[4]

const TIME_SLOTS = [
  {
    label: '07:00'
  },
  {
    label: '07:30'
  },
  {
    label: '08:00'
  },
  {
    label: '08:30'
  },
  {
    label: '09:00'
  },
  {
    label: '09:30'
  },
  {
    label: '10:00'
  },
  {
    label: '10:30'
  },
  {
    label: '11:00'
  },
  {
    label: '11:30'
  },
  {
    label: '12:00'
  },
  {
    label: '12:30'
  },
  {
    label: '13:00',
    active: true
  },
  {
    label: '13:30'
  },
  {
    label: '14:00'
  },
  {
    label: '14:30'
  },
  {
    label: '15:00',
    disable: true
  },
  {
    label: '15:30'
  },
  {
    label: '16:00',
    disable: true
  },
  {
    label: '16:30'
  },

  {
    label: '17:00',
    disable: true,
  },
  {
    label: '17:30'
  },
  {
    label: '18:00',
    disable: true
  },
  {
    label: '18:30'
  },
  {
    label: '19:00'
  },
  {
    label: '19:30'
  },
  {
    label: '20:00'
  },
  {
    label: '20:30'
  },
  {
    label: '21:00'
  }]

const ReserveDetail = ({ history }) => {
  return (
    <div className="reserve-detail">
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
        </div>
      </div>
      <div className="reserve-tip">
        <img src={require('@/assets/images/icons/clock.svg')} alt="Date" />
        <i>Click on busy times to add to the waiting list</i>
      </div>
      <div className="reserve-subTitle">Tennis inne</div>
      <div className="reserve-slots">
        {TIME_SLOTS.map(({ label, active, disable }, index) =>
          <div key={index} className={cx('reserve-slot', { active, disable })} onClick={() => !disable && history.push(`/clubs/detail/1`)}>{label}</div>
        )}
      </div>
    </div>
  )
}

export default ReserveDetail
