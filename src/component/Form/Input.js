import React, { Component } from 'react'
import styles from './index.less'
import {FormContext} from './context'

export default class Input extends Component {
    render() {
        const {type,placeholder,name,onChange} = this.props;
        
        return (
            <div className={styles.inputItem}>
                <input 
                    type={type}
                    name={name}
                    className={styles.input} 
                    placeholder={placeholder}
                    onChange={onChange}
                ></input>
            </div>
        )
    }
}
