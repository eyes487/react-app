import React, { Component } from 'react'
import Layout from '../../Layout'
import Logo from '../../assets/order.png'
import './index.scss'

export default class order extends Component {
    render() {
        return (
            <Layout _className="orderPage">
                <div className="noData">
                    <img src={Logo} alt=""/>
                    <p className="noData-text">还没有订单哦~</p>
                </div>
            </Layout>
        )
    }
}
