import React from 'react'
import './mail.css'
import MultiInput from './MultiInput'

export default class Mail extends React.Component {
    constructor(...props) {
        super(...props);

        this.state = {
            friends: [
                {id: 1, name: '张三', email: 'zhangsan@email.com'},
                {id: 2, name: '李四', email: 'lisi@email.com'},
                {id: 3, name: '王五', email: 'wangwu@email.com'}
            ],
            user: null
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser(user) {
        // console.log(user);
        this.setState({
            user
        })
    }

    render() {
        let { friends, user } = this.state;

        return(
            <div className="clear">
                <h1>发送邮件</h1>
                <hr/>
                <ul className="box fl">
                    {
                        friends.map(friend => (
                            <li key={friend.id} onClick={e=>this.addUser(friend)}>
                                {friend.name}
                            </li>
                        ))
                    }
                </ul>
                <div className="fl">
                    <MultiInput user={user} test={123} />
                </div>
            </div>
        )
    }
}