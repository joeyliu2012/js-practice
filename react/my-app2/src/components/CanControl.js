import React from 'react'

export default class CanControl extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            v1: 'kaikeba'
        };
        this.changeValue = this.changeValue.bind(this);

        this.refDiv = null;
        this.refDiv2 = React.createRef();
    }

    changeValue({ target: { value: v1 } }) {
        this.setState({
            v1
        });
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.v1} onChange={this.changeValue} />
                <hr />
                <button onClick={()=>{
                    console.log(this.refDiv.style.width);
                    console.log(this.refDiv2.current.style.height)   // this.refDiv2.current
                }}>get info</button>
                <div ref={el => this.refDiv = el} style={{ width: '100px', height: '100px', background: 'red' }}></div>
                <div ref={this.refDiv2} style={{ width: '100px', height: '100px', background: 'red' }}></div>
            </div>

        )
    }
}
