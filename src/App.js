import React, { } from 'react'
import Contents from './components/Contents'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
// import ContentTable from './components/ContentTable'
import { Route, Switch, Link } from "react-router-dom"
import ContentTable from './components/ContentTable'

export default function App() {

  return (
    <div>
      <Header />
      <Menu />
      <Switch>
        <Route path="/Dashboard1" component={Contents} />
        <Route path="/Dashboard2" component={ContentTable} />
      </Switch>
      <Footer />
    </div>
  )
}

