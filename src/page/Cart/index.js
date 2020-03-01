import React, { Component } from 'react'
import Layout from '../../Layout'
import './index.scss'
import { connect } from "react-redux";
import Logo from '../../assets/cart.png';
import Dialog from '../../component/Message'

let timer = null;
@connect(
    ({product}) => ({product})
)
class Cart extends Component {
    state={
        show: false
    }

    onDelete=(record)=>{
        const {product: {cartList},dispatch} = this.props;

        let list = cartList.filter(v=>v.id !== record.id)
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
        const {product:{cartList}} = this.props;
        
        return (
            <Layout _className="cartPage">
                {this.state.show&& <Dialog msg="删除成功~"/>}
                {cartList&&cartList.length?<div className="itemWrapper">
                    {
                        cartList.map(v=>
                        <div className="item" key={v.id}>
                            <img src={require('../../assets/product-list/'+v.imgSrc)} alt=""/>
                            <div>
                                <p className="desc">{v.desc}</p>
                                <div className="operate">
                                    <p className="price">￥{v.price}.00</p>
                                    <p className="num">数量：1</p>
                                    <button className="deleteBtn" onClick={()=>this.onDelete(v)}>删除</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    
                </div>:<div className="noData">
                    <img src={Logo} alt=""/>
                    <p className="noData-text">还没有商品，快去添加购物车吧~</p>
                    </div>}
            </Layout>
        )
    }
}

export default Cart;