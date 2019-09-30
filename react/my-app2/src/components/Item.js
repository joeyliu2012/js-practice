import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
    }

    expand() {
        this.props.onExpand && this.props.onExpand(this.props.n);
    }

    render() {
        let { data, index, n } = this.props;

        return (
            <div key={data.title} onClick={this.expand}
                className={["friend-group", index===n ? "expanded" : ''].join(' ')}>
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