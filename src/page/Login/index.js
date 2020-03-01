import React, { Component } from 'react'
import FormCreate from '../../component/Form/FormCreate'
import Input from '../../component/Form/Input'
import './index.scss'
import Logo from '../../assets/logo.png'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

@connect(
    ({user}) => ({user})
)
class Login extends Component {

    submit=()=>{
        const {validateFields,dispatch} = this.props;

        validateFields((err,values)=>{
            if(err){
                console.log("err",err);
            }else{
                console.log('values',values);
                if(values.username === "eyes487" && values.password === "123456"){
                    dispatch({type: 'loginSuccess', payload: values})
                }
                
            }
        })
    }

    render() {
        const {getFieldDecorator,user: {isLogin},location} = this.props
        console.log('this.props',this.props);
        
        if (isLogin) {
            const redirect =(location&&location.state && location.state.redirect) || "/";
            return <Redirect to={redirect} />;
        }
        return (
            <div className="loginPage">
                <div className="logo" >
                    <img src={Logo} />
                </div>
                {
                    getFieldDecorator("username",
                    {required: true, message:'请输入用户名'}
                    )(<Input type="text" placeholder="请输入用户名" />)
                }
                {
                    getFieldDecorator("password",
                    {required: true, message:'请输入用户名'}
                    )(<Input type="password" placeholder="请输入密码" />)
                }
                <button className="loginBtn" onClick={this.submit}>登 录</button>
            </div>
        )
    }
}


export default FormCreate(Login)