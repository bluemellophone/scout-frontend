import React from 'react';
import { get } from 'lodash-es';
import { Switch, Route } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import { TransitionGroup } from 'react-transition-group';
import AuthenticatedAppHeader from './components/AuthenticatedAppHeader';
import FourOhFour from './pages/fourohfour/FourOhFour';
import useSiteSettings from './models/site/useSiteSettings';
import SiteSetup from './pages/setup/SiteSetup';
import Footer from './components/Footer';
import { defaultCrossfadeDuration } from './constants/defaults';

export default function AuthenticatedSwitch() {
  const { data: siteSettings } = useSiteSettings();
  const siteNeedsSetup = get(siteSettings, [
    'site.needsSetup',
    'value',
  ]);

  return (
    <main>
      <AuthenticatedAppHeader />
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
                  {siteNeedsSetup ? (
                    <SiteSetup />
                  ) : (
                    <Switch location={location}>
                        {/* <Route path="/users/:id">
                        <User />
                      </Route>
                      <Route path="/users">
                        <Users />
                      </Route> */}
                      <Route path="/welcome">
                          <span>Welcome</span>
                      </Route>
                      <Route path="/" exact>
                          <span>Home</span>
                      </Route>
                      <Route>
                        <FourOhFour />
                      </Route>
                    </Switch>
                  )}
                </div>
                <Footer authenticated />
              </div>
            </Fade>
          </TransitionGroup>
        )}
      />
    </main>
  );
}
