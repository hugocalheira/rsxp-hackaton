import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" exact component={Login} />

            <Route path="/dashboard" component={Dashboard} isPrivate />

            <Route path="*" component={() => <Redirect to="/login" />} />
        </Switch>
    );
}
