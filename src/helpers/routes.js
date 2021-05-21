import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// if no user: route to login, signup or home, if user: redirect to loggedInPath
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }
                
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }
                        
                return null;
            }}
        />
    );
}