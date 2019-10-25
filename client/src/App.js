import React from 'react';
import Navigation from './components/Navbar';
import Body from './components/Body';
import SubmitModal from './components/SubmitModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/submit">
                    <SubmitModal toShow={true} />
                </Route>
                <Route path="/">
                    <Body />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
