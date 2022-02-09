import React from 'react';
import {Route, Redirect} from 'react-router-dom';


 const Private = ({ component: Component, ...rest }) => {
    const loggedIn = !!localStorage.getItem("token");
    return (
      <Route
        {...rest}
        render={props => {
          return loggedIn ? (
            <Component {...props} />
          ) : ( 
            <Redirect
              to={{
                pathname: "/auth/login",
              }}
            />
          );
        }}
      />
    );
  };
  export default Private;