import React from 'react'

class Item extends React.Component {
    render() {
        let { id } = this.props.match.params;
        let { items } = this.props;
        let item = items.find(it => it.id === Number(id));

        console.log(this.props, id);
        return item ? (
            <div>
                <h2>商品详情 - {item.name}</h2>
                <dt>ID</dt>
                <dd>{item.id}</dd>
                <dt>名称</dt>
                <dd>{item.name}</dd>
                <dt>价格</dt>
                <dd>￥ {(item.price / 100).toFixed(2)}</dd>
            </div>
        ) : <div>不存在该商品！</div>;
    }

}

export default Item;