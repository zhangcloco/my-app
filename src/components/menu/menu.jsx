import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu-box">
                <p className="menu-ul clear">
                    <Link to="/weather">天气</Link>
                    <Link to="/myRouter">路由</Link>
                    <Link to="/login">登录</Link>
                    <Link to="/Passenger">旅客</Link>
                </p>
            </div>
        )
    }
}