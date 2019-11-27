import React, {useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const [ signed, setSigned ] = useState(false); // store.getState().auth;

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            let [ user, date ] = token.split('.');
            user = JSON.parse(atob(user));
            date = JSON.parse(atob(date));

            if (date+(60*30*1000) < new Date().getTime()) {
                localStorage.removeItem('token')
                setSigned(false)
            } else {
                setSigned(true)
            }
        }
    },[])

    if (!signed && isPrivate) {
        return <Redirect to="/login" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    // const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={props => (
                // <Layout>
                    <Component {...props} />
                // </Layout>
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
