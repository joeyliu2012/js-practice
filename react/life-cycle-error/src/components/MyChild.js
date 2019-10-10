import React from 'react'

export default class MyChild extends React.Component {
    render() {
        let obj = {x:1}
        return (
            <div>
                I am the child component
                {obj}
            </div>
        )
    }
}