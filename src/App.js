import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';


export default function App() {
    const { user } = useAuthListener();

    return (
        <Router>

            {/* HOME */}
            <IsUserRedirect 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.HOME}
                exact
            >
                <Home />
            </IsUserRedirect>

            {/* BROWSE */}
            <ProtectedRoute
                user={user}
                path={ROUTES.BROWSE}
                exact                       // can we remove exact from everything but HOME now
            >
                <Browse />
            </ProtectedRoute>

            {/* SIGN IN */}
            <IsUserRedirect 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.SIGN_IN}
                exact
            >
                <SignIn />
            </IsUserRedirect>

            {/* SIGN UP */}
            <IsUserRedirect 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.SIGN_UP}
                exact
            >
                <SignUp />
            </IsUserRedirect>
        
        </Router>    
    );
}
