import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CricketContext from '../../context/cricket/cricketContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cricketContext = useContext(CricketContext);
  const { oldMatchExists } = cricketContext;
  return (
    <Route
      {...rest}
      render={props =>
        !oldMatchExists ? (
          <Redirect to='/' />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};

export default PrivateRoute;