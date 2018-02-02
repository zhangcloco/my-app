import React from 'react'
import {connect} from 'react-redux'
import {log_state} from '../../action/login'
import {log_out} from '../../action/login'

import Menu from '../../components/menu/menu'


import './userInfo.css'

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        // const {dispatch} = this.props
        // dispatch(log_state())
        // console.log(this.props)
    }

    logout() {
        const {dispatch} = this.props
        dispatch(log_out())
    }

    toPsg() {
        console.log("1")
    }

    render() {
        return (
            <div className="user-box">
                <p>你好，{this.props.username}</p>
                <Menu />
                <button className="user-btn" onClick={this.logout.bind(this)}>注销</button>
            </div>
        )
    }
}

function mapStateToProps(userInfo) {
    console.log(userInfo)
    let {login} = userInfo
    return login
}

export default connect(mapStateToProps)(UserInfo)