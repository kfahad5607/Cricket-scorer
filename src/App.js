import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'custom-input-aslam/build/index.css';
import './App.css';
import './Phone.css';
import Scoreboard from '../src/components/Scoreboard';
import Scorecard from './components/scorecard/Scorecard';
import CricketState from './context/cricket/CricketState';
import AlertState from './context/alert/AlertState';
import MatchDetails from './components/matchDetails/MatchDetails'
import PlayersDetails from './components/matchDetails/PlayersDetails';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateRoute2 from './components/routing/PrivateRoute2';
import PrivateRoute3 from './components/routing/PrivateRoute3';
import NotFound from './components/layout/pages/NotFound'
import { Container } from 'react-bootstrap';

function App() {
  useEffect(() => {
    // eslint-disable-next-line
  }, [])
  return (
    <CricketState>
      <AlertState>
        <Router>
          <Container>
            <Alert />
            <CricketState />
            {/* <Navbar /> */}
            <Switch>
              <PrivateRoute exact path='/' component={MatchDetails} />
              <PrivateRoute3 exact path='/playerDetails' component={PlayersDetails} />
              <PrivateRoute2 exact path='/scoreboard' component={Scoreboard} />
              <PrivateRoute2 exact path='/scorecard' component={Scorecard} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Router>
      </AlertState>
    </CricketState>
  );
}

export default App;
