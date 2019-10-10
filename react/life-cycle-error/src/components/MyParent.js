import React from 'react'
import MyChild from './MyChild' 
import ErrorBoundary from './ErrorBoundary'

export default class MyParent extends React.Component {



    render() {
        return (
            <div>
                <h2>I am the parent component</h2>
                <ErrorBoundary>
                    <MyChild />
                </ErrorBoundary>
                
            </div>
        )
    }
}