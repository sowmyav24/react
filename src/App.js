import React, {Component} from 'react';
import 'react-table/react-table.css'
import './App.css';
import PromotionApp from './PromotionApp';
import AssortmentApp from './AssortmentApp';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to={'/promotion'}>Promotion</Link></li>
                            <li><Link to={'/assortment'}>Assortment</Link></li>
                        </ul>

                        <Switch>
                            <Route exact path='/promotion' component={PromotionApp}/>
                            <Route exact path='/assortment' component={AssortmentApp}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
