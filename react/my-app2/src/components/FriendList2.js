import React from 'react'
import './FriendList.css'
import Item from './Item'

class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            expanded: true
        }
        this.expand = this.expand.bind(this);
    }

    expand() {
        // console.log('clicked');
        // // this.state.expanded = !this.state.expanded;
        // this.setState({
        //     expanded: !this.state.expanded
        // })
    }

    onExpand(n) {
        this.setState({
            index: n
        })
    }

    render() {
        let { data } = this.props;
        let { index } = this.state;

        return (
            <div className="friend-list">
                {
                    Object.keys(data).map((key, n) => {
                        return (
                           <Item key={data[key].title} data={data[key]} 
                           index={index}
                           n={n}
                           onExpand = {this.onExpand.bind(this)}
                           />
                        )
                    })
                }
            </div>
        )
    }
}

export default FriendList