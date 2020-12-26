import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainPage from '../src/pages/main'
import Login from '../src/pages/login'
import {CssBaseline} from '@material-ui/core'

  const App = () => (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  )

export default App
