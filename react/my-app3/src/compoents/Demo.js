import React from 'react'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                Hi, {this.props.username}
                {this.props.children}
            </div>
        )
    } 
}