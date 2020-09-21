import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Profile from '../Profile';
import Organization from '../Organization';

import * as routes from '../constants/routes';
import {
  AppContainer, AppContentLargeHeader, AppContentSmallHeader, Appmain,
} from './appStyle';
class App extends Component {
  state = {
    organizationName: 'mastercard',
  };

  onOrganizationSearch = (value) => {
    this.setState({ organizationName: value });
  };

  render() {
    const { organizationName } = this.state;

    return (
      <Router>
        <AppContainer>
          <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />

          <Appmain>
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <AppContentLargeHeader>
                  <Organization organizationName={organizationName} />
                </AppContentLargeHeader>
              )}
            />
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <AppContentSmallHeader>
                  <Profile />
                </AppContentSmallHeader>
              )}
            />
          </Appmain>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
