import React from 'react'
import { useHistory } from 'react-router-dom'

import { srcClub1, srcClub2, srcClub3, srcClub4, srcClub5, iconLocation, iconBadminton, iconTennis, iconPool } from '@/assets'

import './styles.scss'

const CLUBS = [
  {
    logo: srcClub1,
    name: 'Allmänna TK Lund',
    location: 'Lovisastigen 2-4, Lund',
    actives: [iconBadminton, iconPool, iconTennis, iconTennis],
  },
  {
    logo: srcClub2,
    name: 'Allmänna TK Lund',
    location: 'Box 607, Danderyd',
    actives: [iconTennis, iconTennis],
  },
  {
    logo: srcClub3,
    name: 'Fågelbro G&CC',
    location: 'Fågelbrovägen 11-15, Värmdö',
    actives: [iconTennis, iconTennis],
  },
  {
    logo: srcClub4,
    name: 'Fyrisfjädern',
    location: 'Badmintonstigen 1, Uppsala',
    actives: [iconBadminton],
  },
  {
    logo: srcClub5,
    name: 'KLTK',
    location: 'Lidingövägen 25, Stockholm',
    actives: [iconBadminton],
  }
]
const Clubs = () => {
  const history = useHistory()
  const onSubmit = () => {
    localStorage.setItem('isLoggedIn', true)
    history.push('/')
  }
  return (
    <div className="clubs">
      {CLUBS.map(({ logo, name, location, actives }, index) => (
        <div key={index} className="club">
          <div className="logo-container">
            <img src={logo} alt={name} />
          </div>
          <div className="detail">
            <div className="name">{name}</div>
            <div className="location">
              <img src={iconLocation} />{location}
            </div>
            <div className="actives">
              {actives.map((active, index) => <img key={index} src={active} />)}
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
