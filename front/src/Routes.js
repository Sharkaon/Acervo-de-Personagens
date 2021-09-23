import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Pages from './pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Pages.Home />
                </Route>
                <Route path="/formChar">
                    <Pages.FormChar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;