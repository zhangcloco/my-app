import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import home from "../page/home/home"
import passenger from "../page/passenger/passenger"
import psgInfo from "../page/passenger/psgInfo"
import myRouter from "../page/myRouter/myRouter"
// import myWeather from "../page/myWeather/myWeather"
import login from "../page/login/login"
import user from "../page/user/user"

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={home}/>
                    <Route path="/Passenger" component={passenger} />
                    <Route path="/Passenger/PsgInfo" component={psgInfo} />
                    <Route path="/myRouter" component={myRouter} />
                    {/* <Route path="/weather" component={myWeather} /> */}
                    <Route path="/login" component={login} />
                    <Route path="/user" component={user} />
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}