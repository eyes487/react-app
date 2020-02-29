import React,{Component } from 'react';
import {FormContext} from './context'

export default function FormCreate(Cmp){
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {}
            this.options = {}
        }

        handleChange=(e)=>{
            let {name,value} = e.target;
            
            this.setState({
                [name]: value
            })
        }
        
        getFieldDecorator=(field,option)=>{
            this.options[field] = option;
            return (InputCmp)=>{
                return React.cloneElement(InputCmp,{
                    name: field,
                    value: this.state[field] || '',
                    onChange: this.handleChange
                })
            }
        }
        getFieldsValue=()=>{
            return {...this.state}
        }
        getFieldValue=(name)=>{
            return this.state[name]
        }

        validateFields = callback =>{
            const errors = {};
            const state = {...this.state};
            for(let name in this.options){
                if(this.options[name].required&&this.state[name] === undefined || this.state[name] === ''){
                    errors[name] = this.options[name].message
                }
            }
            if(JSON.stringify(errors) === "{}"){
                callback(undefined,state)
            }else{
                callback(errors,state)
            }
        }
        render(){
            return(
                <div>
                    <Cmp 
                        getFieldDecorator={this.getFieldDecorator}
                        getFieldValue={this.getFieldValue}
                        validateFields={this.validateFields}
                    />
                </div>
            )
        }
    }
}