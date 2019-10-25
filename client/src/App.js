import React from 'react';
import Navigation from './components/Navbar';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/submit">
                    <div>Hello Submit</div>
                </Route>
                <Route path="/">
                    <Body />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
