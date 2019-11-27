import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { ToastContainer } from 'react-toastify';



export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { signed } = true; // store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="Dashboard" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}


// const Routes = () => (
//   <BrowserRouter>
//     <ToastContainer autoClose={4000} />
//     <Switch>
//       <Route exact path="/" component={Dashboard} />
//       <Route path="/login" component={Login} />
//     </Switch>
//   </BrowserRouter>
// );

// export default Routes;
