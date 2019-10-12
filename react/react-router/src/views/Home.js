import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: 'desc'
        }
        this.changeSort = this.changeSort.bind(this);
    }

    changeSort({target:{value:sort}}) {
        // console.log(value);
        this.setState({
            sort
        })
    }

    render() {
        let { items, history: { push }, location:{ search } } = this.props;
        // let { sort } = this.state;
        // console.log(sort)

        // console.log(search);
        let qs = new URLSearchParams(search);
        let sort = qs.get('sort');

        sort = sort || 'desc';

        items.sort((a,b)=>{
            return sort === 'asc' ? a.price - b.price : b.price - a.price;
        })

        return (
            <div>
                <div>
                    <h2>商品列表</h2>

                    {/* <select value={sort} onChange={this.changeSort}> */}
                    <select defaultValue={sort} onChange={
                        e=>{
                            push('./?sort=' + e.target.value)
                        }
                    }>
                        <option value="desc">从高到低</option>
                        <option value="asc">从低到高</option>
                    </select>

                    <ul className="item-list">
                        <li className="head">
                            <span>名称</span>
                            <span>价格</span>
                        </li>
                        {
                            items.map(item => (
                                <li key={item.id}>
                                    <span>
                                        <Link to={'/item/' + item.id}>{item.name}</Link>
                                    </span>
                                    <span>￥ {(item.price / 100).toFixed(2)}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <hr />
                    <Pagination pages={10} page={2}/>
                </div>
            </div>
        )
    }
}

export default Home;