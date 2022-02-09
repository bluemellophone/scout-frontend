import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import { TransitionGroup } from 'react-transition-group';
import Login from './pages/auth/Login';
import RequestInvitation from './pages/auth/RequestInvitation';
import Forgot from './pages/auth/Forgot';
import Create from './pages/auth/Create';
import { defaultCrossfadeDuration } from './constants/defaults';

export default function UnauthenticatedSwitch() {
  const { pathname } = useLocation();

  return (
    <main>
      <Route
        render={({ location }) => (
          <TransitionGroup appear>
            <Fade
              key={location.key}
              timeout={defaultCrossfadeDuration}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    minHeight: 'calc(100vh - 64px)',
                    boxSizing: 'border-box',
                  }}
                >
                  <Switch location={location}>
                    <Route path="/forgot">
                      <Forgot />
                    </Route>
                    <Route path="/request">
                      <RequestInvitation />
                    </Route>
                    <Route path="/create">
                      <Create />
                    </Route>
                    <Route path="/login">
                      <Login redirect="/" />
                    </Route>
                    <Route path="/" exact>
                      <Login redirect="/" />
                    </Route>
                    <Route>
                      <Login showBanner redirect={pathname} />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Fade>
          </TransitionGroup>
        )}
      />
    </main>
  );
}
