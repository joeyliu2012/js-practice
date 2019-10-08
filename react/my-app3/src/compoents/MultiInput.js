import React from 'react'

export default class MultiInput extends React.Component {
    constructor(...props) {
        super(...props);

        this.state = {
            users: [],
            email: ''
        }
        this.keyDown = this.keyDown.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        if(props.user) {
            return {
                users: [...state.users, props.user]
            }
        }
        /**
         * 这个生命周期函数一定要有返回值，返回值将设置给组件的 state
         */
        return null;
    }

    keyDown({target,keyCode}) {
        // console.log(keyCode);
        if( 13 === keyCode) {
            this.setState({
                users: [...this.state.users, {
                    name: '',
                    email: target.value
                }]
            })
            target.value = '';
        }
    }

    render() {
        let { users } = this.state;

        return (
            <div className="multi-input">
                {
                    users.map(user => (
                        <div key={user.email}>{user.name} {user.email};</div>
                    ))
                }
                <div>
                    <input type="text" onKeyDown={this.keyDown} />
                </div>
            </div>
        );
    }
}