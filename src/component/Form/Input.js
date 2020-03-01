import React, { Component } from 'react'
import './index.scss'
import {FormContext} from './context'

export default class Input extends Component {
    render() {
        const {type,placeholder,name,onChange} = this.props;
        
        return (
            <div className="inputItem">
                <input 
                    type={type}
                    name={name}
                    className="input" 
                    placeholder={placeholder}
                    onChange={onChange}
                ></input>
            </div>
        )
    }
}
