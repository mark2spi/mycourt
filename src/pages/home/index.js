import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Clubs from './clubs'
import Reserve from './reserve'
import Bookings from './bookings'
import ClubDetail from './clubs/detail'
import { Header } from '@/components'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/clubs/detail/:id" component={ClubDetail} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/bookings" component={Bookings} />
        <Route exact path="/" component={Clubs} />
      </Switch>
    </div>
  )
}

export default Home
