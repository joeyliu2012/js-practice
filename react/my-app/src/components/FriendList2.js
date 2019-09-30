import React from 'react'
import './FriendList.css'
import Item from './Item'

class FriendList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     expanded: true
        // }
        // this.expand = this.expand.bind(this);
    }

    expand() {
        // console.log('clicked');
        // // this.state.expanded = !this.state.expanded;
        // this.setState({
        //     expanded: !this.state.expanded
        // })
    }

    render() {
        let { data } = this.props;
        // let { expanded } = this.state;

        return (
            <div className="friend-list">
                {
                    Object.keys(data).map(key => {
                        return (
                           <Item key={data[key].title} data={data[key]}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default FriendList