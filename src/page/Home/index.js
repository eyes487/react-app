import React, { Component } from 'react'
import Layout from '../../Layout'
import './index.scss'
import {productList}  from '../../mock/home';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Dialog from '../../component/Message'

let timer = null;
@connect(
    ({product,user}) => ({product,user})
)
class home extends Component {

    state={
        show: false
    }
    componentDidMount(){
        const {dispatch} = this.props;

        dispatch({type: 'save', payload:{productList}})
    }
    onAddCart=(record)=>{
        const {product: {cartList},user:{isLogin},dispatch,history} = this.props;
        
        if(!isLogin){
            return history.push('/login')
        }
        let list = [...cartList];

        list.push(record)
        dispatch({type: 'save', payload:{cartList: list}})
        this.setState({
            show: true
        })
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            this.setState({
                show: false
            })
        },2000)
    }
    componentWillUnmount(){
        clearTimeout(timer)
    }
    render() {
        const {product: {productList}} = this.props;
        
        return (
            <Layout _className="homePage">
                {this.state.show&& <Dialog msg="加入购物车成功~"/>}
                <div className="searchWrapper">
                    <span className={"iconfont icon-sousuo searchIcon"}></span>
                    <input type="text" className="search"/>
                </div>
                <div className="itemWrapper">
                    {
                        productList.map(v=>
                        <div className="item" key={v.id}>
                            <img src={require('../../assets/product-list/'+v.imgSrc)} alt=""/>
                            <p className="desc">{v.desc}</p>
                            <div className="operate">
                                <p className="price">￥{v.price}.00</p>
                                <button className="onAddCart" onClick={()=>this.onAddCart(v)}>加入购物车</button>
                            </div>
                        </div>
                        )
                    }
                    
                </div>
            </Layout>
        )
    }
}

export default home;
