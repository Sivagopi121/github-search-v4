import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../../constants/routes';
import Button from '../../Button';
import Input from '../../Input';

import { NavButtonsContainer, NavigationLink, NavigationSearch } from './navigationStyle';

const Navigation = ({
  location: { pathname },
  organizationName,
  onOrganizationSearch,
}) => (
  <NavButtonsContainer>
    <NavigationLink>
      <Link to={routes.PROFILE}>Profile</Link>
    </NavigationLink>
    <NavigationLink>
      <Link to={routes.ORGANIZATION}>Organization</Link>
    </NavigationLink>

    {pathname === routes.ORGANIZATION && (
      <OrganizationSearch
        organizationName={organizationName}
        onOrganizationSearch={onOrganizationSearch}
      />
    )}
  </NavButtonsContainer>
);

class OrganizationSearch extends React.Component {
  state = {
    value: this.props.organizationName,
  };

  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onSubmit = (event) => {
    this.props.onOrganizationSearch(this.state.value);

    event.preventDefault();
  };

  render() {
    const { value } = this.state;

    return (
      <NavigationSearch>
        <form onSubmit={this.onSubmit}>
          <Input
            color="white"
            type="text"
            value={value}
            onChange={this.onChange}
          />
          {' '}
          <Button color="white" type="submit">
            Search
          </Button>
        </form>
      </NavigationSearch>
    );
  }
}

export default withRouter(Navigation);
