import React from 'react'
import './Dialog.css'
import PropTypes from 'prop-types'

export default class Dialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            v: 1
        }
    }
    /**
    * propTypes 是组件的一个静态属性，它的值是一个对象，用来设置组件中 props 的验证规则的
    */
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        title: 'title'
    }


    render() {
        return (
            <div className="dialog">
                <i className="dialog_close_btn"></i>
                <div className="dialog_header">
                    <span className="dialog_title">{this.props.title}</span>
                </div>
                <div className="dialog_content">
                    {/* {this.props.content} */}
                    {this.props.children}
                </div>
                <hr />
                <input type='text' defaultValue={this.state.v} />
            </div>
        )
    }
}