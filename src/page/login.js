import React, { Component } from 'react'
import FormCreate from '../component/Form/FormCreate'
import Input from '../component/Form/Input'


class Login extends Component {

    submit=()=>{
        const {validateFields} = this.props;

        validateFields((err,values)=>{
            if(err){
                console.log("err",err);
                
            }else{
                console.log('success',values);
                
            }
        })
    }

    render() {
        const {getFieldDecorator,getFieldValue} = this.props;

        return (
            <div>
                {
                    getFieldDecorator("name",
                    {required: true, message:'请输入用户名'}
                    )(<Input type="text" placeholder="请输入用户名" />)
                }
                {
                    getFieldDecorator("password",
                    {required: true, message:'请输入用户名'}
                    )(<Input type="password" placeholder="请输入密码" />)
                }
                <button onClick={this.submit}>登录</button>
            </div>
        )
    }
}


export default FormCreate(Login)