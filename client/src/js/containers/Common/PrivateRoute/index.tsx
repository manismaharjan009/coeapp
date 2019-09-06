import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    authentication={rest.isAuthentic}
    render={props =>
      rest.isAuthentic ? (
        <Component {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

/* PrivateRoute.defaultProps = {
  location: {}
}; */

/* PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object // eslint-disable-line react/forbid-prop-types
}; */

export default PrivateRoute;
