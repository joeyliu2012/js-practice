import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Item from './views/Item'
import './views/style.css'

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
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>router basic</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <span>|</span>
                    <Link to="/about">About</Link>
                </nav>
                <hr />
                {/* <Route exact path='/' component={Home} />  */}
                <Route exact path='/' render={() => {
                    return (
                        <Home items={this.state.items} />
                    )
                }} />
                <Route path='/item/:id' render={(props)=>{
                    return (
                        <Item {...props} items={this.state.items} />
                    )
                }} />
                <Route path='/about' component={About} />
            </div>
        )
    }
}

export default BaseApp;