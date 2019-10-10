import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items } = this.props;
        return (
            <div>
                <div>
                <h2>商品列表</h2>
                <ul className="item-list">
                    <li className="head">
                        <span>名称</span>
                        <span>价格</span>
                    </li>
                    {
                        items.map(item=>(
                            <li key={item.id}>
                                <span>
                                    <Link to={'/Item/' + item.id}>{item.name}</Link>
                                </span>
                                <span>￥ {(item.price / 100).toFixed(2)}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        )
    }
}

export default Home;