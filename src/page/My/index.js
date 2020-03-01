import React, { Component } from 'react'
import Layout from '../../Layout'
import Logo from '../../assets/head-sculpture.jpg'
import './index.scss'
import { connect } from "react-redux";

@connect(
    ({user}) => ({user})
)
 class My extends Component {
    render() {
        const {user:{userInfo} } = this.props;
        return (
            <Layout>
                <div className="head_sculpture">
                    <img src={Logo} alt=""/>
                </div>
                <h3 className="username">{userInfo.username}</h3>
            </Layout>
        )
    }
}
export default My;