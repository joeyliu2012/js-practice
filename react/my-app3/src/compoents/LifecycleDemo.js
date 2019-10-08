import React from 'react'

export default class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Component Lifecycle</h1>
            </div>
        )
    }
}