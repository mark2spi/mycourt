import React, { useState } from 'react'
import cx from 'classnames'

import { Checkbox } from '@/components'
import CLUBS from '@/mock/clubs.json'

import './styles.scss'

const ClubDetail = ({ match: { params }, history }) => {
  const [friends, setFriends] = useState([])
  const { id, name } = CLUBS.find(c => c.id.toString() === params.id)

  const addFriend = () => {
    setFriends([...friends, ''])
  }

  return (
    <div className="club-detail">
      <div className="club-detail-content">
        <div className="logo-container">
          <img src={require(`@/assets/images/clubs/${id}.png`)} alt={name} />
        </div>
        <div className="name">{name}</div>
        <div className="details">
          <div className="detail-item"><img src={require('@/assets/images/icons/tennis.svg')} alt="Sports" />Tennis inne</div>
          <div className="detail-item"><img src={require('@/assets/images/icons/calendar.svg')} alt="Date" />Tusday 24 Mars</div>
          <div className="detail-item"><img src={require('@/assets/images/icons/clock.svg')} alt="Time" />08:30 - 09:30</div>
        </div>
        <div className="tags">
          <div className="tag active">Cc</div>
          <div className="tag">Bana 1</div>
          <div className="tag">Bana 2</div>
          <div className="tag">Bana 3</div>
          <div className="tag">Bana 4</div>
          <div className="tag">Bana 6</div>
        </div>
        <div className="friends">
          <div className={cx('friend-list', { noFriends: !friends.length })}>
            <div className="d-flex" onClick={addFriend}><img src={require('@/assets/images/icons/users.svg')} alt="Users" />Play with your friends?</div>
            {friends.map((friend, index) => (
              <div key={index} className="friend">
                <div className="member">Member</div>
                <input placeholder="First & Lastname"></input>
                <div className="btn-add" onClick={addFriend}>+</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="terms">
          <Checkbox label={<>I accept the <span>Terms and Conditions</span></>} />
        </div>
        <div className="btn-book" onClick={() => history.push('/welcome')}>Book this course</div>
      </div>
    </div>
  )
}

export default ClubDetail
