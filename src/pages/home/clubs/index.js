import React from 'react'

import CLUBS from '@/mock/clubs.json'
import { iconLocation } from '@/assets'

import './styles.scss'

const Clubs = ({ history }) => {
  return (
    <div className="clubs">
      {CLUBS.map(({ id, name, location, actives }, index) => (
        <div key={index} className="club" onClick={() => history.push(`/clubs/detail/${id}`)}>
          <div className="logo-container">
            <img src={require(`@/assets/images/clubs/${id}.png`)} alt={name} />
          </div>
          <div className="detail">
            <div className="name">{name}</div>
            <div className="location">
              <img src={iconLocation} alt="Location" />{location}
            </div>
            <div className="actives">
              {actives.map((active, index) => <img key={index} src={require(`@/assets/images/icons/${active}.svg`)} alt="Sports" />)}
            </div>
          </div>
          <span className="icon-arrow">&gt;</span>
        </div>
      ))}

      <div className="footer">
        <div className="btn-addClub">Add Clubs</div>
      </div>
    </div>
  )
}

export default Clubs
