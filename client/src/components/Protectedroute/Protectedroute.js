import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protectedroute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // Check if there is some user logged in already
        // Return the component associated to the url if successful or redirect if not
        if (user) {
          return <Component {...props} loggedInUser={user} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default Protectedroute;
