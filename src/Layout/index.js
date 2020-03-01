import React, { Component } from "react";
import BottomNav from "../component/BottomNav";

export default class PageLayout extends Component {
    render() {
        const { children,_className} = this.props;
        return (
            <div className={_className} >
                {children}
                <BottomNav />
            </div>
        );
    }
}