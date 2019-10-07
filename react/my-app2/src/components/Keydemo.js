import React from 'react'

class KeyDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                {id:1, name:'html'},
                {id:2, name:'css'},
                {id:3, name:'javascript'}
            ]
        }
        this.sort = this.sort.bind(this);
    }

    sort() {
        this.setState({
            arr: this.state.arr.sort( _ => Math.random() - .5 )
        });
    }

    render() {
        let {arr} = this.state;
        return(
            <div>
                <ul>
                    {arr.map( (v, k) => (
                        <li key={v.id}>
                            <input type="checkbox"/>
                            <span>{v.name}</span>
                        </li>
                    ) )}
                </ul>
                <button onClick={this.sort}>乱序</button>
            </div>
        );
    }
}

export default KeyDemo;