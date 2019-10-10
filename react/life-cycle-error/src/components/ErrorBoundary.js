import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // console.log("getDerivedStateFromError",error);
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log('error, info',error, info)
    }

    render() {
        if (this.state.hasError) {
            return <div>error</div>
        }
        return this.props.children;
    }
}