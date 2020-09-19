import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Clubs from './clubs'
import { Header } from '@/components'

const Home = () => {
  const [activeNav, setActiveNav] = useState('clubs')
  return (
    <div>
      <Header activeNav={activeNav} onChangeNav={activeNav => setActiveNav(activeNav)} />
      {activeNav === 'clubs' && <Clubs />}
    </div>
  )
}

export default Home
