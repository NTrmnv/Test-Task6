import React from 'react';
import './app.css';
import Header from '../header';
import Employees from '../employees';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return(
        <React.Fragment>
            <Router>
            <Header/>
            <Switch>
                <Route path="/"
                        render={() => <h2>Добро пожаловать на главную страницу</h2>}
                        exact />
                <Route path="/employees" component={Employees} />
            </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App;