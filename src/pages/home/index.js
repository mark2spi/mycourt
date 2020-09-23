import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Clubs from './clubs'
import Reserve from './reserve'
import Bookings from './bookings'
import Welcome from './welcome'
import ClubDetail from './clubs/detail'
import ReserveDetail from './reserve/detail'
import { Header } from '@/components'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/clubs/detail/:id" component={ClubDetail} />
        <Route path="/reserve/detail/:id" component={ReserveDetail} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/" component={Clubs} />
      </Switch>
    </div>
  )
}

export default Home
