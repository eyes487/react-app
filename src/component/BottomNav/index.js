import React, { Component,Fragment } from 'react'
import { Link } from "react-router-dom";
import './index.scss'

const menu = [
    {
        key: "home",
        title: "首页",
        link: "/",
        icon: "shouye"
    },
    {
        key: "cart",
        title: "购物车",
        link: "/cart",
        icon: "fenlei"
    },
    {
        key: "order",
        title: "订单列表",
        link: "/order",
        icon: "icon-"
    },
    {
        key: "my",
        title: "我的淘宝",
        link: "/my",
        icon: "wode"
    }
];


export default class BottomNav extends Component {
    render() {
        return (
            <div style={{height: 50}}>
            <ul className="bottomNav">
                {menu.map(item => (
                    <MenuItem key={item.key} {...item} />
                ))}
            </ul>
            </div>
        )
    }
}

function MenuItem(props) {
    let path = window.location.pathname;
    return (
        <Fragment>
            {
                path === props.link?
                <li className="menuItem active">
                    <span className={"iconfont icon-" + props.icon}></span>
                    <Link to={props.link}>{props.title}</Link>
                </li>:
                <li className="menuItem">
                    <span className={"iconfont icon-" + props.icon}></span>
                    <Link to={props.link}>{props.title}</Link>
                </li>
            }
        </Fragment>
        
    );
}