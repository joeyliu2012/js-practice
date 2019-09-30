import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        }
        this.expand = this.expand.bind(this);
    }

    expand() {
        console.log('clicked');
        // this.state.expanded = !this.state.expanded;
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        let { expanded } = this.state;
        let { data } = this.props;

        return (
            <div key={data.title} onClick={this.expand}
                className={["friend-group", expanded ? "expanded" : ''].join(' ')}>
                <dt>{data.title}</dt>
                {
                    data.list.map(item => {
                        return (
                            <dd key={item.name}>
                                {item.name}
                            </dd>
                        )
                    })
                }
            </div>
        )
    }
}

export default Item;