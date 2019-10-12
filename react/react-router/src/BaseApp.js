import React from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Item from './views/Item'
import Cart from './views/Cart'
import './views/style.css'
import Login from './views/Login'

class BaseApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'iPhone XR',
                    price: 542500
                },
                {
                    id: 2,
                    name: 'Apple iPad Air 3',
                    price: 377700
                },
                {
                    id: 3,
                    name: 'Macbook Pro 15.4',
                    price: 1949900
                },
                {
                    id: 4,
                    name: 'Apple iMac',
                    price: 1629900
                },
                {
                    id: 5,
                    name: 'Apple Magic Mouse',
                    price: 72900
                },
                {
                    id: 6,
                    name: 'Apple Watch Series 4',
                    price: 599900
                }
            ],
            users: [
                {
                    id: 1,
                    username: 'baoge',
                    password: '123'
                },
                {
                    id: 2,
                    username: 'MT',
                    password: '123'
                },
                {
                    id: 3,
                    username: 'dahai',
                    password: '123'
                },
                {
                    id: 4,
                    username: 'zMouse',
                    password: '123'
                }
            ],
            userInfo: {
                id: 0,
                username: ''
            }
        }
    }

    render() {
        return (
            <div>
                <h2>router basic</h2>
                <nav>
                    <NavLink exact
                        activeStyle={{ 'color': 'red' }}
                        isActive={(match, location) => {
                            return match || location.pathname.startsWith('/item');
                        }}
                        to="/">Home</NavLink>
                    <span>|</span>
                    <NavLink activeStyle={{ 'color': 'red' }} to="/about">About</NavLink>
                    <span>|</span>
                    <NavLink to="/cart" activeStyle={{ color: 'red' }} exact>Cart</NavLink>
                </nav>
                <hr />
                {/* <Route exact path='/' component={Home} />  */}
                <Switch>
                    <Route exact path='/:page(\d*)' render={(props) => {
                        return (
                            <Home {...props} items={this.state.items} />
                        )
                    }} />
                    <Route path='/item/:id' render={(props) => {
                        return (
                            <Item {...props} items={this.state.items} />
                        )
                    }} />
                    <Route path='/about' component={About} />
                    <Route path='/login' component={Login} />
                    <Route path='/cart' render={() => {
                        if (this.state.userInfo.id > 0) {
                            return <Cart />
                        } else {
                            return <Redirect to='/login' />;
                        }
                    }} />
                    <Route component={() => {
                        return (<div>404 - Not Found!!!</div>)
                    }} />
                </Switch>
            </div>
        )
    }
}

export default BaseApp;