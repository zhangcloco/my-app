import React from 'react'
import { connect } from 'react-redux'
import {log_in} from '../../action/login.js'

import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:null,
            password:null
        }
    }


    goLogin() {
        if(!this.state.password || !this.state.username || !this.state.password.replace(/\s/g,'') || !this.state.username.replace(/\s/g,'')){
 			alert("请输入用户名和密码")
 			return
         }
         
         const { dispatch } = this.props
         dispatch(log_in({
             username:this.state.username,
 			password:this.state.password
         }))
    }


    render () {
        return (
            <div className="login-box">
		        <p><input placeholder="Enter your username" type="text" onInput={(e)=>{this.setState({username:e.target.value})}} /></p>
		        <p><input placeholder="Enter your password" type="password" onInput={(e)=>{this.setState({password:e.target.value})}}/></p>
		        <p><button className="login-btn" onClick={this.goLogin.bind(this)}>{this.props.loginstate === 0 ? '登录' :'正在登录'}</button></p>
                
            </div>
        )
    }
}

function mapStateToProps(userinfo) {
    let {login} = userinfo
    return login
}

export default connect(mapStateToProps)(Login)