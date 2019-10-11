import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Hire from '../Hire/Hire';
import Branding from '../Branding/branding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './navstyle.less';
const Nav = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li className="Logo">
                        <Link to="/">
                            <Branding />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About me</Link>
                    </li>
                    <li>
                        <Link to="/hireme">Hire me</Link>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faCoffee} />
                        </a>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/hireme">
                    <Hire />
                </Route>
            </Switch>
        </Router>
    );
};
export default Nav;
