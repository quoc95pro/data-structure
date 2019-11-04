import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import Layout from './layout';
import Routes from './routes';

class Template extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    {_.map(Routes, (route, key) => {
                        const { component, path, exact } = route;
                        return (
                            <Route
                                key={key}
                                render={(route) => <Layout component={component} route={route} />}
                                path={path}
                                exact={exact}
                            />
                        )
                    })}

                </Switch>
            </BrowserRouter>
        );
    }
}


export default Template;
