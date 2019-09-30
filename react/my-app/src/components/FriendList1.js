import React from 'react'
import './FriendList.css'

function FriendList(props) {
    let { data } = props;


    return (
        <div className="friend-list">
            {
                Object.keys(data).map(key => {
                    return (
                        <div key= {data[key].title}
                        className="friend-group">
                            <dt>{data[key].title}</dt>
                            {
                                data[key].list.map(item => {
                                    return (
                                        <dd key={item.name}>
                                            {item.name}
                                        </dd>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FriendList