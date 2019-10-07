import React from 'react'
import './Dialog.css'

export default class Dialog extends React.Component {
    render() {
        return (
            <div className="dialog">
                <i className="dialog_close_btn"></i>
                <div className="dialog_header">
                    <span className="dialog_title">{this.props.title}</span>
                </div>
                <div className="dialog_content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}