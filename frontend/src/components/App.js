import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './todos/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Dashboard />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));