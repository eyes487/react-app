import React, { Component } from 'react'
import {createPortal} from 'react-dom';
import './index.scss'

export default class Dialog extends Component {
    constructor(props){
        super(props)

        const doc = window.document;
        this.node = doc.createElement("div")

        doc.body.appendChild(this.node);
    }

    componentWillUnmount(){
        window.document.body.removeChild(this.node)
    }
    render() {
        const {msg} = this.props;
        return createPortal(
            <div className="dialog">
                <p className="msg">{msg}</p>
            </div>,
            this.node
        )
    }
}
