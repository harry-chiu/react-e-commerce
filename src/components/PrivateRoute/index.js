import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';

const PrivateRoute = ({ path, component }) => {

    const signIn = false;

    return !signIn
        ? <Redirect to="/sign-in" />
        : <Route path={path} component={component} />;
};

export default PrivateRoute;