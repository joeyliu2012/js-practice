import React from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <p>
                    用户名：<input type="text" />
                </p>
                <p>
                    密码：<input type="password" />
                </p>
                <p>
                    <button>登录</button>
                </p>
            </div>
        );
    }
}