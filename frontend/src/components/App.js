import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Dashboard from './todos/Dashboard';
import history from '../history';
import TodoDelete from './todos/TodoDelete';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}> 
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route exact path='/delete/:id' component={TodoDelete} />
                    </Switch>
                </Router>
                {/* <Dashboard /> */}
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));