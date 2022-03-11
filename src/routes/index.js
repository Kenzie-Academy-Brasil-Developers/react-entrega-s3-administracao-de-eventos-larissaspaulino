import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Casamento from '../pages/Casamento'
import Confraternizacao from '../pages/Confraternizacao'
import Formatura from '../pages/Formatura'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/casamento'>
        <Casamento />
      </Route>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route exact path='/confraternizacao'>
        <Confraternizacao />
      </Route>
      <Route exact path='/formatura'>
        <Formatura />
      </Route>
    </Switch>
  )
}

export default Routes
